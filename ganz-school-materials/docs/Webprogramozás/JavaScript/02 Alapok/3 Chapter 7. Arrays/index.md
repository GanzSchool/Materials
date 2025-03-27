---
title: Tömbműveletek
---

# Tömbműveletek

## Tömb létrehozása
A tömb egy olyan adatszerkezet, amely több elemet tárolhat egyetlen változóban. A JavaScriptben a tömbök dinamikusak, vagyis méretük változhat, és különböző típusú adatokat is tartalmazhatnak. Létrehozásuk történhet üres tömbként (`[]`), vagy elemekkel feltöltve (`[1, 2, 3]`). Egy másik lehetőség az `Array` konstruktor használata (`new Array(5)`), de ezt ritkábban használjuk. A tömbök alapértelmezetten nulladik indexűek, ami azt jelenti, hogy az első elem az index 0-n található.


#### Üres tömb létrehozása
```js
let uresTomb = []; 
console.log(uresTomb); // []
```

#### Elemekkel feltöltött tömb
```js
let szamok = [1, 2, 3, 4, 5];
console.log(szamok); // [1, 2, 3, 4, 5]
```

#### Vegyes típusú tömb
```js
let vegyes = [42, "Hello", true, null, undefined, { nev: "Anna" }];
console.log(vegyes); // [42, "Hello", true, null, undefined, {nev: "Anna"}]
```

#### Tömb létrehozása `new Array` használatával
```js
let masikTomb = new Array(3); 
console.log(masikTomb); // [ <3 empty slots> ] → üres elemeket tartalmaz
```

---

## Tömbhöz való hozzáférés
A tömb elemei az indexük alapján érhetők el, az indexelés nullától indul. Ha egy nem létező indexet próbálunk lekérdezni, `undefined` értéket kapunk. A `length` tulajdonság segítségével lekérdezhetjük a tömb hosszát, ami hasznos, ha iterálni szeretnénk rajta. Az indexelés lehetővé teszi az elemek módosítását is, például `arr[2] = 100` hatására a harmadik elem értéke 100-ra változik.


```js
let gyumolcsok = ["alma", "körte", "szilva"];
console.log(gyumolcsok[0]); // "alma"
console.log(gyumolcsok[2]); // "szilva"
console.log(gyumolcsok[5]); // undefined (mert nincs ilyen index)
console.log(gyumolcsok.length); // 3
```

Ha módosítani szeretnénk egy elemet:
```js
gyumolcsok[1] = "banán";
console.log(gyumolcsok); // ["alma", "banán", "szilva"]
```

---

## Tömb módosítása
A tömb elemeit többféleképpen módosíthatjuk. A `push()` metódussal új elemet adhatunk hozzá a tömb végéhez, míg a `unshift()` metódussal az elejére illeszthetünk be elemeket. Az `pop()` és `shift()` metódusok segítségével eltávolíthatjuk az utolsó, illetve az első elemet. Ha egy adott indexen szeretnénk értéket módosítani, akkor azt közvetlenül megadhatjuk, például: `arr[1] = "új érték"`. 


#### Elem hozzáadása a tömb végéhez
```js
let nevek = ["Anna", "Béla"];
nevek.push("Cili");
console.log(nevek); // ["Anna", "Béla", "Cili"]
```

#### Elem hozzáadása a tömb elejéhez
```js
nevek.unshift("Dénes");
console.log(nevek); // ["Dénes", "Anna", "Béla", "Cili"]
```

#### Elem eltávolítása a végéről és az elejéről
```js
nevek.pop();
console.log(nevek); // ["Dénes", "Anna", "Béla"]

nevek.shift();
console.log(nevek); // ["Anna", "Béla"]
```

---

## Tömb bejárása
A tömb elemein többféle módon végig lehet menni. A hagyományos `for` ciklus lehetőséget ad az index alapú iterációra, így bármilyen műveletet végrehajthatunk az egyes elemekkel. A `for...of` ciklus elegánsabb megoldás a tömb értékeinek végigjárására, míg a `forEach()` metódus funkcionális megközelítést biztosít, amelyben minden elemen végrehajthatunk egy függvényt. A `forEach()` különösen akkor hasznos, ha az eredeti tömb elemeit szeretnénk kiíratni vagy feldolgozni egy bizonyos logika alapján.


