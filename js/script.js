document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".menu-toggle");
  var sidebar = document.querySelector(".sidebar");

  if (toggle && sidebar) {
    toggle.addEventListener("click", function () {
      sidebar.classList.toggle("open");
    });
  }

  // Mark the current page's nav link as active.
  var path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".site-nav a").forEach(function (link) {
    var href = link.getAttribute("href");
    if (href === path || (path === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });

  // Theme toggle (light/dark/system). The initial data-theme attribute is
  // already set by the inline script in <head> to avoid a flash.
  var themeToggle = document.querySelector(".theme-toggle");
  var themeLabel = themeToggle ? themeToggle.querySelector(".theme-label") : null;

  function currentTheme() {
    return document.documentElement.getAttribute("data-theme") || "system";
  }

  function systemPrefersDark() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  function updateLabel() {
    if (!themeLabel) return;
    var t = currentTheme();
    themeLabel.textContent = t === "system" ? "Auto" : (t === "dark" ? "Dark" : "Light");
  }

  updateLabel();

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var t = currentTheme();
      var isDark = t === "dark" || (t === "system" && systemPrefersDark());
      var next = isDark ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      updateLabel();

      themeToggle.classList.remove("flip");
      // Force reflow so the animation restarts on repeated clicks.
      void themeToggle.offsetWidth;
      themeToggle.classList.add("flip");
    });

    themeToggle.addEventListener("animationend", function () {
      themeToggle.classList.remove("flip");
    });
  }
});
