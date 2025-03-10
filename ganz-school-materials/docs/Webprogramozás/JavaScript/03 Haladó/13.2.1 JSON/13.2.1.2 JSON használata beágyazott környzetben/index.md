---
title: JSON használata beágyazott környezetben
---

# JSON használata `beágyazott` környezetben

Amikor JSON-t közvetlenül a HTML oldalba ágyazunk be, akkor tulajdonképpen egy JavaScript objektumként definiáljuk azt a `<script>` tagben. Ez azt jelenti, hogy az adataink egy változóban vagy konstansban tárolódnak, és közvetlenül a kódunkból elérhetők anélkül, hogy külső forrásból kellene őket betölteni.

#### Miért van szükség beágyazásra?
Azért használjuk így, mert a JSON fájlokat alapértelmezés szerint nem lehet közvetlenül importálni egy HTML dokumentumból. Ha egy külön `.json` fájlt szeretnénk használni, ahhoz HTTP-kérést kellene indítani (`fetch` vagy más módszer segítségével), de ez a böngésző biztonsági korlátozásai miatt csak egy webszerveren működik.  

Ezzel a módszerrel viszont az adataink azonnal rendelkezésre állnak, és nincs szükség extra lépésekre az adatok beolvasásához.

A JSON célja általában az, hogy külső adatforrásként szolgáljon, ne pedig a kódba beégetett tartalomként legyen jelen. Ha így használnánk egy éles alkalmazásban, az azt jelentené, hogy minden adat a HTML fájlhoz lenne kötve, amit csak kézzel lehetne frissíteni. Ehelyett a JSON-t általában szerveren tároljuk, és dinamikusan kérjük le egy API segítségével, így az adatok külön kezelhetők és könnyen módosíthatók.

**Összességében tehát ez csak egy workaround, hogy JSON-t használjunk HTTP kérés nélkül, de a valódi alkalmazásokban ettől eltérő módszereket érdemes használni.**


## Gyakorlati feladatok

<details className="dropdown-task">

  <summary>
  <strong>JSON.parse Demo</strong>
  
  
  </summary>

```html
<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>JSON.parse Demo</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      background: #f2f2f2;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    .container {
      background: #fff;
      padding: 30px;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      text-align: center;
      width: 400px;
    }
    h1 {
      margin-bottom: 20px;
      color: #333;
    }
    button {
      background-color: #3498db;
      color: #fff;
      border: none;
      padding: 12px 20px;
      font-size: 16px;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    button:hover {
      background-color: #2980b9;
    }
    #dataDiv {
      margin-top: 20px;
      text-align: left;
      padding: 15px;
      border: 1px solid #ddd;
      border-radius: 4px;
      background: #fafafa;
    }
    p {
      margin: 8px 0;
    }
    strong {
      color: #555;
    }
  </style>
</head>
<body>

  <div class="container">
    <h1>JSON.parse Demo</h1>
    <button id="loadBtn">Adatok betöltése</button>
    <div id="dataDiv"></div>
  </div>

  <script>
    document.getElementById('loadBtn').addEventListener('click', () => {
      // JSON szöveg, amit be szeretnénk mutatni
      const jsonString = '{"name": "Anna", "age": 25, "hobbies": ["Olvasás", "Futás", "Túrázás"]}';
      

    });
  </script>

</body>
</html>
```

</details>

<details className="dropdown-task">

  <summary>
  <strong>JSON.stringify Demo</strong>
  
  
  </summary>


```html
<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>JSON.stringify Demo</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      background: #f2f2f2;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    .container {
      background: #fff;
      padding: 30px;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      text-align: center;
      width: 400px;
    }
    h1 {
      margin-bottom: 20px;
      color: #333;
    }
    button {
      background-color: #e67e22;
      color: #fff;
      border: none;
      padding: 12px 20px;
      font-size: 16px;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    button:hover {
      background-color: #d35400;
    }
    #output {
      margin-top: 20px;
      text-align: left;
      padding: 15px;
      border: 1px solid #ddd;
      border-radius: 4px;
      background: #fafafa;
      white-space: pre-wrap; /* Megőrzi az új sorokat */
      font-family: 'Courier New', Courier, monospace;
    }
  </style>
</head>
<body>

  <div class="container">
    <h1>JSON.stringify Demo</h1>
    <button id="stringifyBtn">Adatok konvertálása</button>
    <div id="output"></div>
  </div>

  <script>
    document.getElementById('stringifyBtn').addEventListener('click', function() {
      // Egy JavaScript objektum, amit JSON szöveggé szeretnénk alakítani
      const data = {
        name: "Anna",
        age: 25,
        hobbies: ["Olvasás", "Futás", "Túrázás"]
      };


    });
  </script>

</body>
</html>
```

</details>


<details className="dropdown-task">

  <summary>
  <strong>JSON.parse Array Demo</strong>
  
  
  </summary>

```html
<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>JSON.parse Array Demo</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      background: #f2f2f2;
      margin: 0;
      padding: 20px;
    }
    .container {
      max-width: 400px;
      background: #fff;
      padding: 20px;
      margin: 0 auto;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      text-align: center;
    }
    button {
      background-color: #3498db;
      border: none;
      color: #fff;
      padding: 10px 15px;
      font-size: 16px;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background-color: #2980b9;
    }
    #output {
      margin-top: 15px;
      text-align: left;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      background: #fafafa;
      font-family: 'Courier New', Courier, monospace;
      white-space: pre-wrap;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>JSON.parse Array Demo</h1>
    <button id="parseBtn">Tömb betöltése</button>
    <div id="output"></div>
  </div>
  <script>
    document.getElementById('parseBtn').addEventListener('click', function() {
      // JSON szöveg, ami egy tömböt tartalmaz
      const jsonString = '["alma", "banán", "cseresznye"]';
      // JSON.parse átalakítja a szöveget JavaScript tömbbé

    });
  </script>
</body>
</html>
```

</details>

<details className="dropdown-task">

  <summary>
  <strong>JSON.stringify Array Demo</strong>
  
  
  </summary>

```html
<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>JSON.stringify Array Demo</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      background: #f2f2f2;
      margin: 0;
      padding: 20px;
    }
    .container {
      max-width: 400px;
      background: #fff;
      padding: 20px;
      margin: 0 auto;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      text-align: center;
    }
    button {
      background-color: #e67e22;
      border: none;
      color: #fff;
      padding: 10px 15px;
      font-size: 16px;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background-color: #d35400;
    }
    #output {
      margin-top: 15px;
      text-align: left;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      background: #fafafa;
      font-family: 'Courier New', Courier, monospace;
      white-space: pre-wrap;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>JSON.stringify Array Demo</h1>
    <button id="stringifyBtn">Tömb konvertálása</button>
    <div id="output"></div>
  </div>
  <script>
    document.getElementById('stringifyBtn').addEventListener('click', function() {
      // JavaScript tömb
      const fruits = ["alma", "banán", "cseresznye"];


    });
  </script>
</body>
</html>
```



</details>