---
title: JSON
---

A JSON kifejezésről, felépítéséről és gyakorlati alkalmazásáról viszonylag sokat hallani a modern informatikai környezetben, különösen akkor, ha valaki adatokkal foglalkozik, vagy webes technológiákkal dolgozik. De pontosan mi is az a JSON, mire használjuk, és miért vált ilyen népszerűvé világszerte?



## **Mit jelent az, hogy JSON?**

A „JSON” szó a „JavaScript Object Notation” rövidítése. Ez az elnevezés arra utal, hogy a JSON eredetileg a JavaScript nyelv objektumábrázolási konvencióiból származik. Amikor a JavaScriptet megalkották, egy olyan adatformátumra volt szükség, amely emberileg (és gépileg) egyaránt könnyen olvasható, és főleg egyszerűen feldolgozható. Ennek a szükségletnek az egyik eredménye a JSON, amely mára túlnőtt a JavaScript környezetén, és a legtöbb programozási nyelvben, illetve rendszerszintű folyamatban elterjedt formátummá vált. Ez azt jelenti, hogy ugyan a története és elnevezése a JavaScripttel függ össze, ma már gyakorlatilag önálló, univerzális adatformátumként használják a különböző platformokon és rendszerekben.

<details className="dropdown-task">

  <summary>
  <strong>JSON használata C#, Python és JavaScript nyelvben</strong>
  
  
  </summary>

Íme pár példa JSON adatok kezelésére **C#**, **Python**, és **JavaScript** nyelveken.



 **C# - JSON kezelés `System.Text.Json` használatával**
C#-ban JSON feldolgozásra az **`System.Text.Json`** vagy a **`Newtonsoft.Json`** használatos. Íme egy példa `System.Text.Json`-nal:

```csharp
using System;
using System.Text.Json;
using System.Collections.Generic;

class Program
{
    public class Person
    {
        public string Name { get; set; }
        public int Age { get; set; }
        public List<string> Hobbies { get; set; }
    }

    static void Main()
    {
        // JSON szöveg
        string jsonString = @"{""Name"":""John Doe"", ""Age"":30, ""Hobbies"":[""Reading"",""Gaming""]}";

        // JSON deszerializálása objektummá
        Person person = JsonSerializer.Deserialize<Person>(jsonString);

        Console.WriteLine($"Név: {person.Name}, Kor: {person.Age}");

        // Objektum szerializálása JSON stringgé
        string newJson = JsonSerializer.Serialize(person, new JsonSerializerOptions { WriteIndented = true });
        Console.WriteLine(newJson);
    }
}
```

 **Kimenet:**
```
Név: John Doe, Kor: 30
{
  "Name": "John Doe",
  "Age": 30,
  "Hobbies": [
    "Reading",
    "Gaming"
  ]
}
```

---

 **Python - JSON kezelés `json` modul használatával**
Pythonban a beépített **`json`** modullal lehet JSON-t kezelni:

```python
import json

# JSON adat
json_string = '{"name": "John Doe", "age": 30, "hobbies": ["Reading", "Gaming"]}'

# JSON betöltése Python objektumba
person = json.loads(json_string)

print(f"Név: {person['name']}, Kor: {person['age']}")

# Python objektum JSON-é alakítása
new_json = json.dumps(person, indent=4)
print(new_json)
```

 **Kimenet:**
```
Név: John Doe, Kor: 30
{
    "name": "John Doe",
    "age": 30,
    "hobbies": [
        "Reading",
        "Gaming"
    ]
}
```

---

 **JavaScript - JSON kezelés `JSON.parse()` és `JSON.stringify()` használatával**
JavaScriptben a JSON kezelésére a **`JSON.parse()`** és **`JSON.stringify()`** függvények használatosak:

```javascript
// JSON adat
const jsonString = '{"name": "John Doe", "age": 30, "hobbies": ["Reading", "Gaming"]}';

// JSON parsolása JavaScript objektummá
const person = JSON.parse(jsonString);
console.log(`Név: ${person.name}, Kor: ${person.age}`);

// JavaScript objektum konvertálása JSON stringgé
const newJson = JSON.stringify(person, null, 4);
console.log(newJson);
```

 **Kimenet a konzolon:**
```
Név: John Doe, Kor: 30
{
    "name": "John Doe",
    "age": 30,
    "hobbies": [
        "Reading",
        "Gaming"
    ]
}
```


