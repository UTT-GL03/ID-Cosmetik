import { useParams } from 'react-router-dom'
import ImpactsIngredient from '../components/organisms/ImpactsIngredient'
import FicheTemplate from '../components/templates/FicheTemplate'
import type { Ingredient } from '../types'
import { useEffect, useState } from 'react'

function IngredientDetail() {
  const { id } = useParams()
  const [ingredient, setIngredient] = useState<Ingredient | null>(null)

    useEffect(() => {
    fetch('/sample_data.json')
      .then(x => x.json())
      .then(data => {
        const foundIngredient = data.ingredients.find((i: Ingredient) => i.id === Number(id))
        setIngredient(foundIngredient as Ingredient)
      })
    }, [])

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
