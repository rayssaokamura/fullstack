const parametros = new URLSearchParams(window.location.search);

const nome = parametros.get("nome");
const media = parametros.get("media");
const resultado = parametros.get("resultado");

const nomeAluno = document.getElementById("nomeAluno");
const mediaAluno = document.getElementById("mediaAluno");
const resultadoAluno = document.getElementById("resultadoAluno");


nomeAluno.textContent = nome;

mediaAluno.textContent = media;

resultadoAluno.textContent = resultado;