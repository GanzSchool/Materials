---
title: Függvények
---

# A JavaScript függvények

A JavaScript nyelv egyik legfontosabb alapeleme a **függvény**. A függvény egy névvel ellátott műveletsor, amely meghatározott bemenetek alapján hajt végre utasításokat, és – ha szükséges – visszatér egy eredménnyel. A függvények alkalmazása segít elkerülni az ismétlődő kódokat, elősegíti a programok szerkezetének tisztább kialakítását, és megkönnyíti azok karbantartását, újrafelhasználását.

A függvényt elképzelhetjük úgy, mint egy saját nevű, újrahasználható „utasításcsomagot”, amely bármikor végrehajtható a program során, akár többször is. Ez lehetővé teszi, hogy egy-egy logikai egységet elkülönítsünk, és azt igény szerint meghívjuk, ahelyett hogy ugyanazt a kódrészt többször leírnánk.

A JavaScript többféle szintaktikai formát biztosít a függvények létrehozására, különböző célokra és helyzetekre optimalizálva:

- **Hagyományos függvénydeklaráció** (`function` kulcsszóval)
- **Függvénykifejezés** (Function Expression – változóba rendelt függvény)
- **Nyílfüggvény** (Arrow Function – modern, tömörebb szintaxis)
- **Aszinkron függvény** (Async Function – időigényes műveletekhez, pl. adatlekérés)

Ezek a típusok több szempontból is eltérhetnek egymástól, például a `this` kulcsszó kezelésében, a hoisting viselkedésben, valamint abban, hogy milyen kontextusban használhatók.



<details className="dropdown-task">

  <summary>
  <strong></strong>
  
   ## Miért használunk függvényeket?
  </summary>

    
Miért is kell egyáltalán függvényeket használni JavaScriptben (vagy bármilyen programozási nyelvben)?  
Röviden: mert strukturáltabb, rugalmasabb, újrahasználhatóbb és olvashatóbb kódot eredményeznek.

Nézzük meg részletesebben:

**Újrahasználhatóság (reusability)**

Ha egy kódrészletet többször szeretnél futtatni, nem kell mindig újra beírnod. Elég egyszer megírni egy függvényt, és később csak meghívni.

#### Példa:
```javascript
function koszont(nev) {
    console.log(`Szia, ${nev}!`);
}

koszont("Anna");
koszont("Béla");
```

➡️ Ha nem lenne függvény, kétszer kellene ugyanazt a kódot bemásolni.

---

**Kód tisztasága és olvashatóság (clean code)**

A függvények segítenek a nagy programot **kisebb, jól elkülöníthető részekre bontani**. Így a kód könnyebben olvasható, tesztelhető, karbantartható.

#### Példa:
```javascript
function kiszamolSzamla(ar, afa) {
    return ar * (1 + afa);
}

let vegosszeg = kiszamolSzamla(1000, 0.27); // 1270
```

➡️ A függvény neve már önmagában elárulja, mit csinál a kód. Aki olvassa, nem kell belemerüljön a részletekbe, csak látja: ez kiszámolja a számla végösszegét.

---

