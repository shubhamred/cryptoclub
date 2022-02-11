import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./welcomepage.scss";
import { ReactSVG } from "react-svg";
import image from "../../assets/images/Group98.png";
import mintnow from "../../assets/images/Group 99.svg";
import discord from "../../assets/images/Group 5.svg";
import twitter from "../../assets/images/Group 3.svg";

export const WelcomeSection = () => {
  return (
    <div className="sectionwelcome container">
        <div className=" community-box cryptoslut  ">
          <Row>
            <Col xs={12} md={4}>
              <div className="bluebox text-center">
              <img src={image} className="img-fluid"/>
              </div>
            </Col>
            <Col xs={12} md={8}>
              <h2 className="box-heading pt-5 m-5">
               <b> The Original Crypto Slut NFT Collectibles</b>
              </h2>
              <p className="mb-1 mt-1 box-p2 text-center">
                Join the premium crypto slut club, Mint Yours Now!
              </p>
              <div className="orangebtn text-center">
              <a href="" >
                {/* <img src={mintnow} className="img-fluid"/> */}
                <ReactSVG src={mintnow} />
                </a>
              </div>
            </Col>
          </Row>
        </div>

        <div class="container-mainbg container welcome">
          <Row className="justify-content-center text-light welcomesec">
            <Col xs={12} md={9}>
              <div className="welcome-heading">
                <h1>Welcome to <br /> crypto slut club</h1>
                <p>Follow us on discord and twitter to join the whitelist and get
                  a chance to win <br /> rare NFT’s - stay tuned to our
                  announcements and the collection updates</p>
              </div>

              <Row className="welcomebtn text-center">
                <Col xs={12} md={6}>
                  <a href="" >
                    {/* <img src={twitter} className="img-fluid" /> */}
                    <ReactSVG src={twitter} />
                   
                    
                    </a>
                </Col>
                <Col xs={12} md={6}>
                <a href="" >
                  {/* <img src={discord} className="img-fluid" /> */}
                  <ReactSVG src={discord} />
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </div>
 
    </div>
  );
};
