## Galaktikus Horoszkóp

```html
<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Galaktikus Horoszkóp</title>
  <style>
    /* Általános oldalstílus */
    body {
      margin: 0;
      padding: 0;
      min-height: 100vh;
      background: linear-gradient(135deg, #000428, #004e92);
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Courier New', Courier, monospace;
      overflow: hidden;
      position: relative;
    }

    /* Csillagok stílusa */
    .star {
      position: absolute;
      background-color: #fff;
      width: 2px;
      height: 2px;
      border-radius: 50%;
      opacity: 0.8;
      animation: twinkle 2s infinite ease-in-out;
    }
    @keyframes twinkle {
      0%, 100% { opacity: 0.8; }
      50% { opacity: 0.2; }
    }

    /* Konténer (űrállomás) */
    .container {
      background: rgba(255, 255, 255, 0.95);
      padding: 2em;
      border-radius: 15px;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
      text-align: center;
      width: 320px;
      position: relative;
      z-index: 1;
    }
    .container h2 {
      margin-bottom: 1em;
      color: #333;
      font-size: 1.8em;
    }
    .form-group {
      margin-bottom: 1em;
    }
    .form-group input {
      display: block;
      margin: 0.5em auto;
      width: 80%;
      padding: 0.8em;
      border: 2px solid #ccc;
      border-radius: 5px;
      font-size: 1em;
      outline: none;
      text-align: center;
      transition: border-color 0.3s;
    }
    .form-group input:focus {
      border-color: #1976d2;
    }
    button {
      display: block;
      margin: 1em auto;
      width: 80%;
      padding: 0.8em;
      border: none;
      border-radius: 5px;
      background-color: #1976d2;
      color: #fff;
      font-size: 1em;
      cursor: pointer;
      transition: background-color 0.3s;
    }
    button:hover {
      background-color: #1565c0;
    }
    .message {
      margin-top: 1em;
      font-size: 1.1em;
      font-weight: bold;
    }
    .success {
      color: #2e7d32;
    }
    .error {
      color: #c62828;
    }

    /* Rakéta animáció */
    .rocket {
      position: absolute;
      bottom: -100px;
      left: 50%;
      transform: translateX(-50%);
      width: 50px;
      transition: bottom 2s ease-out;
      z-index: 2;
    }
    .rocket.show {
      bottom: 100%;
    }
  </style>
</head>
<body>
  <!-- Csillagok generálása -->
  <script>
    function createStars(num) {
      const body = document.body;
      for (let i = 0; i < num; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.animationDelay = Math.random() * 2 + 's';
        body.appendChild(star);
      }
    }
    createStars(100);
  </script>

  <div class="container">
    <h2>Galaktikus Horoszkóp</h2>
    <div class="form-group">
      <input type="text" id="zodiac" placeholder="Csillagjegy (pl. Oroszlán)">
    </div>
    <button id="predictButton">Előrejelzés</button>
    <div id="message" class="message"></div>
  </div>

  <!-- Rakéta kép -->
  <img src="https://i.imgur.com/6X4D1.jpg" alt="Rakéta" class="rocket" id="rocket">

  <script>
    // Horoszkóp adatok JSON formátumban
    const horoscopesJSON = `{
      "kos": "Ma a bátorság csillagai ragyognak rád. Kezdd a napot új energiával!",
      "bika": "A Föld és a csillagok harmóniában vannak veled. Bízz a belső erődben.",
      "ikrek": "Ma a kommunikáció galaktikus ritmusban működik. Merj új ötletekkel előrukkolni!",
      "rák": "Az érzelmeid csillagfényként ragyognak. Vigyázz a családodra!",
      "oroszlán": "A csillagok erőt adnak, légy merész, mint a csillagközi király!",
      "szűz": "Rendszer és harmónia vezérel. Ideje rendet rakni a kozmoszban és az életedben!",
      "mérleg": "Ma a kiegyensúlyozottság és a szépség uralkodik. Találd meg az egyensúlyt!",
      "skorpió": "A mélységek titkai előtérbe kerülnek. Bízz az ösztöneidben!",
      "nyilas": "Kalandra fel! A csillagok új utakat nyitnak meg előtted.",
      "bak": "A kitartásod galaktikus méreteket ölt. Tartsd meg a fókuszt és a célt!",
      "vízöntő": "Az innováció szelleme átjárja a napodat. Légy nyitott az új lehetőségekre!",
      "halak": "A misztikum és az intuíció ma is veled van. Hagyd, hogy a csillagok vezessenek!"
    }`;
    // átalakítás objektummá

  
      const zodiacInput = document.getElementById('zodiac').value.trim().toLowerCase();
      const messageDiv = document.getElementById('message');

      // Üzenet visszajelzés az előrejelzés alatt
      // felirat töltéskor "Csillagokkal egyeztetés..."; (2 mp)
      // feltételes css osztály felvétel "success", "error";

      // Szimulált előrejelzési folyamat 2 másodperces késleltetéssel Promise segítségével!
      // Ha nem találtunk eredményt: "Ismeretlen csillagjegy. Kérjük, próbáld újra!");
      
      // Rakéta animáció indítása siker esetén
       document.getElementById('rocket').classList.add('show');

  </script>
</body>
</html>
```

