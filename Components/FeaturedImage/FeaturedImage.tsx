import React from "react";
import styles from "./FeaturedImage.module.scss";


    function FeaturedImage() {
        return(

    <div className={`${styles.featured}`}>
       <div className="para1">
        <h3>Reliable Network Cabling Services for Growing Businesses<br/> and Large Enterprises</h3>
       </div>

            <div className="container">
                <div className="row">
                    <div className={`${styles.img1} col-md-3`}>
                    <img src="images/cam1.png" alt=""/>
                    <p>Security</p>
                    </div>


                    <div className={`${styles.img2} col-md-3`}>
                    <img src="images/image 80.png" alt=""/>
                    <p>Networking
                    </p>
                    </div>



                    <div className={`${styles.img3} col-md-3`}>
                    <img src="images/image 21.jpg" alt=""/>
                    <p>Storage</p>
                    </div>


                    <div className={`${styles.img4} col-md-3`}>
                    <img src="images/image 20.jpg" alt=""/>
                    <p>AV</p>
                    </div>


        </div>
        </div>
        </div>
            );
        }
    export default FeaturedImage;