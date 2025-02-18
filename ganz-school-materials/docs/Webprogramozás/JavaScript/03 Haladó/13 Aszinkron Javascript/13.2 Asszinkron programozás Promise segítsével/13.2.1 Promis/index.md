---
title: Promis
---

## Mi az a Promise?

Röviden: A **Promise** egy objektum, amely segít kezelni az aszinkron, nagyrészt hálózati műveleteket és azok eredményeit a háttérben. 

A JavaScript-ben a Promise egy speciális objektum, amely aszinkron  művelet eredményét „ígéri”. Három állapotot vehet fel: *pending* (még fut), *fulfilled* (sikeres) vagy *rejected* (hiba történt). A Promise két legfontosabb része a konstruktorban található *executor* függvény, valamint a rajta meghívható metódusok (*then*, *catch*, *finally*).

**alap szintagzis**

```js
const myPromise = new Promise((resolve, reject) => {
  // Itt történik az aszinkron művelet.
  const siker = true;
  if (siker) {
    resolve("Minden rendben!");
  } else {
    reject("Hiba történt!");
  }
});

myPromise
  .then((eredmeny) => {
    console.log("Sikeres futás:", eredmeny);
  })
  .catch((hiba) => {
    console.log("Hiba:", hiba);
  })
  .finally(() => {
    console.log("A Promise lezárult, bármi is történt.");
  });
```

- **new Promise(executor)**: Létrehoz egy új Promise objektumot. Az *executor* két paramétert kap, *resolve* és *reject* néven.  
- **resolve(érték)**: Jelzi, hogy a művelet sikeresen befejeződött, és átadja a *then* blokknak a kapott értéket.  
- **reject(hiba)**: Hibát jelez, amit a *catch* blokkon belül tudunk kezelni.  
- **then(eredményFeldolgozó)**: Ha a Promise *fulfilled* állapotúra vált, itt kapjuk meg a visszatérő értéket.  
- **catch(hibaKezelő)**: Ha *rejected* állapot lesz, ez fut le. Egyetlen paramétere az elkapott hibát tartalmazza.  
- **finally()**: Ez mindig lefut, függetlenül attól, hogy siker vagy hiba történt.  


## A Promise objektum felépítése és metódusainak működése

Az aszinkron műveletek kezelésében a Promise két lényeges részből áll, amelyek egymást kiegészítik:

**Executor függvény**  
**Promise objektum metódusai**




#### Executor függvény

Amikor létrehozol egy Promise-t a `new Promise((resolve, reject) => { ... })` szintaxis segítségével, a zárójelben lévő névtelen függvényt **executor függvénynek** nevezzük. Ez a függvény azonnal lefut a Promise példány létrejöttekor, és itt írod meg azt az aszinkron (vagy szinkron) logikát, ami eldönti, hogy a Promise sikeres (resolve) vagy sikertelen (reject) állapotba kerül-e.

**Példa egy logikai feltétellel:**

```javascript
const myPromise = new Promise((resolve, reject) => {
  // Például egy logikai feltétel:
  const feltetel = true; // Ezt dinamikusan is meghatározhatod

  if (feltetel) {
    // Ha a feltétel igaz, a Promise sikeresen teljesül
    resolve("A művelet sikeresen befejeződött!");
  } else {
    // Ha a feltétel hamis, a Promise elutasított állapotba kerül
    reject("Hiba történt a művelet során.");
  }
});
```

Ebben a példában a `feltetel` változó értéke alapján hívjuk meg a `resolve()` vagy a `reject()` függvényt.


#### A `resolve()` metódus

A `resolve(érték)` meghívásával azt jelezzük, hogy a Promise sikeresen befejeződött. A zárójelben megadott értéket (például `"A művelet sikeresen befejeződött!"`) aztán a `.then()` metódusban dolgozhatjuk fel.

**Kód példa:**

```javascript
// Ebben a részben már a Promise executor függvényében meghívjuk a resolve()-t:
resolve("A művelet sikeresen befejeződött!");
```


#### A `reject()` metódus

A `reject(hiba)` meghívásával jelezzük, hogy valamilyen hiba lépett fel, és a Promise elutasított állapotba kerül. A zárójelben átadott hibaüzenet vagy objektum a `.catch()` blokkban lesz elérhető.

**Kód példa:**

```javascript
// Ebben az esetben a Promise elutasítja az eredményt:
reject("Hiba történt a művelet során.");
```

#### A `.then()` metódus

A `.then()` metódusban adhatunk meg egy függvényt, amely akkor fut le, ha a Promise a `resolve()` meghívásával sikeresen teljesül. A függvény paraméterében megkapjuk a `resolve()` által átadott értéket.

**Példa:**

```javascript
myPromise.then((eredmeny) => {
  console.log("Promise sikeresen teljesült:", eredmeny);
});
```


####  `.catch()` metódus

A `.catch()` metódus egy függvényt vár paraméterként, amely akkor hívódik meg, ha a Promise a `reject()` hívása miatt elutasított állapotba kerül. Itt kezelheted a felmerült hibát.

**Példa:**

```javascript
myPromise.catch((hiba) => {
  console.error("Promise hibával tért vissza:", hiba);
});
```



**Példa alap szintaktikára:**



```javascript
const myPromise = new Promise((resolve, reject) => {
  const feltetel = true; // Itt adhatod meg a logikai feltételt

  if (feltetel) {
    resolve("A művelet sikeresen befejeződött!");
  } else {
    reject("Hiba történt a művelet során.");
  }
});

myPromise
  .then((eredmeny) => {
    console.log("Promise sikeresen teljesült:", eredmeny);
  })
  .catch((hiba) => {
    console.error("Promise hibával tért vissza:", hiba);
  });
```

---




## Gyakorlati példák