## Segítség

A JavaScript-objektumokat kétféleképpen érheted el:

**Pontozott jelöléssel (dot notation):**  
   ```js
   object.key
   ```
   Ilyenkor a `key` szó *szó szerinti* tulajdonságként szerepel.  
   
**Szögletes zárójeles jelöléssel (bracket notation):**  
   ```js
   object["key"]
   ```
   Ebben az esetben a `"key"` egy **string**, és a JavaScript a string tartalmára hivatkozva keresi ki a megfelelő kulcsot.  
   
**Dinamikus jelölés (bracket notation):**  
   Ha nem egyszerűen egy konkrét stringet (pl. `"kos"`) szeretnél használni, hanem egy változó értékét (pl. `zodiacInput`), akkor a szögletes zárójeles formában írhatod:
   ```js
   object[zodiacInput]
   ```
   Itt a JavaScript először *kiértékeli a `zodiacInput` változó értékét*, majd azt használja kulcsként – így valóban *dinamikusan* keresed ki az adott objektum-kulcshoz tartozó értéket.

**Tehát**  
- A szögletes zárójeles forma úgy működik, mint egy kulcs–érték párosban a keresés: aminek az értéke a változó (jelen esetben `zodiacInput`) – a JavaScriptben ez az „indexelés” a hasonlóan működik, mint egy (kulcs, érték) alapú keresés egy „szótárban” vagy „objektumban”.  
- A JavaScript „tudja”, hogy te a `[zodiacInput]`-tel a `zodiacInput` változóban lévő (pl. `"kos"`) stringhez tartozó értéket szeretnéd. Ha a kulcs létezik, visszaadja az értékét (például a `"kos"` esetén a `"Ma a bátorság csillagai ragyognak rád..."` szöveget), ha nem, akkor `undefined` lesz az eredmény.

- A `horoscopes[zodiacInput]` egy *objektum-tulajdonság elérésére* szolgáló JavaScript-szintaxis. Mivel a `horoscopes` egy objektum, benne kulcs–érték párokkal (például `{"kos": "...", "bika": "...", ...}`), a „zodiacInput” változóban lévő szöveg (például `"kos"`, `"bika"`, stb.) alapján nyerjük ki az adott kulcshoz tartozó értéket. 

**Miért nem `horoscopes.zodiacInput`?**  
- Mert úgy a JavaScript egy *konkrét* „zodiacInput” nevű tulajdonságot keresne az objektumban (tehát mint stringet, nem pedig a változó értékét), ami nincs. A szögletes zárójeles forma (`horoscopes[zodiacInput]`) lehetővé teszi, hogy a kulcs nevét dinamikusan, a változó *tényleges értéke* alapján keressük meg. Így ha a felhasználó beírja például, hogy „**Bika**”, abból a program `"bika"` lesz, és ez alapján tudjuk kikeresni a `horoscopes` objektum `bika` kulcsú értékét.