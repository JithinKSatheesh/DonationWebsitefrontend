import React from 'react'
import { RoundButton,DonateCard,BigHeading } from '../core/Utils';

export default function Donate() {

    

    return (
        <div className="row">
            <div className="col-12">
                <BigHeading text='Contribute'/>
                <div className="space-5 bg-light"></div>
                <div className="space-50"></div>
            </div>
            <div className="col-12 col-md-4">
                <DonateCard>
                    <RoundButton text='Donate Items' radius={'30px'} Bgcolor={'#012f84'} Hovercolor={'#ec4392'} />
                    <div className="space-20"></div>
                    <RoundButton text='Donate Money' radius={'30px'}  Bgcolor={'#012f84'} Hovercolor={'#ec4392'}  />
                </DonateCard>
            </div>
            <div className="col-12 col-md-8 text-now">
                <div className="space-20"></div>
                <div className="p-3">
                    Large or small, every donation is a step toward healing. By supporting  Foundation, you’ll be contributing to the development of innovative treatment, research and teaching projects that will transform lives. Because change is born of commitment, be a part of Sainte-Justine’s vision of the future: give now for a healthier tomorrow.
                    <div className="mt-4 font-weight-bold">
                    Thank you for your contribution!
                    </div>
                </div>
            </div>
        </div>
    )
}


