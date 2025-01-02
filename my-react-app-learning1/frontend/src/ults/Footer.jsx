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
          <p className="footer__text">Develop personal skills: Learning English helps train memory, logical thinking, quick reflexes, and communication skills.</p>
          <p className="footer__text">Global connection: English is a bridge that helps you make friends and interact with people from all over the world.</p>
          <h3 className="footer__text--heading">Common difficulties when learning English:</h3>
          <p className="footer__text">Pronunciation: The English phonological system is different from Vietnamese, making it difficult for learners to pronounce accurately</p>
          <p className="footer__text">Grammar: English grammar is complex with many structures and rules, requiring learners to master and apply flexibly.</p>
          <p className="footer__text">Vocabulary: The amount of English vocabulary is huge, memorizing and using vocabulary effectively is a challenge.</p>
          <p className="footer__text">Practice environment: Lack of a regular English-speaking environment is also an obstacle for learners.</p>
          <h3 className="footer__text--heading">Effective methods for learning English:</h3>
          <p className="footer__text">Set clear goals: Clearly define your goals for learning English (e.g., communication, taking exams, serving work).
             Specific goals will help you have motivation and proper learning direction.</p>
          <p className="footer__text">Learn vocabulary in context: Instead of learning vocabulary separately, learn vocabulary in specific
             contexts to understand the meaning and usage of words.</p>
          <p className="footer__text">Practice pronunciation regularly: Practice pronunciation every day by listening to and imitating native speakers.
             Use pronunciation support applications or software to improve speaking skills.</p>
          <p className="footer__text">Learn grammar systematically: Master the basic grammar rules and practice applying them in practical exercises.</p>
          <p className="footer__text">Create a practice environment: Look for opportunities to communicate in English with friends, native speakers, or join English clubs.</p>
          <p className="footer__text">Use diverse resources: Learn English through newspapers, movies, music, games, and online English learning applications.</p>
          <p className="footer__text">Perseverance and passion: Learning English is a long process,
             requiring perseverance and passion. Always keep a learning spirit and strive continuously.</p>
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