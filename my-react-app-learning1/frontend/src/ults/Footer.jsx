import "../css/Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faGoogle } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return(
      <>
        <div className="footer">
          <h3 className="footer__text--heading">Learning English: A Key to Unlock the Door to the Future</h3>

          <p className="footer__text">In an increasingly integrated world, English has become a global language, 
            playing an important role in many fields such as economics, education, science, and technology. 
            Learning English is not only an advantage but also an essential requirement for every individual
             who wants to develop themselves and succeed in their career.</p>
          <h3 className="footer__text--heading">Why learn English?</h3>
          <p className="footer__text">Broad career opportunities: English is the main language in international
             business communication. Fluency in English helps you access better job opportunities at multinational
              companies, international organizations, or opportunities to work abroad.</p>
          <p className="footer__text">Access to knowledge: Most scientific research, specialized books and academic
             documents are written in English. Understanding English helps you access an endless source of knowledge
              and update the latest information.</p>
          <p className="footer__text">Travel and explore the world: English is a popular language in the tourism industry.
             Knowing English helps you confidently explore new lands, communicate with locals, and experience diverse cultures.</p>
          

          <h3>Please contact me!</h3>
            <div className="contact">
                <a href="https://www.facebook.com/profile.php?id=100021266820403" className="contact-link fb">
                    <FontAwesomeIcon icon={faFacebook} className='contact-icon fb' />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100021266820403" className="contact-link gm">
                    <FontAwesomeIcon icon={faGoogle} className='contact-icon gm' />
                </a>
          </div>
        </div>
      </> 
    )
  };
  
  export default Footer;