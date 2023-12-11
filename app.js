document.addEventListener('DOMContentLoaded', function () {
  const inputTask = document.getElementById('inputTask');
  const btnAdd = document.getElementById('btnAdd');
  const list = document.getElementById('list');

  // Cambiar el marcador de posición al cargar la página
  inputTask.placeholder = 'Ingrese un texto';

  btnAdd.addEventListener('click', function () {
    const taskText = inputTask.value.trim();

    if (taskText !== '') {
      createTask(taskText);
      inputTask.value = '';
    }
  });

  function createTask(taskText) {
    const task = {
      text: taskText,
      id: new Date().getTime(),
    };

    const li = document.createElement('li');
    li.innerHTML = `
      <span>${task.text}</span>
      <button onclick="updateTask(${task.id})">Update</button>
      <button onclick="deleteTask(${task.id})">Delete</button>
    `;
    li.setAttribute('data-task-id', task.id);
    list.appendChild(li);
  }

  window.updateTask = function (taskId) {
    const li = document.querySelector(`li[data-task-id="${taskId}"]`);
    const newText = prompt('Enter new task text:', li.querySelector('span').innerText);

    if (newText !== null) {
      li.querySelector('span').innerText = newText;
    }
  };

  window.deleteTask = function (taskId) {
    const li = document.querySelector(`li[data-task-id="${taskId}"]`);
    list.removeChild(li);
  };
});
