
## DOLGOZAT | Téma: DOM műveletek, Asszinkron JavaScript Callbackek segítségével - Events | GYAKORLAT

```html
<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Egérmozgás Követése</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #fafafa;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100vh;
      justify-content: center;
    }

    h1 {
      margin-bottom: 20px;
      color: #333;
    }

    .coords {
      font-size: 1.5rem;
      color: #555;
    }
  </style>
</head>
<body>
  <h1>Egérkoordináták</h1>
  <p class="coords" id="coordDisplay">X: 0, Y: 0</p>

  <script>
    const coordDisplay = document.getElementById('coordDisplay');
    
    // Egér mozgás esemény figyelése
    [1].[2]('mousemove', (e) => {
      coordDisplay.[3] = `X: ${e.clientX}, Y: ${e.clientY}`;
    });
  </script>
</body>
</html>
```

---

```html
<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Egér események: mouseover és mouseout</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      background: #f0f0f0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .box {
      width: 200px;
      height: 200px;
      background: #3498db;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 1.5rem;
      border-radius: 10px;
      transition: transform 0.3s, background 0.3s;
      cursor: pointer;
      box-shadow: 0 10px 15px rgba(0,0,0,0.1);
    }

    .box:hover {
      transform: scale(1.05);
    }

    .box.over {
      background: #2ecc71;
    }
  </style>
</head>
<body>
  
  <div class="box" id="colorBox">Gyere rám!</div>

  <script>
    const colorBox = document.getElementById('colorBox');

    // Egér ráviszi
    [4].[5]([6], () => {
      colorBox.textContent = 'Megfogtál!';
      colorBox.classList.add('over');
    });

    // Egér elhagyja
    [7].[8]([9], () => {
      colorBox.textContent = 'Gyere rám!';
      colorBox.classList.remove('over');
    });
  </script>

</body>
</html>
```


---

```html
<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Contextmenu Példa</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #bdc3c7;
      margin: 0;
      padding: 0;
      display: flex;
      height: 100vh;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    .box {
      background: #fff;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 5px 20px rgba(0,0,0,0.2);
    }

    h1 {
      color: #333;
      margin-bottom: 20px;
    }

    p {
      font-size: 1.1rem;
      color: #666;
    }
  </style>
</head>
<body>
  <div class="box">
    <h1>Kattints jobb gombbal</h1>
    <p>Ez a példa megakadályozza a jobb gombos menüt (contextmenu).</p>
  </div>

  <script>
    
    window.addEventListener('contextmenu', [10] {
      [11].preventDefault();
      alert('A jobb egérgombos menü tiltva van ezen a területen!');
    });
  </script>
</body>
</html>
```


---

```html
<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Drag and Drop To-Do</title>
  <style>
    body {
      margin: 0; 
      padding: 0;
      font-family: Arial, sans-serif;
      background: #ececec;
      display: flex;
      justify-content: space-around;
      align-items: flex-start;
      padding-top: 50px;
      min-height: 100vh;
    }
    .list-container {
      background: #fff;
      width: 300px;
      border-radius: 10px;
      box-shadow: 0 8px 20px rgba(0,0,0,0.1);
      padding: 1rem;
    }
    h2 {
      text-align: center;
      color: #333;
    }
    .task {
      background: #f9f9f9;
      margin: 10px 0;
      padding: 10px;
      border-radius: 5px;
      cursor: move;
      border: 1px solid #ddd;
    }
    .task:hover {
      background: #e9e9e9;
    }
    .list-container.over {
      border: 2px dashed #3498db;
    }
  </style>
</head>
<body>

  <div class="list-container" id="todoList">
    <h2>Teendők</h2>
    <div class="task" draggable="true">Kávé vásárlás</div>
    <div class="task" draggable="true">Számlák befizetése</div>
    <div class="task" draggable="true">Email küldés főnöknek</div>
  </div>

  <div class="list-container" id="doneList">
    <h2>Elvégzett feladatok</h2>
  </div>

  <script>
    const tasks = document.querySelectorAll('.task');
    const lists = document.querySelectorAll('.list-container');
    let draggedItem = null;

    [12].forEach(task => {
      task.[13]('dragstart', () => {
        draggedItem = task;
        setTimeout(() => {
          task.style.display = 'none';
        }, 0);
      });

      task.[14]('dragend', () => {
        task.style.display = 'block';
        draggedItem = null;
      });
    });

    lists.[15](list => {
      list.addEventListener('dragover', (e) => {
        e.preventDefault(); 
        list.[16].[17]('over');
      });

      list.addEventListener('dragleave', () => {
        list.[18].[19]('over');
      });

      list.[20]('drop', () => {
        list.classList.remove('over');
        if (draggedItem) {
          list.[21](draggedItem);
        }
      });
    });
  </script>

</body>
</html>
```

