// Task1
let shoppingList = [];

function addItem(item) {
    shoppingList.push(item);
}

addItem("task1");
console.log(shoppingList);

function removeLastItem() {
    shoppingList.pop();
}

removeLastItem();
console.log(shoppingList);