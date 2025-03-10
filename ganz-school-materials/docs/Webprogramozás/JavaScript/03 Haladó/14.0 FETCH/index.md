---
title: Fetch API
---

...Let's talk about our Savior, Fetch API

# **Fetch API – Definíció**  

A **Fetch API** egy **modern, beépített webes API**, amely lehetővé teszi a **hálózati (HTTP/HTTPS) kérések** egyszerű, aszinkron módon történő kezelését a böngészőkben.  
Ez az API a **Promise-alapú** működésre épül, így támogatja az **asynchronous (aszinkron)** adatlekérést és -küldést, és kiváltja a korábban használt `XMLHttpRequest` technológiát.  

<details className="dropdown-task">

  <summary>
  <strong>Már megint... mi az a HTTP?</strong>
  
  
  </summary>


    Ahogy a **külügyminisztériumok, nagykövetségek** szabályok szerint kommunikálnak egymással (pl. diplomáciai nyelven, hivatalos csatornákon), **úgy a számítógépek, szerverek és böngészők is a HTTP szabályai szerint beszélgetnek**.  

    #### Tehát leegyszerűsítve:  
    **A HTTP az internet "diplomáciai nyelve", amely meghatározza, hogyan kérhetnek és küldhetnek adatokat a gépek egymás között.**



    #### Képzeld el így:  

    - Az **internet a világ**.  
    - A **böngésző (pl. Chrome)** az egyik ország, a **szerver (pl. Google szerverei)** a másik ország.  
    - A HTTP pedig az a **szabályrendszer**, amely előírja, hogyan küldhetnek egymásnak levelet, kérést, választ.  
    - Ha nincs HTTP, nem értenék egymást.  

  </details>


  <details className="dropdown-task">

  <summary>
  <strong>Fuh, de rég volt, mik is azok az API-k?</strong>
  

  </summary>




Mi az az API?

Az **API** (Application Programming Interface, magyarul **alkalmazásprogramozási interfész**) egy **szabály- és eszközkészlet**, amely lehetővé teszi, hogy **különböző programok, alkalmazások, rendszerek kommunikáljanak** egymással.  

**Egyszerűbben:**
- Olyan **kapcsolódási pont**, amin keresztül egy program **adatot kérhet, küldhet, vagy műveleteket hajthat végre** egy másik programban, rendszerben.  
- Az API **leírja, hogyan kérhetünk adatot**, és **milyen választ kapunk vissza**.



**Mire jó az API?**
**Különböző rendszerek összekapcsolása** (pl. egy weboldal és adatbázis között).  
**Adatküldés és adatlekérés** (pl. időjárás, pénzügyi adatok, felhasználói adatok lekérése).  
**Szolgáltatások elérése** (pl. Google Maps térkép beágyazása egy weboldalra).  
**Más programok funkcióinak elérése** (pl. fizetés PayPal-lal, Facebook belépés).



**API működésének alapelve:**

**Kliens (pl. böngésző, app)** küld egy **kérést** az API-nak (pl. "Add meg a mai időjárást!").
Az **API** továbbítja ezt a kérést a megfelelő rendszernek (pl. időjárás-adatbázis).
A rendszer válaszol az API-n keresztül (pl. "Ma 12°C és napos idő van").
A kliens megkapja az adatot és megjeleníti.


**Példa az API használatára**:

Képzeld el, hogy van egy weboldal, ami mutatja az időjárást. A weboldal **nem maga tárolja az időjárási adatokat**, hanem **elküld egy kérést egy időjárás API-hoz**, amely visszaadja a friss adatokat.


> Az API egy olyan rendszer, amely lehetővé teszi, hogy különböző szoftverek **egymással kommunikáljanak és adatot cseréljenek**.



  </details>

