---
title: JSON felépítése és szintaktikai szabályok
---

## JSON Objektumok

A JSON objektumok a strukturált adatreprezentáció központi elemei, melyek kulcs-érték párokat tartalmaznak. Ezek a kulcsok mindig szöveges (string) típusúak, és a hozzájuk tartozó értékek lehetnek számok, logikai értékek, stringek, tömbök, objektumok vagy akár `null` is. A JSON objektumok tipikusan akkor hasznosak, ha összetett, több szinten egymásba ágyazott adatokat kell áttekinthetően és könnyen feldolgozható módon tárolni. A JSON objektumokkal valósítható meg például egy felhasználói profil, egy termék adatai, vagy bármilyen olyan információs struktúra, ami egymáshoz logikailag kapcsolódó kulcs-érték párokat használ. Érdemes figyelni arra, hogy az objektumok megkönnyítik a rugalmas és bővíthető adatkezelést, ráadásul könnyen illeszthetők különböző programozási nyelvekbe és API-kba is, így biztosítva az adatok platformfüggetlen kezelését.

**Főbb szabályok (Objektumok)**

- Az objektumokat **kapcsos zárójelek** között (`{ }`) definiáljuk.  
- Minden kulcsot **idézőjelek** között (`"kulcs"`) kell megadni.  
- A kulcs és az érték között **kettőspont** (`:`) van.  
- A kulcs-érték párok egymástól **vesszővel** (` , `) vannak elválasztva, de az utolsó pár után nem lehet vessző.  
- Nincsenek kommentek JSON-ban, és nem lehet az objektum szerkezetét megszakító plusz karakter.  


```json
{
  "nev": "Kovács Anna",
  "kor": 28
}
```
 Két kulcs-érték pár van: a `"nev"` kulcshoz `"Kovács Anna"` string tartozik, a `"kor"` kulcshoz pedig a `28` számérték.  


```json
{
  "felhasznalo": {
    "felhnev": "annakovacs",
    "email": "anna@example.com"
  }
}
```
 Az objektumunk belsejében egy másik objektum található, amely a felhasználó adatait tárolja, elkülönítve a külső objektumtól.  


```json
{
  "termek": "Laptop",
  "ar": 249999,
  "raktaron": true
}
```
 A `"termek"` kulcs egy string, az `"ar"` kulcs számértéket tárol, a `"raktaron"` pedig logikai értéket (`true`).  



## **JSON Tömbök**  

A tömbök tökéletesen alkalmasak arra, hogy egy listát vagy sorozatot rendezetten és áttekinthetően tároljunk. A JSON szabványban a tömböket szögletes zárójelek (`[ ]`) segítségével hozzuk létre, és a benne szereplő elemek bármilyen JSON-kompatibilis adattípust képviselhetnek, legyen szó számokról, stringekről vagy akár újabb objektumokról. A tömbök használata megkönnyíti az ismétlődő vagy felsorolásszerű adatok kezelését, például egy bevásárlólista, felhasználók névsora, különböző paraméterek, vagy éppen több elemű beágyazott struktúra esetén. Az elemek sorrendje a tömbben rögzített, így egyszerre biztosítjuk a konzisztens feldolgozást és a logikus szerkezetet, ami számos alkalmazásban kulcsfontosságú lehet.

**Főbb szabályok (Tömbök)**
- A tömböket **szögletes zárójelek** között (`[ ]`) definiáljuk.  
- Az elemeket **vesszővel** (` , `) választjuk el egymástól.  
- A tömb utolsó eleme után **nem** teszünk vesszőt.  
- A tömb elemei lehetnek stringek, számok, logikai értékek, objektumok vagy akár további tömbök.  
- A tömbökben a sorba rendezés fontos lehet, mivel a sorrend megőrzésre kerül, amikor feldolgozzuk az adatokat.  

Gyakorlati példák (Tömbök)  


```json
[
  "alma",
  "banán",
  "körte"
]
```
 Ez egy egyszerű tömb, amely három darab string értéket tartalmaz.  



