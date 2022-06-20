import { useState } from 'react'
import { NavLink } from 'react-router-dom'

// styles
import './Venues.css'

// images
import Logo from '../../assets/logo.png'
import DownChevron from '../../assets/icons/down.png'
import Check from '../../assets/icons/check.png'

export default function Venues() {

  const [hideVenuesNavOptions, setHideVenuesNavOptions] = useState(true)

  const handleCloseVenuesNavOptions = () => {
    setHideHomeNavOptions(true)
  }
  const handleOpenVenuesNavOptions = () => {
    setHideHomeNavOptions(false)
  }

  return (
      <div>
        Venue List
      </div>
  )
}