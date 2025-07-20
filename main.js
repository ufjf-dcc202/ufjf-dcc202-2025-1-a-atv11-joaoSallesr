//main.js

import { adicionaLista, getLista, limpaLista } from "./lista.js";

const olItens = document.querySelector("#itens");
const pEntrada = document.querySelector("#entrada");
const btnAdicionar = document.querySelector("#adicionar");
const btnLimpar = document.querySelector("#limpar");

btnLimpar.addEventListener("click", limparItensDaLista);
btnAdicionar.addEventListener("click", adicionaNaLista);
atualizaLista();

function limparItensDaLista(){
    limpaLista();
    atualizaLista();
}

function adicionaNaLista(){
    adicionaLista(pEntrada);
    atualizaLista();
}

function atualizaLista() {
    olItens.innerHTML = "";
    let lista = getLista();
    for (let i=0; i < lista.length; i++) {
        let li = document.createElement("li");
        li.textContent = lista[i];
        olItens.appendChild(li);
    }
}