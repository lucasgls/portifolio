
import { useState } from 'react'
import Home from './pages/Home/Home'
import { Projects } from './pages/Projects'
import { About } from './pages/About'
import { Technologies } from './pages/Technologies'
import { Blog } from './pages/Blog'

type Page = 'home' | 'projects' | 'about' | 'technologies' | 'blog'

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'projects':
        return <Projects onNavigate={setCurrentPage} />
      case 'about':
        return <About onNavigate={setCurrentPage} />
      case 'technologies':
        return <Technologies onNavigate={setCurrentPage} />
      case 'blog':
        return <Blog onNavigate={setCurrentPage} />
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
