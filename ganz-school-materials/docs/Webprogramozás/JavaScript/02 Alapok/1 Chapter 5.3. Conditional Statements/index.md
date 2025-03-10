---
id: alapok
title: Feltételes vezérlési szerkezetek (Elágazások, Feltételes operátorok)
---

# if, if else, else if, switch, tarnery operátorok

## Mik azok az elágazások?

A JavaScript programozás során az egyik legfontosabb feladatunk annak meghatározása, hogy a kód miként reagáljon különböző körülményekre, illetve feltételekre. Az ilyen döntési mechanizmusokat többféle, úgynevezett elágazási szerkezettel (más néven vezérlési szerkezettel) valósíthatjuk meg, amelyek lehetővé teszik a program számára, hogy vizsgálja a megadott feltétel(eke)t, és az eredmény alapján futtasson speciális kódrészleteket. A feltételek kiértékelésével elérhetjük, hogy a kód egyszerűbb, átláthatóbb és rugalmasabb legyen, mivel nem minden esetben ugyanazt a műveletsort kell végrehajtani. A következőkben a JavaScript leggyakrabban használt elágazási szerkezeteiről olvashatsz egy átfogó bevezetőt, amely magában foglalja az **if**, **if...else**, **else if**, **switch** és a ternáris (három operandusú) operátor használatát is.

Ahhoz, hogy megértsük, miért van szükség egyáltalán elágazásokra, először érdemes áttekinteni, hogyan is működik általában a kód futása.

Amikor egy JavaScript programot elindítunk, a JavaScript futtatókörnyezete – például egy böngésző vagy éppen egy Node.js környezet – soronként értelmezi és végrehajtja a kódrészleteket. Ennek során alapértelmezetten minden egymás után érkező utasítás sorban lefut. Ezt a lineáris futást azonban gyakran meg kell törni, ha bizonyos feltételek változnak vagy teljesülnek. Képzeljük el például, hogy egy webes űrlapot kitöltő felhasználóról szeretnénk eldönteni, megfelel-e a megadott életkor az oldal szabályainak. Logikus, hogy másként akarunk eljárni, ha a felhasználó betöltötte a szükséges kort, mint akkor, ha még nem. Erre szolgálnak a különféle elágazások: képesek vagyunk két vagy több lehetséges út közül kiválasztani az éppen megfelelőt.

## Általános ismeretek az `if` szerkezetről

A legalapvetőbb döntési lehetőséget az **if** kulcsszóval érhetjük el. Az if segítségével megvizsgálunk egy feltételt, amelynek az eredménye (igaz vagy hamis) szabja meg, hogy a hozzátartozó kódrészlet lefut-e vagy sem. Például, ha szeretnénk ellenőrizni, hogy egy változó értéke nagyobb-e, mint 10, akkor az if a feltétel igaz volta esetén engedi lefutni a kódblokkot. Amennyiben a feltétel hamis, a kódblokk teljes egészében kihagyásra kerül, és a futás a következő utasítással folytatódik. A legtöbb programozási nyelvhez hasonlóan a JavaScript is lehetőséget ad arra, hogy ne csak egy feltétel igazsága esetén hajtson végre utasításokat, hanem arra is, hogy külön kódot futtasson, ha a feltétel nem teljesül. Erre az if...else szerkezet alkalmas.

#### `If` szerkezet – egyszerű feltételvizsgálat

Az if utasítás a legegyszerűbb módja annak, hogy egy kódblokk csak akkor fusson le, ha egy megadott feltétel igaz (true). Ha a feltétel hamis (false), a program nem hajtja végre az if blokkban lévő utasításokat.

```js
// Példa 1 – Egyszerű if használat
let kor = 20;

if (kor >= 18) {
  console.log("Nagykorú vagy, beléphetsz a klubba.");
}

// Példa 2 – Feltétel: a szám páros-e
let szam = 12;

if (szam % 2 === 0) {
  console.log("A szám páros.");
}

// Példa 3 – További logikai feltétel
let bejelentkezve = true;

if (bejelentkezve === true) {
  console.log("Üdvözlünk az oldalon!");
}
```

#### Mi történik a háttérben?
- A JavaScript kiértékeli az if zárójelében lévő feltételt (pl. `kor >= 18`).
- Ha a kifejezés eredménye `true`, akkor lefutnak az if blokkba írt parancsok (pl. `console.log(...)`).
- Ha a kifejezés `false`, akkor egyszerűen átugorja a JavaScript a blokkot, és folytatja a kód végrehajtását a következő sorral.

---

## Az if...else használata

