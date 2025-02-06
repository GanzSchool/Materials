## Todo List - megoldás

```html
<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Dinamikus To-Do Lista</title>
  <style>
    body {
      background: linear-gradient(135deg, #f06, #f79);
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }

    .container {
      background: #fff;
      padding: 20px 30px;
      border-radius: 15px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.2);
      width: 300px;
      text-align: center;
    }

    h2 {
      margin-bottom: 20px;
      color: #333;
    }

    input[type="text"] {
      width: 80%;
      padding: 10px;
      border: 2px solid #f06;
      border-radius: 5px;
      margin-bottom: 10px;
      transition: border-color 0.3s;
    }

    input[type="text"]:focus {
      border-color: #333;
      outline: none;
    }

    button {
      padding: 10px 20px;
      background: #f06;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background 0.3s;
    }

    button:hover {
      background: #c0058e;
    }

    ul {
      list-style: none;
      padding: 0;
      margin-top: 20px;
    }

    li {
      background: #f9f9f9;
      padding: 10px;
      margin-bottom: 10px;
      border-radius: 5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: background 0.3s;
    }

    li:hover {
      background: #e9e9e9;
    }

    .delete-btn {
      background: #e74c3c;
      border: none;
      color: #fff;
      padding: 5px 10px;
      border-radius: 5px;
      cursor: pointer;
      transition: background 0.3s;
    }

    .delete-btn:hover {
      background: #c0392b;
    }
  </style>
</head>
<body>

  <div class="container">
    <h2>To-Do Lista</h2>
    <input type="text" id="todoInput" placeholder="Új feladat...">
    <button id="addBtn">Hozzáadás</button>
    <ul id="todoList"></ul>
  </div>

  <script>

const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

addBtn.addEventListener('click', addTask);
todoInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTask();
});

function addTask() {
  const task = todoInput.value.trim();
  if (!task) return;

  const li = document.createElement('li');
  li.textContent = task;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Törlés';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.addEventListener('click', () => li.remove());

  li.appendChild(deleteBtn);
  todoList.appendChild(li);
  todoInput.value = '';
}




  </script>

</body>
</html>
```