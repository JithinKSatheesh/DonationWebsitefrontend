import React from 'react'
import {Link} from 'react-router-dom'
import { RoundButton,DonateCard,BigHeading } from '../core/Utils';

export default function DonationRequestList() {
    
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
            <BigHeading text={`Don't know what people want!.`} size={'1.5em'} color='#012f84' />
            <div className="space-10"></div>
            <BigHeading text={'These are some of requests made by needed people'} size={'1.1em'} color='#012f84' />
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
                        <div className="col-4 h6 font-weight-light">Item :</div>
                        <div className="col-8 h6 text-secondary font-weight-light">Item</div>
                        <div className="col-4 h6 font-weight-light">Description :</div>
                        <div className="col-8 h6 text-secondary font-weight-light">Description</div>
                        <div className="col-4 h6 font-weight-light">To :</div>
                        <div className="col-8 h6 text-secondary font-weight-light">Location</div>
                        <div className="col-4 h6 font-weight-light">Requested by :</div>
                        <div className="col-8 h6 text-secondary font-weight-light">Name</div>
                        <div className="col-4 h6 font-weight-light">Contact :</div>
                        <div className="col-8 h6 text-secondary font-weight-light">899098789</div>
                        <div className="col-12">
                            <div className="space-20"></div>
                            <span className="">
                                <Link to='profile-donate'>
                                <RoundButton text='Donate' Bgcolor='#012f84' Hovercolor='#ec4392'/>
                                </Link>
                            </span>
                        </div>
                    </div>
                </DonateCard>
            </div>
        ))
    )
}
