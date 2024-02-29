function proxima() {
  let container1 = document.querySelector(".container-card1");
  let container2 = document.querySelector(".container-card2");
  const btnProxima = document.querySelector(".proxima");
  const btnAnterior = document.querySelector(".anterior");

  btnProxima.style.color = "#a5c21387";
  btnAnterior.style.color = "#a4c213";
  btnProxima.disabled = true;
  btnAnterior.disabled = false;
  container2.style.right = "0%";
  container1.style.left = "-100%";
}

function anterior() {
  let container1 = document.querySelector(".container-card1");
  let container2 = document.querySelector(".container-card2");
  const btnProxima = document.querySelector(".proxima");
  const btnAnterior = document.querySelector(".anterior");

  btnProxima.style.color = "#a4c213";
  btnAnterior.style.color = "#a5c21387";
  btnProxima.disabled = false;
  btnAnterior.disabled = true;
  container2.style.right = "-100%";
  container1.style.left = "0%";
}

// POP UP CARDS

 
// document.querySelectorAll(".box-card").addEventListener("click", function () {
//   let middleOfPage =
//     document.body.scrollHeight / 2 - window.innerHeight / 2 - 520;
//   let popUpAnimais = document.querySelector(".popUp-Animais");

//   popUpAnimais.style = "display: flex";
//   window.scrollTo(0, middleOfPage);
//   document.body.classList.add("blur");
// });

// function abrir() {
//   let middleOfPage =
//     document.body.scrollHeight / 2 - window.innerHeight / 2 - 520;
//   let cardAnimal = document.querySelector("#adina");
//   let popUpAnimais = document.querySelector(".popUp-Animais");

//   popUpAnimais.style = "display: flex";
//   window.scrollTo(0, middleOfPage);
// }

function fechar() {
  let popUpAnimais = document.querySelector(".popUp-Animais");

  popUpAnimais.style = "display: none";
  document.body.classList.remove("blur");
  // document.body.classList.remove("blur");
}