#### For ciklus
```js
let szamok = [10, 20, 30, 40];
for (let i = 0; i < szamok.length; i++) {
    console.log(szamok[i]);
}
// 10
// 20
// 30
// 40
```

#### For...of ciklus
```js
for (let szam of szamok) {
    console.log(szam);
}
```

#### forEach metódus
```js
szamok.forEach((szam) => {
    console.log(szam);
});
```

---

## Tömb átalakítása
A tömbök átalakítására szolgáló metódusok közül a `map()` az egyik legfontosabb. Ez egy új tömböt hoz létre a meglévő tömb elemeinek módosításával, anélkül, hogy az eredeti tömböt módosítaná. A `filter()` segítségével csak azok az elemek maradnak meg egy új tömbben, amelyek megfelelnek egy adott feltételnek. A `reduce()` metódus a tömb elemeit egyetlen értékké alakítja, például összegzés vagy szorzás formájában. Ezek a metódusok segítenek hatékonyabb és olvashatóbb kódot írni.

#### map() – minden számot megszoroz 2-vel
```js
let eredeti = [1, 2, 3, 4];
let duplazott = eredeti.map(szam => szam * 2);
console.log(duplazott); // [2, 4, 6, 8]
```

#### filter() – csak a páros számokat tartja meg
```js
let parosok = eredeti.filter(szam => szam % 2 === 0);
console.log(parosok); // [2, 4]
```

#### reduce() – elemek összege
```js
let osszeg = eredeti.reduce((acc, szam) => acc + szam, 0);
console.log(osszeg); // 10
```

---

## Egyéb hasznos tömbműveletek
A `includes()` metódussal gyorsan ellenőrizhetjük, hogy egy adott elem megtalálható-e a tömbben, míg az `indexOf()` és `lastIndexOf()` segítségével megkereshetjük az adott érték indexét. A `sort()` metódus a tömb elemeit rendezi, de alapértelmezetten lexikografikus sorrendben, ami számok esetén problémát jelenthet, ezért ilyenkor érdemes egy összehasonlító függvényt használni (`arr.sort((a, b) => a - b)`). Az `reverse()` a tömb elemeit fordított sorrendben tárolja.


```js
let tomb = [5, 10, 15];

console.log(tomb.includes(10)); // true
console.log(tomb.indexOf(15)); // 2

tomb.sort((a, b) => b - a); 
console.log(tomb); // [15, 10, 5] (csökkenő sorrend)

tomb.reverse();
console.log(tomb); // [5, 10, 15] (visszafordítva)
```

---

## Tömb darabolása és másolása
A tömbök szeletelése a `slice()` és `splice()` metódusokkal történhet. A `slice()` egy új tömböt hoz létre az eredeti tömb adott részéből, az eredetit érintetlenül hagyva. Ezzel szemben a `splice()` módosítja az eredeti tömböt, lehetővé téve elemek hozzáadását, törlését vagy cseréjét. Ezek a műveletek akkor hasznosak, ha egy tömb bizonyos részeit akarjuk kiemelni vagy módosítani.


#### slice() – Tömb egy részének kivágása
```js
let szamok = [1, 2, 3, 4, 5, 6];
let reszlet = szamok.slice(1, 4); // Az 1-től 4-ig terjedő elemeket kivágja (4 nem tartozik bele)
console.log(reszlet); // [2, 3, 4]
console.log(szamok);  // [1, 2, 3, 4, 5, 6] (eredeti tömb változatlan)
```

#### splice() – Tömb módosítása
```js
let gyumolcsok = ["alma", "banán", "körte", "narancs"];
let toroltElemek = gyumolcsok.splice(1, 2); // 1. indexről 2 elemet töröl
console.log(toroltElemek); // ["banán", "körte"]
console.log(gyumolcsok);   // ["alma", "narancs"]
```

