import {NavDropdown} from 'react-bootstrap';
   import React from "react";
    import styles from "./Menu.module.scss";

        const Menu = () => {
            return (
                <div className={`${styles.menu}`}>
                    <div className="container">
                        <div className="row">
                        <div className={`${styles.logo} col-md-4`}>
                        <img src="/images/logo.png" alt="logo"></img>
                    </div>

                    <div className={`${styles.navMenu} col-md-4`}>

                        <ul>
                            <li>Home</li>                        
                            <li>About</li>
                            <li>Products</li>
                            <li>Solutions</li>
                            <li>Alliance & Partner</li>                  
                            <li>Blog</li>
                            <li>Industries</li>

                        </ul>

                   
                    </div>

                    <div className="col-md-4">
                        <button type="button" className={`${styles.Btn} btn btn-sm`} >Contact</button>
                    </div>
                    </div>
                    </div>

                </div>
            )
        }

    export default Menu;