#### **Fő jellemzők**:
- **HTTP-kérések** (pl. GET, POST, PUT, DELETE) küldése és válaszok kezelése.  
- **Aszinkron működés** a Promise-ok segítségével.  
- Támogatja a **JSON** típusú válaszok feldolgozását.  
- Letisztult, egyszerű szintaxis, amely megkönnyíti a REST API-k hívását.  
- A legtöbb modern böngészőben natívan elérhető.  

#### **Példa használat**:  
```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Hiba:', error));
```


## Mire való?

A `fetch()` segítségével például:

- API-kból adatokat kérhetünk le (GET).
- Adatokat küldhetünk szerverre (POST, PUT, DELETE stb.).
- Távoli forrásból származó tartalmat (pl. JSON vagy szöveg) tudunk kezelni.

## Hogyan épül fel?

Alap szintaxis:

```javascript
fetch(URL, options)
```

- **URL**: a szerver címe (vagy API végpont), ahová a kérést küldjük.
- **options** (opcionális): tartalmazza a kérés beállításait (pl. HTTP metódus, fejléc, body).
#### Hogyan néz ki egy egyszerű fetch kérés?

Egy egyszerű `fetch()` használat így néz ki alap JavaScript-tel, Promisek használatával:

```javascript
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json()) // JSON-választ átalakítjuk JavaScript objektummá
  .then(data => {
    console.log(data); // Kiírjuk a kapott adatokat
  })
  .catch(error => {
    console.error('Hiba történt:', error); // hibakezelés
  });
```


#### Példa részletesebb `fetch()` hívásra opciók használatával:

```javascript
fetch('https://example.com/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: 'Péter', age: 30 })
})
.then(response => response.json())
.then(data => {
  console.log('A szerver válasza:', data);
})
.catch(error => {
  console.error('Hiba történt:', error);
});
```

---


## fetch konfigurálási lehetőségei (`options` objektum)

A `fetch()` függvény második paraméterként egy konfigurációs objektumot fogadhat, ami többek között tartalmazza:

- **method**: HTTP metódus (GET, POST, PUT, DELETE stb.)
- **headers**: HTTP fejléc információk (pl. tartalomtípus)
- **body**: Küldött adatok (csak POST, PUT, PATCH esetén)
- **mode**: Cors szabályozás
- **credentials**: Cookie-k és hitelesítési adatok kezelése
---
### Mi az a **method** a fetch-ben?

A `method` (magyarul: HTTP metódus vagy kérési metódus) azt határozza meg, hogy a szervernek küldött kérés milyen típusú műveletet akar végrehajtani. Ez jelzi, hogy adatokat szeretnél-e lekérni, létrehozni, módosítani vagy törölni.

**Gyakori HTTP method-ok:**

| Metódus | Funkció | Példa használat                          |
|---------|-----------------------------|-----------------------------------|
| **GET** | Adatok lekérése (letöltése) | felhasználók listájának lekérése  |
| **POST** | Új adatok küldése (feltöltése) | új felhasználó regisztrációja |
| **PUT** | Meglévő adatok módosítása | meglévő felhasználó módosítása |
| **DELETE** | Adatok törlése | felhasználó törlése |
| **PATCH** | Meglévő adatok részleges módosítása | egy felhasználó nevének módosítása |

**Példa fetch()-ben a method használatára:**

```javascript
// POST metódussal küldünk adatot
fetch('https://example.com/api/users', {
  method: 'POST',  // HTTP metódus megadása
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: 'Anna', age: 25 })
})
.then(response => response.json())
.then(data => {
  console.log(data);
});
```

- Ha nem adod meg a metódust, alapértelmezetten **GET**-et használ.

