import type { CatalogueGridProps } from '../../types'
import ProduitCard from '../molecules/ProduitCard'

function CatalogueGrid({ produits }: CatalogueGridProps) {
  return (
    <div className="catalogue">
      {produits.map((produit) => <ProduitCard key={produit.id} produit={produit} />)}
    </div>
  )
}

export default CatalogueGrid
