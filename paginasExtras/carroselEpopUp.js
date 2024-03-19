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

var cards = document.querySelectorAll(".boxCard");
let fotoAnimal = document.querySelector(".imagem-animal");
let iconeSexo = document.querySelector(".sexo-animal");
let nomeAnimal = document.querySelector("#nomeAnimal");
let nascimentoAnimal = document.querySelector("#nascimentoAnimal");
let idadeAnimal = document.querySelector("#idadeAnimal");
let sexoAnimal = document.querySelector("#sexoAnimal");
let corAnimal = document.querySelector("#corAnimal");
let porteAnimal = document.querySelector("#porteAnimal");
let sobre = document.querySelector("#sobre");
let paragrafoOne = document.querySelector("#paragrafoOne");
let paragrafoTwo = document.querySelector("#paragrafoTwo");
let paragrafoThree = document.querySelector("#paragrafoThree");

// Adiciona um event listener a cada card
cards.forEach(function (boxCard) {
  boxCard.addEventListener("click", function () {
    let popUp = document.querySelector(".popUp-Animais");
    let alturaDoPopUp = popUp.offsetHeight;

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
        sobre.innerHTML = "a Adina";
        paragrafoOne.innerHTML = "";
        paragrafoTwo.innerHTML = "";
        paragrafoThree.innerHTML = "";

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
        sobre.innerHTML = "o Auro";
        paragrafoOne.innerHTML = "";
        paragrafoTwo.innerHTML = "";
        paragrafoThree.innerHTML = "";

        break;

      case "amora":
        // Configure as informações correspondentes para o card 2
        fotoAnimal.src = "../assets/AnimaisParaAdotar/Amora.jpg";
        iconeSexo.src = "../assets/icon/femea.svg";
        nomeAnimal.innerHTML = "Amora";
        nascimentoAnimal.innerHTML = "Nasci: 2021";
        idadeAnimal.innerHTML = "Aprox: 3 anos";
        sexoAnimal.innerHTML = "Sexo: Feminino";
        corAnimal.innerHTML = "Cor: Caramelo";
        porteAnimal.innerHTML = "Porte: Médio";
        sobre.innerHTML = "a Amora";
        paragrafoOne.innerHTML =
          "Amora é uma cachorra de porte médio, uma vira-lata com personalidade própria. Com uma pelagem suave e olhos expressivos, ela exala curiosidade e lealdade.";
        paragrafoTwo.innerHTML =
          "Amora é tranquila e equilibrada, pronta para explorar o mundo ao seu redor com calma e    confiança. Sua saúde robusta e energia contagiante são características típicas de um vira-lata resiliente.";
        paragrafoThree.innerHTML =
          "Amora é tranquila e equilibrada, pronta para explorar o mundo ao seu redor com calma e  confiança. Sua saúde robusta e energia contagiante são características típicas de um vira-lata resiliente.";

        break;

      case "manguinho":
        fotoAnimal.src = "../assets/AnimaisParaAdotar/manguinho.jpg";
        iconeSexo.src = "../assets/icon/macho.svg";
        nomeAnimal.innerHTML = "Manguinho";
        nascimentoAnimal.innerHTML = "2016";
        idadeAnimal.innerHTML = "Aprox: 7 anos";
        sexoAnimal.innerHTML = "Sexo: Masculino";
        corAnimal.innerHTML = "Cor: Preto e branco";
        porteAnimal.innerHTML = "Porte: Médio/Grande";
        sobre.innerHTML = "o Manguinho";
        paragrafoOne.innerHTML =
          "Manguinho uma simpatia! Chegou com uma fratura já consolidada na pata, que não o impede de fazer nada, é apenas mais um charme para ele...hehe";
        paragrafoTwo.innerHTML =
          "Ele está a espera de seu grande dia, ir para um novo lar com uma famália amorosa!";
        paragrafoThree.innerHTML = "";

        break;

      case "jumanji":
        fotoAnimal.src = "../assets/AnimaisParaAdotar/jumanji.jpg";
        iconeSexo.src = "../assets/icon/macho.svg";
        nomeAnimal.innerHTML = "Jumanji";
        nascimentoAnimal.innerHTML = "2014";
        idadeAnimal.innerHTML = "Aprox: 9 anos";
        sexoAnimal.innerHTML = "Sexo: Masculino";
        corAnimal.innerHTML = "Cor: Rajado";
        porteAnimal.innerHTML = "Porte: Médio";
        sobre.innerHTML = "o Jumanji";
        paragrafoOne.innerHTML =
          "Um cão companheiro e muito amoroso quando se sente seguro. Muito gentil e carinhoso.Castrado, vacinado e vermifugado.";
        paragrafoTwo.innerHTML =
          "Ele está a espera de seu grande dia, ir para um novo lar com uma família amorosa!";
        paragrafoThree.innerHTML = "";

        break;

      case "cido":
        fotoAnimal.src = "../assets/AnimaisParaAdotar/cido.jpg";
        iconeSexo.src = "../assets/icon/macho.svg";
        nomeAnimal.innerHTML = "Cido";
        nascimentoAnimal.innerHTML = "2008";
        idadeAnimal.innerHTML = "Aprox: 16 anos";
        sexoAnimal.innerHTML = "Sexo: Masculino";
        corAnimal.innerHTML = "Cor: Dourado";
        porteAnimal.innerHTML = "Porte: Pequeno";
        sobre.innerHTML = "o Cido";
        paragrafoOne.innerHTML =
          "Esse olhar animado do Cido traduz bem o que ele é: um cão muito ativo e carente, que precisa de um lar e de uma família.";
        paragrafoTwo.innerHTML =
          "Ele adora um carinho, é muito meigo e você não vai se arrepender de dar uma segunda chance para ele!";
        paragrafoThree.innerHTML = "";

        break;

      default:
        window.alert(
          "Informações do nosso amiguinho estão sendo atualizadas, tente mais tarde (;"
        );
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
