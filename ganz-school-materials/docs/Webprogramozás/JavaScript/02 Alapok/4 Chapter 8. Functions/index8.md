---
title: Kiválasztás tétele
---

# Kiválasztás tétele

A **kiválasztás tétele** akkor használatos, amikor **egy sorozatban meg akarjuk találni az első olyan elemet, amely megfelel egy adott feltételnek**, **és szeretnénk ezt az elemet magát visszaadni**. Szemben az eldöntéssel, ahol csak azt kérdezzük: „van-e?”, itt már az is lényeges, hogy **mi az, amit keresünk**.

Ez különösen fontos, ha **csak egyetlen példányra vagyunk kíváncsiak**, és nem a teljes halmazt szeretnénk szűrni.

---

### 👓 Mikor használjuk?

Ez a tétel akkor jön jól, amikor:

* „Ki az első diák, aki nem küldte be a feladatát?”
* „Mi az első akciós termék a listában?”
* „Melyik fájl nagyobb 100 MB-nál?”
* „Melyik rendelés volt az első, amit egy adott napon kaptunk?”

Ez a minta gyakori **felhasználói interakciók**, **hibakezelés** vagy **adatellenőrzések** esetén. Gyakran használják űrlapok feldolgozásánál, hiba- vagy státuszkeresésnél is.

---

### 🧪 Alapmegoldás `for` ciklussal

```javascript
const numbers = [3, 8, 12, 5, 9];
let selected = null;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 10) {
    selected = numbers[i];
    break;
  }
}
console.log("Első 10-nél nagyobb szám:", selected);
```

---

### 🔄 Refaktorálva `for-of` ciklussal

```javascript
let selected = null;
for (let num of numbers) {
  if (num > 10) {
    selected = num;
    break;
  }
}
```

---

### 🚀 Refaktorálva `find()` metódussal

```javascript
const selected = numbers.find(num => num > 10);
```

A `find()` tökéletesen lefedi ezt a tételt: **az első feltételnek megfelelő elemet adja vissza**, vagy `undefined`-et, ha nincs ilyen.

---

### 💡 Összetettebb kiindulópont: objektumok tömbje

```javascript
const orders = [
  { id: 1, delivered: true },
  { id: 2, delivered: false },
  { id: 3, delivered: true }
];

let firstUndelivered = null;
for (let order of orders) {
  if (!order.delivered) {
    firstUndelivered = order;
    break;
  }
}
console.log("Első nem teljesített rendelés:", firstUndelivered?.id);
```

---

### ✨ Refaktorálva `find()`-dal

```javascript
const firstUndelivered = orders.find(order => !order.delivered);
```

---

### 🛠 Mire figyelj?

* Ha nem talál megfelelő elemet, a `find()` visszatérési értéke `undefined`. Ezt **kezelni kell**, különösen objektumoknál (`?.` operátor használata ajánlott).
* Nem ugyanaz, mint a `filter()`, amely az összes megfelelőt visszaadja – itt **csak egyetlen elem érdekel**.
* Kombinálható `some()`-mal: előbb megvizsgálod, hogy van-e ilyen, majd kiválasztod.

---

A kiválasztás tételét gyakran használjuk **első lépésként** más műveletek előtt: például előbb kiválasztjuk az első hibás rekordot, majd azt jelezzük a felhasználónak. **Hatékonyabb, mint egy teljes szűrés**, ha csak egy elem kell.
