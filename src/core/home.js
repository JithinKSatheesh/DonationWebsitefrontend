import React from 'react'
import Layout from './Layout'
import HeroBg from '../Assets/heroBg.jpg'

export default function Home(props) {
    

    return (
        <Layout >
            {Hero()}
            
        </Layout>
    )
}

const Hero = ()=>{

    const StyleHero = {
        OuterBody:{
            backgroundImage:`URL(${HeroBg})`,
            width:'100%',
            height:'80vh',
            backgroundSize:'cover'
        },
        HugeFont:{
            fontSize:'10em',
            color:'#f7b744',
            margin:'5px',
            fontWeight:'bold'
        }
       
    }

    const HeroText_donate = ['D','O','N','A','T','E']

    return(
        <div style={StyleHero.OuterBody} className="container">
            <div className="d-flex justify-content-around">
                <RenderHugeText text={HeroText_donate} textStyle={StyleHero.HugeFont}/>
            </div>
        </div>
    )
}


const RenderHugeText = ({text,textStyle})=>{
    return(
        text&&text.map((letter,index)=>{
            return(
                <div key={index} style={textStyle}>
                    {letter}
                </div>
            )
        })
    )
}