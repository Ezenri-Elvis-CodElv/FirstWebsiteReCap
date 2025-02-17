import { LuInstagram } from "react-icons/lu";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import "./header2.css"

const Header2 = () => {
  return (
    <div className="Headerwrapper2">
          <div className="Sticky">
            <div className="abtside">
              <p>About Us</p>
              <p> Privacy</p>
              <p> FAQ</p>
              <p> Careers</p>
            </div>
            <div className="logoside">
              <div className="logosidewrapper">
                <ul className="ui-sticky">
                  <li className="li-sticky">My Wishlist</li>
                  <li className="li-sticky"> Track Your Order</li>
                </ul>
                <div className="stickyicons">
                  <i className="i"><FaFacebook /> </i>
                  <i className="i"><LuInstagram /></i>
                  <i className="i"><TiSocialLinkedin /></i>
                  <i className="i"> <FaTwitter /></i>
                  <i className="i"> <FaYoutube /></i>
                </div>
              </div>
            </div>
          </div>
      
    </div>
  )
}

export default Header2
