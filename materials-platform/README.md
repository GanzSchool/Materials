# Ganz Materials Platform

Next.js + Tailwind alapú, MDX-központú tananyagplatform.

- reszponzív diák-nézet hierarchikus navigációval és keresővel
- saját MDX komponensek (`Info`, `Task`, `Solution`, `ExpectedOutput`, `SQLExample`)
- admin szerkesztő drag & drop `.md` / `.mdx` feltöltéssel és előnézettel
- menüpont / almenüpont létrehozás
- GitHub-alapú publikálás atomi commitban
- a tartalom a publikus repóból futásidőben töltődik, így egy új MDX-hez nem szükséges új build

## Admin publikálás

A publikáláshoz a `GanzSchool/Materials` repóra **Contents: Read and write** jogosultságú fine-grained GitHub PAT szükséges. Két mód támogatott:

1. Vercel `GITHUB_TOKEN` környezeti változó.
2. A token megadása az admin felületen. Ez kizárólag az aktuális oldal React state-jében él, az alkalmazás nem menti el.

## Helyi indítás

```bash
npm install
npm run dev
```