**Kódismétlés elkerülése (DRY: Don't Repeat Yourself)**

A függvényekkel könnyű elkerülni a "copy-paste kódokat".  
Ha egyszer változtatni kell a logikán, csak egy helyen kell módosítani, nem száz másolaton.

---

**Absztrakció és logikai csoportosítás**

A függvényekkel **elrejthetjük az összetett részleteket**, és csak a művelet céljára koncentrálhatunk.

#### Példa:
```javascript
function atlagSzamitas(szamok) {
    let osszeg = szamok.reduce((a, b) => a + b, 0);
    return osszeg / szamok.length;
}
```

➡️ Aki használja, nem kell tudja, hogy hogyan működik a `reduce`, csak azt, hogy ez kiszámítja az átlagot.

---

**Paraméterezhetőség: változó bemeneti értékekkel működés**

Függvényeket változókkal lehet paraméterezni, így **különböző bemeneti adatokkal** is működnek.

```javascript
function osszead(a, b) {
    return a + b;
}

console.log(osszead(3, 4));  // 7
console.log(osszead(10, 25)); // 35
```


**Komplex műveletek lépésenkénti felépítése**

Komplex programokat **könnyebb szétbontani kisebb logikai lépésekre**, ahol minden lépés egy függvény.

Példa egy regisztrációs folyamatra:
```javascript
function ellenorizInput() { ... }
function validalEmail() { ... }
function mentesAdatbazisba() { ... }
function visszajelzesFelhasznalonak() { ... }
```

---

**Egyszerűbb tesztelés, hibakeresés**

Függvényeket **önállóan is lehet tesztelni**. Nem kell az egész programot futtatni, elég csak azt a kis részt, amit vizsgálunk.

---

**Funkcionális szemlélet támogatása (pl. callback-ek, map, filter)**

JavaScript lehetővé teszi, hogy függvényeket **adatként kezeljünk**, átadjunk, visszaadjunk – ehhez elengedhetetlen, hogy tudjunk és merjünk függvényekkel dolgozni.



| Előny                      | Mit jelent? |
|---------------------------|-------------|
| Újrahasználhatóság        | Ugyanaz a logika több helyen |
| Kód tisztasága            | Átláthatóbb, strukturáltabb |
| Kódismétlés elkerülése    | Egy helyen kell módosítani |
| Paraméterezhetőség        | Bemenettől függő működés |
| Egyszerű tesztelhetőség   | Külön is vizsgálhatóak |
| Aszinkron működés kezelése| pl. események, várakozás |
| Logikai csoportosítás     | Moduláris felépítésű program |




</details>


## Különböző függvény típusok és működésük



### Általános függvények

```javascript
function fuggvenyNeve(parameter1, parameter2, ...) {
  // végrehajtandó utasítások
  return kifejezes;
}
```

#### Elemei
- `function`: ezzel kezdődik minden függvény létrehozása.
- `fuggvenyNeve`: ez a név alapján tudjuk később meghívni a függvényt.
- `parameter1, parameter2, ...`: a zárójelekben szereplő nevek a bemeneti adatok helyei.
- `{ ... }`: a kapcsos zárójelpár közé kerül minden utasítás, amit a függvény végrehajt.
- `return`: ezzel adunk vissza egy eredményt, ha szükséges.

#### Hogyan működik?
- A függvényt először meg kell írni – ez a definíció.
- Ezután valahol meg kell **hívni**, hogy ténylegesen lefusson:

```javascript
fuggvenyNeve();
```

- Ha adatokat is vár, ezeket zárójelben kell átadni:

```javascript
fuggvenyNeve(ertek1, ertek2);
```

- Ha `return` van benne, az eredmény egy változóba menthető vagy egyből felhasználható:

```javascript
let eredmeny = fuggvenyNeve(5, 7);
console.log(fuggvenyNeve(3, 4));
```


#### Függvény paraméter és visszatérési érték nélkül

```javascript
function udvozles() {
  console.log("Szép napot kívánok!");
}

udvozles();
```

#### Magyarázat
- A `udvozles` függvény nem kap bemenetet és nem ad vissza értéket.
- Csak végrehajt egy kiírást, amikor meghívjuk.
- Ha nem hívjuk meg (`udvozles()`), akkor nem történik semmi.
- Többször is meghívhatjuk:

```javascript
udvozles();
udvozles();
```


#### Függvény bemeneti paraméterrel

```javascript
function udvozletNevSzerint(nev) {
  console.log("Szia, " + nev + "!");
}

udvozletNevSzerint("Anna");
```

#### Magyarázat
- A függvény meghívásakor átadott érték ("Anna") bekerül a `nev` változóba.
- A `console.log()` ennek megfelelően írja ki a szöveget.
- Helyettesíthetünk változót is:

```javascript
let felhasznalo = "Zoltán";
udvozletNevSzerint(felhasznalo);
```

- Több különböző névvel is meghívhatjuk:

```javascript
let nev1 = "Béla";
let nev2 = "Kata";
udvozletNevSzerint(nev1);
udvozletNevSzerint(nev2);
```



#### Függvény visszatérési értékkel

```javascript
function osszead(a, b) {
  return a + b;
}

let eredmeny = osszead(3, 4);
console.log(eredmeny);
```

#### Magyarázat
- A `osszead` függvény kiszámolja a két szám összegét, és visszaadja.
- Az `eredmeny` változó ezt az értéket tárolja.

Az eredményt egyből is kiírhatjuk:

```javascript
console.log(osszead(10, 5));
```

Változókkal is működik:

```javascript
let x = 12;
let y = 8;
let osszeg = osszead(x, y);
console.log("Összeg: ", osszeg);
```

#### Logikai érték visszaadása

```javascript
function nagyobbMintTiz(szam) {
  return szam > 10;
}

console.log(nagyobbMintTiz(12));
console.log(nagyobbMintTiz(7));
```

Ezt használhatjuk döntésekhez is:

```javascript
if (nagyobbMintTiz(15)) {
  console.log("A szám nagyobb, mint tíz.");
} else {
  console.log("A szám tíz vagy kisebb.");
}
```

<details className="dropdown-task">

  <summary>
  <strong>Mi az a hoisting</strong>
  
    
  </summary>

    A „hoisting” azt jelenti, hogy amikor a JavaScript feldolgozza a kódot, a hagyományos függvényeket (function declaration) a memóriában már a futtatás előtt előkészíti. Ezért hívhatjuk őket akár a definíciójuk előtt is. Viszont a változókhoz rendelt függvények (function expression) és nyílfüggvények (arrow function) csak akkor használhatók, ha a program már létrehozta a változót.


</details>

---


### A Function Expression

#### Mi az a Function Expression?

A **Function Expression** (függvénykifejezés) olyan függvény, amelyet nem önálló névvel hozunk létre, hanem egy változóba mentünk el. Ez a változó lesz a függvény neve, így ezen keresztül lehet meghívni. A JavaScript ebben az esetben a függvényt értékként kezeli – éppúgy, mint egy számot vagy egy szöveget –, és hozzárendeli egy változóhoz.

Ez az eljárás különösen hasznos akkor, amikor dinamikusan szeretnénk függvényeket létrehozni, például feltételesen vagy más függvényen belül.



#### Alap szintaxis

```javascript
const udvozles = function() {
  console.log("Helló, Function Expression!");
};

udvozles();
```

#### Magyarázat
- `function() { ... }`: Ez maga a névtelen (anonim) függvény.
- `const udvozles = ...`: Itt a függvény hozzárendelődik az `udvozles` nevű változóhoz.
- A végén `;` szerepel, mert ez egy értékadás.
- A meghívás ugyanúgy történik, mint bármely más függvénynél: `udvozles()`.

> Fontos: a függvény csak azután hívható meg, hogy a változó értéket kapott. Eltérően a deklarált függvényektől (Function Declaration), a Function Expression **nem hozható előre** (nincs hoisting).


#### Paraméterekkel ellátott Function Expression

```javascript
const osszead = function(a, b) {
  return a + b;
};

console.log(osszead(5, 3));
```

#### Magyarázat
- Az `a` és `b` paramétereket meghíváskor kapja meg a függvény.
- A `return` visszaadja az összeget, amit a `console.log()` kiír.



#### Function Expression változóval, majd meghívással

```javascript
let koszontes;

koszontes = function(nev) {
  console.log("Szia, " + nev + "!");
};

koszontes("Dávid");
```

#### Magyarázat
- Itt előbb létrehozzuk a `koszontes` változót, majd később rendeljük hozzá a függvényt.
- Ez rugalmasságot ad, például feltételes logikákban vagy ciklusokon belül.


#### Function Expression és logikai visszatérési érték

```javascript
const parosE = function(szam) {
  return szam % 2 === 0;
};

console.log(parosE(6)); // true
console.log(parosE(7)); // false
```

#### Magyarázat
- A függvény visszaad egy logikai értéket attól függően, hogy a szám páros-e.
- Ez a szerkezet jól használható `if`-ekben:

```javascript
if (parosE(10)) {
  console.log("Páros szám");
} else {
  console.log("Páratlan szám");
}
```

---


### Az Arrow Function (nyílfüggvény)

#### Mi az az Arrow Function?

Az **Arrow Function** (nyílfüggvény) a JavaScript egyik modern, tömörebb szintaxisa a függvények létrehozására. Az ES6 (ECMAScript 2015) bevezetésével vált elérhetővé, és főként egyszerűbb, rövid logikákhoz szokták használni. Tömörebb, olvashatóbb, és másként kezeli a `this` kulcsszót, mint a hagyományos függvények.

A nyílfüggvény mindig **függvénykifejezés** (Function Expression), vagyis egy változóhoz rendeljük, nem önálló névvel deklaráljuk.


#### Alap szintaxis

```javascript
const udvozles = () => {
  console.log("Helló, Arrow Function!");
};

udvozles();
```

#### Magyarázat
- `const udvozles =`: a függvényt hozzárendeljük a `udvozles` változóhoz.
- `() => { ... }`: ez a nyílfüggvény szintaxisa.
- A zárójelben a paraméterek, a nyíl (`=>`) után a törzs található.
- A meghívás ugyanúgy történik, mint bármely függvénynél: `udvozles()`.



#### Egy paraméterrel

```javascript
const koszont = nev => {
  console.log("Szia, " + nev + "!");
};

koszont("Eszter");
```

#### Megjegyzés
- Ha csak egy paraméter van, a zárójelek elhagyhatók.
- Több paraméternél már kötelező a zárójel:

```javascript
const osszead = (a, b) => {
  return a + b;
};

console.log(osszead(2, 3));
```


#### Tömörített forma (implicit return)

Ha a függvény egyetlen értéket ad vissza, a `return` kulcsszó és a kapcsos zárójelek is elhagyhatók:

```javascript
const negyzet = x => x * x;

console.log(negyzet(5)); // 25
```

Ez rövid és jól olvasható, ha csak egy kifejezést számolunk ki.


#### Logikai visszatérési érték

```javascript
const pozitivE = szam => szam > 0;

console.log(pozitivE(10)); // true
console.log(pozitivE(-3)); // false
```

Arrow function segítségével egyszerűen megadhatunk ilyen logikai feltételeket, amelyeket `if`-ekben is felhasználhatunk:

```javascript
if (pozitivE(4)) {
  console.log("A szám pozitív.");
} else {
  console.log("A szám nem pozitív.");
}
```


#### Arrow Function sajátosságai

- **Mindig kifejezés (expression)**, tehát változóhoz rendeljük.
- **Nem hoistolódik**: csak azután használható, hogy deklaráltuk.
- **Nem rendelkezik saját `this` értékkel**:
  - Az `this` mindig azt az értéket örökli, ahol létrehozták.
  - Ez előny, ha például objektumon kívül vagy belül használjuk visszahívásként.

Példa:

```javascript
const szamok = [1, 2, 3];

szamok.forEach(szam => {
  console.log(szam * 2);
});
```


---

### Az anonim függvények

#### Mi az az anonim függvény?

Az **anonim függvény** (anonymous function) olyan függvény, amelynek **nincs saját neve**. Nem adunk neki külön nevet a deklaráláskor, hanem általában **értékként** használjuk – például változóba mentjük, másik függvénynek adjuk át, vagy azonnal meg is hívjuk.

Mivel nem nevezett (névtelen), **nem lehet közvetlenül újra meghívni**, csak azon keresztül, ahová el lett mentve. Az anonim függvények a JavaScriptben főként **ideiglenes, egyszeri vagy célhoz kötött logikákhoz** használatosak.

#### Alapszintaxis (változóba mentve)

```javascript
const koszont = function(nev) {
  console.log("Szia, " + nev + "!");
};

koszont("Dani");
```

#### Magyarázat
- Itt maga a `function(nev) { ... }` rész **névtelen**, azaz anonim.
- A `koszont` nevű változóban tároljuk el.
- A meghívás a változón keresztül történik.



#### Miért hasznos az anonim függvény?

#### Egyszeri vagy ideiglenes használatra

Ha egy logikát csak egy helyen kell végrehajtanunk, nincs értelme külön nevet adni neki.

Például:

```javascript
setTimeout(function() {
  console.log("Eltelt 2 másodperc.");
}, 2000);
```

Itt a `setTimeout` egy beépített függvény, ami **elvár egy másik függvényt**. Mi ezt egyből odabent adjuk meg névtelenül, mivel csak ott és akkor kell.

#### Callback függvényként

Sok beépített függvény (például tömbműveletek) vár egy **másik függvényt** paraméterként. Ezeket gyakran anonim módon adjuk meg.

```javascript
[1, 2, 3].forEach(function(szam) {
  console.log(szam * 2);
});
```

Itt nincs szükség külön névre, mert a függvény csak a `forEach`-en belül kell.

#### Függvény másik függvényen belül

Anonim függvényeket gyakran írunk egy másik függvényen belül, például ha csak ott érvényes a működésük:

```javascript
function szorozTombot(tomb) {
  tomb.forEach(function(szam) {
    console.log(szam * 10);
  });
}

szorozTombot([2, 4, 6]);
```

A belső függvényt nem használjuk máshol, ezért teljesen felesleges lenne nevet adni neki.


#### Anonim függvény rövidebb formában: Arrow function 

Sok esetben az anonim függvényt **nyílfüggvényként** is megadhatjuk, ami még rövidebb:

```javascript
[1, 2, 3].forEach(szam => console.log(szam * 2));
```

Itt is anonim a függvény, de az `=>` nyíl szintaxist használjuk.

---

### A Constructor Function (konstruktorfüggvény)

#### Mi az a Constructor Function?

A **Constructor Function**, vagyis konstruktorfüggvény egy speciális típusú függvény, amit arra használunk, hogy új objektumokat hozzunk létre. Hagyományosan az objektumorientált programozásban a „konstruktor” az az eljárás, amellyel példányosítunk egy objektumot. JavaScriptben ez úgy történik, hogy egy függvényt a `new` kulcsszóval hívunk meg.

Egy Constructor Function belsejében a `this` kulcsszó az újonnan létrehozott objektumra mutat.


#### Alap szintaxis

```javascript
function Szemely(nev, kor) {
  this.nev = nev;
  this.kor = kor;
}

const ember1 = new Szemely("Dávid", 30);
console.log(ember1);
```

#### Magyarázat
- A `Szemely` egy konstruktorfüggvény. Neve hagyományosan nagybetűvel kezdődik.
- A `this.nev = nev` és a `this.kor = kor` sorok az új objektum tulajdonságait állítják be.
- A `new Szemely(...)` létrehoz egy új objektumot, aminek a `this` értékei beállításra kerülnek.


#### Tulajdonságok és metódusok hozzáadása

```javascript
function Auto(marka, evjarat) {
  this.marka = marka;
  this.evjarat = evjarat;
  this.indit = function() {
    console.log(this.marka + " beindult.");
  };
}

const auto1 = new Auto("Toyota", 2012);
auto1.indit();
```

#### Magyarázat
- A `this.indit` egy metódus, amit az új objektum fog tartalmazni.
- A metódus a `this` segítségével eléri az objektum többi tulajdonságát.


#### Példa több objektum létrehozására ugyanazzal a konstruktorral

```javascript
function Ember(nev) {
  this.nev = nev;
}

const e1 = new Ember("Lili");
const e2 = new Ember("Áron");

console.log(e1.nev); // "Lili"
console.log(e2.nev); // "Áron"
```

#### Megjegyzés
- Minden `new` hívás egy új, független objektumot hoz létre.
- A konstruktor ugyanaz, de az értékek különböznek.


#### `instanceof` operátor használata

```javascript
function Konyv(cim) {
  this.cim = cim;
}

const k = new Konyv("JavaScript alapok");

console.log(k instanceof Konyv); // true
```

#### Magyarázat
- Az `instanceof` operátor ellenőrzi, hogy egy objektum adott konstruktor alapján jött-e létre.


---

### A Method Definition (metódusdefiniálás objektumban)

#### Mi az a Method Definition?

A **Method Definition** (metódusdefiniálás) a JavaScript objektumokon belüli függvények meghatározásának egyszerű és letisztult módja. Ezeket a függvényeket metódusoknak nevezzük, és közvetlenül az objektum tulajdonságaként szerepelnek. A metódusok lehetővé teszik, hogy az adott objektum működéséhez tartozó logikát egy helyen tartsuk.

A metódusok különösen fontosak, ha viselkedést szeretnénk társítani egy objektumhoz, például: „a felhasználó jelentkezzen be”, vagy „az autó induljon el”.


#### Miben különbözik egy metódus a hagyományos függvényektől?

- Egy hagyományos függvényt általában külön definiálunk, és nem kötődik szorosan egy adott objektumhoz:

```javascript
function koszont(nev) {
  console.log("Szia, " + nev + "!");
}
```

- Ezzel szemben a metódus **egy objektumhoz tartozik**, és az objektum belsejében van definiálva:

```javascript
const felhasznalo = {
  nev: "Anna",
  koszont() {
    console.log("Szia, " + this.nev + "!");
  }
};
```

- A metóduson belül használt `this` az aktuális objektumra mutat. Ez lehetővé teszi, hogy a metódus dinamikusan az adott példány adatait használja.
- A metódusokat mindig az objektumon keresztül kell meghívni: `felhasznalo.koszont()`

Ez a megközelítés jobban szervezi a kódot, különösen objektumorientált gondolkodásmód esetén.


#### Hol használjuk a metódusokat?

- **Objektumorientált modellekben**: például amikor egy `felhasznalo`, `auto`, `konyv` vagy `jatekos` viselkedését szeretnénk meghatározni.
- **API-k, könyvtárak, frameworkök esetén**: sok beépített vagy külső JavaScript-eszköz metódusokat használ.
- **Eseménykezelésnél**: például egy UI elem `kattint()` vagy `megjelenik()` metódust hív.
- **Osztályok (`class`) esetén**: az osztályon belül megírt függvények is metódusoknak számítanak.

A metódusok mindenhol ott vannak, ahol objektumokat használunk – ez a JavaScript egyik alapeszköze.


#### Alap szintaxis

```javascript
const felhasznalo = {
  nev: "Anna",
  udvozles() {
    console.log("Szia, " + this.nev + "!");
  }
};

felhasznalo.udvozles();
```

#### Magyarázat
- Az `udvozles()` egy metódus, ami az `felhasznalo` objektum része.
- A `this` kulcsszó az objektumra mutat, így elérjük a `nev` tulajdonságot.
- A metódust `objektumNeve.metodusNeve()` formában kell meghívni.



#### Paraméteres metódus

```javascript
const szamologep = {
  osszead(a, b) {
    return a + b;
  }
};

console.log(szamologep.osszead(4, 6));
```

#### Magyarázat
- A metódus paramétereket is fogadhat, ugyanúgy, mint bármely más függvény.
- Az eredmény visszatérési értékként használható, pl. kiírásra vagy tárolásra.

#### Több metódus egy objektumban

```javascript
const auto = {
  marka: "Ford",
  indit() {
    console.log(this.marka + " beindult.");
  },
  leallit() {
    console.log(this.marka + " leállt.");
  }
};

auto.indit();
auto.leallit();
```

#### Megjegyzés
- Egy objektum több metódust is tartalmazhat.
- Mindegyik metódus ugyanúgy használhatja a `this` kulcsszót az objektum többi részének eléréséhez.



#### Metódus másik metódusból

```javascript
const feladat = {
  lepes1() {
    console.log("Első lépés");
  },
  lepes2() {
    this.lepes1();
    console.log("Második lépés");
  }
};

feladat.lepes2();
```

#### Magyarázat
- Egy metóduson belül meghívhatunk egy másik metódust az `this.metodusNeve()` formában.
- Ez akkor hasznos, ha egy folyamat több részből áll, de azokat külön metódusokba szeretnénk bontani.


#### Objektumon kívüli metódus hozzáadása

```javascript
const konyv = {
  cim: "JavaScript kezdőknek"
};

konyv.kiir = function() {
  console.log("Cím: " + this.cim);
};

konyv.kiir();
```

#### Magyarázat
- Egy metódust később is hozzáadhatunk az objektumhoz.
- Ilyenkor hagyományos függvénykifejezést használunk (`function` kulcsszóval).


---

### Az Async Function

#### Mi az az Async Function?

Az **async function** egy olyan speciális függvény JavaScriptben, amely automatikusan egy **Promise**-t ad vissza. Akkor használjuk, amikor egy művelet időbe telik (pl. adatletöltés egy szerverről), de nem akarjuk, hogy a program futása közben megálljon, amíg ez befejeződik.

Az `async` kulcsszóval jelezzük, hogy a függvény **aszinkron** módon működik. Ezen belül használhatjuk a `await` kulcsszót is, hogy megvárjunk egy másik aszinkron műveletet.


#### Alap szintaxis

```javascript
async function pelda() {
  return "Ez egy async függvény";
}

pelda().then(valasz => {
  console.log(valasz);
});
```

#### Magyarázat
- Az `async` kulcsszóval kezdődik.
- A függvény automatikusan egy `Promise`-t ad vissza.
- A `then()` segítségével kezeljük a visszatérő értéket.
- A visszatérési érték itt egy sima szöveg, de becsomagolódik egy Promise-ba.


#### Await használata async függvényen belül

```javascript
function kesleltet(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function futas() {
  console.log("Indulás");
  await kesleltet(2000);
  console.log("2 másodperc után folytatás");
}

futas();
```

#### Magyarázat
- A `kesleltet()` egy Promise-t ad vissza, amely a megadott idő után teljesül.
- Az `await` megvárja, hogy ez megtörténjen.
- A `futas()` függvény nem állítja meg a teljes programot, csak azt a részt, ahol várakozik.


#### Adatlekérés példával (fetch API)

```javascript
async function lekerAdat() {
  const valasz = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const adat = await valasz.json();
  console.log(adat);
}

lekerAdat();
```

#### Magyarázat
- Az `await fetch(...)` elküldi a kérést és megvárja, míg megérkezik a válasz.
- Ezután a `.json()` metódus is Promise-t ad vissza, így azt is megvárjuk.
- Az `adat` objektum ezután már szinkron módon használható.



#### Hiba kezelés try/catch segítségével

```javascript
async function lekerBiztonsagosan() {
  try {
    const valasz = await fetch("https://jsonplaceholder.typicode.com/posts/1000");
    if (!valasz.ok) {
      throw new Error("Hibás válaszkód: " + valasz.status);
    }
    const adat = await valasz.json();
    console.log(adat);
  } catch (hiba) {
    console.error("Hiba történt:", hiba);
  }
}

lekerBiztonsagosan();
```

#### Magyarázat
- A `try/catch` szerkezettel le tudjuk kezelni az esetleges hibákat.
- A `fetch` lehet, hogy hibás URL-re fut, ilyenkor a `.ok` hamis lesz.
- A `catch` blokk fut le, ha bármilyen hiba történik.


## Gyakorlati feladatok

### **Szintaktikai átalakítás hagyományosról arrow-ra**

#### **Feladat 1.1**  
Az alábbi, hagyományos függvényt (`function` kulcsszóval) alakítsd át arrow függvénnyé **ugyanolyan névvel**!  
```js
function greet() {
  return "Helló világ!";
}
```
*(Később próbáld ki a meghívását, és nézd meg, működik-e.)*

---

#### **Feladat 1.2**  
Itt már két paramétert is használunk. Alakítsd át az alábbi kódot arrow függvénnyé (ugyanolyan névvel), és cseréld ki az export részt is!  
```js
export function add(a, b) {
  return a + b;
}
```

---

#### **Feladat 1.3**  
A lenti függvényben van egy `console.log`, valamint `return`. Írd át arrow függvényre úgy, hogy **többsoros** legyen a függvénytörzs (tehát használsz kapcsos zárójeleket és `return`-t)!  
```js
function showUserCount(count) {
  console.log("User count:", count);
  return count;
}
```
*(Próbáld ki: `showUserCount(5)` – a konzolra is írjon, és vissza is adja az 5-öt.)*

---

#### **Feladat 1.4**  
Az alábbi hagyományos függvényt alakítsd át egysoros arrow függvénnyé úgy, hogy **implicit** legyen a `return`!  
```js
function isOver18(age) {
  return age > 18;
}
```
*(Tipp: egy sorba beírva már nem lesz szükség kapcsos zárójelre.)*

---

#### **Feladat 1.5**  
Van egy alapértelmezett paraméter is:  
```js
function welcome(name = "Guest") {
  return "Hello, " + name + "!";
}
```
Alakítsd át arrow függvénnyé úgy, hogy ugyanúgy megmaradjon a default érték. Egysoros vagy többsoros is lehet, döntsd el te, melyik jobban átlátható.

---



### **2. blokk – Egysoros vs többsoros arrow függvények**

#### **2.1 Feladat – A legegyszerűbb arrow függvény (nincs paraméter, nincs visszatérési érték)**

**Feladat:**  
- Hozz létre egy `sayHi` nevű arrow függvényt.  
- Ne fogadjon paramétert.  
- Egysoros legyen, és csak `console.log`-oljon valami rövidet, pl. `"Szia, ez egy arrow function!"`.  

**Cél:**  
- Látható legyen, hogyan néz ki a **nulla paraméteres** arrow függvény.  
- Egyetlen sorban, kapcsos zárójelek és `return` nélkül, csak `console.log`-ol.  

*(Később teszteld: `sayHi()` → kiírja a konzolra.)*

---

#### **2.2 Feladat – Egysoros arrow függvény, egy paraméterrel, nincs visszatérési érték**

**Feladat:**  
- Legyen `greetUser` a függvény neve.  
- Egyetlen paramétert (pl. `name`) kapjon.  
- Egysoros arrow formában, `console.log`-olja: `"Szia, <name>!"`.  

**Cél:**  
- Megértsük, hogy **egy paraméter** esetén elhagyhatjuk a paraméter-lista körüli `()`-t.  
- Továbbra is **egysoros** (tehát nincs kapcsos zárójel), és nincs `return` (csak `console.log`).

*(Később teszteld: `greetUser("Peti")` → `"Szia, Peti!"`.)*

---

#### **2.3 Feladat – Egysoros arrow függvény, egy paraméterrel, *van* visszatérési érték**

**Feladat:**  
- Írj egy `getWelcomeMessage` nevű függvényt.  
- Egy paramétert (pl. `name`) kapjon.  
- Egysoros arrow formában adjon **vissza** egy **stringet**: `"Üdv, <name>!"`.  
- Ne írja ki a konzolra, hanem *return*-ölje a stringet!  

**Cél:**  
- Látható legyen, hogy egysoros arrow függvényben, ha egy kifejezést akarunk visszaadni, **nincs szükség sem `return` kulcsszóra, sem kapcsos zárójelre**.  
- A visszatérés **implicit** (`return` helyett a függvény maga adja vissza a kifejezést).

*(Később teszteld: `console.log(getWelcomeMessage("Anna"))` → kiírja, amit visszaad a függvény.)*

---

#### **2.4 Feladat – Többsoros arrow függvény, egy paraméterrel, több lépés (köztük console.log), explicit `return`**

**Feladat:**  
- Legyen `welcomeUserVerbose` a függvény neve.  
- Egy paramétert (`name`) kapjon.  
- Többsoros arrow-t használj, tehát `{ ... }` törzs kell.  
- Először `console.log`-old: `"Beléptél, <name>!"`.  
- Majd készíts egy változót, pl. `welcomeText = "Üdvözlünk a rendszerben: " + name`.  
- **Végül** add vissza (return) a `welcomeText` értékét.  

**Cél:**  
- Megértsük, hogy **ha több utasítást** kell végrehajtani, **muszáj** a kapcsos zárójel és a **kötelező** `return`, ha ténylegesen vissza is akarunk adni valamit.  
- Már nem elég az egysoros `=> ...`.

*(Később teszteld: `console.log(welcomeUserVerbose("Pali"))`, és figyeld a konzolt plusz a visszatért értéket.)*

---

#### **2.5 Feladat – Többsoros arrow függvény, több paraméter, plusz minimális logika**

**Feladat:**  
- Legyen `calculateTotal` a függvény neve.  
- Két paraméter: `price` és `quantity`.  
- Többsoros arrow-t használj (mert több lépés lesz).  
- Először `console.log`-old: `"Kiszámoljuk a végösszeget..."`.  
- Készíts egy `sum` változót: `price * quantity`.  
- Ha a `sum` nagyobb, mint 1000, akkor `console.log`-old: `"Nagy összeg!"`. (Nem kötelező if-else, de mutassunk be valami logikát.)  
- Végül `return sum`.  

**Cél:**  
- Tükrözze a **többsoros** arrow funkcionalitását: van benne logging, logikai ellenőrzés, **explicit** `return`.  
- Több paraméter → `(price, quantity) => { ... }`.

*(Teszteld: `console.log(calculateTotal(200, 6))` → 1200, és a konzolban plusz szövegek.)*


### **3. Blokk – Paraméterkezelés (egy, több, nulla, default, opcionális)**

#### **Feladat 3.1**  
Készíts egy `noParamHello` arrow függvényt **paraméter nélkül**, ami csak `"Hello"` sztringet ad vissza. Használd az egysoros megoldást.

---

#### **Feladat 3.2**  
Alakíts ki egy `oneParamDouble` arrow függvényt, ami **egy** számot kap és annak a dupláját adja vissza. Vedd észre, hogy **egy** paraméternél a körülzáró zárójelek el is hagyhatók.

---

#### **Feladat 3.3**  
Írj egy `twoParamsFullName` függvényt, ami **két** paramétert (`firstName`, `lastName`) kap, és összefűzi a kettőt `"Nagy Péter"` formátumban. Egysoros arrow formában oldd meg.

---

#### **Feladat 3.4**  
Alakíts ki egy `defaultParamGreeting` függvényt, ami **egyetlen** paramétert kap (`name`), ám ha az nincs megadva, default értéke `"Anonymous"`. Adjon vissza például `"Hello Anonymous!"`.

---

#### **Feladat 3.5**  
Készíts egy `optionalParamTest` függvényt, ami **nulla** vagy **egy** paramétert is elfogad (például: `str?`). Ha nem kap paramétert, `"Nincs szöveg"` stringet adjon vissza, ha kap, akkor azt a stringet kisbetűsre alakítva.





