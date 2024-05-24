// Lista com todos elementos do HTML

const resultado = document.getElementById("resultado");
resultado.innerText = "0";
let conta = "0";
let contaSeparada;

const botao_C = document.querySelector(".botao_C");
const botao_divi = document.querySelector(".botao_divi");
const botao_multi = document.querySelector(".botao_multi");
const botao_menos = document.querySelector(".botao_menos");
const botao_7 = document.querySelector(".botao_7");
const botao_8 = document.querySelector(".botao_8");
const botao_9 = document.querySelector(".botao_9");
const botao_mais = document.querySelector(".botao_mais");
const botao_4 = document.querySelector(".botao_4");
const botao_5 = document.querySelector(".botao_5");
const botao_6 = document.querySelector(".botao_6");
const botao_igual = document.querySelector(".botao_igual");
const botao_1 = document.querySelector(".botao_1");
const botao_2 = document.querySelector(".botao_2");
const botao_3 = document.querySelector(".botao_3");
const botao_0 = document.querySelector(".botao_0");
const botao_ponto = document.querySelector(".botao_ponto");

let botaoClicado;
let decimal;
let operadores;

// console.log(resultado.innerText)

// Função que dá inicio ao código

function inicio () {

    botao_1.addEventListener("click", () => {
        botaoClicado = 1;
        processarBotaoClicado();
    })
    botao_2.addEventListener("click", () => {
        botaoClicado = 2;
        processarBotaoClicado();
    })
    botao_3.addEventListener("click", () => {
        botaoClicado = 3;
        processarBotaoClicado();
    })
    botao_4.addEventListener("click", () => {
        botaoClicado = 4;
        processarBotaoClicado();
    })
    botao_5.addEventListener("click", () => {
        botaoClicado = 5;
        processarBotaoClicado();
    })
    botao_6.addEventListener("click", () => {
        botaoClicado = 6;
        processarBotaoClicado();
    })
    botao_7.addEventListener("click", () => {
        botaoClicado = 7;
        processarBotaoClicado();
    })
    botao_8.addEventListener("click", () => {
        botaoClicado = 8;
        processarBotaoClicado();
    })
    botao_9.addEventListener("click", () => {
        botaoClicado = 9;
        processarBotaoClicado();
    })
    botao_0.addEventListener("click", () => {
        botaoClicado = 10;
        processarBotaoClicado();
    })
    botao_C.addEventListener("click", () => {
        botaoClicado = 11;
        processarBotaoClicado();
    })
    botao_divi.addEventListener("click", () => {
        botaoClicado = 12;
        processarBotaoClicado();
    })
    botao_multi.addEventListener("click", () => {
        botaoClicado = 13;
        processarBotaoClicado();
    })
    botao_menos.addEventListener("click", () => {
        botaoClicado = 14;
        processarBotaoClicado();
    })
    botao_mais.addEventListener("click", () => {
        botaoClicado = 15;
        processarBotaoClicado();
    })
    botao_igual.addEventListener("click", () => {
        botaoClicado = 16;
        processarBotaoClicado();
    })
    botao_ponto.addEventListener("click", () => {
        botaoClicado = 17;
        processarBotaoClicado();
    })

}

