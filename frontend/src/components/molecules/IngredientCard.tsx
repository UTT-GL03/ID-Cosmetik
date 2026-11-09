import { Link } from 'react-router-dom'
import type { IngredientRowProps } from '../../types'
import Placeholder from '../atoms/Placeholder'
import Score from '../atoms/Score'

function IngredientCard({ ingredient }: IngredientRowProps) {
  return (
    <Link to={`/ingredient/${ingredient.id}`} className="carte-lien">
      <article className="carte">
        <Placeholder />
        <div className="carte-corps">
          <span>
            <strong>{ingredient.nom}</strong>
            <br />
          </span>
          <Score score={ingredient.score} />
        </div>
      </article>
    </Link>
  )
}

export default IngredientCard
