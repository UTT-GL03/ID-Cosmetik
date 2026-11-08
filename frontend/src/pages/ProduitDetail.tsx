import { useParams } from 'react-router-dom'
import data from '../assets/sample_data.json'
import CompositionList from '../components/organisms/CompositionList'
import FicheTemplate from '../components/templates/FicheTemplate'
import type { Ingredient, Produit } from '../types'

const produits: Produit[] = data.produits
const ingredients: Ingredient[] = data.ingredients

function ProduitDetail() {
  const { id } = useParams()
  const produit = produits.find((p) => p.id === Number(id))
  if (!produit) return <h2>Produit introuvable</h2>
  return (
    <FicheTemplate titre={produit.nom} score={produit.score} marque={produit.marque} description={produit.description}>
      <CompositionList ingredients={ingredients.filter((i) => produit.ingredients.includes(i.id))} />
    </FicheTemplate>
  )
}

export default ProduitDetail
