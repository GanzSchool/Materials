"use strict";(self.webpackChunkganz_school_materials=self.webpackChunkganz_school_materials||[]).push([[8894],{9678:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>d});const l=JSON.parse('{"id":"Webprogramoz\xe1s/JavaScript/03 Halad\xf3/13 Aszinkron Javascript/13.1 Aszinkron programoz\xe1s Callbackek seg\xedts\xe9g\xe9vel/13.1.1 Id\u0151z\xedt\u0151 f\xfcggv\xe9nyek/13.1.1.3","title":"clearTimeout","description":"A JavaScript clearTimeout met\xf3dus\xe1val m\xe1r l\xe9trehozott, egyszeri id\u0151z\xedt\xe9seket lehet megszak\xedtani. Ha kor\xe1bban elind\xedtottuk a setTimeout h\xedv\xe1st, \xe9s valamilyen okb\xf3l m\xe9gis le szeretn\xe9nk \xe1ll\xedtani egy megadott id\u0151 m\xfalva, akkor a clearTimeout-ot \xe9rdemes haszn\xe1lnunk. P\xe9ld\xe1ul:","source":"@site/docs/Webprogramoz\xe1s/JavaScript/03 Halad\xf3/13 Aszinkron Javascript/13.1 Aszinkron programoz\xe1s Callbackek seg\xedts\xe9g\xe9vel/13.1.1 Id\u0151z\xedt\u0151 f\xfcggv\xe9nyek/13.1.1.3.mdx","sourceDirName":"Webprogramoz\xe1s/JavaScript/03 Halad\xf3/13 Aszinkron Javascript/13.1 Aszinkron programoz\xe1s Callbackek seg\xedts\xe9g\xe9vel/13.1.1 Id\u0151z\xedt\u0151 f\xfcggv\xe9nyek","slug":"/Webprogramoz\xe1s/JavaScript/03 Halad\xf3/13 Aszinkron Javascript/13.1 Aszinkron programoz\xe1s Callbackek seg\xedts\xe9g\xe9vel/13.1.1 Id\u0151z\xedt\u0151 f\xfcggv\xe9nyek/13.1.1.3","permalink":"/Materials/docs/Webprogramoz\xe1s/JavaScript/03 Halad\xf3/13 Aszinkron Javascript/13.1 Aszinkron programoz\xe1s Callbackek seg\xedts\xe9g\xe9vel/13.1.1 Id\u0151z\xedt\u0151 f\xfcggv\xe9nyek/13.1.1.3","draft":false,"unlisted":false,"editUrl":"https://github.com/GanzSchool/Materials/edit/main/docs/Webprogramoz\xe1s/JavaScript/03 Halad\xf3/13 Aszinkron Javascript/13.1 Aszinkron programoz\xe1s Callbackek seg\xedts\xe9g\xe9vel/13.1.1 Id\u0151z\xedt\u0151 f\xfcggv\xe9nyek/13.1.1.3.mdx","tags":[],"version":"current","frontMatter":{"title":"clearTimeout","sidebar_label":"clearTimeout"},"sidebar":"mySidebar","previous":{"title":"setInterval","permalink":"/Materials/docs/Webprogramoz\xe1s/JavaScript/03 Halad\xf3/13 Aszinkron Javascript/13.1 Aszinkron programoz\xe1s Callbackek seg\xedts\xe9g\xe9vel/13.1.1 Id\u0151z\xedt\u0151 f\xfcggv\xe9nyek/13.1.1.2"},"next":{"title":"clearInterval","permalink":"/Materials/docs/Webprogramoz\xe1s/JavaScript/03 Halad\xf3/13 Aszinkron Javascript/13.1 Aszinkron programoz\xe1s Callbackek seg\xedts\xe9g\xe9vel/13.1.1 Id\u0151z\xedt\u0151 f\xfcggv\xe9nyek/13.1.1.4"}}');var n=s(4848),a=s(8453);const r={title:"clearTimeout",sidebar_label:"clearTimeout"},i="Egyszeri id\u0151z\xedt\xe9s le\xe1ll\xedt\xe1sa: clearTimeout",o={},d=[{value:"Alapfogalmak",id:"alapfogalmak",level:2},{value:"Gyakorlati felhaszn\xe1l\xe1si lehet\u0151s\xe9gek",id:"gyakorlati-felhaszn\xe1l\xe1si-lehet\u0151s\xe9gek",level:2},{value:"Gyakorlati feladatok",id:"gyakorlati-feladatok",level:2},{value:"Visszasz\xe1ml\xe1l\xf3 - setTimeout",id:"visszasz\xe1ml\xe1l\xf3---settimeout",level:4},{value:"K\xf3d megold\xe1sa:",id:"k\xf3d-megold\xe1sa",level:4},{value:"M\u0171k\xf6d\xe9s r\xf6vid magyar\xe1zata:",id:"m\u0171k\xf6d\xe9s-r\xf6vid-magyar\xe1zata",level:4},{value:"Projektfeladatok",id:"projektfeladatok",level:2}];function c(e){const t={br:"br",code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components},{Details:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"egyszeri-id\u0151z\xedt\xe9s-le\xe1ll\xedt\xe1sa-cleartimeout",children:"Egyszeri id\u0151z\xedt\xe9s le\xe1ll\xedt\xe1sa: clearTimeout"})}),"\n",(0,n.jsxs)(t.p,{children:["A JavaScript ",(0,n.jsx)(t.code,{children:"clearTimeout"})," met\xf3dus\xe1val ",(0,n.jsx)(t.strong,{children:"m\xe1r l\xe9trehozott, egyszeri id\u0151z\xedt\xe9seket"})," lehet megszak\xedtani. Ha kor\xe1bban elind\xedtottuk a ",(0,n.jsx)(t.code,{children:"setTimeout"})," h\xedv\xe1st, \xe9s valamilyen okb\xf3l ",(0,n.jsx)(t.strong,{children:"m\xe9gis le szeretn\xe9nk \xe1ll\xedtani"})," egy megadott id\u0151 m\xfalva, akkor a ",(0,n.jsx)(t.code,{children:"clearTimeout"}),"-ot \xe9rdemes haszn\xe1lnunk. P\xe9ld\xe1ul:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Egy bizonyos ideig megjelen\u0151 ",(0,n.jsx)(t.strong,{children:"\xe9rtes\xedt\xe9st"})," m\xe9g a lej\xe1rat el\u0151tt elt\xe1vol\xedtan\xe1nk."]}),"\n",(0,n.jsxs)(t.li,{children:["Egy k\xe9sleltetett ",(0,n.jsx)(t.strong,{children:"anim\xe1ci\xf3"})," elind\xedt\xe1s\xe1t szeretn\xe9nk megszak\xedtani."]}),"\n",(0,n.jsxs)(t.li,{children:["Bizonyos ",(0,n.jsx)(t.strong,{children:"felhaszn\xe1l\xf3i interakci\xf3"})," (pl. gombnyom\xe1s) miatt m\xe1r nincs sz\xfcks\xe9g a k\xe9sleltetett m\u0171velet futtat\xe1s\xe1ra."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["A ",(0,n.jsx)(t.code,{children:"clearTimeout"})," a ",(0,n.jsx)(t.strong,{children:"k\xe9sleltetett"})," (egyszeri) m\u0171veletek le\xe1ll\xedt\xe1s\xe1ra szolg\xe1l, m\xedg a ",(0,n.jsx)(t.code,{children:"clearInterval"})," a folyamatos (ism\xe9tl\u0151d\u0151) m\u0171veleteket szak\xedtja meg. Fontos, hogy a ",(0,n.jsx)(t.code,{children:"clearTimeout"})," sz\xe1m\xe1ra \xe1t kell adnunk a ",(0,n.jsx)(t.code,{children:"setTimeout"})," \xe1ltal visszaadott ID-t, k\xfcl\xf6nben nem tudja, melyik id\u0151z\xedt\xe9st kell t\xf6r\xf6lnie."]}),"\n",(0,n.jsx)(t.h2,{id:"alapfogalmak",children:"Alapfogalmak"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsxs)(t.strong,{children:["Egyszeri m\u0171velet (",(0,n.jsx)(t.code,{children:"setTimeout"}),"):"]}),(0,n.jsx)(t.br,{}),"\n","A ",(0,n.jsx)(t.code,{children:"setTimeout"})," seg\xedts\xe9g\xe9vel JavaScript-ben megadhatjuk, hogy egy k\xf3dr\xe9szlet egy meghat\xe1rozott k\xe9sleltet\xe9s (ezredm\xe1sodperc) ut\xe1n fusson le."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Azonos\xedt\xf3 (Timeout ID):"}),(0,n.jsx)(t.br,{}),"\n","A ",(0,n.jsx)(t.code,{children:"setTimeout"})," visszaad egy ID-t, amit elt\xe1rolhatunk. Csak ezzel az ID-vel tudjuk majd t\xf6r\xf6lni a k\xe9s\u0151bbi v\xe9grehajt\xe1st."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsxs)(t.strong,{children:[(0,n.jsx)(t.code,{children:"clearTimeout(timeoutID)"}),":"]}),(0,n.jsx)(t.br,{}),"\n","A ",(0,n.jsx)(t.code,{children:"clearTimeout"})," egy param\xe9tert v\xe1r (a timeout ID-t). Amikor megh\xedvjuk, a JavaScript le\xe1ll\xedtja a megadott ID-hoz tartoz\xf3 id\u0151z\xedtett feladatot, ha az m\xe9g nem futott le."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Single Threaded k\xf6rnyezet \xe9s az aszinkron m\u0171veletek:"}),(0,n.jsx)(t.br,{}),"\n","A JavaScript egy sz\xe1lon fut, azonban a ",(0,n.jsx)(t.code,{children:"setTimeout"})," aszinkron jelleggel \u201ch\xe1tt\xe9rben\u201d \xfctemezi a feladatot. A ",(0,n.jsx)(t.code,{children:"clearTimeout"})," megszak\xedtja ezt az \xfctemez\xe9st, \xedgy a callback nem ker\xfcl v\xe9grehajt\xe1sra."]}),"\n",(0,n.jsxs)(t.p,{children:["Ha meg\xe9rtett\xfck ezeket az alapfogalmakat, akkor tudni fogjuk, hogy ",(0,n.jsx)(t.strong,{children:"b\xe1rmikor, amikor egy k\xe9sleltetett k\xf3dr\xe9szletet szeretn\xe9nk \u201evisszavonni\u201d"}),", a ",(0,n.jsx)(t.code,{children:"clearTimeout"})," haszn\xe1lat\xe1val megtehetj\xfck."]}),"\n",(0,n.jsxs)(s,{className:"dropdown-task",children:[(0,n.jsx)("summary",{children:(0,n.jsx)("strong",{children:"Szintaktika bels\u0151 m\u0171k\xf6d\xe9se"})}),(0,n.jsxs)(t.p,{children:[(0,n.jsxs)(t.strong,{children:["Hogyan n\xe9z ki a ",(0,n.jsx)(t.code,{children:"clearTimeout"})," haszn\xe1lata JavaScript-ben?"]}),(0,n.jsx)(t.br,{}),"\n","Vizsg\xe1ljunk meg egy p\xe9ld\xe1t, ahol elind\xedtunk egy k\xe9sleltetett feladatot, majd r\xf6vid id\u0151n bel\xfcl le\xe1ll\xedtjuk:"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'// 3 m\xe1sodperc k\xe9sleltet\xe9s ut\xe1n \xedrna ki egy \xfczenetet a konzolra\r\nconst timeoutID = setTimeout(function() {\r\n  console.log("3 m\xe1sodperc eltelt, most futott le ez az \xfczenet.");\r\n}, 3000);\r\n\r\n// 1 m\xe1sodperc ut\xe1n meggondoljuk magunkat \xe9s t\xf6r\xf6lj\xfck a k\xe9sleltetett feladatot\r\nsetTimeout(function() {\r\n  clearTimeout(timeoutID);\r\n  console.log("A k\xe9sleltetett \xfczenetet megszak\xedtottuk.");\r\n}, 1000);\n'})}),(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["A ",(0,n.jsx)(t.code,{children:"setTimeout"})," visszaad egy timeoutID-t, amely a k\xe9s\u0151bb lefuttatand\xf3 feladat azonos\xedt\xf3ja."]}),"\n",(0,n.jsxs)(t.li,{children:["Mivel \xfagy d\xf6nt\xfcnk, hogy m\xe9gis t\xf6r\xf6lj\xfck a feladatot, 1 m\xe1sodperc m\xfalva megh\xedvjuk a ",(0,n.jsx)(t.code,{children:"clearTimeout(timeoutID)"})," met\xf3dust."]}),"\n",(0,n.jsxs)(t.li,{children:["Ez megszak\xedtja a ",(0,n.jsx)(t.code,{children:"setTimeout"})," \xe1ltal \xfctemezett m\u0171veletet, \xedgy a \u201c3 m\xe1sodperc eltelt\u2026\u201d \xfczenet sosem jelenik meg."]}),"\n",(0,n.jsx)(t.li,{children:"Helyette 1 m\xe1sodperc ut\xe1n ki\xedrjuk, hogy megszak\xedtottuk a k\xe9sleltetett \xfczenetet."}),"\n"]}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"A kulissz\xe1k m\xf6g\xf6tt"}),":"]}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["A ",(0,n.jsx)(t.code,{children:"setTimeout"})," l\xe9trehoz egy feladatot a Web API-n kereszt\xfcl, ami 3 mp m\xfalva beker\xfclne a callback sorba (Callback Queue)."]}),"\n",(0,n.jsxs)(t.li,{children:["1 mp ut\xe1n azonban egy m\xe1sik ",(0,n.jsx)(t.code,{children:"setTimeout"})," megh\xedvja a ",(0,n.jsx)(t.code,{children:"clearTimeout"}),"-ot."]}),"\n",(0,n.jsxs)(t.li,{children:["A ",(0,n.jsx)(t.code,{children:"clearTimeout"})," t\xf6rli a bejegyz\xe9st a bels\u0151 id\u0151z\xedtett feladat-nyilv\xe1ntart\xe1sb\xf3l, miel\u0151tt az m\xe9g a f\u0151 sz\xe1lra ker\xfclne."]}),"\n",(0,n.jsx)(t.li,{children:"\xcdgy a 3 mp m\xfalva esed\xe9kes callback m\xe1r nem fog v\xe9grehajt\xf3dni."}),"\n"]})]}),"\n",(0,n.jsx)(t.h2,{id:"gyakorlati-felhaszn\xe1l\xe1si-lehet\u0151s\xe9gek",children:"Gyakorlati felhaszn\xe1l\xe1si lehet\u0151s\xe9gek"}),"\n",(0,n.jsxs)(t.p,{children:["A ",(0,n.jsx)(t.code,{children:"clearTimeout"})," kiemelten hasznos akkor, ha a ",(0,n.jsx)(t.strong,{children:"felhaszn\xe1l\xf3i interakci\xf3"})," megv\xe1ltoztatja a k\xe9sleltetett feladat relevanci\xe1j\xe1t, vagy ha a k\xe9s\u0151bbiekben m\xe1r nincs sz\xfcks\xe9g a fut\xe1s\xe1ra."]}),"\n",(0,n.jsxs)(s,{className:"dropdown-task",children:[(0,n.jsx)("summary",{children:(0,n.jsx)("strong",{children:"\xc9rtes\xedt\u0151 ablak id\u0151 el\u0151tti elrejt\xe9se"})}),(0,n.jsx)(t.p,{children:"Vegy\xfcnk egy p\xe9ld\xe1t, amikor egy \xe9rtes\xedt\u0151 ablakot jelen\xedt\xfcnk meg:"}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"setTimeout"}),"-tal 5 m\xe1sodperc ut\xe1n automatikusan bez\xe1rn\xe1nk az ablakot."]}),"\n",(0,n.jsxs)(t.li,{children:["Ha a felhaszn\xe1l\xf3 saj\xe1t maga z\xe1rja be az \xfczenetet kor\xe1bban, akkor ",(0,n.jsx)(t.code,{children:"clearTimeout"}),"-ot h\xedvva megakad\xe1lyozhatjuk az extra \u201cbez\xe1r\xe1s\u201d futtat\xe1s\xe1t, amely m\xe1r sz\xfcks\xe9gtelen."]}),"\n"]})]}),"\n",(0,n.jsxs)(s,{className:"dropdown-task",children:[(0,n.jsx)("summary",{children:(0,n.jsx)("strong",{children:"Rekl\xe1m vagy felugr\xf3 ablak t\xf6rl\xe9se"})}),(0,n.jsx)(t.p,{children:"N\xe9h\xe1ny oldal 10-15 m\xe1sodperc ut\xe1n valamilyen felugr\xf3 rekl\xe1mot jelen\xedt meg:"}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["A ",(0,n.jsx)(t.code,{children:"setTimeout"})," \xfctemezi a rekl\xe1m megjelen\xedt\xe9s\xe9t."]}),"\n",(0,n.jsxs)(t.li,{children:["Ha a felhaszn\xe1l\xf3 id\u0151k\xf6zben p\xe9ld\xe1ul d\xedjcsomagot v\xe1s\xe1rolt, \xe9s \xedgy rekl\xe1mmentess\xe9 v\xe1lt, akkor ",(0,n.jsx)(t.code,{children:"clearTimeout"}),"-tal ",(0,n.jsx)(t.strong,{children:"t\xf6r\xf6lhetj\xfck"})," a tervezett felugr\xf3t, hogy ne zavarjuk a felhaszn\xe1l\xf3t."]}),"\n"]})]}),"\n",(0,n.jsxs)(s,{className:"dropdown-task",children:[(0,n.jsx)("summary",{children:(0,n.jsx)("strong",{children:"Anim\xe1ci\xf3 kezdet\xe9nek elhalaszt\xe1sa"})}),(0,n.jsxs)(t.p,{children:["Sokszor a weboldalon egy anim\xe1ci\xf3t ",(0,n.jsx)(t.code,{children:"setTimeout"}),"-tal ",(0,n.jsx)(t.strong,{children:"k\xe9sleltetve"})," ind\xedtunk el (pl. 2 m\xe1sodperc m\xfalva fokozatosan megjelenik egy banner). Ha azonban a felhaszn\xe1l\xf3 valamilyen interakci\xf3t kezdem\xe9nyez (p\xe9ld\xe1ul m\xe1sik men\xfcpontra navig\xe1l), akkor m\xe1r nincs \xe9rtelme az anim\xe1ci\xf3 elind\xedt\xe1s\xe1nak:"]}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"clearTimeout"}),"-tal egyszer\u0171en megakad\xe1lyozhatjuk a felesleges anim\xe1ci\xf3-ind\xedt\xe1st."]}),"\n"]})]}),"\n",(0,n.jsxs)(s,{className:"dropdown-task",children:[(0,n.jsx)("summary",{children:(0,n.jsx)("strong",{children:"K\xe9sleltetett \u0171rlap-ellen\u0151rz\xe9s visszavon\xe1sa"})}),(0,n.jsxs)(t.p,{children:["K\xe9pzelj el egy webes \u0171rlapot, ahol g\xe9pel\xe9s k\xf6zben ",(0,n.jsx)(t.code,{children:"setTimeout"}),"-tal 1-2 m\xe1sodperccel k\xe9sleltetve futnak le ellen\u0151rz\xe9sek (p\xe9ld\xe1ul jelsz\xf3er\u0151ss\xe9g, e-mail form\xe1tum). Ha a felhaszn\xe1l\xf3 gyorsan kit\xf6lti az \u0171rlapot \xe9s m\xe1r elk\xfcldi, lehet, hogy m\xe1r nincs sz\xfcks\xe9g a \u201cr\xe9gi\u201d k\xe9sleltetett ellen\u0151rz\xe9s futtat\xe1s\xe1ra:"]}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"clearTimeout"})," seg\xedts\xe9g\xe9vel le\xe1ll\xedtjuk a felesleges valid\xe1l\xe1st, \xe9s ezzel optimaliz\xe1ljuk a felhaszn\xe1l\xf3i \xe9lm\xe9nyt."]}),"\n"]})]}),"\n",(0,n.jsxs)(s,{className:"dropdown-task",children:[(0,n.jsx)("summary",{children:(0,n.jsx)("strong",{children:"Nagy er\u0151forr\xe1s-ig\xe9ny\u0171 m\u0171velet id\u0151 el\u0151tti megszak\xedt\xe1sa"})}),(0,n.jsxs)(t.p,{children:["Ha egy hosszabb, de k\xe9sleltetett folyamatot tervezn\xe9nk elind\xedtani (pl. k\xe9pt\xf6m\xf6r\xedt\xe9s, adatelemz\xe9s) \xe9s k\xf6zben a felhaszn\xe1l\xf3 jelzi, hogy m\xe9gsem ig\xe9nyli ezt a funkci\xf3t, akkor a ",(0,n.jsx)(t.code,{children:"clearTimeout"})," \u201cvisszavonhatja\u201d a m\xe9g el sem indult folyamatot, miel\u0151tt f\xf6l\xf6slegesen elkezden\xe9nk a sz\xe1m\xedt\xe1sokat."]})]}),"\n",(0,n.jsx)(t.h2,{id:"gyakorlati-feladatok",children:"Gyakorlati feladatok"}),"\n",(0,n.jsxs)(t.p,{children:["Az al\xe1bbi feladatokon kereszt\xfcl kipr\xf3b\xe1lhatod, hogyan lehet a ",(0,n.jsx)(t.code,{children:"clearTimeout"}),"-ot a gyakorlatban haszn\xe1lni."]}),"\n",(0,n.jsx)(t.h4,{id:"visszasz\xe1ml\xe1l\xf3---settimeout",children:"Visszasz\xe1ml\xe1l\xf3 - setTimeout"}),"\n",(0,n.jsxs)(s,{class:"dropdown-task",children:[(0,n.jsxs)("summary",{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)("strong",{children:"Visszasz\xe1ml\xe1l\xf3"}),(0,n.jsx)("br",{}),"\r\nHozz l\xe9tre egy olyan weboldalt, amely visszasz\xe1mol 10-t\u0151l 0-ig, \xe9s biztos\xedtsd, hogy a felhaszn\xe1l\xf3 elind\xedthassa vagy meg\xe1ll\xedthassa a visszasz\xe1ml\xe1l\xe1st gombok seg\xedts\xe9g\xe9vel. A visszasz\xe1ml\xe1l\xe1s csak egyszer fusson le, \xe9s a visszasz\xe1ml\xe1l\xe1s sor\xe1n lehessen megszak\xedtani."]}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"JavaScript funkci\xf3k:"})}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"A visszasz\xe1ml\xe1l\xe1s 10-t\u0151l 0-ig tartson."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["A visszasz\xe1ml\xe1l\xe1s m\xe1sodpercenk\xe9nt friss\xfclj\xf6n a ",(0,n.jsx)(t.code,{children:"setTimeout"})," seg\xedts\xe9g\xe9vel."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Amikor a visszasz\xe1ml\xe1l\xe1s el\xe9ri a 0-t, az automatikusan \xe1lljon le."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Ind\xedt\xe1s gomb"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Csak akkor induljon el a visszasz\xe1ml\xe1l\xe1s, ha az nem fut \xe9ppen."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Meg\xe1ll\xedt\xe1s gomb"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"\xc1ll\xedtsa meg az aktu\xe1lisan fut\xf3 visszasz\xe1ml\xe1l\xe1st."}),"\n"]}),"\n"]}),"\n"]})]}),(0,n.jsx)(t.h4,{id:"k\xf3d-megold\xe1sa",children:"K\xf3d megold\xe1sa:"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:'<!DOCTYPE html>\r\n<html lang="hu">\r\n<head>\r\n    <meta charset="UTF-8">\r\n    <title>Visszasz\xe1ml\xe1l\xe1s P\xe9lda setTimeout-tal</title>\r\n    <style>\r\n        /* A body k\xf6zpontoz\xe1sa Flexbox seg\xedts\xe9g\xe9vel */\r\n        body {\r\n            display: flex; /* Flexbox elrendez\xe9s */\r\n            flex-direction: column; /* A tartalom f\xfcgg\u0151legesen helyezkedjen el */\r\n            align-items: center; /* K\xf6z\xe9pre igaz\xedt\xe1s v\xedzszintesen */\r\n            justify-content: center; /* K\xf6z\xe9pre igaz\xedt\xe1s f\xfcgg\u0151legesen */\r\n            height: 100vh; /* Az oldal teljes magass\xe1g\xe1t lefedi */\r\n            background-color: #e0f7fa; /* Vil\xe1gosk\xe9k h\xe1tt\xe9rsz\xedn */\r\n            font-family: Arial, sans-serif; /* Egyszer\u0171, modern bet\u0171t\xedpus */\r\n        }\r\n\r\n        /* A fejl\xe9c st\xedlusoz\xe1sa */\r\n        h1 {\r\n            color: #2e7d32; /* Z\xf6ld sz\xedn a sz\xf6veghez */\r\n            font-size: 4em; /* Nagy bet\u0171m\xe9ret */\r\n            margin-bottom: 20px; /* Als\xf3 marg\xf3 a t\xe1vols\xe1ghoz */\r\n        }\r\n\r\n        /* Gombok alapst\xedlusa */\r\n        button {\r\n            padding: 10px 20px; /* Bels\u0151 t\xe9rk\xf6z */\r\n            margin: 5px; /* K\xfcls\u0151 t\xe9rk\xf6z */\r\n            font-size: 1em; /* K\xf6zepes bet\u0171m\xe9ret */\r\n            border: none; /* Nincs keret */\r\n            border-radius: 5px; /* Lekerek\xedtett sarkok */\r\n            cursor: pointer; /* Mutat\xf3v\xe1 v\xe1ltoz\xf3 kurzor hover \xe1llapotban */\r\n        }\r\n\r\n        /* Ind\xedt\xe1s gomb st\xedlusa */\r\n        #startBtn {\r\n            background-color: #66bb6a; /* Vil\xe1gosz\xf6ld h\xe1tt\xe9rsz\xedn */\r\n            color: white; /* Feh\xe9r sz\xf6veg */\r\n        }\r\n\r\n        /* Meg\xe1ll\xedt\xe1s gomb st\xedlusa */\r\n        #stopBtn {\r\n            background-color: #ef5350; /* Piros h\xe1tt\xe9rsz\xedn */\r\n            color: white; /* Feh\xe9r sz\xf6veg */\r\n        }\r\n\r\n        /* Hover-effektus a gombokhoz */\r\n        button:hover {\r\n            opacity: 0.8; /* Enyh\xe9n \xe1tl\xe1tsz\xf3v\xe1 v\xe1lik hover \xe1llapotban */\r\n        }\r\n    </style>\r\n</head>\r\n<body>\r\n\r\n    \x3c!-- A visszasz\xe1ml\xe1l\xf3 \xe9rt\xe9ke megjelenik itt --\x3e\r\n    <h1 id="countdown">10</h1>\r\n    <div>\r\n        \x3c!-- Ind\xedt\xe1s gomb --\x3e\r\n        <button id="startBtn">Ind\xedt\xe1s</button>\r\n        \x3c!-- Meg\xe1ll\xedt\xe1s gomb --\x3e\r\n        <button id="stopBtn">Meg\xe1ll\xedt\xe1s</button>\r\n    </div>\r\n\r\n    <script>\r\n        // Az aktu\xe1lis visszasz\xe1ml\xe1l\xf3 \xe9rt\xe9k elem\xe9nek lek\xe9r\xe9se\r\n        const countdownElement = document.getElementById(\'countdown\');\r\n\r\n        // Az Ind\xedt\xe1s \xe9s Meg\xe1ll\xedt\xe1s gombok elemeinek lek\xe9r\xe9se\r\n        const startBtn = document.getElementById(\'startBtn\');\r\n        const stopBtn = document.getElementById(\'stopBtn\');\r\n\r\n        // A visszasz\xe1ml\xe1l\xf3 indul\xf3 \xe9rt\xe9ke\r\n        let count = 10;\r\n\r\n        // Az timeout azonos\xedt\xf3ja; ezzel lehet t\xf6r\xf6lni a visszasz\xe1ml\xe1l\xe1st\r\n        let timeoutId = null;\r\n\r\n        // A visszasz\xe1ml\xe1l\xf3 friss\xedt\xe9se\r\n        function updateCountdown() {\r\n            // Az aktu\xe1lis \xe9rt\xe9k megjelen\xedt\xe9se a sz\xe1ml\xe1l\xf3 elemben\r\n            countdownElement.textContent = count;\r\n\r\n            // Ha m\xe9g nem \xe9rt\xfck el a null\xe1t, cs\xf6kkents\xfck az \xe9rt\xe9ket\r\n            if (count > 0) {\r\n                count--; // A sz\xe1ml\xe1l\xf3 \xe9rt\xe9k\xe9nek cs\xf6kkent\xe9se\r\n                timeoutId = setTimeout(updateCountdown, 1000); // 1 m\xe1sodperces k\xe9sleltet\xe9s\r\n            } else {\r\n                timeoutId = null; // Az id\u0151z\xedt\u0151 null\xe1z\xe1sa\r\n            }\r\n        }\r\n\r\n        // Az "Ind\xedt\xe1s" gombra kattintva indul a visszasz\xe1ml\xe1l\xe1s\r\n        startBtn.addEventListener(\'click\', () => {\r\n            // Ellen\u0151rz\xe9s: ha nincs akt\xedv visszasz\xe1ml\xe1l\xe1s, \xe9s az \xe9rt\xe9k m\xe9g nagyobb mint 0\r\n            if (!timeoutId && count > 0) {\r\n                updateCountdown(); // Azonnali friss\xedt\xe9s\r\n            }\r\n        });\r\n\r\n        // A "Meg\xe1ll\xedt\xe1s" gombra kattintva le\xe1ll a visszasz\xe1ml\xe1l\xe1s\r\n        stopBtn.addEventListener(\'click\', () => {\r\n            if (timeoutId) {\r\n                clearTimeout(timeoutId); // Az id\u0151z\xedt\u0151 t\xf6rl\xe9se\r\n                timeoutId = null; // Az id\u0151z\xedt\u0151 azonos\xedt\xf3j\xe1nak null\xe1z\xe1sa\r\n            }\r\n        });\r\n    <\/script>\r\n\r\n</body>\r\n</html>\n'})}),(0,n.jsx)(t.h4,{id:"m\u0171k\xf6d\xe9s-r\xf6vid-magyar\xe1zata",children:"M\u0171k\xf6d\xe9s r\xf6vid magyar\xe1zata:"}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"HTML:"})," A ",(0,n.jsx)(t.code,{children:"<h1>"}),' elem megjelen\xedti a visszasz\xe1ml\xe1l\xf3 aktu\xe1lis \xe9rt\xe9k\xe9t. Az "Ind\xedt\xe1s" \xe9s "Meg\xe1ll\xedt\xe1s" gombok az esem\xe9nyek vez\xe9rl\xe9s\xe9re szolg\xe1lnak.']}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"JavaScript:"})}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsxs)(t.strong,{children:[(0,n.jsx)(t.code,{children:"setTimeout"}),":"]})," Egyszeri id\u0151z\xedt\xe9ssel friss\xedti a visszasz\xe1ml\xe1l\xf3 \xe9rt\xe9k\xe9t, amely \xfajrah\xedvja \xf6nmag\xe1t."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsxs)(t.strong,{children:[(0,n.jsx)(t.code,{children:"clearTimeout"}),":"]})," Meg\xe1ll\xedtja az aktu\xe1lis id\u0151z\xedt\xe9st."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Gombok esem\xe9nykezel\xe9se:"}),' Az "Ind\xedt\xe1s" elind\xedtja, a "Meg\xe1ll\xedt\xe1s" pedig le\xe1ll\xedtja a visszasz\xe1ml\xe1l\xe1st.']}),"\n",(0,n.jsx)(t.li,{children:'Az "Ind\xedt\xe1s" gomb csak akkor m\u0171k\xf6dik, ha nincs fut\xf3 id\u0151z\xedt\u0151.'}),"\n"]})]}),"\n",(0,n.jsx)(t.h2,{id:"projektfeladatok",children:"Projektfeladatok"}),"\n",(0,n.jsx)(t.p,{children:"Hamarosan"})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>i});var l=s(6540);const n={},a=l.createContext(n);function r(e){const t=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),l.createElement(a.Provider,{value:t},e.children)}}}]);