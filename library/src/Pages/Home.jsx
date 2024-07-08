import MainIntro from "../Components/Main-Intro.jsx";
import Header from "../Components/Header.jsx";
import {Helmet} from "react-helmet";
import FeatureSection from "../Components/Feature-section.jsx";
import {Timeline} from "flowbite-react";
function Home() {
    return(
        <div className="bg-indigo-300">
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div className="transform"><Header/></div>
            <div className="transform"><MainIntro/></div>
            <FeatureSection/>
        </div>
    )
}

export default Home;