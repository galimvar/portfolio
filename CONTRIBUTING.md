# Contribuer au projet

Ce document décrit le workflow utilisé pour développer ce portfolio. C'est un projet personnel, mais il est mené comme un projet d'équipe : branches protégées, pull requests, intégration continue et versions publiées.

## Branches

```
feat/* ──squash──▶ dev ──merge commit──▶ main ──▶ tag + Release ──▶ rétro-fusion main → dev
```

| Branche                                | Rôle                         | Déploiement Netlify                   |
| -------------------------------------- | ---------------------------- | ------------------------------------- |
| `main`                                 | production                   | https://remy-lagarre.netlify.app      |
| `dev`                                  | intégration et recette       | https://dev--remy-lagarre.netlify.app |
| `feat/*`, `fix/*`, `chore/*`, `docs/*` | travail, créées depuis `dev` | aperçu sur chaque pull request        |

`main` et `dev` sont protégées. Pour y fusionner, il faut :

- passer par une pull request, sans aucun push direct, y compris pour les administrateurs ;
- avoir une CI verte (`Lint, test & build`) sur une branche à jour ;
- avoir résolu toutes les conversations de la PR.

Le force-push et la suppression de ces deux branches sont interdits.

## Cycle d'une fonctionnalité

1. Partir de `dev` à jour : `git switch dev && git pull`, puis `git switch -c feat/ma-fonctionnalite`.
2. Faire des commits petits et fréquents, au format [Conventional Commits](https://www.conventionalcommits.org/fr/).
3. Si le changement est visible, mettre à jour la section `[Unreleased]` du [CHANGELOG](CHANGELOG.md).
4. Pousser la branche et ouvrir une PR vers `dev` en suivant le template.
5. Relire le diff et l'aperçu Netlify (ordinateur et mobile 375px), puis fusionner avec **Squash and merge**.

### Messages de commit

```
<type>(<portée optionnelle>): <description en anglais, à l'impératif>
```

Types utilisés : `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `ci`, `perf`. Le format est vérifié à chaque commit par commitlint. Avant le commit, oxlint et Prettier s'exécutent sur les fichiers modifiés, via husky et lint-staged.

Avec le squash, **le titre de la PR devient le message du commit** sur `dev` : il doit donc lui aussi respecter ce format.

## Publier une version

Le projet suit le [versionnage sémantique](https://semver.org/lang/fr/).

1. **Préparer** : sur une branche `chore/release-x.y.z`, lancer `npm version x.y.z --no-git-tag-version`. Dans le CHANGELOG, déplacer `[Unreleased]` vers `[x.y.z] - AAAA-MM-JJ` et mettre à jour les liens de comparaison. Ouvrir une PR vers `dev`, puis faire un squash.
2. **Publier** : ouvrir la PR `dev` → `main`, intitulée `chore(release): vx.y.z`, et la fusionner avec **Create a merge commit**, jamais en squash.
3. **Taguer** : une fois le déploiement de production vérifié, poser le tag sur le commit de merge de `main` et créer la GitHub Release :
   ```bash
   git switch main && git pull
   git tag -a vx.y.z -m "vx.y.z: résumé"
   git push origin vx.y.z
   gh release create vx.y.z --title "vx.y.z · Titre" --notes "…"
   ```
4. **Rétro-fusionner** : ouvrir une PR `main` → `dev` et la fusionner avec **Create a merge commit**. Sans cette étape, `dev` ne contiendrait pas le commit de merge de `main`, et la prochaine PR de version serait bloquée par la règle « branche à jour ».

### Pourquoi deux méthodes de fusion ?

- **Squash vers `dev`** : chaque fonctionnalité devient un seul commit lisible, ce qui donne un historique propre et un CHANGELOG facile à rédiger.
- **Merge commit vers `main`** : un squash créerait sur `main` un commit au contenu identique à celui de `dev`, mais avec une autre identité. Les deux branches divergeraient alors à chaque version. Le merge commit garde un historique commun et marque la frontière de chaque version.

## Développement assisté par IA

Ce projet est développé avec [Claude Code](https://claude.com/claude-code). Les commits écrits à deux se terminent par la ligne :

```
Co-authored-by: Claude Opus 5.5 <noreply@anthropic.com>
```

Le format `Nom <email>` est obligatoire pour que GitHub reconnaisse le co-auteur. Le fichier [CLAUDE.md](CLAUDE.md) donne à l'agent le contexte du projet et les règles de collaboration.
