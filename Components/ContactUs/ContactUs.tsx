import React from "react";
import styles from "./ContactUs.module.scss";

function ContactUs(){
    return(

      <div className={`${styles.contactus}`}>
          <div className="container">
            <div className={`${styles.contactDiv} row`}>
                  <div className="col-md-3">
                      <h3>Protect Your Home Or Business<br/>
                       With Our Unique Solutions</h3>
                  </div>
                  <div className="col-md-3">
                    <button>Discover More Info</button>
                  </div>
                  <div className="col-md-3">
                      <img src="images/Contact.svg" alt=""/>
                  </div>                   
                  <div className="col-md-3">
                      <p>CALL US NOW<br/>
                       <h2>+91 98765 43210</h2></p>
                  </div>
                </div>
            </div>
        </div>

    );
}

export default ContactUs;