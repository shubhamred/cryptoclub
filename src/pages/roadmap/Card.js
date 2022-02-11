import React from 'react'


export const Card = (props) => {
    return (
   
        <div className="card community-boxtwo">
            <div className="img_div">
                <img src={props.imgsrc} alt="image" className="img-fluid center-block"/>
            </div>

            <div className="card-heading text-center text-white">
                    <h2>{props.card_head}</h2>
            </div>

            <div className="card-text text-center text-white">
                <p>{props.card_text}</p>
            </div>
        </div>
   
    )
}
