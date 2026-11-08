import type { ReactNode, Ref } from 'react'
import type { Ingredient, Produit } from './donnees'

export type ScoreProps = {
  score: number
}

export type IconButtonProps = {
  label: string
  type?: 'button' | 'submit'
  onClick?: () => void
  children: ReactNode
}

export type PopinProps = {
  ref: Ref<HTMLDialogElement>
  children: ReactNode
}

export type ProduitCardProps = {
  produit: Produit
}

export type IngredientRowProps = {
  ingredient: Ingredient
}

export type FicheInfosProps = {
  score: number
  marque?: string
  description?: string
}

export type CatalogueGridProps = {
  produits: Produit[]
}

export type FicheHeaderProps = {
  titre: string
}

export type MainFicheProps = FicheInfosProps & {
  complement?: ReactNode
}

export type CompositionListProps = {
  ingredients: Ingredient[]
}

export type ImpactsIngredientProps = {
  explication: string
  impacts: Ingredient['impacts']
}

export type FicheTemplateProps = MainFicheProps & {
  titre: string
  children?: ReactNode
}
