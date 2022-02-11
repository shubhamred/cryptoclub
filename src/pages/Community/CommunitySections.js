import React from 'react'
import { Header } from '../../components/header/Header'
import { Community_footer } from './Community_footer'
import dgfcd from '../../assets/images/Group 98 (1).png';
import discard from '../../assets/images/Group 6.png'
import twitter from '../../assets/images/twitter.png'
import medium from '../../assets/images/mediumImg1.png'
import Twlfkk from '../../assets/images/Group Twitter.png'
import Twlssk from '../../assets/images/Group 98 (2).png'
import gdggdg from '../../assets/images/GIRL_1 3.png'
import gffff from '../../assets/images/girl2.png'
import opensea from '../../assets/images/openseaImg2.png'
import accessbtn from '../../assets/images/Group 228.png'
import logo from '../../assets/images/LOGO 1.png'
import lamp from '../../assets/images/Nuevo grupo1 2.png'
import '../../pages/mintpage/restrictedarea/restricted.scss'
import { SectionTeamHeading } from '../Team/SectionTeamHeading';

export const CommunitySections = (props) => {
    return (
        <>   
            <Header/>
    
        <div className="container texture-top slider_mintsection">
        <h3 className="mint_heading">{props.SectionTeamHeading} </h3>
        </div>

      <div className='container-mainbg container'>
         <div className="container community_section  comBo">
          
        <div className="row justify-content-center ">
        <div className="col-md-7 col-12">
        <h5 className="comHeading">Join The Discussion</h5>
        <p className="box-pera  p-5">Follow us on discord  to join the whitelist and get a chance to win rare NFT’s - stay tuned to our announcements and the collection updates</p>
        <img src={discard} alt="img" className="img-fluid center-block "/>
        </div>
        <div className="col-md-5 col-12">
        <img src={dgfcd} alt="img" className="pt-5 img-fluid center-block"/>
        </div>
        </div>
        </div> 
    

        <div className="container community_section ">  
        <div className="row justify-content-center ">
        <div className="col-md-5 col-12 p-5">
        <img src={Twlfkk} alt="img" className="pt-5 img-fluid"/>
        </div>
        <div className="col-md-7 col-12">
        <h5 className="com2Heading">Discover What's Happening <br/>Right Now</h5>
        <p className="box-pera p-4">Join the premium crypto slut club, Twitter Yours Now!</p>
        <img src={twitter} alt="img" className="img-fluid center-block"/>
        </div>
        </div>
        </div>
        <div className="p-5"></div>
        </div>
        <div className="restrict1 clearfix restri_Community communityStory">
            <div className=" restbg">
                <div className="justify-content-center ">
                <div className="container text-center restrict3 ">
                <img src={logo} width="228" /> 
                <h3 className="restric_h3">Restricted Area</h3>
                   <h4 className="restric_h4">Crypto Slut Owners Only</h4>
                   <img src={accessbtn} className="img-fluid"/>        
                </div>
                </div>
            </div>
        </div> 

        <div className='container-mainbg container NFT'>
        <div className='p-5 '></div>
        <div className=" comBo medium">  
        <div className="row justify-content-center  ">
        <div className="col-md-7 col-12">
        <h5 className="comHeading">The Original Crypto Slut NFT Collectibles</h5>
        <p className="box-pera  p-5">Join the premium crypto slut club, Medium Yours Now!</p>
        <img src={medium} alt="img" title="medium" className="img-fluid center-block"/>
        </div>
        <div className="col-md-5 col-12 p-5">
        <img src={Twlssk} alt="img" className="pt-5 img-fluid"/>
        </div>
        </div>
        </div>

        
        <div className="container community_section girlOpen  pt-5 pb-5">  
        <div className="row justify-content-center text-center pt-5">
        <div className="col-md-4 col-12  ">
        <img src={gdggdg} alt="img" className="img-fluid center-block"/>
        </div>
        <div className="col-md-4 col-12">
        <h5 className="openHead">See the full collection  on the Opensea</h5>
        <img src={opensea} alt="img" title="opensea" className=" img-fluid"/>
        </div>
        <div className="col-md-4 col-12">
        <img src={gffff} alt="img" className="img-fluid center-block"/>
        </div>
        </div>
        </div>
        <div className="space"></div>
        </div>
        <Community_footer/>
        
        
        </>
    )
}
