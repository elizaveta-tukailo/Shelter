import '../scss/app.scss';
/* Your JS Code goes here */
const tasksInput = document.querySelector('.tasks__input');
const tasksBtn = document.querySelector('.tasks__btn');
const tasksList = document.querySelector('.tasks__list');
const filterTab = document.querySelector('.tasks__tabs');
const inputElement = document.querySelector('.header__input');
let tasksItems = [];
document.addEventListener('DOMContentLoaded', getTasks);
tasksBtn.addEventListener('click', addTask);
tasksList.addEventListener('click', changeTasks);
filterTab.addEventListener('click', filterTask);
inputElement.addEventListener('input', searchTask);
function addTask(event) {
    event.preventDefault();
    if (event.preventDefault) { event.preventDefault(); } else { (event.returnValue = false);}
    if (tasksInput.value != '') {
        //create a new task
        const taskElementWrap = document.createElement('div');
        taskElementWrap.classList.add('tasks__item-wrap');
        const newTask = document.createElement('li');
        newTask.innerText = tasksInput.value;
        newTask.classList.add('tasks__item');
        taskElementWrap.appendChild(newTask);
        //create object for task
        let newTaskItem = {
            task: tasksInput.value,
            completed: false,
            important: false
        };
        tasksItems.shift(newTaskItem);
        //add to localstorage
        saveLocalTasks(newTaskItem);
        //create mark important button
        const importantButton = document.createElement('button');
        importantButton.innerHTML = 'MARK IMPORTANT';
        importantButton.classList.add('important-btn');
        taskElementWrap.appendChild(importantButton);
        //create delete button
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        taskElementWrap.appendChild(deleteButton);
        tasksList.insertBefore(taskElementWrap, tasksList.firstChild.nextSibling);
        tasksInput.value = '';
    }
    else {alert("Заполните текстовое поле!");}
}

function changeTasks(e) {
    const item = e.target;
    if (item.classList[0] === 'delete-btn') {
        const task = item.parentElement;
        task.classList.add('fall');
        task.addEventListener('transitionend', function () {
            removeLocalTasks(task);
            task.parentNode.removeChild(task);
        });
    }
    if (item.classList[0] === 'important-btn') {
        const task = item.parentElement;
        task.classList.toggle('important');
        setElementStatus(task, 'important');
        if (task.classList.contains('important')){
            task.childNodes[1].innerHTML = 'NOT IMPORTANT';
        }
        else {  
            task.childNodes[1].innerHTML = 'MARK IMPORTANT';
        }
    }
    if (item.tagName != 'BUTTON' && item.tagName != 'LI') {
        item.classList.toggle('completed');
        setElementStatus(item, 'completed');
        const task = item.parentElement;
    }
    if (item.tagName == 'LI') {
        const task = item.parentElement;
        task.classList.toggle('completed');
        setElementStatus(task, 'completed');
    }
}
function searchTask(e){
    tasksList.childNodes.forEach(node => {
        if (node.tagName == 'DIV' && !node.childNodes[0].innerHTML.toLowerCase().includes(e.target.value.toLowerCase())){
            node.style.display = 'none';
       }
       else if (node.tagName == 'DIV') {
            node.style.display = 'block';
        }
    });
}
function saveLocalTasks(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) { tasks = []; }
    else { tasks = JSON.parse(localStorage.getItem('tasks')); }
    tasks.unshift(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
function getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function (task) {
        const taskElementWrap = document.createElement('div');
        taskElementWrap.classList.add('tasks__item-wrap');

        const newTask = document.createElement('li');
        newTask.innerText = task.task;
        newTask.classList.add('tasks__item');
        taskElementWrap.appendChild(newTask);

        const importantButton = document.createElement('button');
        importantButton.innerHTML = 'MARK IMPORTANT';
        importantButton.classList.add('important-btn');
        taskElementWrap.appendChild(importantButton);

        if (task.important == true) {
             taskElementWrap.classList.add('important'); 
             taskElementWrap.childNodes[1].innerHTML = 'NOT IMPORTANT';
            }
           else { taskElementWrap.childNodes[1].innerHTML = 'MARK IMPORTANT'; }
        if (task.completed == true) { taskElementWrap.classList.add('completed'); }
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        taskElementWrap.appendChild(deleteButton);
        tasksList.appendChild(taskElementWrap);
    });
}
function setElementStatus(taskEl, status) {
    let elArray = [];
    [].forEach.call(tasksList.children, function (el) {
        elArray.push(el);
    });
    let index = elArray.indexOf(taskEl);
    let tasks;
    if (localStorage.getItem('tasks') === null) { tasks = []; }
    else { tasks = JSON.parse(localStorage.getItem('tasks')); }
    if (!taskEl.classList.contains(status)) { tasks[index][status] = false; }
    else { tasks[index][status] = true; }
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
function filterTask(e) {
    let tasks = document.querySelectorAll('.tasks__item-wrap');
    [].forEach.call(filterTab.children, function (el) {
        el.classList.remove("active");
    });
    e.target.classList.add('active');
    tasks.forEach((task) => {
        switch (e.target.innerHTML) {
            case 'All':
                task.style.display = 'block';
                break;
            case 'Done':
                if (task.classList.contains('completed')) {
                    task.style.display = 'block';
                } else { task.style.display = 'none'; }
                break;
            case 'Active':
                if (!task.classList.contains('completed')) {
                    task.style.display = 'block';
                } else { task.style.display = 'none'; }
                break;
        }
    })
}
function removeLocalTasks(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) { tasks = []; }
    else { tasks = JSON.parse(localStorage.getItem('tasks')); }
    const taskIndex = task.children[0].innerText;
    tasks.splice(tasks.indexOf(taskIndex), 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

/* Demo JS */
import './demo.js';
