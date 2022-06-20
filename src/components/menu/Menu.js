import { NavLink } from 'react-router-dom';
import { ExternalLink } from 'react-external-link'

// styles
import './Menu.css'

// images
import close from '../../assets/icons/close.png'
import megaphone from '../../assets/megaphone.png'
import right from '../../assets/icons/right.png'

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
            <img src={megaphone} className="menu__cta__image" alt=" "/>
            <span className="font--title">Share your event through Asbury Beans</span>
            <span id="lowdown" className="font--caption">Add your live event to our event calendar to promote your venue and Asbury Park</span>
            <NavLink exact to="/submit" className="button--filled">
              <span className="font--callout--low">Submit your event</span>
            </NavLink>
          </div>

          <div className="menu__list">
            <ExternalLink className="list-item font--callout" href="https://www.facebook.com/currentmediacompanynj">
              <span>Contact</span>
              <img className="icon--16px" alt="arrow" src={right} />
            </ExternalLink>  
            <div className="break" />
            <ExternalLink className="list-item font--callout" href="https://www.facebook.com/currentmediacompanynj">
              <span>Privacy Policy</span>
              <img className="icon--16px" alt="arrow" src={right} />
            </ExternalLink>  
          </div>

          <div className="menu__info">
          </div>

        </div>
      </div>
  )
}