Ha **if** szerkezetnél arról van szó, hogy „ha valami igaz, akkor tegyél meg valamit, különben ne tégy semmit”, akkor az **if...else** szerkezetnél ez kiegészül azzal, hogy „ha valami igaz, akkor tegyél meg valamit, **ha nem**, akkor viszont futtass valami mást”. Ez a mechanizmus lehetővé teszi, hogy egy döntést két részre osszunk. Gondoljunk arra, amikor egy számítógépes játékban szeretnénk eldönteni, hogy a játékos kap-e jutalmat. Ha egy változó (mondjuk `pontszám`) elér egy bizonyos határértéket, akkor jutalmat kap, ha nem, akkor valamilyen más cselekvés történik. Az if...else használata tehát rendkívül logikus és letisztult megoldás akkor, ha mindenképpen szeretnénk két különböző kimenetet kezelni.

#### If...else – két különböző ág kezelése

Az if...else szerkezet akkor jön jól, ha nemcsak azt akarjuk ellenőrizni, hogy egy feltétel igaz-e, hanem szeretnénk megadni, mi történjen akkor, ha a feltétel hamisnak bizonyul.

```js
// Példa 1 – If...else
let jelszo = "titok123";

if (jelszo === "titok123") {
  console.log("Sikeres bejelentkezés!");
} else {
  console.log("Hibás jelszó! Próbáld újra!");
}

// Példa 2 – Érték összehasonlítása
let pontszam = 42;

if (pontszam >= 50) {
  console.log("Megfeleltél a vizsgán!");
} else {
  console.log("Nem sikerült a vizsga!");
}
```

#### Mi történik a háttérben?
- Ha az `if` feltétele igaz, végrehajtjuk az `if` ág kódját.
- Ha hamis, automatikusan az `else` ág kerül végrehajtásra.

---

## Többágú elágazás else if segítségével

Akadnak azonban olyan esetek, amikor nem elegendő mindössze két lehetséges kimenet. Ilyenkor jó választás lehet az **else if**, amely lényegében az if...else szerkezet kiterjesztése. Ilyen helyzet adódhat például akkor, ha különféle korhatár-kategóriákat szeretnénk megkülönböztetni. Ha a `kor` értéke 0 és 6 év között van, egy bizonyos kódblokkot futtassunk, ha 7 és 14 év között mozog, akkor egy másikat, ha 15 és 17 év között van, akkor egy harmadikat, és végül ha 18 vagy afölött, akkor negyedik lehetőség lép érvénybe. Ilyenkor sorban ellenőrizzük a feltételeket: amint találunk egy igaz feltételt, végrehajtjuk a hozzátartozó kódrészletet, és már nem ellenőrizzük a többi else if ágat (ezzel is kímélve a futás idejét és erőforrásait). Ha egyik feltétel sem igaz, akkor a befejező **else** szekció adhatja meg az alapértelmezett viselkedést. Ez a szerkezet nagyon gyakori a programozásban, hiszen gyakran szembesülünk olyan igénnyel, hogy egyetlen kifejezés különböző értékeihez rendeljünk különféle lépéseket vagy logikát.

#### Else if – több feltétel kezelése egymás után

Vannak helyzetek, amikor nem elég két lehetőség (if vagy else). Többféle ellenőrzést szeretnénk elvégezni egymás után, és a feltételnek megfelelően eltérő kódot futtatni. Ebben az esetben használhatjuk az else if ágat, amellyel tetszőleges számú leágazást hozhatunk létre.

```js
// Példa – Kor szerinti kategorizálás
let kor2 = 15;

if (kor2 < 0) {
  console.log("Hibás koradat!");
} else if (kor2 < 12) {
  console.log("Gyerek vagy.");
} else if (kor2 < 18) {
  console.log("Tinédzser vagy.");
} else if (kor2 < 65) {
  console.log("Felnőtt vagy.");
} else {
  console.log("Nyugdíjas vagy.");
}
```

A fenti példában lépésenként (sorrendben) ellenőrizzük, hogy a kor melyik sávba esik. Amikor a program talál egy igaz feltételt, végrehajtja az ahhoz tartozó kódot, majd kilép az else if szerkezetből, és nem vizsgálja tovább a következő ágat.

Ezzel a módszerrel könnyen lehet differenciálni többféle állapot között. Fontos azonban, hogy a feltételek sorrendje logikus legyen, és lehetőleg minden lehetséges esetet lefedjünk. Általában a legkonkrétabb (legszigorúbb) feltételeket érdemes legfelül megadni, majd haladni az általánosabbak felé, hogy a kód a megfelelő helyen álljon meg.

---

## Switch a többirányú elágazásokhoz

