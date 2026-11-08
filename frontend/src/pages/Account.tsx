import utilisateur from '../assets/utilisateur'
import BackLink from '../components/atoms/BackLink'

function Account() {
  if (!utilisateur.connecte) {
    return (
      <>
        <h2><BackLink />Réservé aux abonné·es</h2>
      </>
    )
  }
  return <h2>Mon compte</h2>
}

export default Account
