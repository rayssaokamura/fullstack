
// Exercício 1: Alterar a cor do div apresentado a seguir, quando o próximo botão "click1" for pressionado.
const btn1 = document.getElementById("btn1");
const div1 = document.getElementById("div1");

btn1.addEventListener("click", () => {
  div1.style.backgroundColor =
    div1.style.backgroundColor === "cyan"
      ? "lightgreen"
      : "cyan";
});


// Exercício 2: Apresentar/esconder o div apresentado a seguir, conforme o usuário pressionar o botão "click2".
const btn2 = document.getElementById("btn2");
const div2 = document.getElementById("div2");

btn2.addEventListener("click", () => {
  div2.classList.toggle("escondido");
});


// Exercício 3: Mover o div apresentado a seguir para a direita/esquerda, toda vez que o botão "click3" for clicado.
const btn3 = document.getElementById("btn3");
const div3 = document.getElementById("div3");

let deslocado = false;

btn3.addEventListener("click", () => {
  deslocado = !deslocado;

  div3.style.transform = deslocado
    ? "translateX(100px)"
    : "translateX(0px)";
});


// Exercício 4: Alterar o conteúdo textual e apresentação do botão "click4", toda vez que ele for clicado.
const btn4 = document.getElementById("btn4");

let ativo = false;

btn4.addEventListener("click", () => {
  ativo = !ativo;

  if (ativo) {
    btn4.textContent = "Ativado!";
    btn4.style.backgroundColor = "lightblue";
    btn4.style.color = "darkblue";
  } else {
    btn4.textContent = "click4";
    btn4.style.backgroundColor = "";
    btn4.style.color = "";
  }
});


// Exercício 5: Acrescentar um elemento li com o texto "qualquer ítem" no elemento ul a seguir.
const btn5 = document.getElementById("btn5");
const ul5 = document.getElementById("ul5");

btn5.addEventListener("click", () => {
  const li = document.createElement("li");

  li.textContent = "qualquer ítem";

  ul5.appendChild(li);
});


// Exercício 6: Acrescentar um elemento li com o texto "item X" no elemento ul.
const btn6 = document.getElementById("btn6");
const ul6 = document.getElementById("ul6");

btn6.addEventListener("click", () => {
  const li = document.createElement("li");
  const indice = ul6.children.length;

  li.textContent = `item ${indice}`;

  ul6.appendChild(li);
});


// Exercício 7: Apresentar o conteúdo do input utilizando um alert.
const btn7 = document.getElementById("btn7");
const input7 = document.getElementById("input7");

btn7.addEventListener("click", () => {
  alert(input7.value);
});


// Exercício 8: Inserir o conteúdo do input em um elemento li e acrescentá-lo no ul.
const btn8 = document.getElementById("btn8");
const input8 = document.getElementById("input8");
const ul8 = document.getElementById("ul8");

btn8.addEventListener("click", () => {
  if (input8.value.trim() !== "") {
    const li = document.createElement("li");

    li.textContent = input8.value;

    ul8.appendChild(li);

    input8.value = "";
  }
});


// Exercício 9: Inserir o conteúdo do input dentro do div.
const input9 = document.getElementById("input9");
const div9 = document.getElementById("div9");

const atualizarDiv9 = () => {
  div9.textContent = input9.value;
};

input9.addEventListener("keyup", atualizarDiv9);
input9.addEventListener("change", atualizarDiv9);


// Exercício 10: Capturar as teclas de seta e alterar o posicionamento do cursor.
const input10 = document.getElementById("input10");
const cursor = document.getElementById("cursor");

let posTop = 40;
let posLeft = 45;

input10.addEventListener("keydown", (event) => {
  const tecla = event.keyCode || event.which;
  const passo = 5;

  if (tecla === 37) {
    posLeft -= passo;
  } else if (tecla === 38) {
    posTop -= passo;
  } else if (tecla === 39) {
    posLeft += passo;
  } else if (tecla === 40) {
    posTop += passo;
  }

  if (tecla >= 37 && tecla <= 40) {
    event.preventDefault();

    cursor.style.top = posTop + "px";
    cursor.style.left = posLeft + "%";
  }
});

