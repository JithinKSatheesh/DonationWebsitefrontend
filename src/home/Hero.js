import React, { useEffect, useRef } from "react";
import { animated, useSpring } from "react-spring";

import HeroBg from '../Assets/heroBg.jpg'

const Hero = ()=>{

    const StyleHero = {
        OuterBody:{
            backgroundImage:`URL(${HeroBg})`,
            width:'100%',
            height:'80vh',
            backgroundSize:'cover',
            borderRadius:'30px',
            overflow:'hidden'
        },
        HugeFont:{
            fontSize:'9em',
            color:'#f7b744',
            margin:'5px',
            fontWeight:'bold'
        }
       
    }

    const HeroText_donate = ['D','O','N','A','T','E']

    const calc = o => `translateY(${o * 0.1}px)`
    const calc2 = o => `translateY(${o * 0.2}px)`


    const ref = useRef()
    const [{ offset }, set] = useSpring(() => ({ offset: 0 }))

    const handleScroll = () => {
        const posY = ref.current.getBoundingClientRect().top;
        const offset = window.pageYOffset - posY;
        set({ offset })
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    })

    return(
        <div ref={ref} style={StyleHero.OuterBody} className="container">
            <animated.div 
                style={{ transform: offset.interpolate(calc) }} 
                className="d-flex justify-content-around">
                    <RenderHugeText text={HeroText_donate} textStyle={StyleHero.HugeFont}/> 
            </animated.div>
            <div className="space-20"></div>
            <animated.div 
                style={{ transform: offset.interpolate(calc2) }} 
                className="display-4 text-white text-center font-weight-bold">
                Today’s donations create <br/> future advancements.
            </animated.div>
           
        </div>
    )
}

export default Hero

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