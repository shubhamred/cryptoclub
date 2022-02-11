import React from 'react'
import { Footer } from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import { TraitsTopHeading } from './TraitsTopHeading'
import '../../pages/Traits/Traits.css'

export const Traits = () => {
    return (
        <>
            <Header/>
            <TraitsTopHeading SectionTraitsHeading="TRAITS"/>
            <Footer/>
        </>
    )
}
