---
title: REST API
---

# REST API

## Mi az a REST API?


A REST API egy olyan kifejezés, amely két kulcsfontosságú technológiai fogalom összekapcsolódásából áll: a REST és az API. Ahhoz, hogy teljes mértékben megértsük a REST API jelentését, érdemes külön-külön megvizsgálni ezeket az elemeket, majd azt is, hogy hogyan állnak össze egy egységgé, illetve mikor, hogyan és miért váltak elterjedtté a modern informatikában.

Az **API** betűszó az angol "Application Programming Interface" kifejezésből ered, amely magyarul alkalmazásprogramozási felületet jelent. Az API lényege, hogy egy rendszer, szoftver vagy szolgáltatás meghatározott módon, szabályok mentén lehetőséget biztosít más szoftverek számára az adataihoz vagy funkcióihoz való hozzáférésre. Az API-k célja, hogy a különböző rendszerek közötti kommunikáció strukturált, átlátható és biztonságos módon történjen. Például egy időjárás-alkalmazás nem gyűjti saját maga az időjárási adatokat, hanem lekérdezi őket egy másik rendszerből egy API-n keresztül. Ugyanígy, ha egy weboldalon lehetőség van bejelentkezni Facebook fiókkal, akkor a weboldal egy API-n keresztül kommunikál a Facebook rendszerével.

A **REST** a "Representational State Transfer" rövidítése, amely egy architekturális stílust vagy szemléletet ír le. A REST nem egy konkrét technológia vagy szabvány, hanem egy sor elv és irányelv, amelyet akkor érdemes követni, ha webes szolgáltatásokat tervezünk. A REST legfontosabb jellemzője, hogy az internetes kommunikációt egyszerű, jól érthető és erőforrás-orientált módon szervezi. Ebben a szemléletben minden fontos adatot – például felhasználókat, bejegyzéseket, termékeket – úgy kezelünk, mint egy "erőforrást", amelyet egyedi azonosító (legtöbbször URL) alapján lehet elérni. A REST szemlélet szorosan épít a HTTP protokollra, amely az internet alapja, és kihasználja annak módszereit: például a GET adatlekérésre, a POST új adat létrehozására, a PUT módosításra, a DELETE pedig törlésre szolgál.

Amikor azt mondjuk, hogy valami egy REST API, akkor azt értjük alatta, hogy az adott API a REST architekturális elvek szerint működik. Ez azt jelenti, hogy az API-t használó kliens (például egy mobilalkalmazás vagy webes felület) HTTP-kéréseket küld az API-nak, amely ezeket feldolgozza, majd választ ad – általában valamilyen strukturált formátumban, leggyakrabban JSON-ban.

A REST API-k kialakulása a kétezres évek elejére tehető. Ebben az időszakban az internet egyre dinamikusabbá vált, és egyre több olyan alkalmazás jelent meg, amelynek szüksége volt arra, hogy más szolgáltatások adatait elérje vagy használja. A korábban elterjedt SOAP alapú webszolgáltatások túl bonyolultnak és nehézkesnek bizonyultak, különösen kisebb, gyorsan fejlődő alkalmazások esetén. A REST ezzel szemben egyszerűbb, könnyebben implementálható és jobban illeszkedett a web működéséhez, ezért hamar elterjedt. A REST API-kat elkezdték alkalmazni mindenféle célra: közösségi média integrációhoz, pénzügyi tranzakciókhoz, e-kereskedelemhez, vagy épp IoT eszközök vezérléséhez.

A REST API előnyei közé tartozik, hogy platformfüggetlen: a kliens és a szerver egymástól függetlenül fejleszthető és működtethető, akár teljesen eltérő technológiák alkalmazásával. Ezen kívül skálázható, jól átlátható, és mivel a HTTP protokollra épít, nem szükséges külön könyvtárakat vagy protokollokat bevezetni. A REST API-k a webes fejlesztésben szinte mindenütt jelen vannak: ha egy mobilalkalmazás adatokat tölt be, ha egy adminfelület módosít egy adatbázis-bejegyzést, ha egy weboldalon keresztül képet töltünk fel, ezek mögött szinte biztosan egy REST API áll.

Összefoglalva tehát, a REST API egy olyan rendszer, amely lehetővé teszi, hogy különböző alkalmazások HTTP-n keresztül, jól definiált szabályok szerint kommunikáljanak egymással. Az API biztosítja az interfészt, amin keresztül a kommunikáció zajlik, a REST pedig azokat az elveket adja, amelyek mentén az adatokat strukturáljuk és kezeljük. A REST API-k azért váltak ilyen népszerűvé, mert könnyen implementálhatók, jól illeszkednek az internetes működéshez, és elősegítik a skálázható, moduláris rendszerfejlesztést.


## REST API működése