<details className="dropdown-task">

  <summary>
  <strong>GET – Adatok lekérése (pl. felhasználók listájának lekérése)</strong>
  
  </summary>

  ```js
  // GET metódussal adatot kérünk le (pl. felhasználók listája)
    fetch('https://example.com/api/users', {
      method: 'GET'  // Nem muszáj kiírni, mert alapértelmezett a GET
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);  // Itt kapjuk vissza a felhasználók listáját
    });
```



  </details>

  <details className="dropdown-task">

  <summary>
  <strong>POST – Új adat küldése (pl. új felhasználó regisztrációja)</strong>
  
  </summary>

    ```js
          // POST metódussal új adatot küldünk (pl. új felhasználó)
      fetch('https://example.com/api/users', {
        method: 'POST',  // Küldés
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: 'Anna', age: 25 })  // Új felhasználó adatai
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);  // A szerver válasza (pl. "Sikeres regisztráció")
      });
    ```
  </details>

  <details className="dropdown-task">

  <summary>
  <strong>PUT – Meglévő adat módosítása (pl. meglévő felhasználó frissítése)</strong>
  
  </summary>

  ```js
      // PUT metódussal meglévő adatot módosítunk (pl. felhasználó adatainak frissítése)
    fetch('https://example.com/api/users/123', {  // 123-as ID-jű felhasználó
      method: 'PUT',  // Módosítás
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: 'Anna Kovács', age: 26 })  // Új adatok
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);  // Frissített felhasználó adatai
    });
  ```
  </details>


  <details className="dropdown-task">

  <summary>
  <strong>DELETE – Adat törlése (pl. felhasználó törlése)</strong>
  
  </summary>

  ```js
  // DELETE metódussal adatot törlünk (pl. felhasználó törlése)
fetch('https://example.com/api/users/123', {  // 123-as ID-jű felhasználó
  method: 'DELETE'  // Törlés
})
.then(response => response.json())
.then(data => {
  console.log(data);  // Válasz (pl. "Felhasználó törölve")
});
  ```
  </details>

---
### **Mi az a `headers` a fetch-ben?**

A **headers** a **fetch** kérés egyik része, amelyben **plusz információkat** adhatsz meg a szervernek a kérésről. Olyan, mint amikor egy **borítékra ráírod**, hogy mit tartalmaz a levél (pl. titkos, gyors, hivatalos).



 **Miért használjuk a headers-t?**

A **headers** segítségével tudod:
- **Közölni a szerverrel**, hogy milyen formátumban küldöd az adatokat (pl. JSON, szöveg, kép).
- **Elfogadni valamilyen válaszformátumot** (pl. "csak JSON-t akarok visszakapni").
- **Hitelesíteni a felhasználót** (pl. token küldése, mint jelszó).
- Speciális beállításokat megadni (pl. CORS, nyelv, titkosítás, egyedi fejléc).



**Hogy néz ki a headers a fetch-ben?**

```javascript
fetch('https://api.example.com/data', {
  method: 'POST', // vagy 'GET', 'PUT', 'DELETE'
  headers: {
    'Content-Type': 'application/json', // Közlöd, hogy JSON-t küldesz
    'Authorization': 'Bearer token123', // Token (ha kell hitelesítés)
    'Accept': 'application/json' // Válaszként JSON-t kérsz
  },
  body: JSON.stringify({ name: 'Peti', age: 30 }) // Ha POST/PUT
});
```


 **Leggyakoribb headers-ek és jelentésük**

| Header neve                     | Jelentése                                                      | Példa érték                          |
|-------------------------------|--------------------------------------------------------------|-------------------------------------|
| `Content-Type`                 | A küldött adatok típusa                                      | `application/json` (JSON adat)       |
| `Accept`                      | Milyen formátumban várod a választ                           | `application/json`                   |
| `Authorization`                | Hitelesítési adat (pl. token, API kulcs)                      | `Bearer abc123`                      |
| `Access-Control-Allow-Origin` | CORS, mely domainekről fogad el kérést                        | `*` (mindenhonnan), vagy konkrét domain |
| `X-Custom-Header`              | Egyedi fejlécek, amit a backend kérhet                        | `ValamiSpeciálisAdat`                |



**Mikor kötelező a headers?**

