import { NavLink } from 'react-router-dom';

// styles
import './Menu.css'

// images
import close from '../../assets/icons/close.png'

export default function Menu({ handleCloseMenu }) {
  return (
      <div className="menu__backdrop">
        <div className="menu">

          <div className="menu__header">
            <div className="button__icon--low hidden">
              <img className="icon--16px hidden" src={close} alt="close" />
            </div>
            <span className="font--header">Menu</span>
            <div className="button__icon--low" onClick={handleCloseMenu}>
              <img className="icon--16px" src={close} alt="close" />
            </div>
          </div>

          <div className="menu__cta">
            <img />
            <span className="font--title">Share your event through Asbury Beans</span>
            <span id="lowdown" className="font--caption">Add your live event to our event calendar to promote your venue and Asbury Park</span>
            <NavLink exact to="/submit" className="button--filled">
              <span className="font--callout--low">Custom Package</span>
            </NavLink>
          </div>

          <div className="menu__list">
          </div>

          <div className="menu__info">
          </div>

        </div>
      </div>
  )
}