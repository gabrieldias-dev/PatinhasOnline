// let menu = document.querySelector(".menuTelasMenores");

// function openMenu() {
//   menu.style.transform = "translateX(0%)";
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
//   document.body.style.overflow = "hidden";
// }

// function closedMenu() {
//   menu.style.transform = "translateX(100%)";
//   document.body.style.overflow = "overlay";
// }

function ajustarSlidesPorViewport() {
  let elemento = document.querySelector("#swiperAnimais");
  if (window.innerWidth < 768) {
    elemento.setAttribute("slides-per-view", "2");
  } else {
    elemento.setAttribute("slides-per-view", "3");
  }
}

// Chamar a função quando a página carregar e quando a janela for redimensionada
window.onload = ajustarSlidesPorViewport;
window.addEventListener("resize", ajustarSlidesPorViewport);