//& ================================================
//~path Importing modules
import { Link } from "react-router-dom"

//& ================================================
//~path Importing styles
import './css/navbar.css'

//& ================================================

export function NavBar() {
  return (
    <>
      <nav>
        <div className="mainNavContainer">
          <ul className="mainNav">
            <h3 className="navHeader gradient-text">Navigation</h3>
            <div className="navDivider"></div>
            <li><Link to="/" className="gradient-text navLink active availableButton"><h4>Home</h4></Link></li>
            <li><Link to="/connections" className="gradient-text navLink availableButton"><h4>People</h4></Link></li>
            <li><Link to="/socials" className="gradient-text navLink availableButton"><h4>Socials</h4></Link></li>
            <li><Link to="/info" className="gradient-text navLink availableButton"><h4>More</h4></Link></li>
          </ul>
        </div>
      </nav>
    </>
  )
}