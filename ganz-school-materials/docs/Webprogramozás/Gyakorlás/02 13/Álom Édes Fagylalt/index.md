---
title: Álom-Édes Fagyizó webalkalmazás bemutatása
sidebar_position: 1
description: Az Álom-Édes Fagyizó háromrétegű webalkalmazásának rövid bemutatása.
---

# Az Álom-Édes Fagyizó projekt rövid bemutatása

Az **Álom-Édes Fagyizó** egy olyan webalkalmazás, amely egy képzeletbeli fagylaltozó adminisztrációs felületét valósítja meg.

:::info áttekintés
Ez a projekt egy **háromrétegű webalkalmazás**, amely **MySQL adatbázist**, **Node.js + Express alapú backend szervert**, valamint **natív JavaScriptre épülő frontend oldalt** használ. A felhasználói felület **HTML**, **CSS** és **Bootstrap** segítségével készült, így a weboldal reszponzív módon alkalmazkodik a különböző képernyőméretekhez.
:::

## A webalkalmazás felépítése

A rendszer alsó rétegét az adatbázis adja, amelyet **MySQL** segítségével valósítottunk meg. Ez tárolja a fagylaltokhoz kapcsolódó adatokat, például a nevüket, típusukat, árukat, leírásukat és elérhetőségüket.

A középső réteg a **backend**, amely **Node.js** futtatókörnyezetben, **Express** keretrendszerrel készült. Ez a szerveroldali rész felel az útvonalak kezeléséért, az API-végpontok működéséért, valamint az adatbázissal való kommunikációért.

A felső réteg a **frontend**, amelyet **natív JavaScript**, **HTML**, **CSS** és **Bootstrap** felhasználásával készítettünk el.

## A megvalósított API-műveletek

A projekt a klasszikus CRUD-logikára épül, ezért négy alapvető HTTP-műveletet valósít meg:

- `GET` – adatok lekérdezése
- `POST` – új adat létrehozása
- `PUT` – meglévő adat módosítása
- `DELETE` – adat törlése

:::tip Mit jelent ez a gyakorlatban?
A felhasználó le tudja kérdezni a fagylaltokat, fel tud venni új elemet, módosítani tudja a meglévő rekordokat, és törölni is tudja azokat. Ezáltal a projekt egy teljes, működő CRUD webalkalmazásnak tekinthető.
:::

## Projektelérés és videós útmutatók

A projekthez az alábbi linken lehet hozzáférni:

`https://github.com/GanzSchool/FFA39.git`

:::danger A repozitorihoz hozzáférés szükséges!

:::

:::note Fontos
Az egyes videók lépésről lépésre végigvezetnek a megoldás elkészítésének folyamatán.
:::