import type { CatalogueGridProps } from '../../types'
import IngredientCard from '../molecules/IngredientCard'
import ProduitCard from '../molecules/ProduitCard'

function CatalogueGrid({ produits, ingredients }: CatalogueGridProps) {
  
  if (ingredients && ingredients.length > 0) {
    return (
      <div className="catalogue">
        {ingredients.map((ingredient) => (
          <IngredientCard key={ingredient.id} ingredient={ingredient} />
        ))}
      </div>
    )
  }

  return (
    <div className="catalogue">
      {produits.map((produit) => <ProduitCard key={produit.id} produit={produit} />)}
    </div>
  )
}

export default CatalogueGrid
