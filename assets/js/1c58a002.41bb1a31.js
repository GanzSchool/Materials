"use strict";(self.webpackChunkganz_school_materials=self.webpackChunkganz_school_materials||[]).push([[2273],{6230:(e,l,t)=>{t.r(l),t.d(l,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>k});const a=JSON.parse('{"id":"gyakorlat/ANYAG/04","title":"4","description":"A liter\xe1lok a programoz\xe1si nyelvekben olyan fix, k\xf6zvetlen\xfcl a k\xf3dban megadott \xe9rt\xe9kek, amelyeket v\xe1ltoz\xf3khoz rendel\xfcnk vagy k\xf6zvetlen\xfcl haszn\xe1lunk m\u0171veletekben. A JavaScript-ben a liter\xe1lok k\xfcl\xf6nb\xf6z\u0151 t\xedpus\xfa adatokat k\xe9pviselnek, mint p\xe9ld\xe1ul sz\xe1mok, sz\xf6vegek, logikai \xe9rt\xe9kek, objektumok \xe9s t\xf6mb\xf6k. Ezek az \xe9rt\xe9kek nem v\xe1ltoznak a fut\xe1s sor\xe1n, hacsak explicit m\xf3don nem m\xf3dos\xedtjuk \u0151ket (p\xe9ld\xe1ul objektumok \xe9s t\xf6mb\xf6k eset\xe9ben).","source":"@site/docs/gyakorlat/ANYAG/04.mdx","sourceDirName":"gyakorlat/ANYAG","slug":"/gyakorlat/ANYAG/04","permalink":"/Materials/docs/gyakorlat/ANYAG/04","draft":false,"unlisted":false,"editUrl":"https://github.com/GanzSchool/Materials/edit/main/docs/gyakorlat/ANYAG/04.mdx","tags":[],"version":"current","frontMatter":{"title":"4"}}');var n=t(4848),s=t(8453);const r={title:4},i=void 0,o={},k=[{value:"Liter\xe1lok T\xedpusai a JavaScript-ben",id:"liter\xe1lok-t\xedpusai-a-javascript-ben",level:3},{value:"1. Sz\xe1m Liter\xe1lok (Numeric Literals)",id:"1-sz\xe1m-liter\xe1lok-numeric-literals",level:4},{value:"2. Sz\xf6veg Liter\xe1lok (String Literals)",id:"2-sz\xf6veg-liter\xe1lok-string-literals",level:4},{value:"3. Logikai Liter\xe1lok (Boolean Literals)",id:"3-logikai-liter\xe1lok-boolean-literals",level:4},{value:"4. Specialit\xe1s Liter\xe1lok",id:"4-specialit\xe1s-liter\xe1lok",level:4},{value:"a. <code>null</code>",id:"a-null",level:5},{value:"b. <code>undefined</code>",id:"b-undefined",level:5},{value:"5. Objektum Liter\xe1lok (Object Literals)",id:"5-objektum-liter\xe1lok-object-literals",level:4},{value:"6. T\xf6mb Liter\xe1lok (Array Literals)",id:"6-t\xf6mb-liter\xe1lok-array-literals",level:4},{value:"7. RegEx Liter\xe1lok (Regular Expression Literals)",id:"7-regex-liter\xe1lok-regular-expression-literals",level:4},{value:"Liter\xe1lok Haszn\xe1lata",id:"liter\xe1lok-haszn\xe1lata",level:3},{value:"Liter\xe1lok El\u0151nyei",id:"liter\xe1lok-el\u0151nyei",level:3},{value:"Liter\xe1lok Figyelembe V\xe9tele",id:"liter\xe1lok-figyelembe-v\xe9tele",level:3},{value:"\xd6sszefoglal\xe1s",id:"\xf6sszefoglal\xe1s",level:3},{value:"Haszn\xe1lati \xdatmutat\xf3",id:"haszn\xe1lati-\xfatmutat\xf3",level:2},{value:"1. Dokument\xe1ci\xf3s F\xe1jl Elhelyez\xe9se",id:"1-dokument\xe1ci\xf3s-f\xe1jl-elhelyez\xe9se",level:3},{value:"2. Sidebar Konfigur\xe1ci\xf3",id:"2-sidebar-konfigur\xe1ci\xf3",level:3},{value:"3. Projekt \xdajra\xe9p\xedt\xe9se",id:"3-projekt-\xfajra\xe9p\xedt\xe9se",level:3},{value:"4. Hibakeres\xe9s",id:"4-hibakeres\xe9s",level:3}];function d(e){const l={code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(l.p,{children:["A ",(0,n.jsx)(l.strong,{children:"liter\xe1lok"})," a programoz\xe1si nyelvekben olyan fix, k\xf6zvetlen\xfcl a k\xf3dban megadott \xe9rt\xe9kek, amelyeket v\xe1ltoz\xf3khoz rendel\xfcnk vagy k\xf6zvetlen\xfcl haszn\xe1lunk m\u0171veletekben. A JavaScript-ben a liter\xe1lok k\xfcl\xf6nb\xf6z\u0151 t\xedpus\xfa adatokat k\xe9pviselnek, mint p\xe9ld\xe1ul sz\xe1mok, sz\xf6vegek, logikai \xe9rt\xe9kek, objektumok \xe9s t\xf6mb\xf6k. Ezek az \xe9rt\xe9kek nem v\xe1ltoznak a fut\xe1s sor\xe1n, hacsak explicit m\xf3don nem m\xf3dos\xedtjuk \u0151ket (p\xe9ld\xe1ul objektumok \xe9s t\xf6mb\xf6k eset\xe9ben)."]}),"\n",(0,n.jsx)(l.h3,{id:"liter\xe1lok-t\xedpusai-a-javascript-ben",children:"Liter\xe1lok T\xedpusai a JavaScript-ben"}),"\n",(0,n.jsx)(l.h4,{id:"1-sz\xe1m-liter\xe1lok-numeric-literals",children:"1. Sz\xe1m Liter\xe1lok (Numeric Literals)"}),"\n",(0,n.jsx)(l.p,{children:"Sz\xe1mok k\xf6zvetlen\xfcl a k\xf3dban megadhat\xf3k, legyenek azok eg\xe9sz sz\xe1mok vagy val\xf3s sz\xe1mok."}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-javascript",children:"let eg\xe9szSz\xe1m = 42;        // Eg\xe9sz sz\xe1m liter\xe1l\r\nlet val\xf3sSz\xe1m = 3.14;     // Val\xf3s sz\xe1m liter\xe1l\r\nlet negat\xedvSz\xe1m = -7;      // Negat\xedv sz\xe1m liter\xe1l\r\nlet exponenci\xe1lisSz\xe1m = 1.2e3; // Exponenci\xe1lis sz\xe1m liter\xe1l (1.2 \xd7 10\xb3 = 1200)\n"})}),"\n",(0,n.jsx)(l.h4,{id:"2-sz\xf6veg-liter\xe1lok-string-literals",children:"2. Sz\xf6veg Liter\xe1lok (String Literals)"}),"\n",(0,n.jsxs)(l.p,{children:["Sz\xf6vegek id\xe9z\u0151jelek k\xf6z\xf6tt vannak megadva. JavaScript t\xe1mogatja a dupla (",(0,n.jsx)(l.code,{children:'" "'}),"), egyszeres (",(0,n.jsx)(l.code,{children:"' '"}),") \xe9s template liter\xe1lokat (backtick-ekkel: ",(0,n.jsx)(l.code,{children:"` `"}),")."]}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-javascript",children:"let duplaId\xe9z\u0151jel = \"Hello, World!\"; // Dupla id\xe9z\u0151jel liter\xe1l\r\nlet egyszeresId\xe9z\u0151jel = 'Hello, World!'; // Egyszeres id\xe9z\u0151jel liter\xe1l\r\nlet templateLiteral = `Hello, ${name}!`; // Template liter\xe1l, v\xe1ltoz\xf3 interpol\xe1ci\xf3val\n"})}),"\n",(0,n.jsx)(l.h4,{id:"3-logikai-liter\xe1lok-boolean-literals",children:"3. Logikai Liter\xe1lok (Boolean Literals)"}),"\n",(0,n.jsxs)(l.p,{children:["K\xe9t lehets\xe9ges \xe9rt\xe9kkel rendelkeznek: ",(0,n.jsx)(l.code,{children:"true"})," (igaz) \xe9s ",(0,n.jsx)(l.code,{children:"false"})," (hamis)."]}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-javascript",children:"let igaz = true;    // Boolean liter\xe1l\r\nlet hamis = false;  // Boolean liter\xe1l\n"})}),"\n",(0,n.jsx)(l.h4,{id:"4-specialit\xe1s-liter\xe1lok",children:"4. Specialit\xe1s Liter\xe1lok"}),"\n",(0,n.jsxs)(l.h5,{id:"a-null",children:["a. ",(0,n.jsx)(l.code,{children:"null"})]}),"\n",(0,n.jsxs)(l.p,{children:["A ",(0,n.jsx)(l.code,{children:"null"})," egy speci\xe1lis \xe9rt\xe9k, amely azt jelenti, hogy nincs \xe9rt\xe9k. Gyakran haszn\xe1lj\xe1k arra, hogy sz\xe1nd\xe9kosan \xfcres \xe9rt\xe9ket jel\xf6ljenek."]}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-javascript",children:"let nincsErtek = null; // Null liter\xe1l\n"})}),"\n",(0,n.jsxs)(l.h5,{id:"b-undefined",children:["b. ",(0,n.jsx)(l.code,{children:"undefined"})]}),"\n",(0,n.jsxs)(l.p,{children:["Az ",(0,n.jsx)(l.code,{children:"undefined"})," azt jelenti, hogy egy v\xe1ltoz\xf3 deklar\xe1lva lett, de m\xe9g nem kapott \xe9rt\xe9ket. Automatikusan ker\xfcl hozz\xe1rendel\xe9sre bizonyos esetekben."]}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-javascript",children:"let nincsHozzarendelve;\r\nconsole.log(nincsHozzarendelve); // undefined\n"})}),"\n",(0,n.jsx)(l.h4,{id:"5-objektum-liter\xe1lok-object-literals",children:"5. Objektum Liter\xe1lok (Object Literals)"}),"\n",(0,n.jsx)(l.p,{children:"Objektumokat kapcsos z\xe1r\xf3jelek k\xf6z\xf6tt adhatunk meg, ahol a tulajdons\xe1gok neve-\xe9rt\xe9k p\xe1rokat alkotnak."}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-javascript",children:'let szemely = {\r\n    nev: "Kov\xe1cs P\xe9ter", // Tulajdons\xe1g n\xe9v: \xe9rt\xe9k\r\n    kor: 30,\r\n    isTanul\xf3: false\r\n};\n'})}),"\n",(0,n.jsx)(l.h4,{id:"6-t\xf6mb-liter\xe1lok-array-literals",children:"6. T\xf6mb Liter\xe1lok (Array Literals)"}),"\n",(0,n.jsx)(l.p,{children:"T\xf6mb\xf6ket sz\xf6gletes z\xe1r\xf3jelek k\xf6z\xf6tt adhatunk meg, \xe9s elemeik vessz\u0151vel vannak elv\xe1lasztva."}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-javascript",children:'let szamok = [1, 2, 3, 4, 5]; // T\xf6mb liter\xe1l\r\nlet nevek = ["Anna", "B\xe9la", "Cecil"]; // T\xf6mb liter\xe1l\n'})}),"\n",(0,n.jsx)(l.h4,{id:"7-regex-liter\xe1lok-regular-expression-literals",children:"7. RegEx Liter\xe1lok (Regular Expression Literals)"}),"\n",(0,n.jsx)(l.p,{children:"Regul\xe1ris kifejez\xe9seket perjelek k\xf6z\xf6tt adhatunk meg, opcion\xe1lisan z\xe1szl\xf3kkal."}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-javascript",children:"let regex = /ab+c/i; // Regul\xe1ris kifejez\xe9s liter\xe1l, 'i' z\xe1szl\xf3val (nem \xe9rz\xe9keny kis- \xe9s nagybet\u0171kre)\n"})}),"\n",(0,n.jsx)(l.h3,{id:"liter\xe1lok-haszn\xe1lata",children:"Liter\xe1lok Haszn\xe1lata"}),"\n",(0,n.jsx)(l.p,{children:"A liter\xe1lokat v\xe1ltoz\xf3khoz rendelhetj\xfck, f\xfcggv\xe9nyek argumentumak\xe9nt haszn\xe1lhatjuk, vagy k\xf6zvetlen\xfcl m\u0171veletekben is felhaszn\xe1lhatjuk."}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-javascript",children:'// V\xe1ltoz\xf3 deklar\xe1l\xe1sa liter\xe1lokkal\r\nlet szam = 10;\r\nlet szoveg = "Ez egy sz\xf6veg.";\r\nlet igazHamis = true;\r\n\r\n// Objektum \xe9s t\xf6mb l\xe9trehoz\xe1sa liter\xe1lokkal\r\nlet autok = [\r\n    { marka: "Toyota", modell: "Corolla" },\r\n    { marka: "Honda", modell: "Civic" }\r\n];\r\n\r\n// F\xfcggv\xe9ny h\xedv\xe1sa liter\xe1lokkal\r\nconsole.log("Sz\xe1m:", szam);\r\nconsole.log("Sz\xf6veg:", szoveg);\r\nconsole.log("Igaz vagy Hamis:", igazHamis);\n'})}),"\n",(0,n.jsx)(l.h3,{id:"liter\xe1lok-el\u0151nyei",children:"Liter\xe1lok El\u0151nyei"}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.strong,{children:"Egyszer\u0171s\xe9g:"})," K\xf6nnyen olvashat\xf3k \xe9s \xedrhat\xf3k k\xf6zvetlen\xfcl a k\xf3dban."]}),"\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.strong,{children:"Tisztas\xe1g:"})," K\xf6zvetlen \xe9rt\xe9keket haszn\xe1lnak, ami cs\xf6kkenti a hibalehet\u0151s\xe9geket."]}),"\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.strong,{children:"Hat\xe9konys\xe1g:"})," Gyorsan feldolgozhat\xf3k a JavaScript motorok \xe1ltal."]}),"\n"]}),"\n",(0,n.jsx)(l.h3,{id:"liter\xe1lok-figyelembe-v\xe9tele",children:"Liter\xe1lok Figyelembe V\xe9tele"}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsxs)(l.li,{children:["\n",(0,n.jsxs)(l.p,{children:[(0,n.jsx)(l.strong,{children:"Immutabilit\xe1s:"})," Bizonyos liter\xe1lok, mint a sz\xe1mok \xe9s sztringek, immutable (v\xe1ltoztathatatlan) \xe9rt\xe9kek. Az objektumok \xe9s t\xf6mb\xf6k azonban mutable (v\xe1ltoztathat\xf3) strukt\xfar\xe1k, m\xe9g akkor is, ha a referenci\xe1juk liter\xe1lk\xe9nt van megadva."]}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-javascript",children:'let szoveg = "Hello";\r\nszoveg[0] = "h"; // Nem v\xe1ltoztatja meg a sztringet, mert az immutable\r\n\r\nlet tomb = [1, 2, 3];\r\ntomb[0] = 99; // A t\xf6mb m\xf3dosul, mert a t\xf6mb mutable\n'})}),"\n"]}),"\n",(0,n.jsxs)(l.li,{children:["\n",(0,n.jsxs)(l.p,{children:[(0,n.jsx)(l.strong,{children:"T\xedpusok Kevered\xe9se:"})," Egy liter\xe1l t\xf6bbf\xe9le t\xedpus\xfa \xe9rt\xe9ket is tartalmazhat, k\xfcl\xf6n\xf6sen az objektumok \xe9s t\xf6mb\xf6k eset\xe9ben, amelyek m\xe1s objektumokat \xe9s t\xf6mb\xf6ket is tartalmazhatnak."]}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-javascript",children:'let vegyes = {\r\n    szam: 42,\r\n    szoveg: "Hello",\r\n    tomb: [true, false, null],\r\n    objektum: { kulcs: "\xe9rt\xe9k" }\r\n};\n'})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(l.h3,{id:"\xf6sszefoglal\xe1s",children:"\xd6sszefoglal\xe1s"}),"\n",(0,n.jsx)(l.p,{children:"A liter\xe1lok alapvet\u0151 elemei a JavaScript nyelvnek, amelyek lehet\u0151v\xe9 teszik, hogy k\xf6zvetlen\xfcl \xe9s egyszer\u0171en megadjuk az adatokat a programban. Meg\xe9rt\xe9s\xfck elengedhetetlen a nyelv hat\xe9kony haszn\xe1lat\xe1hoz \xe9s a tiszta, olvashat\xf3 k\xf3d \xedr\xe1s\xe1hoz."}),"\n",(0,n.jsx)(l.hr,{}),"\n",(0,n.jsx)(l.h2,{id:"haszn\xe1lati-\xfatmutat\xf3",children:"Haszn\xe1lati \xdatmutat\xf3"}),"\n",(0,n.jsx)(l.h3,{id:"1-dokument\xe1ci\xf3s-f\xe1jl-elhelyez\xe9se",children:"1. Dokument\xe1ci\xf3s F\xe1jl Elhelyez\xe9se"}),"\n",(0,n.jsxs)(l.p,{children:["Gy\u0151z\u0151dj meg r\xf3la, hogy a fenti tartalmat egy ",(0,n.jsx)(l.code,{children:".mdx"})," f\xe1jlba mented a ",(0,n.jsx)(l.code,{children:"docs"})," mapp\xe1n bel\xfcl. P\xe9ld\xe1ul, nevezz\xfck el ",(0,n.jsx)(l.code,{children:"bevezeto.mdx"}),"-nek."]}),"\n",(0,n.jsx)(l.h3,{id:"2-sidebar-konfigur\xe1ci\xf3",children:"2. Sidebar Konfigur\xe1ci\xf3"}),"\n",(0,n.jsxs)(l.p,{children:["Nyisd meg a ",(0,n.jsx)(l.code,{children:"sidebars.js"})," (vagy ",(0,n.jsx)(l.code,{children:"sidebar.js"}),") f\xe1jlt, \xe9s gy\u0151z\u0151dj meg r\xf3la, hogy a ",(0,n.jsx)(l.code,{children:"bevezeto"})," dokumentumot helyesen hivatkozod. P\xe9lda:"]}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-javascript",children:"module.exports = {\r\n  docs: [\r\n    {\r\n      type: 'category',\r\n      label: 'Bevezet\xe9s',\r\n      items: ['bevezeto'],\r\n    },\r\n    // ... egy\xe9b kateg\xf3ri\xe1k\r\n  ],\r\n};\n"})}),"\n",(0,n.jsx)(l.h3,{id:"3-projekt-\xfajra\xe9p\xedt\xe9se",children:"3. Projekt \xdajra\xe9p\xedt\xe9se"}),"\n",(0,n.jsx)(l.p,{children:"Miut\xe1n elhelyezted a dokument\xe1ci\xf3s f\xe1jlt \xe9s friss\xedtetted a sidebar konfigur\xe1ci\xf3t, \xe9p\xedtsd \xfajra a Docusaurus projektet:"}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",children:"npm run build\n"})}),"\n",(0,n.jsx)(l.p,{children:"Vagy fejleszt\xe9s k\xf6zben futtasd:"}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",children:"npm run start\n"})}),"\n",(0,n.jsx)(l.h3,{id:"4-hibakeres\xe9s",children:"4. Hibakeres\xe9s"}),"\n",(0,n.jsx)(l.p,{children:"Ha b\xe1rmilyen hiba\xfczenetet kapsz, gy\u0151z\u0151dj meg r\xf3la, hogy a Markdown szintaxisa helyes, \xe9s nincs benne nem t\xe1mogatott HTML vagy JSX k\xf3d. Haszn\xe1lj szintaxis ellen\u0151rz\u0151t vagy lintert a hib\xe1k felder\xedt\xe9s\xe9hez."}),"\n",(0,n.jsx)(l.hr,{}),"\n",(0,n.jsx)(l.p,{children:(0,n.jsx)(l.strong,{children:"Ha tov\xe1bbi k\xe9rd\xe9seid vannak vagy seg\xedts\xe9gre van sz\xfcks\xe9ged a dokument\xe1ci\xf3 integr\xe1l\xe1s\xe1ban, nyugodtan jelezd!"})})]})}function c(e={}){const{wrapper:l}={...(0,s.R)(),...e.components};return l?(0,n.jsx)(l,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,l,t)=>{t.d(l,{R:()=>r,x:()=>i});var a=t(6540);const n={},s=a.createContext(n);function r(e){const l=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function i(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(s.Provider,{value:l},e.children)}}}]);