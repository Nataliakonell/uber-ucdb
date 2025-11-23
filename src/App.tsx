import './App.css'
import SearchMap from './components/SearchMap'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PickupLaterPage from './routs/PickupLaterPage';
import SchedulePage from './routs/SchedulePage';
import ChoosePickupTime from './routs/ChoosePickupTime';
import ScheduleAnytime from './routs/ChoosePickupTime';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SearchMap />} />
          <Route path='/pickup-later' element={<PickupLaterPage />} />
          <Route path='/schedulePage' element={<SchedulePage />} />
          <Route path='/schedule-anytime' element={<ScheduleAnytime />} /> 
          <Route path='/ChoosePickupTime' element={<ChoosePickupTime />} /> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App