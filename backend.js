function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const taskList = document.getElementById('task-list');
    const newTask = document.createElement('li');
    newTask.innerHTML = `
        <span>${taskText}</span>
        <button onclick="editTask(this)">Edit</button>
        <button onclick="deleteTask(this)">Delete</button>
        <button onclick="toggleComplete(this)">Complete</button>
    `;
    taskList.appendChild(newTask);
    taskInput.value = '';
}

function editTask(button) {
    const taskItem = button.parentElement;
    const taskText = taskItem.querySelector('span').innerText;
    const newTaskText = prompt('Edit task:', taskText);
    if (newTaskText !== null) {
        taskItem.querySelector('span').innerText = newTaskText;
    }
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}

function toggleComplete(button) {
    const taskItem = button.parentElement;
    taskItem.classList.toggle('completed');
}
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
