import { Link } from "react-router-dom";

export function Home()
{
    return(
        <>
            <header>
                <title>
                    Home - page
                </title>
            </header>
           
                <h1>
                    Create your own mixtapes
                </h1>
                <Link to ="/create"><button> Get Started </button></Link>
           
        </>
    );
}