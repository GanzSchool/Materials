---
title: Komplex egytáblás lekérdezések
sidebar_position: 10
description: LIMIT, rendezés, szűrés és összesítés kombinálása MariaDB-ben
---

:::info MariaDB
A példák és az indító scriptek MariaDB-kompatibilis SQL-t használnak. A mintaadatbázisok `utf8mb4` karakterkészlettel jönnek létre, így a magyar ékezetes adatok is biztonságosan tárolhatók.
:::

# Komplex egytáblás lekérdezések

Ebben a részben a már megismert szűrés, rendezés, összesítés és `LIMIT` kerül együtt alkalmazásra egyetlen táblán.

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

## Az eredmény korlátozása LIMIT használatával

Előfordulhat, hogy nem az összes rekordot szeretnéd látni, hanem csak néhányat. Erre szolgál a **LIMIT**.

```sql
SELECT * FROM jegyek
LIMIT 3;
```

Ez csak az első 3 rekordot jeleníti meg.

Ha a legdrágább vetítéseket szeretnéd látni, akkor rendezéssel együtt célszerű használni:

```sql
SELECT film_cim, ar, datum
FROM jegyek
ORDER BY ar DESC
LIMIT 4;
```

Ez a 4 legdrágább vetítést adja vissza.

## Kombinált példák

Az összesítő függvények és a szűrés jól használhatók együtt.

```sql
SELECT SUM(nezok_szama)
FROM jegyek
WHERE terem = 1;
```

Ez megmutatja, összesen hány néző volt az 1-es teremben.

```sql
SELECT SUM(ar * nezok_szama)
FROM jegyek
WHERE datum = '2024-05-05';
```

Ez az adott napi teljes bevételt adja vissza.

```sql
SELECT film_cim, ar
FROM jegyek
WHERE ar = (SELECT MAX(ar) FROM jegyek);
```

Ez annak a filmnek a címét és árát jeleníti meg, amelyhez a legmagasabb jegyár tartozik.

## Tipikus hibák

Gyakori hiba, hogy valaki a `COUNT` függvényt hibás formában próbálja használni:

```sql
SELECT COUNT(ar, film_cim) FROM jegyek;
```

Helyesen:

```sql
SELECT COUNT(*) FROM jegyek;
```

Szintén gyakori hiba, hogy valaki szöveges oszlopot próbál összesíteni:

```sql
SELECT SUM(film_cim) FROM jegyek;
```

Ez nem működik, mert a `SUM` csak számoszlopon használható.

A `LIMIT` önmagában csak az első néhány rekordot adja vissza. Ha a legnagyobb vagy legkisebb értékeket keresed, akkor előtte rendezni is kell:

```sql
SELECT film_cim, ar
FROM jegyek
ORDER BY ar DESC
LIMIT 3;
```

## Feladatok

1. Írd ki a 4 legdrágább vetítést úgy, hogy csak a `film_cim`, `ar` és `datum` mezők jelenjenek meg.
2. Írd ki annak a filmnek a címét és árát, amelyikhez a legmagasabb jegyár tartozik.
3. Számold ki az 1-es terem összes nézőszámát.
4. Számold ki a `2024-05-05` nap teljes bevételét.

<details>
<summary><strong>Megoldások</strong></summary>

```sql
SELECT film_cim, ar, datum
FROM jegyek
ORDER BY ar DESC
LIMIT 4;

SELECT film_cim, ar
FROM jegyek
WHERE ar = (SELECT MAX(ar) FROM jegyek);

SELECT SUM(nezok_szama)
FROM jegyek
WHERE terem = 1;

SELECT SUM(ar * nezok_szama)
FROM jegyek
WHERE datum = '2024-05-05';
```

</details>
