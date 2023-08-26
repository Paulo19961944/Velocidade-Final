/** Variáveis */
const pneu = document.getElementById("pneu");
const btn = document.getElementById("btn");
pneu.addEventListener('input', formatarNumero);
btn.addEventListener('click', calcular);

/** Formata o Numero do Pneu */
let inputValue = '';

function formatarNumero() {
    inputValue = pneu.value.replace(/[^\d]/g, '');
    let formattedValue = '';

    for (let i = 0; i < inputValue.length; i++) {
        if (i === 3) {
            formattedValue += '/';
        } else if (i === 5) {
            formattedValue += ' R';
        }
        formattedValue += inputValue[i];
    }
    pneu.value = formattedValue;
}


/** Faz o Calculo */
function calcular() {
    if (inputValue.length === 7) {
        let larguraPneu = parseFloat(inputValue.substring(0, 3)) / 10;
        let alturaPneu = parseFloat(inputValue.substring(3, 5)) / 100;
        let aro = parseFloat(inputValue.substring(5, 7));

        const primeiraMarcha = parseFloat(document.getElementById("marcha-1").value.replace(",", "."));
        const segundaMarcha = parseFloat(document.getElementById("marcha-2").value.replace(",", "."));
        const terceiraMarcha = parseFloat(document.getElementById("marcha-3").value.replace(",", "."));
        const quartaMarcha = parseFloat(document.getElementById("marcha-4").value.replace(",", "."));
        const quintaMarcha = parseFloat(document.getElementById("marcha-5").value.replace(",", "."));
        const diferencial = parseFloat(document.getElementById("diferencial").value.replace(",", "."));
        const RPM = parseFloat(document.getElementById("rpm").value.replace(",", "."));

        let rodaPneu = larguraPneu * alturaPneu * 2 + aro * 2.54;
        let circunferenciaPneu = rodaPneu * Math.PI / 100;

        let velocidadePrimeira = (circunferenciaPneu * RPM * 0.06) / (diferencial * primeiraMarcha);
        let velocidadeSegunda = (circunferenciaPneu * RPM * 0.06) / (diferencial * segundaMarcha);
        let velocidadeTerceira = (circunferenciaPneu * RPM * 0.06) / (diferencial * terceiraMarcha);
        let velocidadeQuarta = (circunferenciaPneu * RPM * 0.06) / (diferencial * quartaMarcha);
        let velocidadeQuinta = (circunferenciaPneu * RPM * 0.06) / (diferencial * quintaMarcha);

        document.getElementById("velocidade-marcha-1").textContent = "A Velocidade Máxima da 1a é: " + velocidadePrimeira.toFixed(2) + " Km/h";
        document.getElementById("velocidade-marcha-2").textContent = "A Velocidade Máxima da 2a é: " + velocidadeSegunda.toFixed(2) + " Km/h";
        document.getElementById("velocidade-marcha-3").textContent = "A Velocidade Máxima da 3a é: " + velocidadeTerceira.toFixed(2) + " Km/h";
        document.getElementById("velocidade-marcha-4").textContent = "A Velocidade Máxima da 4a é: " + velocidadeQuarta.toFixed(2) + " Km/h";
        document.getElementById("velocidade-marcha-5").textContent = "A Velocidade Máxima da 5a é: " + velocidadeQuinta.toFixed(2) + " Km/h";

        console.log("A velocidade máxima da Primeira Marcha é: " + velocidadePrimeira.toFixed(2) + " Km/h");
        console.log("A velocidade máxima da Segunda Marcha é: " + velocidadeSegunda.toFixed(2) + " Km/h");
        console.log("A velocidade máxima da Terceira Marcha é: " + velocidadeTerceira.toFixed(2) + " Km/h");
        console.log("A velocidade máxima da Quarta Marcha é: " + velocidadeQuarta.toFixed(2) + " Km/h");
        console.log("A velocidade máxima da Quinta Marcha é: " + velocidadeQuinta.toFixed(2) + " Km/h");
    }
}
