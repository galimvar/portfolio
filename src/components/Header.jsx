import { Link } from 'react-router-dom'
import { SECTIONS } from '../content/sections'
import { useMode } from '../mode/ModeContext'
import ModeSwitch from './ModeSwitch'
import styles from './Header.module.css'
import { useActiveSection } from './useActiveSection'

// Defined once, outside the component: a stable reference for useActiveSection's effect
const SECTION_IDS = SECTIONS.map((section) => section.id)

export default function Header() {
	const { isAdventure } = useMode()
	const activeId = useActiveSection(SECTION_IDS)

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
							<Link
								to={`/#${section.id}`}
								className={styles.link}
								// Tells screen readers which section is being read
								aria-current={activeId === section.id ? 'location' : undefined}
							>
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
