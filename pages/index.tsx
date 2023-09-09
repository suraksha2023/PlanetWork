import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';


//import '/styles/global.scss'
import React from "react";
import App from "../Components/App/App";
import Menu from "../Components/Menu/Menu";
import Banner from "../Components/Banner/Banner";
import FeaturedImage from "../Components/FeaturedImage/FeaturedImage";
import Info from "../Components/Info/Info";
import Specialist from "../Components/Specialist/Specialist";
import Partners from "../Components/Partners/Partners";
import InfrastructureServices from '../Components/InfrastructureServices/InfrastructureServices';
import Footer from '../Components/Footer/Footer';


export default function Home(props:any)

{
    return (
        <div>
            {/* <App /> */}
            <Menu />
            <Banner />
            <FeaturedImage />
            <Info />
            <Specialist />
            <Partners />
            <InfrastructureServices />
            <Footer />
            


        </div>
    )
}