import type { FicheTemplateProps } from '../../types'
import FicheHeader from '../organisms/FicheHeader'
import MainFiche from '../organisms/MainFiche'

function FicheTemplate({ titre, children, ...fiche }: FicheTemplateProps) {
  return (
    <>
      <FicheHeader titre={titre} />
      <MainFiche {...fiche} />
      {children}
    </>
  )
}

export default FicheTemplate
