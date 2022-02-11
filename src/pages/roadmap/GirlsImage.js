import React from 'react'
import gkdsl from '../../assets/images/GIRL_12.png'
import gkdpp from '../../assets/images/GIRL_1 1.png'
import jjhhj from '../../assets/images/GIRL_2 1.png'
import ggjjg from '../../assets/images/Nuevo grupo1 2.png'

export const GirlsImage = () => {
    return (
        <>
        {/* <img src={ggjjg} alt="" className="lamp"/> */}
        
        <div className="container .texture-top GirlsImageDiv community-box ourStory">  
           <div className="row"> 
            <div className="col-md-4 col-12">
            <img src={gkdsl} alt="" className="GirlsImage" />
           </div>
            
            
            <div className="col-md-4 col-12">
                <img src={gkdpp} alt=""  className="GirlsImage" />
            </div>
            
            <div className="col-md-4 col-12">
                <img src={jjhhj} alt=""  className="GirlsImage" />
            </div>
        </div>
    </div>
    </>
    )
}
