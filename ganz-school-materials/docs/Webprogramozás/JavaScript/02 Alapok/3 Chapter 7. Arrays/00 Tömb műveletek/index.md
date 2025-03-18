---
title: Tömb műveletek
---

## `filter() - metódus`

A `filter()` metódus egy JavaScript beépített tömbmetódus, amely egy adott feltétel alapján szűri a tömb elemeit, és egy új tömböt ad vissza azokkal az elemekkel, amelyek megfelelnek a feltételnek. Az eredeti tömb nem módosul.

#### Mire való a `filter()`?
- Egy tömb elemeinek szűrésére adott feltétel alapján.
- Eredeti tömb érintetlen marad.
- Könnyen kombinálható más metódusokkal (`map()`, `reduce()`, stb.).
- Hasznos például adatbázislekérdezések, keresések és dinamikus listaszűrések esetén.

#### Példa: Páros számok kiszűrése egy tömbből
```js
const szamok = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const parosSzamok = szamok.filter(szam => szam % 2 === 0);

console.log(parosSzamok); // [2, 4, 6, 8, 10]
```

#### Példa: Olyan objektumok szűrése, ahol az életkor nagyobb, mint 18
```js
const emberek = [
  { nev: "Anna", kor: 25 },
  { nev: "Béla", kor: 17 },
  { nev: "Csaba", kor: 30 },
  { nev: "Dóra", kor: 15 }
];

const felnőttek = emberek.filter(ember => ember.kor >= 18);

console.log(felnőttek);
// [{ nev: "Anna", kor: 25 }, { nev: "Csaba", kor: 30 }]
```

## Gyakorlati példák


#### **Életkor alapján szűrés:**
- **Felnőttek kiválasztása (18 év felettiek):**
  ```js
  const adults = users.filter(user => user.age >= 18);
  ```
- **Kiskorúak kiválasztása (18 év alattiak):**
  ```js
  const minors = users.filter(user => user.age < 18);
  ```
- **Konkrét életkorú személyek (pl. 25 évesek):**
  ```js
  const age25 = users.filter(user => user.age === 25);
  ```
- **Adott életkor tartományban lévő felhasználók (pl. 20 és 30 között):**
  ```js
  const between20And30 = users.filter(user => user.age >= 20 && user.age <= 30);
  ```



#### **Név alapján szűrés:**
- **Bizonyos névre illeszkedő felhasználók (pl. név == 'Anna'):**
  ```js
  const annas = users.filter(user => user.name === 'Anna');
  ```
- **Név hossza alapján (pl. 4 karakternél hosszabb nevek):**
  ```js
  const longNames = users.filter(user => user.name.length > 4);
  ```
- **Adott betűvel kezdődő nevek (pl. 'A' betűvel kezdődő):**
  ```js
  const startsWithA = users.filter(user => user.name.startsWith('A'));
  ```
- **Névben szereplő betűk alapján (pl. tartalmazza az 'a' betűt):**
  ```js
  const containsA = users.filter(user => user.name.toLowerCase().includes('a'));
  ```



#### **Összetett feltételek:**
- **Adott név és életkor együttes szűrése (pl. 'Anna' és 25 év felettiek):**
  ```js
  const filteredUsers = users.filter(user => user.name === 'Anna' && user.age > 25);
  ```
- **Névben 'a' betű és életkor 20 és 30 között:**
  ```js
  const complexFilter = users.filter(user => user.name.includes('a') && user.age >= 20 && user.age <= 30);
  ```



#### **Dinamikus szűrés:**
- **Példa: Felhasználói input alapján szűrés**
  ```js
  const searchTerm = 'Béla';
  const filtered = users.filter(user => user.name.includes(searchTerm));
  ```



#### **Negációs feltételek:**
- **Adott nevű felhasználók kizárása (pl. nem 'Anna'):**
  ```js
  const notAnna = users.filter(user => user.name !== 'Anna');
  ```
- **Adott életkor alatti/feletti felhasználók kizárása (pl. nem 30 év alattiak):**
  ```js
  const above30 = users.filter(user => user.age > 30);
  ```



