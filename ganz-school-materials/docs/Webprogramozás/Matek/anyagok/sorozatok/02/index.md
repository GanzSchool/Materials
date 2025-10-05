---
title: Összegképletek feladatok
---

# **5. Sorozatok összegképletei**

---

## **1. Számtani sorozat összege**

**Képlet:**

```math
Sₙ = ((a₁ + aₙ) · n) / 2
````

### **Feladat 1**

Egy számtani sorozat első tagja **a₁ = 4**, a különbség **d = 6**.
Számítsd ki az első **10 tag összegét**!

**Megoldás lépései:**

1. Először kiszámítjuk a 10. tagot:

   ```math
   a₁₀ = a₁ + (n - 1) · d = 4 + 9 · 6 = 4 + 54 = 58
   ```

2. Használjuk az összegképletet:

   ```math
   S₁₀ = ((a₁ + a₁₀) · n) / 2 = ((4 + 58) · 10) / 2 = 310
   ```

**Az első 10 tag összege: 310**

**Magyarázat:**
A sorozat tagjai: 4, 10, 16, …, 58.
Ha összeadnánk őket egyenként, sok számolás lenne, de a képlet gyorsan ad eredményt.

---

## **2. Mértani sorozat összege**

**Képlet:**

```math
Sₙ = a₁ · (qⁿ - 1) / (q - 1)   (q ≠ 1)
```

### **Feladat 2**

Egy mértani sorozat első tagja **a₁ = 2**, hányadosa **q = 3**.
Számítsd ki az első **5 tag összegét**!

**Megoldás lépései:**

1. Első 5 tag: 2, 6, 18, 54, 162
2. Képlettel:

   ```math
   S₅ = 2 · (3⁵ - 1) / (3 - 1) = 2 · (243 - 1) / 2 = 242
   ```

**Az első 5 tag összege: 242**

**Magyarázat:**
Ha kézzel összeadnánk (2 + 6 + 18 + 54 + 162 = 242), ugyanazt kapjuk, de a képlet gyorsabb.

---

## **3. Vegyes feladat – melyik képlet kell?**

**Feladat 3**

Számítsd ki a következő sorozatok összegét:

a) 1, 2, 3, …, 100
b) 1, 2, 4, 8, 16

**Megoldás:**

a) Számtani sorozat:
`a₁ = 1`, `a₁₀₀ = 100`, `n = 100`

```math
S₁₀₀ = ((1 + 100) · 100) / 2 = 5050
```

b) Mértani sorozat:
`q = 2`, `n = 5`

```math
S₅ = (1 · (2⁵ - 1)) / (2 - 1) = 31
```

**Magyarázat:**
A felismerés a kulcs:
ha **állandó különbség** van → számtani képlet,
ha **állandó szorzó** van → mértani képlet.

---

## **4. Életszerű példa**

**Feladat 4**

Egy spórolós diák minden héten 500 Ft-tal többet tesz félre, mint az előző héten.
Az első héten 1000 Ft-ot tett félre. Mennyi pénzt spórol összesen 10 hét alatt?

**Megoldás:**

Számtani sorozat: `a₁ = 1000`, `d = 500`

```math
a₁₀ = 1000 + (10 - 1) · 500 = 5500
S₁₀ = ((1000 + 5500) · 10) / 2 = 32500
```

**A diák összesen 32 500 Ft-ot gyűjtött.**

