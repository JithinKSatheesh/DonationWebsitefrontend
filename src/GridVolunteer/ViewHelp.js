import React from 'react'
import Layot from '../core/Layout'
import Helptransport from './HelpTransport'
import { BigHeading } from '../core/Utils';

export default function Volunteer(props) {
    

    return (
        <Layot className='container'>
            <div className="space-100"></div>
            <BigHeading text='Volunteering' size='1.5em' />
            <div className="space-5 bg-pink"></div>
            <div className="space-20"></div>
            <Helptransport/>
            <div className="space-50"></div>
        </Layot>
    )
}
