import { useState } from 'react'
import { NavLink } from 'react-router-dom'

// styles
import './Homepage.css'

// images
import Logo from '../../assets/logo.png'
import DownChevron from '../../assets/icons/down.png'
import Check from '../../assets/icons/check.png'

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

          {showHomeNavOptions ?
            <div className="header__logo" onClick={handleCloseHomeNavOptions}>
              <img className="header__logo--disco-ball" src={Logo} alt="disco ball" />
              <span className="header__logo--text">Events</span>
              <img className="header__logo--chevron icon--16px" src={DownChevron} alt="chevron" />
            </div> :

            <>
            <div className="header__logo" onClick={handleOpenHomeNavOptions}>
              <img className="header__logo--disco-ball" src={Logo} alt="disco ball" />
              <span className="header__logo--text">Events</span>
              <img className="header__logo--chevron icon--16px" src={DownChevron} alt="chevron" />
            </div>
            <div className="home__nav-options">
              <div className="list-item home__nav-options__events callout" onClick={handleOpenHomeNavOptions}>
                <span>Events</span>
                <img className="icon--16px" alt="check" src={Check} />
              </div>
              <NavLink className="list-item home__nav-options__venues callout" to="/venues">
                <div>
                  <span>Venues</span>
                </div>
              </NavLink>  
            </div>   
            </>    
            }

          </div>  
        </div>
      </div>
  )
}