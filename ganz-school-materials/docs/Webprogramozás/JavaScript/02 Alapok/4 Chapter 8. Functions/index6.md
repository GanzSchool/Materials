---
title: Minimumkiválasztás tétele
---

# Minimumkiválasztás tétele

A **minimumkiválasztás tétele** a maximum párja: egy sorozat **legkisebb értékű elemének kiválasztására** szolgál. A működése szinte teljesen megegyezik a maximumkiválasztáséval – egy „rekordtartó” változóban nyomon követjük az eddig talált legkisebb értéket, és ha találunk egy nála kisebbet, lecseréljük azt.

Ez a tétel kulcsfontosságú, amikor **negatív csúcsokat**, **legrosszabb eredményeket**, vagy például a **legolcsóbb ajánlatot** kell kiválasztani. Szinte minden alkalmazási területhez kapcsolható – legyen szó pénzügyekről, oktatásról, egészségről vagy időmérésről.

---

### 🧩 Életszerű példák

* Egy szálláskereső oldal a legolcsóbb szobát akarja kiírni a találatok közül.
* Egy tanulmányi rendszerben ki szeretnéd írni, ki írta a legrosszabb dolgozatot.
* Egy edzős appban azt kell meghatározni, melyik nap futott a felhasználó a **legkevesebbet**.
* Egy bolti rendszer kiszámolja, melyik terméknek van a legalacsonyabb ára készletből.

Ahogy a maximumkiválasztásnál, itt is fontos figyelni, hogy a lista **nem legyen üres**, különben hibát kapunk a `list[0]` érték miatt.

---

### 🧪 Alapmegoldás (`for` ciklussal)

```javascript
const numbers = [34, 15, 76, 4, 99];
let min = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < min) {
    min = numbers[i];
  }
}
console.log("Legkisebb szám:", min);
```

---

### 🔄 Refaktorálva (`for-of` ciklussal)

```javascript
let min = numbers[0];
for (let num of numbers) {
  if (num < min) {
    min = num;
  }
}
```

---

### 🚀 Refaktorálva `reduce`-szel

```javascript
const min = numbers.reduce((a, b) => (a < b ? a : b));
```

---

### 💡 Összetettebb példa: objektumok tömbje

```javascript
const hotels = [
  { name: "Hotel A", price: 25000 },
  { name: "Hotel B", price: 18000 },
  { name: "Hotel C", price: 21000 },
  { name: "Hotel D", price: 30000 }
];

let cheapest = hotels[0];
for (let hotel of hotels) {
  if (hotel.price < cheapest.price) {
    cheapest = hotel;
  }
}
console.log("Legolcsóbb szállás:", cheapest.name);
```

---

### ✨ Refaktorálva `reduce`-szel

```javascript
const cheapest = hotels.reduce((min, current) =>
  current.price < min.price ? current : min
);
console.log("Legolcsóbb szállás:", cheapest.name);
```

---

A minimumkiválasztás tételét gyakran használjuk **döntéstámogatásra**, amikor a felhasználónak a „legkedvezőbb” opciót kell felkínálni. Itt is érdemes az érték mellett **a kapcsolódó információt is megőrizni**, például a szállás nevét, dátumát, termék nevét stb.

Sok esetben a **maximum- és minimumkiválasztás együtt** is szerepelhet – például egy adatsor szélsőértékeit keressük meg egyszerre.
