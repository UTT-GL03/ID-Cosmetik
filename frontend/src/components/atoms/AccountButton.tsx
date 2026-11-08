import { Link } from 'react-router-dom'

function AccountButton() {
  return (
    <Link to="/account" role="button" className="secondary outline">
      Account
    </Link>
  )
}

export default AccountButton