A JavaScriptben létezik egy másik, gyakran kényelmesebb eszköz is a többféle kimenettel dolgozó döntések kezelésére: ez a **switch** szerkezet. A switch működése abban áll, hogy a megadott kifejezést (amely lehet például egy változó értéke) összehasonlítja a felsorolt **case** kulcsszó után következő értékekkel. Ha talál egyezést, akkor a hozzátartozó kódblokkot hajtja végre, majd a legtöbb esetben **break** utasítással zárjuk az adott ágat, hogy megakadályozzuk a további „lefolyást” a következő case ágakban. Ha egyetlen case sem egyezik, akkor a **default** kulcsszó alatti kódblokk fut le. Érdemes arra figyelni, hogy a switch összehasonlítás pontosan és szigorúan a === operátort használja, tehát típusegyezésre is szükség van (például a `4` és a `"4"` nem fognak megegyezésként szerepelni). A switch szerkezet különösen hasznos, ha ugyanannak a változónak számos előre megadott értéket szeretnénk vizsgálni. Például egy többnyelvű webalkalmazásban a felhasználói beállítás nyelvi kódja (mondjuk `hu`, `en`, `de` és így tovább) alapján dönthetjük el, milyen fordításokat jelenítsen meg a program. Az if...else if... szerkezetekkel is megoldható lenne, de minél több lehetőség áll fenn, annál kevésbé átlátható az egymásba fűzött if-ágak rendszere. A switch ilyen helyzetekben ésszerűbb, könnyebben olvasható választás lehet.

#### Switch – több előre megadott érték esetén

Ha egy változó több, előre ismert lehetséges értékét akarjuk kezelni (és mindegyikhez más kódrészlet társul), sokszor praktikusabb a switch szerkezet használata, mint az egymásba ágyazott else if halmaz. A switch szerkezet átláthatóbbá teheti a kódot, mert egy helyen, jól csoportosítva látjuk a különböző eseteket.

```js
// Példa – Switch
let nap = "kedd";

switch (nap) {
  case "hétfő":
    console.log("Hétfő van. Kezdődik a munka!");
    break;
  case "kedd":
    console.log("Kedd van. Már lendületben vagyunk!");
    break;
  case "szerda":
    console.log("Szerda van. Féltávnál tartunk.");
    break;
  case "csütörtök":
    console.log("Csütörtök van. Mindjárt itt a hétvége!");
    break;
  case "péntek":
    console.log("Péntek van. Hurrá, hétvége közeleg!");
    break;
  default:
    console.log("Hétvége! Pihenés vagy szórakozás?");
}
```

#### Hogyan működik a switch?

1. A switch kulcsszó után zárójelbe tesszük azt a kifejezést (jelen példában `nap`), amelyet vizsgálni szeretnénk.
2. Minden `case` után egy-egy konkrét értéket adunk meg, amellyel összehasonlítjuk a kifejezést. Amikor megtaláljuk a megfelelő `case`-t (azaz a `nap` értéke pontosan megegyezik a megadott értékkel, pl. `"kedd"`), a hozzátartozó kódrészletet futtatjuk.
3. A `break` utasítás célja, hogy kilépjünk a switch szerkezetből, miután a megfelelő ágat végrehajtottuk. Ha kihagyjuk a break-et, a kód „átfolyik” a következő case ágba is, ami ritkán, de lehet szándékos (pl. összevont esetek).
4. A `default` blokk akkor fut, ha egyetlen case sem illik a kifejezés értékére. Ez a „minden más” esetek feldolgozására szolgál.

---

## Ternáris (három operandusú) operátor

A JavaScript (és sok más nyelv) rendelkezik egy egyedi, rövidített formával is, amelyet **ternáris operátorként** ismerünk. Magyarul ezt gyakran „feltételes operátornak” hívják, és jelölése így néz ki: `feltétel ? értékHaIgaz : értékHaHamis`. Ez különösen hasznos lehet akkor, ha egy változó értékét szeretnénk függővé tenni valamilyen egyszerű feltételtől. A ternáris operátorral egyetlen sorban megadhatjuk, hogy a feltétel teljesülése esetén milyen eredményt kapjon a változó, és ha a feltétel hamis, akkor milyen legyen az érték. Például `let jogosultsag = (kor >= 18) ? "felnőtt" : "kiskorú";` esetén a `jogosultsag` változó értéke "felnőtt" lesz, ha a `kor` nagyobb vagy egyenlő, mint 18, egyébként "kiskorú". Ez a rövid forma főként akkor ajánlott, ha tényleg csak egyetlen értéket akarunk eldönteni, mivel a túlzottan bonyolult ternáris kifejezések nehezen olvashatóvá teszik a kódot.

#### Ternáris operátor ( ? : ) – rövidített elágazás

A ternáris operátor egyszerű if...else helyzetekre használható egy sorba tömörítve. Szintaxisa: 
```
feltétel ? értékHaIgaz : értékHaHamis
```
Ez egy kifejezés, ami azt jelenti, hogy akár egy változó értékeként is közvetlenül megadhatjuk.

```js
// Példa 1 – Egyszerű ternáris
let kor3 = 22;
let jogosultsag = (kor3 >= 18) ? "Felnőtt" : "Kiskorú";
console.log(jogosultsag);

// Példa 2 – Ternáris egy függvényhívásban
function getKedvezmeny(vasarlasErteke) {
  return (vasarlasErteke > 10000) ? 20 : 5;
}

let vasarlas = 8000;
let kedvezmenyMerteke = getKedvezmeny(vasarlas);
console.log(`A kedvezmény: ${kedvezmenyMerteke}%`);
```

