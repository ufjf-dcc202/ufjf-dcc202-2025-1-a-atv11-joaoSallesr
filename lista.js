//list.js

const lista = ["Um", "Dois", "Três"];

export function getLista() {
    return structuredClone(lista);
}

export function limpaLista() {
    lista.splice(0);
}

export function adicionaNaLista(value){
    const newItem = value.textContent;
    lista.push(newItem);
}

export function removeDaLista(value){
    const index = value.textContent-1;
    lista.splice(index, 1);
}