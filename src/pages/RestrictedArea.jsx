import React from 'react'
import logo from '../assets/images/LOGO 1.png'
import accessbtn from '../assets/images/Group 228.png'
import '../pages/mintpage/restrictedarea/restricted.scss'

export const RestrictedArea = () => {
    return (
        <div className="container-fluid container-bg restrict">
        <div className="restricted_img_Bg">
           <div className="container">
               <div className=" row justify-content-center text-center">
                   <div className="col-md-4 col-xs-12 restricted_section" >
                   <img src={logo} className="restricted_logo"/>
                   <h3 className="restric_h3">Restricted Area</h3>
                   <h4 className="restric_h4">Crypto Slut Owners Only</h4>
                   <img src={accessbtn} className="img-fluid"/>
                   </div>
               </div>
           </div> 
        </div>
        </div>
    )
}