#### Mikor célszerű használni a ternárist?
- Ha gyorsan, egysoros formában szeretnénk döntést hozni, és csak két kimenet lehetséges: igaz vagy hamis.
- Ha azonban bonyolult feltételrendszert kell leképezni, jobb a könnyebben olvasható if...else szerkezetet választani.

---



#### Példa: Egyszerű bevásárlókocsi-szimuláció

```js
let bevasarloKocsi = ["alma", "kenyér", "tej", "tojás"];
let penz = 500; // ennyi forintunk van

if (bevasarloKocsi.includes("tej")) {
  console.log("A kosárban van tej.");
} else {
  console.log("Nincs tej a kosárban.");
}

if (penz > 300) {
  console.log("Elég pénzed van a fizetéshez.");
} else {
  console.log("Nincs elegendő kereted.");
}
```

Itt két különálló if feltételt látunk egymás alatt:  
- Az első azt nézi, hogy a `bevasarloKocsi` tömb tartalmazza-e a „tej” elemet.  
- A második azt ellenőrzi, hogy az `penz` nagyobb-e 300 forintnál.  

## Mikor melyik szerkezetet érdemes használni?

A programozásban általánosan elfogadott, hogy a kódnak törekednie kell az olvashatóságra és a könnyű érthetőségre. Ezért érdemes mindig azt a szerkezetet választani, amely a leglogikusabban tükrözi a feladat szerkezetét. Ha csak egyetlen feltételről van szó, és arra kell reagálnunk igen vagy nem módon, egy if tökéletes megoldás lehet. Ha két eltérő műveletet kell futtatni, az if...else már jobban illeszkedik az elképzelésünkhöz. Ha több különböző feltételt kívánunk egymás után ellenőrizni, akkor az else if a célszerű megoldás, viszont ha ugyanazt a kifejezést vizsgáljuk sok különböző előre ismert értékkel összehasonlítva, a switch lehet átláthatóbb. Végül, ha egy változó értékét szeretnénk röviden és egyértelműen meghatározni egy feltétel alapján, a ternáris operátor kiválóan használható.

---

## Tippek és jó gyakorlatok

1. **A feltételek megfogalmazása**: Mindig egyértelműen, logikusan építsük fel a feltételeket. Ha túl sok else if ágazat van egymás után, érdemes elgondolkodni azon, hogy egy switch szerkezet vagy más logikai felépítés átláthatóbbá teheti-e a kódot.

2. **Változónevek és kifejezések**: Olyan neveket érdemes adni a változóknak, amelyek egyértelműen utalnak a tartalmukra (például `kor`, `hőmérséklet`, `elértPontszám`), így egy pillantás alatt megérthetjük, mire vonatkozik a feltétel. A jól megválasztott elnevezések révén az if, else if vagy switch esetek is logikusabban olvashatóvá válnak.

3. **Olvashatóság vs. rövidség**: Bár a ternáris operátor csábító lehet, mert helytakarékos, érdemes elkerülni, hogy bonyolult, összetett feltételeket zsúfoljunk bele. Ha egy ternáris kifejezés túl hosszúra nyúlik, több sorba tördeljük, vagy használjunk inkább hagyományos if...else szerkezetet.

4. **Figyeljünk az if-ágak lefedettségére**: A kódban nem maradhat olyan helyzet, amikor egy feltétel esetleg soha nem lehet igaz (például teljesen felesleges else if ágazatok). Emellett fontos lehet, hogy legyen „alapértelmezett” viselkedés, ha egyik feltétel sem teljesül. Ezt az else vagy a switch default ágával tudjuk biztosítani.

5. **Hatékonyság és logikai sorrend**: A feltételek ellenőrzési sorrendje kihat a program működésére és futási idejére is. Ha például olyan feltételünk van, ami a legtöbbször igaz, célszerű lehet az if szerkezetben elsőként vizsgálni. Ez a program logikáján túl teljesítménybeli előnnyel is járhat, bár a modern JavaScript motorok igen gyorsak, így ez csak nagyon nagy adatmennyiség vagy sokmillió iteráció esetén válik igazán számottevővé.

---

## Gyakorlati példák


#### Példa: Hitelesítési folyamat else if szerkezettel

```js
let felhasznaloNev = "admin";
let jelszo2 = "12345";

if (felhasznaloNev !== "admin") {
  console.log("Ismeretlen felhasználó.");
} else if (jelszo2 !== "12345") {
  console.log("Helytelen jelszó.");
} else {
  console.log("Bejelentkezés sikeres!");
}
```

