---
title: INSERT, UPDATE és DELETE
sidebar_position: 7
description: Adatok beszúrása, módosítása és törlése MariaDB-ben
---

:::info MariaDB
A példák és az indító scriptek MariaDB-kompatibilis SQL-t használnak. A mintaadatbázisok `utf8mb4` karakterkészlettel jönnek létre, így a magyar ékezetes adatok is biztonságosan tárolhatók.
:::

# `INSERT INTO`, `UPDATE` és `DELETE`

Ezek az utasítások az adatbázis tartalmát módosítják: új rekordot szúrnak be, meglévőt módosítanak vagy rekordot törölnek.

## Mintaadatok

Ebben a példában egy könyvtári adatbázissal dolgozunk. A tábla neve: `konyvek`.

```text
id | cim                   | szerzo              | ev   | mufaj                | oldalszam
1  | Az ajto               | Szabo Magda         | 1987 | regeny               | 280
2  | Egri csillagok        | Gardonyi Geza       | 1901 | tortenelmi regeny    | 512
3  | A Pal utcai fiuk      | Molnar Ferenc       | 1907 | ifjusagi regeny      | 192
4  | Tizedes meg a tobbiek | Oszter Sandor       | 1965 | filmregeny           | 210
5  | Abigel                | Szabo Magda         | 1970 | ifjusagi regeny      | 430
6  | Titokzatos tortenet   | Ismeretlen szerzo   | 2024 | regeny               | NULL
7  | Lathatatlan ember     | Geza Gardonyi       | 1901 | tortenelmi regeny    | 350
8  | Esti Kornel           | Kosztolanyi Dezso   | 1933 | novellafuzer         | 180
9  | Legy jo mindhalalig   | Moricz Zsigmond     | 1920 | regeny               | 300
10 | Utas es holdvilag     | Szerb Antal         | 1937 | regeny               | 270
```

<details>
<summary><strong>SQL SCRIPT</strong></summary>

```sql
CREATE DATABASE IF NOT EXISTS konyvtar CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE konyvtar;

DROP TABLE IF EXISTS konyvek;

CREATE TABLE konyvek (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cim VARCHAR(150) NOT NULL,
    szerzo VARCHAR(100) NOT NULL,
    ev INT NOT NULL,
    mufaj VARCHAR(100) NOT NULL,
    oldalszam INT NULL
);

INSERT INTO konyvek (cim, szerzo, ev, mufaj, oldalszam) VALUES
('Az ajto', 'Szabo Magda', 1987, 'regeny', 280),
('Egri csillagok', 'Gardonyi Geza', 1901, 'tortenelmi regeny', 512),
('A Pal utcai fiuk', 'Molnar Ferenc', 1907, 'ifjusagi regeny', 192),
('Tizedes meg a tobbiek', 'Oszter Sandor', 1965, 'filmregeny', 210),
('Abigel', 'Szabo Magda', 1970, 'ifjusagi regeny', 430),
('Titokzatos tortenet', 'Ismeretlen szerzo', 2024, 'regeny', NULL),
('Lathatatlan ember', 'Geza Gardonyi', 1901, 'tortenelmi regeny', 350),
('Esti Kornel', 'Kosztolanyi Dezso', 1933, 'novellafuzer', 180),
('Legy jo mindhalalig', 'Moricz Zsigmond', 1920, 'regeny', 300),
('Utas es holdvilag', 'Szerb Antal', 1937, 'regeny', 270);
```

</details>

## Az adatmódosító utasítások szerepe

Az SQL-ben vannak olyan utasítások, amelyek ténylegesen megváltoztatják a tábla tartalmát. Ezeket használjuk akkor, amikor új rekordot akarunk felvinni, módosítani szeretnénk egy már meglévő adatot, vagy törölni akarunk egy sort.

Ebben az órában a következő utasításokkal dolgozunk:

* **INSERT INTO** – új adat beszúrása
* **UPDATE** – meglévő adat módosítása
* **DELETE** – rekord törlése

