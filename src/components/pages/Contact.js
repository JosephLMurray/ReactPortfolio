import Navigation from '../../Navigation/Navigation'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import './index.scss'

const Contact = () => {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <div className="contact">
        <div className="column2">
          <div>
            <h2>
              I am always interested in continuing to hone my skills or learn
              new ones. However, if you'd like to reach out for a request or
              question, don't hesitate to contact me using the form below.
            </h2>
          </div>
          <div className="contact-form">
            <form>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea placeholder="message" name="message" required />
                </li>
                <li>
                  <input type="submit" className="button" value="send" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Contact
