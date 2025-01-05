---
title: Callback függvények
sidebar_label: Aszinkron programozás Callbackek segítségével
---

**1. A callback függvények meghatározó szerepe**

A JavaScript aszinkron programozásának alapja a callback függvények használata. A callback egy olyan függvény, amelyet először te írsz meg, majd átadsz egy másik függvénynek. Ez a másik függvény később meghívja („visszahívja”) a te függvényedet, amikor egy bizonyos feltétel teljesül vagy egy aszinkron esemény bekövetkezik. Amikor a callback függvényedet meghívják, értesítést kapsz a feltételről vagy az eseményről, és gyakran a meghívás során olyan argumentumokat is átadnak, amelyek további részleteket tartalmaznak. Ez a folyamat könnyebben érthető néhány konkrét példán keresztül, és a következő alfejezetek bemutatják a callback-alapú aszinkron programozás különböző formáit.

**2. A callbackek és az aszinkron folyamatok**

A callbackek gyakran segítenek felosztani a bonyolultabb feladatokat kisebb, könnyebben karbantartható egységekre. Így a kódban tisztán elválasztható, hogy melyik rész felel például egy adat betöltéséért, és melyik dolgozza fel az így kapott eredményeket. Ez azért praktikus, mert a JavaScript általános futásidejében az eseményhurkon (event loop) keresztül történik a feladatok végrehajtása, és sokszor nem lehet tudni előre, pontosan mikor készül el egy aszinkron művelet.

**3. A callbackek előnyei és a “callback hell”**

Nagy előny, hogy a callbackek könnyen alkalmazhatók bármilyen funkció meghívására, és rugalmasan alakíthatók. A gyakorlatban azonban okozhatnak némi kód-áttekinthetőségi gondot, főleg akkor, ha egymásba ágyazottan kerülnek meghívásra. Ezt a jelenséget gyakran „callback hellnek” nevezik, mert túlságosan mélyen egymásba ágyazott struktúrát hoz létre, amit nehéz követni és módosítani. Erre manapság már rendelkezésre állnak modernebb konstrukciók (például a Promise, az async–await), de a callback továbbra is az egyik alapköve a JavaScript nyelvnek.

**4. A callback funkciók átadása és meghívása**

Callbacknek bármi kinevezhető, ami függvényként működik, és paraméterként átadható. A gyakorlatban tehát nincs szükség speciális kulcsszóra vagy leírásra a deklaráció során, csupán fontos, hogy a célfüggvény helyes időben és helyes körülmények között megkapja és meghívja az átadott callbacket. A megvalósítás általában valahogy így néz ki: definiálódik egy függvény, amely tegyük fel, hogy aszinkron módon betölt egy távoli forrásból valamilyen adatot, majd ha megkapta, meghív egy előre megírt, paraméterként kapott függvényt, ami az adatot feldolgozza. Ezzel a módszerrel a kód megmarad modulárisnak, és egyszerre több művelet is végezhető párhuzamosan.

**5. Az “error-first callback” minta**

Gyakori minta az úgynevezett “error-first callback”. Ilyenkor a callback első paramétere az esetleges hibaobjektum, a második vagy a további paraméter(ek) pedig az eredmény(ek). Ha hiba fordul elő, a callback első argumentuma nem null vagy undefined, így a meghívó fél ebből könnyen meg tudja állapítani, hogy valami rendellenesség történt. A módszer előnye, hogy egységesen, függvényhívás szintjén valósul meg a hibakezelés, elkerülve a felesleges try-catch struktúrákat.

**6. Az aszinkron megközelítés és hatékonyság**

A callbackek aszinkron jellege különleges szemléletet kíván. Számos helyzetben először idegennek tűnhet, hogy egy utasítást nem közvetlenül a soron következő kódrész végrehajtása követ, hanem egy külső függvényhívás által meghatározott pillanatban. Egy hosszabb adatletöltés esetében például a program rögtön továbbhalad a többi utasításra, a letöltés végeredményének kezelését pedig a callback függvényben kell megoldani. Ez a működés hatékonyabb erőforrásfelhasználást eredményez, mert a folyamat nem blokkolja a főszálat, és közben más műveletek továbbra is futhatnak.

**7. Példák hétköznapi használatra**

A hétköznapi használat során gyakran előkerül a setTimeout vagy a setInterval, ahol a második paraméterük maga a callback, ami az időzítő vagy az intervallum lejártakor aktiválódik. Ilyenkor a meghívott függvény meghatározott idő elteltével fut, függetlenül attól, hogy a kód többi része éppen milyen állapotban van. Ez kiválóan szemlélteti, mennyire rugalmasan vezérelhető a folyamat, és hogy mekkora mozgásteret biztosít a JavaScript aszinkron modellje.

**8. Eseményvezérelt programozás és callbackek**

Az eseményvezérelt programozás és a callbackek kapcsolata is nagyon szoros. Szinte minden modern JavaScript keretrendszer és eszközkészlet épít az események megfigyelésére, ahol a regisztrált függvények mindig valamilyen akcióra reagálnak (például kattintásra, űrlap beküldésére vagy Ajax-kérés befejeződésére). Az eseménykezelés alapja, hogy a megfelelő ponton meghívódik a korábban átadott funkció, ami rögzíti és feldolgozza a beérkező információt.

**9. Átláthatóság és hibatűrés**

Fontos megjegyezni, hogy a callbackek használatakor mindig oda kell figyelni a program logikájára és a hibatűrésre. Egy rosszul szervezett programban könnyen el lehet veszni, ha minden részfeladat saját callbackeket kap, és azok még belül is több aszinkron műveletet indítanak el. A munkafolyamatok áttekintése és dokumentálása sokat segíthet abban, hogy ezek a függvények átláthatóan kapcsolódjanak egymáshoz, megelőzve a felesleges kódduplikálást és a nehezen nyomon követhető hibakeresést.