- **POST, PUT, PATCH** esetén, ha **JSON-t küldesz**, akkor **muszáj** megadni a `Content-Type: application/json` fejlécet, hogy a szerver értse az adatot!
- **Tokenes hitelesítéshez** (pl. bejelentkezett felhasználó) **Authorization** fejléc is kell.
- Ha **csak sima GET kérés**, sokszor **nem kötelező**, de ajánlott pl. az `Accept: application/json`.

---

**Gyakorlati példák**

#### Egyszerű GET kérés:
```javascript
fetch('https://api.example.com/users', {
  method: 'GET',
  headers: {
    'Accept': 'application/json'
  }
});
```

#### POST kérés JSON küldéssel:
```javascript
fetch('https://api.example.com/register', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ username: 'Peti', password: '1234' })
});
```
---
### **Mi az a `body` a fetch-ben?**

A **body** (törzs) a fetch kérésben az **adat**, amit a kliens (te) **elküldesz a szervernek**.  
Olyan, mint amikor **kitöltesz egy űrlapot**, és azt elküldöd valakinek.


**Mikor használjuk a body-t?**

A **body** csak **olyan kéréseknél** van, ahol **adatot küldesz a szervernek**:
| Kérés típusa | Kell body? | Mire használjuk?                      |
|--------------|------------|---------------------------------------|
| GET          | ❌         | Csak lekérés, nem küldünk adatot.     |
| POST         | ✅         | Új adat létrehozása (pl. regisztráció). |
| PUT          | ✅         | Adat módosítása.                      |
| PATCH        | ✅         | Részleges módosítás.                  |
| DELETE       | 🔶 (opcionális) | Törlés (néha küldünk adatot, pl. azonosító). |


**Mit lehet a body-ban küldeni?**

A **body** lehet:
- **JSON (legtöbbször)** → szerver oldalon jól feldolgozható.
- **Egyszerű szöveg (plain text)**.
- **Űrlapadat (FormData)**.
- **Bináris adat (pl. kép, fájl)**.



**Hogy néz ki a body fetch-ben?**

#### Példa JSON küldésre:
```javascript
fetch('https://api.example.com/register', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    username: 'Peti',
    password: '1234'
  })
});
```

👉 **Fontos**:
- **JSON.stringify()** kell, hogy az objektumot JSON szöveggé alakítsd!
- Ha `Content-Type: application/json`, akkor a szerver tudja, hogy **JSON adatot** kap.



**Miért fontos a body?**

- **Adatküldéshez elengedhetetlen**, pl. regisztráció, bejelentkezés, pénzküldés.
- Meghatározza, **hogyan kommunikálsz a szerverrel**.
- A szerver a body tartalmából dönt, **mit csináljon** (pl. regisztráljon, frissítsen adatot).



**Leggyakoribb body típusok és példák**

| Formátum               | Content-Type fejléc                       | Példa (küldött adat)                            |
|-----------------------|-------------------------------------------|-------------------------------------------------|
| JSON                  | `application/json`                        | `{ "username": "Peti", "password": "1234" }`   |
| FormData (űrlap adat) | `multipart/form-data` (automatikus)       | `FormData` objektum (fájl, kép, űrlapmezők)    |
| Plain text (szöveg)   | `text/plain`                             | `"Ez egy sima szöveg"`                         |
| URL encoded (űrlap)  | `application/x-www-form-urlencoded`       | `username=Peti&password=1234`                  |


**Példák különböző body formátumokra**

**JSON**
```javascript
fetch('https://api.example.com/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    username: 'Anna',
    password: 'titkos'
  })
});
```

**Plain text**
```javascript
fetch('https://api.example.com/message', {
  method: 'POST',
  headers: {
    'Content-Type': 'text/plain'
  },
  body: 'Ez itt egy sima szöveges üzenet'
});
```

