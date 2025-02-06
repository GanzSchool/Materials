## Switch - megoldás

```html
<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Stílusváltó Gomb</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      transition: background-color 0.5s, color 0.5s;
      background-color: #f0f0f0;
      color: #333;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }

    .theme-toggle-btn {
      padding: 15px 30px;
      font-size: 16px;
      border: none;
      border-radius: 30px;
      background: linear-gradient(45deg, #ff6b6b, #f06595);
      color: #fff;
      cursor: pointer;
      box-shadow: 0 8px 15px rgba(0,0,0,0.1);
      transition: transform 0.3s, box-shadow 0.3s;
    }

    .theme-toggle-btn:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 20px rgba(0,0,0,0.2);
    }

    .dark-mode {
      background-color: #2c3e50;
      color: #ecf0f1;
    }

    .dark-mode .theme-toggle-btn {
      background: linear-gradient(45deg, #3498db, #8e44ad);
    }
  </style>
</head>
<body>



  <button class="theme-toggle-btn" id="toggleBtn">Sötét Mód</button>

  <script>
    const toggleBtn = document.getElementById('toggleBtn');
    const body = document.body;

    toggleBtn.addEventListener('click', () => {
      body.classList.toggle('dark-mode');

    });
  </script>

</body>
</html>
```