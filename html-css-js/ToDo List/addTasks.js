let inputText = document.querySelector(".input");
let submitBtn = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");

//Check if there is tasks in the localStorage and get them
getTasksFromLocalStorage();
submitBtn.addEventListener("click", () => {
    addInputTextInTasksDiv();
})


function getTasksFromLocalStorage() {
    let existingTasks= JSON.parse(localStorage.getItem("tasks"));
    
    if (existingTasks.length > 0) {
        existingTasks.forEach(task => {
            generateHtmlElements(task.content);
        })
    }
    
}
function addInputTextInTasksDiv() {
    if (inputText.value !== "") {
        generateHtmlElements(inputText);
    }
    // Add task in Local Storage
    addTaskInLocalStorage(inputText.value);
    // empty the input value
        emptyInputText();
}


function generateHtmlElements(taskContent){
    let newTaskEl = createElement("div");
    newTaskEl.classList.add("task");
    let newTask = createElement("span");
    newTask.append(createTextNode(taskContent));
    let deleteBtn =createElement("button");
    deleteBtn.append(createTextNode("Delete"));
    deleteBtn.classList.add("delete-btn");
    adddeleteEvent(deleteBtn);
    newTaskEl.appendChild(newTask);
    newTaskEl.appendChild(deleteBtn);
    // Append the new task into tasks div
    tasksDiv.appendChild(newTaskEl);
}

function emptyInputText(){
        inputText.value = "";
}
function addTaskInLocalStorage(taskContent) {
    if (taskContent !== "") {
        let existingTasks = JSON.parse(localStorage.getItem("tasks"));
    if(existingTasks === null) existingTasks = [];
    let task = {
        id: Math.floor(Math.random() * 100),
        content : taskContent
    }
    

    localStorage.setItem("tasks", JSON.stringify(task));
    existingTasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(existingTasks));
    }
    
}

function deleteTaskFLocalStorage(content) {
    let existingTasks = JSON.parse(localStorage.getItem("tasks"));
    let tasksAfterDeleted = existingTasks.filter((t) => {
        return t.content !== content;
    });
    console.log(tasksAfterDeleted);
    localStorage.setItem("tasks",JSON.stringify(tasksAfterDeleted));
}

function deleteFBrowser(el) {
    el.parentNode.removeChild(el);
    
}
function adddeleteEvent(deleteBtn) {
    deleteBtn.addEventListener("click", (e) => {
        deleteTaskFLocalStorage(e.currentTarget.parentNode.firstChild.innerHTML);
        deleteFBrowser(e.currentTarget.parentNode);
        
    });
}

function createElement(element) {
    let newElement = document.createElement(element);
    return newElement;
}

function createTextNode(text) {
    let newElWithtext = document.createTextNode(text);
    return newElWithtext;
}