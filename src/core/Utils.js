import React from 'react'

export const RoundButton =({text,Bgcolor,radius})=>{
    const ButtonStyle = {
        OuterBody:{
            backgroundColor:Bgcolor?Bgcolor:'#ec4392',
            color:'white',
            borderRadius:radius?radius:'30px',
            textAlign:'center',
            cursor:'pointer'
        },
        ExpandedBody:{
            // width:'200px',
            height:'50px',
            padding:'10px',
        }
    }
    return(
        <div style={Object.assign(ButtonStyle.OuterBody,ButtonStyle.ExpandedBody)}>
           {text} 
        </div>
    )
}