#### **Objektumok tulajdonságainak megléte alapján (ha vannak opcionális tulajdonságok):**
  ```js
  const withEmail = users.filter(user => user.email); // Csak azokat, akiknek van email mezője
  ```


## `find() - metódus`

A **`find()`** metódus a JavaScript tömbök egyik beépített metódusa, amely **megkeresi az első olyan elemet**, amely megfelel egy adott feltételnek, és **visszaadja azt az elemet**. Ha nincs ilyen elem, akkor **`undefined`**-ot ad vissza.

#### **Mikor használd a `find()` metódust?**
✔️ Ha **csak egyetlen első találatot** keresel.  
✔️ Ha olyan adatokat keresel, ahol **egyedi azonosító** vagy **különleges feltétel** alapján kell kiválasztani egy elemet.  



#### **Példa: Egy adott szám keresése**
```js
const szamok = [10, 20, 30, 40, 50];

const keresettSzam = szamok.find(szam => szam > 25);

console.log(keresettSzam); // 30
```
 Az első szám, amely **nagyobb, mint 25**, az a **30**, így azt adja vissza.



#### **Példa: Egy objektum keresése tömbben**
```js
const emberek = [
  { nev: "Anna", kor: 25 },
  { nev: "Béla", kor: 17 },
  { nev: "Csaba", kor: 30 }
];

const keresettEmber = emberek.find(ember => ember.kor < 18);

console.log(keresettEmber); 
// { nev: "Béla", kor: 17 }
```
 Az első ember, aki **18 év alatti**, az **Béla**, így azt adja vissza.


#### **Miben különbözik a `find()` és a `filter()`?**
| Metódus | Mit csinál? | Visszatérési érték |
|---------|------------|-------------------|
| `find()` | Az **első megfelelő elemet** keresi | Egyetlen elem vagy `undefined` |
| `filter()` | **Minden megfelelő elemet** kiszűr | Egy tömb az összes megfelelő elemmel |

#### Példa különbség:
```js
const szamok = [10, 20, 30, 40, 50];

console.log(szamok.find(szam => szam > 25));  
// 30 (csak az első találat)

console.log(szamok.filter(szam => szam > 25));  
// [30, 40, 50] (összes megfelelő találat)
```

## Gyakorlati példák

**Adott tulajdonság alapján keresés:**
   - **Név alapján (pl. 'Anna' nevű felhasználó):**
     ```js
     const anna = users.find(user => user.name === 'Anna');
     console.log(anna); // {name: 'Anna', age: 25}
     ```

   - **Életkor alapján (pl. 30 éves felhasználó):**
     ```js
     const age30 = users.find(user => user.age === 30);
     console.log(age30); // {name: 'Csaba', age: 30}
     ```



**Több feltételes keresés:**
   - **Pl. név 'a' betűt tartalmaz és 18 év feletti:**
     ```js
     const result = users.find(user => user.name.includes('a') && user.age > 18);
     console.log(result); // {name: 'Anna', age: 25}
     ```
   > *Csak az első megfelelő elemet adja vissza, a `filter()`-rel ellentétben!*



**Dinamikus keresés:**
   - **Felhasználói input alapján (pl. `searchTerm` tartalmazza a keresett nevet):**
     ```js
     const searchTerm = 'Béla';
     const foundUser = users.find(user => user.name === searchTerm);
     console.log(foundUser); // {name: 'Béla', age: 17}
     ```



**Adott feltételnek nem megfelelő első elem keresése:**
   - **Pl. az első nem kiskorú (18 év alatti) felhasználó:**
     ```js
     const notMinor = users.find(user => user.age >= 18);
     console.log(notMinor); // {name: 'Anna', age: 25}
     ```



**Ha nincs találat:**
   - Ha egyetlen elem sem felel meg a feltételnek, a `find()` **`undefined`**-ot ad vissza.
   ```js
   const notFound = users.find(user => user.age > 100);
   console.log(notFound); // undefined
   ```



---

## `map() - metódus`


A **`map()`** metódus a JavaScript tömbök egyik beépített metódusa, amely egy **új tömböt hoz létre az eredeti tömb elemeinek átalakításával** egy megadott függvény segítségével. Az eredeti tömb **nem változik meg**.

