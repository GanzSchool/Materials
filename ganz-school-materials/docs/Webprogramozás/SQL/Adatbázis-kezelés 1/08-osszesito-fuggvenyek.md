---
title: Összesítő függvények
sidebar_position: 8
description: COUNT, SUM, AVG, MIN és MAX használata MariaDB-ben
---

:::info MariaDB
A példák és az indító scriptek MariaDB-kompatibilis SQL-t használnak. A mintaadatbázisok `utf8mb4` karakterkészlettel jönnek létre, így a magyar ékezetes adatok is biztonságosan tárolhatók.
:::

# Összesítő függvények

A `COUNT`, `SUM`, `AVG`, `MIN` és `MAX` több rekordból számít összesített eredményt.

## Mintaadatok

Ebben a példában egy mozi jegyeladási adatbázissal dolgozunk. A tábla neve: `jegyek`.

```text
id | film_cim     | ar   | nezok_szama | terem | datum
1  | Avatar       | 2500 | 120         | 1     | 2024-05-01
2  | Batman       | 2200 | 80          | 2     | 2024-05-01
3  | Titanic      | 2000 | 150         | 1     | 2024-05-02
4  | Joker        | 2400 | 60          | 3     | 2024-05-02
5  | Avatar       | 2500 | 90          | 2     | 2024-05-03
6  | Dune         | 2600 | 110         | 1     | 2024-05-03
7  | Inception    | 2300 | 95          | 2     | 2024-05-04
8  | Interstellar | 2700 | 130         | 1     | 2024-05-04
9  | Batman       | 2200 | 70          | 3     | 2024-05-05
10 | Titanic      | 2000 | 140         | 2     | 2024-05-05
11 | Joker        | 2400 | 75          | 1     | 2024-05-06
12 | Dune         | 2600 | 100         | 2     | 2024-05-06
```

<details>
<summary><strong>SQL SCRIPT</strong></summary>

```sql
CREATE DATABASE IF NOT EXISTS mozi CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE mozi;

DROP TABLE IF EXISTS jegyek;

CREATE TABLE jegyek (
    id INT AUTO_INCREMENT PRIMARY KEY,
    film_cim VARCHAR(100) NOT NULL,
    ar INT NOT NULL,
    nezok_szama INT NOT NULL,
    terem INT NOT NULL,
    datum DATE NOT NULL
);

INSERT INTO jegyek (film_cim, ar, nezok_szama, terem, datum) VALUES
('Avatar', 2500, 120, 1, '2024-05-01'),
('Batman', 2200, 80, 2, '2024-05-01'),
('Titanic', 2000, 150, 1, '2024-05-02'),
('Joker', 2400, 60, 3, '2024-05-02'),
('Avatar', 2500, 90, 2, '2024-05-03'),
('Dune', 2600, 110, 1, '2024-05-03'),
('Inception', 2300, 95, 2, '2024-05-04'),
('Interstellar', 2700, 130, 1, '2024-05-04'),
('Batman', 2200, 70, 3, '2024-05-05'),
('Titanic', 2000, 140, 2, '2024-05-05'),
('Joker', 2400, 75, 1, '2024-05-06'),
('Dune', 2600, 100, 2, '2024-05-06');
```

</details>

## Mi az az aggregálás?

Az aggregálás azt jelenti, hogy több adatból egyetlen összesített eredményt számolunk ki.

Ilyen kérdések például:

* hány rekord van a táblában,
* mennyi az összes nézőszám,
* mekkora az átlagos jegyár,
* melyik a legdrágább vagy legolcsóbb jegy.

Az összesítő függvények mindig több sor adataiból készítenek egy közös eredményt.

## A COUNT használata

A **COUNT** függvény azt mondja meg, hogy hány rekord található a lekérdezés eredményében.

```sql
SELECT COUNT(*) FROM jegyek;
```

Ez a lekérdezés megadja, hány vetítés szerepel a táblában.

Ha csak egy adott filmhez tartozó rekordokat szeretnéd megszámolni, akkor szűrést is használhatsz:

```sql
SELECT COUNT(*) FROM jegyek
WHERE film_cim = 'Avatar';
```

Ez azt adja meg, hány `Avatar` vetítés szerepel a táblában.

Ha a különböző filmcímek számát szeretnéd meghatározni, akkor a `DISTINCT` is használható:

```sql
SELECT COUNT(DISTINCT film_cim) FROM jegyek;
```

## A SUM használata

A **SUM** függvény egy számoszlop értékeit adja össze.

```sql
SELECT SUM(nezok_szama) FROM jegyek;
```

Ez a lekérdezés megmutatja az összes néző számát.

Bevételt is lehet számolni vele, ha az árat megszorzod a nézőszámmal:

```sql
SELECT SUM(ar * nezok_szama) FROM jegyek;
```

Ez a teljes bevételt adja vissza.

Ha csak egy adott film bevételére vagy kíváncsi, akkor feltételt is használhatsz:

```sql
SELECT SUM(ar * nezok_szama) FROM jegyek
WHERE film_cim = 'Batman';
```

## Az AVG használata

Az **AVG** függvény egy számoszlop átlagát számolja ki.

```sql
SELECT AVG(ar) FROM jegyek;
```

Ez az átlagos jegyárat adja meg.

Ugyanez használható más oszlopokra is, például a nézőszámra:

```sql
SELECT AVG(nezok_szama) FROM jegyek;
```

Ha csak egy konkrét film átlagos nézőszámát szeretnéd látni, akkor szűrhetsz is:

```sql
SELECT AVG(nezok_szama) FROM jegyek
WHERE film_cim = 'Dune';
```

## A MIN és MAX használata

A **MIN** függvény a legkisebb értéket adja vissza, a **MAX** pedig a legnagyobbat.

```sql
SELECT MIN(ar) FROM jegyek;
```

Ez a legkisebb jegyárat adja meg.

```sql
SELECT MAX(ar) FROM jegyek;
```

Ez a legnagyobb jegyárat adja meg.

A nézőszámra is használható:

```sql
SELECT MAX(nezok_szama) FROM jegyek;
```

Ez a legnagyobb nézőszámot adja vissza.

```sql
SELECT MIN(nezok_szama) FROM jegyek;
```

Ez a legkisebb nézőszámot adja meg.

## Feladatok

1. Számold ki, hány különböző film szerepel a `jegyek` táblában.
2. Számold ki, összesen hány néző volt a `2024-05-04` napon.
3. Számold ki, mennyi bevételt hozott összesen a `Batman` film.
4. Kérdezd le a legnagyobb nézőszámot.
5. Kérdezd le a legkisebb nézőszámot.
6. Számold ki a `Dune` vetítéseinek átlagos nézőszámát.
7. Számold ki, összesen hány néző volt az 1-es teremben.
8. Számold ki a `2024-05-05` napi összbevételt.

<details>
<summary><strong>Megoldások</strong></summary>

```sql
SELECT COUNT(DISTINCT film_cim) FROM jegyek;
SELECT SUM(nezok_szama) FROM jegyek WHERE datum = '2024-05-04';
SELECT SUM(ar * nezok_szama) FROM jegyek WHERE film_cim = 'Batman';
SELECT MAX(nezok_szama) FROM jegyek;
SELECT MIN(nezok_szama) FROM jegyek;
SELECT AVG(nezok_szama) FROM jegyek WHERE film_cim = 'Dune';
SELECT SUM(nezok_szama) FROM jegyek WHERE terem = 1;
SELECT SUM(ar * nezok_szama) FROM jegyek WHERE datum = '2024-05-05';
```

</details>
