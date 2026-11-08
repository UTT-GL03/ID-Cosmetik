import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/templates/Layout'
import Account from './pages/Account'
import Catalogue from './pages/Catalogue'
import IngredientDetail from './pages/IngredientDetail'
import ProduitDetail from './pages/ProduitDetail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Catalogue />} />
          <Route path="produit/:id" element={<ProduitDetail />} />
          <Route path="ingredient/:id" element={<IngredientDetail />} />
          <Route path="account" element={<Account />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