#### splice() – Elembeszúrás
```js
gyumolcsok.splice(1, 0, "szőlő", "eper"); // 1. indexre beszúrja a két új elemet, törlés nélkül
console.log(gyumolcsok); // ["alma", "szőlő", "eper", "narancs"]
```

---

## Tömb konvertálása és összefűzése
A `concat()` metódussal két vagy több tömböt egyesíthetünk anélkül, hogy az eredetiek módosulnának. A `join()` metódus a tömb összes elemét egyetlen stringgé alakítja, ahol megadhatjuk az elválasztó karaktert. Ezek a metódusok különösen akkor hasznosak, ha egy tömb adatait szöveges formában szeretnénk megjeleníteni vagy egyesíteni.

#### concat() – Tömbök egyesítése
```js
let tomb1 = [1, 2, 3];
let tomb2 = [4, 5, 6];
let osszefuzott = tomb1.concat(tomb2);
console.log(osszefuzott); // [1, 2, 3, 4, 5, 6]
console.log(tomb1); // [1, 2, 3] (az eredeti tömb változatlan)
```

#### join() – Tömb stringgé alakítása
```js
let szavak = ["Ez", "egy", "példa"];
let mondat = szavak.join(" ");
console.log(mondat); // "Ez egy példa"
```

---

## Speciális esetek
A tömbök ürességének ellenőrzése gyakori feladat, amelyet legegyszerűbben a `length` tulajdonsággal vizsgálhatunk (`if (arr.length === 0)`). A tömb másolása történhet a spread operátorral (`let newArr = [...arr]`), amely az egyik legbiztonságosabb módja a másolatok készítésének. A többdimenziós tömbök, mint például mátrixok, tömbök tömbjeiből állnak, és ezek kezelése kétdimenziós indexeléssel történik (`matrix[1][2]` egy mátrix második sorának harmadik elemét adja vissza).

#### Tömb ürességének ellenőrzése
```js
let uresTomb = [];
if (uresTomb.length === 0) {
    console.log("A tömb üres.");
}
```

#### Tömb másolása spread operátorral
```js
let eredeti = [10, 20, 30];
let masolat = [...eredeti]; // Új tömb létrehozása
console.log(masolat); // [10, 20, 30]
masolat.push(40);
console.log(masolat);  // [10, 20, 30, 40]
console.log(eredeti);  // [10, 20, 30] (nem változott!)
```

#### Többdimenziós tömbök kezelése
```js
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[1][2]); // 6 (második sor, harmadik elem)
```
## Összefoglaló gyűjtemény:


<details className="dropdown-task">

  <summary>
  <strong>metódus gyűjtemény</strong>
  
  
  </summary>

 **1. Tömb létrehozása (`[]`, `new Array()`)**
**Definíció:** Egy tömb létrehozására használjuk, amely több értéket képes tárolni egy változóban.  

**Példa:**
```js
let tomb1 = []; // Üres tömb
let tomb2 = [1, 2, 3]; // Számokat tartalmazó tömb
let tomb3 = new Array(5); // 5 elemnyi üres tömb
```


**2. Elem elérése index alapján (`tomb[index]`)**
**Definíció:** Egy adott indexű elem visszaadása a tömbből.  

**Példa:**
```js
let gyumolcsok = ["alma", "banán", "cseresznye"];
console.log(gyumolcsok[1]); // "banán"
```

 **3. Tömb hosszának lekérdezése (`length`)**
**Definíció:** Megadja a tömbben található elemek számát.  

**Példa:**
```js
let szamok = [10, 20, 30];
console.log(szamok.length); // 3
```


 **4. Elem hozzáadása a végéhez (`push()`)**
**Definíció:** Egy új elemet ad hozzá a tömb végéhez.  

**Példa:**
```js
let nevek = ["Anna", "Béla"];
nevek.push("Cili");
console.log(nevek); // ["Anna", "Béla", "Cili"]
```


 **5. Elem eltávolítása a végéről (`pop()`)**
**Definíció:** Eltávolítja és visszaadja a tömb utolsó elemét.  