<details className="dropdown-task">

  <summary>
  <strong>Promise példa</strong>
  
  
  </summary>


```html
<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Promise - logikai példa</title>
  <style>
    /* Alap beállítások a testhez */
    body {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      background: linear-gradient(to right, #ffafbd, #ffc3a0); /* enyhe háttérátmenet */
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh; /* teljes képernyőmagasság */
    }

    /* Egy doboz, amely tartalmazza a kiírandó szöveget */
    .container {
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
      padding: 30px 40px;
      text-align: center;
      max-width: 400px;
      width: 80%;
      animation: fadeIn 0.8s ease-in-out;
    }

    /* Az eredmények megjelenítéséhez használt elemek alaphelyzetben eltérő stílusokkal */
    .result {
      font-size: 1.2rem;
      margin-top: 20px;
    }

    /* Sikert jelző osztály */
    .success {
      color: #2e7d32;
      border: 2px solid #2e7d32;
      padding: 10px;
      border-radius: 4px;
      transition: transform 0.2s;
    }
    .success:hover {
      background-color: #c8e6c9;
      transform: scale(1.03);
    }

    /* Hibát jelző osztály */
    .error {
      color: #c62828;
      border: 2px solid #c62828;
      padding: 10px;
      border-radius: 4px;
      transition: transform 0.2s;
    }
    .error:hover {
      background-color: #ffcdd2;
      transform: scale(1.03);
    }

    /* Egy kis animáció a doboz betöltéséhez */
    @keyframes fadeIn {
      0% {
        opacity: 0;
        transform: translateY(10px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Promise Példa</h1>
    <div id="result" class="result">Itt fog megjelenni az eredmény.</div>
  </div>

  <script>
    // Promise az aszinkron logika (jelen esetben egy sima feltétel) demonstrálására
    const myPromise = new Promise((resolve, reject) => {
      const a = 5;
      const b = 10;

      // Egyszerű feltétel: a > b?
      if (a > b) {
        resolve("a nagyobb, mint b.");
      } else {
        reject("a nem nagyobb, mint b.");
      }
    });

    // A HTML elemet eltároljuk, ahol majd az eredményt kiírjuk
    const resultDiv = document.getElementById("result");

    // Ha a Promise sikeres, akkor a .then() fut le
    myPromise
      .then((eredmeny) => {
        resultDiv.textContent = eredmeny;
        // Hozzáadjuk a "success" stílusosztályt
        resultDiv.classList.add("success");
      })
      // Ha a Promise hibás, a .catch() fut
      .catch((hiba) => {
        resultDiv.textContent = hiba;
        // Ekkor "error" osztályt adunk az elemhez
        resultDiv.classList.add("error");
      });
  </script>
</body>
</html>
```

</details>


## Gyakorlati feladatok


<details className="dropdown-task">

  <summary>
  <strong>Promise - szerencsejáték</strong>
  
  
  </summary>

```html
<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Promise Példa - Véletlenszerű eredmény</title>
  <style>
    body {
      margin: 0; 
      padding: 0;
      font-family: Arial, sans-serif;
      background: linear-gradient(to top right, #ffecd2, #fcb69f);
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    .container {
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.2);
      padding: 30px;
      text-align: center;
      max-width: 400px;
      width: 80%;
      animation: fadeIn 0.8s ease-in-out;
    }
    .result {
      margin-top: 20px;
      font-size: 1.2rem;
      min-height: 2em; /* hely fenntartása az üzenetnek */
    }
    .success {
      color: #2e7d32;
      border: 2px solid #2e7d32;
      padding: 10px;
      border-radius: 4px;
      transition: transform 0.2s;
    }
    .success:hover {
      background-color: #c8e6c9;
      transform: scale(1.03);
    }
    .error {
      color: #c62828;
      border: 2px solid #c62828;
      padding: 10px;
      border-radius: 4px;
      transition: transform 0.2s;
    }
    .error:hover {
      background-color: #ffcdd2;
      transform: scale(1.03);
    }
    @keyframes fadeIn {
      0% {
        opacity: 0;
        transform: translateY(10px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    button {
      background-color: #ff9800;
      border: none;
      color: #fff;
      padding: 10px 20px;
      margin-top: 15px;
      font-size: 1rem;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;
    }
    button:hover {
      background-color: #fb8c00;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Szerencsepróba</h1>
    <p>Kattints a gombra, és 2 másodperc múlva kiderül, hogy nyertél-e!</p>
    <button id="tryButton">Próba szerencse</button>
    <div id="result" class="result"></div>
  </div>

  <script>
    const button = document.getElementById("tryButton");
    const resultDiv = document.getElementById("result");

    button.addEventListener("click", () => {
      // Minden kattintás előtt töröljük az esetleges régi stílust és szöveget
      resultDiv.textContent = "";
      resultDiv.className = "result";

      // Új Promise létrehozása
      const lotteryPromise = new Promise((resolve, reject) => {
        // Szimulálunk egy 2 másodperces "munkát"
        setTimeout(() => {
          // Generálunk egy véletlenszámot 0 és 1 között
          const randomNum = Math.random();
          
          // 0.5-nél nagyobb szám esetén siker, különben hiba
          if (randomNum > 0.5) {
            resolve("Gratulálok, nyertél!");
          } else {
            reject("Sajnos most nem jött össze. Próbáld újra!");
          }
        }, 2000);
      });

      // Promise sikeres lefutása => .then()
      lotteryPromise
        .then((successMessage) => {
          resultDiv.textContent = successMessage;
          resultDiv.classList.add("success");
        })
        // Promise hibás lefutása => .catch()
        .catch((errorMessage) => {
          resultDiv.textContent = errorMessage;
          resultDiv.classList.add("error");
        });
    });
  </script>
</body>
</html>
```



</details>






