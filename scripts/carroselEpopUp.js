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
        paragrafoOne.innerHTML =
          "Adina, uma adorável fêmea de porte médio, traz alegria e vitalidade onde quer que vá. Com seus olhos brilhantes e pelagem macia, ela é um verdadeiro raio de sol em qualquer ambiente.";
        paragrafoTwo.innerHTML =
          "Seu coração carinhoso transborda de amor, e ela sempre busca oportunidades para demonstrar afeto. Adina é uma companheira leal e uma amiga fiel, pronta para alegrar seus dias com brincadeiras divertidas e momentos de ternura.";
        paragrafoThree.innerHTML =
          " Sua presença é um lembrete constante de que a felicidade pode ser encontrada nas coisas mais simples da vida.";

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
        paragrafoOne.innerHTML =
          "Auro, um magnífico macho de porte médio com uma pelagem caramelo deslumbrante, é uma fonte inesgotável de alegria e amor. Com um temperamento gentil e uma personalidade afetuosa, ele ilumina qualquer ambiente com seu charme cativante.";
        paragrafoTwo.innerHTML =
          "Auro adora brincar e explorar o mundo ao seu redor, sempre com uma disposição brincalhona e um sorriso no rosto. Sua lealdade é incomparável, e ele está sempre pronto para oferecer conforto e companheirismo aos seus entes queridos. Com Auro por perto, cada dia é preenchido com momentos de felicidade e carinho.";
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

      case "balu":
        fotoAnimal.src = "../assets/AnimaisParaAdotar/balu.jpg";
        iconeSexo.src = "../assets/icon/macho.svg";
        nomeAnimal.innerHTML = "Balu";
        nascimentoAnimal.innerHTML = "Sem estimativa";
        idadeAnimal.innerHTML = "Adulto";
        sexoAnimal.innerHTML = "Sexo: Masculino";
        corAnimal.innerHTML = "Cor: Branco e preto";
        porteAnimal.innerHTML = "Porte: Grande";
        sobre.innerHTML = "o Balu";
        paragrafoOne.innerHTML =
          "balu, um esplêndido macho de porte grande com uma pelagem branco e preto que hipnotiza qualquer um que o veja, é uma fonte inesgotável de felicidade e vitalidade. ";
        paragrafoTwo.innerHTML =
          "Com uma personalidade cativante e uma disposição brincalhona, ele é o centro das atenções onde quer que vá. Abalu adora explorar o mundo ao seu redor, sempre cheio de curiosidade e entusiasmo. ";
        paragrafoThree.innerHTML = "";

        break;

      case "pandorinha":
        fotoAnimal.src = "../assets/AnimaisParaAdotar/pandorinha.jpg";
        iconeSexo.src = "../assets/icon/femea.svg";
        nomeAnimal.innerHTML = "Pandora";
        nascimentoAnimal.innerHTML = "Sem estimativa";
        idadeAnimal.innerHTML = "Adulto";
        sexoAnimal.innerHTML = "Sexo: Feminino";
        corAnimal.innerHTML = "Cor: Tonalidades de bege/marrom";
        porteAnimal.innerHTML = "Porte: Médio";
        sobre.innerHTML = "a pandorinha";
        paragrafoOne.innerHTML =
          "Pandora, uma encantadora fêmea de porte médio com uma pelagem de diferentes tonalidades de bege, é uma verdadeira musa da alegria e da ternura. Com seus olhos brilhantes e sua pelagem macia, ela é uma presença reconfortante e acolhedora em qualquer ambiente. ";
        paragrafoTwo.innerHTML =
          "Pandora adora demonstrar carinho e afeto, sempre pronta para oferecer abraços calorosos e lambidas carinhosas. Sua personalidade gentil e compassiva a torna uma companheira excepcional, capaz de iluminar até os dias mais sombrios com sua presença amorosa.  ";
        paragrafoThree.innerHTML =
          "Com Pandora ao seu lado, cada momento é preenchido com calor, conforto e felicidade.";

        break;

      case "nico":
        fotoAnimal.src = "../assets/AnimaisParaAdotar/nico.jpg";
        iconeSexo.src = "../assets/icon/macho.svg";
        nomeAnimal.innerHTML = "Nico";
        nascimentoAnimal.innerHTML = "Sem estimativa";
        idadeAnimal.innerHTML = "Adulto";
        sexoAnimal.innerHTML = "Sexo: Masculino";
        corAnimal.innerHTML = "Cor: Tonalidades de bege";
        porteAnimal.innerHTML = "Porte: Médio";
        sobre.innerHTML = "o Nico";
        paragrafoOne.innerHTML =
          "Nico, um charmoso macho de porte médio com uma pelagem de tom bege que irradia elegância e calma. Com um olhar sereno e uma personalidade tranquila, ele traz uma sensação de paz e contentamento a todos ao seu redor.  ";
        paragrafoTwo.innerHTML =
          " Nico é um companheiro leal, sempre presente para oferecer apoio silencioso e conforto incondicional. Sua natureza carinhosa se manifesta em gestos sutis de ternura e em momentos de conexão profunda.";
        paragrafoThree.innerHTML = "";

        break;

      case "coto":
        fotoAnimal.src = "../assets/AnimaisParaAdotar/coto.jpg";
        iconeSexo.src = "../assets/icon/macho.svg";
        nomeAnimal.innerHTML = "Cotó";
        nascimentoAnimal.innerHTML = "Sem estimativa";
        idadeAnimal.innerHTML = "Idoso";
        sexoAnimal.innerHTML = "Sexo: Masculino";
        corAnimal.innerHTML = "Cor: Tonalidades de bege";
        porteAnimal.innerHTML = "Porte: Médio";
        sobre.innerHTML = "o Cotó";
        paragrafoOne.innerHTML =
          "Cotó, um distinto macho de porte médio com uma pelagem de tom bege, é uma fonte de sabedoria e ternura em seus anos dourados. Com sua postura serena e olhos gentis, ele transmite uma sensação de calma e tranquilidade a todos ao seu redor.";
        paragrafoTwo.innerHTML =
          "Cotó é um amigo leal e compassivo, cuja presença suave e reconfortante traz conforto aos corações daqueles que o conhecem. Seu amor incondicional e sua natureza afetuosa são um testemunho duradouro do poder do vínculo entre humanos e animais.";
        paragrafoThree.innerHTML = "";

        break;

      case "adela":
        fotoAnimal.src = "../assets/AnimaisParaAdotar/adela.jpg";
        iconeSexo.src = "../assets/icon/femea.svg";
        nomeAnimal.innerHTML = "Adela";
        nascimentoAnimal.innerHTML = "Sem estimativa";
        idadeAnimal.innerHTML = "Adulto";
        sexoAnimal.innerHTML = "Sexo: Feminino";
        corAnimal.innerHTML = "Cor: Preto e manchas bege";
        porteAnimal.innerHTML = "Porte: Grande";
        sobre.innerHTML = "a Adela";
        paragrafoOne.innerHTML =
          "Adela, uma majestosa fêmea de porte grande com uma pelagem preta e manchas bege que adicionam um toque de elegância ao seu visual imponente. ";
        paragrafoTwo.innerHTML =
          "Com sua presença marcante e olhos cheios de doçura, ela é uma fonte de força e afeto para todos ao seu redor. Adela é uma guardiã gentil e protetora, pronta para defender aqueles que ama com determinação e coragem. Sua lealdade inabalável e seu espírito amoroso são um reflexo da profundidade do vínculo entre humanos e animais. ";
        paragrafoThree.innerHTML =
          "Com Adela ao seu lado, cada dia é preenchido com a segurança e aconchego que só uma verdadeira amiga pode oferecer.";

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