```json
[1, 2, 3, 4, 5]
```
 Ez egy számtömb, amely az 1-től 5-ig terjedő egész számokat tartalmazza.  



```json
[
  {
    "nev": "Fekete Gábor",
    "email": "gabor@example.com"
  },
  {
    "nev": "Szabó Enikő",
    "email": "eniko@example.com"
  }
]
```
 Ez egy tömb két objektummal. Mindkét objektum egy-egy személy adatait őrzi.  


## JSON Adattípusok

### **String (szöveg)**
 
A JSON-ban a string, vagyis szöveges adat, az egyik leggyakrabban használt adattípus. Ide kerül minden olyan információ, amit írott formában, idézőjelek közé zárva szeretnénk tárolni. Ide tartozhat egy személy neve, egy város megnevezése, egy üzenet, vagy bármilyen más nyelvi adat. A stringek kulcsfontosságúak, hiszen sok esetben a többi mező is szöveges formában jelenik meg, különösen ha nem numerikus vagy logikai értékről van szó. A JSON megköveteli, hogy a stringeket mindig idézőjelek zárják körbe, így a szöveg pontosan körülhatárolt és könnyen feldolgozható a különféle programozási nyelvek számára is.


- **Kötelező idézőjelek**: A stringeket dupla idézőjelek közé kell tenni, pl. `"alma"`.  
- **Nincs külön jelölés** a speciális karakterekre, de néhány (pl. az idézőjel maga, a backslash) escape-elést igényelhet: `\"` vagy `\\`.  
- **Csak Unicode karakterek** engedélyezettek, ami lehetővé teszi a nem latin betűs szöveg vagy ékezetes karakterek használatát is.

**Gyakorlati példák**


```json
{
  "nev": "Kiss Zoltán"
}
```
 A `"nev"` kulcshoz tartozó érték egy `"Kiss Zoltán"` nevű string.




```json
{
  "leiras": "Ez egy bemutató szöveg, amely több szót tartalmaz."
}
```
 A `"leiras"` értéke egy hosszabb szöveg, mely információkat hordoz.



### **Number (szám)**

A JSON-ban a szám formátum rendkívül sokoldalú, mivel lehet egész szám, tizedes törtszám, sőt akár negatív érték is. Számokkal ábrázolhatjuk a kor, egy termék ára, egy mennyiségi mutató vagy bármely más numerikus információt. A JSON nem tesz különbséget az egész és a lebegőpontos számok között, azonban a feldolgozó program nyelve vagy a mögöttes adatbázis már megszabhatja, miként értelmezi ezeket. Számok segítségével könnyen elvégezhetők összeadási, kivonási, szorzási vagy egyéb műveletek, ezért elengedhetetlenek azokban a rendszerekben, ahol statisztikai, pénzügyi vagy bármilyen mérhető adatot kezelünk.


- **Nincsenek idézőjelek**: A számokat idézőjelek nélkül kell megadni, pl. `42` vagy `3.14`.  
- **Megengedett az előjel**: Negatív számok esetén `-5` formátumot alkalmazunk.  
- **Nincs külön jelölés** a `+` előjelre, illetve a nagyon nagy számokat a programozási nyelv kezelheti eltérően (pl. 64 bites korlát).

**Gyakorlati példák (Number)**

**Példa 1:**  
```json
{
  "ar": 1500
}
```
 Egyszerű egész szám, pl. egy termék ára.



**Példa 2:**  
```json
{
  "homerseklet": -3.7
}
```
 Egy negatív tizedes törtszám, amely egy mért hőmérsékletet jelöl.



### **Boolean (logikai érték)**


A booleán típus (boolean) kifejezetten hasznos, ha valamilyen állapotot kell jelölni, például egy beállítást, ami be van-e kapcsolva, vagy egy folyamat lezárult-e. Ilyen érték lehet például `true` (igaz) vagy `false` (hamis). A logikai értékek a feltételes kiértékelések és döntési mechanizmusok alapkövei a legtöbb programozási nyelvben. JSON környezetben gyakran használják különböző folyamatjelzők, állapotjelzők vagy más bináris (kétértékű) információk közlésére. Mivel egyszerű true/false értékkel dolgozik, sok helyen tehermentesíti a kódot a bonyolultabb string-összehasonlításoktól, és egyértelműen jelöli, hogy egy adott paraméter be vagy ki van kapcsolva.


