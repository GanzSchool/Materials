---
title: Events
sidebar_label: Events
---

## Események nyomonkövetése: Event

Az **aszinron programozás** egyik alapvető elemei a **timer függvények** mellett a **event függvények**. Az **eventek függvények** azért kapcsolódnak szorosan az aszinkron javascript programozáshoz, mert az **event függvények** lehetővé teszik, hogy a program úgy reagáljon a különböző felhasználó által generált történésekre, hogy a fő végrehajtási szálat blokkolná.

#### Események az Aszinkron Programozásban

Az **Event Listener** egy olyan mechanizmus JavaScript-ben, amely lehetővé teszi, hogy a kód figyeljen egy adott esemény bekövetkeztére egy HTML elemben (pl. kattintás, billentyűleütés, görgetés). Az esemény bekövetkezésekor a hozzá rendelt callback függvény automatikusan végrehajtódik.

Az események kezelésére az **Eseménykezelők (Event Handlers)** segítségével kerül sor. Ezek olyan függvények, amelyek meghatározzák, hogyan reagáljon a program egy adott eseményre. 

#### Események Kezelése Callbackekkel

 Amikor egy esemény bekövetkezik, a hozzá tartozó callback függvény meghívódik, amely végrehajtja a szükséges műveleteket.

Például, ha egy gombra kattintanak, az eseménykezelő callback függvénye végrehajtódik. Ez biztosítja, hogy a felhasználói interakciók zökkenőmentesen működjenek, anélkül hogy a program blokkolódna.

<details className="dropdown-task">
  <summary><strong>Példa az alapszintaktika belső működésére</strong></summary>

Az alábbi példában egy egyszerű **Event Listener** szerepel, amely figyel egy gombra történő kattintást. Figyeljük meg az **event handler**-t.

#### Példa: Gombra történő kattintás figyelése

```html
<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Event Listener Példa</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      margin-top: 50px;
    }
    button {
      padding: 10px 20px;
      font-size: 16px;
      background-color: #3498db;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    button:hover {
      background-color: #2980b9;
    }
    p {
      font-size: 18px;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <h1>Event Listener Példa</h1>
  <button id="myButton">Kattints rám!</button>
  <p id="output">Itt fog megjelenni a kattintás eredménye.</p>

  <script>
    // HTML elem kiválasztása
    const button = document.getElementById('myButton');
    const output = document.getElementById('output');

    // Event handler (az eseménykezelő függvény)
    function handleClick() {
      output.textContent = 'A gombra kattintottál!';
    }

    // Event listener hozzáadása
    button.addEventListener('click', handleClick);
  </script>
</body>
</html>
```

#### Magyarázat:
1. **HTML Elem:**  
   - A `<button>` elem az az elem, amelyre az esemény figyelni fog.

2. **Event Handler:**  
   - A `handleClick` nevű függvény a konkrét eseménykezelő. Ez tartalmazza azt a logikát, amit végre kell hajtani, amikor a gombra kattintanak. Ebben az esetben a függvény egyszerűen megváltoztatja egy `<p>` elem szövegét.

3. **Event Listener:**  
   - A `button.addEventListener('click', handleClick);` sor hozzáadja az eseményfigyelőt a gombhoz. Ez azt jelenti, hogy amikor a felhasználó rákattint a gombra (az kattintási esemény bekövetkezik), a `handleClick` függvény automatikusan lefut.

#### Összegzés
- Az **`handleClick`** függvény az, amely megmutatja, mit történjen az esemény bekövetkezésekor.
- Az **`addEventListener`** köt össze egy adott eseményt (`'click'`) és az eseménykezelő függvényt (`handleClick`).

</details>



### Fontos Eseménykezelő Függvények és Módszerek

Az események kezeléséhez több fontos függvény és módszer áll rendelkezésre a JavaScriptben. Ezek közül a legfontosabbakat az alábbiak:

