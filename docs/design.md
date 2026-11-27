# Identité visuelle et expérience

Ce document consigne les décisions de design validées par Rémy. Il sert de référence pour coder les styles (`src/styles/tokens.css`) et l'expérience de visite.

Maquettes : canevas « Portfolio · pistes visuelles » (privé), écrans D1, D2 et D3.

## Concept

> Pendant plus de 10 ans, j'ai conçu des expériences pour les autres (jeux de société, animation, escape games, jeu de rôle). Aujourd'hui, je les code.

Le portfolio se parcourt comme **une partie de jeu de rôle**. Le visiteur est le joueur et Galimvar, le mage de bataille de Rémy, est le maître du jeu. Chaque section est une scène qui se déroule dans un lieu, et une carte relie ces lieux.

Pistes explorées puis écartées : la BD (B) et l'escape game en vert sous-bois (C). De C, on garde l'idée d'un parcours en plusieurs étapes.

## Deux modes, un seul contenu

|            | Mode aventure                                           | Accès direct                      |
| ---------- | ------------------------------------------------------- | --------------------------------- |
| Pour qui   | le visiteur qui veut vivre l'expérience                 | le recruteur pressé               |
| Par défaut | **oui**, à la première visite                           | sur choix du visiteur             |
| Navigation | six chapitres (scène + lieu), carte entre les chapitres | noms de section classiques        |
| Galimvar   | au premier plan, il guide la partie                     | en retrait, il propose l'aventure |

Règles :

- **Même contenu, mêmes URL** dans les deux modes. L'aventure est une couche de mise en scène, pas un second site.
- Un interrupteur « Accès direct / Mode aventure » reste visible en permanence. Le choix du visiteur est mémorisé pour sa prochaine visite.
- Dès le premier écran du mode aventure, le nom, le métier et un bouton « Je préfère l'accès direct » sont visibles.
- Aucun contenu n'est jamais bloqué. Les cadenas indiquent seulement la progression, et chaque chapitre reste accessible d'un clic.

## Chapitres

| #   | Scène                    | Lieu                    | Section (accès direct) |
| --- | ------------------------ | ----------------------- | ---------------------- |
| 1   | La rencontre             | L'auberge               | Accueil                |
| 2   | Les origines             | Le village natal        | Profil                 |
| 3   | Les pouvoirs             | La tour du mage         | Compétences            |
| 4   | Les exploits             | Le panneau de la guilde | Projets                |
| 5   | Les questions            | Le temple de l'oracle   | FAQ                    |
| 6   | La suite de l'aventure ? | La porte du village     | Contact                |

Le chapitre 6 est une fin ouverte : le prochain chapitre s'écrit avec la personne qui prend contact.

## Carte et voyage

- La carte apparaît **entre deux chapitres** : le sentier se dessine jusqu'au lieu suivant (environ 2 secondes), puis la scène commence.
- Un bouton « Passer le voyage » est toujours présent.
- Avec `prefers-reduced-motion`, il n'y a pas d'animation.
- Sur ordinateur, la carte est illustrée. Sur mobile, elle devient un sentier vertical.
- Chaque lieu est un vrai lien, accessible au clavier et annoncé par les lecteurs d'écran (`aria-current="step"` sur l'étape en cours).

## Objets secrets

Trois objets cachés dans le mode aventure, compteur « Objets secrets trouvés : n / 3 ».

| Objet                                      | Ce qu'il dit de Rémy                     |
| ------------------------------------------ | ---------------------------------------- |
| Un champignon                              | l'amour de la nature et de la cueillette |
| Un luth                                    | la guitare                               |
| Un cube-casse-tête ancien (bois et laiton) | le casse-tête pour s'occuper les mains   |

À décider : l'emplacement de chaque objet et la récompense quand les trois sont trouvés.

## Palette

| Rôle                                  | Nom          | Valeur    |
| ------------------------------------- | ------------ | --------- |
| Fond                                  | Nuit d'encre | `#17141F` |
| Surface                               | —            | `#221D2E` |
| Bordure                               | —            | `#3A3350` |
| Texte principal / cartes claires      | Parchemin    | `#F3E9D2` |
| Texte secondaire                      | —            | `#B9AFC9` |
| Accent principal                      | Or des runes | `#E0B04A` |
| Accent secondaire (aventure, technos) | Arcane       | `#5CC8B5` |
| Accent sur parchemin                  | Or bruni     | `#7A5A12` |

Le vert sous-bois de la piste C est abandonné. La nature reviendra par les objets secrets.

## Typographie

- **Titres : Cinzel**, en capitales uniquement. Réservée aux titres, labels et navigation, jamais aux paragraphes.
- **Texte : Alegreya Sans.**

## Avatar

Galimvar, mage de bataille, en style cartoon, animé et avec de l'humour. L'illustration est à créer : pour l'instant, les maquettes contiennent des emplacements réservés.

## Contenus

- Pas de jauges en pourcentage pour les compétences : chaque techno renvoie aux projets où elle a été utilisée.
- Un badge « Ouvert aux opportunités ».
- Une sélection de projets, pas tous : des projets visuels et des projets qui démontrent une démarche (par exemple Adalgo, du pseudo-code aux tests). Pour les projets d'équipe, distinguer ce que Rémy a codé seul de ce qu'il a appris du travail collectif.
