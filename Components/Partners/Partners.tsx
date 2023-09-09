import React from "react";
import styles from "./Partners.module.scss";

function Partner(){
    return(
    <div className={`${styles.partners}`}>
        <h3><strong>Alliances and Partners</strong></h3>
            <div className="container">
                <div className="row">
                        <div className={`${styles.img1} col-md-2`}>
                        <img src="images/Samsung.jpg" alt=""/>
                        </div>

                        <div className={`${styles.img2} col-md-2`}>
                        <img src="images/LG.jpg" alt=""/>
                        </div>

                        <div className={`${styles.img3} col-md-2`}>
                        <img src="images/Cisco.jpg" alt=""/>
                        </div>

                        <div className={`${styles.img4} col-md-2`}>
                        <img src="images/Honeywell.jpg" alt=""/>
                        </div>

                        <div className={`${styles.img5} col-md-2`}>
                        <img src="images/CP Plus.jpg" alt=""/>
                        </div>

                        <div className={`${styles.img6} col-md-2`}>
                        <img src="images/HIK.jpg" alt=""/>
                        </div>

    </div>       
    
         
        </div>
        </div>
           
    )
}

export default Partner;