<details className="dropdown-task">
  <summary><strong>addEventListener</strong></summary>
  
   Az `addEventListener` módszer lehetővé teszi, hogy egy adott eseményhez eseménykezelőt (callback függvényt) adjunk hozzá egy DOM elemhez. Ez a módszer rugalmas és lehetővé teszi több eseménykezelő hozzáadását ugyanarra az eseményre.

   **Szintaxis:**
   ```javascript
   elem.addEventListener(eventType, callback, useCapture);
   ```
   
   - `eventType`: Az esemény típusa (pl. 'click', 'mouseover').
   - `callback`: A függvény, amelyet az esemény bekövetkeztekor hívnak meg.
   - `useCapture` (opcionális): Boolean érték, amely meghatározza, hogy az esemény fogása a felfelé (bubbling) vagy lefelé (capturing) fázisban történjen.

   **Példa:**
   ```javascript
   const button = document.querySelector('button');
   button.addEventListener('click', function(event) {
     console.log('Gomb kattintva!');
   });
   ```

</details>

<details className="dropdown-task">
  <summary><strong>removeEventListener</strong></summary>
   
   Az `removeEventListener` módszer segítségével eltávolíthatunk egy korábban hozzáadott eseménykezelőt. Ehhez ugyanazokat a paramétereket kell használnunk, mint az `addEventListener` esetében.

   **Szintaxis:**
   ```javascript
   elem.removeEventListener(eventType, callback, useCapture);
   ```
   
   **Példa:**
   ```javascript
   function handleClick(event) {
     console.log('Gomb kattintva!');
   }

   button.addEventListener('click', handleClick);
   // Eseménykezelő eltávolítása
   button.removeEventListener('click', handleClick);
   ```

</details>

<details className="dropdown-task">
  <summary><strong>dispatchEvent</strong></summary>
   
   A `dispatchEvent` módszer lehetővé teszi egy esemény manuális kiváltását egy DOM elemen. Ez különösen hasznos lehet teszteléskor vagy saját események létrehozásakor.

   **Szintaxis:**
   ```javascript
   elem.dispatchEvent(event);
   ```
   
   **Példa:**
   ```javascript
   const event = new Event('build');
   button.dispatchEvent(event);
   ```

</details>

<details className="dropdown-task">
  <summary><strong>Event Object (Esemény Objektum)</strong></summary>
   
   Az eseménykezelők általában egy esemény objektumot (`event`) kapnak paraméterként, amely információkat tartalmaz az eseményről, például az esemény típusát, a cél elemet, az egér pozícióját stb.

   **Példa:**
   ```javascript
   button.addEventListener('click', function(event) {
     console.log('Esemény típusa:', event.type);
     console.log('Cél elem:', event.target);
   });
   ```

</details>

<details className="dropdown-task">
  <summary><strong>once Opci</strong></summary>
   
   Az `addEventListener` harmadik paramétere egy opciós objektum is lehet, amely beállítható a `once` tulajdonság segítségével. Ha `true`, az eseménykezelő csak egyszer hajtódik végre, majd automatikusan eltávolításra kerül.

   **Példa:**
   ```javascript
   button.addEventListener('click', function(event) {
     console.log('Ez csak egyszer történik meg!');
   }, { once: true });
   ```

</details>

<details className="dropdown-task">
  <summary><strong>event.preventDefault() és event.stopPropagation()</strong></summary>
   
   Az eseménykezelők gyakran használják az `event` objektum metódusait az esemény viselkedésének módosítására:
   
   - `event.preventDefault()`: Megakadályozza az esemény alapértelmezett viselkedését (pl. egy link kattintásakor a böngésző átirányítását).
   - `event.stopPropagation()`: Megakadályozza, hogy az esemény továbbterjedjen a DOM fa többi részére (pl. ne fusson le a szülő elemek eseménykezelője).

   **Példa:**
   ```javascript
   const link = document.querySelector('a');
   link.addEventListener('click', function(event) {
     event.preventDefault(); // Megakadályozza a link követését
     event.stopPropagation(); // Megakadályozza az esemény továbbterjedését
     console.log('Link kattintva, de nem követi az URL-t!');
   });
   ```

</details>

