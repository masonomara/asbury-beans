// styles
import './Menu.css'

// images
import close from '../../assets/icons/close.png'

export default function Menu({ handleCloseMenu }) {
  return (
      <div className="menu__backdrop">
        <div className="menu">
          <div className="menu__header">
            <img className="icon--16px hidden" src={close} alt="close" />
            <span className="font__header">Menu</span>
            <div className="button__icon--low" onClick={handleCloseMenu}>
            <img className="icon--16px" src={close} alt="close" />
            </div>
          </div>
          <div className="menu__cta">
          </div>
          <div className="menu__list">
          </div>
          <div className="menu__info">
          </div>
        </div>
      </div>
  )
}