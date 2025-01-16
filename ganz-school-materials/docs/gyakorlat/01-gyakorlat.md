---
title: Első gyakorlati feladat
sidebar_label: Első feladat
---

import Link from '@docusaurus/Link';

# Első gyakorlati feladat

**Feladat leírás:**  
Készíts egy egyszerű alkalmazást, amely egy gomb megnyomása után 3 másodperc múlva megjelenít egy üzenetet a felhasználónak.

<details className="dropdown-task">
  <summary>
    <strong>Első gyakorlati feladat</strong><br/>
    Készíts egy egyszerű alkalmazást, amely egy gomb megnyomása után 3 másodperc múlva megjelenít egy üzenetet a felhasználónak.
  </summary>
  
  ### Kód megoldása:

  ```js
  // Ez a függvény megjelenít egy üzenetet 3 másodperc késleltetéssel
  function showMessage() {
    setTimeout(function() {
      alert("Ez az üzenet 3 másodperc késleltetéssel jelenik meg.");
    }, 3000); // 3000 ezredmásodperc = 3 másodperc
  }

  // Eseménykezelő a gombra
  document.getElementById("showMessageButton").addEventListener("click", showMessage);
  ```

  ### Hogyan működik a szintaktika:

  - **`function showMessage()`**:  
    Ez a függvény felelős az üzenet megjelenítéséért. Amikor meghívják, elindítja a `setTimeout`-ot.

  - **`setTimeout(function() { ... }, 3000);`**:  
    Beállít egy időzítőt, amely 3000 ezredmásodperc (3 másodperc) után lefuttatja a belső függvényt.

  - **`alert("...");`**:  
    Megjelenít egy felugró ablakot az üzenettel.

  - **`document.getElementById("showMessageButton").addEventListener("click", showMessage);`**:  
    Ez a sor hozzáad egy eseményfigyelőt a gombhoz, amely a `showMessage` függvényt hívja meg kattintáskor.

  **Gondolati elv:**  
  A felhasználó kattint egy gombra, ami meghívja a `showMessage` függvényt. A `setTimeout` 3 másodpercet vár, majd végrehajtja az `alert`-ot, amely megjeleníti az üzenetet. Ez az eljárás aszinkron, így a fő program nem áll meg a várakozás miatt.
</details>




`