<details className="dropdown-task">
  <summary><strong>Eseménydelegáció (Event Delegation)</strong></summary>
   
   Az eseménydelegáció egy olyan technika, ahol egy közös szülő elemhez adjuk hozzá az eseménykezelőt, és az esemény célja alapján kezeljük a gyermek elemek eseményeit. Ez különösen hasznos dinamikusan létrehozott elemek esetén.

   **Példa:**
   ```javascript
   const list = document.querySelector('ul');
   list.addEventListener('click', function(event) {
     if (event.target && event.target.nodeName === 'LI') {
       console.log('List item clicked:', event.target.textContent);
     }
   });
   ```

</details>

### Gyakran Használt Esemény Típusok

A JavaScript számos beépített eseményt támogat, amelyek különböző interakciókra és történésekre reagálnak. Íme néhány gyakran használt eseménytípus:

<details className="dropdown-task">
  <summary><strong>UI Események:</strong></summary>
   
  - `load`: Az oldal teljes betöltődése.
  - `DOMContentLoaded`: A HTML dokumentum betöltődése és feldolgozása, mielőtt a külső erőforrások (képek, stílusok) betöltődnének.
  - `resize`: Az ablak méretének megváltozása.
  - `scroll`: Az oldal görgetése.

</details>

<details className="dropdown-task">
  <summary><strong>Egér Események:</strong></summary>
   
  - `click`: Egér kattintás.
  - `dblclick`: Kettős kattintás.
  - `mouseover`: Az egérkurzor áthaladása egy elem fölött.
  - `mouseout`: Az egérkurzor elhagyja egy elem területét.
  - `mousedown`: Az egérgomb lenyomása.
  - `mouseup`: Az egérgomb felengedése.

</details>

<details className="dropdown-task">

  <summary><strong>Billentyűzet Események:</strong></summary>
   
  - `keydown`: Billentyű lenyomása.
  - `keyup`: Billentyű felengedése.
  - `keypress`: Billentyű lenyomása és elhagyása közötti időszak.

</details>

<details className="dropdown-task">

  <summary><strong>Form Események:</strong></summary>
   
  - `submit`: Űrlap beküldése.
  - `change`: Űrlapmező értékének megváltozása.
  - `input`: Felhasználó bevitele egy űrlapmezőbe.

</details>

<details className="dropdown-task">

  <summary><strong>Érintés Események (Mobil):</strong></summary>
   
  - `touchstart`: Érintés kezdete.
  - `touchmove`: Érintés mozgása.
  - `touchend`: Érintés vége.

</details>

#### Események Prioritása és Bubbling

Az események kezelésénél fontos megérteni az események működésének módját és folyamatát. Ez két fázisból áll:

1. **Capturing Fázis (Fogás):** Az esemény a dokumentum gyökerétől indulva lefelé halad a cél elem felé.
2. **Bubbling Fázis (Buborékolás):** Az esemény a cél elemtől visszafelé terjed a dokumentum gyökeréig.

<details className="dropdown-task">

  <summary><strong>Folyamat a gyakorlatban</strong></summary>
   
Alapértelmezés szerint az események a bubbling fázisban kezelődnek, de a `useCapture` paraméter segítségével beállítható, hogy az esemény a capturing fázisban kerüljön kezelésre.

**Példa:**
```javascript
document.getElementById('parent').addEventListener('click', function(event) {
  console.log('Szülő elem kattintása');
}, false); // Bubbling fázis

document.getElementById('child').addEventListener('click', function(event) {
  console.log('Gyermek elem kattintása');
}, true); // Capturing fázis
```

Ebben a példában a gyermek elem kattintása először a capturing fázisban kezelődik, majd a bubbling fázisban a szülő elem kattintása is.

</details>

#### Összefoglalás

Az események kezelése a callback alapú aszinkron programozásban elengedhetetlen része a JavaScript fejlesztésnek. Az eseménykezelők révén a programok képesek dinamikusan reagálni a felhasználói interakciókra és más aszinkron történésekre. Ez hozzájárul ahhozi is, hogy hatékonyan használjuk az erőforrásokat.

## Gyakorlati feladatok.


## Projekt feladatok