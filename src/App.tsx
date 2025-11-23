import { useState } from 'react'
import './App.css'
import CurrentLocation from './components/SchenduleLater'
import PickupLaterHeader from './components/PickupLaterHeader'
import PickupLaterBar from './components/PickupLaterBar'
import SearchMap from './components/SearchMap'
import ButtonNext from './components/ButtonNext'
import ChooseDate from './components/ChooseDate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<SearchMap />
<ButtonNext />
<ChooseDate />

    </>
  )
}

export default App
