---
title: Időzítő függvények 
sidebar_label: Időzítő függvények
---

Az **időzítő függvények** (timer functions) a JavaScript-ben olyan beépített függvények, amelyek lehetővé teszik, hogy bizonyos kódrészeket késleltetve vagy ismételten hajtsunk végre. Ezek a függvények különösen hasznosak aszinkron műveletek kezelésére, például animációk, adatok frissítése, vagy bizonyos események időzített végrehajtása esetén.

### Fő időzítő függvények

1. **`setTimeout`**

   - **Leírás:** Egy adott idő elteltével egyszeri végrehajtást indít el egy megadott függvényből vagy kódrészletből.
   - **Szintaxis:**
     ```javascript
     setTimeout(függvény, késleltetés, paraméter1, paraméter2, ...);
     ```
   - **Példa:**
     ```javascript
     setTimeout(() => {
       console.log("Ez a szöveg 2 másodperc után jelenik meg.");
     }, 2000);
     ```
     A fenti kód 2000 millisekundum (2 másodperc) elteltével futtatja a callback függvényt, amely kiírja a konzolra az üzenetet.

2. **`setInterval`**

   - **Leírás:** Meghatározott időközönként ismételten végrehajt egy megadott függvényt vagy kódrészletet.
   - **Szintaxis:**
     ```javascript
     setInterval(függvény, intervallum, paraméter1, paraméter2, ...);
     ```
   - **Példa:**
     ```javascript
     setInterval(() => {
       console.log("Ez a szöveg minden 3 másodpercben megjelenik.");
     }, 3000);
     ```
     Ez a kód 3000 millisekundum (3 másodperc) után, és minden 3 másodpercben ismételten futtatja a callback függvényt, amely kiírja a konzolra az üzenetet.

3. **`clearTimeout`**

   - **Leírás:** Megszünteti egy korábban meghívott `setTimeout` végrehajtását, mielőtt az lefutna.
   - **Szintaxis:**
     ```javascript
     clearTimeout(timeoutAzonosító);
     ```
   - **Példa:**
     ```javascript
     const timeoutId = setTimeout(() => {
       console.log("Ez a szöveg nem fog megjelenni.");
     }, 5000);
     
     // Valamilyen feltétel teljesülésekor töröljük a timeout-ot
     clearTimeout(timeoutId);
     ```
     Ebben az esetben a `setTimeout` beállít egy késleltetést, de a `clearTimeout` meghívása törli a beütemezett végrehajtást, így a callback nem fog lefutni.

4. **`clearInterval`**

   - **Leírás:** Megszünteti egy korábban meghívott `setInterval` futtatását.
   - **Szintaxis:**
     ```javascript
     clearInterval(intervalAzonosító);
     ```
   - **Példa:**
     ```javascript
     const intervalId = setInterval(() => {
       console.log("Ez a szöveg minden másodpercben megjelenik.");
     }, 1000);
     
     // 5 másodperc után megállítjuk az intervallumot
     setTimeout(() => {
       clearInterval(intervalId);
       console.log("Intervallum megállítva.");
     }, 5000);
     ```
     A fenti kód minden másodpercben kiírja az üzenetet, majd 5 másodperc elteltével megállítja az intervallumot, és egy végső üzenetet ír ki.

### Hogyan működnek az időzítő függvények?

A JavaScript egy **egyszálú** programozási nyelv, ami azt jelenti, hogy egyszerre csak egy műveletet tud végrehajtani. Az időzítő függvények azonban lehetővé teszik, hogy a kód bizonyos részei "háttérben" várjanak egy adott időtartamot, majd a beütemezett idő elérésekor végrehajtódjanak. Ezt a folyamatot az **események ciklusa** (event loop) kezeli.

Amikor egy `setTimeout` vagy `setInterval` függvényt hívunk meg, a JavaScript runtime (például a böngésző vagy Node.js) ütemezi a callback függvény végrehajtását a megadott késleltetés után. Az események ciklusa ellenőrzi a függvények végrehajtási sorát, és amikor a beállított idő eléri a várakozási időt, a callback függvény hozzáadódik a végrehajtási sorhoz (call stack), és végrehajtódik, amint a JavaScript képes rá.

### Fontos megjegyzések

- **Pontosság:** A `setTimeout` és `setInterval` nem garantálják, hogy a callback függvény pontosan a megadott időpontban fut le. Ha a JavaScript futási környezete éppen más műveletekkel foglalkozik, a végrehajtás késhet.

- **Késleltetés mértéke:** A késleltetés paramétert millisekundumban adjuk meg. Például, 1000 ms = 1 másodperc.

- **Aszinkronitás:** Az időzítő függvények aszinkron műveletek, így nem blokkolják a fő végrehajtási szálat. Ez lehetővé teszi, hogy a program folytassa a futását, miközben várakozik a callback függvény végrehajtására.

### Gyakorlati példák

1. **Késleltetett üzenet megjelenítése:**
   ```javascript
   console.log("Művelet 1");

   setTimeout(() => {
     console.log("Művelet 2 (késleltetve)");
   }, 3000);

   console.log("Művelet 3");
   ```
   **Kimenet:**
   ```
   Művelet 1
   Művelet 3
   (3 másodperc múlva)
   Művelet 2 (késleltetve)
   ```

2. **Automatikus frissítés:**
   ```javascript
   const aktualizal = () => {
     const most = new Date();
     console.log("Aktuális idő:", most.toLocaleTimeString());
   };

   const intervalId = setInterval(aktualizal, 1000);

   // 10 másodperc után megállítjuk az automatikus frissítést
   setTimeout(() => {
     clearInterval(intervalId);
     console.log("Frissítés leállítva.");
   }, 10000);
   ```
   Ez a kód minden másodpercben kiírja az aktuális időt, majd 10 másodperc után leállítja az automatikus frissítést.

3. **Felhasználói interakció késleltetése:**
   ```javascript
   const gomb = document.getElementById("myButton");

   gomb.addEventListener("click", () => {
     console.log("Gomb megnyomva!");

     setTimeout(() => {
       console.log("Ez az üzenet 5 másodperc után jelenik meg a gomb megnyomása után.");
     }, 5000);
   });
   ```
   Ebben az esetben, amikor a felhasználó megnyomja a gombot, azonnal kiírja, hogy a gomb megnyomva lett, majd 5 másodperc elteltével egy másik üzenetet jelenít meg.

### Összefoglalva

Az időzítő függvények (setTimeout, setInterval, clearTimeout, clearInterval) alapvető eszközök a JavaScript-ben az aszinkron műveletek és időzített események kezelésére. Megfelelő használatukkal hatékonyan irányíthatjuk a kódunk végrehajtási időpontjait és gyakoriságát, ami nélkülözhetetlen a dinamikus és interaktív webalkalmazások fejlesztésében.