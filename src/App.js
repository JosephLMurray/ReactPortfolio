import './App.scss'
import Hero from './components/Hero'

import Navigation from './components/Navigation'

function App() {
  return (
    <div className="bg-bgHero container min-h-full min-w-full flex flex-wrap">
      <Navigation />
      <Hero />
    </div>
  )
}

export default App
