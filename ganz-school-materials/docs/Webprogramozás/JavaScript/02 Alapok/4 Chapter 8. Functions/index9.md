---
title: Keresés tétele
---

# Keresés tétele

A **keresés tétele** célja, hogy egy sorozatban (általában egy tömbben) **megtaláljuk annak az elemnek a sorszámát (indexét)**, amely megfelel egy adott feltételnek. Ez akkor hasznos, ha:

* tudni szeretnénk, hogy **hol helyezkedik el** egy adott adat,
* később **szerkeszteni vagy törölni szeretnénk** az elemet,
* vagy csak egyszerűen pozíció szerint akarjuk visszajelezni az eredményt.

Ez tehát egy **pozícióalapú kiválasztás**.

---

### 📌 Mikor használjuk?

Tipikus példák:

* „Hányadik tanuló nem adta be a dolgozatot?”
* „Hol található az első lejárt termék?”
* „Melyik sorban van hiba az importált adatok között?”
* „Melyik indexen szerepel egy adott név?”

Ez a tétel különösen fontos akkor, ha a **lista módosítható** vagy a **pozíció szerinti hivatkozás** elengedhetetlen (pl. `array.splice(index, 1)` törléshez).

---

### 🧪 Alapmegoldás (klasszikus `for` ciklussal)

```javascript
const names = ["Anna", "Béla", "Cili", "Dénes"];
let index = -1;

for (let i = 0; i < names.length; i++) {
  if (names[i] === "Cili") {
    index = i;
    break;
  }
}
console.log("Cili indexe:", index);
```

---

### 🚀 Refaktorálva `findIndex()` metódussal

```javascript
const index = names.findIndex(name => name === "Cili");
```

A `findIndex()` függvény pontosan a keresés tételét valósítja meg: visszaadja az első olyan elem **indexét**, amely megfelel a feltételnek, vagy `-1`-et, ha nincs ilyen.

---

### 💡 Összetettebb példa: objektumok tömbje

```javascript
const tasks = [
  { id: 1, done: true },
  { id: 2, done: false },
  { id: 3, done: true }
];

let index = -1;
for (let i = 0; i < tasks.length; i++) {
  if (!tasks[i].done) {
    index = i;
    break;
  }
}
console.log("Első befejezetlen feladat indexe:", index);
```

---

### ✨ Refaktorálva `findIndex()`-szel

```javascript
const index = tasks.findIndex(task => !task.done);
```

---

### 🛠 Mire figyelj?

* A `findIndex()` **-1-et** ad vissza, ha nincs találat – ezt mindig kezeld!
* Ha a konkrét érték érdekel, használd a `find()`-ot; ha a helye, akkor `findIndex()`-et.
* Ha több egyezés is lehet, ez csak az **elsőt** adja vissza. Ha az összesre szükséged van, `map()` + `filter()`-rel dolgozz.
* Hasznos kombinálni a `splice()` vagy `array[index] = újérték` típusú műveletekkel.

---

A keresés tétele tehát különösen jól jön **adatkezelésnél**, **szerkeszthető listáknál**, vagy amikor vizuálisan is jeleznünk kell a felhasználónak, hogy **hol a probléma** vagy **hol történt esemény**.
