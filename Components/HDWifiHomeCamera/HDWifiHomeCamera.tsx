import React from "react";
import styles from "./HDWifiHomeCamera.module.scss";

function HDWifiHomeCamera (){
   return(
        <div className ={`${styles.hdwifihomecamera}`}> 
           <div className ="container">
              <div className={`${styles.paraDiv} row`}>
                    <div className="col-md-4">
                            <img src="images/HomeCamera.png" alt=""/>                      
                    </div>


                <div className= "col-md-8">
                  <h1>HD Wi-Fi Home Camera</h1>
                  <h5>Model Number - HR2 3293</h5>
                  <h3>Rs. 1389/-</h3>
                   <p>We pride ourselves on going above and beyond for the customer on every<br/>
                   project we take on. Whether you’re looking for a surveillance camera <br/>
                   installation or an access control system installation, it’s important that the <br/>
                   security system installer you choose has the experience and vision to help you <br/>
                   achieve your security goals. Our commercial security services are about more <br/>
                   than surveillance system installation or alarm system.             
                   </p>

                   <button className={`${styles.enquirybtn}`}><img src="images/cart.png" alt=""/>Enquiry Now</button> 
                   <button className={`${styles.broucherbtn}`}>Download Broucher</button>   

                </div>



             </div>
           </div>   
        </div>




   );


}
 export default HDWifiHomeCamera;