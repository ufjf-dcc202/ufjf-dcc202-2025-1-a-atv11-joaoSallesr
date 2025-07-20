//main.js

import { adicionaNaLista, getLista, limpaLista, removeDaLista } from "./lista.js";

const olItens = document.querySelector("#itens");
const pEntrada = document.querySelector("#entrada");
const btnAdicionar = document.querySelector("#adicionar");
const btnLimpar = document.querySelector("#limpar");
const btnRemove = document.querySelector("#remover");

btnLimpar.addEventListener("click", limparItensDaLista);
btnAdicionar.addEventListener("click", adicionaLista);
btnRemove.addEventListener("click", removeLista);

atualizaLista();

function limparItensDaLista(){
    limpaLista();
    atualizaLista();
}

function adicionaLista(){
    adicionaNaLista(pEntrada);
    atualizaLista();
}

function removeLista(){
    removeDaLista(pEntrada);
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