</details>

## **Mi az a JSON?**

A JSON egy `szöveges` adatcsere-formátum, melyet elsősorban strukturált adatok – például objektumok, listák, kulcs-érték párok – tárolására és továbbítására használunk. Ha megnyitunk egy JSON-fájlt valamilyen szövegszerkesztőben, akkor az emberi szem számára is viszonylag könnyen értelmezhető. Maga a formátum két fő adattípus-struktúrára épül:

1. **Objektum**: Kapcsos zárójelekkel (`{ }`) jelölt rész, amelyben egymástól vesszővel elválasztott kulcs-érték párok vannak. A kulcsok mindig idézőjelek között szerepelnek, az érték pedig lehet string, szám, logikai érték, tömb, objektum vagy épp null. Példa egy objektumra:  
   ```json
   {
     "nev": "Kiss Péter",
     "eletkor": 30,
     "foglalkozas": "fejlesztő"
   }
   ```
   Itt látható, hogy a `nev` kulcs értéke `"Kiss Péter"`, az `eletkor` kulcs értéke `30`, és a `foglalkozas` kulcs értéke `"fejlesztő"`.  

2. **Tömb (array)**: Szögletes zárójelek (`[ ]`) közötti egymástól vesszővel elválasztott elemek sora. Az elemek lehetnek számok, szövegek, objektumok vagy akár további tömbök is. Például egy JSON-tömb lehet így is:  
   ```json
   [
     "alma",
     "körte",
     "banán"
   ]
   ```
   Ez egy tömb három szöveges elemmel. A JSON-formátum lehetőséget ad arra is, hogy tömbökön belül objektumokat tároljunk, így igen összetett adatszerkezeteket is könnyedén meg tudunk jeleníteni szöveges formában.

Összességében tehát a JSON alapvetően a JavaScript-objektumok struktúráját követi, de annyira egyszerű, hogy gyakorlatilag minden programozási nyelv képes beolvasni és kiírni JSON-t különféle könyvtárak segítségével.

## **Mire használjuk a JSON-t?**

A JSON-t elsődlegesen adatok szerver és kliens közötti cseréjére használjuk – például amikor egy weboldal háttérrendszere adatot küld a felhasználó böngészőjének, vagy a böngésző kér információkat a szervertől. Emellett elterjedt az olyan konfigurációs fájlok létrehozásában is, ahol emberi szemmel is érthető módon szeretnénk paramétereket, beállításokat definiálni.

A JSON népszerűsége folyamatosan növekedett a web fejlődésével párhuzamosan, és ma már szinte elengedhetetlen része egy modern fejlesztő eszköztárának. Ezenkívül a mobilalkalmazások is gyakran alkalmazzák a JSON-t, amikor valamilyen külső szolgáltatással kommunikálnak – azaz adatot továbbítanak és kapnak vissza. A JSON egyszerűsége és platformfüggetlensége révén sokkal szerteágazóbb felhasználási köröket is ki tud szolgálni: például telemetriai adatok, érzékelőinformációk vagy éppen szerződésleíró dokumentumok átviteléhez is alkalmas.



<details className="dropdown-task">

  <summary>
  <strong>**Milyen pozitív tulajdonságai vannak?**</strong>
  
  
  </summary>

**Egyszerű és áttekinthető**: A JSON egyik legnagyobb előnye, hogy nagyon egyszerű a szintaxisa. Nem kell bonyolult szabályokat megjegyezni, és nem kell rengeteg segédeszköz sem a formázásához. A JSON-fájlokat elég, ha egy egyszerű szövegszerkesztővel megnézzük, és ha megfelelően használjuk a behúzásokat (indentálást), akkor szinte rögtön látjuk, mely kulcsnak mi az értéke, és melyik objektum melyik tömb része.

**Emberi szemmel is olvasható**: Sokan hasonlítják a JSON-t az XML-hez, amely szintén elterjedt adatleíró nyelv. Bár mindkettőnek megvannak a maga előnyei, a JSON formátum általában rövidebb, letisztultabb, és kevésbé „zajosan” jeleníti meg az adatot. Az XML-el ellentétben a JSON-ban nem kell nyitó- és zárótageket használni minden egyes elemhez, így sokkal kompaktabb. Emiatt, ha JSON-fájlt kell olvasnunk, viszonylag hamar átlátjuk, hogy mit tartalmaz.

