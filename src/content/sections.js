/**
 * The six home page sections, with their names in each visit mode.
 * Source of truth: docs/design.md, "Chapitres".
 */
export const SECTIONS = [
  { id: 'accueil', label: 'Accueil', scene: 'La rencontre', place: "L'auberge" },
  { id: 'profil', label: 'Profil', scene: 'Les origines', place: 'Le village natal' },
  { id: 'competences', label: 'Compétences', scene: 'Les pouvoirs', place: 'La tour du mage' },
  { id: 'projets', label: 'Projets', scene: 'Les exploits', place: 'Le panneau de la guilde' },
  { id: 'faq', label: 'FAQ', scene: 'Les questions', place: "Le temple de l'oracle" },
  {
    id: 'contact',
    label: 'Contact',
    scene: "La suite de l'aventure ?",
    place: 'La porte du village',
  },
]
