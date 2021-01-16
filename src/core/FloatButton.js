import React,{useState} from 'react'
import { animated, useSpring } from "react-spring"


const Heart = <svg fill='white' width="14" height="14" viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg>

const  FloatButton = ({small})=>{
    const [isHovered,setIsHovered] = useState(false)
    const ButtonStyle = {
        OuterBody:{
            position:'fixed',
            right:'55px',
            bottom:'20px',
            backgroundColor:isHovered?'#012f84':'#ec4392',
            color:'white',
            borderRadius:'30px',
            textAlign:'center',
            cursor:'pointer'
        },
        SmallBody:{
            // width:'50px',
            height:'50px',
            padding:'10px',
        },
        ExpandedBody:{
            // width:'200px',
            height:'50px',
            padding:'10px',
        }
    }

    // const[small,setSmall] = useState(false)
    const springProp = useSpring({
        width:small?'50px':'200px',
        opacity:small?'0':'1'
    })

    return(
        <animated.div 
            onMouseOver={()=>{setIsHovered(true)}}
            onMouseOut={()=>{setIsHovered(false)}}
            style={
                Object.assign(
                    ButtonStyle.OuterBody,
                    (small?ButtonStyle.SmallBody:ButtonStyle.ExpandedBody),
                    {width:springProp.width}
                    )}>
            {Heart} 
           <animated.span style={springProp.opacity}>
               {!small && " Donate" } 
            </animated.span> 
        </animated.div>
    )
}


export default FloatButton