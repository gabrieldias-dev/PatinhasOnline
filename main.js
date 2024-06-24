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
  let carrosselAnimais = document.querySelector("#swiperAnimais");
  let historiasFelizes = document.querySelector("#swiperHistorias");
  if (window.innerWidth < 768) {
    carrosselAnimais.setAttribute("slides-per-view", "2");
    historiasFelizes.setAttribute("navigation", "false");
  } else {
    carrosselAnimais.setAttribute("slides-per-view", "3");
    historiasFelizes.setAttribute("navigation", "true");
  }
}

// Chamar a função quando a página carregar e quando a janela for redimensionada
window.onload = ajustarSlidesPorViewport;
window.addEventListener("resize", ajustarSlidesPorViewport);