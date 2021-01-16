import React from 'react'
import {RoundButton  } from './Utils';

export default function Impact() {

    const ImpactStyle = {
        HugeFont:{
            fontSize:'3.3em',
            color:'#012f84',
            fontWeight:'bold'
        }
    }

    return (
        <div className="row">
            <div className="col-12 text-center">
                <span style={ImpactStyle.HugeFont}>
                Impact of your donations
                </span>
            </div>
            <div className="col-12 col-md-4 offset-md-4">
                <div className="space-50"></div>
                <RoundButton text={'See the impact'}  Bgcolor='#f7b744'/>
                <div className="space-100"></div>
            </div>
        </div>
    )
}
