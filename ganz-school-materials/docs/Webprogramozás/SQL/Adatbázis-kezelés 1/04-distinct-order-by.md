---
title: DISTINCT és ORDER BY
sidebar_position: 4
description: DISTINCT és ORDER BY használata MariaDB-ben
---

:::info MariaDB
A példák és az indító scriptek MariaDB-kompatibilis SQL-t használnak. A mintaadatbázisok `utf8mb4` karakterkészlettel jönnek létre, így a magyar ékezetes adatok is biztonságosan tárolhatók.
:::

# `DISTINCT` és `ORDER BY`

Ebben a részben az ismétlődő értékek kiszűrését és a lekérdezési eredmények rendezését gyakoroljuk.

## SQL SCRIPT FELADTOKHOZ

```sql
CREATE DATABASE IF NOT EXISTS iskola CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE iskola;

DROP TABLE IF EXISTS tanulok;

CREATE TABLE tanulok (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nev VARCHAR(100) NOT NULL,
    eletkor INT NOT NULL,
    osztaly VARCHAR(10) NOT NULL,
    atlag DECIMAL(3,1) NOT NULL
);

INSERT INTO tanulok (nev, eletkor, osztaly, atlag) VALUES
('Kiss Anna', 16, '10.A', 4.7),
('Nagy Péter', 17, '10.B', 3.9),
('Tóth Réka', 16, '10.A', 4.4),
('Szabó Márk', 15, '9.C', 3.6),
('Varga Dóra', 17, '11.B', 4.9),
('Kovács Levente', 16, '10.C', 4.1),
('Molnár Eszter', 15, '9.A', 4.3),
('Balogh Máté', 17, '11.A', 3.8),
('Horváth Lilla', 16, '10.B', 4.6),
('Juhász Bence', 15, '9.B', 3.5);
```

## Ismétlődések kiszűrése

Ha egy oszlopban ismétlődő értékek vannak, és csak az egyedi értékek érdekelnek, akkor a **DISTINCT** kulcsszót kell használni.

```sql
SELECT DISTINCT osztaly FROM tanulok;
```

Ez minden osztályt csak egyszer jelenít meg.

```sql
SELECT DISTINCT osztaly, eletkor FROM tanulok;
```

Ez az egyedi kombinációkat adja vissza.

## Adatok rendezése

A lekérdezések eredményét az **ORDER BY** segítségével lehet rendezni.

```sql
SELECT nev, atlag FROM tanulok
ORDER BY atlag;
```

Ez növekvő sorrend (alapértelmezett).

```sql
SELECT nev, atlag FROM tanulok
ORDER BY atlag DESC;
```

Ez csökkenő sorrend.

```sql
SELECT nev, osztaly FROM tanulok
ORDER BY osztaly, nev;
```

Először osztály szerint, azon belül név szerint rendez.

## Szűrés és rendezés együtt

A **WHERE** és az **ORDER BY** gyakran együtt szerepel.

```sql
SELECT nev, atlag FROM tanulok
WHERE atlag > 4.0
ORDER BY atlag DESC;
```

Csak a 4.0 feletti tanulók, csökkenő sorrendben.

## Szűrés és ismétlődések kiszűrése együtt

```sql
SELECT DISTINCT osztaly
FROM tanulok
WHERE atlag > 4.0;
```

Csak azok az osztályok jelennek meg, ahol van 4.0 feletti tanuló.

## Tipikus hibák

Szöveg idézőjel nélkül:

```sql
WHERE osztaly = 10.A
```

Helyesen:

```sql
WHERE osztaly = '10.A'
```

Rossz operátor:

```sql
WHERE atlag => 4.0
```

Helyesen:

```sql
WHERE atlag >= 4.0
```

Rossz sorrend:

```sql
SELECT * ORDER BY atlag FROM tanulok;
```

Helyesen:

```sql
SELECT * FROM tanulok ORDER BY atlag;
```

## Feladatok

1. Írd ki az összes tanulót a 10.B osztályból!
2. Írd ki azoknak a nevét és átlagát, akiknek az átlaga nagyobb, mint 4.0!
3. Listázd ki az összes különböző osztályt!
4. Írd ki a tanulókat átlag szerint növekvő sorrendben!
5. Írd ki a 4.0 feletti tanulókat csökkenő sorrendben!

<details>
<summary><strong>Megoldások</strong></summary>

```sql
-- 1.
SELECT *
FROM tanulok
WHERE osztaly = '10.B';

-- 2.
SELECT nev, atlag
FROM tanulok
WHERE atlag > 4.0;

-- 3.
SELECT DISTINCT osztaly
FROM tanulok;

-- 4.
SELECT *
FROM tanulok
ORDER BY atlag ASC;

-- 5.
SELECT *
FROM tanulok
WHERE atlag > 4.0
ORDER BY atlag DESC;
```

</details>

## Összegzés

Ebben az anyagban megismerted:

* a **WHERE** használatát szűréshez
* a **DISTINCT** használatát ismétlődések eltávolításához
* az **ORDER BY** használatát rendezéshez
