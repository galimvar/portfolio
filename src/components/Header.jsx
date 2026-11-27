import { Link } from 'react-router-dom'
import { SECTIONS } from '../content/sections'
import { useMode } from '../mode/ModeContext'
import ModeSwitch from './ModeSwitch'
import styles from './Header.module.css'

export default function Header() {
  const { isAdventure } = useMode()

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo} aria-label="Rémy Lagarre, retour à l'accueil">
        R · L
      </Link>

      <nav aria-label="Navigation principale">
        <ul className={styles.links}>
          {SECTIONS.map((section) => (
            <li key={section.id}>
              {/* Absolute path so the links also work from /projets/:slug */}
              <Link to={`/#${section.id}`} className={styles.link}>
                {isAdventure ? section.scene : section.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <ModeSwitch />
    </header>
  )
}
