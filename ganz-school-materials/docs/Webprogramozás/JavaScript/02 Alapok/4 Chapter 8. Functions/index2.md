---
title: Prgramozási tételek, algoritmizálás
---

# Prgramozási tételek, algoritmizálás


A **programozási tételek** olyan alapvető algoritmikus sémák, amelyeket gyakran ismétlődő problémák megoldására alkalmazunk a programozás során. Ezek a sémák egy-egy tipikus feladattípusra adnak általános, újrahasználható megoldási mintát, így a kezdő és haladó programozók számára is megbízható kapaszkodót jelentenek. A programozási tételek nem egy adott programnyelvhez kötődnek – elméleti szinten univerzálisak –, azonban minden nyelvben más-más szintaxissal valósítjuk meg őket. JavaScriptben ezek a tételek különösen hasznosak, hiszen a nyelv eleve tömb-orientált, így például ciklusokkal, `forEach`, `map`, `filter` és `reduce` függvényekkel nagyon könnyen megvalósíthatók.

A tételek története az **1970-es évek** informatikai oktatásához nyúlik vissza, amikor az algoritmusok tanítását egyre rendszeresebb formában kezdték oktatni a középiskolákban és egyetemeken. Az első rendszerezett megközelítést a magyar informatikatanítás emblematikus alakja, **Horváth Gyula** és munkatársai dolgozták ki, és tőlük terjedt el a „programozási tételek” kifejezés is. A cél az volt, hogy a tanulók könnyebben felismerjék a programozási problémák mögötti mintázatokat, és ahelyett, hogy minden egyes algoritmust a nulláról próbálnának megírni, előre begyakorolt sémák szerint gondolkodjanak.

A programozási tételek alkalmazása nemcsak **könnyebbé** teszi a programírást, de segíti az **átláthatóságot**, **karbantarthatóságot** és az **elemző gondolkodás** fejlesztését is. Sokkal egyszerűbb például egy összegzési tételre épülő kódot átadni vagy ellenőrizni, mint egy ad hoc módon írt ciklust, aminek nem világos a célja.

JavaScriptben a programozási tételek ugyanúgy alkalmazhatók, mint más nyelvekben (C, Python stb.), de a nyelv sajátosságai miatt sokszor még **rövidebben és olvashatóbban** is megírhatók. A nyelv funkcionális lehetőségei – mint például a `filter`, `reduce`, `some`, `find` vagy `map` – lehetővé teszik, hogy néhány sorban elvégezzünk olyan feladatokat, amelyek máshol több tucat sort is igényelhetnek.

Például egy „megszámlálás” típusú tétel JavaScriptben így is kinézhet egy `for` ciklussal:

```javascript
let count = 0;
for (let x of array) {
  if (x > 5) count++;
}
```

...de akár így is megoldható egyetlen sorban:

```javascript
const count = array.filter(x => x > 5).length;
```

Ez nemcsak helytakarékos, hanem sokkal olvashatóbb is, ha már ismerjük ezeket a függvényeket.

Összességében a programozási tételek olyan **gondolkodási sablonok**, amelyeket újra és újra alkalmazhatunk a legkülönfélébb helyzetekben – akár adatelemzés, adattisztítás vagy webes adatok feldolgozása során. Ha megtanuljuk ezeket a sémákat, könnyebben boldogulunk az összetettebb feladatokkal is, mivel nem a nulláról kell kitalálnunk minden lépést. JavaScriptben ezek különösen hatékonyan taníthatók és használhatók, mivel a nyelv rugalmassága és egyszerű szintaxisa kiválóan illeszkedik az algoritmikus gondolkodásmódhoz.

---


Itt a **leggyakoribb 8 programozási tétel**

---

### 1. **Összegzés tétele**

> Egy sorozat (tömb) elemeinek összegzése.

```javascript
const numbers = [4, 7, 2, 9];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log("Összeg:", sum);
```

---

### 2. **Megszámlálás tétele**

> Megszámolja, hogy hány elem felel meg egy adott feltételnek.

```javascript
const numbers = [4, 7, 2, 9];
let count = 0;
for (let num of numbers) {
  if (num > 5) count++;
}
console.log("5-nél nagyobb számok:", count);
```

---

### 3. **Maximumkiválasztás tétele**

> Megkeresi a legnagyobb értéket egy sorozatban.

```javascript
const numbers = [4, 7, 2, 9];
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
console.log("Maximum:", max);
```

---

### 4. **Minimumkiválasztás tétele**

> Hasonló a maximumhoz, de itt a legkisebb értéket keressük.

```javascript
const numbers = [4, 7, 2, 9];
let min = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < min) {
    min = numbers[i];
  }
}
console.log("Minimum:", min);
```

---

### 5. **Eldöntés tétele (van-e)**

> Eldönti, hogy van-e legalább egy elem, ami megfelel a feltételnek.

```javascript
const numbers = [4, 7, 2, 9];
let found = false;
for (let num of numbers) {
  if (num === 7) {
    found = true;
    break;
  }
}
console.log("Van 7-es szám?", found);
```

---

### 6. **Kiválasztás tétele (első ilyen)**

> Megkeresi az első olyan elemet, amely megfelel a feltételnek.

```javascript
const numbers = [4, 7, 2, 9];
let selected = null;
for (let num of numbers) {
  if (num > 5) {
    selected = num;
    break;
  }
}
console.log("Első 5-nél nagyobb:", selected);
```

---

### 7. **Keresés tétele (elem indexének megkeresése)**

> Megkeresi a keresett érték **indexét** (ha létezik).

```javascript
const numbers = [4, 7, 2, 9];
let index = -1;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 2) {
    index = i;
    break;
  }
}
console.log("A 2-es indexe:", index);
```

---

### 8. **Szétválogatás tétele**

> Egy sorozatot két külön részre bontunk feltétel alapján.

```javascript
const numbers = [4, 7, 2, 9];
const even = [];
const odd = [];

for (let num of numbers) {
  if (num % 2 === 0) {
    even.push(num);
  } else {
    odd.push(num);
  }
}
console.log("Páros számok:", even);
console.log("Páratlan számok:", odd);
```

