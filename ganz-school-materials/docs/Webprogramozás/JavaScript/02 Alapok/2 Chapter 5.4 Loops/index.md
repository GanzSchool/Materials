---
title: Ciklusok
---


# Mi az a ciklus?

A JavaScriptben a ciklusok (loops) arra szolgálnak, hogy egy adott kódrészletet többször, egymás után lefuttassunk. Ennek célja általában az, hogy automatikusan végrehajtsunk műveleteket sorozatokon, tömbökön vagy valamilyen feltétel teljesüléséig újra és újra ismételjünk egy műveletsort. A leggyakrabban használt ciklustípusok JavaScriptben a következők:



---

## for ciklus (ismétlések száma ismert)

A **for** ciklus egy kompakt szerkezet, ami három fő részből áll: inicializálás, feltétel ellenőrzése, és léptetés (változó módosítása). Ez ideális olyan helyzetekre, amikor előre ismert, hogy hányszor szeretnénk végrehajtani a ciklus törzsét.

**Példa:**

```javascript
for (let i = 0; i < 5; i++) {
    console.log("Szám: " + i);
}
```

**Magyarázat:**

- **Inicializálás (`let i = 0`):** A ciklusváltozót itt hozzuk létre és állítjuk be az induló értékre. Ebben az esetben `i` értéke 0.
- **Feltétel (`i < 5`):** Mielőtt a ciklus minden egyes iterációja elindulna, ellenőrizzük, hogy a feltétel igaz-e. Ha `i` kisebb mint 5, akkor a ciklus törzse lefut.
- **Léptetés (`i++`):** Minden egyes ciklus végén a változó értékét növeljük eggyel, így előrehaladunk a ciklusban.
- **Ciklus törzs:** Itt történik a tényleges művelet, például a `console.log` hívás, ami kiírja az aktuális értéket.

Ezzel a módszerrel precízen irányíthatjuk, hogy hányszor ismétlődjön a kód, és könnyen követhetjük a ciklus változóinak alakulását.

---

## while ciklus (feltételig fut)

A **while** ciklus addig fut, amíg egy adott feltétel igaz. Fontos, hogy a ciklusban módosítsuk a feltételhez kapcsolódó változót, különben a ciklus soha nem áll le (végtelen ciklus).

**Példa:**

```javascript
let i = 0;
while (i < 5) {
    console.log("Szám: " + i);
    i++;
}
```

**Magyarázat:**

- **Kezdeti értékadás:** A ciklus előtt inicializáljuk az `i` változót.
- **Feltétel ellenőrzése:** Mielőtt a ciklus törzse lefutna, az `i < 5` feltételt ellenőrizzük. Ha ez igaz, akkor belépünk a ciklusba.
- **Ciklus törzs:** A `console.log` hívás kiírja az aktuális `i` értéket. A ciklus végén `i++` segítségével növeljük az értéket.
- **Folyamatos ellenőrzés:** Az `i` értékének növekedése miatt idővel a feltétel hamissá válik, így a ciklus véget ér.

Ez a ciklus különösen hasznos, ha nem feltétlenül tudjuk előre, hogy hányszor kell futnia, hanem egy adott feltétel változásán alapul a végrehajtás.

---

## do...while ciklus (legalább egyszer végrehajtódik)

A **do...while** ciklus hasonló a while ciklushoz, de azzal a különbséggel, hogy a ciklus törzsét legalább egyszer végrehajtja, mielőtt ellenőrizné a feltételt.

**Példa:**

```javascript
let i = 0;
do {
    console.log("Szám: " + i);
    i++;
} while (i < 5);
```

**Magyarázat:**

- **Ciklus törzs először:** A `do` blokkban lévő kód először lefut, függetlenül attól, hogy a feltétel igaz vagy hamis.
- **Feltétel ellenőrzése a végén:** Az `i < 5` feltételt csak a ciklus végén ellenőrizzük, így a kód legalább egyszer végrehajtódik.
- **Előny:** Hasznos olyan esetekben, amikor biztosan legalább egy műveletet végre kell hajtani (például felhasználói bemenet feldolgozása).

Ez a szerkezet megkönnyíti azoknak a feladatoknak a kezelését, ahol az első iteráció eredményei befolyásolják, hogy a továbbiakban ismételjük-e a műveleteket.

---

## for...in ciklus (objektumok esetén)

