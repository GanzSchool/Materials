---
title: Eldöntés tétele (van-e ilyen)
---

# Eldöntés tétele (van-e ilyen)

Az **eldöntés tétele** arra ad választ, hogy **van-e legalább egy elem a sorozatban, amely megfelel egy adott feltételnek**. Ez nem ugyanaz, mint a megszámlálás, ahol az összes megfelelőt számoljuk össze, itt **elég egyetlen találat**, hogy a válasz igen legyen. Ezért optimalizálható is: amint megtaláljuk az első ilyet, az algoritmust **azonnal megszakítjuk**.

---

### 🔎 Mikor használjuk?

Az eldöntés tételét bármikor alkalmazhatjuk, ha a válasz egy **igen vagy nem** kérdésre redukálható:

* „Van-e olyan termék a boltban, ami akciós?”
* „Küldött-e be valaki dolgozatot?”
* „Van-e 18 év alatti felhasználó?”
* „Van-e valaki, aki 5-ösre vizsgázott?”

Ez a tétel a **feltételes működés** egyik alappillére. A gyakorlatban gyakran használjuk arra, hogy eldöntsük, el kell-e indítani egy bizonyos folyamatot, vagy kihagyhatjuk azt.

---

### 🧪 Alapmegoldás (klasszikus `for` ciklus)

```javascript
const ages = [23, 17, 45, 30];
let found = false;
for (let i = 0; i < ages.length; i++) {
  if (ages[i] < 18) {
    found = true;
    break;
  }
}
console.log("Van 18 év alatti?", found);
```

---

### 🔄 Refaktorálva `for-of` ciklussal

```javascript
let found = false;
for (let age of ages) {
  if (age < 18) {
    found = true;
    break;
  }
}
```

---

### 🚀 Refaktorálva `some()` metódussal

```javascript
const found = ages.some(age => age < 18);
```

A `some()` metódus JavaScriptben kifejezetten **az eldöntés tételének** funkcionális eszköze. Azonnal `true`-val tér vissza, ha talál megfelelő elemet – így pontosan az algoritmus logikáját valósítja meg.

---

### 💡 Összetettebb kiindulópont: objektumok tömbje

```javascript
const students = [
  { name: "Anna", submitted: true },
  { name: "Béla", submitted: false },
  { name: "Cili", submitted: true }
];

let hasMissing = false;
for (let student of students) {
  if (!student.submitted) {
    hasMissing = true;
    break;
  }
}
console.log("Van, aki nem küldte be?", hasMissing);
```

---

### ✨ Refaktorálva `some()`-mal

```javascript
const hasMissing = students.some(student => !student.submitted);
```

---

### 🛠 Mire figyelj?

* **Ne járd végig a tömböt fölöslegesen.** Használj `break`-et vagy `some()`-ot, hogy az algoritmus az első találat után megálljon.
* **Üres tömb esetén** mindig `false` a válasz (hiszen nincs mit vizsgálni).
* Érdemes ezt a tételt más algoritmusok előtt alkalmazni előfeltételként, például: „Ha van hibás adat, akkor jelezz hibát, különben menj tovább.”

---

Az eldöntés tételét gyakran előszűrésként vagy **feltételellenőrzésként** alkalmazzuk. Kiválóan kombinálható más tételekkel, például kiválasztással vagy megszámlálással: például előbb megnézzük, van-e hiba, és ha nincs, akkor számoljuk meg az érvényes adatokat.
