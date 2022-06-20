import React from 'react'
import Navigation from '../../Navigation/Navigation'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import './index.scss'

const About = () => {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <div className="about">
        <div className="column">
          <h2>
            Thank you for taking the time to visit my portfolio. My name is
            Joseph Murray, Jr and I'm a product of the UCF Coding Bootcamp .
            Prior to that, I spent 15+ years in I.T. doing everything from
            onsite training to forensic accounting for Point of Sale software.
            <br />
            <br />I believe that learning never stops, and that it is a life
            long and worthy pursuit. I enjoy logic puzzles, am an avid boardgame
            player, and in my spare time I coach little league baseball for my 2
            sons when I'm not in the gym lifting heavy objects and putting them
            back down again.
          </h2>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default About