A **REST (Representational State Transfer)** elv gyakorlati szempontból egy architekturális megközelítés, amely meghatározott szabályrendszert követ az internetes kommunikáció során, elsősorban HTTP protokoll használatával. Bár a REST maga nem egy technológia, hanem egy elvrendszer, gyakorlati alkalmazása meghatározza, hogyan építsünk olyan API-t, amely egyszerű, skálázható és karbantartható. Ennek gyakorlati értelmezése fejlesztőként, rendszertervezőként és felhasználóként is egyaránt fontos.

1. **Erőforrás-orientált szemlélet**

A REST egyik legfontosabb elve, hogy a rendszer minden fontos eleme – például felhasználó, termék, megrendelés – **erőforrásként** jelenik meg. Ezek az erőforrások **URL-címeken keresztül** érhetők el, mintha mindegyik "weboldal" lenne.

Például:

* `/users` – az összes felhasználó
* `/users/42` – a 42-es azonosítójú felhasználó

Az URL-eknek **leíró, hierarchikus és egységes** szerkezetűnek kell lenniük. Nem tartalmazhatnak igéket (`/getAllUsers` helyett `/users`) – hiszen a cselekvést a HTTP metódus hordozza.


2. **HTTP metódusok REST szerint**

A REST kihasználja a HTTP szabványos metódusait. Ezek határozzák meg, hogy **mit akarunk tenni** az adott erőforrással:

| Metódus | Jelentés            | Példa                 | Eredmény                               |
| ------- | ------------------- | --------------------- | -------------------------------------- |
| GET     | Lekérdezés          | `GET /products`       | A termékek listája                     |
| POST    | Létrehozás          | `POST /products`      | Új termék létrehozása                  |
| PUT     | Teljes frissítés    | `PUT /products/12`    | A 12-es termék minden adatának cseréje |
| PATCH   | Részleges frissítés | `PATCH /products/12`  | Csak az ár módosítása                  |
| DELETE  | Törlés              | `DELETE /products/12` | A 12-es termék törlése                 |

Ez a szabályrendszer következetes viselkedést biztosít a kliensek számára: ha egy fejlesztő tudja, hogyan működik egy REST API, akkor egy másik hasonlót is könnyedén használni tud.


3. **Állapotmentesség (Stateless)**

REST-ben minden kérés **önálló**, nem függ az előző vagy következő kéréstől. A szerver **nem tárol állapotot** a kliensről két kérés között. Ez azt jelenti, hogy minden egyes kérésben **minden szükséges információnak** benne kell lennie – például azonosító, jogosultság, adat.

Ez leegyszerűsíti a skálázást: a szerverek között eloszthatók a kérések anélkül, hogy tudniuk kellene egymás állapotáról.


4. **Standard válaszformátum: JSON**

A REST API-k válaszként általában **JSON** formátumot használnak. Ennek oka, hogy a JSON könnyen olvasható, tömör és szinte minden nyelv könnyedén tudja kezelni.

Példa egy `GET /users/1` válaszra:

```json
{
  "id": 1,
  "name": "Anna Kovács",
  "email": "anna.kovacs@example.com"
}
```

Ugyanez vonatkozik a hibakezelésre is. Egy jól megtervezett REST API nem csak egy `500` kódot küld vissza, hanem egy részletes hibaüzenetet is, például:

```json
{
  "error": "InvalidEmailFormat",
  "message": "The provided email address is invalid."
}
```


5. **Egységes erőforrásformátum és konvenciók**

A REST-ben az **erőforrások egységes reprezentációval** jelennek meg – ez segít a rendszerek közötti kompatibilitás fenntartásában. Egy `User` objektum mindenhol ugyanazt a szerkezetet használja, függetlenül attól, hogy a listában van vagy részletezve.

REST-ben nem használunk állapotjelző szavakat az URL-ben, például `/getUser`, `/deleteProduct`. Ehelyett mindig az erőforrást nevezzük meg, és a HTTP metódus határozza meg a műveletet.

---

## Gyakorlati példa

<details className="dropdown-task">

  <summary>
  <strong>REST API GYAKORLATI PÉLDA</strong>
  
    
  </summary>

* az adatok egy `users.json` fájlban tárolódnak,
* a backend szerver **Node.js + Express** alapú,
* a frontend részt HTML, CSS, JS alkotja (egyszerű beviteli űrlappal és lekérdezési funkcióval),
* a REST API támogatja a felhasználók lekérdezését és új felhasználó hozzáadását.

---

📁 Mappastruktúra

```
rest-api-example/
├── server.js
├── users.json
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
```

---

🖥️ 1. `server.js` (Node.js + Express backend)

