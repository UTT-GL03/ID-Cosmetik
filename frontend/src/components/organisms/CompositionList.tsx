import type { CompositionListProps } from '../../types'
import IngredientRow from '../molecules/IngredientRow'

function CompositionList({ ingredients }: CompositionListProps) {
  return (
    <section>
      <h3>Composition</h3>
      <ul className="composition">
        {ingredients.map((ingredient) => <IngredientRow key={ingredient.id} ingredient={ingredient} />)}
      </ul>
    </section>
  )
}

export default CompositionList
