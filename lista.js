//list.js

const lista = ["Um", "Dois", "Três"];

export function getLista() {
    return structuredClone(lista);
}

export function limpaLista() {
    lista.splice(0);
}

export function adicionaLista(value){
    const newItem = value.textContent;
    lista.push(newItem);
}