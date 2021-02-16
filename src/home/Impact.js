import React from 'react'
import {RoundButton  } from '../core/Utils';
import { Link } from 'react-router-dom';

import Fade from 'react-reveal/Fade'


export default function Impact() {

    const ImpactStyle = {
        HugeFont:{
            fontSize:'2.5em',
            color:'#012f84',
            fontWeight:'bold'
        }
    }

    return (
        <div className="row">
            <Fade >
            <div className="col-12 text-center">
                <span style={ImpactStyle.HugeFont}>
                You can help by volunteering
                </span>
            </div>
            <div className="col-12 col-md-4 offset-md-4">
                <div className="space-50"></div>
                <Link style={{textDecoration:'none'}} to='/volunteer'>
                <RoundButton text={'Help us transport donations'}  Bgcolor='#f7b744'/>
                </Link>
                <div className="space-100"></div>
            </div>
            </Fade>
        </div>
    )
}
