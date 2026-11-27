import { Link, useParams } from 'react-router-dom'

// Placeholder until v0.4 (project page with data from projectsService)
export default function ProjectPage() {
	const { slug } = useParams()

	return (
		<section aria-labelledby="project-title">
			<h1 id="project-title">Projet : {slug}</h1>
			<p>La page détaillée de ce projet arrive bientôt.</p>
			<Link to="/#projets">Retour aux projets</Link>
		</section>
	)
}
