// styles
import './HomepageNavbar.css'

// images
import Logo from '../../assets/logo.png'

export default function HomepageNavbar() {
  return (
      <div>
        <div className="header">
          <div className="container--flex">
            <div className="header__logo">
              <img className="header__logo--disco-ball" src={Logo} alt="disco ball" />
              <span className="header__logo--text">Beans</span>
            </div>
          </div>  
        </div>
      </div>
  )
}