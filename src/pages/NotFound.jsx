import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section aria-labelledby="not-found-title">
      <h1 id="not-found-title">Page introuvable</h1>
      <p>Ce chemin ne mène nulle part. Même Galimvar ne le trouve pas sur sa carte.</p>
      <Link to="/">Retour à l'accueil</Link>
    </section>
  )
}