**FormData** (fájl, űrlap mezők)
```javascript
const formData = new FormData();
formData.append('file', fileInput.files[0]); // fájl
formData.append('username', 'Béla');        // mező

fetch('https://api.example.com/upload', {
  method: 'POST',
  body: formData // NINCS szükség kézzel Content-Type beállításra!
});
```

**URL encoded adat** (régi űrlap formátum)
```javascript
fetch('https://api.example.com/register', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: 'username=Anna&password=1234'
});
```

**Összegzés - mire való a fetch body?**

| Kérdés                                | Válasz                                                |
|---------------------------------------|------------------------------------------------------|
| Mikor kell a body?                     | Ha adatot küldesz (pl. POST, PUT, PATCH).             |
| Mit küldhetek a body-ban?              | JSON, szöveg, FormData, URL-encoded.                  |
| Hogyan működik?                        | A body a kérés "csomagja", amit a szerver feldolgoz. |
| Mi a kapcsolat a header és body között?| A headers-ben megmondod, milyen formátumban van a body.|
| Kell-e body a GET kéréshez?             | **Nem**.                                              |

---
<details className="dropdown-task">

  <summary>
  <strong>CORS</strong>
  
  röviden...
  </summary>
  ## **Mi az a CORS?**

A **CORS** (teljes név: **Cross-Origin Resource Sharing**) egy **biztonsági mechanizmus**, amelyet a böngészők használnak arra, hogy **megakadályozzák, hogy egy weboldal másik domainről (forrásról) érjen el adatokat**.

**Röviden**: 
> **CORS** dönti el, hogy **egy weboldal** (pl. `https://example.com`) **elérhet-e adatokat egy másik szerverről** (pl. `https://api.otherdomain.com`).

---

#### **Mi a probléma, amit a CORS véd ki?**

Képzeld el:
- Van egy oldalad: `https://enbank.com`
- A weboldal fetch-tel adatokat akar kérni: `https://api.moneybank.com/accounts`
- Alapból a böngésző **blokkolja** ezt a kérést, mert **nem ugyanarról a domainről** származnak! (Más "origin", azaz más forrás)

Ez **védelem** a következő támadások ellen:
- **Cross-Site Request Forgery (CSRF)**
- **Adatlopás**
- **Feltört oldalakról érkező kérések**

---

#### **Mikor van szükség CORS-ra?**

- Ha a **frontend (pl. weboldal)** és a **backend (API)** **KÜLÖNBÖZŐ DOMAINEN fut**.

#### Példa:
| Frontend (kliens)                   | Backend (API szerver)            |
|------------------------------------|---------------------------------|
| http://localhost:8000 (weboldal)    | http://localhost:3000 (API)     |
| https://mybank.hu                  | https://api.mybank.hu           |
| https://frontend.com               | https://backend.com             |

Ha ugyanazon domainen fut (pl. frontend és backend is `https://bank.hu`), akkor **nem kell CORS**, mert "same-origin" (azonos forrás).

---

#### **Mi történik, ha nincs jól beállítva a CORS?**

Ha nem engedélyezted a CORS-ot:
- A **böngésző blokkolja** a kérést.
- Hibaüzenetet kapsz a konzolban:
  ```
  Access to fetch at 'http://localhost:3000/data' from origin 'http://localhost:8000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
  ```



#### **Hogyan működik a CORS?**

A szerver (API) a válaszában **fejléceket** küld vissza, amelyek mondják a böngészőnek:  
✅ "Igen, ez a domain kérhet adatokat!"  
❌ "Nem, ezt a domaint nem engedem!"

#### Példa válaszfejléc CORS engedéllyel:
```
Access-Control-Allow-Origin: http://localhost:8000
```

Ez azt mondja: a `http://localhost:8000` domain **kérhet adatokat** ettől a szervertől.
  </details>
---
#### Példák különböző konfigurációkra

#### POST kérés (adatküldés JSON formátumban):

```javascript
fetch('https://example.com/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    username: 'Peter',
    age: 30
  })
})
.then(response => response.json())
.then(data => {
  console.log('Válasz:', data);
})
.catch(error => {
  console.error('Hiba:', error);
});
```