- **Kisbetűvel írva**: `true` vagy `false`.  
- **Nincsenek idézőjelek**: A boolean értékeket nem tesszük idézőjelek közé.  
- **Csak kétféle érték**: `true` és `false`, nincs más érvényes booleán típus JSON-ban.

**Gyakorlati példák (Boolean)**

**Példa 1:**  
```json
{
  "aktiv": true
}
```
 Egy felhasználói fiók vagy szolgáltatás aktív állapotát jelöli.



**Példa 2:**  
```json
{
  "engedelyezett": false
}
```
 Egy funkció vagy jogosultság le van tiltva (hamis).

### **Object (objektum)**

A JSON objektum rendkívül fontos eszköz arra, hogy adatainkat strukturált és áttekinthető módon tároljuk. Az objektum kulcs-érték párokat tartalmaz, ahol minden kulcs egy string, és az érték lehet bármilyen JSON adattípus, például további objektum, tömb, szám, string vagy boolean. Ezzel a megoldással egyszerűen létre tudunk hozni többszintű szerkezeteket, mint például felhasználói profilokat (név, kor, cím, beállítások), vagy különböző konfigurációs beállításokat. Az objektumok logikus csoportosítást tesznek lehetővé, amellyel szorosabban összetartozó adatokat egyetlen egységként kezelhetünk.


- **Kapcsos zárójelek**: Az objektumot mindig `{ }` határolja.  
- **Kulcsok idézőjelek között**: Minden kulcs `"kulcs"` formátumú.  
- **Vesszők elválasztása**: Az egyes kulcs-érték párokat vessző választja el, de az utolsó pár után nincs vessző.

**Gyakorlati példák (Object)**

**Példa 1:**  
```json
{
  "nev": "Molnár Béla",
  "kor": 45
}
```
 Két kulcs-érték pár, ahol az első string, a második szám.

---

**Példa 2:**  
```json
{
  "felhasznalo": {
    "felhnev": "belamolnar",
    "email": "bela@example.com"
  }
}
```
 Egy beágyazott objektum, amely a felhasználó adatait tartalmazza.



### **Array (tömb)**


A tömböket akkor használjuk, ha egy felsorolás vagy lista jellegű adatszerkezetet szeretnénk létrehozni, például több elem gyűjteményét. A JSON szabvány lehetővé teszi, hogy a tömbökben teljesen vegyes típusú elemek szerepeljenek, így akár számok, stringek, objektumok és további tömbök is békésen megférnek egymás mellett. A tömb segítségével könnyen kezelhetjük például egy bevásárlólista elemeit, egy felhasználók névsorát vagy akár komplexebb adatokat, például többdimenziós struktúrákat. A feldolgozás során figyelembe kell venni a tömbök sorrendjét, mivel a JSON minden elem pontos pozícióját ismeri és megőrzi.


- **Szögletes zárójelek**: A tömbök `[]` karakterek között helyezkednek el.  
- **Elemszétválasztás**: Az elemeket vesszővel választjuk el.  
- **Vegyes adattípusok**: A tömb tartalmazhat számot, stringet, objektumot, boolean-t, sőt további tömböt is.

**Gyakorlati példák (Array)**

**Példa 1:**  
```json
[
  "alma",
  "körte",
  "barack"
]
```
 Egy egyszerű gyümölcslista, mely kizárólag stringeket tartalmaz.



**Példa 2:**  
```json
{
  "felhasznalok": [
    { "nev": "Tóth Ágnes" },
    { "nev": "Bálint András" }
  ]
}
```
 A `"felhasznalok"` kulcs egy tömbre hivatkozik, amely objektumokból áll.

### **Null**


