"use strict";(self.webpackChunkganz_school_materials=self.webpackChunkganz_school_materials||[]).push([[6572],{5938:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"Webprogramoz\xe1s/JavaScript/03 Halad\xf3/13 Aszinkron Javascript/13.1 Aszinkron programoz\xe1s Callbackek seg\xedts\xe9g\xe9vel/13.1.1 Id\u0151z\xedt\u0151 f\xfcggv\xe9nyek/13.1.1.1","title":"setTimeout","description":"A JavaScript setTimeout met\xf3dus\xe1val id\u0151z\xedtett feladatokat hajthatunk v\xe9gre, vagyis meg tudjuk hat\xe1rozni, hogy egy k\xf3dr\xe9szlet bizonyos id\u0151 eltelt\xe9vel fusson le. Ez a m\xf3dszer nagyon hasznos olyan helyzetekben, amikor p\xe9ld\xe1ul:","source":"@site/docs/Webprogramoz\xe1s/JavaScript/03 Halad\xf3/13 Aszinkron Javascript/13.1 Aszinkron programoz\xe1s Callbackek seg\xedts\xe9g\xe9vel/13.1.1 Id\u0151z\xedt\u0151 f\xfcggv\xe9nyek/13.1.1.1.mdx","sourceDirName":"Webprogramoz\xe1s/JavaScript/03 Halad\xf3/13 Aszinkron Javascript/13.1 Aszinkron programoz\xe1s Callbackek seg\xedts\xe9g\xe9vel/13.1.1 Id\u0151z\xedt\u0151 f\xfcggv\xe9nyek","slug":"/Webprogramoz\xe1s/JavaScript/03 Halad\xf3/13 Aszinkron Javascript/13.1 Aszinkron programoz\xe1s Callbackek seg\xedts\xe9g\xe9vel/13.1.1 Id\u0151z\xedt\u0151 f\xfcggv\xe9nyek/13.1.1.1","permalink":"/Materials/docs/Webprogramoz\xe1s/JavaScript/03 Halad\xf3/13 Aszinkron Javascript/13.1 Aszinkron programoz\xe1s Callbackek seg\xedts\xe9g\xe9vel/13.1.1 Id\u0151z\xedt\u0151 f\xfcggv\xe9nyek/13.1.1.1","draft":false,"unlisted":false,"editUrl":"https://github.com/GanzSchool/Materials/edit/main/docs/Webprogramoz\xe1s/JavaScript/03 Halad\xf3/13 Aszinkron Javascript/13.1 Aszinkron programoz\xe1s Callbackek seg\xedts\xe9g\xe9vel/13.1.1 Id\u0151z\xedt\u0151 f\xfcggv\xe9nyek/13.1.1.1.mdx","tags":[],"version":"current","frontMatter":{"title":"setTimeout","sidebar_label":"setTimeout"},"sidebar":"mySidebar","previous":{"title":"Id\u0151z\xedt\u0151 f\xfcggv\xe9nyek","permalink":"/Materials/docs/Webprogramoz\xe1s/JavaScript/03 Halad\xf3/13 Aszinkron Javascript/13.1 Aszinkron programoz\xe1s Callbackek seg\xedts\xe9g\xe9vel/13.1.1 Id\u0151z\xedt\u0151 f\xfcggv\xe9nyek/"}}');var n=a(4848),l=a(8453);const r={title:"setTimeout",sidebar_label:"setTimeout"},i="K\xe9sleltet\u0151 f\xfcggv\xe9nyek: setTimeout",o={},d=[{value:"Alapfogalmak",id:"alapfogalmak",level:2},{value:"Gyakorlati felhaszn\xe1l\xe1si lehet\u0151s\xe9gek",id:"gyakorlati-felhaszn\xe1l\xe1si-lehet\u0151s\xe9gek",level:2}];function k(e){const t={br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components},{Details:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"k\xe9sleltet\u0151-f\xfcggv\xe9nyek-settimeout",children:"K\xe9sleltet\u0151 f\xfcggv\xe9nyek: setTimeout"})}),"\n",(0,n.jsxs)(t.p,{children:["A JavaScript ",(0,n.jsx)(t.code,{children:"setTimeout"})," met\xf3dus\xe1val id\u0151z\xedtett feladatokat hajthatunk v\xe9gre, vagyis meg tudjuk hat\xe1rozni, hogy egy k\xf3dr\xe9szlet bizonyos id\u0151 eltelt\xe9vel fusson le. Ez a m\xf3dszer nagyon hasznos olyan helyzetekben, amikor p\xe9ld\xe1ul:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Visszajelz\xe9st"})," szeretn\xe9nk adni a felhaszn\xe1l\xf3nak k\xe9sleltetve (pl. \u201cSikeres ment\xe9s\u201d \xfczenet r\xf6vid id\u0151 ut\xe1n elt\xfcntet\xe9se)."]}),"\n",(0,n.jsxs)(t.li,{children:["Olyan ",(0,n.jsx)(t.strong,{children:"anim\xe1ci\xf3t"})," k\xe9sz\xedt\xfcnk, amelynek bizonyos l\xe9p\xe9sei meghat\xe1rozott id\u0151k\xf6z\xf6nk\xe9nt k\xf6vetik egym\xe1st."]}),"\n",(0,n.jsx)(t.li,{children:"Vagy b\xe1rmilyen m\xe1s alkalommal, amikor id\u0151z\xedtett m\u0171veletre van sz\xfcks\xe9g."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["A ",(0,n.jsx)(t.code,{children:"setTimeout"})," abban k\xfcl\xf6nb\xf6zik a szinkron (egym\xe1s ut\xe1n v\xe9grehajt\xf3d\xf3) folyamatt\xf3l, hogy nem blokkolja a f\u0151 programsz\xe1lat. Ha egy szinkron k\xf3d v\xe9grehajt\xe1sa hossz\xfa ideig tart, akkor a k\xf6vetkez\u0151 k\xf3dsorok csak annak befejez\u0151d\xe9se ut\xe1n indulnak el. A ",(0,n.jsx)(t.code,{children:"setTimeout"})," ezzel szemben \u201ch\xe1tt\xe9rbe helyezi\u201d a futtatand\xf3 k\xf3dr\xe9szletet, \xe9s a JavaScript mehet tov\xe1bb a k\xf6vetkez\u0151 utas\xedt\xe1sok v\xe9grehajt\xe1s\xe1val, \xedgy egyfajta aszinkron m\u0171k\xf6d\xe9st \xe9rhet\xfcnk el."]}),"\n",(0,n.jsx)(t.h2,{id:"alapfogalmak",children:"Alapfogalmak"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Aszinkron v\xe9grehajt\xe1s:"}),(0,n.jsx)(t.br,{}),"\n","A k\xf3d fut\xe1sa nem egym\xe1st blokkolva, hanem egym\xe1ssal p\xe1rhuzamosan (vagy ink\xe1bb eltoltan) t\xf6rt\xe9nik. Egy id\u0151z\xedtett f\xfcggv\xe9ny nem v\xe1rja meg, hogy a f\u0151program befejez\u0151dj\xf6n, hanem be\xe1ll\xedtja a fut\xe1st (pl. 2 m\xe1sodperc m\xfalva), \xe9s addig a program t\xf6bbi r\xe9sze folytat\xf3dik."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Callback f\xfcggv\xe9ny:"}),(0,n.jsx)(t.br,{}),"\n","Ez az a f\xfcggv\xe9ny, amit a ",(0,n.jsx)(t.code,{children:"setTimeout"})," h\xedv meg a megadott id\u0151 ut\xe1n. Teh\xe1t ha a ",(0,n.jsx)(t.code,{children:"setTimeout(function(){...}, 1000)"})," alakot haszn\xe1ljuk, akkor az els\u0151 param\xe9ter (a f\xfcggv\xe9ny) fog lefutni 1 m\xe1sodperc ut\xe1n."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Id\u0151k\xf6z (delay):"}),(0,n.jsx)(t.br,{}),"\n","A ",(0,n.jsx)(t.code,{children:"setTimeout"})," m\xe1sodik param\xe9tere \u2013 ez az az \xe9rt\xe9k (ezredm\xe1sodpercben megadva), amely ut\xe1n a callback f\xfcggv\xe9ny lefut."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Single Threaded (egysz\xe1l\xfa) k\xf6rnyezet:"}),(0,n.jsx)(t.br,{}),"\n","A JavaScript alap\xe9rtelmezetten egyetlen sz\xe1lon fut. Emiatt fontos, hogy a hosszabb m\u0171veletek ne blokkolj\xe1k a teljes fut\xe1st. A ",(0,n.jsx)(t.code,{children:"setTimeout"})," lehet\u0151v\xe9 teszi, hogy bizonyos k\xf3d futtat\xe1s\xe1t eltoljuk id\u0151ben, ezzel seg\xedtve, hogy a felhaszn\xe1l\xf3i fel\xfclet gyorsan reag\xe1ljon m\xe1s interakci\xf3kra is."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Ezek az alapok seg\xedtenek abban, hogy meg\xe9rts\xfck, mi\xe9rt fontos \xe9s hasznos a ",(0,n.jsx)(t.code,{children:"setTimeout"})," haszn\xe1lata, f\u0151leg akkor, ha szeretn\xe9nk egy k\xf3dot k\xe9sleltetve v\xe9grehajtani, de nem akarjuk, hogy a program t\xf6bbi r\xe9sze meg\xe1lljon a h\xe1tt\xe9rben."]}),"\n",(0,n.jsxs)(a,{style:{backgroundColor:"green",padding:"1rem",borderRadius:"5px"},children:[(0,n.jsx)("summary",{children:(0,n.jsx)("strong",{children:"Szintaktika bels\u0151 m\u0171k\xf6d\xe9se"})}),(0,n.jsxs)(t.p,{children:[(0,n.jsxs)(t.strong,{children:["Hogyan n\xe9z ki a ",(0,n.jsx)(t.code,{children:"setTimeout"})," haszn\xe1lata JavaScript-ben?"]}),(0,n.jsx)(t.br,{}),"\n","\xcdme egy p\xe9ldak\xf3d, ami 2 m\xe1sodperc k\xe9sleltet\xe9ssel futtat egy \xfczenetet a konzolban:"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'setTimeout(function() {\r\n  console.log("Ez a k\xf3d 2 m\xe1sodperc k\xe9sleltet\xe9ssel fut le.");\r\n}, 2000);\n'})}),(0,n.jsxs)(t.p,{children:["A ",(0,n.jsx)(t.code,{children:"setTimeout"})," met\xf3dusnak alapvet\u0151en k\xe9t f\u0151 param\xe9tere van:"]}),(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"A megh\xedvand\xf3 f\xfcggv\xe9ny"})," (callback), amely a megadott id\u0151 eltelt\xe9vel fut le."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Az id\u0151tartam"})," (ezredm\xe1sodpercben megadva), ami ut\xe1n a f\xfcggv\xe9ny v\xe9grehajt\xf3dik."]}),"\n"]}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Hogyan m\u0171k\xf6dik mindez a kulissz\xe1k m\xf6g\xf6tt?"})}),(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Amikor a JavaScript k\xf3dot futtatjuk, minden utas\xedt\xe1sunk a ",(0,n.jsx)(t.strong,{children:"Call Stack"})," tetej\xe9re ker\xfcl, \xe9s ott hajt\xf3dik v\xe9gre."]}),"\n",(0,n.jsxs)(t.li,{children:["Ha a k\xf3dban ",(0,n.jsx)(t.code,{children:"setTimeout"}),"-ot tal\xe1l a JavaScript, elind\xedtja a f\xfcggv\xe9ny k\xe9sleltet\xe9s\xe9t a ",(0,n.jsx)(t.strong,{children:"Web API"})," vagy a JavaScript k\xf6rnyezet megfelel\u0151 modulja seg\xedts\xe9g\xe9vel."]}),"\n",(0,n.jsxs)(t.li,{children:["Maga a f\u0151 program tov\xe1bbhalad, nincs meg\xe1ll\xe1s; a ",(0,n.jsx)(t.code,{children:"setTimeout"})," \xe1ltal \xe9rintett f\xfcggv\xe9ny k\xf6zben \u201ch\xe1tt\xe9rbe\u201d ker\xfcl."]}),"\n",(0,n.jsxs)(t.li,{children:["Ha letelt a be\xe1ll\xedtott id\u0151 (pl. 2000 ms), a f\xfcggv\xe9ny beker\xfcl a ",(0,n.jsx)(t.strong,{children:"Callback Queue"}),"-ba (egy sorba, ahol a v\xe9grehajt\xe1sra v\xe1rakoznak a callbackek)."]}),"\n",(0,n.jsxs)(t.li,{children:["Az ",(0,n.jsx)(t.strong,{children:"Event Loop"})," (esem\xe9nyhurok) figyeli, hogy a Call Stack \xe9ppen \xfcres-e. Ha igen, akkor kiveszi a f\xfcggv\xe9nyt a Callback Queue-b\xf3l, \xe9s felteszi a Call Stack tetej\xe9re."]}),"\n",(0,n.jsxs)(t.li,{children:["Ekkor fut le t\xe9nylegesen a ",(0,n.jsx)(t.code,{children:"setTimeout"})," callback f\xfcggv\xe9nye."]}),"\n"]}),(0,n.jsxs)(t.p,{children:["R\xf6viden ez annyit jelent, hogy a ",(0,n.jsx)(t.code,{children:"setTimeout"})," nem \xe1ll\xedtja meg a programunkat, hanem \u201cid\u0151z\xedtett\u201d feladatot hoz l\xe9tre, ami csak a megadott id\u0151 eltelt\xe9vel ker\xfcl v\xe9grehajt\xe1sra \u2013 \xe9s akkor is csak akkor, ha a JavaScript m\xe1r \xe9ppen r\xe1\xe9r (\xfcres a Call Stack). Ez biztos\xedtja, hogy ne akadjon meg a k\xf3dunk fut\xe1sa, mik\xf6zben v\xe1runk valamire vagy k\xe9sleltetni szeretn\xe9nk egy m\u0171veletet."]})]}),"\n",(0,n.jsx)(t.h2,{id:"gyakorlati-felhaszn\xe1l\xe1si-lehet\u0151s\xe9gek",children:"Gyakorlati felhaszn\xe1l\xe1si lehet\u0151s\xe9gek"}),"\n",(0,n.jsxs)(t.p,{children:["A ",(0,n.jsx)(t.code,{children:"setTimeout"})," nagyon sokr\xe9t\u0171en alkalmazhat\xf3 a mindennapi JavaScript fejleszt\xe9s sor\xe1n. \xcdme n\xe9h\xe1ny p\xe9lda, amelyek k\xf6nnyen \xe1t\xfcltethet\u0151k a gyakorlatba:"]}),"\n",(0,n.jsxs)(a,{style:{backgroundColor:"#41038c",padding:"1rem",borderRadius:"5px"},children:[(0,n.jsx)("summary",{children:(0,n.jsx)("strong",{children:"1. \xc9rtes\xedt\u0151 \xfczenet megjelen\xedt\xe9se \xe9s elt\xfcntet\xe9se"})}),(0,n.jsx)(t.p,{children:"Az egyik leggyakoribb felhaszn\xe1l\xe1si m\xf3d, amikor egy \xfczenetet vagy \xe9rtes\xedt\xe9st jelen\xedt\xfcnk meg a felhaszn\xe1l\xf3nak, majd egy p\xe1r m\xe1sodperc m\xfalva automatikusan elt\xfcntetj\xfck:"}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"P\xe9ld\xe1ul, ha a felhaszn\xe1l\xf3 befejezett egy \u0171rlapot \xe9s r\xe1kattintott a \u201cK\xfcld\xe9s\u201d gombra, akkor a sikeress\xe9gr\u0151l inform\xe1l\xf3 s\xe1v felugrik, majd 3 m\xe1sodperc ut\xe1n elt\u0171nik."}),"\n",(0,n.jsx)(t.li,{children:"Ez kellemes felhaszn\xe1l\xf3i \xe9lm\xe9nyt biztos\xedt, mert a felhaszn\xe1l\xf3 l\xe1tja, hogy a m\u0171velet sikeres volt, ugyanakkor nem kell neki mag\xe1nak bez\xe1rni az \xfczenetet, mert \u201cmag\xe1t\xf3l\u201d elt\u0171nik."}),"\n"]})]}),"\n",(0,n.jsxs)(a,{style:{backgroundColor:"#41038c",padding:"1rem",borderRadius:"5px"},children:[(0,n.jsx)("summary",{children:(0,n.jsx)("strong",{children:"2. Sz\xe1ml\xe1l\xf3 vagy visszasz\xe1ml\xe1l\xe1s (countdown)"})}),(0,n.jsxs)(t.p,{children:["Ha egy adott esem\xe9nyig vagy id\u0151pontig szeretn\xe9nk visszasz\xe1molni, akkor a ",(0,n.jsx)(t.code,{children:"setTimeout"})," (vagy gyakrabban a ",(0,n.jsx)(t.code,{children:"setInterval"}),") seg\xedts\xe9g\xe9vel szab\xe1lyos id\u0151k\xf6z\xf6nk\xe9nt friss\xedthetj\xfck a kijelzett \xe9rt\xe9ket."]}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"\xcdrhatunk p\xe9ld\xe1ul egy felugr\xf3 ablakot, ami 10 m\xe1sodpercig \xe9l, \xe9s 1 m\xe1sodpercenk\xe9nt friss\xedti a visszasz\xe1ml\xe1l\xe1st."}),"\n",(0,n.jsx)(t.li,{children:"Amikor a sz\xe1ml\xe1l\xf3 el\xe9ri a null\xe1t, automatikusan elt\u0171ntethetj\xfck az elemet, vagy lefuttathatunk valamilyen m\u0171veletet."}),"\n"]})]}),"\n",(0,n.jsxs)(a,{style:{backgroundColor:"#41038c",padding:"1rem",borderRadius:"5px"},children:[(0,n.jsx)("summary",{children:(0,n.jsx)("strong",{children:"3. Anim\xe1lt diavet\xedt\xe9s (slideshow)"})}),(0,n.jsx)(t.p,{children:"Egy egyszer\u0171 k\xe9pgal\xe9ria vagy diavet\xedt\xe9s eset\xe9n k\xf6nnyen el\xe9rhetj\xfck, hogy a k\xe9pek n\xe9h\xe1ny m\xe1sodpercenk\xe9nt automatikusan cser\xe9l\u0151djenek."}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["A ",(0,n.jsx)(t.code,{children:"setTimeout"})," h\xedv\xe1sban egyszer\u0171en be\xe1ll\xedtjuk a k\xf6vetkez\u0151 k\xe9p megjelen\xedt\xe9s\xe9t."]}),"\n",(0,n.jsxs)(t.li,{children:["Amikor a k\xf6vetkez\u0151 k\xe9p bet\xf6lt\u0151dik, \xfajra megh\xedvjuk a ",(0,n.jsx)(t.code,{children:"setTimeout"}),"-ot (rekurz\xedv vagy l\xe1ncolt h\xedv\xe1ssal), \xedgy folyamatos diavet\xedt\xe9st val\xf3s\xedtunk meg."]}),"\n",(0,n.jsx)(t.li,{children:"Az el\u0151ny, hogy rugalmasan, a megadott id\u0151k\xf6z alapj\xe1n v\xe1ltogathatjuk a k\xe9peket, \xe9s k\xf6zben a felhaszn\xe1l\xf3i fel\xfclet sem fagy le."}),"\n"]})]}),"\n",(0,n.jsxs)(a,{style:{backgroundColor:"#41038c",padding:"1rem",borderRadius:"5px"},children:[(0,n.jsx)("summary",{children:(0,n.jsx)("strong",{children:"4. Adatbet\xf6lt\xe9sn\xe9l bet\xf6lt\xe9s jelz\xe9se (loader)"})}),(0,n.jsx)(t.p,{children:"Sokszor el\u0151fordul, hogy adatokat kell beh\xedvnunk egy szerverr\u0151l vagy valamilyen k\xfcls\u0151 forr\xe1sb\xf3l. Ilyenkor hasznos lehet egy \u201cBet\xf6lt\xe9s\u2026\u201d vagy \u201cK\xe9rlek, v\xe1rj\u2026\u201d feliratot elhelyezni, majd az adat meg\xe9rkez\xe9se ut\xe1n p\xe1r pillanat m\xfalva elt\xfcntetni:"}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Amikor elind\xedtjuk a lek\xe9r\xe9st (fetch, axios, stb.), kirakunk egy kis \u201cloader\u201d anim\xe1ci\xf3t vagy sz\xf6veget."}),"\n",(0,n.jsxs)(t.li,{children:["Miut\xe1n az adat megj\xf6n, elind\xedtunk egy kis ",(0,n.jsx)(t.code,{children:"setTimeout"}),"-ot, hogy a felhaszn\xe1l\xf3 \xe9szrevegye a v\xe1ltoz\xe1st, majd p\xe1r m\xe1sodperc m\xfalva elt\xe1vol\xedtjuk a bet\xf6lt\xe9sre utal\xf3 elemet."]}),"\n",(0,n.jsx)(t.li,{children:"Ez seg\xedt abban, hogy a felhaszn\xe1l\xf3nak legyen vizu\xe1lis visszajelz\xe9se a v\xe1rakoz\xe1sr\xf3l."}),"\n"]})]}),"\n",(0,n.jsxs)(a,{style:{backgroundColor:"#41038c",padding:"1rem",borderRadius:"5px"},children:[(0,n.jsx)("summary",{children:(0,n.jsx)("strong",{children:"5. Id\u0151z\xedtett gomb inaktiv\xe1l\xe1sa"})}),(0,n.jsx)(t.p,{children:"Ha p\xe9ld\xe1ul szeretn\xe9nk megel\u0151zni a t\xfal sok, gyors egym\xe1sut\xe1nban t\xf6rt\xe9n\u0151 kattint\xe1st, akkor egy gombot \xe1tmenetileg inakt\xedvv\xe1 tehet\xfcnk a kattint\xe1s ut\xe1n:"}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["A gomb kattint\xe1sa ut\xe1n a gombot letiltjuk (",(0,n.jsx)(t.code,{children:"disabled"})," \xe1llapotra \xe1ll\xedtjuk)."]}),"\n",(0,n.jsxs)(t.li,{children:["Ezzel egyid\u0151ben ind\xedtunk egy ",(0,n.jsx)(t.code,{children:"setTimeout"})," h\xedv\xe1st, hogy 1-2 m\xe1sodperc m\xfalva \xfajra enged\xe9lyezz\xfck a gombot."]}),"\n",(0,n.jsx)(t.li,{children:"\xcdgy a felhaszn\xe1l\xf3 nem tud t\xfal gyorsan, feleslegesen sok m\u0171veletet v\xe9gezni."}),"\n"]})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{})})]})}function g(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(k,{...e})}):k(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>r,x:()=>i});var s=a(6540);const n={},l=s.createContext(n);function r(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);