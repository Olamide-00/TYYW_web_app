import { Routes, Route } from 'react-router-dom'
import Layout from './component/layout/layout'
import Home from './pages/home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App