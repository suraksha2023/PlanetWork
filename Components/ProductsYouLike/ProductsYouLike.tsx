import React from "react";
import styles from "./ProductsYouLike.module.scss";

function ProductsYouLike(){
   return(
    
    <div className={`${styles.productsyoulike}`}>
        <div className="container" >
        <div className={`${styles.imagesDiv} row`}>
            <ul>
                <li><img src="images/product1.png"></img></li>
                <li><img src="images/product2.png"></img></li>
                <li><img src="images/product3.png"></img></li>
                <li><img src="images/product4.png"></img></li>
                <li><img src="images/product5.png"></img></li>
            </ul>
        </div>
        </div>
    </div>


   );
}

export default ProductsYouLike;