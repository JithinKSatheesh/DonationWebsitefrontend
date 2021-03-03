import React from 'react'
import { RoundButton,DonateCard,BigHeading,PreviewImage } from '../core/Utils';
import placeholder from '../Assets/placeholder.png'

export default function Helptransport() {
    
    const data = [{
        id:'1',
        name:'Books',
        location:'Alappuzha'
    },{
        id:'2',
        name:'Books',
        location:'Alappuzha' 
    }]

    return (
        <div>
            <div className="space-20"></div>
            <BigHeading text={'Help us transport donations'} size={'1.5em'} color='#012f84' />
            <div className="space-10"></div>
            <BigHeading text={'You can also help us by volunteering to transport donated items from donars to our foundation'} size={'1.1em'} color='#012f84' />
            <div className="space-50"></div>
            <div className="row">
                <RenderTransportCard data={data}/>
            </div>
        </div>
    )
}


const RenderTransportCard = ({data})=>{
    return(
        data.map((card)=>(
            <div key={card.id} className="col-12 col-lg-6 ">
                <DonateCard>
                    <div className="row">
                        <div className="col-12">
                            <PreviewImage image={placeholder} />
                            <PreviewImage image={placeholder} />
                            <PreviewImage image={placeholder} />
                            <div className="space-20"></div>
                        </div>
                        <div className="col-4 h6 font-weight-light">Name :</div>
                        <div className="col-8 h6 text-secondary font-weight-light">Name</div>
                        <div className="col-4 h6 font-weight-light">From :</div>
                        <div className="col-8 h6 text-secondary font-weight-light">Location</div>
                        <div className="col-4 h6 font-weight-light">To :</div>
                        <div className="col-8 h6 text-secondary font-weight-light">Location</div>
                        <div className="col-4 h6 font-weight-light">Contact :</div>
                        <div className="col-8 h6 text-secondary font-weight-light">899098789</div>
                        <div className="col-12">
                            <div className="space-20"></div>
                            <span className="">
                                <RoundButton text='I can help' Bgcolor='#012f84' Hovercolor='#ec4392'/>
                            </span>
                        </div>
                    </div>
                </DonateCard>
            </div>
        ))
    )
}