**Példa:**
```js
let nevek = ["Anna", "Béla", "Cili"];
let torolt = nevek.pop();
console.log(torolt); // "Cili"
console.log(nevek);  // ["Anna", "Béla"]
```


 **6. Elem hozzáadása az elejéhez (`unshift()`)**
**Definíció:** Egy új elemet ad hozzá a tömb elejéhez.  

**Példa:**
```js
let szinek = ["piros", "kék"];
szinek.unshift("zöld");
console.log(szinek); // ["zöld", "piros", "kék"]
```


 **7. Elem eltávolítása az elejéről (`shift()`)**
**Definíció:** Eltávolítja és visszaadja a tömb első elemét.  

**Példa:**
```js
let szinek = ["zöld", "piros", "kék"];
let elso = szinek.shift();
console.log(elso);  // "zöld"
console.log(szinek); // ["piros", "kék"]
```



 **8. Tömb bejárása (`for`, `forEach()`, `for...of`)**
**Definíció:** A tömb elemeinek végigjárása ciklus segítségével.  

**Példa (for ciklus):**
```js
let szamok = [1, 2, 3];
for (let i = 0; i < szamok.length; i++) {
    console.log(szamok[i]);
}
```

**Példa (forEach):**
```js
szamok.forEach(szam => console.log(szam));
```



 **9. Új tömb létrehozása módosított elemekkel (`map()`)**
**Definíció:** Minden elemre alkalmaz egy függvényt, és egy új tömböt ad vissza.  

**Példa:**
```js
let eredeti = [1, 2, 3];
let negyzetek = eredeti.map(x => x * x);
console.log(negyzetek); // [1, 4, 9]
```



 **10. Meghatározott elemek kiszűrése (`filter()`)**
**Definíció:** Csak azokat az elemeket tartja meg, amelyek megfelelnek egy feltételnek.  

**Példa:**
```js
let szamok = [10, 15, 20, 25];
let parosok = szamok.filter(szam => szam % 2 === 0);
console.log(parosok); // [10, 20]
```


 **11. Tömb elemeinek összevonása (`reduce()`)**
**Definíció:** Egy értéket hoz létre az összes elem feldolgozásával.  

**Példa:**
```js
let szamok = [1, 2, 3, 4];
let osszeg = szamok.reduce((acc, szam) => acc + szam, 0);
console.log(osszeg); // 10
```


 **12. Elem keresése (`includes()`)**
**Definíció:** Megnézi, hogy egy adott elem benne van-e a tömbben.  

**Példa:**
```js
let lista = ["macska", "kutya", "hal"];
console.log(lista.includes("kutya")); // true
```



 **13. Első előfordulás keresése (`indexOf()`)**
**Definíció:** Egy adott elem első indexét adja vissza.  

**Példa:**
```js
let szamok = [5, 10, 15, 20];
console.log(szamok.indexOf(15)); // 2
```



 **14. Tömb rendezése (`sort()`)**
**Definíció:** Növekvő sorrendbe állítja a tömb elemeit (alapértelmezetten lexikografikus).  

**Példa:**
```js
let szamok = [4, 2, 10, 3];
szamok.sort((a, b) => a - b);
console.log(szamok); // [2, 3, 4, 10]
```



 **15. Tömb egy részének kivágása (`slice()`)**
**Definíció:** Új tömböt hoz létre egy kiválasztott részéből.  

**Példa:**
```js
let betuk = ["a", "b", "c", "d"];
let resz = betuk.slice(1, 3);
console.log(resz); // ["b", "c"]
```



 **16. Elemek módosítása és törlése (`splice()`)**
**Definíció:** Elemet ad hozzá, töröl, vagy cserél egy tömbben.  

**Példa:**
```js
let nevek = ["Anna", "Béla", "Cili"];
nevek.splice(1, 1, "Dani"); 
console.log(nevek); // ["Anna", "Dani", "Cili"]
```



 **17. Tömb összefűzése (`concat()`)**
**Definíció:** Két vagy több tömböt egyesít anélkül, hogy módosítaná az eredetieket.  

