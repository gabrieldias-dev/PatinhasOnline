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

// Obtém todos os elementos com a classe 'card'
var cards = document.querySelectorAll(".boxCard");
let fotoAnimal = document.querySelector(".imagem-animal");
let iconeSexo = document.querySelector(".sexo-animal");
let nomeAnimal = document.querySelector("#nomeAnimal");
let nascimentoAnimal = document.querySelector("#idadeAnimal");
let idadeAnimal = document.querySelector("#idadeAnimal");
let sexoAnimal = document.querySelector("#sexoAnimal");
let corAnimal = document.querySelector("#corAnimal");
let porteAnimal = document.querySelector("#porteAnimal");
let paragrafoOne = document.querySelector("#paragrafoOne");
let paragrafoTwo = document.querySelector("#paragrafoTwo");
let paragrafoThree = document.querySelector("#paragrafoThree");

// Adiciona um event listener a cada card
cards.forEach(function (boxCard) {
  boxCard.addEventListener("click", function () {
    let middleOfPage =
      document.body.scrollHeight / 2 - window.innerHeight / 2 - 520;
    let popUpAnimais = document.querySelector(".popUp-Animais");

    let cardId = boxCard.dataset.id;

   
    switch (cardId) {

      case "adina":
        fotoAnimal.src = "../assets/AnimaisParaAdotar/Adina.png";
        iconeSexo.src = "../assets/icon/femea.svg";
        nomeAnimal.innerHTML = "Adina";
        nascimentoAnimal.innerHTML = "2023";
        idadeAnimal.innerHTML = "Aprox: 11 meses";
        sexoAnimal.innerHTML = "Sexo: Feminino";
        corAnimal.innerHTML = "Cor: Preto";
        porteAnimal.innerHTML = "Porte: Médio";

        break;

      case "auro":
        fotoAnimal.src = "../assets/AnimaisParaAdotar/Auro.jpg";
        iconeSexo.src = "../assets/icon/macho.svg";
        nomeAnimal.innerHTML = "Auro";
        nascimentoAnimal.innerHTML = "2023";
        idadeAnimal.innerHTML = "Aprox: 11 meses";
        sexoAnimal.innerHTML = "Sexo: Masculino";
        corAnimal.innerHTML = "Cor: Caramelo";
        porteAnimal.innerHTML = "Porte: Médio";

        break;

      case "amora":
        // Configure as informações correspondentes para o card 2
        fotoAnimal.src = "../assets/AnimaisParaAdotar/Amora.jpg";
        iconeSexo.src = "../assets/icon/femea.svg";
        nomeAnimal.innerHTML = "Amora";
        nascimentoAnimal.innerHTML = "2021";
        idadeAnimal.innerHTML = "Aprox: 3 anos";
        sexoAnimal.innerHTML = "Sexo: Feminino";
        corAnimal.innerHTML = "Cor: Caramelo";
        porteAnimal.innerHTML = "Porte: Médio";

        break;

      default:
        console.error("ID do card não reconhecido");
        return;
    }

    popUpAnimais.style = "display: flex";
    window.scrollTo(0, middleOfPage);
    document.body.classList.add("blur");
  });
});

function fechar() {
  let popUpAnimais = document.querySelector(".popUp-Animais");

  popUpAnimais.style = "display: none";
  document.body.classList.remove("blur");
}
