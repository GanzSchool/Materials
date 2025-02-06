## Galery - megoldás

```html
<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Kép Galéria</title>
  <style>
    body {
      font-family: 'Verdana', sans-serif;
      background-color: #f4f4f4;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
      margin: 0;
    }

    h1 {
      color: #333;
    }

    .gallery {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      justify-content: center;
      margin-top: 20px;
    }

    .gallery img {
      width: 150px;
      height: 100px;
      object-fit: cover;
      border: 3px solid #fff;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      cursor: pointer;
      transition: transform 0.3s, border-color 0.3s;
    }

    .gallery img:hover {
      transform: scale(1.05);
      border-color: #f06;
    }

    .selected-image {
      margin-top: 30px;
      width: 80%;
      max-width: 600px;
      border-radius: 10px;
      box-shadow: 0 10px 20px rgba(0,0,0,0.2);
      transition: opacity 0.5s;
    }

    .selected-image.hidden {
      opacity: 0;
      visibility: hidden;
    }

    .selected-image.visible {
      opacity: 1;
      visibility: visible;
    }
  </style>
</head>
<body>

  <h1>Kép Galéria</h1>
  
  <div class="gallery">
    <img src="https://picsum.photos/id/1015/300/200" alt="Kép 1">
    <img src="https://picsum.photos/id/1025/300/200" alt="Kép 2">
    <img src="https://picsum.photos/id/1035/300/200" alt="Kép 3">
    <img src="https://picsum.photos/id/1045/300/200" alt="Kép 4">
    <img src="https://picsum.photos/id/1055/300/200" alt="Kép 5">
  </div>

  <img src="" alt="Kiválasztott Kép" id="selectedImage" class="selected-image hidden">

  <script>
    const gallery = document.querySelector('.gallery');
    const selectedImage = document.getElementById('selectedImage');

    gallery.addEventListener('click', (e) => {
      if (e.clientX.tagName === 'IMG') {
        selectedImage.src = e.target.src.replace('/300/200', '/600/400');
        selectedImage.classList.remove('hidden');
        selectedImage.classList.add('visible');
      }
    });

    // Kiválasztott kép bezárása kattintással a kép fölött
    selectedImage.addEventListener('click', () => {
      selectedImage.classList.remove('visible');
      selectedImage.classList.add('hidden');
    });
  </script>

</body>
</html>
```