import { useRef } from 'react'
import type { FicheInfosProps } from '../../types'
import IconButton from '../atoms/IconButton'
import Score from '../atoms/Score'
import Popin from './Popin'

function FicheInfos({ score, marque, description }: FicheInfosProps) {
  const popin = useRef<HTMLDialogElement>(null)
  return (
    <div>
      <div className="fiche-ligne">
        <Score score={score} />
        {marque && <span>{marque}</span>}
        <IconButton label="Ajouter à ma collection" onClick={() => popin.current?.showModal()}>
          {/* Icône Heart de NextIcons (licence MIT) */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </IconButton>
      </div>
      <Popin ref={popin}>Vous devez être connecté pour ajouter à votre collection.</Popin>
      {description && <p>{description}</p>}
    </div>
  )
}

export default FicheInfos
