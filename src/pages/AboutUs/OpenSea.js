import React from 'react'
import { Row, Col} from "react-bootstrap";
import girl from "../../assets/images/GIRL_1 3.png";
import secgirl from "../../assets/images/GIRL_22.png";
import opensea from "../../assets/images/opensea.png";
import team from '../../assets/images/Group 5.png'
import glass from '../../assets/images/Group 122.png'
import '../../pages/mintpage/restrictedarea/restricted.scss'
import logo from '../../assets/images/LOGO 1.png'
import accessbtn from '../../assets/images/Group 228.png'
import table2 from '../../assets/images/Group 122.png'

export const OpenSea = () => {
    return (
    <>
    {/* <div className="container-fluid ">
        <div className="row">
            <div className="col-md-10">
            <img src={glass} alt="img" className="glassImg"/>
            </div>
        </div>
    </div> */}
    

    <div className="container opensea_div ">
  
        <div className="community-boxtwo  ourStory">
      <Row>
        <Col xs={12} md={3} className="text-center">
          <img src={girl} className="img-fluid"/>
        </Col>
        <Col xs={12} md={6}>
          <h2 className="box-heading text-center mt-5">
            <b>See the full collection<br/> on the Opensea</b>
          </h2>
          <div className="bluebtntwo text-center">
          <a href="" ><img src={opensea} title="Open Sea" className="img-fluid"/></a>
          </div>
        </Col>
        <Col xs={12} md={3}>
          <img src={secgirl} className="img-fluid"/>
        </Col>
      </Row>
      </div>    
      </div>      
    </>
    )
}
