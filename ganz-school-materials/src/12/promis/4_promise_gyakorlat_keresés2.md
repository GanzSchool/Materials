## Adatbázis Keresés

1. **Promise objektum létrehozása:**
   - Hozz létre egy **searchPromise** nevű Promise objektumot, amely két paraméterrel (egy sikeres és egy hibás végrehajtás kezelésére szolgáló függvénnyel) működik.

2. **Keresési kifejezés beolvasása és ellenőrzése:**
   - Olvasd be a felhasználó által megadott keresési kifejezést a **searchInput** nevű bemeneti mezőről.
   - Tárold ezt az értéket egy **query** nevű változóban, gondoskodva arról, hogy a fölösleges szóközök eltávolításra kerüljenek, és a kifejezés kisbetűs legyen.
   - Ellenőrizd, hogy a **query** változó nem üres-e. Ha üres, akkor add vissza a „Kérlek, adj meg keresési kifejezést!” üzenetet, és szakítsd meg a további végrehajtást.

3. **Aszinkron keresési folyamat szimulálása:**
   - Indíts el egy olyan aszinkron műveletet, amely 2 másodperc késleltetéssel működik.
   - A késleltetés után folytasd a következő lépéssel.

4. **Rekordok keresése az adatbázisban:**
   - Keress az **database** nevű tömbben minden olyan rekordot, amelynek a **name** tulajdonsága kisbetűs alakban tartalmazza a **query** értéket. Tárold az eredményt egy **matches** nevű változóban.
   - Ha a **matches** változóban legalább egy rekord található:
     - Hozz létre egy **formatted** nevű változót, amelynek az elején a „Találatok:” szöveg szerepel.
     - Minden megtalált rekord esetében egészítsd ki a **formatted** változó tartalmát úgy, hogy hozzáadod a rekord **id**-ját, **name**-jét és **email** címét egy-egy új sorban.
     - Add vissza a **formatted** változóban tárolt szöveget.
   - Ha a **matches** tömb üres, add vissza a „Nincs találat a megadott kifejezésre.” üzenetet.

5. **Eredmény megjelenítése:**
   - A **searchPromise** után kezeld a sikeres eredményt úgy, hogy a kapott szöveget jelenítsd meg a **resultDiv** nevű elem **textContent** tulajdonságában, és alkalmazz a **resultDiv**-hez egy „success” stílust.
   - Hibás eredmény esetén jelenítsd meg a hibaüzenetet a **resultDiv** **textContent** tulajdonságában, és alkalmazz a **resultDiv**-hez egy „error” stílust.

