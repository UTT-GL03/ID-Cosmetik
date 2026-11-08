import { Link } from 'react-router-dom'
import AccountButton from '../atoms/AccountButton'

function Header() {
  return (
    <header className="container">
      <h1>
        <Link to="/">ID-Cosmetik</Link>
      </h1>
      <AccountButton />
    </header>
  )
}

export default Header
