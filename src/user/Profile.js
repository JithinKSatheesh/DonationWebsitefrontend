import React,{useState} from 'react'
import Layout from '../core/Layout'
import { RoundButton,DonateCard,BigHeading,PreviewImage } from '../core/Utils';
import {isAuthenticated} from '../Auth/Auth'

import Fade from 'react-reveal/Fade'


export default function Profile() {
    
    const paymentHistoyList = [
        'You donate ₹1000 on 20/2/2021',
        'You donate ₹2000 on 20/3/2021',
        'You donate ₹100 on 20/4/2021',
    ]

    const PromisedItemsList = [
        {
        id:1,
        name:'Books',
        status:'Awaiting to get delivered',
        needTransportHelp : true,
        transportVolunteer:{
            name:'Amal',
            phone:'8980989878'
            },   
        },
        {
        id:2,
        name:'Cloths',
        status:'Under review',
        needTransportHelp : true,
        transportVolunteer:{
            
            },   
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
                    <BigHeading text={'Donate money'} size={'1.5em'} color='#012f84' />
                    <div className="space-20"></div>
                </div>
                <div className="col-12 col-md-4 p-2">
                    <PaymentCard/>
                </div>
                <div className="col-12 offset-md-1 col-md-7 p-2">
                    <PaymentHistoryCard paymentList={paymentHistoyList} />
                </div>
                <div className="col-12">
                    <div className="space-50"></div>
                    <div className="space-5 bg-light"></div>
                    <div className="space-50"></div>
                    <BigHeading text={'Donate an item '} size={'1.5em'} color='#012f84' />
                    <div className="space-20"></div>
                </div>
                <div className="col-12 col-md-4">
                    <DonateItemForm/>
                </div>
                <div className="col-12 col-md-7 offset-md-1">
                    <PromisedItems promisedItemsList={PromisedItemsList}/>
                    <div className="space-20"></div>
                    <div style={{cursor:'pointer'}} className="text-now font-weight-bold p-2">
                        view donated item history
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


const PaymentCard = () => {
    return (
        <DonateCard>
            <div className="text-now font-weight-bold">
                Amount
            </div>
            <div className="space-20"></div>
            <div className="form-group">
                <input 
                    style={{ borderRadius: '20px' }} 
                    type="text" className="form-control" 
                    placeholder="₹ "
                    />
            </div>
            <RoundButton text={'Donate Money'} Bgcolor='#012f84' Hovercolor='#ec4392' />
        </DonateCard>
    )
}


const PaymentHistoryCard = ({paymentList}) => {

    const Style = {
        outerBody:{
            boxShadow:'0px 0px 10px 5px rgba(84, 84, 84, 0.1)',
            borderRadius:'10px'
        }
    }

    return (
        <>
            <div style={{cursor:'pointer'}} className="text-now font-weight-bold p-2">
                View Payment History
                <span className=" btn-link "> 
                    &nbsp;<svg  fill='#012f84' width="14" height="14" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/></svg>
                </span>
            </div>
            <div className="p-2">
                {paymentList&&paymentList.map((list,index)=>{
                    return(
                        <div key={index} style={Style.outerBody} className=" p-2 m-1">
                                {list}
                            </div>)
                    })}
            </div>
        </>
    )
}


const DonateItemForm = () => {
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

    const [fileURL,setFileURL] = useState(null)
    const [needHelp,setNeedHelp] = useState(false)

    const handleChange = name => event =>{
        setValues({...values,[name]:event.target.value})
    }

    const filePick = (event) =>{
        setFileURL(URL.createObjectURL(event.target.files[0]))
    } 

    const switchChange = event=>{
        setNeedHelp(event.target.checked)
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
            <div className="p-1">
                <PreviewImage maxWidth='150px' maxHeight='150px' image={fileURL}/>
            </div>
            <div className="space-5"></div>
            <div className="custom-file">
                <input onChange={filePick} type="file" className="custom-file-input" id="inputGroupFile01"/>
                <label className="custom-file-label" htmlFor="inputGroupFile01">Upload image</label>
            </div>
            <div className="space-20"></div>
            <div className="custom-control custom-switch">
                <input type="checkbox" checked={needHelp} onChange={switchChange}
                        className="custom-control-input" id="customSwitch1"/>
                <label className="custom-control-label" htmlFor="customSwitch1">
                    Need transport facility?
                    <div className="text-info small">
                        {
                            needHelp?
                            'Yes, I need help to pick up my donation'
                            :
                            'I will deliver it myself'
                        }
                    </div>
                </label>
            </div>
            <div className="space-5"></div>
            
            <div className="space-20"></div>
            <RoundButton text={'Donate Item'} Bgcolor='#012f84' Hovercolor='#ec4392'/>
        </DonateCard>
    )
}


const PromisedItems = ({promisedItemsList})=>{

    return(<>
        <div className="text-now font-weight-bold p-2">
            Promised item status
        </div>
        {
        promisedItemsList && promisedItemsList.map((data)=>(
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
                        Cancel donation
                    </div>
                </DonateCard>
            </React.Fragment>
        ))
        
        }</>
        
    )
}