```js
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

const USERS_FILE = path.join(__dirname, 'users.json');

// GET /api/users – felhasználók lekérése
app.get('/api/users', (req, res) => {
  fs.readFile(USERS_FILE, 'utf-8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Hiba az adatok olvasásakor' });
    res.json(JSON.parse(data));
  });
});

// POST /api/users – új felhasználó hozzáadása
app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Név és e-mail kötelező' });
  }

  fs.readFile(USERS_FILE, 'utf-8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Nem sikerült olvasni az adatokat' });

    const users = JSON.parse(data);
    const newUser = {
      id: Date.now(),
      name,
      email
    };

    users.push(newUser);

    fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2), (err) => {
      if (err) return res.status(500).json({ error: 'Nem sikerült menteni' });
      res.status(201).json(newUser);
    });
  });
});

app.listen(PORT, () => {
  console.log(`Szerver fut a http://localhost:${PORT} címen`);
});
```

---

🧾 2. `users.json` (kezdeti adatfájl)

```json
[]
```

---

🌐 3. `public/index.html`

```html
<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>REST API Management</title>
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap">
</head>
<body>
  <div class="app-container">
    <header class="app-header">
      <div class="header-content">
        <h1>User Management API</h1>
        <p class="subtitle">REST API demonstration with Express.js</p>
      </div>
    </header>

    <main class="main-content">
      <section class="card form-section">
        <h2>Add New User</h2>
        <form id="userForm" class="user-form">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" placeholder="Enter full name" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="Enter email address" required>
          </div>
          <button type="submit" class="btn btn-primary">
            <span class="btn-text">Add User</span>
            <span class="btn-icon">+</span>
          </button>
        </form>
      </section>

      <section class="card users-section">
        <div class="section-header">
          <h2>User List</h2>
          <button id="refreshBtn" class="btn btn-icon" title="Refresh user list">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
            </svg>
          </button>
        </div>
        <div id="userListContainer" class="user-list-container">
          <ul id="userList" class="user-list"></ul>
          <div id="emptyState" class="empty-state">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <p>No users found. Add your first user above.</p>
          </div>
          <div id="loadingState" class="loading-state">
            <div class="spinner"></div>
            <p>Loading users...</p>
          </div>
        </div>
      </section>
    </main>

    <footer class="app-footer">
      <p>REST API Example &copy; 2025</p>
    </footer>
  </div>

  <div id="toast" class="toast">
    <div class="toast-content">
      <span id="toastMessage"></span>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

---

🎨 4. `public/style.css`

```css
:root {
  --primary-color: #4f46e5;
  --primary-hover: #4338ca;
  --secondary-color: #f9fafb;
  --text-color: #1f2937;
  --text-light: #6b7280;
  --border-color: #e5e7eb;
  --success-color: #10b981;
  --error-color: #ef4444;
  --card-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --transition: all 0.2s ease;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background-color: #f3f4f6;
  color: var(--text-color);
  line-height: 1.5;
  min-height: 100vh;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Header Styles */
.app-header {
  background-color: var(--primary-color);
  color: white;
  padding: 2rem 0;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.app-header h1 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1rem;
  opacity: 0.9;
}

/* Main Content Styles */
.main-content {
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .main-content {
    grid-template-columns: 1fr 1fr;
  }
}

/* Card Styles */
.card {
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: var(--card-shadow);
  padding: 1.5rem;
  height: 100%;
}

/* Form Styles */
.form-section h2,
.users-section h2 {
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  color: var(--text-color);
  font-weight: 600;
}

.user-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-color);
}

input {
  padding: 0.75rem 1rem;
  border: 1px solid var(--border-color);
  border-radius: 0.375rem;
  font-size: 1rem;
  transition: var(--transition);
}

input:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.2);
}

/* Button Styles */
.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.btn-primary {
  background-color: var(--primary-color);
  color: white;
}

.btn-primary:hover {
  background-color: var(--primary-hover);
}

.btn-icon {
  padding: 0.5rem;
  background-color: transparent;
  color: var(--text-color);
}

.btn-icon:hover {
  background-color: var(--secondary-color);
}

/* User List Styles */
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.user-list-container {
  position: relative;
  min-height: 200px;
}

.user-list {
  list-style: none;
}

.user-list li {
  padding: 1rem;
  border-radius: 0.375rem;
  background-color: var(--secondary-color);
  margin-bottom: 0.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: var(--transition);
}

.user-list li:hover {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.user-list li .user-info {
  display: flex;
  flex-direction: column;
}

.user-list li .user-name {
  font-weight: 500;
}

.user-list li .user-email {
  font-size: 0.875rem;
  color: var(--text-light);
}

/* Empty and Loading States */
.empty-state,
.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
  color: var(--text-light);
  height: 200px;
}

.empty-state svg,
.loading-state svg {
  margin-bottom: 1rem;
  opacity: 0.5;
}

.loading-state {
  display: none;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(79, 70, 229, 0.2);
  border-radius: 50%;
  border-top-color: var(--primary-color);
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Toast Notification */
.toast {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  transform: translateY(150%);
  transition: transform 0.3s ease;
  z-index: 1000;
}

.toast.show {
  transform: translateY(0);
}

.toast-content {
  background-color: white;
  color: var(--text-color);
  padding: 1rem 1.5rem;
  border-radius: 0.375rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  max-width: 350px;
}

.toast.success .toast-content {
  border-left: 4px solid var(--success-color);
}

.toast.error .toast-content {
  border-left: 4px solid var(--error-color);
}

/* Footer Styles */
.app-footer {
  background-color: white;
  padding: 1.5rem;
  text-align: center;
  color: var(--text-light);
  font-size: 0.875rem;
  border-top: 1px solid var(--border-color);
}

/* Responsive Adjustments */
@media (max-width: 640px) {
  .app-header {
    padding: 1.5rem 0;
  }

  .app-header h1 {
    font-size: 1.5rem;
  }

  .main-content {
    padding: 1.5rem 1rem;
    gap: 1.5rem;
  }

  .card {
    padding: 1.25rem;
  }
}
```

