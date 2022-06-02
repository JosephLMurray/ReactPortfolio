import Navigation from './Navigation/Navigation'
import './index.scss'
import Header from './Header/Header'
import Footer from './Footer/Footer'

const Home = () => {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <div className="page"></div>
      <Footer />
    </div>
  )
}

export default Home
