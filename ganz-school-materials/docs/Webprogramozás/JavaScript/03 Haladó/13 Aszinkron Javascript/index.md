---
title: Bevezetés az aszinkron JavaScriptbe
sidebar_label: Bevezetés az aszinkron JavaScriptbe
---

Az **aszinkron függvények** a JavaScript programozás egyik alapvető fogalma, amelyek lehetővé teszik, hogy a kód bizonyos részei ne blokkolják a program többi részének végrehajtását. Ez különösen fontos olyan műveletek esetében, amelyek időigényesek vagy külső forrásoktól függenek, például hálózati kérések, adatbázis-műveletek vagy fájlok olvasása és írása.

### Mi is az az aszinkronitás?

Az aszinkronitás lényege, hogy a program nem várja meg egy adott művelet befejezését, mielőtt tovább folytatná a végrehajtást. Ehelyett a művelet indítása után a program folytatja a további lépések végrehajtását, miközben az aszinkron művelet háttérben zajlik. Amikor az aszinkron művelet befejeződik, a program értesül róla, és végrehajtja a hozzá tartozó műveletet vagy frissíti az állapotot.

### Miért fontosak az aszinkron függvények?

Az aszinkron függvények használata számos előnnyel jár:

1. **Hatékonyság és teljesítmény:** Lehetővé teszik, hogy a program több feladatot párhuzamosan kezeljen, így jobban kihasználja a rendelkezésre álló erőforrásokat és gyorsabb válaszidőt biztosít.

2. **Felhasználói élmény:** Webalkalmazások esetében az aszinkron műveletek biztosítják, hogy a felhasználói felület ne fagyjon le hosszú műveletek alatt, például adatbetöltés közben. Így a felhasználó folytathatja a munkát anélkül, hogy a böngésző reagálásképtelenné válna.

3. **Skálázhatóság:** Nagy mennyiségű adat vagy több párhuzamos kérés esetén az aszinkron kezelés lehetővé teszi a hatékonyabb erőforrás-kezelést és a jobb skálázhatóságot.

### Hogyan működnek az aszinkron függvények?

Az aszinkron függvények általában valamilyen jelzés vagy visszahívás segítségével értesítik a programot a művelet befejezéséről. Ez azt jelenti, hogy amikor egy aszinkron függvény meghívásra kerül, a program folytatja a következő utasítások végrehajtását, anélkül, hogy megvárná az aszinkron művelet eredményét. Amikor az aszinkron művelet befejeződik, a program végrehajtja a megfelelő reakciót, például adatokat dolgoz fel vagy felhasználói felületet frissít.

### Aszinkron függvények típusai

A JavaScript-ben többféle aszinkron függvény létezik, amelyek különböző célokra használhatók:

- **Időzítő függvények:** Ezek közé tartoznak a `setTimeout` és a `setInterval`, amelyek lehetővé teszik, hogy egy adott idő elteltével vagy meghatározott időközönként futtassunk le egy függvényt.
  
- **Hálózati kérések:** Az olyan függvények, amelyek adatokat kérnek le szerverekről vagy küldenek el azoknak, szintén aszinkron működnek, mivel az adatátvitel időigényes lehet.

- **Fájlműveletek:** A fájlok olvasása és írása gyakran aszinkron módon történik, hogy a program ne álljon le ezek a műveletek alatt.

### Az aszinkron programozás előnyei és kihívásai

**Előnyök:**

- **Jobb teljesítmény:** Az aszinkron műveletek lehetővé teszik, hogy a program több feladatot kezeljen egyszerre, ami növeli a teljesítményt és csökkenti a válaszidőt.
  
- **Reszponzív felhasználói felület:** Az aszinkronitás révén a felhasználói felület folyamatosan reagálhat a felhasználói interakciókra, még hosszú műveletek alatt is.

**Kihívások:**

- **Bonyolultabb kódkezelés:** Az aszinkron műveletek kezelése gyakran bonyolultabb, mivel a program logikájának figyelembe kell vennie a műveletek befejezésének időpontját és sorrendjét.
  
- **Hibakezelés:** Az aszinkron műveletek során előforduló hibák kezelése külön figyelmet igényel, mivel a hibák nem mindig előre láthatók és időben kezelhetők.

### Összefoglalás

Az aszinkron függvények a JavaScript programozás fontos eszközei, amelyek lehetővé teszik a hatékony és reszponzív alkalmazások fejlesztését. Segítségükkel a program képes kezelni hosszú ideig tartó vagy időigényes műveleteket anélkül, hogy a teljes végrehajtás leállna, így javítva a felhasználói élményt és a teljesítményt. Az aszinkron programozás megfelelő alkalmazása azonban odafigyelést és jól átgondolt kódstruktúrát igényel a zökkenőmentes működés érdekében.

