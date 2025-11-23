import { useState } from 'react'
import './App.css'
import PickupLaterPage from './routs/PickupLaterPage'

export default function page2() {
  const [count, setCount] = useState(0)

  return (
    <>
<PickupLaterPage />
    </>
  )
}