import { useState } from 'react'
import { NavLink } from 'react-router-dom'

// styles
import './Homepage.css'

// images
import Logo from '../../assets/logo.png'
import DownChevron from '../../assets/icons/down.png'
import Check from '../../assets/icons/check.png'

export default function Homepage() {

  const [hideHomeNavOptions, setHideHomeNavOptions] = useState(true)

  const handleCloseHomeNavOptions = () => {
    setHideHomeNavOptions(true)
  }
  const handleOpenHomeNavOptions = () => {
    setHideHomeNavOptions(false)
  }

  return (
      <div>
        <div className="header">
          <div className="container--flex">

          {hideHomeNavOptions ?
            <div className="header__logo" onClick={handleOpenHomeNavOptions}>
              <img className="header__logo--disco-ball" src={Logo} alt="disco ball" />
              <span className="header__logo--text">Events</span>
              <img className="header__logo--chevron icon--16px" src={DownChevron} alt="chevron" />
            </div> :

            <>
            <div className="header__logo" onClick={handleCloseHomeNavOptions}>
              <img className="header__logo--disco-ball" src={Logo} alt="disco ball" />
              <span className="header__logo--text">Events</span>
              <img className="header__logo--chevron icon--16px" src={DownChevron} alt="chevron" />
            </div>
            <div className="home__nav-options">
              <div className="list-item home__nav-options__events callout" onClick={handleCloseHomeNavOptions}>
                <span>Events</span>
                <img className="icon--16px home__nav-options__check" alt="check" src={Check} />
              </div>
              <div className="break" />
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