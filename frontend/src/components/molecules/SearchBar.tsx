import IconButton from '../atoms/IconButton'
import type { SearchBarProps } from '../../types/composants'

function SearchBar({ type, search, onSubmit, setType, setSearch }: SearchBarProps) {
  
  return (
    <form role="search" onSubmit={(e) => {
      e.preventDefault();
      onSubmit();
    }}>
      <select name="type" aria-label="Type de recherche" value={type} onChange={(e) => setType(e.target.value as SearchBarProps['type'])}>
        <option>Produit</option>
        <option>Ingrédient</option>
      </select>
      <input type="search" name="recherche" placeholder="Rechercher" aria-label="Rechercher" value={search} onChange={(e) => setSearch(e.target.value)} />
      <IconButton label="Rechercher" type="submit">
        {/* Icône Search de NextIcons (licence MIT) */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </IconButton>
    </form>
  )
}

export default SearchBar
