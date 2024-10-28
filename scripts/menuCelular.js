let menu = document.querySelector(".menuTelasMenores");
let btnajuda = document.querySelector(".btn-ajude-causa");


function openMenu() {
  menu.style.transform = "translateX(0%)";
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  document.body.style.overflow = "hidden";
  btnajuda.style.zIndex = "0";
}

function closedMenu() {
  menu.style.transform = "translateX(100%)";
  document.body.style.overflow = "overlay";
  btnajuda.style.zIndex = "10";
}
