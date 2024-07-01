// SearchMovies.js
import {useSearch} from './SearchContext'

const SearchMovies = () => {
  const {searchQuery, setSearchQuery} = useSearch()

  const handleSearchChange = event => {
    setSearchQuery(event.target.value)
  }

  return (
    <div className="search-container">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search movies..."
      />
    </div>
  )
}

export default SearchMovies
