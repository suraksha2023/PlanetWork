import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';


//import '/styles/global.scss'
import React from "react";
import App from "../Components/App/App";
import Menu from "../Components/Menu/Menu";
import Carousal from "../Components/Carousel/Carousel";
import FeaturedImage from "../Components/FeaturedImage/FeaturedImage";
import Info from "../Components/Info/Info";
import Specialist from "../Components/Specialist/Specialist";
import Partners from "../Components/Partners/Partners";
import InfrastructureServices from '../Components/InfrastructureServices/InfrastructureServices';
import ContactUs from '../Components/ContactUs/ContactUs';
import Footer from '../Components/Footer/Footer';
import SocialIcons from '../Components/SocialIcons/SocialIcons';

export default function Home(props:any)

{
    return (
        <div>
            {/* <App /> */}
            <Menu />
            <Carousal />
            <FeaturedImage />
            <Info />
            <Specialist />
            <Partners />
            <InfrastructureServices />
            {/* <ContactUs /> */}
            <Footer />
            <SocialIcons />


        </div>
    )
}