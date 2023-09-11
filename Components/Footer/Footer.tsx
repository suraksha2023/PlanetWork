import React from "react";
import styles from "./Footer.module.scss";

    function Footer(){
        return(

            <div className={`${styles.footer}`}>
                <div className="container">
                    <div className={`${styles.menu} row`}>

                                <div className="col-md-3">
                                    <h3>Our Company</h3>
                                        <ul>
                                            <li>About Company</li>
                                            <li>What we do?</li>
                                            <li>What we are</li>
                                            <li>Career</li>
                                            <li>Vision & Mission</li>
                                        </ul>
                                </div>

                            <div className="col-md-3">
                                <h3>Our Product</h3>
                                <ul>
                                    <li>Biometric System</li>
                                    <li>CCTV System Service</li>
                                    <li>Connectivity Solutions</li>
                                    <li>EPABX Solution</li>
                                    <li>Home Automation</li>
                                </ul>
                            </div>

                                <div className="col-md-3">
                                        <ul>
                                    
                                            <li>Structured Cabling</li>
                                            <li> Telephone Networking</li>
                                            <li> Video Doorbell</li>
                                            <li> WAN/LAN Solutions</li>
                                            
                                        </ul>
                                </div>

                            <div className="col-md-3">
                                    <h3>Our Location</h3>
                                    <p> No. 839, First Floor, 9th Main,<br/>
                                    1st Block HRBR Layout,<br/>
                                    Kalyan Nagar, Bangalore,<br/> 
                                    Karnataka, India-560 043.</p>
                                    <img src="images/india.png" alt=""/>
                                    <img src="images/flag.png" alt=""/>
                            </div>
                        
                    </div>

                </div>

                <hr/>
                <div className="container">               
                        <div className={`${styles.socialDiv} row`}>
                            <div className= "col-md-6">
                            <ul>
                                <li>Contact</li>
                                <li>Privacy</li>
                                <li>Terms of Use</li>
                                <li>Accessibility</li>
                                <li>Cookie Preference</li>
                            </ul>
                            </div>
                    

                    
                            <div className={`${styles.nav} col-md-6`}>
                                <ul>
                                    <li><img src="images/facebook.png" alt=""/></li>
                                    <li><img src="images/twitter.png" alt=""/></li>
                                    <li><img src="images/instagram.png" alt=""/></li>
                                    <li><img src="images/linkedin.png" alt=""/></li>
                                </ul>
                            </div>
                        </div>
                    </div>
        </div>    
        




    );
    }

    export default Footer;