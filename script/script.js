// Função para formatar 1 em 01
const zeroFill = (n) => {
  return ("0" + n).slice(-2);
};

// Cria intervalo
const interval = setInterval(() => {
  // Pega o horário atual
  const now = new Date();

  // Formata a data conforme dd/mm/aaaa hh:ii:ss
  const dataHora =
    zeroFill(now.getUTCDate()) +
    "/" +
    zeroFill(now.getMonth() + 1) +
    "/" +
    now.getFullYear() +
    " " +
    zeroFill(now.getHours()) +
    ":" +
    zeroFill(now.getMinutes()) +
    ":" +
    zeroFill(now.getSeconds());

  // Exibe na tela usando a div#data-hora
  document.getElementById("js-data").innerHTML = dataHora;
}, 1000);

//fim captura da data

function paginaAtual() {
  alert("Página atual!");
}
// remover texto da pagina formulário

function removeTextContact() {
  document.getElementById("contact").style.display = "none";
}

// abrir formulário

function addForm() {
  const contactSection = document.getElementById("form");

  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  h1.innerText = "Formulário para contato";

  const div2 = document.createElement("div");
  const form = document.createElement("form");
  form.action = "https://formsubmit.co/61e054950d892dc4d3fd156c48b734d8";
  form.method = "post";

  //input name
  const div3 = document.createElement("div");
  div3.className = "input-group mb-3";
  div3.innerHTML =
    '<label for="name" class="input-group-text color">Nome:</label';
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.name = "nome";
  nameInput.className = "form-control";
  nameInput.id = "name";
  nameInput.placeholder = "Nome Completo";
  div3.appendChild(nameInput);
  //input email
  const div4 = document.createElement("div");
  div4.className = "input-group mb-3";
  div4.innerHTML =
    '<label for="email" class="input-group-text color">E-mail:</label>';
  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.name = "email";
  emailInput.className = "form-control";
  emailInput.id = "email";
  emailInput.placeholder = "E-mail";
  div4.appendChild(emailInput);
  //input assunto
  const div5 = document.createElement("div");
  div5.className = "input-group mb-3";
  div5.innerHTML =
    '<label for="assunto" class="input-group-text color">Assunto:</label>';
  const assuntoInput = document.createElement("input");
  assuntoInput.type = "text";
  assuntoInput.name = "assunto";
  assuntoInput.className = "form-control";
  assuntoInput.id = "assunto";
  assuntoInput.placeholder = "Assunto";
  div5.appendChild(assuntoInput);

  //text area
  const div6 = document.createElement("div");
  div6.className = "input-group";
  div6.innerHTML =
    '<span class="input-group-text color">Digite sua mensagem:</span>';
  const textArea = document.createElement("textarea");
  textArea.name = "mensagem";
  textArea.className = "form-contro size-text-area";
  textArea.ariaLabel = "Digite sua mensagem";
  textArea.placeholder = "Digite sua mensagem";
  div6.appendChild(textArea);

  const tanks = document.createElement("input");
  tanks.type = "hidden";
  tanks.name = "_next";
  tanks.value = "https://gatti96.github.io/site-renan/pages/thanks.html";

  const div7 = document.createElement("div");
  div7.className = "col-12 center";
  div7.innerHTML =
    '<button type="submit" class="btn color-submit">Enviar</button>';

  //junção de todos
  form.append(div3, div4, div5, div6, tanks, div7);
  div2.appendChild(form);
  div.appendChild(h1);

  contactSection.append(div, div2);

  removeTextContact();
}
