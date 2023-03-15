/*
Consegna:
Data una lista della spesa (memorizzata in un array), 
stampare sulla pagina (anche brutalmente, basta che si vedano)
gli elementi della lista individualmente con un ciclo while.
*/

const shoppingList = ["Pane", "Acqua", "Latte", "Cereali", "Uova", "Pasta", "Birra"];

let listEl = document.getElementById("shopList");

index = 0;

while (index < shoppingList.length) {

    let newLiEl = document.createElement ("li");
    newLiEl.style.listStyleType = "none";
    newLiEl.innerHTML = shoppingList[index];
    listEl.append(newLiEl);

    index++;
};







