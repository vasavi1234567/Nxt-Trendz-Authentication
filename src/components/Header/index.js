// Write your JS code here
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <div className="nav-bar-container">
        <div>
          <img
            className="website-logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
        </div>
        <button className="log-out-button" type="button">
          <img
            className="log-out-image"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="nav logout"
          />
        </button>
      </div>
      <div className="nav-content nav-bar-items-large-container">
        <img
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
        />
        <div className="items-button-container">
          <ul className="nav-menu">
            <li className="menu-item">Home</li>
            <li className="menu-item">Products</li>
            <li className="menu-item">Cart</li>
          </ul>
          <button className="logout-button" type="button">
            Logout
          </button>
        </div>
      </div>
    </div>
    <div className="nav-bar-small-container">
      <ul className="menu-item-images-container">
        <li className="item-image">
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
          />
        </li>
        <li className="item-image">
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
          />
        </li>
        <li className="item-image">
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
          />
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
