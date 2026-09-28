import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import ActionLinks from './components/ActionLinks.jsx'
import TrustBadges from './components/TrustBadges.jsx'
import VideoTestimonials from './components/VideoTestimonials.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <ActionLinks />
        <TrustBadges />
        <VideoTestimonials />
      </main>
      <Footer />
    </div>
  )
}
