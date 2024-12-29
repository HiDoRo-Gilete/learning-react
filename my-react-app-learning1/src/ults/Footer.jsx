import "../css/Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faGoogle } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return(
      <>
        <div className="footer">
            <div className="contact">
                <a href="https://www.facebook.com/profile.php?id=100021266820403" className="contact-link fb">
                    <FontAwesomeIcon icon={faFacebook} className='contact-icon fb' />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100021266820403" className="contact-link gm">
                    <FontAwesomeIcon icon={faGoogle} className='contact-icon gm' />
                </a>
          </div>
          <h3>Please contact me!</h3>
        </div>
      </> 
    )
  };
  
  export default Footer;