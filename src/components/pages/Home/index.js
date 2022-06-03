import Navigation from '../../Navigation/Navigation'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import './index.scss'

const Home = () => {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <div className="page">
        <div className="column">
          <h2>Joseph L. Murray, Jr.</h2>
          <h4>Full Stack Developer</h4>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
