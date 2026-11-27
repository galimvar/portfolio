# Portfolio · Rémy Lagarre

> Développeur web fullstack junior en reconversion. Ce dépôt contient le code source de mon portfolio.

[![CI](https://github.com/galimvar/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/galimvar/portfolio/actions/workflows/ci.yml)

🔗 **Site en ligne :** [remy-lagarre.netlify.app](https://remy-lagarre.netlify.app)

## Stack

| Domaine          | Outils                                                 |
| ---------------- | ------------------------------------------------------ |
| Front-end        | React 19, React Router, Vite                           |
| Qualité          | oxlint, Prettier, Vitest, Testing Library              |
| Workflow         | Git (branches protégées), Conventional Commits, husky  |
| CI / Déploiement | GitHub Actions, Netlify (déploiement continu sur main) |

## Lancer le projet en local

Prérequis : Node.js (version indiquée dans [`.nvmrc`](.nvmrc)).

```bash
npm install
npm run dev        # serveur de développement
npm test           # tests unitaires
npm run lint       # analyse statique
npm run build      # build de production dans dist/
```

## Workflow

- `main` : production, déployée automatiquement par Netlify.
- `dev` : branche d'intégration.
- `feat/*`, `fix/*`, `chore/*`, `docs/*` : branches de travail, fusionnées dans `dev` par pull request.

Les deux branches principales sont protégées : il faut passer par une pull request et la CI doit être verte. Les messages de commit suivent les [Conventional Commits](https://www.conventionalcommits.org/fr/), vérifiés à chaque commit. Les versions suivent le [SemVer](https://semver.org/lang/fr/) et sont listées dans le [CHANGELOG](CHANGELOG.md).

Le détail du workflow (cycle d'une fonctionnalité, publication d'une version) est décrit dans [CONTRIBUTING.md](CONTRIBUTING.md).

## Développement assisté par IA

Ce portfolio est mon premier projet entièrement développé avec un agent IA, [Claude Code](https://claude.com/claude-code) (Anthropic), utilisé comme binôme de programmation :

- **Mon rôle :** conception, choix techniques, identité visuelle, contenus, écriture de la logique métier (filtres, carrousel, visite guidée), relecture et validation de chaque pull request.
- **Le rôle de l'agent :** configuration et outillage, code d'interface répétitif, relecture de mon code, explications sur les alternatives et leurs compromis.

Les commits écrits à deux portent la mention `Co-Authored-By`, ce qui rend la collaboration traçable dans l'historique. J'ai fait ce choix par transparence et parce que savoir travailler efficacement avec ces outils fait désormais partie du métier.

## Licence

Le code est sous licence [MIT](LICENSE). Les contenus personnels (textes, photos, captures) restent ma propriété.
