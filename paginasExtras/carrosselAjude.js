
function proxima(){
    let container1 = document.querySelector('.container-card1');
    let container2 = document.querySelector('.container-card2');
    const btnProxima = document.querySelector('.proxima');
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