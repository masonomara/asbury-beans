import { useState } from 'react'
import { NavLink } from 'react-router-dom'

// styles
import './Venues.css'

// images
import logo from '../../assets/logo.png'
import down from '../../assets/icons/down.png'
import check from '../../assets/icons/check.png'
import menu from '../../assets/icons/menu.png'

export default function Venues() {

  const [hideVenuesNavOptions, setHideVenuesNavOptions] = useState(true)

  const handleCloseVenuesNavOptions = () => {
    setHideVenuesNavOptions(true)
  }
  const handleOpenVenuesNavOptions = () => {
    setHideVenuesNavOptions(false)
  }

  return (
    <div>
      <div className="header">
        <div className="container--flex">

        {hideVenuesNavOptions ?
          <div className="header__logo" onClick={handleOpenVenuesNavOptions}>
            <img className="header__logo--disco-ball" src={logo} alt="disco ball" />
            <span className="header__logo--text">Venues</span>
            <img className="header__logo--chevron icon--16px" src={down} alt="chevron" />
          </div> :

          <div>
          <div className="header__logo" onClick={handleCloseVenuesNavOptions}>
            <img className="header__logo--disco-ball" src={logo} alt="disco ball" />
            <span className="header__logo--text">Venues</span>
            <img className="header__logo--chevron icon--16px" src={down} alt="chevron" />
          </div>
          <div className="header__nav-options">
            <NavLink className="list-item header__nav-options__venues callout" to="/">
              <div>
                <span>Events</span>
              </div>
            </NavLink>  
            <div className="break" />
            <div className="list-item header__nav-options__events callout" onClick={handleCloseVenuesNavOptions}>
              <span>Venues</span>
              <img className="icon--16px header__nav-options__check" alt="check" src={check} />
            </div>
          </div>   
          </div>    
          }

          <div>
            <div className="button__icon">
              <img className="icon--24px" alt="menu" src={menu} />
            </div>
          </div>

        </div>  
      </div>
    </div>
  )
}