#### 🏆 **Mikor érdemes `map()`-et használni?**
✔️ Ha egy tömb elemeiből egy **új tömböt szeretnél készíteni**.  
✔️ Ha az eredeti tömb **minden elemét át akarod alakítani**.  
✔️ Ha tömbben lévő objektumokat módosítanál, például egy új tulajdonságot adnál hozzá.  
✔️ Ha tömbből **csak bizonyos tulajdonságokat** szeretnél kinyerni (pl. objektumok nevei).


#### `map()` használata
**Eredeti tömb módosítása egy új tömbben**
```js
const szamok = [1, 2, 3, 4, 5];

const negyzetek = szamok.map(szam => szam * szam);

console.log(negyzetek); // [1, 4, 9, 16, 25]
```
Az eredeti tömb minden elemét **négyzetre emeljük**, és egy új tömböt kapunk.



#### **Objektumok átalakítása `map()`-pel**
```js
const emberek = [
  { nev: "Anna", kor: 25 },
  { nev: "Béla", kor: 17 },
  { nev: "Csaba", kor: 30 }
];

const nevek = emberek.map(ember => ember.nev);

console.log(nevek); // ["Anna", "Béla", "Csaba"]
```
Az eredeti objektumtömbből **csak a neveket** vesszük ki, és egy új tömböt hozunk létre.


####  **Tömb elemeinek módosítása egy új tömbben**
```js
const arak = [100, 200, 300];

const akciosArak = arak.map(ar => ar * 0.9);

console.log(akciosArak); // [90, 180, 270]
```
 Minden árat **10%-kal csökkentünk**, és egy új tömbben tároljuk.


####  **Miben különbözik a `map()` és a `forEach()`?**
| Metódus  | Mit csinál? | Visszatérési érték |
|----------|------------|-------------------|
| `map()`  | **Új tömböt hoz létre** az elemek átalakításával | Új tömb |
| `forEach()` | Csak végrehajt egy műveletet minden elemen, de **nem ad vissza új tömböt** | `undefined` |

#### **Különbség példa:**
```js
const szamok = [1, 2, 3, 4, 5];

const ujTomb = szamok.map(szam => szam * 2);
console.log(ujTomb); 
// [2, 4, 6, 8, 10] (ÚJ tömb jön létre)

szamok.forEach(szam => console.log(szam * 2)); 
// Csak kiírja az értékeket, de nem hoz létre új tömböt
```

## Gyakorlati példák

**Tulajdonságok kinyerése:**
   - **Csak a neveket tartalmazó tömb készítése:**
     ```js
     const names = users.map(user => user.name);
     console.log(names); // ['Anna', 'Béla', 'Csaba']
     ```

   - **Csak az életkorokat tartalmazó tömb:**
     ```js
     const ages = users.map(user => user.age);
     console.log(ages); // [25, 17, 30]
     ```


   - **Formázott szöveges adatok létrehozása:**
     ```js
     const userDescriptions = users.map(user => `${user.name} ${user.age} éves)`);
     console.log(userDescriptions);
     // ['Anna (25 éves)', 'Béla (17 éves)', 'Csaba (30 éves)']
     ```



**Új tömb létrehozása módosított adatokkal:**
   - **Név hosszak tömbje:**
     ```js
     const nameLengths = users.map(user => user.name.length);
     console.log(nameLengths); // [4, 4, 5]
     ```



**Matematikai műveletek végzése:**
   - **Életkorok növelése 1 évvel:**
     ```js
     const nextYearAges = users.map(user => user.age + 1);
     console.log(nextYearAges); // [26, 18, 31]
     ```



**Feltételek használata minden elemre:**
   - **Nagybetűssé alakítás:**
     ```js
     const upperCaseNames = users.map(user => user.name.toUpperCase());
     
     
     console.log(upperCaseNames); // ['ANNA', 'BÉLA', 'CSABA']
     ```



#### **Kombináció más metódusokkal:**
- **Pl. először szűrés, majd map:**
  ```js
  const adultNames = users
    .filter(user => user.age >= 18)
    .map(user => user.name);
  console.log(adultNames); // ['Anna', 'Csaba']
  ```



