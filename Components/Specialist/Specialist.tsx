import React from "react";
import styles from "./Specialist.module.scss";


function Specialist(){
    return(

        <div className={`${styles.services}`}>
          <div className="container">
            <div className="row">

                <h2>Leading cabling and infrastructure<br/>
                 specialists</h2>
                <p>As a collection of skilled and experienced construction and engineering professionals<br/>
                 from a variety of fields ranging from industrial plants to housing,
                 Engineering & <br/>
                 Construction Group utilizes</p>

                    <div className={`${styles.img3} col-md-3`}>
                    <img src="images/Hospitality.jpg" alt=""/>
                    <p>Hospitality</p></div>

                    <div className={`${styles.img3} col-md-3`}>
                    <img src="images/Education.jpg" alt=""/>
                    <p>Education</p></div>

                    <div className={`${styles.img3} col-md-3`}>
                    <img src="images/Corporates.jpg" alt=""/>
                    <p>Corporates</p></div>

                    <div className={`${styles.img3} col-md-3`}>
                    <img src="images/Home Solutions.jpg" alt=""/>
                    <p>Home Solutions</p></div>

            </div>
            
          </div>
           




























        </div>
    );
}
export default Specialist;