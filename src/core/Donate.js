import React from 'react'
import { RoundButton } from './Utils';

export default function Donate() {

    const DonateStyle = {
        HeadingText:{
            fontSize:'4em',
            color:'#ec4392'
        }
    }

    return (
        <div className="row">
            <div className="col-12">
                <div className="text-center text-md-left">
                    <span style={DonateStyle.HeadingText}>
                        Contribute
                        <div className="space-5 bg-light"></div>
                    </span>
                </div>
                <div className="space-50"></div>
            </div>
            <div className="col-12 col-md-4">
                {DonateCard()}
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


const DonateCard = ()=>{

    const CardStyle = {
        OuterBody:{
            boxShadow:'0px 0px 10px 5px rgba(84, 84, 84, 0.1)',
            padding:'50px 20px',
            borderRadius:'20px'
        },
        InputStyle:{
            borderRadius:'20px'
        }
    }

    return(
        <div style={CardStyle.OuterBody}>
            <div >
                <div className="form-group">
                    <label className="font-weight-bold text-now">AMOUNT</label>
                    <input style={CardStyle.InputStyle} type="text" className="form-control"/>
                </div>
                <RoundButton text='Donate' radius={'30px'}  />
            </div>
        </div>
    )
}