---

```html
<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Kedvencek Lista</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: linear-gradient(135deg, #74ebd5, #9face6);
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    .container {
      background: #fff;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.2);
      width: 350px;
      text-align: center;
    }
    h2 {
      color: #333;
      margin-bottom: 1rem;
    }
    input[type="text"] {
      width: 80%;
      padding: 0.8rem;
      border: 2px solid #3498db;
      border-radius: 5px;
      margin-bottom: 1rem;
      font-size: 1rem;
    }
    button {
      padding: 0.6rem 1rem;
      background: #3498db;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background 0.3s;
      font-size: 1rem;
    }
    button:hover {
      background: #2980b9;
    }
    ul {
      list-style: none;
      padding: 0;
      margin-top: 1.5rem;
    }
    li {
      background: #f7f7f7;
      margin-bottom: 0.7rem;
      padding: 0.7rem;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .remove-btn {
      background: #e74c3c;
      border: none;
      color: #fff;
      padding: 0.4rem 0.8rem;
      border-radius: 5px;
      cursor: pointer;
    }
    .remove-btn:hover {
      background: #c0392b;
    }
  </style>
</head>
<body>

<div class="container">
  <h2>Kedvencek Lista</h2>
  <input type="text" id="favInput" placeholder="Írd be a kedvenced...">
  <br>
  <button id="addBtn">Hozzáadás</button>
  <ul id="favList"></ul>
</div>

<script>
  const favInput = document.getElementById('favInput');
  const addBtn = document.getElementById('addBtn');
  const favList = document.getElementById('favList');

  [22].[23]('[24]', addFavorite);
  favInput.addEventListener('keydown', (e) => {
    if (e.[25] [26] '[27]') {
      addFavorite();
    }
  });

  function addFavorite() {
    const val = favInput.[28].[29];
    if (val) {
      const li = document.[30]([31]);
      li.textContent = val;

      const removeBtn = document.[32]('[33]');
      removeBtn.textContent = 'X';
      removeBtn.classList.add('remove-btn');
      removeBtn.[34]('[35]', () => {
        favList.removeChild(li);
      });

      li.appendChild(removeBtn);
      favList.[36](li);

      favInput.value = '';
      favInput.focus();
    }
  }
</script>

</body>
</html>
```



---

```html
<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Dinamkus Szűrő</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f7f7f7;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 50px;
      min-height: 100vh;
    }
    h1 {
      color: #333;
    }
    input[type="text"] {
      padding: 0.8rem;
      font-size: 1rem;
      width: 300px;
      border: 2px solid #ccc;
      border-radius: 5px;
      margin: 1rem 0;
    }
    ul {
      list-style: none;
      width: 300px;
      padding: 0;
    }
    li {
      background: #fff;
      margin: 5px 0;
      padding: 0.8rem;
      border-radius: 5px;
      box-shadow: 0 3px 6px rgba(0,0,0,0.1);
      transition: background 0.3s;
    }
    li:hover {
      background: #f0f0f0;
    }
    .hidden {
      display: none;
    }
  </style>
</head>
<body>

<h1>Dinamkus Szűrő</h1>
<input type="text" id="searchInput" placeholder="Keress a nevek között...">

<ul id="namesList">
  <li>András</li>
  <li>Béla</li>
  <li>Csilla</li>
  <li>Dóra</li>
  <li>Elemér</li>
  <li>Ferenc</li>
  <li>Géza</li>
</ul>

<script>
  const searchInput = document.getElementById('searchInput');
  const namesList = document.getElementById('namesList');
  const listItems = namesList.querySelectorAll('li');

  // "input" esemény: folyamatosan figyeli, ahogy a user gépel
  [37].[38]('input', () => {
    const filter = searchInput.value.toLowerCase();
    listItems.forEach(item => {
      const text = item.textContent.toLowerCase();
      // Ha illeszkedik a beírt szöveg, látszik, különben eltűntetjük.
      if (text.includes(filter)) {
        item.[39].[40]('hidden');
      } else {
        item.[41].[43]('hidden');
      }
    });
  });
</script>

</body>
</html>
```


