import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import HeroSection from '../HeroSection'
import Footer from '../Footer'
import MovieItem from '../MovieItem'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class Home extends Component {
  state = {isLoading: true, moviesData: []}

  componentDidMount() {
    this.fetchTrendingMovies()
  }

  fetchTrendingMovies = async () => {
    const apiUrl = 'https://apis.ccbp.in/movies-app/trending-movies'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.results.map(movie => ({
        imageUrl: movie.backdrop_path,
        id: movie.id,
      }))
      this.setState({
        moviesData: updatedData,
        isLoading: false,
      })
    }
  }

  render() {
    const {moviesData, isLoading} = this.state

    return (
      <div className="home-page">
        <Header />
        <HeroSection />
        <div className="content">
          <h2 className="trending-heading">Trending Now</h2>
          {isLoading ? (
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          ) : (
            <ul>
              {moviesData.map(movie => (
                <MovieItem key={movie.id} movie={movie} />
              ))}
            </ul>
          )}
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home
