import type { FicheHeaderProps } from '../../types'
import BackLink from '../atoms/BackLink'

function FicheHeader({ titre }: FicheHeaderProps) {
  return (
    <div className="fiche-entete">
      <BackLink />
      <h2>{titre}</h2>
    </div>
  )
}

export default FicheHeader