Ebben a példában a belépés folyamatát modellezzük:
1. Először megnézzük, hogy a felhasználó neve helyes-e.  
2. Ha igen, ellenőrizzük a jelszót.  
3. Ha mindkettő helyes, kijelentjük, hogy a bejelentkezés sikeres.

#### Példa: Switch szerkezet egy fiktív menüben

```js
let menuValasztas = 2;

switch (menuValasztas) {
  case 1:
    console.log("Új játék indítása");
    break;
  case 2:
    console.log("Játék betöltése");
    break;
  case 3:
    console.log("Kilépés a programból");
    break;
  default:
    console.log("Ismeretlen menüpont!");
}
```

Tegyük fel, hogy egy játék főmenüjében a felhasználó kiválaszt egy menüpontot (1, 2, vagy 3). A switch ezen érték alapján tudja, melyik funkciót futtassa. A default rész pedig kezeli azt, ha egy érvénytelen menüpont került kiválasztásra.

#### Példa: Ternáris operátor összetettebb felhasználással

```js
let vasarlasOsszeg = 12000;
let uzenet = (vasarlasOsszeg >= 10000)
  ? "Ön jogosult a kedvezményre!"
  : "Sajnos nem érted el a kedvezmény küszöbét.";

console.log(uzenet);

// Vagy akár közvetlenül is
console.log(
  (vasarlasOsszeg >= 10000)
    ? "Kedvezmény jár!"
    : "Nem jár kedvezmény..."
);
```

## Gyakorlati feladatok

<details className="dropdown-task">

  <summary>
  <strong>Függvények Gyorstalpaló</strong>

  </summary>


A függvények olyan újrahasznosítható kódrészletek, amelyek egy adott feladatot hajtanak végre..


#### Függvény definiálása és hívása

A függvény definíciója a `function` kulcsszóval kezdődik, majd következik a függvény neve, a paramétereket tartalmazó zárójelek, és a kapcsos zárójelek között található a végrehajtandó kód. Példa:

```js
function udvozles() {
  console.log("Szia, világ!");
}

udvozles(); // A függvény hívása, mely kiírja: Szia, világ!
```

Ebben a példában a `udvozles` függvény egy egyszerű üzenetet ír ki a konzolra. A függvény hívása (`udvozles();`) elindítja a függvény végrehajtását.

#### Paraméterek és visszatérési érték

A függvények képesek adatokat fogadni paramétereken keresztül, és egy értékkel visszatérni. Nézzük meg, hogyan működik ez:

```js
function osszead(a, b) {
  return a + b;
}

let eredmeny = osszead(5, 7);
console.log("Az összeg: " + eredmeny); // Az összeg: 12
```

A fenti példában az `osszead` függvény két paramétert vár (`a` és `b`), majd a `return` utasítással visszaadja azok összegét. Az eredményt elmentjük az `eredmeny` változóba, és kiírjuk a konzolra.

#### Egyszerű interaktív példa

Az alábbi függvény bekér egy nevet a felhasználótól a `prompt` segítségével, majd üdvözli őt egy `alert` üzenettel:

```js
function udvozlet() {
  let nev = prompt("Mi a neved?");
  alert("Szia, " + nev + "!");
}

udvozlet();
```

Ebben a példában a `prompt` ablakban bekérjük a felhasználó nevét, majd az `alert` segítségével megjelenítjük a személyre szabott üdvözlést.

#### Összefoglalás

A függvények segítségével:
- **Modularizálhatjuk** a kódunkat, így az könnyebben olvasható és karbantartható lesz.
- **Újrahasznosíthatóvá** tehetjük a logikai egységeket, elkerülve a kód ismétlését.
- **Különálló feladatokat** valósíthatunk meg saját függvényekben, így átláthatóbbá válik a program szerkezete.


</details>

<details className="dropdown-task">

  <summary>
  <strong>includes() - gyorstalpaló</strong>
  
  
  </summary>

  Az **includes()** metódus segítségével ellenőrizhetjük, hogy egy tömb vagy szöveg tartalmaz-e egy adott elemet vagy részszöveget. Például, ha van egy tömbünk:  
  ```js
  const gyumolcsok = ["alma", "banán", "cseresznye"];
  console.log(gyumolcsok.includes("banán")); // true
  ```

  Hasonlóan, egy string esetén is használható:  

  ```js
  const szoveg = "Hello, világ!";
  console.log(szoveg.includes("világ")); // true
  ```

</details>

