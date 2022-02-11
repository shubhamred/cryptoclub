import React from 'react'
import './mint.scss'
import { Row, Col, Container } from "react-bootstrap"
import mintnow from "../../../assets/images/mintnow.png"
import heart from '../../../assets/images/Vector.png'
import mint_girl from '../../../assets/images/mint_girl.png'
import logo from '../../../assets/images/LOGO 1.png' 
import accessbtn from '../../../assets/images/Group 228.png'
import openimage from '../../../assets/images/openUntilSoldOut2.png'


export const MintContent = () => {
    return (
        <>
        <div className="container content mint_content position-relative">
            <div className="community-boxtwo mt-0 mb-0 p-40">
             <h5 className="medium_heading m-b10">Your Crypto Slut is Thrilled to Meeting You</h5>
             <div className="openimage"><img src={openimage} className="img-fluid mx-auto d-block" /></div>
                          
             {/* <h3 className="heading_shadow">OPEN UNTIL SOLD OUT</h3> */}
           <Row className="mb-5">
               <Col lg={7} sm={12} className="mt-5">
               <h3 className="slutheading">Mint your own Crypto Slut and get:</h3>
               <ul className="slutList">                 
                 <li>Exclusive Club Membership and VIP rooms access </li>
                 <li>Own Rare Crypto Slut NFT (over 650+ possible traits)</li>
                 <li>Compete for one of the limited edition 250 rare Cooking Apron Sluts after 25% threshold</li>
                 <li>Compete for one of the limited edition 250 rare Nurse Sluts after 50% threshold</li>
                 <li>Compete for one of the limited edition 250 rare Wet T-Shirt Sluts after 75% threshold</li>
                 <li>Compete for one of the limited edition 250 rare Topless Sluts after 100% threshold</li>
                 <li>Opportunity to take part in the future of the projects!</li>
               </ul>              
               
                </Col> 
               <Col lg={5} sm={12}>
                 <p>&nbsp;</p>
                   <img src={mint_girl} className="img-fluid pull-right mt-5 mx-auto d-block"/>
               </Col> 
           </Row>

           <Row>
           <Col md={12} className="mt-3 text-center">
           <a href="" className="mint_btn"><img src={mintnow} className="img-fluid center-block"/></a>
           </Col>
           </Row>           
         </div>
         <div className="mintRest container-mainbg container"></div>
        </div>
    
        <div className="restrictMint clearfix pt-5">
            <div className="container-fluid restbg">
                <div className="row justify-content-center">
                <div className="container text-center ">
                <img src={logo} width="228" /> 
                <h3 className="restric_h3">Restricted Area</h3>
                <h4 className="restric_h4">Crypto Slut Owners Only</h4>
                <img src={accessbtn} className="img-fluid"/>        
                </div>
                </div>
            </div>
        </div> 

        <div className="container container-mainbg news_div_mint">
        <div className="newsletter">
          <Row className="justify-content-center pb-5 text-light welcomesec">
            <Col xs={12} md={6}>
              <div className="text-center">
                <h3 className="heading-h3 minto">Mint Your Crypto Slut!</h3>
                <p className="box-pera">Become part of our exclusive club - own your crypto <br/> slut and live happily ever after!</p>
                <a href="" ><img src={mintnow} className="img-fluid"/></a>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    
        </>
    )
}
