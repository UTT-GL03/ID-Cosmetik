export type Produit = {
  id: number
  nom: string
  marque: string
  score: number
  description: string
  ingredients: number[]
}

export type Ingredient = {
  id: number
  nom: string
  score: number
  explication: string
  impacts: {
    sante: string
    environnement: string
  }
}

export type Utilisateur = {
  connecte: boolean
}