<details className="dropdown-task">
  <summary><strong>Példa az aszinkron Javascript működésére</strong></summary>

#### Ez a weboldal négy különböző aszinkron működést demonstrál JavaScript segítségével:

  ```html
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <title>Aszinkron Működés Demonstráció</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 40px;
            padding: 20px;
            background-color: #f0f0f0;
        }

        .container {
            width: 300px;
            padding: 20px;
            border: 2px solid #333;
            border-radius: 10px;
            background-color: #fff;
            text-align: center;
        }

        /* Számláló stílusa */
        #counter {
            font-size: 48px;
            margin-bottom: 20px;
        }

        /* Körök stílusa */
        .circles {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-bottom: 20px;
        }

        .circle {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: #ccc;
        }

        /* Forgó négyzet stílusa */
        .rotating-container {
            position: relative;
            width: 200px;
            height: 200px;
            margin: 0 auto 20px auto;
            border: 2px dashed #666;
            border-radius: 50%;
        }

        .inner-box {
            position: absolute;
            width: 50px;
            height: 50px;
            background-color: #4CAF50;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            border-radius: 5px;
        }

        /* Visszaszámláló stílusa */
        #countdown {
            font-size: 36px;
            margin-bottom: 20px;
        }

        /* Gombok stílusa */
        button {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
        }

        /* Animáció a forgó négyzethez */
        @keyframes rotate {
            from { transform: rotate(0deg) translateX(-50%); }
            to { transform: rotate(360deg) translateX(-50%); }
        }

        .rotating {
            animation: rotate 4s linear infinite;
        }

        /* 4. Villogó Szöveg Stílusa */
        .blinking-text {
            font-size: 24px;
            color: #333;
            margin-bottom: 20px;
            visibility: visible;
        }

        .hidden {
            visibility: hidden;
        }
    </style>
</head>
<body>

    <!-- 1. Számláló Négyzet -->
    <div class="container" id="counter-container">
        <div id="counter">0</div>
        <button id="counter-button">Indítás</button>
    </div>

    <!-- 2. Körök Váltakozása Négyzet -->
    <div class="container" id="circles-container">
        <div class="circles">
            <div class="circle" id="circle1"></div>
            <div class="circle" id="circle2"></div>
        </div>
        <button id="circles-button">Indítás</button>
    </div>

    <!-- 3. Forgó Négyzet -->
    <div class="container" id="rotating-container">
        <div class="rotating-container">
            <div class="inner-box" id="inner-box"></div>
        </div>
        <button id="rotating-button">Indítás</button>
    </div>

    <!-- 4. Villogó Szöveg -->
    <div class="container" id="blinking-container">
        <div class="blinking-text" id="blinking-text">Villogó Szöveg</div>
        <button id="blinking-button">Indítás</button>
    </div>

    <script>
        // 1. Számláló Implementációja
        (function() {
            let count = 0;
            let counterInterval = null;
            let counterTimeout = null;
            const counterDisplay = document.getElementById('counter');
            const counterButton = document.getElementById('counter-button');

            counterButton.addEventListener('click', function() {
                if (counterInterval === null) {
                    // Indítás: setInterval használata a számláló növelésére
                    counterInterval = setInterval(() => {
                        count += 1;
                        counterDisplay.textContent = count;
                    }, 1000);

                    // setTimeout használata egy egyszeri eseményhez (pl. 5 másodperc után)
                    counterTimeout = setTimeout(() => {
                        console.log('A számláló már 5 másodpercig fut.');
                    }, 5000); // 5 másodperc

                    counterButton.textContent = 'Megállítás';
                } else {
                    // Megállítás: clearInterval és clearTimeout használata
                    clearInterval(counterInterval);
                    clearTimeout(counterTimeout);
                    counterInterval = null;
                    counterTimeout = null;
                    counterButton.textContent = 'Indítás';
                }
            });
        })();

        // 2. Körök Váltakozása Implementációja
        (function() {
            let toggle = false;
            let circlesInterval = null;
            let circlesTimeout = null;
            const circle1 = document.getElementById('circle1');
            const circle2 = document.getElementById('circle2');
            const circlesButton = document.getElementById('circles-button');

            circlesButton.addEventListener('click', function() {
                if (circlesInterval === null) {
                    // Indítás: setInterval használata a körök váltogatására
                    circlesInterval = setInterval(() => {
                        toggle = !toggle;
                        if (toggle) {
                            circle1.style.backgroundColor = 'yellow';
                            circle2.style.backgroundColor = '#ccc';
                        } else {
                            circle1.style.backgroundColor = '#ccc';
                            circle2.style.backgroundColor = 'yellow';
                        }
                    }, 1000);

                    // setTimeout használata egy egyszeri eseményhez (pl. 5 másodperc után)
                    circlesTimeout = setTimeout(() => {
                        console.log('A körök már 5 másodpercig váltakoznak.');
                    }, 5000); // 5 másodperc

                    circlesButton.textContent = 'Megállítás';
                } else {
                    // Megállítás: clearInterval és clearTimeout használata
                    clearInterval(circlesInterval);
                    clearTimeout(circlesTimeout);
                    circlesInterval = null;
                    circlesTimeout = null;
                    // Visszaállítás alapállapotba
                    circle1.style.backgroundColor = '#ccc';
                    circle2.style.backgroundColor = '#ccc';
                    circlesButton.textContent = 'Indítás';
                }
            });
        })();

        // 3. Forgó Négyzet Implementációja
        (function() {
            const rotatingButton = document.getElementById('rotating-button');
            const innerBox = document.getElementById('inner-box');
            let isRotating = false;
            let rotateTimeout = null;

            rotatingButton.addEventListener('click', function() {
                if (!isRotating) {
                    // Indítás: CSS animáció hozzáadása
                    innerBox.classList.add('rotating');
                    isRotating = true;
                    rotatingButton.textContent = 'Megállítás';

                    // setTimeout használata egy egyszeri eseményhez (pl. 5 másodperc után)
                    rotateTimeout = setTimeout(() => {
                        console.log('A forgó négyzet már 5 másodpercig forog.');
                    }, 5000); // 5 másodperc
                } else {
                    // Megállítás: CSS animáció eltávolítása és clearTimeout használata
                    innerBox.classList.remove('rotating');
                    clearTimeout(rotateTimeout);
                    isRotating = false;
                    rotatingButton.textContent = 'Indítás';
                }
            });
        })();

        // 4. Villogó Szöveg Implementációja
        (function() {
            let blinkingInterval = null;
            let blinkingTimeout = null;
            const blinkingText = document.getElementById('blinking-text');
            const blinkingButton = document.getElementById('blinking-button');

            blinkingButton.addEventListener('click', function() {
                if (blinkingInterval === null) {
                    // Indítás: setInterval használata a szöveg villogtatására
                    blinkingInterval = setInterval(() => {
                        blinkingText.classList.toggle('hidden');
                    }, 500); // 0.5 másodperc

                    // setTimeout használata egy egyszeri eseményhez (pl. 5 másodperc után)
                    blinkingTimeout = setTimeout(() => {
                        console.log('A villogó szöveg már 5 másodpercig villog.');
                    }, 5000); // 5 másodperc

                    blinkingButton.textContent = 'Megállítás';
                } else {
                    // Megállítás: clearInterval és clearTimeout használata
                    clearInterval(blinkingInterval);
                    clearTimeout(blinkingTimeout);
                    blinkingInterval = null;
                    blinkingTimeout = null;
                    blinkingText.classList.remove('hidden');
                    blinkingButton.textContent = 'Indítás';
                }
            });
        })();
    </script>

</body>
</html>
  ```



