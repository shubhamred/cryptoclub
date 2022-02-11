import React from 'react'
import { Container } from 'react-bootstrap'
import { Footer } from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import { Newsletter } from '../../components/WelcomeSections/Newsletter'
import { SectionsTopHeading } from '../SectionsTopHeading'
import { MintContent } from './mintsection/MintContent'
import { MintFooterTable } from './mintsection/MintFooterTable'
import { Mint_footer } from './Mint_footer'
import { Restricted } from './restrictedarea/Restricted'

export const Mintpages = (props) => {
    return (
        <>
        {/* <div className="mintpage"> */}
            <Header />
            <SectionsTopHeading SectionTopHeading={'MINT'} />
            <MintContent />
            <Container className="content newsletter_content">
            </Container>
            <MintFooterTable />
            <div className="mint__footer">
            <Mint_footer/>
            </div>
        {/* </div> */}
        </>
    )
}