A **for...in** ciklust objektumok tulajdonságainak bejárására használjuk. Minden iteráció során a ciklusváltozó az objektum egy-egy kulcsát veszi fel.

**Példa:**

```javascript
const person = {
    name: "Anna",
    age: 30,
    city: "Budapest"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}
```

**Magyarázat:**

- **Objektum tulajdonságai:** Az `person` objektum tulajdonságait (kulcs-érték párok) szeretnénk feldolgozni.
- **Kulcsok iterálása:** A `for...in` ciklus minden egyes iterációban bejár egy tulajdonságot, ahol a `key` változó tartalmazza a tulajdonság nevét.
- **Értékek elérése:** Az aktuális tulajdonság értékét a `person[key]` segítségével érjük el.
- **Használat:** Ez a módszer egyszerű módja annak, hogy végigiteráljunk egy objektum minden tulajdonságán, például dinamikusan generált adatok feldolgozásához.

---

## for...of ciklus (tömbök és iterálható objektumok esetén)

A **for...of** ciklus kifejezetten iterálható objektumok, például tömbök, karakterláncok, vagy akár Map és Set típusú adatszerkezetek elemeinek feldolgozására készült.

**Példa:**

```javascript
const numbers = [10, 20, 30, 40, 50];

for (let num of numbers) {
    console.log(num);
}
```

**Magyarázat:**

- **Iterálható objektum:** A `numbers` tömb egy olyan adatstruktúra, amely iterálható, így a **for...of** ciklussal egyszerűen végig lehet menni az elemein.
- **Elemek közvetlen hozzáférése:** Minden iterációban a `num` változó közvetlenül az aktuális elemet tartalmazza, így nincs szükség index használatára.
- **Egyszerűség:** Ez a megoldás átlátható és egyszerű, különösen akkor, ha az elemek sorrendjének ismerete nem fontos, vagy ha csak az elemek értékére van szükségünk.

---

## Legfontosabb különbségek

A különböző ciklustípusok között több fontos különbség van, amelyeket érdemes figyelembe venni a megfelelő ciklus kiválasztásakor. Nézzük meg a legfontosabb eltéréseket!

---

#### **Ismétlések száma és előre meghatározottsága**
| Ciklus típusa  | Ismétlések száma előre ismert? |
|---------------|--------------------------------|
| **for**       | Igen, előre megadott számú iteráció |
| **while**     | Nem, a feltétel függvényében fut |
| **do...while**| Nem, de legalább egyszer végrehajtódik |
| **for...in**  | Nem, objektum tulajdonságainak száma határozza meg |
| **for...of**  | Nem, az iterálható elemek száma határozza meg |

- Ha pontosan tudjuk, hányszor kell futnia a ciklusnak, **for** ciklust érdemes használni.
- Ha nem tudjuk előre az ismétlések számát, de van egy adott feltétel, amit ellenőrizni kell, akkor a **while** ciklus jobb választás.
- Ha legalább egyszer mindenképpen végre kell hajtani a ciklust, akkor a **do...while** lehet megfelelő.

---

#### **Feltétel ellenőrzésének helye**
| Ciklus típusa  | Hol történik a feltétel ellenőrzése? |
|---------------|-------------------------------------|
| **for**       | A ciklus elején |
| **while**     | A ciklus elején |
| **do...while**| A ciklus végén |
| **for...in**  | Nincs közvetlen feltétel, az objektum tulajdonságai alapján fut |
| **for...of**  | Nincs közvetlen feltétel, az iterálható objektum elemei alapján fut |

- A **for** és **while** ciklusoknál a feltétel ellenőrzése a ciklus elején történik, így lehet, hogy egyáltalán nem fut le a ciklus.
- A **do...while** ciklusban a feltétel ellenőrzése a végén történik, így legalább egyszer mindig végrehajtódik.

---

#### **Használati esetek**
| Ciklus típusa  | Mikor érdemes használni? |
|---------------|--------------------------|
| **for**       | Amikor egy számlálóval előre ismert számú ismétlés kell |
| **while**     | Amikor egy feltétel teljesüléséig kell futnia |
| **do...while**| Amikor legalább egyszer végre kell hajtani, mielőtt ellenőriznénk a feltételt |
| **for...in**  | Amikor egy objektum tulajdonságain akarunk végigmenni |
| **for...of**  | Amikor egy tömb vagy iterálható objektum elemein akarunk végighaladni |

