const changeTabs = (tabTarget) => {
  const targetTabContainer = document.querySelector(
    `[data-tab-container="${tabTarget}"]`
  );

  if (!targetTabContainer) return;

  const targetTabItem = document.querySelector(
    `[data-tab-item="${tabTarget}"]`
  );

  const allTabsItems = document.querySelectorAll(`[data-tab-item]`);

  const allTabsContainers = document.querySelectorAll(`[data-tab-container]`);

  allTabsItems.forEach((container) => {
    container.setAttribute("data-active", "false");
  });

  allTabsContainers.forEach((container) => {
    container.setAttribute("data-active", "false");
  });

  targetTabItem.setAttribute("data-active", "true");
  targetTabContainer.setAttribute("data-active", "true");
};

const handleMobileMenu = () => {
  console.log("aqui?");
  const navbar = document.getElementById("navbar");

  const status = navbar.dataset.open;

  if (status === "false") {
    navbar.dataset.open = "true";
    return;
  }

  navbar.dataset.open = "false";
};
