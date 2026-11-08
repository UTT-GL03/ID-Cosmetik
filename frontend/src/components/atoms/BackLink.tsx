import { Link } from 'react-router-dom'

function BackLink() {
  return (
    <Link to="/" className="retour" aria-label="Retour à l'accueil" title="Retour à l'accueil">
      ×
    </Link>
  )
}

export default BackLink
