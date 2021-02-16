import React,{useState} from 'react'

export const RoundButton =({text,Bgcolor,Hovercolor,radius})=>{

    const[isHovered,setIsHovered] = useState(false)

    const ButtonStyle = {
        OuterBody:{
            backgroundColor:Bgcolor?(isHovered?(Hovercolor?Hovercolor:'#012f84'):Bgcolor):'#ec4392',
            color:'white',
            borderRadius:radius?radius:'30px',
            textAlign:'center',
            cursor:'pointer',
            textDecoration:'none'
        },
        ExpandedBody:{
            // width:'200px',
            height:'50px',
            padding:'10px',
        }
    }


    return(
        <div 
            onMouseOver={()=>{setIsHovered(true)}}
            onMouseOut={()=>{setIsHovered(false)}}
            style={Object.assign(ButtonStyle.OuterBody,ButtonStyle.ExpandedBody)}>
           {text} 
        </div>
    )
}

export const DonateCard = ({children})=>{

    const CardStyle = {
        OuterBody:{
            boxShadow:'0px 0px 10px 5px rgba(84, 84, 84, 0.1)',
            padding:'20px 20px',
            borderRadius:'20px',
            margin:'20px'
        },
        InputStyle:{
            borderRadius:'20px'
        }
    }

    return(
        <div style={CardStyle.OuterBody}>
            <div >
                {children}
            </div>
        </div>
    )
}

export const BigHeading = ({text,color,size})=>{
    const DonateStyle = {
        HeadingText:{
            fontSize:size?size:'4em',
            color:color?color:'#ec4392'
        }
    }
    return(
        <div className="text-center text-md-left">
            <span style={DonateStyle.HeadingText}>
                {text}
            </span>
        </div>
    )
}

export const PreviewImage = ({image,maxWidth,maxHeight})=>{
    const Style = {
        imageContainer:{
            width:'100%',
            maxWidth:maxWidth?maxWidth:'100px',
            maxHeight:maxHeight?maxHeight:'',
            margin:'5px',
            borderRadius:'10px'
        }
    }
    return(
        <img  style={Style.imageContainer} src={image} alt=""/>
    )
}