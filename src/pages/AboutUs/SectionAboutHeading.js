import React from 'react'
// import { Roadmappage_section } from '../components/roadmap/RoadmapPage_section'
import '../mintpage/mintsection/mint.scss'
import kfkfk from '../../assets/images/LOGO 1.png'
import truefreedom from '../../assets/images/TRUE FREEDOMver.01.png'
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
export const SectionAboutHeading = (props) => {
    return (
        <>
        <div className="container texture-top slider_mintsection">
        <h3 className="mint_heading">{props.SectionTopHeading} </h3>
        </div>

        <div className="container container-mainbg">
            <div className=" aboutbox ourStory">
            <div className="p-2 justify-content-center">
            <h5 className="medium_heading">Our Story</h5>
            <p className="box-pera text-center pl-5 pr-5">What happens when you merge talented artists with a knack for big boobs, crypto degenerates that can’t stop talking about blockchain, and anime weebs (which is already denigrating on its own)? Well, you’re looking at the answer.            </p>

            <div className="col-md-12">
                <img src={kfkfk} alt="img" className="img-fluid mx-auto" />
            
            <p className="box-pera text-center p-4">No one can cancel Crypto Sluts. No one can fill them with reports until they get taken down.
No one can put pressure on a lobby or issue a public denunciation to try to get us to delete
them</p>
            </div>
            <div className="col-md-12 ">
            <img src={truefreedom} alt="img" className="img-fluid mx-auto d-block" />           
            </div>
            <p className="box-pera text-center">Also, let’s be honest here, we all enjoy a good pair of bazookas</p>
            </div>
            </div>
        




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
      </div>
        

        <div className="restrict1 clearfix">
            <div className=" restbg">
                <div className="justify-content-center ">
                <div className="container text-center ">
                <img src={logo} width="228" /> 
                <h3 className="restric_h3">Restricted Area</h3>
                   <h4 className="restric_h4">Crypto Slut Owners Only</h4>
                   <img src={accessbtn} className="img-fluid"/>        
                </div>
                </div>
            </div>
        </div> 

    
    <div className="container  MeetTeamAbout ">
       <div className="row justify-content-center">
           <div className="col-md-10 col-12 text-center">
            <h2 className="box-heading text-center text-white">
            <b>Meet the Team</b>
            </h2>
         
          <p className="text-center text-white para mt-4">Meet the team behind the crypto slut club! Get mingle with crypto slut owners, and VIP members!</p>
          <a href="" title="Team" className="img-fluid"><img src={team} alt="img" className='img-fluid' /></a> 
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </div>
         </div>
         </div>
          <div className="aboutTable">
          <img src={table2} alt="table" className="aboutBar"/>
          </div>
         
        </>
)
}
