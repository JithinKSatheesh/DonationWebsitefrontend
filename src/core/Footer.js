import React from 'react'
const faceBook = <svg style={{cursor:'pointer'}} fill='#012f84' width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/></svg>
const linkedin = <svg style={{cursor:'pointer'}} fill='#012f84' width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/></svg>
const Message = <svg style={{cursor:'pointer'}} fill='#ec4392' width="24" height="24" viewBox="0 0 24 24"><path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z"/></svg>


export default function Footer() {
    
    const FooterStyle = {
        outerBody:{
            backgroundColor:'#f7b744'
        },
        TextField:{
            borderRadius:'30px',
            // maxWidth:'300px',
        }
    }

    return (
        <div style={FooterStyle.outerBody} className="">
            <div className="container">
                <div className="space-100"></div>
                <div className="row">
                    <div className="col-12 col-md-4">
                        <div className="h4 text-now font-weight-bold text-center ">
                            Message us
                        </div>
                        <div className="text-now mt-4 mb-4 text-center ">
                            <div className="form-group d-flex align-items-center">
                                <input style={FooterStyle.TextField} type="text" className="form-control"/>
                                <span style={{transform: 'translate(-40px,0px)'}}>{Message}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="h4 text-now text-center  font-weight-bold">
                            Contact us
                        </div>
                        <div className="text-now mt-4 mb-4 text-center ">
                            someone@mail.com
                            <br/>
                            7898787878
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="h4 text-now font-weight-bold text-center ">
                            Follow us
                        </div>
                        <div className="text-now mt-4 mb-4 text-center ">
                            {faceBook} &nbsp;
                            {linkedin}
                        </div>
                    </div>
                    
                </div>
                <div className="space-5 bg-warning"></div>
                <div className="space-50"></div>
                <div className="text-center text-now small">
                    © copyright 2020
                </div>
                <div className="space-50"></div>
            </div>
        </div>
    )
}
