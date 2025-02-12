
## Autós feladat instukció

**1**
1. Hozz létre egy "autok" nevű konstans változót, amely egy tömböt tartalmaz.

2. A tömbben négy objektum van, amelyek mindegyike egy autót reprezentál. Minden objektumnak három tulajdonsága van:

   - "marka": Az autó márkáját adja meg (szöveg, pl. "Ferrari").
   - "sebesseg": Az autó maximális sebességét adja meg (szám, pl. 350).
   - "szin": Az autó színét adja meg (szöveg, pl. "piros").

3. Az objektumok adatai a következők:

   - Első objektum:
       • marka: "Ferrari"
       • sebesseg: 350
       • szin: "piros"

   - Második objektum:
       • marka: "Lamborghini"
       • sebesseg: 340
       • szin: "sárga"

   - Harmadik objektum:
       • marka: "Bugatti"
       • sebesseg: 400
       • szin: "kék"

   - Negyedik objektum:
       • marka: "Tesla"
       • sebesseg: 250
       • szin: "fehér"


**2**

1. Hozz létre egy "valasztottSebesseg" nevű változót a `let` kulcsszóval.
2. A változó értékét a `prompt()` függvény segítségével állítod be. A `prompt()` megjelenít egy párbeszédablakot, amely a felhasználótól kér be adatot.
3. A megjelenő ablakban a következő üzenet látható: "Milyen sebességű autót szeretnél? (250-400)". Ez azt jelenti, hogy a felhasználónak arra kell választ adnia, hogy mekkora sebességű autót szeretne (az érték 250 és 400 között várható).
4. A felhasználó által beírt érték kerül elmentésre a "valasztottSebesseg" változóban, amit később a programban felhasználhatsz.


**3**


1. inicializáld újra a  **valasztottSebesseg** változót
2. Ebbe a változóba tárold a felhasználótól bekért értéket, amelyet korábban például a **prompt()** segítségével olvastál be.  
3. Alakítsd át a változóban tárolt értéket egész számmá a **parseInt()** függvény használatával, és mentsd vissza ugyanabba a változóba.

**4**

1. Hozz létre négy konstans változót a **const** kulcsszóval, melyek neve: **auto1**, **auto2**, **auto3**, és **auto4**.
2. Az értéküket úgy állítsd be, hogy az **autok** nevű tömbből sorban kinyered az első, második, harmadik és negyedik elemet.
3. Használd az úgynevezett array destructuring (tömb felbontás) technikát a változók deklarálása és értékadás megvalósításához.

**5**

1. hozz létre egy globális változót "kivalasztottAuto" néven

**6**


1. Hozz létre egy feltételes szerkezetet, amely a **valasztottSebesseg** változó értékét vizsgálja.
2. Ha a **valasztottSebesseg** értéke nagyobb vagy egyenlő, mint 380, akkor állítsd be a **kivalasztottAuto** változó értékét úgy, hogy az **auto3** legyen.
3. Ha az előző feltétel nem teljesül, de a **valasztottSebesseg** értéke legalább 330, akkor a **kivalasztottAuto** értékét állítsd be úgy, hogy az **auto2** legyen.
4. Ha az előző feltételek nem teljesülnek, de a **valasztottSebesseg** értéke legalább 300, akkor a **kivalasztottAuto** értékét állítsd be úgy, hogy az **auto1** legyen.
5. Egyéb esetben (ha egyik fenti feltétel sem teljesül), állítsd be a **kivalasztottAuto** értékét úgy, hogy az **auto4** legyen.


**7**

1. Azonosítsd be a HTML dokumentumban azt az elemet, amelynek azonosítója **"autoDoboz"**.
2. Módosítsd az így kiválasztott elem **innerText** tulajdonságát úgy, hogy megjelenítse a választott autó adatait.
3. A megjelenítendő szöveg formátuma legyen a következő:  
   **"Választott autó: [autó márka], Szín: [autó szín], Sebesség: [autó sebessége] km/h"**  
   ahol az **[autó márka]**, **[autó szín]** és **[autó sebessége]** helyére a **kivalasztottAuto** objektum **marka**, **szin** és **sebesseg** tulajdonságait kell behelyettesíteni.
4. Használj template literal-t (backtick karaktereket) az értékek beillesztéséhez.

