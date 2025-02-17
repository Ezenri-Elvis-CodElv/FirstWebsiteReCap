import "./Footer.css"
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <div  className="FooterWrapper">
      <div className="FooterHlder">
        <div className="FooterHeader">
             <div className="Footertxt1">
                  <h3>Subscribe Newsletter</h3>
                  <p>Subscribe newsletter to get 5% on all products.</p>
             </div>
             <div className="FooterInp1">
                 <input type="text" placeholder="Enter Your Email"  className="EmailFooter"/>
                 <button className="scrbtn">Subscribe</button>
             </div>
             <div className="FooterIcon1">
                             <i className="ifooter"><FaFacebook /></i>
                             <i className="ifooter"> <FaTwitter /></i>
                             <i className="ifooter"> <FaYoutube /></i>
             </div>
        </div>
        <div className="FooterNav">
           <div className="Footerlogo">
            <img src="src/assets/Footerlogo.webp" alt="" className="FooterImagelogo"/>
           </div>
           <div className="FooterTxts">
            <div  className="FooterMidText">
              <h3>Shop Men</h3>
              <p>Clothing Fashion</p>
              <p>Winter</p>
              <p>Summer</p>
              <p>Formal</p>
              <p>Casual</p>
              </div>
            <div  className="FooterMidText">
              <h3>Shop Women</h3>
              <p>Clothing Fashion</p>
              <p>Winter</p>
              <p>Summer</p>
              <p>Formal</p>
              <p>Casual</p>
              </div>
            <div  className="FooterMidText">
              <h3> Baby Collection</h3>
              <p>Clothing Fashion</p>
              <p>Winter</p>
              <p>Winter</p>
              <p>Summer</p>
              <p>Formal</p>
              <p>Casual</p>
              </div>
            <div  className="FooterMidText">
              <h3>Quick Links</h3>
              <p>Track Your Order</p>
              <p>Support</p>
              <p>FAQ</p>
              <p>Carrier</p>
              <p>About</p>
              <p>Contact Us</p>
              </div>
           </div>
        </div>
        <div className="Footerfooter">
            <div>Copyright ©2025 All rights reserved | This template is made with <span className="SpnFooter"> ❤</span> by <span className="SpnFooter">Colorlib</span> </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