A JSON-ban a `null` speciális érték arra az esetre, ha valamilyen mezőnek nincs elérhető, értelmezhető adatértéke. Ez lehet például azért, mert még nem lett kitöltve, mert adatvesztés történt, vagy egyszerűen nem releváns az adott kontextusban. A `null` így egy helyfoglaló megoldás, ami mutatja, hogy a mező létezik, csak épp nincs meghatározott tartalma. Sok programozási nyelvben szintén létezik valamilyen null-szerű koncepció, így könnyen illeszkedik a JSON a hétköznapi fejlesztési feladatokhoz. Fontos különbséget tenni aközött, hogy egy kulcs egyáltalán nem létezik, vagy létezik, de `null` az értéke – a feldolgozó kód számára ez különböző jelentéssel bírhat.


- **Kisbetűs**: A `null` pontosan így néz ki, nincsenek idézőjelek, és nem nagybetűs.  
- **Jelentése**: Üres vagy nem definiált érték.  
- **Megkülönböztetés**: Más, mint a kulcs hiánya. Ha a kulcs jelen van, de `null` az értéke, az információt hordoz arról, hogy a mező szándékosan üres.

**Gyakorlati példák (Null)**

**Példa 1:**  
```json
{
  "megjegyzes": null
}
```
 A `"megjegyzes"` kulcsnak nincs konkrét tartalma, de a mező maga megvan határozva.

**Példa 2:**  
```json
{
  "felhasznalo": "Horváth László",
  "kosar": null
}
```
 A felhasználó létezik, de lehet, hogy nincs semmi a kosarában, ezért a `"kosar"` értéke `null`.



**Összefoglalás**

- A **JSON** egy szöveges formátum adatcsere céljára, nagyon népszerű főleg webes környezetben.
- A JSON-ban **minden** kulcsot dupla idézőjelbe kell rakni.
- Az alapvető adattípusok: string, number, boolean, null, object, array.
- Az objektumok kapcsos zárójelek között kulcs-érték párok sorozatából állnak.
- A tömbök szögletes zárójelek között elemek listáját tartalmazzák, vesszővel elválasztva.
- Fontos, hogy **nincsenek** kommentek, és **nincs** vessző az utolsó elem után.
- A stringekben a speciális karaktereket backslash-sel kell escape-elni (\n, \t, \u stb.).
- Nem használhatunk szabálytalan számformátumokat (hexadecimális, fölösleges nullák, pluszjel, stb.).
- Mindezen szabályoknak megfelelve könnyen emberileg is olvasható, gép által feldolgozható adatstruktúrát kapunk.

## Mit szabad és nem szabad használni JSON-ban?


**String (Szöveg)**
- **A szöveges értékeket mindig idézőjelek ("") közé kell tenni.**
- **Csak dupla idézőjelek használhatók!** (nincs `'single quotes'` JSON-ban)

**✅ Helyes JSON példa:**
```js
{
  "name": "John Doe",
  "city": "Budapest",
  "message": "Hello, world!"
}
```

 **❌Hibás JSON példa:**
```js
{
  "name": 'John Doe'  // ❌ Nem engedélyezett, mert csak dupla idézőjel ("") használható
}
```

**Number (Szám)**
- **Támogatja az egész számokat (integer) és a tizedes törteket (float).**
- **Nem kell idézőjelekbe tenni!**
- **Nem támogatja az `Infinity` és `NaN` értékeket.**

**✅ Helyes JSON példa:**
```js
{
  "age": 30,
  "height": 1.75,
  "score": -15.2
}
```

❌ **Hibás JSON példa:**
```js
{
  "age": NaN,         // ❌ Nem engedélyezett
  "height": Infinity  // ❌ Nem engedélyezett
}
```

**Boolean (Logikai érték)**
- **Csak `true` vagy `false` lehet.**
- **Nincs idézőjel!**

**✅ Helyes JSON példa:**
```json
{
  "isAdmin": true,
  "isVerified": false
}
```

❌ **Hibás JSON példa:**
```json
{
  "isAdmin": "true"  // ❌ Hibás, mert a boolean értékeket nem kell idézőjelekbe tenni!
}
```


