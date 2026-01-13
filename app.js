// Task1
let shoppingList = [];

// Task2
function filterItems(term) {
    let searchRslt = [];
    for (let item of shoppingList){
        if ( term === item) {
            searchRslt.push(term)
        }
    }
    return searchRslt;
}

// Task2
function addItem(newItem) {
    for (let item of shoppingList){
        if ( newItem === item) {
            console.log("hey that item is a copy!");
            return;
        }
    }
    shoppingList.push(newItem);
}

addItem("task1");
addItem("task1");

addItem("task2");
addItem("task3");
console.log(shoppingList);

function removeLastItem() {
    shoppingList.pop();
}

// removeLastItem();
// console.log(shoppingList);

function displayList() {
    console.log("shoppingList: ");
    for(let item of shoppingList) {
        console.log('  '+item);
    }
}

displayList();
console.log(filterItems('task1'));