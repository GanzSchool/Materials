---
title: NULL kezelése
sidebar_position: 6
description: NULL, IS NULL és IS NOT NULL használata MariaDB-ben
---

:::info MariaDB
A példák és az indító scriptek MariaDB-kompatibilis SQL-t használnak. A mintaadatbázisok `utf8mb4` karakterkészlettel jönnek létre, így a magyar ékezetes adatok is biztonságosan tárolhatók.
:::

# `NULL` értékek kezelése

A `NULL` hiányzó vagy ismeretlen értéket jelöl. Nem azonos a 0-val és nem azonos az üres szöveggel.

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

## A NULL érték jelentése

A **NULL** nem ugyanaz, mint a nulla, és nem ugyanaz, mint az üres szöveg.

A **NULL** azt jelenti, hogy az adott mező értéke:

* hiányzik,
* ismeretlen,
* vagy nincs megadva.

Például ha egy könyvnél még nem ismert az oldalszám, akkor az `oldalszam` mező értéke lehet `NULL`.

```sql
INSERT INTO konyvek (cim, szerzo, ev, mufaj, oldalszam)
VALUES ('Titokzatos tortenet', 'Ismeretlen szerzo', 2024, 'regeny', NULL);
```

Ez nem azt jelenti, hogy a könyv 0 oldalas, hanem azt, hogy az oldalszám nincs megadva.

## A NULL vizsgálata

A **NULL** értéket nem lehet sima egyenlőségjellel vizsgálni.

Hibás megoldás:

```sql
SELECT * FROM konyvek
WHERE oldalszam = NULL;
```

Helyes megoldás:

```sql
SELECT * FROM konyvek
WHERE oldalszam IS NULL;
```

Ha pedig azokat a rekordokat szeretnéd lekérdezni, ahol az érték meg van adva, akkor ezt kell használni:

```sql
SELECT * FROM konyvek
WHERE oldalszam IS NOT NULL;
```

## Feladatok

1. Szúrj be egy új könyvet `Elveszett kezirat` címmel úgy, hogy az `oldalszam` értéke `NULL` legyen.
2. Kérdezd le azokat a könyveket, amelyeknél az oldalszám hiányzik.
3. Kérdezd le azokat a könyveket, amelyeknél az oldalszám meg van adva.

<details>
<summary><strong>Megoldások</strong></summary>

```sql
INSERT INTO konyvek (cim, szerzo, ev, mufaj, oldalszam)
VALUES ('Elveszett kezirat', 'Nevtelen', 2025, 'regeny', NULL);

SELECT * FROM konyvek
WHERE oldalszam IS NULL;

SELECT * FROM konyvek
WHERE oldalszam IS NOT NULL;
```

</details>
