import React from 'react'
import { Header } from '../../components/header/Header'
import { SectionAboutHeading } from './SectionAboutHeading'
import '../mintpage/mintsection/mint.scss'
import { OpenSea } from './OpenSea'
import { Footer } from '../../components/footer/Footer'
import { About_footer } from '../About_footer'

export const AboutUs = () => {
    return (
        <>
        <Header/>
        <SectionAboutHeading SectionTopHeading="ABOUT US"/>
        <About_footer/>
               
        </>
    ) 
}
