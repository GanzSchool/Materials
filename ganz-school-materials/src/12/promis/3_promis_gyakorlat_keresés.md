Készítsd el a következő lépések alapján a kódodat:

1. **Promise objektum létrehozása:**  
   - Hozz létre egy **queryPromise** nevű Promise objektumot a `new Promise()` konstruktor használatával, amely két függvényt fogad: **resolve** és **reject**.

2. **Rekord azonosító beolvasása és ellenőrzése:**  
   - Olvasd be a felhasználó által megadott rekord azonosítót a **recordIdInput** nevű input mezőről.  
   - Távolítsd el a fölösleges szóközöket az értékből, és alakítsd át egész számmá.  
   - Tárold az eredményt egy **recordId** nevű változóban, a **parseInt()** függvény segítségével (használd a 10-es számrendszert).  
   - Ellenőrizd, hogy a **recordId** értéke érvényes szám-e. Ha nem, hívd meg a **reject()** függvényt a „Kérlek, érvényes azonosítót adj meg!” üzenettel, majd szakítsd meg a további végrehajtást.

3. **Aszinkron lekérdezés szimulálása:**  
   - Használj egy olyan mechanizmust, amely 2 másodperces késleltetést szimulál (például **setTimeout()**).  
   - A késleltetés letelte után folytasd a következő lépéssel.

4. **Rekord keresése az adatbázisban:**  
   - Keress meg egy rekordot a **database** nevű tömbben, ahol a rekord **id** értéke megegyezik a **recordId** változóban tárolt értékkel.  
   - Tárold az eredményt egy **record** nevű változóban.  
   - Ha a **record** változó értéket tartalmaz (rekord megtalálható):  
     - Készíts egy formázott szöveget a rekord adataiból, és tárold egy **formatted** nevű változóban. A formátum legyen például:  
       **Név: [record.name]**  
       **Email: [record.email]**  
     - Ezután hívd meg a **resolve()** függvényt, és add át neki a **formatted** változó értékét.
   - Ha a rekord nem található:  
     - Hívd meg a **reject()** függvényt a „Nincs ilyen rekord!” üzenettel.

5. **Eredmény megjelenítése:**  
   - A **queryPromise** után kezeld a Promise sikeres és hibás kimenetelét:  
     - **Sikeres kimenetel esetén:**  
       - Használj egy olyan eljárást, amely a kapott formázott rekord szöveget (**formattedRecord**) azonosítja.  
       - Állítsd be a **resultDiv** nevű elem **textContent** tulajdonságát a **formattedRecord** értékére.  
       - Add hozzá a **resultDiv** elemhez a **"success"** nevű osztályt.
     - **Hibás kimenetel esetén:**  
       - Használj egy olyan eljárást, amely a kapott hibaüzenetet (**errorMsg**) azonosítja.  
       - Állítsd be a **resultDiv** nevű elem **textContent** tulajdonságát az **errorMsg** értékére.  
       - Add hozzá a **resultDiv** elemhez az **"error"** nevű osztályt.