<details className="dropdown-task">

  <summary>
  <strong>.value - gyorstalpaló</strong>
  
  
  </summary>

  A .value tulajdonság az adott HTML űrlapelem aktuális értékét tartalmazza. Például, ha egy felhasználó egy szövegbeviteli mezőbe beír valamit, a JavaScript-ben a .value segítségével olvashatod ki ezt a beírt adatot.

 Például, ha van egy input mezőnk:  
  ```html
  <input type="text" id="felhasznaloNev" placeholder="Írd be a neved">
  ```
  A JavaScript-ben először külön változóba mentjük az input elemet, majd a változó segítségével olvassuk ki az értékét:  
  ```js
  const felhasznaloNevElem = document.getElementById("felhasznaloNev");
  const nev = felhasznaloNevElem.value;
  console.log("A felhasználó neve: " + nev);
  ```
  Ezzel a módszerrel dinamikusan kezelhetjük a felhasználói adatokat az űrlapokon.


```html
<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Egyszerű .value Példa</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background: linear-gradient(135deg, #0f9d58, #33b5e5);
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      font-family: Arial, sans-serif;
    }
    .container {
      background: rgba(255,255,255,0.9);
      border-radius: 10px;
      padding: 20px 30px;
      text-align: center;
      box-shadow: 0 0 15px rgba(0,0,0,0.3);
      width: 400px;
    }
    h2 {
      margin-bottom: 15px;
      color: #333;
    }
    input {
      width: 100%;
      padding: 10px;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 1rem;
    }
    button {
      padding: 10px 20px;
      font-size: 1rem;
      border: none;
      border-radius: 5px;
      background-color: #33b5e5;
      color: #fff;
      cursor: pointer;
      transition: background 0.3s ease;
    }
    button:hover {
      background-color: #0f9d58;
    }
    .output-field {
      margin-top: 15px;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      background: #f7f7f7;
      font-size: 1rem;
      color: #333;
      min-height: 30px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>Adatmegjelenítő</h2>
    <!-- Input mező, ahová a felhasználó beírja a szöveget -->
    <input type="text" class="input-field" placeholder="Írj be valamit...">
    <!-- Gomb, mely onclick attribútummal hívja a showValue() függvényt -->
    <button onclick="showValue()">Mutasd az értéket</button>
    <!-- Output mező, ahol megjelenik a beírt szöveg -->
    <div class="output-field"></div>
  </div>
  
  <script>
    // A showValue() függvény kiolvassa az input mező értékét a .value tulajdonsággal
    // és megjeleníti azt az output mezőben.
    function showValue() {
      const inputField = document.querySelector('.input-field');  // Input elem változóba mentése
      const outputField = document.querySelector('.output-field'); // Output elem változóba mentése
      const inputValue = inputField.value; // Az input aktuális értékének kiolvasása
      outputField.textContent =  `Beírt érték:  ${inputValue}` // Az eredmény megjelenítése
    }
  </script>
</body>
</html>
```


</details>

### if

<details className="dropdown-task">

  <summary>
  <strong>Első Feladat – If Használata</strong>
  
      
      Kérjük be a felhasználótól egy számot, és állapítsuk meg, hogy nagyobb-e tíznél.
      Mivel csak if utasításokat használhatunk, nem alkalmazunk sem else sem else if szerkezetet.
 
  
  </summary>

```html
<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8" />
  <title>Első Feladat – If Használata</title>
  <style>
    /* Egyszerű, modern háttér linear-gradient-tel */
    body {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      background: linear-gradient(135deg, #74ABE2, #5563DE);
    }

    /* „Sziget” a tartalomnak, középre helyezve */
    .container {
      background-color: #fff;
      max-width: 500px;
      margin: 50px auto; /* Ez hozza középre a blokkot */
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0,0,0,0.2);
      text-align: center;
    }

    /* Alapvető stílusok a címhez és leíráshoz */
    h1 {
      margin-bottom: 10px;
    }
    p {
      line-height: 1.5;
    }

    /* Bemeneti mező és gomb stílusok */
    input[type="number"] {
      padding: 8px;
      margin: 10px 5px 10px 0;
      width: 150px;
      border: 1px solid #ccc;
      border-radius: 4px;
      outline: none;
      text-align: center;
    }

    button {
      background-color: #5563DE;
      color: #fff;
      padding: 10px 15px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    button:hover {
      background-color: #3C49B3;
    }

    /* Az eredménymező feltűnőbb megjelenítéséhez */
    #eredmeny {
      margin-top: 20px;
      font-weight: bold;
      font-size: 1.1rem;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Első feladat – If használata</h1>

    
    <!-- Szám bekérése -->


    <!-- Gomb a kiértékeléshez -->


    <!-- Eredmény kiírása ide -->

  </div>

  <script>
    function ellenorizdSzamot() {
      // A felhasználó által beírt érték lekérése
      
      // Az eredmény mező, ahová majd írunk
      

      // Tisztázzuk, hogy tényleg szám-e:
      // Ha a parseInt NaN-t ad, akkor a bevitt érték nem szám jellegű
      

     
        // Csak if utasítás, jelezzük, ha nem számot írtak be
        
      

      // Vizsgáljuk, hogy nagyobb-e 10-nél
   

      // További if: ha nem nagyobb 10-nél
     

    }
  </script>
</body>
</html>
```