Ezek az utasítások az adatbázis tartalmát módosítják, ezért használatuknál mindig körültekintően kell dolgozni.

## Az INSERT INTO használata

Az **INSERT INTO** utasítással új rekordot adhatunk hozzá egy táblához.

```sql
INSERT INTO konyvek (cim, szerzo, ev, mufaj, oldalszam)
VALUES ('Az ajto', 'Szabo Magda', 1987, 'regeny', 280);
```

Ebben a parancsban először megadod, melyik táblába szeretnél adatot beszúrni, utána felsorolod az oszlopokat, majd a `VALUES` részben megadod a hozzájuk tartozó értékeket.

Egyetlen utasítással több rekordot is fel lehet venni:

```sql
INSERT INTO konyvek (cim, szerzo, ev, mufaj, oldalszam)
VALUES
('Egri csillagok', 'Gardonyi Geza', 1901, 'tortenelmi regeny', 512),
('A Pal utcai fiuk', 'Molnar Ferenc', 1907, 'ifjusagi regeny', 192);
```

Ilyenkor minden zárójeles rész egy új rekordot jelent.

## Az UPDATE használata

Az **UPDATE** utasítással meglévő adatokat tudsz módosítani.

```sql
UPDATE konyvek
SET oldalszam = 300
WHERE cim = 'Az ajto';
```

A `SET` rész mondja meg, hogy melyik oszlop milyen új értéket kapjon. A `WHERE` rész pedig meghatározza, hogy melyik rekord módosuljon.

Egyszerre több oszlopot is lehet módosítani:

```sql
UPDATE konyvek
SET mufaj = 'klasszikus regeny', oldalszam = 200
WHERE cim = 'A Pal utcai fiuk';
```

Ebben az esetben ugyanazon rekord két mezője változik meg.

## Miért fontos a WHERE az UPDATE esetén?

Az **UPDATE** használatánál különösen fontos a `WHERE` feltétel.

```sql
UPDATE konyvek
SET mufaj = 'ismeretlen';
```

Ez a parancs az összes rekord műfaját `ismeretlen` értékre módosítja, mert nem adtuk meg, hogy melyik sorra vonatkozzon a módosítás.

Ezért az **UPDATE** utasítás használatakor mindig ellenőrizni kell, hogy szerepel-e a megfelelő `WHERE` feltétel.

## A DELETE használata

A **DELETE** utasítással egy vagy több rekordot törölhetsz a táblából.

```sql
DELETE FROM konyvek
WHERE cim = 'Egri csillagok';
```

Ez a parancs törli azt a rekordot, amelynek a címe `Egri csillagok`.

## Miért fontos a WHERE a DELETE esetén?

A **DELETE** használatánál is nagyon fontos a `WHERE` feltétel.

```sql
DELETE FROM konyvek;
```

Ez a parancs a tábla összes rekordját törli. Maga a tábla megmarad, de teljesen üres lesz.

Ezért a **DELETE** használatakor is mindig figyelj arra, hogy csak a kívánt rekordokra vonatkozzon a törlés.

## Feladatok

1. Szúrj be egy új könyvet `Java programozas alapjai` címmel a forrásban megadott adatokkal.
2. Módosítsd az `Abigel` műfaját `regeny` értékre.
3. Módosítsd az `Esti Kornel` oldalszámát 200-ra.
4. Töröld a `Titokzatos tortenet` című könyvet.

<details>
<summary><strong>Megoldások</strong></summary>

```sql
INSERT INTO konyvek (cim, szerzo, ev, mufaj, oldalszam)
VALUES ('Java programozas alapjai', 'Kovacs Bela', 2020, 'szakmai konyv', 350);

UPDATE konyvek
SET mufaj = 'regeny'
WHERE cim = 'Abigel';

UPDATE konyvek
SET oldalszam = 200
WHERE cim = 'Esti Kornel';

DELETE FROM konyvek
WHERE cim = 'Titokzatos tortenet';
```

</details>
