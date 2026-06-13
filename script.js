const yearNode = document.getElementById("year");
const tabButtons = document.querySelectorAll("[data-tab-target]");
const tabPanels = document.querySelectorAll(".tab-panel");

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

for (const button of tabButtons) {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-tab-target");

    if (!targetId) {
      return;
    }

    for (const panel of tabPanels) {
      panel.classList.toggle("is-visible", panel.id === targetId);
    }

    for (const item of tabButtons) {
      const isActive = item === button;
      item.classList.toggle("is-active", isActive);
      item.classList.toggle("button-primary", isActive);
      item.classList.toggle("button-secondary", !isActive);
      item.setAttribute("aria-selected", String(isActive));
    }
  });
}