#### DELETE kérés (adat törlése):

```javascript
fetch('https://example.com/api/users/5', {
  method: 'DELETE'
})
.then(response => response.json())
.then(data => {
  console.log('Sikeres törlés:', data);
})
.catch(error => {
  console.error('Hiba történt:', error);
});
```

---

#### Konfigurációs objektum gyakori elemei részletesen:

| Tulajdonság        | Leírás                           | Példa                                     |
|--------------------|----------------------------------|-------------------------------------------|
| `method`           | HTTP metódus                     | `"GET"`, `"POST"`, `"PUT"`, `"DELETE"`    |
| `headers`          | HTTP fejléc                      | `{ "Content-Type": "application/json" }`  |
| `body`             | Küldött adatok                   | `JSON.stringify({ name: 'Anna' })`        |
| `mode`             | CORS-beállítás                   | `"cors"`, `"no-cors"`, `"same-origin"`    |
| `credentials`      | Hitelesítés (cookie) kezelése    | `"include"`, `"same-origin"`, `"omit"`    |
| `cache`            | Böngésző gyorsítótár szabályozása| `"default"`, `"no-cache"`, `"reload"`     |
| `redirect`         | Átirányítás kezelése             | `"follow"`, `"manual"`, `"error"`         |


---


### Mi az a **method** a fetch-ben?

A `method` (magyarul: HTTP metódus vagy kérési metódus) azt határozza meg, hogy a szervernek küldött kérés milyen típusú műveletet akar végrehajtani. Ez jelzi, hogy adatokat szeretnél-e lekérni, létrehozni, módosítani vagy törölni.

#### Gyakori HTTP method-ok:

| Metódus | Funkció | Példa használat                          |
|---------|-----------------------------|-----------------------------------|
| **GET** | Adatok lekérése (letöltése) | felhasználók listájának lekérése  |
| **POST** | Új adatok küldése (feltöltése) | új felhasználó regisztrációja |
| **PUT** | Meglévő adatok módosítása | meglévő felhasználó módosítása |
| **DELETE** | Adatok törlése | felhasználó törlése |
| **PATCH** | Meglévő adatok részleges módosítása | egy felhasználó nevének módosítása |

**Példa fetch()-ben a method használatára:**

```javascript
// POST metódussal küldünk adatot
fetch('https://example.com/api/users', {
  method: 'POST',  // HTTP metódus megadása
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: 'Anna', age: 25 })
})
.then(response => response.json())
.then(data => {
  console.log(data);
});
```

---

## Response objektum fogalmai és metódusai

Amikor a szervertől megérkezik a válasz, egy **Response objektumot** kapsz vissza, amely fontos metódusokkal és tulajdonságokkal rendelkezik:

### Response tulajdonságok:

- **`response.ok`**
  - Boolean érték, igaz, ha státuszkód `200–299` között van.

- **`response.status`**
  - A HTTP státuszkód (például: `200`, `404`, `500`).

- **`response.statusText`**
  - Státusz üzenet (pl. `"OK"`, `"Not Found"`).

- **`response.headers`**
  - A szervertől kapott fejléceket tartalmazza.

- **`response.type`**
  - Válasz típusa (pl.: `"basic"`, `"cors"`, `"error"`).

- **`response.url`**
  - Végső URL, ahonnan válasz érkezett (átirányítás után is).


### Response metódusok:

- **`response.json()`**
  - JSON-formátumú válasz feldolgozása JavaScript objektummá (Promise-t ad vissza).

- **`response.text()`**
  - Szöveges válasz feldolgozása.

- **`response.blob()`**
  - Bináris tartalom, például kép, letöltése.

- **`response.formData()`**
  - Form adatok letöltése (pl. fájlfeltöltésnél).

- **`response.arrayBuffer()`**
  - Nyers bináris adat letöltése.



