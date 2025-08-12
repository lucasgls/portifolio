import HeroSection from './HeroSection/HeroSection'
import NavigationButtons from './NavigationButtons/NavigationButtons'
import ContactSection from './ContactSection/ContactSection'

interface HomeProps {
  onNavigate: (page: 'home' | 'projects') => void
  currentPage: 'home' | 'projects'
}

export default function Home({ onNavigate, currentPage }: HomeProps) {
  return (
    <div className="home-page">
      <HeroSection />
      <NavigationButtons onNavigate={onNavigate} currentPage={currentPage} />
      <ContactSection />
    </div>
  )
}