**Null érték**
- **A `null` azt jelzi, hogy egy érték hiányzik vagy nincs meghatározva.**
- **Nincs idézőjel!**

**✅ Helyes JSON példa:**
```json
{
  "email": null
}
```

❌ **Hibás JSON példa:**
```json
{
  "email": "null"  // ❌ Hibás, mert a null nem string!
}
```


**Object (Objektum – kulcs-érték párok)**
- **Egy objektum `{}` kapcsos zárójelek közé kerül.**
- **A kulcsok mindig dupla idézőjelekben vannak!**
- **Az értékek bármilyen JSON-típus lehetnek.**

**✅Helyes JSON példa:**
```json
{
  "user": {
    "name": "John Doe",
    "age": 30,
    "isAdmin": false
  }
}
```

 **❌Hibás JSON példa:**
```json
{
  user: {           // ❌ Hibás, mert a kulcsokat mindig idézőjelbe kell tenni!
    name: "John"
  }
}
```


**Array (Tömb)**
- **A tömbök `[]` szögletes zárójelek között vannak.**
- **Tartalmazhatnak más JSON értékeket (string, number, object, boolean, null).**

**✅Helyes JSON példa:**
```json
{
  "fruits": ["apple", "banana", "cherry"],
  "numbers": [1, 2, 3, 4.5],
  "users": [
    { "id": 1, "name": "John" },
    { "id": 2, "name": "Jane" }
  ]
}
```

 **❌Hibás JSON példa:**
```json
{
  "fruits": ["apple", banana, "cherry"]  // ❌ Hibás, mert a tömbben minden stringet idézőjelbe kell tenni!
}
```


**❌ Példák a tiltott típusokra és helyes alternatívák**

**Függvények NEM támogatottak**

**❌ Hibás JSON:**
```json
{
  "sayHello": function() { return "Hello"; }  // ❌ Nem támogatott!
}
```
**✅ Helyes megoldás (stringként tárolás, majd kiértékelés futásidőben)**:
```json
{
  "sayHello": "Hello, world!"
}
```

**Dátumokat nem tud közvetlenül tárolni**
**❌ Hibás JSON:**
```json
{
  "birthday": new Date("1995-12-17")  // ❌ Nem támogatott!
}
```
**✅ Helyes megoldás (stringként tárolás ISO formátumban):**
```json
{
  "birthday": "1995-12-17T00:00:00Z"
}
```
**Az ISO 8601 formátum (`YYYY-MM-DDTHH:MM:SSZ`) univerzálisan értelmezhető.**


**Undefined értékek nem megengedettek**

**❌ Hibás JSON:**
```json
{
  "nickname": undefined  // ❌ Nem támogatott!
}
```
**✅ Helyes megoldás (`null` használata):**
```json
{
  "nickname": null
}
```



✅ **JSON engedélyezett adattípusok**:
**String** (`"valami"`)
**Number** (`10`, `3.14`)
**Boolean** (`true`, `false`)
**Null** (`null`)
**Object** (`{ "kulcs": "érték" }`)
**Array** (`[1, 2, 3]`)

❌ **JSON-ban NEM engedélyezett**:
**Függvények (`function() {...}`)**
**Dátum (`new Date()`)**
**Undefined (`undefined`)**
**Infinity és NaN**
**Hivatkozások (`Symbol`)**


**❌ Milyen típusok NEM engedélyezettek JSON-ban?**
| **Típus** | **Engedélyezett?** | **Miért nem?** |
|-----------|-----------------|----------------|
| **Függvény (`function`)** | ❌ Nem | A JSON csak adatokat tárol, nem kódot |
| **Dátum (`Date`)** | ❌ Nem | JSON nem támogatja a dátumokat |
| **Undefined (`undefined`)** | ❌ Nem | Nincs értelmezett JSON megfelelője |
| **Infinity, NaN** | ❌ Nem | Ezek speciális JavaScript értékek |
| **Hivatkozások (`Symbol`)** | ❌ Nem | Nem konvertálható szöveggé |




## Különbség a js és a json objektum és tömb között 

