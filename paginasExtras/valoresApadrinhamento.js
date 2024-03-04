
const checkboxes = document.querySelectorAll('input[type="radio"]');
const button = document.querySelector('.btnApadrinheAgora');

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    updateButtonHref();
  });
});

// Função para atualizar o href do botão
function updateButtonHref() {
  let selectedValues = [];

  // Percorrendo todos os checkboxes para verificar quais estão selecionados
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      selectedValues.push(checkbox.value);
    }
  });

  // Concatenando os valores selecionados para formar o href
  let href = "";
  if (selectedValues.length > 0) {
    href += "" + selectedValues.join(",");
  }

  // Atualizando o href do botão
  button.dataset.href = href;
}

// Adicionando um event listener para o botão
button.addEventListener("click", function () {
  openPageInNewWindow();
});

// Função para abrir a nova página em uma nova janela externa
function openPageInNewWindow() {
  // Obtendo o href atualizado do botão
  updateButtonHref();
  const href = button.dataset.href;

  // Abrindo a nova página em uma nova janela externa
  if (href) {
    window.open(href, "_blank");
  }
}
