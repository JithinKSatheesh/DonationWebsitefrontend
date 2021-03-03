import React,{useState} from 'react'
import Layout from '../core/Layout'
import { RoundButton,DonateCard,BigHeading } from '../core/Utils';
import {isAuthenticated} from '../Auth/Auth'

import Fade from 'react-reveal/Fade'


export default function Profile() {
    
    const RequestedList = [
        {
            id:1,
            name:'Cloths',
            status:'We will let you know when someone is willing to donate',
            needTransportHelp : false,
            transportVolunteer:{},   
        },
        {
            id:2,
            name:'Books',
            status:'Awaiting to get Picked up',
            needTransportHelp : true,
            transportVolunteer:{
                name:'Arun',
                phone:'8980989878'
                },   
        },
        {
            id:3,
            name:'Cloths',
            status:'Under review',
            needTransportHelp : true,
            transportVolunteer:{},   
        },
    ]

    const {user} = isAuthenticated()

    

    return (
        <Layout className='container'>
            <Fade>
            <div className="space-100"></div>
            <div className="row">
                <div className="col-12">
                    {/* <BigHeading text={`Hi, ${user.name}`} size={'2em'} color='#012f84'/> */}
                    <BigHeading text={`Hi, User`} size={'2em'} color='#012f84'/>
                    <div className="space-5 bg-now"></div>
                    <div className="space-50"></div>
                </div>
                <div className="col-12">
                    <BigHeading text={'Request an item '} size={'1.5em'} color='#012f84' />
                    <div className="space-20"></div>
                </div>
                <div className="col-12 col-md-4">
                    <RequestItemForm/>
                </div>
                <div className="col-12 col-md-7 offset-md-1">
                    <RequestedItems RequestedList={RequestedList}/>
                    <div className="space-20"></div>
                    <div style={{cursor:'pointer'}} className="text-now font-weight-bold p-2">
                        view requested items history
                        <span className=" btn-link "> 
                            &nbsp;<svg  fill='#012f84' width="14" height="14" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/></svg>
                        </span>
                    </div>
                </div>
            </div>
            <div className="space-50"></div>
            </Fade>
        </Layout>
    )
}





const RequestItemForm = () => {
    const FormStyle = {
        InputBox:{
            borderRadius:'20px'
        }
    }

    const [values,setValues] = useState({
        name:'',
        description:'',
        phone:'',
        location:'',
    })

    const handleChange = name => event =>{
        setValues({...values,[name]:event.target.value})
    }


    return (
        <DonateCard>
            <div className="form-group">
                <label className='text-now font-weight-bold'>Name</label>
                <input
                    onChange={handleChange('name')}
                    value={values.name}
                    placeholder='e.g. Cloth, books, ...'
                    style={FormStyle.InputBox}
                    type="text"
                    className="form-control" />
            </div>
            <div className="form-group">
                <label className='text-now font-weight-bold'>Description</label>
                <input
                    onChange={handleChange('description')}
                    value={values.description}
                    placeholder='e.g. 5 set of medium size shirts'
                    style={FormStyle.InputBox}
                    type="text"
                    className="form-control" />
            </div>
            <div className="form-group">
                <label className='text-now font-weight-bold'>Phone</label>
                <input
                    onChange={handleChange('phone')}
                    value={values.phone}
                    placeholder='e.g. 9087879878'
                    style={FormStyle.InputBox}
                    type="text"
                    className="form-control" />
            </div>
            <div className="form-group">
                <label className='text-now font-weight-bold'>Location</label>
                <input
                    onChange={handleChange('location')}
                    value={values.location}
                    placeholder='e.g. kochi'
                    style={FormStyle.InputBox}
                    type="text"
                    className="form-control" />
            </div>
            
            
            <div className="space-20"></div>
            <RoundButton text={'Request Item'} Bgcolor='#f7b745' Hovercolor='#ec4392'/>
        </DonateCard>
    )
}


const RequestedItems = ({RequestedList})=>{

    return(<>
        <div className="text-now font-weight-bold p-2">
            Requested items status
        </div>
        {
        RequestedList && RequestedList.map((data)=>(
            <React.Fragment key={data.id} >
                
                <DonateCard>
                    <div className="text-now">
                        Name : {data.name}
                    </div>
                    <div className="text-now">
                        status: {data.status}
                    </div>
                    <div className="space-20"></div>
                    {
                        data.needTransportHelp && (
                        <>
                            {
                                data.transportVolunteer.name=== undefined?
                                <div className="alert alert-light">
                                    We'll let you know when someone volunteer to pickup your item.
                                </div>
                                :
                                <div className="alert alert-success">
                                    {data.transportVolunteer.name} ({data.transportVolunteer.phone}) 
                                    is willing to help arrage transport facility for your donation.
                                </div>
                            }
                       </>)
                    }
                    <div className="btn btn-danger">
                        Cancel Request
                    </div>
                </DonateCard>
            </React.Fragment>
        ))
        
        }</>
        
    )
}