- **A JSON egy szöveges adatformátum, amelyet adatátvitelre használunk, például fájlokban vagy API-kban.**
- **A JavaScript objektum és tömb a programon belül lévő adatszerkezet, amelyet azonnal felhasználhatunk.**
- **Ha egy JSON-t akarunk használni a kódban, először objektummá kell alakítanunk JSON.parse()-zal.**
- **A JSON egy adatcserére szolgáló formátum, de önmagában nem használható a programban, míg egy tömb vagy objektum közvetlenül használható.**  


 **JSON vs Objektum vs Tömb – Mi a különbség?**

| **Típus**  | **Definíció** | **Hogyan néz ki?** | **Mikor használjuk?** |
|------------|--------------|---------------------|----------------------|
| **JSON** *(JavaScript Object Notation)* | Egy adatcserére szolgáló szöveges formátum, amelyet objektumok és tömbök szerkezetére építettek | `"{ "id": 1, "name": "John" }"` | Ha adatokat küldünk vagy fogadunk (pl. API-k, fájlok, adatbázisok) |
| **Objektum** *(JavaScript object)* | Egy adattároló szerkezet, amely kulcs-érték párokat tartalmaz | `{ id: 1, name: "John" }` | Ha változókat és metódusokat akarunk tárolni egy programban |
| **Tömb** *(Array)* | Egy lista, amely elemeket tárol meghatározott sorrendben | `[1, 2, 3]` vagy `[ { id: 1 }, { id: 2 } ]` | Ha egy sorozatot kell tárolni (pl. több elem egy listában) |



 **JSON és JavaScript objektum – mi a különbség?**
 ✅ **JSON**: 
- **Szöveg** *(string formátumú adat)*
- Minden kulcs **idézőjelekben ("") kell legyen** 
- **Nem tartalmazhat függvényeket**
- **Használat előtt át kell alakítani JavaScript objektummá**

```json
{
  "id": 1,
  "name": "John Doe",
  "age": 25
}
```

 **JavaScript objektum**:
- **Valós adatstruktúra a programban**
- A kulcsokat nem kell idézőjelbe tenni
- **Lehetnek benne metódusok (függvények) is**
- **Nem kell átalakítani**, azonnal használható

```js
const student = {
  id: 1,
  name: "John Doe",
  age: 25,
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};
```
**JSON egy adatformátum, míg az objektum egy tényleges programozási struktúra.**  
**Ha JSON-t használunk, azt először objektummá kell alakítani:**
```js
const jsonString = '{ "id": 1, "name": "John Doe" }';
const obj = JSON.parse(jsonString);
console.log(obj.name); // "John Doe"
```


 **JSON és Tömb – mi a különbség?**
 ✅ **JSON** lehet tömb is:
A JSON-ben tárolhatunk **tömböt** is, amely objektumokat tartalmaz:
```json
[
  { "id": 1, "name": "John" },
  { "id": 2, "name": "Jane" }
]
```
De ez **még mindig csak egy szöveg**, amit **objektummá kell alakítani**:
```js
const jsonString = '[{"id":1,"name":"John"},{"id":2,"name":"Jane"}]';
const students = JSON.parse(jsonString);
console.log(students[0].name); // "John"
```

 ✅ **Tömb normál JavaScript-ben**:
- Azonnal használható **listaként** (nem kell átalakítani)
- Tartalmazhat objektumokat, számokat, szövegeket, vagy akár vegyes adatokat

```js
const students = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" }
];

console.log(students[1].name); // "Jane"
```

<details className="dropdown-task">

  <summary>
  <strong>Miért kell JSON-t használni? Miért nem tudunk objektumokat és tömböket közvetlenül adatcserére használni?</strong>
  
  
  </summary>



 **Az objektumok és tömbök problémája az adatcserében**
A JavaScript objektumok és tömbök **programkód-specifikus struktúrák**, amelyeket **nem lehet csak úgy elküldeni más rendszereknek vagy tárolni fájlként**.

