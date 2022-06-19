import { useState } from 'react'
import { NavLink } from 'react-router-dom'

// styles
import './Homepage.css'

// images
import Logo from '../../assets/logo.png'
import DownChevron from '../../assets/icons/20px/down.png'

export default function Homepage() {

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

            {showHomeNavOptions &&
            <div className="home__nav-options">
              <div className="home__nav-options__events" onClick={handleCloseHomeNavOptions}>
                Events
              </div>
              <NavLink className="home__nav-options__venues" to="/venues">
                <div onClick={handleCloseHomeNavOptions}>
                  Venues
                </div>
              </NavLink>  
            </div>            
            }

          </div>  
        </div>
      </div>
  )
}