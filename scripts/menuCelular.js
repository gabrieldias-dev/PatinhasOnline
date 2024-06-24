let menu = document.querySelector(".menuTelasMenores");

function openMenu() {
  menu.style.transform = "translateX(0%)";
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  document.body.style.overflow = "hidden";
}

function closedMenu() {
  menu.style.transform = "translateX(100%)";
  document.body.style.overflow = "overlay";
}
