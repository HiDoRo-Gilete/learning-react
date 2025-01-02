import "../../css/a1.css"
import Header from "../../ults/Header";
import Footer from "../../ults/Footer";
import { Link } from "react-router-dom";
const LevelA1 = () => {
    const lessons = [
        {id:1, lesname: "Hello", des: "Learn greeting for meeting people", avarta: "https://cdn.busuu.com/media/resized/navigation/256/welcomeimage1661254149_256.jpg",link: "ok"},
        {id:2,lesname: "Test 2", des: "Learn greeting for meeting people", avarta: "https://cdn.busuu.com/media/resized/navigation/256/welcomeimage1661254149_256.jpg",link: "ok"},
        {id:3,lesname: "Animal", des: "Learn greeting for meeting people", avarta: "https://cdn.busuu.com/media/resized/navigation/256/welcomeimage1661254149_256.jpg",link: "ok"},
        {id:4,lesname: "Tree", des: "Learn greeting for meeting people", avarta: "https://cdn.busuu.com/media/resized/navigation/256/welcomeimage1661254149_256.jpg",link: "ok"},
        {id:5,lesname: "People", des: "Learn greeting for meeting people", avarta: "https://cdn.busuu.com/media/resized/navigation/256/welcomeimage1661254149_256.jpg",link: "ok"}
    ];
    const listItemLesson = lessons.map(item => <li className="list-lesson">
        <Link to={item.link} style={{ textDecoration: 'none' }}>
            <div className="lesson-container">
                <div className="lesson">
                    
                        <svg width="120" height="120" viewBox="0 0 120 120" className="svg-lesson1">
                            {/* <circle cx="60" cy="60" r="50" fill="none" stroke="#DAE1EA" strokeWidth="5"></circle> */}
                            <circle cx="60" cy="60" r="50" fill="none" stroke="#0EBE75" strokeWidth="5" className="circle1" style={{ strokeDashoffset: 0 }}></circle>
                        </svg>
                        <div className="img-lesson-1">
                            <img src= {item.avarta} alt="An avatar" loading="lazy" />
                        </div>
                    
                            
                    
                </div>
                <div>
                    <b>{item.lesname}</b>
                    <p>{item.des}</p>
                </div>
            </div>
        </Link>
        
    </li>)
    return(
        <> 
        <Header></Header>
            <section className="section-container">

                <h1>Chapter 1: Introdutions</h1>
                
                <ul>{listItemLesson}</ul>
            </section>
            
        <Footer></Footer>
        </>
    )
};

export default LevelA1;