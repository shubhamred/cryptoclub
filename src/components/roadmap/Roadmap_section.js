import React from 'react'
import { Container, Col, Row } from "react-bootstrap";
import twentyfive from "../../assets/images/twofive.png";
import fifty from "../../assets/images/fivezero.png";
import seventyfive from "../../assets/images/sevenfive.png";
import hundred from "../../assets/images/one.png";
import Stroke from "../../assets/images/Stroke (1).png";
import "./roadmap.scss";

export const Roadmap_section = () => {
    return (
        // <Container>
        // <div className="community-boxtwo road_map">
        //   <h2 className="box-heading pb-2 text-center">
        //     <b>Road map2</b>
        //   </h2>
        //   <p className="box-pera pb-2 text-center">
        //     The roadmap of the crypto slut is going to be extreme fun!
        //   </p>
        //   <img src={Stroke} className="vertical"/>
        //   <p className="d-flex">
        //     <img src={twentyfive} className="bubble"/>
        //   {/* <span className="percent">25%</span> */}
        //   <span className="box-pera">
        //    Once 25% of the Crypto sluts has been minted, we will award the top
        //     150 wallets which are holding the most sluts with a special NFT of a
        //     random Crypto Nurse Slut , There are only going to be 150 of those!{" "}
        //   </span></p>
          
        //   <p className="d-flex">
        //     <img src={fifty} className="bubble"/>
        //   {/* <span className="percent">50%</span> */}
        //   <span className="box-pera">
        //     Once 50% of the crypto sluts has been minted, we will award the top
        //     random 150 wallets with another special NFT airdrop of a random
        //     crypto slut wearing a cooking apron with special treats!{" "}
        //   </span></p>
          
        //   <p className="d-flex">
        //     <img src={seventyfive} className="bubble"/>
        //   {/* <span className="percent">75%</span> */}
        //   <span className="box-pera">
        //     Once 75% of the crypto sluts has been minted, we will start a new
        //     count down for the BFF club, (Best Friends Forever Club) where you
        //     will be able to mint every slut Best Friend Forever, which only
        //     crypto sluts holders will be able to mint! This collection will be
        //     another 10,000 different crypto sluts which are reserved for each
        //     crypto slut owner (every slut will be able to bring just 1 friend,
        //     if the owner decides to mint it!){" "}
        //   </span>
        //   </p>
        //   <p className="d-flex">
        //     <img src={hundred} className="bubble"/>
        //   {/* <span className="percent">100%</span> */}
        //   <span className="box-pera">
        //     Once 100% of the crypto sluts has been minted, we will get drunk as
        //     fuck first, and after that we will start working on the new Crypto
        //     Stud collection! Which in it’s turn, will bring the eco system into
        //     a new phase of growth and our exclusive to something extra
        //     ordinary the world as yet to see.{" "}
        //   </span></p>
          
        // </div>
        // </Container>


        <div>
        <Container className="content">
    <div className="roademap-boxtwo ">
      <h2 className="box-heading pb-2 text-center">
        <b>Roadmap</b>
      </h2>
      <p class="box-pera text-center pl-5 pr-5">The roadmap of the crypto slut is going to be extreme fun! </p>
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
             <li>Two Crypto Sluts, twice the fun. Once we reach the 100% minting threshold, all holders will be able to mint their slut’s BFFs (Best Friend Forever!!)  within a reasonable time, — an exclusive collection composed of 10,000 unique Sluts Best Friend Forever. 
</li>
             
           </ul>             
           <h3 className="slutheading text-center mt-2"><b>If doubling the size of your harem doesn’t excite you, we don’t know what will!</b></h3>


      
      
      
    </div>
    </Container>
    </div>
    )
}