**Példa:**
```js
let t1 = [1, 2, 3];
let t2 = [4, 5, 6];
let ujTomb = t1.concat(t2);
console.log(ujTomb); // [1, 2, 3, 4, 5, 6]
```

</details>

## Gyakorlati példák

### map()

<details className="dropdown-task">

 <summary>
  <strong>Egyszerű szorzás</strong>
  
    Szorozz meg minden számot kettővel a tömbben!
  </summary>


    ```js
    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map(num => num * 2);

    console.log(doubled); // [2, 4, 6, 8, 10]
    ```

</details>

<details className="dropdown-task">

 <summary>
  <strong>Sztringek hosszának lekérdezése</strong>
  
  Készíts új tömböt, amely a szavak hosszát tartalmazza!
  </summary>

    ```js
    const words = ['alma', 'körte', 'banán'];
    const lengths = words.map(word => word.length);

    console.log(lengths); // [4, 5, 5]
    ```

</details>


<details className="dropdown-task">

 <summary>
  <strong>Objektum tulajdonságainak kiválasztása</strong>


A `users` tömbből csinálj egy új tömböt, ami csak a neveket tartalmazza!
  
  
  </summary>

  ```js
const users = [
  { name: 'Anna', age: 25 },
  { name: 'Béla', age: 30 },
  { name: 'Cili', age: 22 }
];

const names = users.map(user => user.name);

console.log(names); // ['Anna', 'Béla', 'Cili']
```

</details>


<details className="dropdown-task">

 <summary>
  <strong>Feltételes szöveg hozzáadása</strong>
  
    Minden számhoz add hozzá, hogy „ páros” vagy „ páratlan”.
  
  </summary>

    ```js
    const nums = [1, 2, 3, 4];


    const labeled = nums.map(num => 
    num % 2 === 0 ? `${num} páros` : `${num} páratlan`
    );

    console.log(labeled);
    // ["1 páratlan", "2 páros", "3 páratlan", "4 páros"]
    ```

</details>

<details className="dropdown-task">

 <summary>
  <strong>E-mail címek generálása</strong>
  

Alakítsd át a `users` tömböt úgy, hogy minden névhez generálj egy email címet `@gmail.com` végződéssel!
  
  </summary>



```js
const users = ['andras', 'eszter', 'zoli'];

const emails = users.map(name => `${name}@gmail.com`);

console.log(emails); 
// ['andras@gmail.com', 'eszter@gmail.com', 'zoli@gmail.com']
```

</details>

### filter() & map()

<details className="dropdown-task">

 <summary>
  <strong>Felnőttek nevei</strong>
  
Adott egy tömb személyekkel, név és életkor mezőkkel.  
Szűrd ki a legalább 18 éveseket, majd írasd ki a nevüket egy `<div>`-be vesszővel elválasztva!
  </summary>

  ```html
    <!DOCTYPE html>
    <html lang="hu">
    <head>
    <meta charset="UTF-8">
    <title>filter + map gyakorló</title>
    <style>
        body {
        font-family: Arial, sans-serif;
        padding: 2rem;
        background: #e6f2f0;
        }
        #output {
        background: #fff;
        border-radius: 10px;
        padding: 1rem;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
        max-width: 400px;
        }
    </style>
    </head>
    <body>

    <h2>Felnőttek nevei:</h2>
    <div id="output"></div>

    <script>
        const people = [
        { name: 'Anna', age: 17 },
        { name: 'Béla', age: 22 },
        { name: 'Cili', age: 15 },
        { name: 'Dávid', age: 30 },
        { name: 'Emese', age: 18 }
        ];

        const adults = people
        .filter(person => person.age >= 18)
        .map(person => person.name)
        .join(', ');

        document.getElementById('output').textContent = adults;
    </script>

    </body>
    </html>  
  ```

</details>

## Gyakorlati feladatok


### filter() & map()

