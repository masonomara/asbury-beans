import { useState } from 'react'

// styles
import './HomepageNavbar.css'

// images
import Logo from '../../assets/logo.png'
import DownChevron from '../../assets/icons/20px/down.png'

export default function HomepageNavbar() {

  const [showHomeNavOptions, setShowHomeNavOptions] = useState(false)

  const handleCloseHomeNavOptions = () => {
    setShowHomeNavOptions(false)
  }
  const handleOpenHomeNavOptions = () => {
    setShowHomeNavOptions(true)
  }

  return (
      <div>
        <div className="header">
          <div className="container--flex">
            <div className="header__logo" onClick={handleOpenHomeNavOptions}>
              <img className="header__logo--disco-ball" src={Logo} alt="disco ball" />
              <span className="header__logo--text">Events</span>
              <img className="header__logo--chevron" src={DownChevron} alt="chevron" />
            </div>
          </div>  
        </div>
      </div>
  )
}