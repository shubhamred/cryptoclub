import React from 'react'
import { Card } from './Card'
import '../mintpage/mintsection/mint.scss';
import gghkgy from '../../assets/images/CryptoSlut-img/Crypto_Studs_Icon 1.png';
import lkgllk from '../../assets/images/CryptoSlut-img/Videogames_Icon 1.png';
import dfkglk from '../../assets/images/CryptoSlut-img/The_Slut_Fund_Icon 1.png';
import logo from '../../assets/images/LOGO 1.png'
import accessbtn from '../../assets/images/Group 228.png'
import lakfklg from '../../assets/images/Group 6.png';
import '../../pages/mintpage/restrictedarea/restricted.scss'
export const Roadmap_content = () => {
    return (
        <>

        <div className="restrict1 clearfix">
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

        <div className="container Roadmap_content">
            <div className="row">
                <h5 className="medium_heading pt-5">Medium Term Plans</h5>

                <div className=" col-md-4 col-12">
                    <Card 
                    imgsrc={gghkgy }
                    card_head="Crypto Studs"
                    card_text="The kind of guy you don’t introduce to your girlfriend. A collection of cool NFT male characters that will be eligible for breeding with the Crypto Sluts, combining special traits with them to create new amazing NFTs."
                    />
                </div>
                <div className="col-md-4 col-12">
                    <Card 
                    imgsrc={lkgllk}
                    card_head="Videogames"
                    card_text="Videogames
                    How about partying with your Crypto Sluts and Studs, or using them as avatars for the metaverse? Those are just some of the applications we’re planning for this collection. Once things get started, there are no limits for fuckery!"
                    />
                </div>
                <div className="col-md-4 col-12">
                    <Card
                    imgsrc={dfkglk}
                    card_head="The Slut Fund"
                    card_text="Here’s where 40% of all the project funds go to, and it will be used as the main cash flow for growth, development and new fun experiences.cash flow for growth, development and new fun experiences.cash flow for growth"
                    />
                </div>
            </div>

            <div>
            <h3 className="text-center text-white medium_heading" >Are you ready to have some fun?  </h3>
            <p className="text-center text-white join_text">Join our Discord Server for releasing dates and to mint your Crypto Sluts before anyone else!</p>
            <img src={lakfklg} alt="" className="img-fluid" />
            </div>
        </div>
    </>
    )
}
