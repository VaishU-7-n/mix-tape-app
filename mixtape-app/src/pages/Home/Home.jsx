import { Link } from "react-router-dom";
import './Home.css'

export function Home() {
    return (
        <div className="page-wrapper">
           <div className="casette-border">
             <div className="container">
                

                <div className="rectangle-6"></div>
                <div className="rectangle-5"><div className="triangle1"> </div> <div className="triangle2"> </div></div>

                <p className="text-starter">Create your own mix-tape</p>

                <Link to="/create">
                    <button className="get-started-button">Get Started →</button>
                </Link>

                <div className="casette-center"></div>
                <div className="casette-circle-1"></div>
                <div className="casette-circle-2"></div>
                <div className="casette-center-rect"></div>

                <div className="bottom-rectangle">
                    <div className="ellipse-3"></div>
                    <div className="ellipse-5"></div>
                    <div className="ellipse-6"></div>
                    <div className="ellipse-4"></div>
                </div>
            </div>
           </div>
        </div>
    );
}