**10. A callbackek szerepe a JavaScript jövőjében**

A JavaScript callbackjei tehát remek megoldást jelentenek az eseményalapú és aszinkron feladatok kivitelezéséhez. Megfelelő szervezéssel biztonságos, moduláris és könnyen bővíthető struktúrát lehet kialakítani. Ez az alapot is megteremti a modernebb funkcióknak, mint például a Promisek vagy az async–await szintaxis, amelyek ugyan kifinomultabb formában, de ugyanerre a funkcionális elképzelésre épülnek. Ha a fő koncepció megértésre kerül, már csak a különböző alkalmazási területeken és könyvtárakban felbukkanó variációkhoz kell alkalmazkodni, illetve élni a nyelv további lehetőségeivel a minél hatékonyabb és átláthatóbb fejlesztés érdekében.

<details style={{ border: "2px solid darkblue", backgroundColor: "#185fe0" }}>
  <summary>Gyakorlati példa: Egy aszinkron üdvözlő üzenet setTimeout használatával</summary>

```javascript
// 1. példa: Egy aszinkron üdvözlő üzenet setTimeout használatával

function sayHelloLater(callback) {
  // A sayHelloLater függvény egy paraméterként kapott függvényt (callback) fog meghívni később
  console.log("Indul a késleltetett üdvözlés...");
  
  setTimeout(function() {
    // 3 másodperc múlva meghívjuk a callbacket
    callback("Szia, ez egy üdvözlés!");
  }, 3000);
}

// Itt meghatározzuk, mit tegyen a callback, amikor meghívódik
sayHelloLater(function(message) {
  console.log("A callback lefutott, íme az üzenet: " + message);
});
```

**Részletes leírás:**

A **sayHelloLater** függvény meghívásakor még nem történik azonnali kimenet. A **setTimeout** segítségével megadott idő elteltével (jelenleg három másodperc) hívja meg a függvényt, amelyet paraméterként átadtunk. A callback szerepe, hogy a később beérkező üzenetet megfelelően feldolgozza vagy kiírja a konzolra. A kód jól szemlélteti, hogyan lehet elkülöníteni egy műveletet (késleltetett üzenetküldés) és a rá érkező reakciót (console.log meghívása) a JavaScript aszinkron mechanizmusaival.

</details>

<br />

<details style={{ border: "2px solid #2c52ca", backgroundColor: "#185fe0" }}>
  <summary>Gyakorlati példa: Tömb elemeinek feldolgozása callbackkel</summary>

```javascript
// 2. példa: Tömb elemeinek feldolgozása callbackkel

function processArrayItems(items, callback) {
  // A processArrayItems függvény megkap egy tömböt (items)
  // és egy callback függvényt, amit minden elemre meghív
  items.forEach(function(item, index) {
    // Minden egyes elemre meghívjuk a callbacket,
    // átadva a tömbelem értékét és az indexet
    callback(item, index);
  });
}

// Ebben a példában kiírjuk a tömb elemeit a konzolra sorszámozva
const myNumbers = [10, 20, 30, 40];

processArrayItems(myNumbers, function(value, i) {
  console.log(i + ". elem értéke: " + value);
});
```

**Részletes leírás:**

A **processArrayItems** függvény tetszőleges tömböt és egy feldolgozó függvényt (callback) kap paraméterként. A JavaScript beépített **forEach** metódusát használva minden egyes elemnél meghívja a callbacket, ezzel teljes rugalmasságot biztosítva a feldolgozás módját illetően. A példában egyszerűen kiírjuk a konzolra az indexet és az aktuális elemet, de a callbackben bármilyen logika megvalósulhat: összeadás, szűrés, átalakítás vagy akár részletesebb statisztikák készítése. Ez a megközelítés könnyen testre szabható és jól átlátható.

</details>

<br />

<details style={{ border: "2px solid darkblue", backgroundColor: "#185fe0" }}>
  <summary>Gyakorlati példa: Egyszerű adatlekérés-szimuláció callbackkel</summary>

```javascript
// 3. példa: Egyszerű adatlekérés-szimuláció callbackkel

function fetchDataSimulated(callback) {
  console.log("Adatlekérés folyamatban...");
  
  // Itt szimulálunk egy késleltetett adatátvitelt
  // Pl. mintha szerverről jönne az információ
  setTimeout(function() {
    const fakeData = { id: 1, name: "Teszt Elem", status: "elkészült" };
    // Miután "megérkezett" az adat, meghívjuk a callbacket
    callback(fakeData);
  }, 2000);
}

fetchDataSimulated(function(result) {
  console.log("Az adat megérkezett: ", result);
  // Itt tetszőleges további feldolgozást végezhetünk
});
```

**Részletes leírás:**

A **fetchDataSimulated** függvény egy valós lekérés koncepcióját szemlélteti, de valójában csak szimulálja a hálózati késleltetést. A **setTimeout** feladata, hogy két másodpercnyi várakozás után meghívja a callbacket, amely átveszi a „letöltött” adatot. Ez egy tipikus alkalmazási példa JavaScriptben, ahol egy aszinkron művelet (szerverrel történő kommunikáció) befejeződését követően szeretnénk futtatni valamilyen kódot. Mivel a valódi lekérés időzítését nem lehet pontosan előre megmondani, a callback segítségével könnyen megadható, hogy miképp dolgozza fel a program az időközben beérkező információkat.

</details>