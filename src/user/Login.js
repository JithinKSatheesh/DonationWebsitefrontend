import React, { useState,useEffect } from 'react'
import { RoundButton,DonateCard,BigHeading } from '../core/Utils';
import {signIn,authenticate,isAuthenticated} from '../Auth/Auth'
import Layout from '../core/Layout'
import {Redirect,Link} from 'react-router-dom'

import Fade from 'react-reveal/Fade'

export default function Login(props) {

    const [values,setValues] = useState({
        email:'',
        password:'', 
        error:'',
        loading:false,
        redirectToReffer:false,
    })

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
   

    const handleChange = name => event =>{
        setValues({...values,error:false,[name]:event.target.value})
    }

    const { email, password, error,loading} = values
    // const {user} = isAuthenticated()

    

    const clickSubmit = (event)=>{
        event.preventDefault()
        setValues({...values,error:false,loading:true})
        signIn({ email, password})
        .then(data =>{
            console.log(data)
            if(data.error){
                setValues({...values,error:data.error,loading:false})
            }
            else{
                authenticate(data,()=>{
                    setValues({
                        ...values,
                        redirectToReffer:true,
                    })
                })
            }
        })
    }

    const showError =()=>(
        <div className="h6 text-danger text-center" style={{display:error?'':'none'}} >
            {error}
        </div>
    )

    const showLoading=()=>(
        loading&&<div className="spinner-border">
           <span className="sr-only">Loading...</span>
        </div>
    )

    const redirectUser = ()=>{

        if(isAuthenticated()){
            return <Redirect to='/profile'/>
        }
    }

    const signInform=()=>(
        <form>
            <div className="form-group">
                <label htmlFor="">Email</label>
                <input type="email" onChange={handleChange('email')} value={email} className="form-control" name="email"/>
            </div>
            <div className="form-group">
                <label htmlFor="">Password</label>
                <input type="password" onChange={handleChange('password')} value={password} className="form-control" name="password" />
            </div>
            <div className="" onClick={clickSubmit}>
                <RoundButton text='Login' Bgcolor='#012f84' Hovercolor='#ec4392' />
            </div>
        </form>
    )
    

    return (
        <Layout className='container'>
            <Fade>
            <div className="space-100"></div>
            <BigHeading text='SignIn' size='1.5em' color='#012f84' />
            <div className="space-20"></div>
            <div className="h6 text-now">Your have to sign in inorder to give donations. </div>
            <div className="h6 text-now">
                    Don't have an account? 
                    <Link to='/signup' > <span className='text-pink'> Register here.</span></Link> 
                </div>
            <div className="space-5 bg-now"></div>
            <div className="space-50"></div>
            <div className="row">
                <div className="col-12 col-md-6 offset-md-3">
                    <DonateCard>
                        {signInform()}
                        <div className="text-center">
                            {showLoading()}
                        </div>
                        <div className="space-20"></div>
                        {showError()}
                        {redirectUser()}
                    </DonateCard>
                </div>
            </div>
            
            <div className="space-100"></div>
            </Fade>
        </Layout>
    )
}
