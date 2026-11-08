import { Link } from 'react-router-dom'
import type { IngredientRowProps } from '../../types'
import Score from '../atoms/Score'

function IngredientRow({ ingredient }: IngredientRowProps) {
  return (
    <li>
      <Link to={`/ingredient/${ingredient.id}`}>
        <span>{ingredient.nom}</span>
        <Score score={ingredient.score} />
      </Link>
    </li>
  )
}

export default IngredientRow
