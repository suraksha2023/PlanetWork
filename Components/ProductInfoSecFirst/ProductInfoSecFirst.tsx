import React from "react";
import styles from  "./ProductInfoSecFirst.module.scss";

function ProductInfoSecFirst(){
    return (
      <div className={`${styles.productinfosecfirst}`}>

<div className ="container">
<div className={`${styles.paraDiv} row`}>

                <div className= "col-md-6">
                  <p>We pride ourselves on going above and beyond for <br/>
                  the customer on every project we take on. Whether<br/>
                  you’re looking for a surveillance camera installation<br/>
                  or an access control system installation, it’s <br/>
                  important that the security system installer you<br/>
                  choose has the experience and vision to help you <br/>
                   achieve your security goals. Our commercial<br/>
                    security services are about more than surveillance<br/>
                     system installation or alarm system.</p>
                 </div>



                
                
                    <div className="col-md-6">
                            <img src="images/CCTVCamera2.png" alt=""/>                      
                    </div>



             </div>
           </div>   
      </div>

    );

}

export default ProductInfoSecFirst;