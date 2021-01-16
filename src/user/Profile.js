import React from 'react'
import Layout from '../core/Layout'
import { RoundButton,DonateCard,BigHeading } from '../core/Utils';



export default function Profile() {
    
    const paymentHistoyList = [
        'You donate ₹1000 on 20/2/2021',
        'You donate ₹2000 on 20/3/2021',
        'You donate ₹100 on 20/4/2021',
        'You donate ₹800 on 20/6/2021',
    ]

    

    return (
        <Layout className='container'>
            <div className="space-100"></div>
            <div className="row">
                <div className="col-12">
                    <BigHeading text={'Hi, User'} size={'2em'}/>
                    <div className="space-5 bg-light"></div>
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
                    <DonateItemCard/>
                </div>
                <div className="col-12 col-md-7 offset-md-1">
                    <PromisedItems/>
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
                        <div key={index} className="card p-2 m-1">
                                {list}
                            </div>)
                    })}
            </div>
        </>
    )
}


const DonateItemCard = () => {
    const FormStyle = {
        InputBox:{
            borderRadius:'20px'
        }
    }
    return (
        <DonateCard>
            <div className="form-group">
                <label className='text-now font-weight-bold'>Name</label>
                <input
                    placeholder='e.g. Cloth, books, ...'
                    style={FormStyle.InputBox}
                    type="text"
                    className="form-control" />
            </div>
            <div className="form-group">
                <label className='text-now font-weight-bold'>Description</label>
                <input
                    placeholder='e.g. 5 set of medium size shirts'
                    style={FormStyle.InputBox}
                    type="text"
                    className="form-control" />
            </div>
            <div className="form-group">
                <label className='text-now font-weight-bold'>Phone</label>
                <input
                    placeholder='e.g. 9087879878'
                    style={FormStyle.InputBox}
                    type="text"
                    className="form-control" />
            </div>
            <div className="form-group">
                <label className='text-now font-weight-bold'>Location</label>
                <input
                    placeholder='e.g. kochi'
                    style={FormStyle.InputBox}
                    type="text"
                    className="form-control" />
            </div>
            <RoundButton text={'Donate Item'} Bgcolor='#012f84' Hovercolor='#ec4392'/>
        </DonateCard>
    )
}


const PromisedItems = ()=>{
    return(
        <>
        <div className="text-now font-weight-bold p-2">
                        Promised item status
                    </div>
                    <DonateCard>
                        <div className="text-now">
                            Name : Books
                        </div>
                        <div className="text-now">
                            status: Awaiting to get delivered 
                        </div>
                        <div className="space-20"></div>
                        <div className="alert alert-info">
                            We'll let you know when someone volunteer to deliver your item.
                        </div>
                        <div className="btn btn-danger">
                            Cancel donation
                        </div>
                    </DonateCard>
        </>
    )
}