#### Számláló Négyzet

- **setInterval**: Számláló növelése másodpercenként.
- **setTimeout**: 5 másodperc után konzol üzenet.
- **clearInterval & clearTimeout**: Gomb megnyomásával leállítható a számláló és a timeout.

#### Körök Váltakozása Négyzet

- **setInterval**: Körök színének váltogatása másodpercenként.
- **setTimeout**: 5 másodperc után konzol üzenet.
- **clearInterval & clearTimeout**: Gomb megnyomásával leállítható a váltakozás és a timeout, valamint visszaállíthatók a körök alap színei.

#### Forgó Négyzet

- **CSS Animáció (@keyframes)**: Belső négyzet folyamatos forgatása.
- **setTimeout**: 5 másodperc után konzol üzenet.
- **clearTimeout**: Gomb megnyomásával leállítható a forgás és a timeout.

#### Villogó Szöveg

- **setInterval**: Szöveg láthatóságának váltogatása fél másodpercenként.
- **setTimeout**: 5 másodperc után konzol üzenet.
- **clearInterval & clearTimeout**: Gomb megnyomásával leállítható a villogás és a timeout, valamint visszaállítható a szöveg láthatósága.

Ez a struktúra jól szemlélteti a JavaScript aszinkron működésének alapjait.

</details>


