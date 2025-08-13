
import { useState } from 'react'
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'

type Page = 'home' | 'projects'

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'projects':
        return <Projects onNavigate={setCurrentPage} />
      default:
        return <Home onNavigate={setCurrentPage} currentPage={currentPage} />
    }
  }

  return (
    <div className="App">
      {renderPage()}
    </div>
  )
}

export default App
