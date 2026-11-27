import { SECTIONS } from '../content/sections'
import { useMode } from '../mode/ModeContext'
import styles from './Home.module.css'

export default function Home() {
  const { isAdventure } = useMode()
  const [welcome, ...otherSections] = SECTIONS

  return (
    <>
      <section id={welcome.id} aria-labelledby="hero-title" className={styles.hero}>
        {isAdventure && (
          <p className={styles.eyebrow}>
            Chapitre 1 · {welcome.scene}, {welcome.place}
          </p>
        )}
        <h1 id="hero-title" className={styles.title}>
          Rémy Lagarre
        </h1>
        <p className={styles.role}>Développeur web fullstack junior</p>
        <p className={styles.pitch}>
          Plus de 10 ans d'animation, de jeux et d'escape games : j'ai conçu des expériences pour
          les autres. Aujourd'hui, je les code.
        </p>
      </section>

      {otherSections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          aria-labelledby={`${section.id}-title`}
          className={styles.section}
        >
          {isAdventure && (
            <p className={styles.eyebrow}>
              Chapitre {index + 2} · {section.place}
            </p>
          )}
          <h2 id={`${section.id}-title`} className={styles.sectionTitle}>
            {isAdventure ? section.scene : section.label}
          </h2>
          <p className={styles.placeholder}>Contenu à venir.</p>
        </section>
      ))}
    </>
  )
}
