import React,{useEffect,useState} from 'react'
import Layout from './Layout'
import Hero from './Hero'
import QuoteCard from './QuoteCard'
import Donate from './Donate'
import Impact from "./Impact";
import FloatButton from './FloatButton'



export default function Home() {

    const[startScroll,setStartScroll] = useState(false)
    

    const handleScroll = ()=>{        
        if(window.pageYOffset > 50){
            console.log('ividee')
            setStartScroll(true)
        }else{
            setStartScroll(false)
        }
        // console.log(window.pageYOffset,startScroll)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    })
    

    return (
        <Layout className='container'>
            <div className="space-100"></div>
            <Hero />
            <QuoteCard/>
            <div className="space-50"></div>
            <Donate/>
            <div className="space-100"></div>
            <div className="space-100"></div>
            <div className="space-100"></div>
            <Impact/>
            <FloatButton small={startScroll}/>
        </Layout>
    )
}

