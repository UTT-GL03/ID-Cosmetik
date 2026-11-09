import { useEffect, useState } from 'react'
import SearchBar from '../components/molecules/SearchBar'
import CatalogueGrid from '../components/organisms/CatalogueGrid'
import type { Ingredient, Produit } from '../types'


function Catalogue() {
    const [produits, setProduits] = useState<Produit[]>([]);
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);
    const [search, setSearch] = useState<string>('');
    const [type, setType] = useState<'Produit' | 'Ingrédient'>('Produit');
    const [produitsFiltres, setProduitsFiltres] = useState<Produit[]>([]);
    const [ingredientsFiltres, setIngredientsFiltres] = useState<Ingredient[]>([]);

    useEffect(() => {
    fetch('/sample_data.json')
      .then(x => x.json())
      .then(data => {
        setProduits(data.produits as Produit[])
        setIngredients(data.ingredients as Ingredient[])
        setProduitsFiltres(data.produits as Produit[])
        setType('Produit')
        setSearch('')
      })
    }, [])

    const handleSearchSubmit = () => {
      const key = search.toLowerCase()
      setProduitsFiltres(type === 'Produit' ? produits.filter(produit => produit.nom.toLowerCase().includes(key)) : [])
      setIngredientsFiltres(type === 'Ingrédient' ? ingredients.filter(ingredient => ingredient.nom.toLowerCase().includes(key)) : [])
    }

  return (
    <>
      <SearchBar type={type} search={search} onSubmit={handleSearchSubmit} setType={setType} setSearch={setSearch} />
      <CatalogueGrid
        produits={produitsFiltres}
        ingredients={ingredientsFiltres}
      />
    </>
  )
}

export default Catalogue