**Könnyű feldolgozhatóság**: Mivel a JSON eredendően JavaScript-gyökerekből származik, a JavaScriptben rendkívül egyszerű a kezelése. De mondhatjuk ugyanezt gyakorlatilag bármilyen modern programozási nyelvről is: Python, Java, PHP, C#, Go, Rust és sok más nyelv is rendelkezik beépített vagy könnyen elérhető JSON-bibliotékával. Ezek a könyvtárak lehetővé teszik, hogy a JSON-szöveget automatikusan felparsoljuk (feldolgozzuk), és a programon belül használható, kényelmes adattípusokká (objektumokká, listákká) alakítsuk. Ugyanez visszafelé is működik: a programban található objektumokat, listákat gyorsan és egyszerűen tudjuk JSON-formátumba alakítani, hogy aztán elküldjük, lementsük vagy továbbítsuk.

**Platformfüggetlen formátum**: A JSON nem kötődik egyetlen operációs rendszerhez, programozási nyelvhez vagy keretrendszerhez sem. Ez a nagy fokú rugalmasság hozzájárul ahhoz, hogy különböző, egymástól eltérő rendszerek is könnyedén kommunikáljanak egymással – feltéve, hogy a JSON a közös nevező a köztük áramló adatokat illetően. Egy Pythonban futó szerver például gond nélkül tud JSON-t küldeni egy JavaScript-alapú frontendnek, vagy akár egy mobilalkalmazásnak, amely Kotlin/Swift nyelven íródott. Az adatcsere ezzel olyan egységes formát kap, amelyet minden résztvevő rendszer könnyen megért.

**Kis méret, kevesebb adathasználat**: Ha összehasonlítjuk mondjuk az XML-lel, akkor a JSON jellemzően kevesebb helyet foglal el a hálózaton továbbításkor, hiszen nincsenek olyan bonyolult tagek és struktúrák, mint az XML esetében. Ez fontos lehet olyan alkalmazásoknál, ahol nem szeretnénk túlterhelni a hálózatot, vagy a mobilhasználók adatforgalmát kell minimalizálni.

**Könnyű adaptálhatóság**: Ha új kulcsokat, mezőket kell hozzáadnunk egy JSON-objektumhoz, vagy szeretnénk bizonyos részeket elhagyni, ezt megtehetjük anélkül, hogy más részeket át kellene szerveznünk. Persze mindig érdemes figyelni a kompatibilitásra, de alapvetően a JSON-rendszerek jól tűrik a struktúra változásait, már csak azért is, mert a legtöbb JSON-parsoló egyszerűen figyelmen kívül hagyja az ismeretlen mezőket, vagy alapértelmezett értékeket rendel hozzájuk a kódban.

**Széles körű elterjedtség, élő közösség**: A JSON népszerűsége és elterjedtsége azt is jelenti, hogy rengeteg oktatóanyag, útmutató, gyakorlati példa és nyílt forráskódú eszköz elérhető hozzá. Ha valamilyen feladat megoldásához JSON-kezelést igénylő problémánk van, akkor nagy eséllyel könnyen és gyorsan találunk rá megoldást a neten.

**Gyakorlati példák a JSON mindennapos használatára**

</details>



- **API-kommunikáció**: Legyen szó közösségi média API-ról, időjárás-adatokat szolgáltató API-ról vagy éppen egy pénzügyi rendszerről, nagyon gyakori, hogy a szerver a választ JSON-ban adja vissza. Például:  
  ```json
  {
    "weather": "sunny",
    "temperature": 28,
    "city": "Budapest"
  }
  ```
  Ez az adatszerkezet szinte bármilyen kliensoldali fejlesztési eszközzel könnyen feldolgozható, és cserébe egyszerűen módosítható, kibővíthető.

- **Konfigurációs fájlok**: Sok esetben a szoftverek működését konfigurációs állományok határozzák meg, amelyekben paraméterek, útvonalak, beállítások szerepelnek. Míg régebben inkább ini-fájlokat, XML-t vagy YAML-t használtak, egyre több helyen választják a JSON-t, mert egyértelmű, gyorsan értelmezhető, és számos eszközzel egyszerűen validálható. Például egy webalkalmazás beállításainak leírása a JSON-ban:

  ```json
  {
    "serverPort": 8080,
    "dbConnectionString": "mongodb://localhost:27017/mydb",
    "enableLogging": true
  }
  ```
