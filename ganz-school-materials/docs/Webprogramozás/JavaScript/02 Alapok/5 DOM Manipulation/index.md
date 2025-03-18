---
title: DOM Manipulation
---

 DOM Manipulációs műveletek

...in progress


![alt text](../../../../img/cc.webp)






<details className="dropdown-task">

  <summary>
  <strong>hamarosan</strong>
  
    **DOM-manipuláció – Átfogó útmutató** 🚀

A **DOM-manipuláció** a webfejlesztés egyik legfontosabb része, mivel lehetővé teszi, hogy JavaScript segítségével **dinamikusan módosítsuk egy weboldal tartalmát, struktúráját és kinézetét**. Ezt a **Document Object Model (DOM)** segítségével érjük el, amely a HTML-oldal elemeit egy fa struktúraként jeleníti meg.
    
  </summary>


 

---

 **1. Mi az a DOM?**
A DOM egy **hierarchikus modell**, amely a böngésző által a weboldal HTML-kódjából létrehozott objektumszerkezet.

🔹 **HTML kód:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>DOM Manipuláció</title>
</head>
<body>
    <div id="myDiv">Hello, világ!</div>
</body>
</html>
```
🔹 **DOM fa szerkezet:**
```
document
│
├── html
│   ├── head
│   │   └── title
│   ├── body
│       └── div (id="myDiv")
```
A **document** az egész HTML-oldalt reprezentálja, ezen keresztül férünk hozzá az elemekhez JavaScript-ben.

---

 **2. DOM-elemek kiválasztása (Selector-ok)**
A DOM manipuláció első lépése, hogy kiválasztjuk az elemet, amit módosítani akarunk.

 **Kiválasztás ID alapján**
```js
let elem = document.getElementById("myDiv");
console.log(elem.textContent);  // "Hello, világ!"
```

 **Kiválasztás osztály alapján**
```js
let elems = document.getElementsByClassName("myClass");  // Tömbszerű HTML gyűjteményt ad vissza
console.log(elems[0]); 
```

 **Kiválasztás címke alapján**
```js
let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs[0]); 
```

 **Modern módszer: querySelector**
```js
let elem = document.querySelector("myDiv"); // Egy elem kiválasztása
let elems = document.querySelectorAll(".myClass"); // Több elem kiválasztása (NodeList)
```

---

 **3. HTML tartalom módosítása**
Miután kiválasztottuk az elemet, módosíthatjuk annak tartalmát.

 **Szöveg módosítása**
```js
document.getElementById("myDiv").textContent = "Új szöveg!";
```

 **HTML tartalom módosítása**
```js
document.getElementById("myDiv").innerHTML = "<b>Új HTML tartalom</b>";
```
⚠️ **Vigyázat!** Az `innerHTML` használata biztonsági kockázatokat rejthet (XSS támadások lehetősége).

---

 **4. Új elemek létrehozása és hozzáadása**
JavaScript segítségével dinamikusan létrehozhatunk és beilleszthetünk új HTML-elemeket.

 **Új elem létrehozása és hozzáadása**
```js
let newParagraph = document.createElement("p");
newParagraph.textContent = "Ez egy új bekezdés!";
document.body.appendChild(newParagraph);
```

 **Elem beszúrása egy adott helyre**
```js
let container = document.getElementById("myDiv");
let newSpan = document.createElement("span");
newSpan.textContent = "Egy új span!";
container.insertBefore(newSpan, container.firstChild);
```

---

 **5. Elemtulajdonságok módosítása**
A DOM-ban minden elem objektumként létezik, ezért módosíthatjuk annak tulajdonságait.

 **Attribútumok módosítása**
```js
let link = document.getElementById("myLink");
link.setAttribute("href", "https://www.google.com"); // Attribútum beállítása
console.log(link.getAttribute("href"));  // Attribútum lekérése
link.removeAttribute("href");  // Attribútum eltávolítása
```

 **Inline stílusok módosítása**
```js
let div = document.getElementById("myDiv");
div.style.color = "red";
div.style.fontSize = "20px";
```

---

 **6. CSS osztályok kezelése (classList)**
Ahelyett, hogy közvetlenül a `style` tulajdonságot módosítanánk, **jobb gyakorlat** CSS osztályokat kezelni.

 **Osztály hozzáadása**
```js
document.getElementById("myDiv").classList.add("highlight");
```

 **Osztály eltávolítása**
```js
document.getElementById("myDiv").classList.remove("highlight");
```

 **Osztály ki-be kapcsolása (toggle)**
```js
document.getElementById("myDiv").classList.toggle("hidden");
```

---

 **7. Eseménykezelés (Event Handling)**
A DOM-manipuláció egyik legfontosabb része az eseménykezelés.

 **Egyszerű kattintásesemény**
```js
document.getElementById("myButton").addEventListener("click", function() {
    alert("Gombra kattintottál!");
});
```

 **Esemény delegálás (dinamikus elemekhez hasznos)**
```js
document.body.addEventListener("click", function(event) {
    if (event.target.classList.contains("dynamicButton")) {
        alert("Dinamikus gombra kattintottál!");
    }
});
```

---

 **8. Elemtörlés**
 **Elem eltávolítása a DOM-ból**
```js
document.getElementById("myDiv").remove();
```

 **Csak az elem tartalmának törlése**
```js
document.getElementById("myDiv").innerHTML = "";
```

---

 **9. DOM Traversing (DOM bejárása)**
A DOM egy hierarchikus szerkezet, így az elemek között navigálhatunk.

 **Szülő elem elérése**
```js
let parent = document.getElementById("myDiv").parentNode;
```

 **Gyerek elemek elérése**
```js
let children = document.getElementById("myDiv").children;
```

 **Következő és előző elem elérése**
```js
let nextElement = document.getElementById("myDiv").nextElementSibling;
let prevElement = document.getElementById("myDiv").previousElementSibling;
```

---

 **10. AJAX és DOM-manipuláció**
A DOM-manipuláció gyakran együtt jár **AJAX-kérésekkel**, amikor dinamikusan szeretnénk betölteni tartalmat.

 **Egyszerű Fetch API**
```js
fetch("data.json")
    .then(response => response.json())
    .then(data => {
        document.getElementById("myDiv").textContent = data.message;
    })
    .catch(error => console.error("Hiba:", error));
```

---

 **Összegzés**
✔️ A **DOM-manipuláció** lehetővé teszi a HTML-tartalom, stílus és szerkezet **dinamikus módosítását** JavaScript segítségével.  
✔️ A `document.querySelector()` és a `classList.add()` módszerek **modern és hatékony** megoldások.  
✔️ Az **eseménykezelés** és az **AJAX** gyakran együtt jár a DOM-manipulációval.  
✔️ Az elemek létrehozása és törlése **alapvető tudás** interaktív weboldalak fejlesztéséhez.



</details>