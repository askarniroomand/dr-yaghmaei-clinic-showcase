/* Public UI demo helpers — no backend */
(function () {
  'use strict';

  function toast(msg) {
    var el = document.getElementById('demoToast');
    if (!el) {
      el = document.createElement('div');
      el.id = 'demoToast';
      el.className = 'demo-toast';
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(el._t);
    el._t = setTimeout(function () {
      el.classList.remove('show');
    }, 2800);
  }

  document.querySelectorAll('[data-demo-submit], form.demo-form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      toast('🔒 نسخه دمو — ارسال واقعی غیرفعال است. سورس کامل خصوصی است.');
    });
  });

  document.querySelectorAll('[data-demo-action]').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      toast(btn.getAttribute('data-demo-action') || '🔒 فقط دموی UI — بدون بک‌اند');
    });
  });

  // Fake appointment preview on date field focus/change
  var dateInput = document.getElementById('jalaliDate');
  var preview = document.getElementById('apptPreview');
  var submitBtn = document.getElementById('submitBtn');
  if (dateInput && preview) {
    function updatePreview() {
      var v = dateInput.value.trim();
      if (!v) {
        preview.textContent = 'ابتدا تاریخ را انتخاب کنید';
        if (submitBtn) submitBtn.disabled = true;
        return;
      }
      preview.textContent = 'نوبت نمونه: ' + v + ' · ساعت ۰۹:۱۵ · شماره صف ۱۲';
      if (submitBtn) submitBtn.disabled = false;
    }
    dateInput.addEventListener('change', updatePreview);
    dateInput.addEventListener('input', updatePreview);
    // Demo: allow typing a sample date
    dateInput.removeAttribute('readonly');
    dateInput.placeholder = 'مثلاً ۱۴۰۵/۰۴/۲۵';
  }
})();
