import React from 'react'
import { Link } from 'react-router-dom';
import { RoundButton,DonateCard,BigHeading } from '../core/Utils';

import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'

export default function Donate() {

    

    return (
        <div className="row">
            <div className="col-12">
                <Fade bottom>
                    <BigHeading text='Contribute'/>
                </Fade>
                <div className="space-5 bg-light"></div>
                <div className="space-50"></div>
            </div>
            <div className="col-12 col-md-4">
                <Zoom>
                <DonateCard>
                    <Link style={{textDecoration:'none'}} to='profile'>
                        <RoundButton text='Donate Items' radius={'30px'} Bgcolor={'#012f84'} Hovercolor={'#ec4392'} />
                    </Link>
                    <div className="space-20"></div>
                    <Link style={{textDecoration:'none'}} to='profile'>
                        <RoundButton text='Donate Money' radius={'30px'}  Bgcolor={'#012f84'} Hovercolor={'#ec4392'}  />
                    </Link>
                </DonateCard>
                </Zoom>
            </div>
            <div className="col-12 col-md-8 text-now">
                <div className="space-20"></div>
                <Fade top>
                <div className="p-3">
                    Large or small, every donation is a step toward healing. 
                    By supporting  Foundation, you’ll be contributing to the development of society, and your action will transform lot of lives.
                    <div className="mt-4 font-weight-bold">
                    Thank you for your contribution!
                    </div>
                </div>
                </Fade>
            </div>
        </div>
    )
}


