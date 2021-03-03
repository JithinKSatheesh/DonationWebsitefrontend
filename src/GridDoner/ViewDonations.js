import React from 'react'
import Layot from '../core/Layout'
import { BigHeading } from '../core/Utils';
import DonationRequestList from './DonationRequestList';

export default function Volunteer(props) {
    

    return (
        <Layot className='container'>
            <div className="space-100"></div>
            <BigHeading text='View donation requests' size='1.5em' />
            <div className="space-5 bg-pink"></div>
            <div className="space-20"></div>
            <DonationRequestList/>
            <div className="space-50"></div>
        </Layot>
    )
}
