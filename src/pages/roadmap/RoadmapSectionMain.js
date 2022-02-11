import React from 'react'
import { Container, Col, Row } from "react-bootstrap";
import twentyfive from "../../assets/images/twofive.png";
import fifty from "../../assets/images/fivezero.png";
import seventyfive from "../../assets/images/sevenfive.png";
import hundred from "../../assets/images/one.png";
import Stroke from "../../assets/images/Stroke (1).png";
import '../../pages/mintpage/restrictedarea/restricted.scss'

export const RoadmapSectionMain = () => {
    return (
        <div>
            <Container className="content">
        <div className="roadmap-box ">
          <h2 className="box-heading pb-2 text-center">
            <b>Are You Ready For The Ride?</b>
          </h2>
          <p class="box-pera text-center pl-5 pr-5">Minting your Crypto Sluts is only the beginning of the party.</p>
        <div className="stepper">
          <ul>
            <li className="itemstep step1 d-md-flex">
            <img src={twentyfive} />
            <p className="desc">Get ready for an extra dose of curves. Once we pass the 25% threshold of Crypto Sluts minted, the first to log into the VIP rooms Will be able to mint 250 extremely rare Crypto nurse Sluts with unique traits and your favorite alcohol cocktail. Only 250 of these will ever be made!</p> 
            </li>

            <li className="itemstep step2 d-md-flex">
            <img src={fifty} />
            <p className="desc">Hungry for more? Once 50% of Crypto Sluts have been minted, the first 250 wallets will be able to mint rare Crypto chef Slut with special traits and a sexy cooking apron! We know you won’t leave them waiting for meat…</p>



            </li>

            <li className="itemstep step1 d-md-flex">
            <img src={seventyfive} />
            <p className="desc">Things are about to get extra sexy. once we’ve reached 75% minted crypto sluts we Will make the wet T-shirt party at the roof, which Will allow the lucky 250 first wallets to unlock their very own ultra RARE wet T-shirt Crypto Slut NFT.</p>



            </li>

            <li className="itemstep d-md-flex">
            <img src={hundred} />
            <p className="desc">Once we reach the 100% the party is just starting! But hurry up because the RARE topless crypto slut collection Will be ready for grab as we want to reward you guys for making it to a happy ending! So make sure to be there on time, only 1000 first wallets Will be able to mint those topless crypto sluts!</p>



            </li>
          </ul>
          
        </div>

        <h2 className="box-heading pb-2 text-center">
            <b>Future Goals</b>
          </h2>          
               <ul className="slutList mb-5">                 
                 <li>Two Crypto Sluts, twice the fun. Once we reach the 100% minting threshold, all holders will be able to mint their slut’s BFFs (Best Friend Forever!!)  within a reasonable time frame — an exclusive collection composed of 10,000 unique Sluts Best Friend Forever. If doubling the size of your harem doesn’t excite you, we don’t know what will!
</li>
                 <li>Once 100% of all Crypto BFF Sluts are minted, we will have proved two things. First, that we all crypto enthusiasts are a bunch of crypto sluts addicts. And second, that this is a project with immense potential. To celebrate, we’ll get drunk as fuck and start working on the new Crypto Stud Collection to move to the next stage of growth, expand the Crypto Slut club, and turn this project into something never seen before. </li>
               </ul>   
              <p>&nbsp;</p>
               <h3 className="slutheading text-center mt-5"><b>   Are you ready for the ride?</b></h3>


          
          
          
        </div>
        </Container>
        </div>
    )
}
