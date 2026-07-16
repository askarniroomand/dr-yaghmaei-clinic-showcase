// Admin-specific scripts
document.addEventListener('DOMContentLoaded', function () {
    if (window.location.pathname.includes('/admin/queue')) {
        setInterval(function () {
            if (typeof window.refreshQueue === 'function') {
                window.refreshQueue();
            }
        }, 15000);
    }
});

function apptServiceCsrf() {
    return document.getElementById('queuePage')?.dataset.csrf
        || document.querySelector('input[name="_csrf"]')?.value
        || '';
}

async function postApptService(url, extra) {
    const fd = new FormData();
    fd.append('_csrf', apptServiceCsrf());
    fd.append('ajax', '1');
    Object.entries(extra || {}).forEach(function (pair) {
        fd.append(pair[0], pair[1]);
    });
    const res = await fetch(url, {
        method: 'POST',
        body: fd,
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
    });
    return res.json();
}

document.addEventListener('click', async function (e) {
    const addBtn = e.target.closest('.appt-svc-add');
    if (addBtn) {
        e.preventDefault();
        const apptId = addBtn.dataset.apptId;
        const select = document.querySelector('.appt-svc-select[data-appt-id="' + apptId + '"]');
        const serviceId = select?.value;
        if (!serviceId) {
            alert('لطفاً یک خدمت انتخاب کنید.');
            return;
        }
        addBtn.disabled = true;
        try {
            const data = await postApptService('/admin/queue/' + apptId + '/services', { service_id: serviceId });
            if (!data.success) {
                alert(data.message || 'خطا در افزودن خدمت');
                return;
            }
            if (typeof window.refreshQueue === 'function') {
                window.refreshQueue();
            } else {
                location.reload();
            }
        } catch (err) {
            alert('خطا در ارتباط با سرور');
        } finally {
            addBtn.disabled = false;
        }
        return;
    }

    const rmBtn = e.target.closest('.appt-svc-remove');
    if (rmBtn) {
        e.preventDefault();
        if (!confirm('این خدمت از نوبت حذف شود؟')) {
            return;
        }
        const apptId = rmBtn.dataset.apptId;
        const serviceId = rmBtn.dataset.serviceId;
        try {
            const data = await postApptService(
                '/admin/queue/' + apptId + '/services/' + serviceId + '/remove',
                {}
            );
            if (!data.success) {
                alert(data.message || 'خطا در حذف خدمت');
                return;
            }
            if (typeof window.refreshQueue === 'function') {
                window.refreshQueue();
            } else {
                location.reload();
            }
        } catch (err) {
            alert('خطا در ارتباط با سرور');
        }
    }
});
