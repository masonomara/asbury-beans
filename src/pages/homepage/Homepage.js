import { useState } from 'react'
import { NavLink } from 'react-router-dom'

// styles
import './Homepage.css'

// components
import Menu from '../../components/menu/Menu.js'
import EventsGrid from '../../components/eventsGrid/EventsGrid'

// images
import logo from '../../assets/logo.png'
import down from '../../assets/icons/down.png'
import check from '../../assets/icons/check.png'
import menu from '../../assets/icons/menu.png'

export default function Homepage() {
  const [hideHomeNavOptions, setHideHomeNavOptions] = useState(true)
  const [showMenu, setShowMenu] = useState(false)
 
  const handleCloseHomeNavOptions = () => {
    setHideHomeNavOptions(true)
  }
  const handleOpenHomeNavOptions = () => {
    setHideHomeNavOptions(false)
  }

  const handleCloseMenu = () => {
    setShowMenu(false)
  }
  const handleOpenMenu = () => {
    setShowMenu(true)
  }

  return (
      <div>
        {showMenu && 
        <Menu handleCloseMenu={handleCloseMenu} />
        }
        <div className="header">
          <div className="container--flex">
          {hideHomeNavOptions ?
            <div className="header__logo" onClick={handleOpenHomeNavOptions}>
              <img className="header__logo--disco-ball" src={logo} alt="disco ball" />
              <span className="header__logo--text">Events</span>
              <img className="header__logo--chevron icon--16px" src={down} alt="chevron" />
            </div> :
            <div>
            <div className="header__logo" onClick={handleCloseHomeNavOptions}>
              <img className="header__logo--disco-ball" src={logo} alt="disco ball" />
              <span className="header__logo--text">Events</span>
              <img className="header__logo--chevron icon--16px" src={down} alt="chevron" />
            </div>
            <div className="header__nav-options">
              <div className="list-item font--callout" onClick={handleCloseHomeNavOptions}>
                <span>Events</span>
                <img className="icon--16px header__nav-options__check" alt="check" src={check} />
              </div>
              <div className="break" />
              <NavLink className="list-item font--callout" to="/venues">
                  <span>Venues</span>
              </NavLink>  
            </div>   
            </div>    
            }
            <div>
              <div className="button__icon" onClick={handleOpenMenu}>
                <img className="icon--24px" alt="menu" src={menu} />
              </div>
            </div>
          </div>  
        </div>

        <div className="content--container">
          <EventsGrid />
        </div>

      </div>
  )
}