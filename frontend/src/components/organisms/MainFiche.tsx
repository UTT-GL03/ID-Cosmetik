import type { MainFicheProps } from '../../types'
import Placeholder from '../atoms/Placeholder'
import FicheInfos from '../molecules/FicheInfos'

function MainFiche({ complement, ...infos }: MainFicheProps) {
  return (
    <div className="fiche">
      <Placeholder />
      <div>
        <FicheInfos {...infos} />
        {complement}
      </div>
    </div>
  )
}

export default MainFiche
