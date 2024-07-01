import {Link} from 'react-router-dom'
import {RiSearchLine} from 'react-icons/ri'
import {FaUserCircle} from 'react-icons/fa'
import {useSearch} from '../Search/SearchContext' // Adjust import path as per your project structure
import './index.css'

const Header = () => {
  const {searchQuery, updateSearchQuery} = useSearch()

  const handleSearchChange = event => {
    updateSearchQuery(event.target.value)
  }

  return (
    <nav className="nav-header">
      <div className="header-container">
        <img
          src="https://res.cloudinary.com/db3erodfw/image/upload/v1719690749/Group_7399_qb6dk6.png"
          alt="movie-logo"
          className="movie-logo"
        />
        <ul className="nav-menu">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/popular" className="nav-link">
              Popular
            </Link>
          </li>
        </ul>
      </div>
      <div className="user-container">
        <div className="search-container">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search movies..."
            className="search-input"
          />
          <span className="search-icon">
            <RiSearchLine />
          </span>
        </div>
        <span className="account-icon">
          <FaUserCircle />
        </span>
      </div>
    </nav>
  )
}

export default Header