---

```html
<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Lájk / Diszlájk Számláló</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      background: linear-gradient(45deg, #ffe259, #ffa751);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }
    .counter-box {
      background: #fff;
      padding: 2rem 3rem;
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
      text-align: center;
    }
    h1 {
      margin-bottom: 1rem;
      color: #333;
    }
    .count-display {
      font-size: 3rem;
      margin: 1rem 0;
      color: #e74c3c;
    }
    button {
      margin: 0.5rem;
      padding: 0.8rem 1.2rem;
      font-size: 1rem;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background 0.3s;
    }
    .like-btn {
      background: #2ecc71;
      color: #fff;
    }
    .dislike-btn {
      background: #e74c3c;
      color: #fff;
    }
    button:hover {
      opacity: 0.8;
    }
  </style>
</head>
<body>

<div class="counter-box">
  <h1>Lájk / Diszlájk Számláló</h1>
  <div class="count-display" id="countDisplay">0</div>
  <button class="like-btn" id="likeBtn">Like</button>
  <button class="dislike-btn" id="dislikeBtn">Dislike</button>
</div>

<script>
  const countDisplay = document.getElementById('countDisplay');
  const likeBtn = document.getElementById('likeBtn');
  const dislikeBtn = document.getElementById('dislikeBtn');

  let count = 0;

  [44].[45]('[46]', () => {
    count[47];
    updateDisplay();
  });

  dislikeBtn.addEventListener([48], () => {
    // Csak akkor csökkentsük, ha 0-nál több
    if (count [49] 0) {
      count--;
      updateDisplay();
    }
  });

  function updateDisplay() {
    countDisplay.[50] = count;
  }
</script>

</body>
</html>
```


---