function processarBotaoClicado() {
    
    switch (botaoClicado) {
    
        case 1: // 1
        if (resultado.innerText === "0") {
            resultado.innerText = "1";
            conta = "1";
            } else if (/[0-9.]$/.test(resultado.innerText)) { // Verifica se o último caractere é um número entre 0 e 9 ou um ponto (.)
                resultado.innerText = resultado.innerText + "1";
                conta = conta + "1";
            } else {
                resultado.innerText = resultado.innerText + " 1";
                conta = conta + "1";
            }
            break;

        case 2: // 2
            if (resultado.innerText === "0") {
                resultado.innerText = "2";
                conta = "2";
            } else if (/[0-9.]$/.test(resultado.innerText)) { // Verifica se o último caractere é um número entre 0 e 9 ou um ponto (.)
                resultado.innerText = resultado.innerText + "2";
                conta = conta + "2";
            } else {
                resultado.innerText = resultado.innerText + " 2";
                conta = conta + "2";
            }
            break;

        case 3: // 3
            if (resultado.innerText === "0") {
                resultado.innerText = "3";
                conta = "3";
            } else if (/[0-9.]$/.test(resultado.innerText)) { // Verifica se o último caractere é um número entre 0 e 9 ou um ponto (.)
                resultado.innerText = resultado.innerText + "3";
                conta = conta + "3";
            } else {
                resultado.innerText = resultado.innerText + " 3";
                conta = conta + "3";
            }
            break;

        case 4: // 4
            if (resultado.innerText === "0") {
                resultado.innerText = "4";
                conta = "4";
            } else if (/[0-9.]$/.test(resultado.innerText)) { // Verifica se o último caractere é um número entre 0 e 9 ou um ponto (.)
                resultado.innerText = resultado.innerText + "4";
                conta = conta + "4";
            } else {
                resultado.innerText = resultado.innerText + " 4";
                conta = conta + "4";
            }
            break;

        case 5: // 5
            if (resultado.innerText === "0") {
                resultado.innerText = "5";
                conta = "5";
            } else if (/[0-9.]$/.test(resultado.innerText)) { // Verifica se o último caractere é um número entre 0 e 9 ou um ponto (.)
                resultado.innerText = resultado.innerText + "5";
                conta = conta + "5";
            } else {
                resultado.innerText = resultado.innerText + " 5";
                conta = conta + "5";
            }
            break;

        case 6: // 6
            if (resultado.innerText === "0") {
                resultado.innerText = "6";
                conta = "6";
            } else if (/[0-9.]$/.test(resultado.innerText)) { // Verifica se o último caractere é um número entre 0 e 9 ou um ponto (.)
                resultado.innerText = resultado.innerText + "6";
                conta = conta + "6";
            } else {
                resultado.innerText = resultado.innerText + " 6";
                conta = conta + "6";
            }
            break;

        case 7: // 7
            if (resultado.innerText === "0") {
                resultado.innerText = "7";
                conta = "7";
            } else if (/[0-9.]$/.test(resultado.innerText)) { // Verifica se o último caractere é um número entre 0 e 9 ou um ponto (.)
                resultado.innerText = resultado.innerText + "7";
                conta = conta + "7";
            } else {
                resultado.innerText = resultado.innerText + " 7";
                conta = conta + "7";
            }
            break;

        case 8: // 8
            if (resultado.innerText === "0") {
                resultado.innerText = "8";
                conta = "8";
            } else if (/[0-9.]$/.test(resultado.innerText)) { // Verifica se o último caractere é um número entre 0 e 9 ou um ponto (.)
                resultado.innerText = resultado.innerText + "8";
                conta = conta + "8";
            } else {
                resultado.innerText = resultado.innerText + " 8";
                conta = conta + "8";
            }
            break;

        case 9:// 9
            if (resultado.innerText === "0") {
                resultado.innerText = "9";
                conta = "9";
            } else if (/[0-9.]$/.test(resultado.innerText)) { // Verifica se o último caractere é um número entre 0 e 9 ou um ponto (.)
                resultado.innerText = resultado.innerText + "9";
                conta = conta + "9";
            } else {
                resultado.innerText = resultado.innerText + " 9";
                conta = conta + "9";
            }
            break;
            
        case 10: // 0
            if (resultado.innerText === "0") {
            }  else if (/[0-9.]$/.test(resultado.innerText)) { // Verifica se o último caractere é um número entre 0 e 9 ou um ponto (.)
                resultado.innerText = resultado.innerText + "0";
                conta = conta + "0";
            }  else if (/[-+x÷]$/.test(resultado.innerText)) { // Verifica se o último caractere é um operador
                resultado.innerText = resultado.innerText + " 0";
                conta = conta + "0";
            }
            break;

        case 11: // Clear
            resultado.innerText = "0";
            conta = "0";
            break;

        case 12: // Divisão
            // Verifica se o último caractere é um número entre 0 e 9
            if (/[0-9]$/.test(resultado.innerText)) {
                resultado.innerText = resultado.innerText + " ÷";
                conta = conta + "/";
            } else {
                // Substitui o último caractere pelo operador de divisão
                resultado.innerText = resultado.innerText.slice(0, -1) + " ÷";
                conta = conta.slice(0, -1) + "/";
            }
            break;

        case 13: // Multiplicação
            // Verifica se o último caractere é um número entre 0 e 9
            if (/[0-9]$/.test(resultado.innerText)) {
                resultado.innerText = resultado.innerText + " x";
                conta = conta + "*";
            } else {
                // Substitui o último caractere pelo operador de multiplicação
                resultado.innerText = resultado.innerText.slice(0, -1) + " x";
                conta = conta.slice(0, -1) + "*";
            }
            break;

        case 14: // Subtração
            // Verifica se o último caractere é um número entre 0 e 9
            if (/[0-9]$/.test(resultado.innerText)) {
                resultado.innerText = resultado.innerText + " -";
                conta = conta + "-";
            } else {
                // Substitui o último caractere pelo operador de subtração
                resultado.innerText = resultado.innerText.slice(0, -1) + " -";
                conta = conta.slice(0, -1) + "-";
            }
            break;

        case 15: // Adição
            // Verifica se o último caractere é um número entre 0 e 9
            if (/[0-9]$/.test(resultado.innerText)) {
                resultado.innerText = resultado.innerText + " +";
                conta = conta + "+";
            } else {
                // Substitui o último caractere pelo operador de adição
                resultado.innerText = resultado.innerText.slice(0, -1) + " +";
                conta = conta.slice(0, -1) + "+";
            }
            break;

        case 16: // Igual
            conta = eval(conta);
            if (Number.isInteger(Number(conta))) {
                resultado.innerText = conta;
            } else {
                conta = conta.toString();
                decimal = conta.split('.'); // Divide o número em partes inteira e decimal
                switch (decimal[1].length) { // Retorna o número de dígitos após o ponto decimal
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        resultado.innerText = conta;
                        break;

                    default:
                        resultado.innerText = Number(conta).toFixed(5).toString(); // Arredonda para cinco casas decimais
                }
            }
            break;

        case 17: // Ponto
            pontoEncontrado = verificarPonto(conta);
            if (!pontoEncontrado) {
                // Verifica se o último caractere é um número entre 0 e 9
                if (/[0-9]$/.test(resultado.innerText)) {
                    resultado.innerText = resultado.innerText + ".";
                    conta = conta + ".";
                }
            }
            break;
    
    }

}

function verificarPonto(conta) {
    let pontoEncontrado = false;
    operadores = ["+","-","*","/"];
    for (let i = conta.length - 1; i >= 0; i--) {
        if (!operadores.includes(conta[i])) {
            if (conta[i] === ".") {
                pontoEncontrado = true;
                break; // Sai do loop ao encontrar um ponto
            }
        } else {
            break; // Sai do loop ao encontrar um operador
        }
    }
    return pontoEncontrado;
}

// Chama a função que inicia o código

inicio();