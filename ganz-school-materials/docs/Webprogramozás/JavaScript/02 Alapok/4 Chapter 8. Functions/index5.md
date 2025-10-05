---
title: Maximumkiválasztás tétele
---

# Maximumkiválasztás tétele

A **maximumkiválasztás tétele** olyan algoritmikus séma, amely segítségével egy **sorozat legnagyobb értékű elemét** tudjuk megtalálni. Ez lehet egy szám, dátum, hosszúság vagy bármilyen más összehasonlítható érték. A működési elve az, hogy egy "rekordtartó" változóba elmentjük az aktuálisan legnagyobb értéket, majd végigmegyünk a tömbön, és minden új, nagyobb értéknél frissítjük azt.

**Életszerű példák:**

* Egy sportalkalmazásban szeretnéd megtudni, melyik nap futott a legtöbbet a felhasználó.
* Egy webshopban az aktuális nap legdrágább termékének árát akarod meghatározni.
* Egy tanulmányi rendszerben ki akarod deríteni, ki kapta a legjobb jegyet egy dolgozatra.
* Egy bankszoftverben ki kell számolnod, melyik tranzakció volt a legnagyobb értékű.

A maximumkiválasztás mindig hasznos, ha „legnagyobb” vagy „legjobb” értéket keresünk egy halmazból. Fontos, hogy mindig a **sorozat első elemével** kezdjük a vizsgálatot, nehogy üres tömb esetén hibás működést tapasztaljunk (pl. `undefined` vagy `NaN` érték).

---

### 🧪 Alapmegoldás (klasszikus `for` ciklus)

```javascript
const numbers = [42, 65, 12, 88, 37];
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
console.log("Legnagyobb szám:", max);
```

---

### 🔄 Refaktorálva (`for-of` ciklussal)

```javascript
let max = numbers[0];
for (let num of numbers) {
  if (num > max) {
    max = num;
  }
}
```

---

### 🚀 Refaktorálva `reduce` használatával

```javascript
const max = numbers.reduce((a, b) => (a > b ? a : b));
```

---

### 💡 Bonyolultabb kiindulópont: objektumok tömbje

```javascript
const products = [
  { name: "Laptop", price: 320000 },
  { name: "Monitor", price: 120000 },
  { name: "Egér", price: 8000 },
  { name: "Billentyűzet", price: 15000 }
];

let mostExpensive = products[0];
for (let product of products) {
  if (product.price > mostExpensive.price) {
    mostExpensive = product;
  }
}
console.log("Legdrágább termék:", mostExpensive.name);
```

---

### ✨ Refaktorálva `reduce`-szel

```javascript
const mostExpensive = products.reduce((max, item) =>
  item.price > max.price ? item : max
);
console.log("Legdrágább termék:", mostExpensive.name);
```

---

A maximumkiválasztás tételét sokszor kombináljuk más tételekkel, például ha nem csak az érték érdekel, hanem a hozzá kapcsolódó adat is (pl. kié volt a legnagyobb pontszám). Emiatt gyakori, hogy a „legnagyobb érték” **mellé a rekordot is tároljuk** (nem csak az értéket).
