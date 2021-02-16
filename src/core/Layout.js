import React,{useEffect,useState} from 'react'
import Menu from './Navbar'
import Footer from "./Footer"
import FloatButton from './FloatButton'

const Layout = ({className,children}) =>{

    const[startScroll,setStartScroll] = useState(false)
    

    const handleScroll = ()=>{        
        if(window.pageYOffset > 50){
            setStartScroll(true)
        }else{
            setStartScroll(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    })

    return(<div>
        <div className="space-20"/>
        <Menu/>        
        <div className={className}>
            {children}
        </div>
        <Footer/>
        <FloatButton small={startScroll}/>
    </div>)
}

export default Layout