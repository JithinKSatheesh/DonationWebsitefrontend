import React from 'react'

export default function Quotecard() {

    const leftQuote = <svg  fill='#012f84' width="24" height="24" viewBox="0 0 24 24"><path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z"/></svg>
    const rightQuote = <svg fill='#012f84' width="24" height="24" viewBox="0 0 24 24"><path d="M11 9.275c0 5.141-3.892 10.519-10 11.725l-.984-2.126c2.215-.835 4.163-3.742 4.38-5.746-2.491-.392-4.396-2.547-4.396-5.149 0-3.182 2.584-4.979 5.199-4.979 3.015 0 5.801 2.305 5.801 6.275zm13 0c0 5.141-3.892 10.519-10 11.725l-.984-2.126c2.215-.835 4.163-3.742 4.38-5.746-2.491-.392-4.396-2.547-4.396-5.149 0-3.182 2.584-4.979 5.199-4.979 3.015 0 5.801 2.305 5.801 6.275z"/></svg>
    const QuoteStyle = {
        OuterContainer:{
            width:'100%',
            padding:'50px 20%'
        },
        InnerBody:{
            padding:'30px',
            boxShadow:'0px 0px 10px 5px rgba(84, 84, 84, 0.1)',
            textAlign:'center',
            borderRadius:'30px',
            color:'#012f84',
            fontSize:'1.3em'
        }
    }

    const QuoteText = 'When you donate to us, you’re helping lot of  minds achieve their dreams. '
    
    return (
        <div style={QuoteStyle.OuterContainer}>
            <div style={QuoteStyle.InnerBody}>
               {leftQuote}&nbsp;
                {QuoteText}
                &nbsp;{rightQuote}
            </div>
        </div>
    )
}
