import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Specialties } from './components/Specialties'
import { FeaturedWork } from './components/FeaturedWork'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen noise-overlay" style={{ backgroundColor: '#0a0e1a' }}>
      <Navbar />
      <main>
        <Hero />
        <Specialties />
        <FeaturedWork />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
