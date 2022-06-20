import Navigation from '../../Navigation/Navigation'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import './index.scss'

const Home = () => {
  return (
    <div className="App flex columns-1 wrap min-h-screen min-w-screen ">
      <div className=" flex-row justify-between items-between m-3 h-1/6">
        <div className="flex-col">
          <Header />
        </div>
        <div className="flex-col">
          <Navigation />
        </div>
      </div>
      <div className=" flex-row flex-grow h-2/3 ">
        <div className="flex-col  justify-center items-center ">
          <h2 className="font-bold center ">Joseph L. Murray, Jr.</h2>
          <h4>Full Stack Developer</h4>
        </div>
      </div>
      <div className="flex-1 flex-row h-1/6">
        <Footer />
      </div>
    </div>
  )
}

export default Home
