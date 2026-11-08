import { Link } from 'react-router-dom'
import type { ProduitCardProps } from '../../types'
import Placeholder from '../atoms/Placeholder'
import Score from '../atoms/Score'

function ProduitCard({ produit }: ProduitCardProps) {
  return (
    <Link to={`/produit/${produit.id}`} className="carte-lien">
      <article className="carte">
        <Placeholder />
        <div className="carte-corps">
          <span>
            <strong>{produit.nom}</strong>
            <br />
            <small>{produit.marque}</small>
          </span>
          <Score score={produit.score} />
        </div>
      </article>
    </Link>
  )
}

export default ProduitCard
