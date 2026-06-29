import { Link } from "react-router-dom";
import './Home.css'
export function Home()
{
    return(
        <>
            <header>
                <title>
                    Home - page
                </title>
            </header>
           <div className="container">
             <div className="rectangle-1"></div>
                <div className="rectangle-2"> <p className="text-starter">Create your own mix-tape</p><div ><Link to ="/create"><button className = "get-started-button">Get Started →</button></Link></div></div>
                <div className="casette-center"></div>
                <div className = "casette-circle-1"></div>
                <div className = "casette-circle-2"></div>
                <div className="casette-center-rect"></div>
                <div className="bottom-rectangle">
                    <div className="circle-1"></div>
                     <div className="circle-2"></div>
                      <div className="circle-3"></div>
                       <div className="circle-4"></div>
                </div>
                
           </div>
               
                
           
        </>
    );
}