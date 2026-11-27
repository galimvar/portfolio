# CLAUDE.md : contexte du projet pour Claude Code

Portfolio de Rémy Lagarre, développeur web fullstack junior en reconversion. C'est sa porte d'entrée dans le monde professionnel : le code, le dépôt et le workflow doivent faire pro. C'est aussi son premier projet développé avec un agent IA.

Maquettes fil de fer : `C:\Users\Galimvar\Downloads\wirefram portfolio*.png` (accueil, projets, page projet, arborescence).

## Stack et commandes

React 19 + React Router · Vite · oxlint · Prettier · Vitest + Testing Library · husky + lint-staged + commitlint · GitHub Actions · Netlify.

```bash
npm run dev           # serveur de développement
npm test              # tests (Vitest)
npm run lint          # oxlint
npm run format:check  # Prettier
npm run build         # build de production
```

## Règles de collaboration

- **Rémy valide tout ce qui est visuel** (polices, couleurs, thème, maquettes) et tous les contenus. Ne jamais coder d'interface stylée sans validation préalable.
- Décisions de design validées : `docs/design.md`. Toute nouvelle décision visuelle y est consignée.
- Mode pédagogique : Claude écrit la configuration et le code répétitif. La logique qui porte une décision de conception est laissée en `TODO(human)` pour Rémy, puis Claude fait une revue courte.
- **Demander confirmation avant chaque push, création de PR ou modification de réglage GitHub.** Claude ne merge jamais : Rémy merge toutes les PR.
- Les commits écrits avec Claude se terminent par la ligne `Co-Authored-By`.

## Workflow Git

- `main` : production (Netlify) · `dev` : intégration. Les deux sont protégées : PR obligatoire et CI verte.
- Branches de travail créées depuis `dev` : `feat/…`, `fix/…`, `chore/…`, `docs/…` → PR vers `dev`. Pour une version : PR `dev` → `main`, puis tag SemVer et GitHub Release.
- Messages au format Conventional Commits, en anglais. Mettre à jour la section `[Unreleased]` de `CHANGELOG.md` pour tout changement visible.
- Processus complet (méthodes de fusion, publication, rétro-fusion) : voir `CONTRIBUTING.md`.

## Feuille de route

| Version | Contenu                                                                                 |
| ------- | --------------------------------------------------------------------------------------- |
| v0.1    | Fondations : outillage, CI, Netlify, dépôt GitHub et protections                        |
| —       | Phase design : questionnaire, 2 ou 3 maquettes, validation, puis `tokens.css`           |
| v0.2    | Squelette, routes (`/`, `/projets/:slug`, `*`), navbar avec lien actif, fond animé      |
| v0.3    | Données (`data/projects.js` derrière `services/projectsService.js`), filtres, carrousel |
| v0.4    | Page Projet                                                                             |
| v0.5    | Visite guidée animée par l'avatar (`useTour`, machine à états)                          |
| v0.6    | Profil, Compétences, FAQ, Contact (Netlify Forms)                                       |
| v1.0    | Finitions (SEO, accessibilité, Lighthouse ≥ 90) et mise en ligne                        |
