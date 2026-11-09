import { useParams } from 'react-router-dom'
import CompositionList from '../components/organisms/CompositionList'
import FicheTemplate from '../components/templates/FicheTemplate'
import type { Ingredient, Produit } from '../types'
import { useEffect, useState } from 'react'

function ProduitDetail() {
  const { id } = useParams()

    const [produit, setProduit] = useState<Produit | null>(null)
    const [linkedIngredients, setLinkedIngredients] = useState<Ingredient[]>([])
  
      useEffect(() => {
      fetch('/sample_data.json')
        .then(x => x.json())
        .then(data => {
          const foundProduit = data.produits.find((p: Produit) => p.id === Number(id));
          setProduit(foundProduit as Produit);
          setLinkedIngredients(data.ingredients.filter((i: Ingredient) => foundProduit?.ingredients.includes(i.id)) as Ingredient[]);
        })
      }, [])
  
  if (!produit) return <h2>Produit introuvable</h2>
  return (
    <FicheTemplate titre={produit.nom} score={produit.score} marque={produit.marque} description={produit.description}>
      <CompositionList ingredients={linkedIngredients} />
    </FicheTemplate>
  )
}

export default ProduitDetail
