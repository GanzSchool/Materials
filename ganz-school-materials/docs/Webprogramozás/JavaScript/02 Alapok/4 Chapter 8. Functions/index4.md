---
title: Megszámlálás tétele – részletes magyarázat
---

# Megszámlálás tétele

A **megszámlálás tétele** egy nagyon hasznos algoritmikus minta, amely arra szolgál, hogy **megszámoljuk, hány elem felel meg egy adott feltételnek** egy sorozatban. Ez nem azonos az elemek számának lekérdezésével (`.length`), hanem egy szűkebb halmaz vizsgálatáról van szó: nem *minden* elem érdekel, csak azok, amelyek bizonyos kritériumnak megfelelnek.

**Életszerű példa:**
Tegyük fel, hogy egy webáruház üzemeltetőjeként nap végén szeretnéd megtudni, hogy az aznapi megrendelések közül **hány darab prémium terméket** rendeltek meg. Vagy egy tanulókat kezelő rendszerben meg akarod számolni, **hány tanuló érte el a 4-es osztályzatot vagy jobbat**. Ezekre mind tökéletes megoldás a megszámlálás tétele.

További tipikus felhasználási helyek:

* hányszor szerepel egy bizonyos érték egy listában,
* hány fájl nagyobb egy adott méretnél,
* hány felhasználó aktív az adott időszakban.

---

### 🧪 Alapmegoldás (for ciklussal)

```javascript
const grades = [5, 3, 4, 2, 5, 1, 4];
let count = 0;
for (let i = 0; i < grades.length; i++) {
  if (grades[i] >= 4) {
    count++;
  }
}
console.log("Jó vagy jeles osztályzatok száma:", count);
```

---

### 🔄 Refaktorálva (for-of ciklussal)

```javascript
let count = 0;
for (let grade of grades) {
  if (grade >= 4) count++;
}
```

---

### 🚀 Refaktorálva `filter` + `length` használatával

```javascript
const count = grades.filter(grade => grade >= 4).length;
```

---

### 💡 Összetettebb kiindulópont: objektumok tömbje

```javascript
const students = [
  { name: "Anna", grade: 5 },
  { name: "Béla", grade: 3 },
  { name: "Cili", grade: 4 },
  { name: "Dénes", grade: 2 }
];

let goodStudents = 0;
for (let student of students) {
  if (student.grade >= 4) {
    goodStudents++;
  }
}
```

---

### ✨ Refaktorálva `filter`-rel

```javascript
const goodStudents = students.filter(s => s.grade >= 4).length;
```

---

A megszámlálás tétele rendkívül sokrétű, és gyakran használjuk más tételek előkészítéseként is (például egy adott kategória elemeinek összegzése előtt megszámoljuk, hány ilyen van). Minél többször alkalmazod, annál természetesebbé válik, hogy egy-egy ciklust valójában „megszámlálás” céljából írsz meg – és ez segíti a tiszta, célorientált gondolkodást.
