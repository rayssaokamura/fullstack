const formulario = document.getElementById("formulario");

const nomeInput = document.getElementById("nome");

const nota1Input = document.getElementById("nota1");
const nota2Input = document.getElementById("nota2");
const nota3Input = document.getElementById("nota3");
const nota4Input = document.getElementById("nota4");

const mediaElemento = document.getElementById("media");


function calcularMedia() {

    if (
        nota1Input.value === "" ||
        nota2Input.value === "" ||
        nota3Input.value === "" ||
        nota4Input.value === ""
    ) {
        mediaElemento.textContent = "--";
        return;
    }

    const notas = [
        Number(nota1Input.value),
        Number(nota2Input.value),
        Number(nota3Input.value),
        Number(nota4Input.value)
    ];

    const media = (notas[0] + notas[1] + notas[2] + notas[3]) / 4;

    mediaElemento.textContent = media.toFixed(2);
}


nota1Input.addEventListener("input", calcularMedia);
nota2Input.addEventListener("input", calcularMedia);
nota3Input.addEventListener("input", calcularMedia);
nota4Input.addEventListener("input", calcularMedia);


formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    if (
        nota1Input.value === "" ||
        nota2Input.value === "" ||
        nota3Input.value === "" ||
        nota4Input.value === ""
    ) {
        alert("Preencha todas as notas.");
        return;
    }

    const nome = nomeInput.value;

    const notas = [
        Number(nota1Input.value),
        Number(nota2Input.value),
        Number(nota3Input.value),
        Number(nota4Input.value)
    ];

    const media = (notas[0] + notas[1] + notas[2] + notas[3]) / 4;

    let resultado;

    if (media > 6) {
        resultado = "APROVADO";
    } else if (media >= 2 && media <= 5.9) {
        resultado = "EXAME";
    } else {
        resultado = "REPROVADO";
    }

    const parametros = new URLSearchParams();

    parametros.set("nome", nome);
    parametros.set("media", media.toFixed(2));
    parametros.set("resultado", resultado);

    window.location.href = "resultado.html?" + parametros.toString();

});