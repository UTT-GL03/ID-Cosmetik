import { useParams } from 'react-router-dom'
import data from '../assets/sample_data.json'
import ImpactsIngredient from '../components/organisms/ImpactsIngredient'
import FicheTemplate from '../components/templates/FicheTemplate'
import type { Ingredient } from '../types'

const ingredients: Ingredient[] = data.ingredients

function IngredientDetail() {
  const { id } = useParams()
  const ingredient = ingredients.find((i) => i.id === Number(id))
  if (!ingredient) return <h2>Ingrédient introuvable</h2>
  return (
    <FicheTemplate
      titre={ingredient.nom}
      score={ingredient.score}
      complement={<ImpactsIngredient explication={ingredient.explication} impacts={ingredient.impacts} />}
    />
  )
}

export default IngredientDetail
