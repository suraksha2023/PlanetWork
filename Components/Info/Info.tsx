import React from "react";
import styles from "./Info.module.scss";
import { FaCheck } from "react-icons/fa";

    function Info(){
        return(

            <div className={`${styles.info}`}>

                <div className="container">
                    <div className="row">
                        <div className={`${styles.textDiv} col-md-6`}>

                            <h3>Build an ever-ready <br/>infrastructure</h3>
                            <p>In today’s digital and cloud-based world, your<br/>
                               business performs only as well as your IT <br/>
                               infrastructure. It empowers the users and runs the <br/>
                               applications that run the business. A platform on <br/>
                               which to build exceptional customer and employee <br/>
                               experiences.</p>
                               <button>View More</button>
                           
                        
                        </div>
                        <div className={`${styles.imgDiv} col-md-6`}>
                                <img src="images/info.png" alt=""/>                        
                        

                               
                        </div>
            
                    </div>
            
                </div>

            </div>




        );

    }

export default Info;