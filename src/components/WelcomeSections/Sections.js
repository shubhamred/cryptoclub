import React from 'react'
import { Container } from 'react-bootstrap'
import Counter from '../WelcomeSections/Counter'
import { WelcomeSection } from '../WelcomeSections/WelcomeSection'
import { SectionBox } from '../WelcomeSections/SectionBox'
import { Sectionsec } from '../WelcomeSections/SectionSec'
import { Sectionthird } from '../WelcomeSections/SectionThird'
import { Newsletter } from './Newsletter'

export const Sections = () => {
    return (
        <div>
            <div className="content">
            <Counter />
            <WelcomeSection />
            <SectionBox />
            <Sectionsec />
            <Sectionthird />
            <Newsletter />
            </div>
        </div>
    )
}
