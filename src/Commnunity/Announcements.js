import React from 'react'
import { DonateCard,BigHeading,RoundButton } from '../core/Utils';
import Layot from '../core/Layout'

const announcementList = [
    {
        id:1,
        message:'Sapmple message',
        date:'13/4/2021'
    },
    {
        id:2,
        message:'Sapmple message',
        date:'13/4/2021'
    },

]

export default function Announcements(props) {

    return (
        <>
            <Layot className="container">
            <div className="space-100"></div>
            <BigHeading text='Community announcements' size='1.5em' />
            <div className="space-5 bg-pink"></div>
            <RenderAnnouncement announcementList={announcementList}/>
            <div className="space-100"></div>
            </Layot>
        </>
    )
}


const RenderAnnouncement = ({announcementList})=>{
    return(
        <>
        {announcementList.map(announcement=>{
            return(
                <DonateCard key={announcement.id}>
                    <div className="badge badge-secondary">
                        {announcement.date}
                    </div>
                    <div className="space-5"></div>
                    {announcement.message}
                    <div className="space-5"></div>
                    <div className="btn btn-warning">
                        Comment
                    </div>
                </DonateCard>
            )
        })}
        </>
    )
}
