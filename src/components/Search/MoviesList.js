// MovieList.js
import {useEffect, useState} from 'react'
import {useSearch} from './SearchContext'

const MovieList = () => {
  const {searchQuery} = useSearch()
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true)
      try {
        const apiUrl = `https://apis.ccbp.in/movies-app/movies-search?search=${encodeURIComponent(
          searchQuery,
        )}`
        const response = await fetch(apiUrl)
        if (response.ok) {
          const data = await response.json()
          setMovies(data.movies)
        } else {
          throw new Error('Failed to fetch movies')
        }
      } catch (error) {
        console.error('Error fetching movies:', error)
      } finally {
        setIsLoading(false)
      }
    }

    if (searchQuery.trim() !== '') {
      fetchMovies()
    } else {
      setMovies([])
    }
  }, [searchQuery])

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div className="movie-list">
      {movies.length === 0 && <p>No movies found</p>}
      {movies.map(movie => (
        <div key={movie.id} className="movie-item">
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          {/* Add more details as needed */}
        </div>
      ))}
    </div>
  )
}

export default MovieList