- **for** ciklus jó például, ha egy adott számú ismétlést akarunk végrehajtani (pl. egy számláló növelésével).
- **while** akkor jó, ha nem tudjuk pontosan, hányszor kell futnia, de van egy feltétel (pl. amíg egy érték el nem éri a kívánt állapotot).
- **do...while** hasznos lehet például egy felhasználói bemenet kérésénél, mert legalább egyszer ki kell kérdezni.
- **for...in** akkor hasznos, ha objektumok tulajdonságain akarunk végigmenni.
- **for...of** tömbök és egyéb iterálható elemek (pl. karakterláncok, Map, Set) esetén érdemes használni.

---

#### **Végtelen ciklus lehetősége**
| Ciklus típusa  | Könnyű végtelen ciklust létrehozni? |
|---------------|-------------------------------------|
| **for**       | Nem valószínű, ha jól van beállítva a léptetés |
| **while**     | Igen, ha a feltétel soha nem válik hamissá |
| **do...while**| Igen, ha a feltétel mindig igaz marad |
| **for...in**  | Nem, az objektum végessége miatt |
| **for...of**  | Nem, az iterálható objektum végessége miatt |

- A **while** és **do...while** ciklusoknál különösen figyelni kell arra, hogy a feltétel változzon, különben végtelen ciklus keletkezik.
- A **for** ciklus általában biztonságosabb, mert az inicializálás, feltétel és léptetés egy helyen szerepel.

---

#### **Hozzáférés az indexhez vagy értékhez**
| Ciklus típusa  | Hozzáférés az indexhez? | Hozzáférés az értékhez közvetlenül? |
|---------------|-------------------------|--------------------------------------|
| **for**       | Igen (`i`)               | Igen (`arr[i]`)                    |
| **while**     | Igen, ha külön változót használunk | Igen (`arr[i]`) |
| **do...while**| Igen, ha külön változót használunk | Igen (`arr[i]`) |
| **for...in**  | Igen (`key`, de ez az objektum tulajdonsága) | Igen (`obj[key]`) |
| **for...of**  | Nem                       | Igen (`value`)                      |

- **for** ciklusban az index (`i`) és az érték is könnyen elérhető.
- **for...in** esetében az index helyett az objektum kulcsaihoz férünk hozzá.
- **for...of** ciklus közvetlenül az értékeket adja vissza, így nem szükséges indexet használni.

---

#### **Összegzés**
1. **Ha előre ismert a ciklusok száma →** `for`
2. **Ha egy feltételig kell futnia →** `while`
3. **Ha legalább egyszer végre kell hajtani →** `do...while`
4. **Ha objektumokat kell bejárni →** `for...in`
5. **Ha tömböket vagy egyéb iterálható objektumokat kell bejárni →** `for...of`

Ha bármelyik típussal kapcsolatban részletesebb példát szeretnél, szólj, és tovább bontom! 🚀


## Gyakorlati feladatok

<details className="dropdown-task">

  <summary>
  <strong>For ciklus példa</strong>
  
  
  </summary>

```html
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>For ciklus példa</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: linear-gradient(to right, #2E8B57, #4682B4);
            font-family: Arial, sans-serif;
        }
        .container {
            background: white;
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
            text-align: center;
        }
        button {
            padding: 10px 20px;
            margin-top: 10px;
            border: none;
            background: #4682B4;
            color: white;
            font-size: 16px;
            cursor: pointer;
            border-radius: 6px;
        }
        button:hover {
            background: #2E8B57;
        }
        .output {
            margin-top: 10px;
            font-size: 18px;
        }
    </style>
</head>
<body>

    <div class="container">
        <h2>For ciklus példa</h2>
        <button onclick="futtatas()">Számok kiírása</button>
        <div class="output" id="output"></div>
    </div>

    <script>
        function futtatas() {
            let outputElem = document.getElementById("output");
            outputElem.textContent = ""; // Töröljük az előző tartalmat
            
        /*
        kimenet a gomb megnyomására:
        1 - Páratlan szám

        2 - Páros szám

        3 - Páratlan szám

        4 - Páros szám

        5 - Páratlan szám

        6 - Páros szám

        7 - Páratlan szám

        8 - Páros szám

        9 - Páratlan szám

        10 - Páros szám
        */


        }
    </script>

</body>
</html>
```

</details>

<details className="dropdown-task">

  <summary>
  <strong>While ciklus példa</strong>
  
  
  </summary>

