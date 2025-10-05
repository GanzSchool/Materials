---
title: Sorozatok feladatok
---

# 🔹 **Számtani sorozat feladatok**

---

### **1. feladat – egyszerű tagkeresés**

Az első tag $a_1 = 7$, a különbség $d = 3$.
Írd fel az első 5 tagot!

**Megoldási terv:**
Sorban mindig hozzáadjuk a különbséget.

**Megoldás:**
$7, 10, 13, 16, 19$

 Ez egy **növekvő számtani sorozat**.

---

### **2. feladat – adott tag kiszámítása**

Számtani sorozat: $a_1 = 4$, $d = 5$.
Számítsd ki a 12. tagot!

**Megoldási terv:**
Használjuk a képletet:

$$
a_n = a_1 + (n - 1) \cdot d
$$

**Megoldás:**

$$
a_{12} = 4 + (12 - 1) \cdot 5 = 4 + 55 = 59
$$

 $a_{12} = \mathbf{59}$

---

### **3. feladat – két tag alapján a különbség keresése**

Egy számtani sorozatban $a_3 = 14$, $a_7 = 30$.
Mennyi a különbség, és mi az első tag?

**Megoldási terv:**
Képlet: $a_n = a_1 + (n-1)\cdot d$.
Így két egyenletből két ismeretlent oldunk meg.

**Megoldás:**

$$
\begin{cases}
a_3 = a_1 + 2d = 14 \
a_7 = a_1 + 6d = 30
\end{cases}
$$

Kivonás:
$(a_7 - a_3) = 4d = 16 \Rightarrow d = 4$

Behelyettesítés:
$a_1 + 2 \cdot 4 = 14 \Rightarrow a_1 = 6$

 $a_1 = \mathbf{6}$, $d = \mathbf{4}$

---

### **4. feladat – összeg számítása**

Egy számtani sorozat első tagja $a_1 = 2$, különbsége $d = 5$.
Mennyi az első 20 tag összege?

**Megoldási terv:**

1. Megkeressük a 20. tagot:
   $a_{20} = a_1 + (n-1)\cdot d$
2. Használjuk az összegképletet:

$$
S_n = \frac{(a_1 + a_n)\cdot n}{2}
$$

**Megoldás:**

$$
a_{20} = 2 + 19 \cdot 5 = 97
$$

$$
S_{20} = \frac{(2 + 97) \cdot 20}{2} = 99 \cdot 10 = 990
$$

 $S_{20} = \mathbf{990}$

---

### **5. feladat – szöveges életszerű**

Egy diák az első nap 50 Ft-ot gyűjt, majd minden nap 20 Ft-tal többet.
Mennyi pénze lesz 30 nap után összesen?

**Megoldási terv:**

1. Ez számtani sorozat, $a_1 = 50$, $d = 20$
2. Kell az első 30 tag összege

**Megoldás:**

$$
a_{30} = 50 + 29 \cdot 20 = 630
$$

$$
S_{30} = \frac{(50 + 630) \cdot 30}{2} = 680 \cdot 15 = 10200
$$

 A diák 30 nap alatt **10 200 Ft-ot** gyűjt.

---

# 🔹 **Mértani sorozat feladatok**

---

### **1. feladat – egyszerű tagkeresés**

Első tag $a_1 = 2$, hányados $q = 3$.
Írd fel az első 5 tagot!

**Megoldási terv:**
Mindig szorozzuk 3-mal az előző tagot.

**Megoldás:**
$2, 6, 18, 54, 162$

---

### **2. feladat – adott tag kiszámítása**

Mértani sorozat: $a_1 = 5$, $q = 2$.
Számítsd ki a 8. tagot!

**Megoldási terv:**
Képlet:

$$
a_n = a_1 \cdot q^{n-1}
$$

**Megoldás:**

$$
a_8 = 5 \cdot 2^7 = 5 \cdot 128 = 640
$$

 $a_8 = \mathbf{640}$

---

### **3. feladat – két tag alapján a hányados keresése**

Egy mértani sorozatban $a_2 = 12$, $a_5 = 96$.
Számítsd ki az első tagot és a hányadost!

**Megoldási terv:**
$a_2 = a_1 \cdot q$
$a_5 = a_1 \cdot q^4$

**Megoldás:**

$$
\frac{a_5}{a_2} = q^3 = \frac{96}{12} = 8 \Rightarrow q = 2
$$

$$
a_2 = a_1 \cdot 2 = 12 \Rightarrow a_1 = 6
$$

 $a_1 = \mathbf{6}$, $q = \mathbf{2}$

---

### **4. feladat – összeg számítása**

Mértani sorozat első tagja $a_1 = 3$, hányadosa $q = 2$.
Mennyi az első 6 tag összege?

**Megoldási terv:**

$$
S_n = \frac{a_1 \cdot (q^n - 1)}{q - 1}
$$

**Megoldás:**

$$
S_6 = \frac{3 \cdot (2^6 - 1)}{2 - 1} = 3 \cdot 63 = 189
$$

 $S_6 = \mathbf{189}$

---

### **5. feladat – szöveges életszerű**

Egy kávé árát minden évben megduplázzák.
Az első évben 200 Ft. Mennyi a 10. évben, és összesen mennyit fizetnénk, ha minden évben vennénk egyet?

**Megoldási terv:**

1. Ez mértani sorozat, $a_1 = 200$, $q = 2$
2. 10. tag kiszámítása: $a_{10}$
3. Első 10 tag összege: $S_{10}$

**Megoldás:**

$$
a_{10} = 200 \cdot 2^9 = 200 \cdot 512 = 102400
$$

$$
S_{10} = \frac{200 \cdot (2^{10} - 1)}{2 - 1} = 200 \cdot 1023 = 204600
$$

 10. évben **102 400 Ft**, összesen **204 600 Ft**.

