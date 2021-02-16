import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import {signOut,isAuthenticated} from '../Auth/Auth'


const Heart = ()=>{
    return(
        <svg fill='#ec4392' width="14" height="14" viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg>
    )
}

const HarmBurger = ()=>{
    return(
        <div className="p-3">
            <svg fill='#012f84' width="24" height="24" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/></svg>
        </div>
    )
}

const NavLinks = ({link,text,history})=>{

    const isActive = (history, path) => {
        return (history.location.pathname === path) ? NavStyle.OuterBodyHovered : {  }
    }

    const NavStyle = {
        OuterBody:{
            textDecoration: 'none', 
            cursor: 'pointer',
            color:'#012f84', 
        },
        OuterBodyHovered:{
            backgroundColor:'#012f84',
            height:'2px',
            width:'100%'
        }
    }

    const [hovered,setHovered] = useState(false)

    return (
        <Link 
            onMouseOver={()=>setHovered(true)}
            onMouseOut={()=>setHovered(false)}
            style={NavStyle.OuterBody} 
            to={link} >
            <div className="p-3">
                <span className="">{text}</span>
                <div 
                    style={Object.assign(
                        isActive(history, link),
                        (hovered&&NavStyle.OuterBodyHovered)
                    )}
                    ></div>
            </div>
        </Link>
    )
}

const RoundedNavLinks = ({link,text,history,symbol})=>{

    const[hovered,setHovered] = useState(false)

    // const isActive = (history, path) => {
    //     return (history.location.pathname === path) ? { backgroundColor: '#012f84' } : { backgroundColor: '' }
    // }

    const NavStyle = {
        OuterBody : {
            borderRadius:'30px',
            cursor:'pointer',
            color:'#012f84',
            backgroundColor:'#ebeff3',
        },
        OuterBodyHovered : {
            color:'white',
            backgroundColor:'#012f84',
        }
    }

    return(
        <Link style={{textDecoration:'none'}} to={link} >
        <div style={
                Object.assign(
                    NavStyle.OuterBody,
                    (hovered&&NavStyle.OuterBodyHovered)
                    )}
                onMouseOver={()=>setHovered(true)}
                onMouseOut={()=>setHovered(false)}
                className="p-3">   
                
                <span className="">{symbol}&nbsp;&nbsp;{text}</span>
            {/* <div style={isActive(history,link)} className="space-10"></div> */}
        </div>
        </Link>
    )
}


const Menu = ({ history }) => {

    const MenuStyle = {
        Navbar:{
            position:'fixed',
            width:'100%',
            top:'0',
            zIndex:'1000'
        }
    }

    return (
        <div style={MenuStyle.Navbar} className="bg-white">
            <div className="container">
                <div className="d-flex">
                    <div className="h3 p-3">
                        <Link   to="/" > <span className="text-now font-weight-bold">LOGO</span> </Link>
                    </div>
                    <div className="ml-auto d-flex">
                        {/* <div className="m-2">
                            <NavLinks link='/event' text='Events' history={history}/>
                        </div> */}
                        <div className="m-2">
                            <RoundedNavLinks link='/profile' symbol={<Heart/>} text={'Donations'} history={history}/>
                        </div>
                        <div className="m-2">
                            <NavLinks link='/about' text='About' history={history}/>
                        </div>
                        {isAuthenticated() && 
                            <div className='m-2' onClick={()=>(signOut(()=>(console.log('clicked'))))} >
                                <NavLinks link='/' text='Logout' history={history}/>
                            </div>
                        }
                        {/* {!isAuthenticated() && 
                            <div className='m-2' >
                                <NavLinks link='/login' text='Login' history={history}/>
                            </div>
                        } */}
                        <div className="m-2">
                            <HarmBurger/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Menu) 