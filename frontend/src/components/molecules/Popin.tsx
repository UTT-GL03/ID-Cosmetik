import type { PopinProps } from '../../types'

// Popin modale native (<dialog>) : la fermeture passe par le formulaire method="dialog", sans état.
function Popin({ ref, children }: PopinProps) {
  return (
    <dialog ref={ref}>
      <article>
        <p>{children}</p>
        <form method="dialog">
          <button className="secondary">Fermer</button>
        </form>
      </article>
    </dialog>
  )
}

export default Popin
