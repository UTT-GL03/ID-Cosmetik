import type { ImpactsIngredientProps } from '../../types'

function ImpactsIngredient({ explication, impacts }: ImpactsIngredientProps) {
  return (
    <section>
      <h3>Explication</h3>
      <p>{explication}</p>
      <h3>Impacts</h3>
      <h4>Santé</h4>
      <p>{impacts.sante}</p>
      <h4>Environnement</h4>
      <p>{impacts.environnement}</p>
    </section>
  )
}

export default ImpactsIngredient