</details>



### if else

<details className="dropdown-task">

  <summary>
  <strong>Szám előjele</strong>
  
  Kérj be egy számot. Ha nem számot írt be a felhasználó, jeleníts meg hibaüzenetet. Ha számot írt be: Ha a szám `0`, közöld: „A beírt érték nulla.” Ha nem `0`, döntsd el, hogy pozitív vagy negatív, és ennek megfelelő üzenetet írj ki.
  </summary>

```html
<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>– If...else – Szám előjele</title>
  <style>
    /* Középre igazítás flex-szel, teljes képernyő */
    body {
      margin: 0;
      padding: 0;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: Arial, sans-serif;
      background: linear-gradient(135deg, #F093FB, #F5576C);
    }
    .container {
      background-color: #fff;
      width: 300px;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0,0,0,0.2);
      text-align: center;
    }
    h1 {
      margin-bottom: 0.5rem;
    }
    input[type="number"] {
      padding: 8px;
      width: 80%;
      border: 1px solid #ccc;
      border-radius: 4px;
      outline: none;
      margin-bottom: 1rem;
      text-align: center;
    }
    button {
      background-color: #F5576C;
      color: #fff;
      border: none;
      padding: 8px 15px;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background-color: #D63B51;
    }
    #eredmeny {
      margin-top: 1rem;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Szám előjele</h1>
    <p>Írd be a vizsgálandó számot:</p>
    <input type="number" id="szamInput" placeholder="Szám..." />
    <br>
    <button onclick="vizsgald()">Ellenőrzés</button>
    <div id="eredmeny"></div>
  </div>

  <script>
    function vizsgald() {
      // input hivatkozás
      // div hivatkozás
      // előző mező értékét töröljük ki
      
      //bevitt érték számmár konvertálása

      // if...else logika

        // Újabb if...else a belső logikára

          // További if...else

   
    }
  </script>
</body>
</html>
```

</details>

### else if

<details className="dropdown-task">

  <summary>
  <strong>Felhasználói Adatvizsgálat</strong>
  
  Ez a kódrészlet egy felhasználói adatvizsgálatot végez, ahol a felhasználó nevet, életkort és email címet ad meg. A függvény ellenőrzi, hogy a név legalább 3 karakter hosszú, az életkor 18 és 65 között van, valamint az email tartalmazza az '@' karaktert. Az eredményt egy kijelölt mezőben írja ki, hibás adatok esetén a megfelelő hibaüzenettel, míg helyes adatok esetén "Adatok elfogadva!" üzenettel.

  </summary>

```html
<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Komplex JavaScript Feladat</title>
  <style>
    body {
      background: linear-gradient(135deg, #0f9d58, #33b5e5);
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      color: #fff;
    }
    .container {
      background-color: rgba(0, 0, 0, 0.8);
      padding: 20px 30px;
      border-radius: 15px;
      box-shadow: 0 8px 20px rgba(0,0,0,0.5);
      text-align: center;
    }
    input, button {
      margin: 10px 0;
      padding: 10px;
      width: 100%;
      border: none;
      border-radius: 8px;
      box-sizing: border-box;
    }
    input {
      background-color: rgba(255, 255, 255, 0.1);
      color: #fff;
    }
    button {
      background-color: #33b5e5;
      cursor: pointer;
      color: #fff;
      transition: background 0.3s ease;
    }
    button:hover {
      background-color: #0f9d58;
    }
    .output {
      margin-top: 15px;
      padding: 10px;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      min-height: 30px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>Felhasználói Adatvizsgálat</h2>
    <input type="text" id="name" placeholder="Név (min. 3 karakter)">
    <input type="number" id="age" placeholder="Életkor (18-65)">
    <input type="email" id="email" placeholder="Email">
    <button onclick="ellenoriz()">Ellenőrzés</button>
    <div class="output" id="output"></div>
  </div>

  <script>
    // Definiáljuk az ellenoriz() függvényt, amely az adatellenőrzést végzi
    function ellenoriz() {


  
 
    // Lekérjük a "name" input mező értékét, és elmentjük a "name" változóba

    // Lekérjük az "age" input mező értékét, majd parseInt()-tel egész számmá alakítjuk (10-es számrendszerrel)

    // Lekérjük az "email" input mező értékét

    // Lekérjük az "output" div-et, ahová majd az eredményüzenetet írjuk


    // Töröljük az előző üzenetet, hogy ne maradjon benne régi adat


    // Ellenőrizzük a nevet: ha nincs megadva, vagy kevesebb mint 3 karakter hosszú

   
    // Ellenőrizzük az életkort: ha nincs megadva, vagy kisebb mint 18, vagy nagyobb mint 65


    // Ellenőrizzük az email címet: ha nincs megadva, vagy nem tartalmazza az '@' karaktert

    // Ha minden ellenőrzés sikeres, elfogadjuk az adatokat

    }
  </script>
</body>
</html>
```