<details className="dropdown-task">

  <summary>
  <strong>Páros számok</strong>
  
  
  </summary>

    ```html
    <!DOCTYPE html>
    <html lang="hu">
    <head>
    <meta charset="UTF-8">
    <title>1. Páros számok</title>
    <style>
        body {
        background: #121212;
        color: #e0e0e0;
        font-family: 'Segoe UI', sans-serif;
        margin: 0;
        padding: 2rem;
        }
        .container {
        max-width: 500px;
        margin: 0 auto;
        background: #1e1e1e;
        padding: 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
        }
        h2 {
        color: #bb86fc;
        text-align: center;
        }
        .output {
        margin-top: 1rem;
        }
        .item {
        padding: 0.75rem;
        background: #2c2c2c;
        border-radius: 6px;
        margin-bottom: 0.5rem;
        transition: background 0.3s ease;
        }
        .item:hover {
        background: #3d3d3d;
        }
    </style>
    </head>
    <body>
    <div class="container">
        <h2>Páros számok</h2>
        <div id="output" class="output"></div>
    </div>

    <script>
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

        // Feladat: Szűrd ki a `numbers` tömbből a páros számokat.
        // Ezután jelenítsd meg mindegyiket külön div-ben az `#output` elemben. (evenNumbersHTML)
        // Használj külön változót a filter és a map eredményére!


        document.getElementById('output').innerHTML = evenNumbersHTML.join('');
    </script>
    </body>
    </html>
    ```

  </details>


   <details className="dropdown-task">

  <summary>
  <strong>Szavak szűrése ("a" betű alapján)</strong>
  
  
  </summary>

    ```html
    <!DOCTYPE html>
    <html lang="hu">
    <head>
    <meta charset="UTF-8">
    <title>2. Szavak szűrése ("a" betű alapján)</title>
    <style>
        body {
        background: #121212;
        color: #e0e0e0;
        font-family: 'Segoe UI', sans-serif;
        margin: 0;
        padding: 2rem;
        }
        .container {
        max-width: 500px;
        margin: 0 auto;
        background: #1e1e1e;
        padding: 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
        }
        h2 {
        color: #bb86fc;
        text-align: center;
        }
        .output {
        margin-top: 1rem;
        }
        .item {
        padding: 0.75rem;
        background: #2c2c2c;
        border-radius: 6px;
        margin-bottom: 0.5rem;
        transition: background 0.3s ease;
        }
        .item:hover {
        background: #3d3d3d;
        }
    </style>
    </head>
    <body>
    <div class="container">
        <h2>Szavak ("a" betű)</h2>
        <div id="output" class="output"></div>
    </div>

    <script>
        const words = ['alma', 'körte', 'banán', 'szilva', 'eper', 'málna'];
    
    // Feladat: Szűrd ki azokat a szavakat a `words` tömbből, amelyek tartalmazzák az "a" betűt.
    // Az eredményül kapott szavakat jelenítsd meg külön div-ekben az `#output` elemben. (wordsHTML)
    // A filter és a map lépéseit külön változóban tárold!


        document.getElementById('output').innerHTML = wordsHTML.join('');
    </script>
    </body>
    </html>
    ```

  </details>


    

  <details className="dropdown-task">

  <summary>
  <strong>Admin felhasználók</strong>
  
  
  </summary>

    ```html
    <!DOCTYPE html>
    <html lang="hu">
    <head>
    <meta charset="UTF-8">
    <title>Admin felhasználók</title>
    <style>
        body {
        background: #121212;
        color: #e0e0e0;
        font-family: 'Segoe UI', sans-serif;
        margin: 0;
        padding: 2rem;
        }
        .container {
        max-width: 500px;
        margin: 0 auto;
        background: #1e1e1e;
        padding: 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
        }
        h2 {
        color: #bb86fc;
        text-align: center;
        }
        .output {
        margin-top: 1rem;
        }
        .item {
        padding: 0.75rem;
        background: #2c2c2c;
        border-radius: 6px;
        margin-bottom: 0.5rem;
        transition: background 0.3s ease;
        }
        .item:hover {
        background: #3d3d3d;
        }
    </style>
    </head>
    <body>
    <div class="container">
        <h2>Admin felhasználók</h2>
        <div id="output" class="output"></div>
    </div>

    <script>
        const users = [
        { name: 'Anna', role: 'admin' },
        { name: 'Béla', role: 'user' },
        { name: 'Cili', role: 'admin' },
        { name: 'Dávid', role: 'moderator' },
        { name: 'Eszter', role: 'user' }
        ];

        
    // Feladat: A `users` tömbből szűrd ki azokat az objektumokat, ahol a `role` értéke "admin".
    // Ezután jelenítsd meg az adminok nevét külön div-ekben az `#output` elemben. (adminsHTML)
    // A szűrt tömböt és a HTML-kódot külön változóban tárold!


        document.getElementById('output').innerHTML = adminsHTML.join('');
    </script>
    </body>
    </html>
    ```

  </details>



<details className="dropdown-task">

  <summary>
  <strong>Drága termékek (ár > 50)</strong>
  
  
  </summary>

```html
<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Drága termékek</title>
  <style>
    body {
      background: #121212;
      color: #e0e0e0;
      font-family: 'Segoe UI', sans-serif;
      margin: 0;
      padding: 2rem;
    }
    .container {
      max-width: 500px;
      margin: 0 auto;
      background: #1e1e1e;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
    }
    h2 {
      color: #bb86fc;
      text-align: center;
    }
    .output {
      margin-top: 1rem;
    }
    .item {
      padding: 0.75rem;
      background: #2c2c2c;
      border-radius: 6px;
      margin-bottom: 0.5rem;
      transition: background 0.3s ease;
    }
    .item:hover {
      background: #3d3d3d;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>Drága termékek (ár > 50)</h2>
    <div id="output" class="output"></div>

  </div>

  <script>
    const products = [
      { name: 'Telefon', price: 45 },
      { name: 'Laptop', price: 750 },
      { name: 'Fülhallgató', price: 60 },
      { name: 'Billentyűzet', price: 30 },
      { name: 'Monitor', price: 150 }
    ];

    // Feladat: Szűrd ki azokat a termékeket a `products` tömbből, amelyek ára nagyobb, mint 50 Ft.
// Jelenítsd meg a nevüket és árukat külön div-ekben az `#output` elemben.
// A filter és map lépéseket külön változóban tárold!
                                                 
    document.getElementById('output').innerHTML = productsHTML.join('');

    
  </script>
</body>
</html>
```

  </details>


  <details className="dropdown-task">

  <summary>
  <strong>Közelgő események</strong>
  
  
  </summary>

```html
  <!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Közelgő események</title>
  <style>
    body {
      background: #121212;
      color: #e0e0e0;
      font-family: 'Segoe UI', sans-serif;
      margin: 0;
      padding: 2rem;
    }
    .container {
      max-width: 500px;
      margin: 0 auto;
      background: #1e1e1e;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
    }
    h2 {
      color: #bb86fc;
      text-align: center;
    }
    .output {
      margin-top: 1rem;
    }
    .item {
      padding: 0.75rem;
      background: #2c2c2c;
      border-radius: 6px;
      margin-bottom: 0.5rem;
      transition: background 0.3s ease;
    }
    .item:hover {
      background: #3d3d3d;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>Közelgő események</h2>
    <div id="output" class="output"></div>
  </div>

  <script>
    // A mai dátumot fixáltuk a példa kedvéért
    const today = new Date('2025-03-24');

    const events = [
      { title: 'Konferencia', date: '2025-04-10' },
      { title: 'Workshop', date: '2025-03-20' },
      { title: 'Meetup', date: '2025-05-05' },
      { title: 'Webinárium', date: '2025-03-23' },
      { title: 'Kiállítás', date: '2025-06-15' }
    ];

// Feladat: Szűrd ki azokat az eseményeket az `events` tömbből, amelyek dátuma későbbi, mint a mai nap (2025-03-24).
// Jelenítsd meg az esemény címét és dátumát külön div-ekben az `#output` elemben. (eventsHTML)
// Használj külön változót a szűréshez és a HTML-hez!
    
    document.getElementById('output').innerHTML = eventsHTML.join('');
  </script>
</body>
</html>
```

  </details>