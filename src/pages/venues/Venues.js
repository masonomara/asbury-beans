import { useState } from 'react'

// styles
import './Venues.css'

// components
import VenuesHeader from '../../components/venuesHeader/VenuesHeader'
import VenuesGrid from '../../components/venuesGrid/VenuesGrid.js'


export default function Venues() {
  const [hideVenuesNavOptions, setHideVenuesNavOptions] = useState(true)
  const [showMenu, setShowMenu] = useState(false)
 
  const handleCloseVenuesNavOptions = () => {
    setHideVenuesNavOptions(true)
  }
  const handleOpenVenuesNavOptions = () => {
    setHideVenuesNavOptions(false)
  }

  const handleCloseMenu = () => {
    setShowMenu(false)
  }
  const handleOpenMenu = () => {
    setShowMenu(true)
  }

  return (
      <div className="venues">

      <VenuesHeader 
        hideVenuesNavOptions={hideVenuesNavOptions}
        showMenu={showMenu}
        handleCloseVenuesNavOptions={handleCloseVenuesNavOptions}
        handleOpenVenuesNavOptions={handleOpenVenuesNavOptions}
        handleCloseMenu={handleCloseMenu}
        handleOpenMenu={handleOpenMenu}
      />    
      <div className="content--container">
        <VenuesGrid />
      </div>


      </div>
  )
}