---

⚙️ 5. `public/script.js`

```js
document.addEventListener("DOMContentLoaded", () => {
  // DOM Elements
  const userForm = document.getElementById("userForm")
  const userList = document.getElementById("userList")
  const emptyState = document.getElementById("emptyState")
  const loadingState = document.getElementById("loadingState")
  const refreshBtn = document.getElementById("refreshBtn")
  const toast = document.getElementById("toast")
  const toastMessage = document.getElementById("toastMessage")

  // Show toast notification
  const showToast = (message, type = "success") => {
    toastMessage.textContent = message
    toast.className = `toast show ${type}`

    setTimeout(() => {
      toast.className = "toast"
    }, 3000)
  }

  // Toggle loading state
  const toggleLoading = (isLoading) => {
    if (isLoading) {
      loadingState.style.display = "flex"
      userList.style.display = "none"
      emptyState.style.display = "none"
    } else {
      loadingState.style.display = "none"
      userList.style.display = "block"
    }
  }

  // Fetch and display users
  const fetchUsers = () => {
    toggleLoading(true)

    fetch("/api/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        return response.json()
      })
      .then((users) => {
        toggleLoading(false)

        if (users.length === 0) {
          emptyState.style.display = "flex"
          userList.style.display = "none"
          return
        }

        emptyState.style.display = "none"
        userList.style.display = "block"

        // Clear existing list
        userList.innerHTML = ""

        // Add users to list
        users.forEach((user) => {
          const li = document.createElement("li")

          const userInfo = document.createElement("div")
          userInfo.className = "user-info"

          const userName = document.createElement("span")
          userName.className = "user-name"
          userName.textContent = user.name

          const userEmail = document.createElement("span")
          userEmail.className = "user-email"
          userEmail.textContent = user.email

          userInfo.appendChild(userName)
          userInfo.appendChild(userEmail)
          li.appendChild(userInfo)

          userList.appendChild(li)
        })
      })
      .catch((error) => {
        toggleLoading(false)
        showToast("Failed to load users: " + error.message, "error")
        console.error("Error fetching users:", error)
      })
  }

  // Handle form submission
  userForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nameInput = document.getElementById("name")
    const emailInput = document.getElementById("email")

    const name = nameInput.value.trim()
    const email = emailInput.value.trim()

    if (!name || !email) {
      showToast("Please fill in all fields", "error")
      return
    }

    // Disable form during submission
    const submitBtn = userForm.querySelector('button[type="submit"]')
    submitBtn.disabled = true
    submitBtn.innerHTML = '<div class="spinner" style="width: 20px; height: 20px; margin: 0;"></div>'

    fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        return response.json()
      })
      .then((data) => {
        // Reset form
        userForm.reset()

        // Show success message
        showToast("User added successfully")

        // Refresh user list
        fetchUsers()
      })
      .catch((error) => {
        showToast("Failed to add user: " + error.message, "error")
        console.error("Error adding user:", error)
      })
      .finally(() => {
        // Re-enable form
        submitBtn.disabled = false
        submitBtn.innerHTML = '<span class="btn-text">Add User</span><span class="btn-icon">+</span>'
      })
  })

  // Refresh button handler
  refreshBtn.addEventListener("click", () => {
    fetchUsers()
  })

  // Initial fetch
  fetchUsers()
})
```

---

🚀 Használat

1. Hozd létre a fenti fájlokat.
2. Telepítsd az Express keretrendszert:

```bash
npm init -y
npm install express
```

3. Indítsd el a szervert:

```bash
node server.js
```

4. Nyisd meg a böngészőben: `http://localhost:3000`

---


</details>