</details>

### switch

<details className="dropdown-task">

  <summary>
  <strong>Pizza feltét</strong>
  
  Ez a kódrészlet egy pizza feltét választó programot mutat be, ahol a felhasználó egy 1 és 4 közötti számot ad meg, és a switch szerkezet alapján a megadott számhoz tartozó pizzafeltét és ár kerül megjelenítésre. A script részben a bevitt értéket parseInt()-tel egész számmá alakítjuk, majd a switch utasítás segítségével ellenőrizzük, melyik case-hez tartozik az érték. Ha a bevitt szám nem esik 1 és 4 közé, a default ág figyelmeztető üzenetet ír ki.
  </summary>

```html
<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Switch Feladat 2 – Pizza feltét választó</title>
  <style>
    /* Flex beállítások a teljes képernyős, középre igazításhoz */
    body {
      margin: 0;
      padding: 0;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: Arial, sans-serif;
      background: linear-gradient(135deg, #43cea2, #185a9d);
    }
    /* A tartalom konténer, mely egy szigetként jelenik meg */
    .container {
      background-color: #fff;
      padding: 20px;
      width: 350px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0,0,0,0.2);
      text-align: center;
    }
    h1 {
      margin-bottom: 0.5rem;
    }
    input[type="number"] {
      width: 60%;
      padding: 8px;
      margin-bottom: 1rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      outline: none;
      text-align: center;
    }
    button {
      background-color: #185a9d;
      color: #fff;
      border: none;
      padding: 8px 15px;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background-color: #11457a;
    }
    #eredmeny {
      margin-top: 1rem;
      font-weight: bold;
    }
  </style>
</head>
<body>

<div class="container">
  <h1>Pizza feltét</h1>
  <p>Válassz egy számot 1-től 4-ig:</p>
  <input type="number" id="feltetInput" placeholder="1-4" />
  <br>
  <button onclick="valasszFeltet()">Kiválasztás</button>
  <div id="eredmeny"></div>
</div>

<script>
function valasszFeltet() {
  // Lekérjük a "feltetInput" mező értékét és egész számmá alakítjuk a parseInt()-tel

  // Lekérjük az "eredmeny" div-et, ahová az eredményüzenetet fogjuk írni


  // A switch szerkezet a bevitt érték alapján választja ki a megfelelő pizzafeltét

      // Ha a bevitt érték 1, akkor ezt az üzenetet írjuk ki

      // Ha a bevitt érték 2, akkor ezt az üzenetet írjuk ki

      // Ha a bevitt érték 3, akkor ezt az üzenetet írjuk ki

      // Ha a bevitt érték 4, akkor ezt az üzenetet írjuk ki

      // Ha a bevitt érték nem esik 1 és 4 közé, hibás választás esetén ezt az üzenetet jelenítjük meg

}
</script>

</body>
</html>
```

</details>



### ternary

<details className="dropdown-task">

  <summary>
  <strong>Páros vagy páratlan?</strong>
  
  A felhasználótól bekérünk egy egész számot, és a program kiírja, hogy páros-e vagy páratlan. Ha a bevitt adat nem értelmezhető számként, akkor figyelmeztető üzenetet jelenítünk meg. Itt is egyetlen ternáris logikát alkalmazunk, némi **rövidzár**-szerű ellenőrzéssel.
  </summary>

```html
<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Ternary Feladat 3 – Páros vagy páratlan</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: Arial, sans-serif;
      background: linear-gradient(135deg, #76b852, #8DC26F);
    }
    .container {
      background-color: #fff;
      width: 350px;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0,0,0,0.2);
      text-align: center;
    }
    h1 {
      margin-bottom: 0.5rem;
    }
    input[type="number"] {
      width: 80%;
      padding: 8px;
      margin-bottom: 1rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      outline: none;
      text-align: center;
    }
    button {
      background-color: #76b852;
      color: #fff;
      border: none;
      padding: 8px 15px;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background-color: #5F9442;
    }
    #eredmeny {
      margin-top: 1rem;
      font-weight: bold;
    }
  </style>
</head>
<body>
<div class="container">
  <h1>Páros vagy páratlan?</h1>
  <p>Írj be egy egész számot:</p>
  <input type="number" id="szamInput" placeholder="Pl. 15" />
  <br>
  <button onclick="vizsgal()">Vizsgálat</button>
  <div id="eredmeny"></div>
</div>

<script>
function vizsgal() {


  // Egész számra alakítás


  // Ternáris operátor:
  // 1) Először megnézzük, hogy valid szám-e
  // 2) Ha igen, eldöntjük, hogy páros vagy páratlan
  // (szam % 2 === 0) ? "páros" : "páratlan"
  // Példa a "láncolt" kifejezésre, beágyazott ternary megoldással.

}
</script>
</body>
</html>
```

</details>
