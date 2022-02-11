import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import girl from "../../assets/images/GIRL_1 3.png";
import secgirl from "../../assets/images/GIRL_22.png";
import opensea from "../../assets/images/opensea.png";
import logo from "../../assets/images/LOGO 1.png";
import bulb10 from '../../assets/images/Nuevo grupo1 2.png'
import bulb11 from '../../assets/images/Nuevo grupo1 9.png'

import heart from "../../assets/images/Vector.png";
import mint from "../../assets/images/Group51.png";
import mint2 from "../../assets/images/Group 51.svg";
import mintnow from "../../assets/images/mintnow.png";
import { ReactSVG } from 'react-svg';

export const Sectionsec = () => {
  return (
    <>
    <div className="bulb10"><img src={bulb10} alt=""/></div>
    <div className="bulb11"><img src={bulb11} alt=""/></div>
      <div className="container container-mainbg homesection">
        <div className="p-3"></div>
    <div className="community-boxtwo collection">
      <Row>
        <Col xs={12} md={3} className="text-center">
          <img src={girl} className="img-fluid"/>
        </Col>
        <Col xs={12} md={6}>
          <h2 className="box-heading text-center">
            <b>See the full collection<br/> on the Opensea</b>
          </h2>
          <div className="bluebtntwo text-center">
          <a href="" ><img src={opensea} className="img-fluid"/></a>
          </div>
        </Col>
        <Col xs={12} md={3}>
          <img src={secgirl} className="img-fluid"/>
        </Col>
      </Row>
    </div>
    <div className="p-2"></div>
    <div className="community-boxtwo slut ">
    <h2 className="box-heading text-center pb-2">The Crypto Sluts</h2>
    <p className="box-pera text-center">The Crypto Sluts are a collection of NTFs programmatically generated from over 650+ possible traits<br/> across 17 different parts such as hair, eyes, mouth, accessories, tattoos, dresses, earrings, and more.<br/> Some of them are sweet like a lollipop, or dark like a gothic vampire, or just look like that girl you told your  girlfriend not to worry about.</p>
    <Row>
        <Col md={6} sm={12}>
        <img src={logo} className="img-fluid" alt="logo"/>
        </Col>
        <Col md={6} sm={12}>
        <p className="box-pera">Some will even hold your favorite crypto and know that blockchain is not a new bike lock brand.</p>
        <p className="box-pera">Isn’t that cool?</p>
        <p className="box-pera">Own enough of them to have a dream harem that will be the envy of any NFT collector around the world!</p>
        </Col>
    </Row>
 </div>


 <div className="p-5"></div>

 <div className="community-boxtwo crypto container">
           <Row>
               <Col md={8} sm={12}>
               <h2 className="box-heading pb-4"><b>Why a Crypto Slut?</b></h2>
               <p className="boxtwo-pera pb-3">There are many reasons why a crypto sluts is the<br/> perfect choice for you. These are just a few:</p>
               <p className="boxtwo-pera"><img src={heart} className="heart" /> <span> Charismatic and lovely girl that trigger that<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; love at first sight feeling</span></p>
               <p className="boxtwo-pera"><img src={heart} className="heart" /> <span> 12 different randomly-generated traits</span></p>
               <p className="boxtwo-pera"><img src={heart} className="heart" /> <span> You can own one even if you’re married! </span></p>
               <p className="boxtwo-pera"><img src={heart} className="heart" /> <span> All of them are virgins </span></p>
               <p className="boxtwo-pera"><img src={heart} className="heart" /> <span> Cryptosluts are as loyal as their owner! </span></p>
               <p className="boxtwo-pera"><img src={heart} className="heart" /> <span> They are nutty, cute, sexy and playful 😉 </span></p>
               <p className="boxtwo-pera"><img src={heart} className="heart" /> <span> HODL your crypto slut long enough and she will bring a<br/> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;friend!* </span></p>
               
               </Col>
               <Col md={4} sm={12}>
                <img src={mint} className="img-fluid" />
                {/* <ReactSVG src={mint2} /> */}
               </Col>
           </Row>
        </div>
     
 </div>
</>
  );
};
