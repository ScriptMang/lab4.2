// Task1
let shoppingList = [];

// Task2
function filterItems(term) {
    let searchRslt = [];
    for (let item of shoppingList){
        if ( item.includes(term)) {
            searchRslt.push(item)
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

// Task1
function removeLastItem() {
    shoppingList.pop();
}

// removeLastItem();
// console.log(shoppingList);

// Task1
function displayList() {
    console.log("shoppingList: ");
    for(let item of shoppingList) {
        console.log('  '+item);
    }
}

displayList();
console.log(`Search for all tasks with the keyword 'task': `+ filterItems('task'));
