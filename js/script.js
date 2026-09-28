// 모바일 메뉴 토글
(function () {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("siteNav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
})();

// 메인 화면 카테고리 선택 (원형 사진/아이콘 + 단일 설명 밴드)
(function () {
  const items = document.querySelectorAll(".category-item");
  if (!items.length) return;
  const panels = document.querySelectorAll(".category-panel");
  items.forEach((item) => {
    item.addEventListener("click", () => {
      items.forEach((i) => i.classList.remove("is-active"));
      item.classList.add("is-active");
      const target = item.getAttribute("data-target");
      panels.forEach((panel) => {
        panel.classList.toggle("is-active", panel.id === "panel-" + target);
      });
    });
  });
})();

// 맨 위로 버튼
(function () {
  const btn = document.getElementById("scrollTopBtn");
  if (!btn) return;
  window.addEventListener("scroll", () => {
    btn.classList.toggle("is-visible", window.scrollY > 500);
  });
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();
