import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { ShowcasePage } from './pages/ShowcasePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/showcase" element={<ShowcasePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
