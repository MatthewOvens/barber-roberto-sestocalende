/* ============================================================
   HAIR STUDIO di Menzaghi Roberto — interactions
   Vanilla JS, no dependencies. Progressive enhancement:
   the page is fully readable and navigable without this file.
   ============================================================ */
(function () {
  "use strict";

  var $  = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };
  var t  = function (key) { return window.I18N.t(key); };
  var REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ══════════════ 1. BOOT ══════════════ */
  window.I18N.boot();
  var thisYear = new Date().getFullYear();
  $("#year").textContent = thisYear;
  /* il salone ha aperto nel 1989: l'eta' si calcola, non si scrive a mano */
  $("#years").textContent = thisYear - 1989;

  /* ══════════════ 2. LANGUAGE SWITCHER ══════════════ */
  $$("[data-lang]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var lang = btn.getAttribute("data-lang");
      if (lang === window.I18N.lang) return;
      window.I18N.setLang(lang);
      showToast(t("toast.lang"));
    });
  });

  document.addEventListener("langchange", function () {
    markToday();
    if (booking.date) renderSlots(booking.date);   // day names / labels
    if (booking.step === 2) renderRecap($("#recap"));
    clearAllErrors();
  });

  /* ══════════════ 3. HEADER + MOBILE NAV ══════════════ */
  var header = $("#header");
  var nav = $("#nav");
  var burger = $("#burger");

  var onScrollHeader = function () {
    header.classList.toggle("is-stuck", window.scrollY > 8);
  };
  onScrollHeader();
  window.addEventListener("scroll", onScrollHeader, { passive: true });

  function closeNav() {
    nav.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
    burger.setAttribute("aria-label", t("a11y.openMenu"));
  }

  burger.addEventListener("click", function () {
    var open = !nav.classList.contains("is-open");
    if (open) {
      nav.style.setProperty("--nav-top", Math.round(header.getBoundingClientRect().bottom) + "px");
      nav.classList.add("is-open");
      burger.setAttribute("aria-expanded", "true");
      burger.setAttribute("aria-label", t("a11y.closeMenu"));
    } else {
      closeNav();
    }
  });

  $$("#nav a").forEach(function (a) { a.addEventListener("click", closeNav); });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nav.classList.contains("is-open")) { closeNav(); burger.focus(); }
  });

  /* active section in nav */
  var navLinks = $$("#nav a[href^='#']");
  var sections = navLinks
    .map(function (a) { return document.getElementById(a.getAttribute("href").slice(1)); })
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    var secObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (a) {
          a.classList.toggle("is-active", a.getAttribute("href") === "#" + entry.target.id);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { secObserver.observe(s); });
  }

  /* ══════════════ 4. SCROLL REVEAL ══════════════ */
  var revealables = $$(".reveal");
  if (REDUCED || !("IntersectionObserver" in window)) {
    revealables.forEach(function (el) { el.classList.add("is-in"); });
  } else {
    var groups = new Map();
    var revObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var parent = el.parentElement;
        var i = groups.get(parent) || 0;
        groups.set(parent, i + 1);
        el.style.setProperty("--reveal-delay", Math.min(i * 60, 300) + "ms");
        el.classList.add("is-in");
        obs.unobserve(el);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    revealables.forEach(function (el) { revObserver.observe(el); });
  }

  /* ══════════════ 5. MOBILE STICKY CTA ══════════════ */
  var mobileCta = $("#mobileCta");
  var showAfter = 520;
  var onScrollCta = function () {
    mobileCta.classList.toggle("is-visible", window.scrollY > showAfter);
  };
  onScrollCta();
  window.addEventListener("scroll", onScrollCta, { passive: true });

  /* ══════════════ 6. OPENING HOURS — highlight today ══════════════ */
  var DAY_KEYS = ["day.sun", "day.mon", "day.tue", "day.wed", "day.thu", "day.fri", "day.sat"];
  function markToday() {
    var rows = $$(".hours tr");
    if (!rows.length) return;
    var todayKey = DAY_KEYS[new Date().getDay()];
    rows.forEach(function (tr) {
      var th = $("th", tr);
      tr.classList.toggle("is-today", !!th && th.getAttribute("data-i18n") === todayKey);
    });
  }
  markToday();

  /* ══════════════ 7. TOAST ══════════════ */
  var toastEl = $("#toast");
  var toastTimer = null;
  function showToast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove("is-visible"); }, 4000);
  }

  /* ══════════════ 8. LIGHTBOX ══════════════ */
  var lightbox = $("#lightbox");
  var lbImg = $("#lightboxImg");
  var lbCap = $("#lightboxCap");
  var lbTriggers = $$("[data-lightbox]");
  var lbIndex = 0;
  var lbOpener = null;

  /* le foto del salone sono servite in locale e gia' alla loro risoluzione
     massima: non c'e' una versione piu' grande da chiedere */
  function bigSrc(src) { return src; }

  function showLb(i) {
    if (!lbTriggers.length) return;
    lbIndex = (i + lbTriggers.length) % lbTriggers.length;
    var img = $("img", lbTriggers[lbIndex]);
    lbImg.src = bigSrc(img.currentSrc || img.src);
    lbImg.alt = img.alt;
    lbCap.textContent = img.alt;
    capNativeWidth();
  }

  /* Nessuno scatto va mostrato piu' grande della sua risoluzione reale:
     in galleria convivono foto da 400px e da 1170px. */
  function capNativeWidth() {
    var apply = function () {
      if (lbImg.naturalWidth) lbImg.style.setProperty("--nat-w", lbImg.naturalWidth + "px");
    };
    if (lbImg.complete) apply(); else lbImg.addEventListener("load", apply, { once: true });
  }

  lbTriggers.forEach(function (btn, i) {
    btn.addEventListener("click", function () {
      lbOpener = btn;
      showLb(i);
      if (typeof lightbox.showModal === "function") lightbox.showModal();
    });
  });

  $("[data-lb-prev]").addEventListener("click", function () { showLb(lbIndex - 1); });
  $("[data-lb-next]").addEventListener("click", function () { showLb(lbIndex + 1); });
  $("[data-close-lightbox]").addEventListener("click", function () { lightbox.close(); });

  lightbox.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft")  { e.preventDefault(); showLb(lbIndex - 1); }
    if (e.key === "ArrowRight") { e.preventDefault(); showLb(lbIndex + 1); }
  });
  lightbox.addEventListener("close", function () {
    lbImg.src = "";
    if (lbOpener) { lbOpener.focus(); lbOpener = null; }
  });
  /* click on the backdrop area closes */
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) lightbox.close();
  });

  /* ══════════════ 9. BOOKING ══════════════ */
  var modal   = $("#bookingModal");
  var form    = $("#bookingForm");
  var stepsEl = $("#steps");
  var slotsEl = $("#slots");
  var dateEl  = $("#bkDate");
  var svcEl   = $("#bkService");
  var submitBtn = $("#bkSubmit");

  var booking = { step: 1, date: "", time: "" };
  var modalOpener = null;

  /* — open / close — */
  function openBooking(preselect) {
    if (preselect) {
      var opt = $$("option", svcEl).some(function (o) { return o.value === preselect; });
      if (opt) svcEl.value = preselect;
    }
    if (typeof modal.showModal === "function") modal.showModal();
    else { modal.setAttribute("open", ""); }

    goToStep(1);
    /* focus the first field that still needs an answer */
    setTimeout(function () { (svcEl.value ? dateEl : svcEl).focus(); }, 60);
  }

  $$("[data-open-booking]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      modalOpener = btn;
      closeNav();
      openBooking(btn.getAttribute("data-service"));
    });
  });

  $$("[data-close-booking]").forEach(function (btn) {
    btn.addEventListener("click", function () { modal.close(); });
  });

  modal.addEventListener("click", function (e) {
    if (e.target === modal) modal.close();   /* backdrop click */
  });

  modal.addEventListener("close", function () {
    resetBooking();
    if (modalOpener) { modalOpener.focus(); modalOpener = null; }
  });

  function resetBooking() {
    form.reset();
    booking = { step: 1, date: "", time: "" };
    clearAllErrors();
    slotsEl.innerHTML = '<p class="slots__empty">' + t("book.pickDateFirst") + "</p>";
    submitBtn.classList.remove("is-loading");
    submitBtn.disabled = false;
    stepsEl.classList.remove("is-hidden");
    goToStep(1);
  }

  /* — steps — */
  function goToStep(n) {
    booking.step = n;
    $$(".bform__step", form).forEach(function (s) {
      s.classList.toggle("is-active", Number(s.getAttribute("data-step")) === n);
    });
    $$(".steps__item", stepsEl).forEach(function (item) {
      var i = Number(item.getAttribute("data-step"));
      item.classList.toggle("is-current", i === n);
      item.classList.toggle("is-done", i < n);
    });
    if (n === 3) stepsEl.classList.add("is-hidden");
    if (n === 2) renderRecap($("#recap"));
    var panel = $(".modal__panel");
    if (panel) panel.scrollTop = 0;
  }

  $("#toStep2").addEventListener("click", function () {
    if (!validateStep1()) return;
    goToStep(2);
    setTimeout(function () { $("#bkName").focus(); }, 60);
  });

  $("#toStep1").addEventListener("click", function () {
    goToStep(1);
    setTimeout(function () { dateEl.focus(); }, 60);
  });

  /* — date constraints: closed Sunday (0) and Monday (1) — */
  function ymd(d) {
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }
  var today = new Date(); today.setHours(0, 0, 0, 0);
  dateEl.min = ymd(today);
  var maxDate = new Date(today); maxDate.setMonth(maxDate.getMonth() + 4);
  dateEl.max = ymd(maxDate);

  function parseDate(value) {
    var parts = String(value).split("-");
    if (parts.length !== 3) return null;
    var d = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
    return isNaN(d.getTime()) ? null : d;
  }

  /* Orari reali del salone (0 = domenica). Martedi'-giovedi' con pausa
     pranzo, venerdi' e sabato orario continuato. Lunedi' e domenica chiusi. */
  var SCHEDULE = {
    2: [["09:00", "12:30"], ["14:00", "18:30"]],
    3: [["09:00", "12:30"], ["14:00", "18:30"]],
    4: [["09:00", "12:30"], ["14:00", "18:30"]],
    5: [["08:30", "18:30"]],
    6: [["08:30", "17:30"]]
  };

  function toMinutes(hhmm) {
    var parts = hhmm.split(":");
    return Number(parts[0]) * 60 + Number(parts[1]);
  }
  function toLabel(minutes) {
    return String(Math.floor(minutes / 60)).padStart(2, "0") + ":" + String(minutes % 60).padStart(2, "0");
  }

  /* Stable pseudo-availability so the same date always shows the same slots. */
  function isTaken(dateStr, time) {
    var s = dateStr + time, h = 0;
    for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) % 100000;
    return h % 7 < 2;
  }

  function renderSlots(dateStr) {
    var d = parseDate(dateStr);
    slotsEl.innerHTML = "";
    var ranges = d && SCHEDULE[d.getDay()];
    if (!ranges) {
      slotsEl.innerHTML = '<p class="slots__empty">' + t("book.pickDateFirst") + "</p>";
      return;
    }

    var free = 0;
    var frag = document.createDocumentFragment();

    ranges.forEach(function (range) {
      var endMin = toMinutes(range[1]) - 30;   /* l'ultimo appuntamento parte mezz'ora prima */
      for (var m = toMinutes(range[0]); m <= endMin; m += 30) {
        var time = toLabel(m);
        var taken = isTaken(dateStr, time);
        if (!taken) free++;

        var li = document.createElement("div");
        li.className = "slot";

        var input = document.createElement("input");
        input.type = "radio";
        input.name = "time";
        input.value = time;
        input.id = "slot-" + time.replace(":", "");
        input.disabled = taken;
        input.setAttribute("aria-label", taken ? time + " — " + t("book.slotBooked") : time);
        if (!taken && booking.time === time) input.checked = true;

        /* the transparent input covers the whole tile, so the span is
           purely the visual target — the aria-label carries the name */
        var span = document.createElement("span");
        span.textContent = time;

        li.appendChild(input);
        li.appendChild(span);
        frag.appendChild(li);
      }
    });

    if (!free) {
      slotsEl.innerHTML = '<p class="slots__empty">' + t("book.noSlots") + "</p>";
      return;
    }
    slotsEl.appendChild(frag);
  }

  dateEl.addEventListener("change", function () {
    booking.date = dateEl.value;
    booking.time = "";
    clearError($("#bkTimeErr"), true);
    /* surfaces "we're closed that day" straight away instead of an empty grid */
    if (dateEl.value) checkDate(); else clearError(dateEl);
    renderSlots(booking.date);
  });

  slotsEl.addEventListener("change", function (e) {
    if (e.target && e.target.name === "time") {
      booking.time = e.target.value;
      clearError($("#bkTimeErr"), true);
    }
  });

  /* — recap — */
  function renderRecap(target) {
    if (!target) return;
    var svcLabel = svcEl.selectedIndex > 0 ? svcEl.options[svcEl.selectedIndex].textContent.trim() : "—";
    var when = "—";
    var d = parseDate(booking.date);
    if (d) {
      var fmt = new Intl.DateTimeFormat(window.I18N.locale(), { weekday: "long", day: "numeric", month: "long" });
      when = fmt.format(d);
      when = when.charAt(0).toUpperCase() + when.slice(1);
      if (booking.time) when += " · " + booking.time;
    }

    target.innerHTML = "";
    var dl = document.createElement("dl");
    dl.style.display = "grid";
    dl.style.gap = "var(--space-2)";
    [[t("recap.service"), svcLabel], [t("recap.when"), when]]
      .forEach(function (row) {
        var wrap = document.createElement("div");
        wrap.className = "recap__row";
        var dt = document.createElement("dt"); dt.textContent = row[0];
        var dd = document.createElement("dd"); dd.textContent = row[1];
        wrap.appendChild(dt); wrap.appendChild(dd);
        dl.appendChild(wrap);
      });
    target.appendChild(dl);
  }

  /* — validation helpers — */
  function fieldOf(el) { return el.closest ? el.closest(".field") : null; }

  function setError(el, msgKey, errId) {
    var errEl = errId ? $(errId) : $("#" + el.id + "Err");
    var wrap = fieldOf(errEl || el);
    if (errEl) { errEl.textContent = t(msgKey); errEl.hidden = false; }
    if (wrap) wrap.classList.add("has-error");
    if (el && el.setAttribute) el.setAttribute("aria-invalid", "true");
  }

  function clearError(el, isErrNode) {
    var errEl = isErrNode ? el : $("#" + el.id + "Err");
    var wrap = fieldOf(errEl || el);
    if (errEl) { errEl.textContent = ""; errEl.hidden = true; }
    if (wrap) wrap.classList.remove("has-error");
    if (!isErrNode && el && el.removeAttribute) el.removeAttribute("aria-invalid");
  }

  function clearAllErrors() {
    $$(".err", form).forEach(function (e) { e.textContent = ""; e.hidden = true; });
    $$(".field.has-error", form).forEach(function (f) { f.classList.remove("has-error"); });
    $$("[aria-invalid]", form).forEach(function (f) { f.removeAttribute("aria-invalid"); });
  }

  function focusFirstError() {
    var firstVisible = $$(".err", form).filter(function (e) { return !e.hidden; })[0];
    if (!firstVisible) return;
    var wrap = fieldOf(firstVisible);
    var control = wrap ? $("input:not([type=radio]), select, textarea, input[type=radio]:not(:disabled)", wrap) : null;
    (control || firstVisible).focus({ preventScroll: false });
  }

  /* — per-field rules — */
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/;

  function checkService() {
    if (!svcEl.value) { setError(svcEl, "err.service"); return false; }
    clearError(svcEl); return true;
  }

  function checkDate() {
    if (!dateEl.value) { setError(dateEl, "err.date"); return false; }
    var d = parseDate(dateEl.value);
    if (!d) { setError(dateEl, "err.date"); return false; }
    var t0 = new Date(); t0.setHours(0, 0, 0, 0);
    if (d < t0) { setError(dateEl, "err.datePast"); return false; }
    if (!SCHEDULE[d.getDay()]) { setError(dateEl, "err.dateClosed"); return false; }
    clearError(dateEl); return true;
  }

  function checkTime() {
    var checked = $("input[name=time]:checked", slotsEl);
    if (!checked) { setError(null, "err.time", "#bkTimeErr"); return false; }
    clearError($("#bkTimeErr"), true); return true;
  }

  function checkName() {
    var el = $("#bkName");
    if (el.value.trim().length < 2) { setError(el, "err.name"); return false; }
    clearError(el); return true;
  }

  function checkPhone() {
    var el = $("#bkPhone");
    var digits = el.value.replace(/[^\d]/g, "");
    if (digits.length < 8) { setError(el, "err.phone"); return false; }
    clearError(el); return true;
  }

  function checkEmail() {
    var el = $("#bkEmail");
    if (!EMAIL_RE.test(el.value.trim())) { setError(el, "err.email"); return false; }
    clearError(el); return true;
  }

  function checkPrivacy() {
    var el = $("#bkPrivacy");
    if (!el.checked) { setError(el, "err.privacy"); return false; }
    clearError(el); return true;
  }

  function validateStep1() {
    /* evaluate all so the user sees every problem at once */
    var ok = [checkService(), checkDate(), checkTime()].every(Boolean);
    if (!ok) focusFirstError();
    return ok;
  }

  function validateStep2() {
    var ok = [checkName(), checkPhone(), checkEmail(), checkPrivacy()].every(Boolean);
    if (!ok) focusFirstError();
    return ok;
  }

  /* validate on blur, never on keystroke */
  svcEl.addEventListener("change", checkService);
  dateEl.addEventListener("blur", function () { if (dateEl.value) checkDate(); });
  $("#bkName").addEventListener("blur", function () { if ($("#bkName").value) checkName(); });
  $("#bkPhone").addEventListener("blur", function () { if ($("#bkPhone").value) checkPhone(); });
  $("#bkEmail").addEventListener("blur", function () { if ($("#bkEmail").value) checkEmail(); });
  $("#bkPrivacy").addEventListener("change", function () { if ($("#bkPrivacy").checked) clearError($("#bkPrivacy")); });

  /* — submit — */
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!validateStep1()) { goToStep(1); focusFirstError(); return; }
    if (!validateStep2()) return;

    submitBtn.classList.add("is-loading");
    submitBtn.disabled = true;

    /* Demo only: nessun backend. Sostituire questo setTimeout con una
       fetch() verso l'endpoint del salone o verso un gestionale
       (Treatwell, Fresha, Google Reserve). Finche' resta cosi', l'avviso
       .bform__demo nella modale deve restare visibile. */
    setTimeout(function () {
      submitBtn.classList.remove("is-loading");
      submitBtn.disabled = false;
      renderRecap($("#doneRecap"));
      goToStep(3);
      showToast(t("toast.booked"));
      /* move focus into the confirmation so screen readers land on it */
      var done = $(".done__title");
      if (done) {
        done.setAttribute("tabindex", "-1");
        done.focus();
      }
    }, 1100);
  });

  /* keep <dialog> Esc behaviour but confirm nothing is lost silently:
     a half-filled booking is cheap to redo, so we simply reset on close. */
})();