```html
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>While ciklus példa</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: linear-gradient(to right, #4CAF50, #2196F3);
            font-family: Arial, sans-serif;
        }
        .container {
            background: white;
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
            text-align: center;
        }
        button {
            padding: 10px 20px;
            margin-top: 10px;
            border: none;
            background: #2196F3;
            color: white;
            font-size: 16px;
            cursor: pointer;
            border-radius: 6px;
        }
        button:hover {
            background: #4CAF50;
        }
        .output {
            margin-top: 10px;
            font-size: 18px;
            white-space: pre-line; /* hogy a textContent-nél is működjön a sortörés */
        }
    </style>
</head>
<body>

    <div class="container">
        <h2>While ciklus visszaszámlálás</h2>
        <button onclick="visszaszamlalas()">Indítás</button>
        <div class="output" id="output"></div>
    </div>

    <script>
        function visszaszamlalas() {
            let outputElem = document.getElementById("output");
            outputElem.textContent = ""; // Előző tartalom törlése
            
     


            
            /*
            kimenet: 
                10
                9 - Hárommal osztható
                8
                7
                6 - Hárommal osztható
                5
                4
                3 - Hárommal osztható
                2
                1
                */

        }
    </script>

</body>
</html>
```


</details>



<details className="dropdown-task">

  <summary>
  <strong>For...in ciklus példa</strong>
  
  
  </summary>

```html
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>For...in ciklus példa</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: linear-gradient(to right, #FF9800, #03A9F4);
            font-family: Arial, sans-serif;
        }
        .container {
            background: white;
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
            text-align: center;
        }
        button {
            padding: 10px 20px;
            margin-top: 10px;
            border: none;
            background: #03A9F4;
            color: white;
            font-size: 16px;
            cursor: pointer;
            border-radius: 6px;
        }
        button:hover {
            background: #FF9800;
        }
        .output {
            margin-top: 10px;
            font-size: 18px;
            white-space: pre-line; /* hogy a textContent-nél is működjön a sortörés */
        }
    </style>
</head>
<body>

    <div class="container">
        <h2>Autók listája</h2>
        <button onclick="autokListazasa()">Mutasd az autókat</button>
        <div class="output" id="output"></div>
    </div>

    <script>
        function autokListazasa() {
            let outputElem = document.getElementById("output");
            outputElem.textContent = ""; // Előző tartalom törlése
            
            let autok = {
                Tesla: "elektromos",
                BMW: "benzines",
                Nissan: "elektromos",
                Ford: "dízel",
                Toyota: "hibrid"
            };

      
        }
    </script>

</body>
</html>
```

</details>

<details className="dropdown-task">

  <summary>
  <strong>For...of ciklus példa</strong>
  
  
  </summary>

```html
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>For...of ciklus példa</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: linear-gradient(to right, #FFEB3B, #FF5722);
            font-family: Arial, sans-serif;
        }
        .container {
            background: white;
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
            text-align: center;
        }
        button {
            padding: 10px 20px;
            margin-top: 10px;
            border: none;
            background: #FF5722;
            color: white;
            font-size: 16px;
            cursor: pointer;
            border-radius: 6px;
        }
        button:hover {
            background: #FFEB3B;
            color: black;
        }
        .output {
            margin-top: 10px;
            font-size: 18px;
            white-space: pre-line; /* hogy a textContent-nél is működjön a sortörés */
        }
    </style>
</head>
<body>

    <div class="container">
        <h2>Bevásárlólista</h2>
        <button onclick="listatMutat()">Mutasd a listát</button>
        <div class="output" id="output"></div>
    </div>

    <script>
        function listatMutat() {
            let outputElem = document.getElementById("output");
            outputElem.textContent = ""; // Előző tartalom törlése
            
            let lista = [
                { nev: "Kenyér", tipus: "pékáru" },
                { nev: "Tej", tipus: "tejtermék" },
                { nev: "Alma", tipus: "gyümölcs" },
                { nev: "Sajt", tipus: "tejtermék" },
                { nev: "Csirkehús", tipus: "hús" }
            ];

                /*kimenet:
                Kenyér - pékáru
                Tej - tejtermék 🥛 (Laktózérzékenyeknek nem ajánlott!)
                Alma - gyümölcs
                Sajt - tejtermék 🥛 (Laktózérzékenyeknek nem ajánlott!)
                Csirkehús - hús
                */
        }
    </script>

</body>
</html>
```


</details>