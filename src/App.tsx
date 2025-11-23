import { useState } from 'react'
import './App.css'
import SearchMap from './components/SearchMap'
import ButtonNext from './components/ButtonNext'
import ChooseDate from './components/ChooseDate'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PickupLaterPage from './routs/PickupLaterPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SearchMap />} />
          <Route path='/pickup-later' element={<PickupLaterPage />} />
        </Routes>
      </BrowserRouter>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SearchMap />} />
          <Route path='/pickup-later' element={<PickupLaterPage />} />
        </Routes>
      </BrowserRouter>
    </>


  )
}

export default App
