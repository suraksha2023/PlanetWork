import React from "react";
import styles from "./InfrastructureServices.module.scss";

function InfrastructureServices(){
    return(

        <div className={`${styles.infrastructureservices}`}>
           <div className={`${styles.backgroundImg}`}>           
                <img src="images/InfrastructureBanner.png" alt=""/>
                <div className={`${styles.centered}`}>
                    
                    <h1>Infrastructure Services</h1>
                    <p>Imagine a future where IT infrastructures can monitor <br/>
                         themselves, predict and respond to
                         future business needs and <br/>
                         protect and heal 
                         themselves.</p>
                </div>
            </div>
                <div className="container">
                    <div className={`${styles.imgDiv} row`}>

                       <h2>Latest Blog</h2>
                        <div className="col-md-4">
                            <img src="images/Service1.jpg" alt=""/>
                                <div className={`${styles.text}`}>
                                <p>22/05/22</p>
                                    <h5>What is Epabx and How it Works?</h5>
                                    <p>Dear Customers, We at Value Point are celebrating 3 decades of uninterrupted service to you, our amazing customers! In...</p>
                                </div>
                        </div>

                        <div className="col-md-4">
                            <img src="images/Service2.jpg" alt=""/>
                                <div className={`${styles.text}`}>
                                <p>22/05/22</p>
                                    <h5>What is Epabx and How it Works?</h5>
                                    <p>Dear Customers, We at Value Point are <br/>
                                    celebrating 3 decades of uninterrupted service to <br/>
                                    you, our amazing customers! In...</p>
                                    <button>View More</button>
                                </div>
                              
                        </div>


                        <div className="col-md-4">
                            <img src="images/Service3.jpg" alt=""/>
                                <div className={`${styles.text}`}>
                                <p>22/05/22</p>
                                    <h5>What is Epabx and How it Works?</h5>
                                    <p>Dear Customers, We at Value Point are celebrating 3 decades of uninterrupted service to you, our amazing customers! In...</p>
                                </div>
                               
                        </div>
                     

                    </div>
                </div>
        </div>
    )
}

export default InfrastructureServices;