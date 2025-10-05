---
title: Szétválogatás tétele
---

# Szétválogatás tétele

A **szétválogatás tétele** (más néven szétválasztás vagy csoportosítás) akkor használatos, amikor egy adott sorozat elemeit **legalább két külön csoportra** szeretnénk bontani egy logikai feltétel alapján. Ez lehet például páros vs. páratlan, pozitív vs. negatív, aktív vs. inaktív, vagy bármilyen más logikai megkülönböztetés.

A cél tehát nem az összegzés, megszámlálás vagy keresés, hanem az, hogy **új tömböket hozzunk létre**, amelybe az elemek szétosztva kerülnek a rájuk vonatkozó szabály alapján.

---

### 🧭 Mikor használjuk?

Valós példák:

* Egy webshopban szétválasztod a termékeket: van-e raktáron vagy nincs.
* Egy tanulólista alapján külön gyűjtöd azokat, akik átmentek, és azokat, akik megbuktak.
* Egy rendszerlog fájlból kiszűröd a hibákat, és külön teszed a figyelmeztetéseket.
* Egy eseménylistát szétbontasz múltbeli és jövőbeli eseményekre.

A tétel kiválóan használható minden olyan esetben, ahol **egy közös forrásból több célcsoportot kell képezni** – akár statisztikához, akár megjelenítéshez.

---

### 🧪 Alapmegoldás (klasszikus `for` ciklussal)

```javascript
const numbers = [3, 6, 1, 8, 5, 2];
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

---

### ✨ Refaktorálva `filter()` segítségével

```javascript
const even = numbers.filter(num => num % 2 === 0);
const odd = numbers.filter(num => num % 2 !== 0);
```

Ez a megközelítés akkor elegáns, ha csak **két csoportra** osztunk – és ha nem gond, hogy **kétszer járjuk végig** a tömböt.

---

### 💡 Összetettebb példa: objektumok szétválogatása

```javascript
const students = [
  { name: "Anna", passed: true },
  { name: "Béla", passed: false },
  { name: "Cili", passed: true },
  { name: "Dénes", passed: false }
];

const passed = [];
const failed = [];

for (let student of students) {
  if (student.passed) {
    passed.push(student);
  } else {
    failed.push(student);
  }
}

console.log("Átmentek:", passed.map(s => s.name));
console.log("Megbuktak:", failed.map(s => s.name));
```

---

### 🚀 Refaktorálva `reduce()` használatával

```javascript
const { passed, failed } = students.reduce(
  (acc, student) => {
    student.passed ? acc.passed.push(student) : acc.failed.push(student);
    return acc;
  },
  { passed: [], failed: [] }
);
```

Ez egy haladóbb megoldás, ahol **egy cikluson belül szétválogatunk**, és nem kell kétszer filterezni. Különösen hasznos, ha **nagy adathalmazról van szó**.

---

### 🛠 Mire figyelj?

* Az új csoportokat **üres tömbként kell inicializálni**.
* Ne feledd: a szétválogatás mindig **teljes bejárást** igényel.
* Ha több mint két kategóriára osztanál, használhatsz `switch`-et, vagy dinamikus kulcsokat egy objektumban (`groupBy` szerű viselkedés).
* Haladó szinten a `reduce()` vagy külső könyvtárak (pl. Lodash `_.groupBy`) még hatékonyabbak lehetnek.

