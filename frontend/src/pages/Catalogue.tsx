import data from '../assets/sample_data.json'
import SearchBar from '../components/molecules/SearchBar'
import CatalogueGrid from '../components/organisms/CatalogueGrid'
import type { Produit } from '../types'

const produits: Produit[] = data.produits

function Catalogue() {
  return (
    <>
      <SearchBar />
      <CatalogueGrid produits={produits} />
    </>
  )
}

export default Catalogue
