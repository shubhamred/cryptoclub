import React from 'react'
import { Card } from 'react-bootstrap'
import { Footer } from '../../components/footer/Footer'
import {Header} from '../../components/header/Header'
import { Roadmappage_section } from '../../components/roadmap/RoadmapPage_section'
import { Roadmap_section } from '../../components/roadmap/Roadmap_section'
// import { Community_footer } from '../Community/Community_footer'
// import { Restricted } from '../mintpage/restrictedarea/Restricted'
import { SectionsTopHeading } from '../SectionsTopHeading'
import { GirlsImage } from './GirlsImage'
import { MidiumTerm } from './MidiumTerm'
import { RoadMapBlock } from './RoadMapBlock'
import { RoadmapSection } from './RoadmapSectionMain'
import { Roadmap_content } from './Roadmap_content'
import { Roadmap_footer } from './Roadmap_footer'

export const Roadmap_page = () => {
    return (
        <div>
            {/* <Header />
            <SectionsTopHeading SectionTopHeading="Roadmap" />
            <RoadmapSection/>
            {/* <Restricted/> 
            <GirlsImage/>
            <Roadmap_content />
            <Roadmap_footer/> */}

            <RoadMapBlock/>
        </div>
    )
}
