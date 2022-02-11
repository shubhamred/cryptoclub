import React from 'react'
import './mintpage/mintsection/mint.scss'

export const SectionsTopHeading = (props) => {
    return (
        <>
        <div className="container texture-top slider_mintsection">
        <h3 className="mint_heading">{props.SectionTopHeading} </h3>
        </div>
        </>
)
}
