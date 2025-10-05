---
title: Összegzés tétele
---

# Összegzés tétele

Az **összegzés tétele** az egyik legegyszerűbb és leggyakrabban használt algoritmikus minta. A lényege, hogy egy sorozat (pl. egy tömb) elemeit **végigjárva** egy **összegző változóban tároljuk az elemek értékeinek összegét**. Akkor használjuk, amikor egy halmaz numerikus értékeit kell összesíteni – például árakat, pontszámokat, kilométereket, időkülönbségeket stb.

**Életszerű példa:**
Képzeld el, hogy egy futóedzős appot készítesz. A felhasználó minden nap fut, és az app tárolja, hogy az adott napon hány kilométert futott. A hét végén szeretnéd kiszámolni, hogy összesen hány kilométert tett meg – itt tökéletesen használható az összegzés tétele.

Ugyanez a gondolatmenet működik:

* egy bevásárlólista végösszegének kiszámításakor,
* egy online tanfolyam moduljaira kapott pontok összegzésekor,
* egy könyvelési tételsor záróegyenlegének megállapításakor.

---

### 🧪 Alapmegoldás (klasszikus for ciklus)

```javascript
const kilometers = [3.5, 5, 4.2, 0, 6.8];
let total = 0;
for (let i = 0; i < kilometers.length; i++) {
  total += kilometers[i];
}
console.log("Heti futás összesen:", total, "km");
```

---

### 🔄 Refaktorálva (for-of ciklussal)

```javascript
let total = 0;
for (let km of kilometers) {
  total += km;
}
```

---

### 🚀 Refaktorálva (funkcionális módon reduce használatával)

```javascript
const total = kilometers.reduce((acc, km) => acc + km, 0);
```

---

### 💡 Bonyolultabb kiindulópont: objektumok tömbje

```javascript
const runs = [
  { day: "Hétfő", distance: 3.5 },
  { day: "Kedd", distance: 5 },
  { day: "Szerda", distance: 4.2 },
  { day: "Csütörtök", distance: 0 },
  { day: "Péntek", distance: 6.8 }
];

let totalDistance = 0;
for (let run of runs) {
  totalDistance += run.distance;
}
```

---

### ✨ Refaktorálva `map` és `reduce` kombinációval

```javascript
const totalDistance = runs.map(run => run.distance).reduce((a, b) => a + b, 0);
```

---

Ez a tétel az alapja számos adatfeldolgozási algoritmusnak, és gyakran más tételekkel (pl. megszámlálás, szűrés) együtt alkalmazzuk. 