```html
<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Kép Galéria</title>
  <style>
    /* Általános beállítások */
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: Arial, sans-serif;
      background: linear-gradient(135deg, #f0f0f0, #cccccc);
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 100vh;
      padding: 20px;
    }
    h1 {
      color: #333;
      margin-bottom: 20px;
    }

    /* Galéria-rács beállításai */
    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      gap: 15px;
      width: 100%;
      max-width: 1000px;
    }
    .gallery-item {
      position: relative;
      overflow: hidden;
      cursor: pointer;
      border-radius: 10px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    }
    .gallery-item img {
      display: block;
      width: 100%;
      height: auto;
      transition: transform 0.3s, filter 0.3s;
      border-radius: 10px;
    }
    .gallery-item:hover img {
      transform: scale(1.05);
      filter: brightness(0.9);
    }

    /* Modal-stílusok */
    .modal-overlay {
      position: fixed;
      top: 0; 
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0; 
      visibility: hidden;
      transition: opacity 0.3s, visibility 0.3s;
      z-index: 999;
    }
    .modal-overlay.active {
      opacity: 1;
      visibility: visible;
    }
    .modal-content {
      position: relative;
      background: #fff;
      padding: 10px;
      border-radius: 10px;
      max-width: 80%;
      max-height: 80%;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-shadow: 0 5px 20px rgba(0,0,0,0.4);
      animation: fadeIn 0.4s ease;
    }
    @keyframes fadeIn {
      from { transform: translateY(-30px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    .modal-img {
      max-width: 100%;
      max-height: 70vh;
      border-radius: 10px;
      object-fit: cover;
    }

    /* Bezárás ikon */
    .close-btn {
      position: absolute;
      top: 15px;
      right: 15px;
      background: #e74c3c;
      border: none;
      color: #fff;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      cursor: pointer;
      font-weight: bold;
      font-size: 1.2rem;
      transition: background 0.3s;
      text-align: center;
    }
    .close-btn:hover {
      background: #c0392b;
    }

    /* Lapozó gombok a modalban */
    .nav-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: #3498db;
      border: none;
      color: #fff;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      cursor: pointer;
      font-weight: bold;
      font-size: 1.2rem;
      transition: background 0.3s;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      opacity: 0.8;
    }
    .nav-btn:hover {
      background: #2980b9;
      opacity: 1;
    }
    .prev-btn {
      left: -60px;
    }
    .next-btn {
      right: -60px;
    }
    /* Mobilon a gombokat ne tegyük túl távol */
    @media (max-width: 600px) {
      .prev-btn {
        left: -40px;
      }
      .next-btn {
        right: -40px;
      }
    }
  </style>
</head>
<body>

  <h1>Kép Galéria</h1>

  <!-- Galéria rács -->
  <div class="gallery-grid" id="galleryGrid">
    <!-- Példaképek – csere “lorem picsum” URL-ekre, ha szükséges -->
    <div class="gallery-item">
      <img src="https://picsum.photos/id/1011/400/300" alt="Természet 1" data-full="https://picsum.photos/id/1011/1200/800">
    </div>
    <div class="gallery-item">
      <img src="https://picsum.photos/id/1022/400/300" alt="Természet 2" data-full="https://picsum.photos/id/1022/1200/800">
    </div>
    <div class="gallery-item">
      <img src="https://picsum.photos/id/1035/400/300" alt="Természet 3" data-full="https://picsum.photos/id/1035/1200/800">
    </div>
    <div class="gallery-item">
      <img src="https://picsum.photos/id/1045/400/300" alt="Természet 4" data-full="https://picsum.photos/id/1045/1200/800">
    </div>
    <div class="gallery-item">
      <img src="https://picsum.photos/id/1055/400/300" alt="Természet 5" data-full="https://picsum.photos/id/1055/1200/800">
    </div>
    <div class="gallery-item">
      <img src="https://picsum.photos/id/1065/400/300" alt="Természet 6" data-full="https://picsum.photos/id/1065/1200/800">
    </div>
    <div class="gallery-item">
      <img src="https://picsum.photos/id/1075/400/300" alt="Természet 7" data-full="https://picsum.photos/id/1075/1200/800">
    </div>
    <div class="gallery-item">
      <img src="https://picsum.photos/id/1085/400/300" alt="Természet 8" data-full="https://picsum.photos/id/1085/1200/800">
    </div>
  </div>

  <!-- Modal overlay és tartalom -->
  <div class="modal-overlay" id="modalOverlay">
    <div class="modal-content" id="modalContent">
      <button class="close-btn" id="closeBtn">×</button>
      <!-- Lapozó gombok -->
      <button class="nav-btn prev-btn" id="prevBtn">&#9664;</button>
      <button class="nav-btn next-btn" id="nextBtn">&#9654;</button>
      <img src="" alt="Nagyított kép" class="modal-img" id="modalImg">
    </div>
  </div>

  <script>

    const galleryGrid = document.getElementById('galleryGrid');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalImg = document.getElementById('modalImg');
    const closeBtn = document.getElementById('closeBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');


    const galleryImages = document.[51]('.gallery-item img');


    let currentIndex = 0;

    galleryImages.[52]((image, index) => {
      image.[53]([54], () => {
        currentIndex = index; // amelyikre kattintottunk, ahhoz rendeljük az indexet
        showModal(image);
      });
    });

  
    function showModal(imageElem) {
      const fullUrl = imageElem.getAttribute('data-full');
      modalImg.src = fullUrl;
      modalOverlay.classList.add('active');
    }


    [55].[56]('click', closeModal);


    modalOverlay.addEventListener('click', (e) => {
      
      if ([57].[58] === modalOverlay) {
        closeModal();
      }
    });


    function closeModal() {
      modalOverlay.classList.remove('active');
      modalImg.src = ''; 
    }


    prevBtn.addEventListener('click', showPrevious);
    nextBtn.addEventListener('click', showNext);

    function showPrevious() {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = galleryImages.length - 1;
      }
      updateModalImage();
    }

    function showNext() {
      currentIndex++;
      if (currentIndex >= galleryImages.length) {
        currentIndex = 0;
      }
      updateModalImage();
    }


    function updateModalImage() {
      const newImgElem = galleryImages[currentIndex];
      const fullUrl = newImgElem.getAttribute('data-full');
      modalImg.src = fullUrl;
    }

    window.addEventListener('keydown', (e) => {
      // Csak akkor léptetünk, ha a modalOverlay aktív 
      if (!modalOverlay.classList.contains('active')) return;

      if (e.[59] === 'Escape') {
        closeModal();
      } else if (e.[60] === 'ArrowLeft') {
        showPrevious();
      } else if (e.key === 'ArrowRight') {
        showNext();
      }
    });
  </script>
</body>
</html>
```
