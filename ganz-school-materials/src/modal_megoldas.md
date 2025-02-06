## Modal ablak - megoldás

```html
<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Információs Modal</title>
  <style>
    body {
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      background: #282c34;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }

    .open-modal-btn {
      padding: 15px 25px;
      font-size: 18px;
      border: none;
      border-radius: 10px;
      background: #61dafb;
      color: #282c34;
      cursor: pointer;
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
      transition: background 0.3s, transform 0.3s;
    }

    .open-modal-btn:hover {
      background: #21a1f1;
      transform: translateY(-3px);
    }

    /* Modal Styles */
    .modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.6);
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s, visibility 0.3s;
    }

    .modal.active {
      opacity: 1;
      visibility: visible;
    }

    .modal-content {
      background: #fff;
      color: #333;
      padding: 30px;
      border-radius: 10px;
      width: 80%;
      max-width: 500px;
      position: relative;
      text-align: center;
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
      animation: fadeIn 0.3s ease-out;
    }

    @keyframes fadeIn {
      from { transform: translateY(-50px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }

    .close-modal-btn {
      position: absolute;
      top: 15px;
      right: 15px;
      background: #e74c3c;
      border: none;
      color: #fff;
      padding: 5px 10px;
      border-radius: 5px;
      cursor: pointer;
      transition: background 0.3s;
    }

    .close-modal-btn:hover {
      background: #c0392b;
    }

    .modal-content h2 {
      margin-top: 0;
    }
  </style>
</head>
<body>

  <button class="open-modal-btn" id="openModalBtn">Információ Megnyitása</button>

  <div class="modal" id="modal">
    <div class="modal-content">
      <button class="close-modal-btn" id="closeModalBtn">X</button>
      <h2>Üdvözöljük!</h2>
      <p>Ez egy információs modal ablak. Kattintson az X-re a bezáráshoz.</p>
    </div>
  </div>

  <script>
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modal = document.getElementById('modal');

    // Modal megnyitása
    openModalBtn.addEventListener('click', () => {
      modal.classList.add('active');
    });

    // Modal bezárása a gombra kattintva
    closeModalBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });

    // Modal bezárása a háttérre kattintva
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  </script>

</body>
</html>
```