import HeroSection from './HeroSection/HeroSection'
import NavigationButtons from './NavigationButtons/NavigationButtons'
import ContactSection from './ContactSection/ContactSection'

interface HomeProps {
  onNavigate: (page: 'home' | 'projects' | 'about') => void
  currentPage: 'home' | 'projects' | 'about'
}

export default function Home({ onNavigate, currentPage }: HomeProps) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center p-8">
      <HeroSection />
      <NavigationButtons onNavigate={onNavigate} currentPage={currentPage} />
      <ContactSection />
    </div>
  )
}