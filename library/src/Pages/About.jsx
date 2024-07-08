import "../assets/index.css"
import {Helmet} from "react-helmet";
import CorpInfo from "../Components/CorpInfo.jsx";
import Stats from "../Components/Stats.jsx";
import Header from "../Components/Header.jsx";
import './About.css'

function About() {
    return(
        <div className="bg-transparent backimg">
            <Header/>
            <Helmet>
                <title>About</title>
            </Helmet>
            <div className="flex justify-center flex-shrink-0 mt-10 pb-40">
                <div className="blur-background">
                    <CorpInfo  Address={"92 Miles Drive, Newark, NJ 07103, California, USA"}
                               Email={"www.joyBook@book.com"}
                               PhoneNum={"+01-2569-978"}/>
                </div>
            </div>
        </div>
    )
}

export default About;