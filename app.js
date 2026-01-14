// Task3
let taskInput = document.getElementById('taskInput');
let addItemButton = document.getElementById('addItemButton'); 
let taskList = document.getElementById('taskList');
let removeLastItemButton = document.getElementById('removeLastItemButton'); 

// Task3
addItemButton.addEventListener("click", function(){
    let taskText = taskInput.value;
    console.log(taskText);
    if (!taskText) {
        alert("Invalid input.")
        return;
    }
    let listItem = document.createElement('li');
    listItem.textContent = taskText;
    // taskList.push(listItem);
    addItem(listItem);
    taskInput.value = "";
});


// Task3
function addItem(newItem) {
     let tasks = taskList.getElementsByTagName("li");
    for (const task of tasks) {
        if (newItem.textContent === task.textContent){
            alert("error, the list item you're trying to add is a duplicate");
            return;
        }
    }
    taskList.appendChild(newItem);
}

// Task3
removeLastItemButton.addEventListener("click", removeItem);
function removeItem() {
    let listItems = taskList.getElementsByTagName('li');
    const size = listItems.length;
    listItems[size-1].remove();
}
// Task1 and Task2
// let shoppingList = [];
// function addItem(newItem) {
//     for (let item of shoppingList){
//         if ( newItem === item) {
//             console.log("hey that item is a copy!");
//             return;
//         }
//     }
//     shoppingList.push(newItem);
// }



// Task2
// function filterItems(term) {
//     let searchRslt = [];
//     for (let item of shoppingList){
//         if ( item.includes(term)) {
//             searchRslt.push(item)
//         }
//     }
//     return searchRslt;
// }

// addItem("task1");
// addItem("task1");

// addItem("task2");
// addItem("task3");
// console.log(shoppingList);

// Task1
// function removeLastItem() {
    // shoppingList.pop();
// }

// removeLastItem();
// console.log(shoppingList);

// Task1
// function displayList() {
//     console.log("shoppingList: ");
//     for(let item of shoppingList) {
//         console.log('  '+item);
//     }
// }

// displayList();

// Task2
// console.log(`Search for all tasks with the keyword 'task': `+ filterItems('task'));
