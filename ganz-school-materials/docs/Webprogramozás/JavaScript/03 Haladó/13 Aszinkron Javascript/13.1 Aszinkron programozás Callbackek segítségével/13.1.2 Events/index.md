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

## Gyakorlati feladatok

<details className="dropdown-task">

  <summary><strong>Modal</strong></summary>
   
Ez a kód egy **információs modal ablakot** valósít meg, amely egy felugró ablakként jelenik meg a képernyő közepén, amikor egy gombra kattintasz. A modal ablak célja további információk megjelenítése. A lenti példában lehetőség van egy külön gomb vagy a háttérre kattintás segítségével bezárni.

```html
<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Információs Modal</title>
  <style>
/* Alapértelmezett stílusok a body elemhez */
body {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; /* Betűtípus beállítása */
  background: #282c34; /* Háttérszín beállítása */
  color: #fff; /* Szöveg színe fehér */
  display: flex; /* Flexbox használata a középre igazításhoz */
  justify-content: center; /* Horizontálisan középre igazít */
  align-items: center; /* Vertikálisan középre igazít */
  height: 100vh; /* 100%-os magasság a viewport (képernyő) magasságához képest */
  margin: 0; /* Margin eltávolítása az alapértelmezett értékek miatt */
}

/* Gomb stílusa a modal megnyitásához */
.open-modal-btn {
  padding: 15px 25px; /* Párnázás a gomb körül */
  font-size: 18px; /* Betűméret beállítása */
  border: none; /* Nincs keret */
  border-radius: 10px; /* Lekerekített sarkok */
  background: #61dafb; /* Gomb háttérszín */
  color: #282c34; /* Gomb szövegének színe */
  cursor: pointer; /* Kéz kurzor, jelezve, hogy kattintható */
  box-shadow: 0 5px 15px rgba(0,0,0,0.3); /* Árnyék hozzáadása a gombhoz */
  transition: background 0.3s, transform 0.3s; /* Áttűnés a háttérszín és a transform változásához */
}

/* Hover effektus a gombon, amikor fölé viszed az egeret */
.open-modal-btn:hover {
  background: #21a1f1; /* Háttérszín világosabbá válik */
  transform: translateY(-3px); /* A gomb elmozdul egy kicsit felfelé */
}

/* Modal stílusok */
.modal {
  position: fixed; /* A modal fix pozícióban jelenik meg */
  top: 0; /* A képernyő tetejére igazítva */
  left: 0; /* A képernyő bal oldalára igazítva */
  width: 100%; /* A modal szélessége 100% */
  height: 100%; /* A modal magassága 100% */
  background: rgba(0,0,0,0.6); /* Fekete háttér áttetsző árnyékkal */
  display: flex; /* Flexbox használata a tartalom középre igazításához */
  justify-content: center; /* Horizontálisan középre igazít */
  align-items: center; /* Vertikálisan középre igazít */
  opacity: 0; /* Alapértelmezés szerint láthatatlan */
  visibility: hidden; /* Alapértelmezés szerint rejtett */
  transition: opacity 0.3s, visibility 0.3s; /* Láthatóság és átlátszóság animálása */
}

/* Amikor a modal aktív, láthatóvá válik */
.modal.active {
  opacity: 1; /* Láthatóvá válik */
  visibility: visible; /* Láthatóvá válik */
}

/* Modal tartalom stílusai */
.modal-content {
  background: #fff; /* Fehér háttér */
  color: #333; /* Sötét szövegszín */
  padding: 30px; /* Párnázás a modal tartalom körül */
  border-radius: 10px; /* Lekerekített sarkok */
  width: 80%; /* A modal szélessége 80% */
  max-width: 500px; /* A modal maximális szélessége 500px */
  position: relative; /* A modal tartalom pozíciója relatív, hogy a bezáró gombot pozicionálhassuk */
  text-align: center; /* A szöveg középre igazítása */
  box-shadow: 0 5px 15px rgba(0,0,0,0.3); /* Árnyék hozzáadása a modal tartalomhoz */
  animation: fadeIn 0.3s ease-out; /* Fade-in animáció a modal tartalomhoz */
}

/* Animáció a modal tartalom belépéséhez */
@keyframes fadeIn {
  from { transform: translateY(-50px); opacity: 0; } /* Kezdeti állapot: kicsit feljebb és láthatatlan */
  to { transform: translateY(0); opacity: 1; } /* Végső állapot: a modal a helyére ér és láthatóvá válik */
}

/* A modal bezárásához használt gomb stílusa */
.close-modal-btn {
  position: absolute; /* A gomb pozícióját abszolút helyezésben adjuk meg */
  top: 15px; /* A gomb a modal tetejére kerül */
  right: 15px; /* A gomb a modal jobb oldalára kerül */
  background: #e74c3c; /* Piros háttérszín */
  border: none; /* Nincs keret */
  color: #fff; /* Fehér szöveg */
  padding: 5px 10px; /* Párnázás a gomb körül */
  border-radius: 5px; /* Lekerekített sarkok */
  cursor: pointer; /* Kéz kurzor */
  transition: background 0.3s; /* Háttérszín áttűnése */
}

/* Hover effektus a bezáró gombon */
.close-modal-btn:hover {
  background: #c0392b; /* Sötétebb piros háttér a gombon hover esetén */
}

/* A modal tartalmában található h2 elem stílusa */
.modal-content h2 {
  margin-top: 0; /* Eltávolítja a felső margót */
}

  </style>
</head>
<body>

    <!-- tartalom --> 

    </body>

<script>


    // Hivatkozások


    // Modal megnyitása


    // Modal bezárása a gombra kattintva


    // Modal bezárása a háttérre kattintva

</script>

</body>
</html>
```

</details>


## Projekt feladatok