- **Ezek nem szöveges formátumok**, hanem memóriában tárolt adatszerkezetek.  
- **Más programozási nyelvek nem biztos, hogy értik a JavaScript objektumokat**.  
- **Ezeket nem lehet könnyen továbbítani az interneten keresztül (például egy szervernek)**.  
- **Egy fájlban vagy adatbázisban nem lehet natív JavaScript objektumokat tárolni**, mert az nem egy univerzális formátum.


 **Hogyan működik az adatcsere a gyakorlatban?**
Ha egy **JavaScript objektumot vagy tömböt el akarunk küldeni egy másik számítógépre, szerverre vagy más programnyelvre, akkor azt szöveggé kell alakítani**. Ezért használunk **JSON-t**!


 **Mi történik, ha elküldünk egy objektumot?**
Tegyük fel, hogy van egy ilyen **JavaScript objektumunk**:
```js
const user = {
  name: "John Doe",
  age: 30,
  isAdmin: true
};
```
Ha ezt közvetlenül akarod elküldeni egy szervernek vagy elmenteni egy fájlba, az nem működik, mert ez **memóriában lévő adatszerkezet**.  

**Hogyan alakítjuk át küldhető formátumra?**  
**👉 JSON-t használunk!**
```js
const jsonString = JSON.stringify(user);
console.log(jsonString);
// Kiírás: '{"name":"John Doe","age":30,"isAdmin":true}'
```
✅ Most ez egy szöveg, amit **minden rendszer megért**!  

Ha egy másik számítógépen vissza akarjuk alakítani objektummá:
```js
const userObject = JSON.parse(jsonString);
console.log(userObject.name); // "John Doe"
```



 **🆚 JSON vs. Objektum adatcserében**
| **Típus** | **Lehet fájlba menteni?** | **Átküldhető az interneten?** | **Más programnyelvek megértik?** |
|-----------|----------------|-----------------|--------------------|
| **JavaScript Objektum** | ❌ Nem | ❌ Nem | ❌ Nem |
| **JSON** | ✅ Igen | ✅ Igen | ✅ Igen |



 **🎯 Példa: Miért nem használhatunk objektumot az adatcserére?**
Képzeld el, hogy egy böngészőből el akarsz küldeni adatokat egy szervernek.  
Ha ezt így próbálod megtenni **(közvetlenül objektummal)**:
```js
fetch("https://example.com/api", {
  method: "POST",
  body: { name: "John Doe", age: 30 } // ❌ Nem működik!
});
```
A szerver **nem fogja érteni**, mert a HTTP-kapcsolat csak **szöveget** tud küldeni.

**Helyette JSON-t kell használni:**
```js
fetch("https://example.com/api", {
  method: "POST",
  body: JSON.stringify({ name: "John Doe", age: 30 }),
  headers: { "Content-Type": "application/json" }
});
```
✅ **Most a szerver érti, mert JSON-t küldtünk!**  



 **Miért nem tudunk tömböt adatcserére használni?**
A tömb sem küldhető közvetlenül, mert az is egy **memóriában lévő adatszerkezet**, amit szintén **szöveggé kell alakítani**.

Példa:
```js
const numbers = [1, 2, 3, 4, 5];

fetch("https://example.com/api", {
  method: "POST",
  body: numbers // ❌ Nem működik!
});
```
**Megoldás:**
```js
fetch("https://example.com/api", {
  method: "POST",
  body: JSON.stringify(numbers),
  headers: { "Content-Type": "application/json" }
});
```
✅ **Most a szerver JSON formátumban kapja meg az adatokat**.


- **A JSON egy szöveges formátum**, amelyet minden rendszer megért.  
- **A JSON használható fájlokban, adatbázisokban, API-kban**, míg egy objektum vagy tömb csak a memóriában létezik.  
- **A JSON kompatibilis más programnyelvekkel is**, például Python, Java, PHP stb.  
- **A JSON az interneten átküldhető**, míg egy JavaScript objektum nem.  
- **A JSON-t könnyű JavaScript objektummá alakítani (`JSON.parse()`), és vissza (`JSON.stringify()`).**  

</details>






















