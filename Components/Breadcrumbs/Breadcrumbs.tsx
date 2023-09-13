import React from "react";
import styles from "./SubMenu.module.scss";




import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container , Breadcrumb} from 'react-bootstrap';  


function Breadcrumbs() {  
  return (  
    <div className="breadcrumbs">  
   <Container className='p-4'>  
   <Breadcrumb>  
  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>  
  <Breadcrumb.Item href="#">  
   Product
  </Breadcrumb.Item>  
  <Breadcrumb.Item href="#">CCTV</Breadcrumb.Item>  
  <Breadcrumb.Item active>HD Wifi Home Camera</Breadcrumb.Item>  
</Breadcrumb>  
</Container>  
    </div>  
  );  
}  
export default Breadcrumbs;  