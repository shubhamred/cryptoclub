import React from 'react'
import { Header } from '../../components/header/Header'
import { SectionTeamHeading } from './SectionTeamHeading'
import { TeamFooter } from './TeamFooter'
import { TeamSections } from './TeamSections'


export const Team = () => {
    return (
        <>
        {/* <Header/>
        <SectionTeamHeading SectionTeamHeading="TEAM"/>
        <TeamFooter/> */}
        <TeamSections SectionTraitsHeading="TEAM"/>
        </>
    )
}
