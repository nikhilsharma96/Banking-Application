import React, { Component } from 'react';
import '../App.css';



class Footer extends Component{
    render(){
        return(
         <div className="Navbar" style={{ backgroundImage: 'url("/assets/images/background-navbar.jpg")',height:'20vh'}}>
             <p style={{paddingLeft:'10%'}}>Created by Nikhil & Ritika</p>
         </div>
        );
    }
}

export default Footer;