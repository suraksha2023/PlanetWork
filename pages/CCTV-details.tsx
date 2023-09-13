import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';


//import '/styles/global.scss'
import React from "react";
import Menu from "../Components/Menu/Menu";
import Breadcrumbs from "../Components/Breadcrumbs/Breadcrumbs";
import HDWifiHomeCamera from "../Components/HDWifiHomeCamera/HDWifiHomeCamera";
import BlackSection from "../Components/BlackSection/BlackSection";
import ProductInfoSecFirst from "../Components/ProductInfoSecFirst/ProductInfoSecFirst";
import ProductInfoSecSecond from "../Components/ProductInfoSecSecond/ProductInfoSecSecond";
import ProductsYouLike from "../Components/ProductsYouLike/ProductsYouLike";



import Footer from '../Components/Footer/Footer';


export default function Home(props:any)

{
    return (
        <div>

    <Menu />
    <Breadcrumbs />
    <HDWifiHomeCamera />
     <BlackSection />
     <ProductInfoSecFirst />
     <ProductInfoSecSecond />
     <ProductsYouLike />
    <Footer />

        </div>
    )
}
