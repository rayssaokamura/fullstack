
// 1. Inclua a String " e JavaScript" no conteúdo interno dos elementos title e h1.

const title = document.querySelector("title");
const h1 = document.querySelector("h1");

title.textContent += " e JavaScript";
h1.textContent += " e JavaScript";


// 2. Calcular o número de dias desde 01/05.

const dataInicio = new Date(new Date().getFullYear(), 4, 1);
const dataHoje = new Date();

const diferencaMs = dataHoje - dataInicio;
const diasDecorridos = Math.floor(
  diferencaMs / (1000 * 60 * 60 * 24)
);

const spanDias = document.querySelector("span.dias");

spanDias.innerHTML = diasDecorridos;


// 3. Deixar o span com fundo vermelho.

spanDias.style.backgroundColor = "red";


// 4. Fazer os elementos com a classe invisivel aparecerem.

const elementosInvisiveis = document.querySelectorAll(".invisivel");

elementosInvisiveis.forEach(el => {
  el.classList.remove("invisivel");
});


// Cores para cada período.

const coresPeriodo = {
  "período 1": "#ffebee",
  "período 2": "#e8f5e9",
  "período 3": "#e3f2fd",
  "período 4": "#fff3e0"
};


// Seleciona as disciplinas.

const itensLi = document.querySelectorAll(
  "body > ul:first-of-type > li"
);


// 5, 6 e 7.
// Alterar texto, adicionar "fácil" para disciplinas web
// e calcular aulas por semana.

itensLi.forEach(li => {

  // 5. Deixar todas as letras minúsculas.

  let texto = li.textContent.toLowerCase();


  // 6. Se tiver "web", adicionar "(fácil)".

  if (texto.indexOf("web") !== -1) {
    texto += " (fácil)";
  }


  // 7. Calcular aulas por semana.

  const parteFinal = texto.slice(-10);

  const posInicioHoras =
    parteFinal.indexOf("(") + 1;

  const posFimHoras =
    parteFinal.indexOf("h)");

  if (
    posInicioHoras > 0 &&
    posFimHoras > posInicioHoras
  ) {

    const horasTotais = parseInt(
      parteFinal.substring(
        posInicioHoras,
        posFimHoras
      ),
      10
    );

    const aulasPorSemana = horasTotais / 15;

    texto += ` - ${aulasPorSemana} aulas/semana`;
  }


  li.textContent = texto;


  // Deixar disciplinas do mesmo período
  // com a mesma cor de fundo.

  for (const [periodo, cor] of Object.entries(coresPeriodo)) {

    if (texto.indexOf(periodo) !== -1) {
      li.style.backgroundColor = cor;
      break;
    }
  }
});


// 8. Calcular a carga-horária total.

let somaCH = 0;

itensLi.forEach(li => {

  const texto = li.textContent;

  const posInicio =
    texto.indexOf("(") + 1;

  const posFim =
    texto.indexOf("h)");

  if (
    posInicio > 0 &&
    posFim > posInicio
  ) {

    somaCH += parseInt(
      texto.substring(posInicio, posFim),
      10
    );
  }
});


// Criar o span da carga-horária.

const pChTotal = document.querySelector(".ch_total");

const spanCh = document.createElement("span");

spanCh.className = "ch";
spanCh.textContent = `${somaCH}h`;

pChTotal.appendChild(spanCh);


// 9. Remover o elemento de classe "atrapalhando".

const mascara = document.querySelector(".mascara");

const atrapalhando =
  document.querySelector(".mascara .atrapalhando");

if (mascara && atrapalhando) {
  mascara.removeChild(atrapalhando);
}


// 10. Colocar as disciplinas em um vetor
// e ordenar alfabeticamente.

const vetorDisciplinas = [];

itensLi.forEach(li => {
  vetorDisciplinas.push(li.textContent);
});

vetorDisciplinas.sort();


// Inserir as disciplinas ordenadas no HTML.

const ulOrdenado =
  document.querySelector("ul.ordenado");

vetorDisciplinas.forEach(disc => {

  const li = document.createElement("li");

  li.textContent = disc;

  ulOrdenado.appendChild(li);
});


// 11. Ordem alfabética decrescente.

const ulDecrescente =
  document.querySelector("ul.decrescente");

const vetorDecrescente =
  [...vetorDisciplinas].reverse();

vetorDecrescente.forEach(disc => {

  const li = document.createElement("li");

  li.textContent = disc;

  ulDecrescente.appendChild(li);
});


// 12. Mostrar somente as disciplinas
// que contêm a palavra "programação".

const ulProgramacao =
  document.querySelector("ul.programacao");

vetorDisciplinas.forEach(disc => {

  if (
    disc.indexOf("programação") !== -1 ||
    disc.indexOf("programacao") !== -1
  ) {

    const li = document.createElement("li");

    li.textContent = disc;

    ulProgramacao.appendChild(li);
  }
});

