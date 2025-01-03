import '../css/Home.css';
import Pg_Home from'../assets/home_bg.png'
import Header from '../ults/Header';
import Footer from '../ults/Footer';
import { Outlet, Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faStaylinked,faUikit } from '@fortawesome/free-brands-svg-icons';



const Home = (props) => {
  const itemList = props.items;
  
  console.log('helo',itemList)
  const listItem = itemList.map(item => <li className='levelitem'>
              <Link to={item.link} style={{ textDecoration: 'none' }}>
                <div className="levelitem--row">
                  <div className="circle">
                    <FontAwesomeIcon icon={faStaylinked} className='levelitem--row--icon'/>
                  </div>
                  <div>
                    <h3 className="levelitem--row--label">
                      {item.level}
                    </h3>
                    <h3 className="levelitem--row--chapters">
                      {item.chapters} chapters
                    </h3>
                  </div>
                </div>
              </Link>
              
              </li>);
    return(
      <>
        <img src={Pg_Home} alt="" className='bg_home'/>
        <div className="container">
          <Header/>
          <div className="body">
            {/* title */}
            
            <div className="title">
              <div className="titleleft">
              <FontAwesomeIcon icon={faUikit} className='title--icon' />
                <h2 className='titleleft--text'>CEFR levels explained</h2> 
              </div>
              <FontAwesomeIcon icon={faUikit} className='title--icon'/>
              <ul className="levels">
              {listItem}
              </ul>
            </div>
          </div>
        </div>
        <Footer/>
      </> 
    )
  };
  
  export default Home;


 // Import cấu hình FontAwesome
