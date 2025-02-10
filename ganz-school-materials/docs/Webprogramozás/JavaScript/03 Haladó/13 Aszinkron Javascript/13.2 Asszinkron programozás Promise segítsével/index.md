---
title: Asszinkron programozás Promise segítsével
---

## Út az internet végtelenébe és túl: `Promis`

Az aszinkron programozás célja, hogy a program ne blokkolódjon, amikor olyan időigényes műveleteket kell végrehajtani, mint például hálózati lekérdezések, adatbázis műveletek vagy más, hosszabb ideig futó feladatok. Korábban ennek megoldására elsősorban a callback függvények szolgáltak, melyek segítségével a hosszabb ideig tartó műveletek befejeződése után meghívható volt egy előre definiált függvény.

Például egy egyszerű callback alapú megoldás így nézhetett ki:

```javascript
function adatLekerdez(callback) {
    setTimeout(() => {
        const eredmeny = "Lekért adat";
        callback(eredmeny);
    }, 1000);
}

adatLekerdez((adat) => {
    console.log("Callback függvény hívva:", adat);
});
```

Ebben a példában az `adatLekerdez` függvény egy késleltetett aszinkron műveletet szimulál a `setTimeout` segítségével, majd a callback függvényen keresztül adja vissza az eredményt. Bár az ilyen megoldás működőképesnek bizonyult kisebb feladatok esetén, a komplexebb, egymásba ágyazott aszinkron műveleteknél – amikor egy művelet eredményét felhasználva kell egy másik műveletet elindítani – hamar kialakul a úgynevezett „callback hell”, azaz callback rétegek egymásba ágyazása.

Az ilyen struktúra nehezíti a kód olvashatóságát és karbantarthatóságát, valamint a hibakezelést is bonyolítja. Vegyünk például egy olyan esetet, ahol több aszinkron műveletet kell egymás után végrehajtani:

```javascript
function elsoMuvelet(callback) {
    setTimeout(() => {
        callback(null, "Első eredmény");
    }, 1000);
}

function masodikMuvelet(eredmeny, callback) {
    setTimeout(() => {
        if (!eredmeny) {
            callback("Hiba az első műveletben");
        } else {
            callback(null, eredmeny + " -> Második eredmény");
        }
    }, 1000);
}

function harmadikMuvelet(eredmeny, callback) {
    setTimeout(() => {
        callback(null, eredmeny + " -> Harmadik eredmény");
    }, 1000);
}

elsoMuvelet((hiba, res1) => {
    if (hiba) {
        return console.error("Hiba:", hiba);
    }
    masodikMuvelet(res1, (hiba, res2) => {
        if (hiba) {
            return console.error("Hiba:", hiba);
        }
        harmadikMuvelet(res2, (hiba, res3) => {
            if (hiba) {
                return console.error("Hiba:", hiba);
            }
            console.log("Végső eredmény:", res3);
        });
    });
});
```

Ebben a példában az egymásba ágyazott callback-ek nehezen követhetők és a hibakezelés is minden egyes szinten külön-külön történik, ami növeli a karbantartási kockázatot.

A fenti problémák megoldására került bevezetésre a Promise koncepciója. A Promise egy olyan objektum, amely egy jövőbeli aszinkron művelet eredményét reprezentálja, és két állapotot különböztet meg: a sikeresen teljesült (fulfilled) és a hibával végződött (rejected) állapotot. A Promise-ok használatával a kód szerkezete egységesebbé és áttekinthetőbbé válik, mivel az aszinkron műveleteket láncolt formában kezelhetjük a `.then()` metódus segítségével, a hibákat pedig a `.catch()` metódussal kezelhetjük.

Az előző példát átalakítva Promise alapú megoldássá:

```javascript
function elsoMuvelet() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Első eredmény");
        }, 1000);
    });
}

function masodikMuvelet(eredmeny) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!eredmeny) {
                reject("Hiba az első műveletben");
            } else {
                resolve(eredmeny + " -> Második eredmény");
            }
        }, 1000);
    });
}

function harmadikMuvelet(eredmeny) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(eredmeny + " -> Harmadik eredmény");
        }, 1000);
    });
}

elsoMuvelet()
    .then((res1) => {
        return masodikMuvelet(res1);
    })
    .then((res2) => {
        return harmadikMuvelet(res2);
    })
    .then((res3) => {
        console.log("Végső eredmény:", res3);
    })
    .catch((hiba) => {
        console.error("Hiba történt:", hiba);
    });
```

A fenti Promise alapú megoldás több szempontból is előnyösebb:  
- **Olvashatóság:** A kód lineárisabb felépítése miatt könnyebb követni a műveletek sorrendjét.  
- **Egységes hibakezelés:** A `.catch()` metódus egyetlen ponton kezeli az esetleges hibákat, függetlenül attól, hogy melyik láncszemben történt a hiba.  
- **Könnyű láncolhatóság:** Az aszinkron műveletek láncolása egyszerűen történik, így a komplexebb folyamatok is átláthatóbbak lesznek.

Egy másik hasznos Promise metódus a `Promise.all()`, amely egyszerre több Promise végrehajtását teszi lehetővé. Ez különösen akkor hasznos, ha több egymástól független aszinkron művelet eredményére van szükség, mielőtt tovább lépnénk a kódban:

```javascript
function adatLekerdezes(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url) {
                resolve(`Adat a ${url} URL-ről`);
            } else {
                reject("Hiányzó URL");
            }
        }, 1000);
    });
}

Promise.all([
    adatLekerdezes("https://api.pelda1.hu"),
    adatLekerdezes("https://api.pelda2.hu"),
    adatLekerdezes("https://api.pelda3.hu")
])
.then((eredmenyek) => {
    console.log("Minden adat sikeresen lekérdezve:");
    eredmenyek.forEach((adat, index) => {
        console.log(`Adat ${index + 1}: ${adat}`);
    });
})
.catch((hiba) => {
    console.error("Hiba történt az adatok lekérdezésekor:", hiba);
});
```

Ebben az esetben a `Promise.all()` biztosítja, hogy mindhárom aszinkron művelet sikeresen befejeződjön, mielőtt a `.then()` blokk lefutna. Ha bármelyik művelet hibával végződik, azonnal a `.catch()` ág lép életbe, így az egész folyamat hibakezelése egyszerűbbé válik.

Összefoglalva, az aszinkron programozásban a kezdeti callback függvények egyszerű megoldást nyújtottak, azonban a komplexebb rendszerekben ezek a megoldások nehezen karbantarthatóvá váltak. A Promise-ok bevezetése jelentős előrelépést jelentett, mivel egységes és áttekinthető struktúrát kínálnak az aszinkron műveletek kezelésére, megkönnyítve ezzel a hibák kezelését és a műveletek láncolását. Az itt bemutatott példák szemléltetik, hogy a Promise alapú megközelítés hogyan teszi lehetővé a tisztább, olvashatóbb és karbantarthatóbb kód létrehozását, ami elengedhetetlen a modern szoftverfejlesztésben.


## A promis kialakulása

A **Promise** megjelenése előtt a JavaScriptben az aszinkron műveletek kezelésére leggyakrabban a **callback függvényeket** (visszahívási függvényeket) használták. Ez azonban számos problémát okozott, különösen összetett aszinkron folyamatok esetén.

#### **Mi volt a Promise előtt?**
A Promise előtti időkben a következő módszerek voltak jellemzőek:

**Callback alapú aszinkron műveletek**
   - Az aszinkron műveleteket callback függvényekkel kezelték.
   - Ha több művelet egymásra épült, akkor a callback-ek egymásba ágyazódtak (**callback hell** vagy "pokol"), ami átláthatatlanná és nehezen karbantarthatóvá tette a kódot.

   ```javascript
   function getData(callback) {
       setTimeout(() => {
           callback("Adatok betöltve");
       }, 1000);
   }

   getData(function(result) {
       console.log(result);
   });
   ```

**Callback Hell**
   - Ha egymás után több aszinkron műveletet kellett végrehajtani, akkor az egymásba ágyazott callback-ek miatt a kód kaotikus lett.

   ```javascript
   getUser(userId, function(user) {
       getOrders(user, function(orders) {
           getOrderDetails(orders[0], function(details) {
               console.log(details);
           });
       });
   });
   ```

   - Ez nehezen olvasható és módosítható volt.

**Kezelhetetlen hibák**
   - A callback-eknél a hibakezelés bonyolult volt, mert minden egyes callback függvényben külön kellett kezelni a hibákat.

   ```javascript
   getUser(userId, function(user, error) {
       if (error) {
           console.error("Hiba történt:", error);
           return;
       }
       getOrders(user, function(orders, error) {
           if (error) {
               console.error("Hiba történt:", error);
               return;
           }
           console.log(orders);
       });
   });
   ```

---

#### **Miért volt szükség a Promise-ra?**

A **Promise** bevezetése a JavaScript-ben (ES6 / 2015) egy sokkal tisztább és hatékonyabb megoldást hozott az aszinkron műveletek kezelésére.

**Olvashatóbb és strukturáltabb kód**
   - A callback-ek helyett láncolható `.then()` metódusokat lehet használni.

   ```javascript
   getUser(userId)
       .then(user => getOrders(user))
       .then(orders => getOrderDetails(orders[0]))
       .then(details => console.log(details))
       .catch(error => console.error("Hiba történt:", error));
   ```

**Beépített hibakezelés**
   - A `catch()` segítségével egyszerűbben lehet kezelni a hibákat, nem kell minden callback-ben külön ellenőrizni.

**Egymás után végrehajtható műveletek (`chaining`)**
   - A Promise-k lehetővé teszik, hogy az aszinkron műveletek **egymás után** futtathatók legyenek anélkül, hogy a kód mélyen egymásba ágyazódna.

**Egyszerűbb több aszinkron művelet kezelése**
   - A `Promise.all()` és `Promise.race()` segítségével egyszerre több aszinkron műveletet is kezelhetünk.

   ```javascript
   Promise.all([getUser(userId), getOrders(userId)])
       .then(results => {
           const user = results[0];
           const orders = results[1];
           console.log(user, orders);
       })
       .catch(error => console.error("Hiba történt:", error));
   ```