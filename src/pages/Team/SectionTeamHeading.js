import React from 'react'
import '../mintpage/mintsection/mint.scss'
import flgdf from '../../assets/images/GIRL_12.png'
import fjgjd from '../../assets/images/GIRL_22.png'
import flhhf from '../../assets/images/GIRL_31.png'
import dgcrc from '../../assets/images/Nuevo grupo1 2.png'
import logo from '../../assets/images/LOGO 1.png' 
// import mint from '../../assets/images/mint_Top.png'
import accessbtn from '../../assets/images/Group 228.png'
import { RestrictedArea } from '../RestrictedArea'

export const SectionTeamHeading = (props) => {
    return (
    
        <>
        <img src={dgcrc} alt="lamp" className="LightLamp"/>
        
        <div className="container texture-top slider_mintsection">
        <h3 className="mint_heading">{props.SectionTeamHeading} </h3>
        </div>
{/* 
        <div className="container container-mainbg "> */}
        <div className="community-boxtwo ">  
        <h5 className="team_heading">Who Looks After the Crypto Sluts?</h5>
        <p className="box-pera text-center">A.K.A. Meet the Team</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
            <div className="row  slotItem">
            <div className="col-md-5 ">
                <img src={flgdf} alt="img" className="pull-left"/>
            </div>
            <div className="col-md-7 ">
            <h2 className="pt-5 teamHead teamHead"><b>The Pimp</b></h2>
            <p className="pr-5 box-pera ">The Pimp A man of many talents required to succeed in his professional field, such as flashing money around, driving expensive Cadillacs, and covering many of the business expenses that come when you administer an harem of sexy anime girls.</p>
            </div>
            </div>

            <div className="row slotItem ">
            <div className="col-md-7 ">
            <h2 className="pt-5 teamHead"><b>Mama San</b></h2>
            <p className="pr-5 box-pera">Mama san She’s the voice of wisdom, and the master hand in charge of using art to exteriorize the huge personality of the Crypto  Sluts — like, really exteriorizing it.</p>
            </div>
            <div className="col-md-5">
                <img src={fjgjd} alt="img" className="pull-right"/>
            </div>
            </div>

            <div className="row slotItem">
            <div className="col-md-5 ">
                <img src={flhhf} alt="img" className="pull-left" />
            </div>
            <div className="col-md-7 ">
            <h2 className="pt-5 teamHead ml-5"><b>The Bodyguard</b></h2>
            <p className="pr-5 box-pera">The Bodyguard Bad boys can’t escape his severe gaze. Those trying to mess with the Crypto Sluts will eat for breakfast a knuckle sandwich, wrapped in hundreds of lines of code.</p>
            </div>
            </div>
            </div>
        {/* </div> */}
           
            <div className="restrict1 clearfix">
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

        
        {/* <div className="container container-mainbg temp1"> */}
        <div className="container temp"></div>
        <div className="container community-boxtwo  ">  
        <h5 className="medium_heading pt-5 teamHead">The Gang</h5>

            <div className="row p-5 justify-content-center">
            <div className="col-md-6 ">
                <img src={flgdf} alt="img" className="center-block" />
            </div>
            <div className="col-md-6 ">
            <h2 className="pt-5 teamHead float-left"><b>The Bartender:</b></h2>
            <p className="pr-5 box-pera">God’s favorite traits mixer. When he’s not adding rare attributes to his blends he is preparing excellent martinis.</p>
            </div>
            </div>

            <div className="row p-5 justify-content-center">
            <div className="col-md-6 ">
            <h2 className="pt-5 teamHead"><b>The Janitor:</b></h2>
            <p className="pr-5 box-pera">He has seen things people couldn’t even imagine. He doesn’t talk about it.</p>
            </div>
            <div className="col-md-6">
                <img src={fjgjd} alt="img" className="center-block"/>
            </div>
            </div>

            <div className="row p-5 justify-content-center">
            <div className="col-md-6 ">
                <img src={flhhf} alt="img" className="center-block"/>
            </div>
            <div className="col-md-6 ">
            <h2 className="pt-5 teamHead"><b>The Accountant:</b></h2>
            <p className="pr-5 box-pera">Sometimes ones and zeroes need to be backed by differential equations and complex logarithms.</p>
            </div>
            </div>
        </div>
        
        {/* </div> */}
    
        
      </>
    )
}
