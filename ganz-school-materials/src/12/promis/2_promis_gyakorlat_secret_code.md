Promis gyakorló - Secret Code

1. Hozz létre egy Promise objektumot, és nevezd el **checkCodePromise**-nak.
2. A Promise konstruktorában definiáld a **resolve** és **reject** függvényeket.
3. Olvasd be a felhasználó által megadott kódot egy változóba **userCode** néven, úgy, hogy vágd le a felesleges szóközöket.
4. Használj egy **setTimeout()** függvényt, amely 2000 ms (2 másodperc) után fut le.
5. A **setTimeout()** belsejében vizsgáld meg, hogy a beolvasott kód megegyezik-e az előre definiált, titkos kóddal (pl. **SECRET_CODE**).
6. Ha a kód helyes, hívd meg a **resolve()** függvényt a „A kód helyes, kinyílt az ajtó!” üzenettel.
7. Ha a kód nem egyezik, hívd meg a **reject()** függvényt a „Helytelen kód. Az ajtó zárva marad.” üzenettel.
8. A Promise objektum után használd a **then()** metódust, hogy sikeres esetben:
   - Frissítsd egy **resultDiv** nevű elem **textContent** értékét a sikerüzenetre.
   - Adj hozzá egy **"success"** CSS osztályt a **resultDiv** elemhez.
9. Használd a **catch()** metódust, hogy hibás esetben:
   - Frissítsd a **resultDiv** **textContent** értékét a hibaüzenetre.
   - Adj hozzá egy **"error"** CSS osztályt a **resultDiv** elemhez.