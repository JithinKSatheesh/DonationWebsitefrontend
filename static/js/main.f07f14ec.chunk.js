(this.webpackJsonpdonation=this.webpackJsonpdonation||[]).push([[0],{32:function(e,t,c){},33:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(1),o=c.n(n),a=c(23),i=c.n(a),r=(c(32),c(33),c(7)),l=c(3),j=c(6),d=(c(26),"http://localhost:8000/api"),x=function(){return"undefined"!=typeof window&&(!!localStorage.getItem("jwt")&&JSON.parse(localStorage.getItem("jwt")))},b=c(5),h=function(){return Object(s.jsx)("svg",{fill:"#ec4392",width:"14",height:"14",viewBox:"0 0 24 24",children:Object(s.jsx)("path",{d:"M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"})})},m=function(){return Object(s.jsx)("div",{className:"p-3",children:Object(s.jsx)("svg",{fill:"#012f84",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(s.jsx)("path",{d:"M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"})})})},O=function(e){var t=e.link,c=e.text,o=e.history,a={OuterBody:{textDecoration:"none",cursor:"pointer",color:"#012f84"},OuterBodyHovered:{backgroundColor:"#012f84",height:"2px",width:"100%"}},i=Object(n.useState)(!1),l=Object(b.a)(i,2),j=l[0],d=l[1];return Object(s.jsx)(r.b,{onMouseOver:function(){return d(!0)},onMouseOut:function(){return d(!1)},style:a.OuterBody,to:t,children:Object(s.jsxs)("div",{className:"p-3",children:[Object(s.jsx)("span",{className:"",children:c}),Object(s.jsx)("div",{style:Object.assign(function(e,t){return e.location.pathname===t?a.OuterBodyHovered:{}}(o,t),j&&a.OuterBodyHovered)})]})})},u=function(e){var t=e.link,c=e.text,o=(e.history,e.symbol),a=Object(n.useState)(!1),i=Object(b.a)(a,2),l=i[0],j=i[1],d={OuterBody:{borderRadius:"30px",cursor:"pointer",color:"#012f84",backgroundColor:"#ebeff3"},OuterBodyHovered:{color:"white",backgroundColor:"#012f84"}};return Object(s.jsx)(r.b,{style:{textDecoration:"none"},to:t,children:Object(s.jsx)("div",{style:Object.assign(d.OuterBody,l&&d.OuterBodyHovered),onMouseOver:function(){return j(!0)},onMouseOut:function(){return j(!1)},className:"p-3",children:Object(s.jsxs)("span",{className:"",children:[o,"\xa0\xa0",c]})})})},p=Object(l.g)((function(e){var t=e.history;return Object(s.jsx)("div",{style:{position:"fixed",width:"100%",top:"0",zIndex:"1000"},className:"bg-white",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"d-flex",children:[Object(s.jsx)("div",{className:"h3 p-3",children:Object(s.jsxs)(r.b,{to:"/",children:[" ",Object(s.jsx)("span",{className:"text-now font-weight-bold",children:"LOGO"})," "]})}),Object(s.jsxs)("div",{className:"ml-auto d-flex",children:[Object(s.jsx)("div",{className:"m-2",children:Object(s.jsx)(u,{link:"/profile",symbol:Object(s.jsx)(h,{}),text:"Donations",history:t})}),Object(s.jsx)("div",{className:"m-2",children:Object(s.jsx)(O,{link:"/about",text:"About",history:t})}),x()&&Object(s.jsx)("div",{className:"m-2",onClick:function(){return function(e){if("undefined"!=typeof window)return localStorage.removeItem("jwt",JSON.stringify()),e(),fetch("".concat(d,"/signout"),{method:"GET"}).then((function(e){console.log("signout",e)})).catch((function(e){console.log(e)}))}((function(){return console.log("clicked")}))},children:Object(s.jsx)(O,{link:"/",text:"Logout",history:t})}),Object(s.jsx)("div",{className:"m-2",children:Object(s.jsx)(m,{})})]})]})})})})),v=Object(s.jsx)("svg",{style:{cursor:"pointer"},fill:"#012f84",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(s.jsx)("path",{d:"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"})}),f=Object(s.jsx)("svg",{style:{cursor:"pointer"},fill:"#012f84",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(s.jsx)("path",{d:"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"})}),g=Object(s.jsx)("svg",{style:{cursor:"pointer"},fill:"#ec4392",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(s.jsx)("path",{d:"M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z"})});function N(){var e={outerBody:{backgroundColor:"#f7b744"},TextField:{borderRadius:"30px"}};return Object(s.jsx)("div",{style:e.outerBody,className:"",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("div",{className:"space-100"}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsxs)("div",{className:"col-12 col-md-4",children:[Object(s.jsx)("div",{className:"h4 text-now font-weight-bold text-center ",children:"Message us"}),Object(s.jsx)("div",{className:"text-now mt-4 mb-4 text-center ",children:Object(s.jsxs)("div",{className:"form-group d-flex align-items-center",children:[Object(s.jsx)("input",{style:e.TextField,type:"text",className:"form-control"}),Object(s.jsx)("span",{style:{transform:"translate(-40px,0px)"},children:g})]})})]}),Object(s.jsxs)("div",{className:"col-12 col-md-4",children:[Object(s.jsx)("div",{className:"h4 text-now text-center  font-weight-bold",children:"Contact us"}),Object(s.jsxs)("div",{className:"text-now mt-4 mb-4 text-center ",children:["someone@mail.com",Object(s.jsx)("br",{}),"7898787878"]})]}),Object(s.jsxs)("div",{className:"col-12 col-md-4",children:[Object(s.jsx)("div",{className:"h4 text-now font-weight-bold text-center ",children:"Follow us"}),Object(s.jsxs)("div",{className:"text-now mt-4 mb-4 text-center ",children:[v," \xa0",f]})]})]}),Object(s.jsx)("div",{className:"space-5 bg-warning"}),Object(s.jsx)("div",{className:"space-50"}),Object(s.jsx)("div",{className:"text-center text-now small",children:"\xa9 copyright 2020"}),Object(s.jsx)("div",{className:"space-50"})]})})}var w=c(14),y=Object(s.jsx)("svg",{fill:"white",width:"14",height:"14",viewBox:"0 0 24 24",children:Object(s.jsx)("path",{d:"M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"})}),B=function(e){var t=e.small,c=Object(n.useState)(!1),o=Object(b.a)(c,2),a=o[0],i=o[1],r={OuterBody:{position:"fixed",right:"55px",bottom:"20px",backgroundColor:a?"#012f84":"#ec4392",color:"white",borderRadius:"30px",textAlign:"center",cursor:"pointer"},SmallBody:{height:"50px",padding:"10px"},ExpandedBody:{height:"50px",padding:"10px"}},l=Object(w.b)({width:t?"50px":"200px",opacity:t?"0":"1"});return Object(s.jsxs)(w.a.div,{onMouseOver:function(){i(!0)},onMouseOut:function(){i(!1)},style:Object.assign(r.OuterBody,t?r.SmallBody:r.ExpandedBody,{width:l.width}),children:[y,Object(s.jsx)(w.a.span,{style:l.opacity,children:!t&&" Donate"})]})},z=function(e){var t=e.className,c=e.children,o=Object(n.useState)(!1),a=Object(b.a)(o,2),i=a[0],r=a[1],l=function(){window.pageYOffset>50?r(!0):r(!1)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",l),function(){window.removeEventListener("scroll",l)}})),Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"space-20"}),Object(s.jsx)(p,{}),Object(s.jsx)("div",{className:t,children:c}),Object(s.jsx)(N,{}),Object(s.jsx)(B,{small:i})]})},k=c.p+"static/media/heroBg.6e7a95d3.jpg",S=function(){var e={OuterBody:{backgroundImage:"URL(".concat(k,")"),width:"100%",height:"80vh",backgroundSize:"cover",borderRadius:"30px",overflow:"hidden"},HugeFont:{fontSize:"9em",color:"#f7b744",margin:"5px",fontWeight:"bold"}},t=Object(n.useRef)(),c=Object(w.b)((function(){return{offset:0}})),o=Object(b.a)(c,2),a=o[0].offset,i=o[1],r=function(){var e=t.current.getBoundingClientRect().top,c=window.pageYOffset-e;i({offset:c})};return Object(n.useEffect)((function(){return window.addEventListener("scroll",r),function(){window.removeEventListener("scroll",r)}})),Object(s.jsxs)("div",{ref:t,style:e.OuterBody,className:"container",children:[Object(s.jsx)(w.a.div,{style:{transform:a.interpolate((function(e){return"translateY(".concat(.1*e,"px)")}))},className:"d-flex justify-content-around",children:Object(s.jsx)(C,{text:["D","O","N","A","T","E"],textStyle:e.HugeFont})}),Object(s.jsx)("div",{className:"space-20"}),Object(s.jsxs)(w.a.div,{style:{transform:a.interpolate((function(e){return"translateY(".concat(.2*e,"px)")}))},className:"display-4 text-white text-center font-weight-bold",children:["Today\u2019s donations create ",Object(s.jsx)("br",{})," future advancements."]})]})},C=function(e){var t=e.text,c=e.textStyle;return t&&t.map((function(e,t){return Object(s.jsx)("div",{style:c,children:e},t)}))};function H(){var e=Object(s.jsx)("svg",{fill:"#012f84",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(s.jsx)("path",{d:"M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z"})}),t=Object(s.jsx)("svg",{fill:"#012f84",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(s.jsx)("path",{d:"M11 9.275c0 5.141-3.892 10.519-10 11.725l-.984-2.126c2.215-.835 4.163-3.742 4.38-5.746-2.491-.392-4.396-2.547-4.396-5.149 0-3.182 2.584-4.979 5.199-4.979 3.015 0 5.801 2.305 5.801 6.275zm13 0c0 5.141-3.892 10.519-10 11.725l-.984-2.126c2.215-.835 4.163-3.742 4.38-5.746-2.491-.392-4.396-2.547-4.396-5.149 0-3.182 2.584-4.979 5.199-4.979 3.015 0 5.801 2.305 5.801 6.275z"})}),c={OuterContainer:{width:"100%",padding:"50px 20%"},InnerBody:{padding:"30px",boxShadow:"0px 0px 10px 5px rgba(84, 84, 84, 0.1)",textAlign:"center",borderRadius:"30px",color:"#012f84",fontSize:"1.3em"}};return Object(s.jsx)("div",{style:c.OuterContainer,children:Object(s.jsxs)("div",{style:c.InnerBody,children:[e,"\xa0","When you donate to us, you\u2019re helping lot of  minds achieve their dreams. ","\xa0",t]})})}var I=function(e){var t=e.text,c=e.Bgcolor,o=e.Hovercolor,a=e.radius,i=Object(n.useState)(!1),r=Object(b.a)(i,2),l=r[0],j=r[1],d={OuterBody:{backgroundColor:c?l?o||"#012f84":c:"#ec4392",color:"white",borderRadius:a||"30px",textAlign:"center",cursor:"pointer",textDecoration:"none"},ExpandedBody:{height:"50px",padding:"10px"}};return Object(s.jsx)("div",{onMouseOver:function(){j(!0)},onMouseOut:function(){j(!1)},style:Object.assign(d.OuterBody,d.ExpandedBody),children:t})},M=function(e){var t=e.children;return Object(s.jsx)("div",{style:{boxShadow:"0px 0px 10px 5px rgba(84, 84, 84, 0.1)",padding:"20px 20px",borderRadius:"20px",margin:"20px"},children:Object(s.jsx)("div",{children:t})})},L=function(e){var t=e.text,c=e.color,n=e.size,o={HeadingText:{fontSize:n||"4em",color:c||"#ec4392"}};return Object(s.jsx)("div",{className:"text-center text-md-left",children:Object(s.jsx)("span",{style:o.HeadingText,children:t})})},R=function(e){var t=e.image,c=e.maxWidth,n=e.maxHeight,o={imageContainer:{width:"100%",maxWidth:c||"100px",maxHeight:n||"",margin:"5px",borderRadius:"10px"}};return Object(s.jsx)("img",{style:o.imageContainer,src:t,alt:""})},D=c(10),F=c.n(D),T=c(25),E=c.n(T);function A(){return Object(s.jsxs)("div",{className:"row",children:[Object(s.jsxs)("div",{className:"col-12",children:[Object(s.jsx)(F.a,{bottom:!0,children:Object(s.jsx)(L,{text:"Contribute"})}),Object(s.jsx)("div",{className:"space-5 bg-light"}),Object(s.jsx)("div",{className:"space-50"})]}),Object(s.jsx)("div",{className:"col-12 col-md-4",children:Object(s.jsx)(E.a,{children:Object(s.jsxs)(M,{children:[Object(s.jsx)(r.b,{style:{textDecoration:"none"},to:"profile",children:Object(s.jsx)(I,{text:"Donate Items",radius:"30px",Bgcolor:"#012f84",Hovercolor:"#ec4392"})}),Object(s.jsx)("div",{className:"space-20"}),Object(s.jsx)(r.b,{style:{textDecoration:"none"},to:"profile",children:Object(s.jsx)(I,{text:"Donate Money",radius:"30px",Bgcolor:"#012f84",Hovercolor:"#ec4392"})})]})})}),Object(s.jsxs)("div",{className:"col-12 col-md-8 text-now",children:[Object(s.jsx)("div",{className:"space-20"}),Object(s.jsx)(F.a,{top:!0,children:Object(s.jsxs)("div",{className:"p-3",children:["Large or small, every donation is a step toward healing. By supporting  Foundation, you\u2019ll be contributing to the development of society, and your action will transform lot of lives.",Object(s.jsx)("div",{className:"mt-4 font-weight-bold",children:"Thank you for your contribution!"})]})})]})]})}function Y(){return Object(s.jsx)("div",{className:"row",children:Object(s.jsxs)(F.a,{children:[Object(s.jsx)("div",{className:"col-12 text-center",children:Object(s.jsx)("span",{style:{fontSize:"2.5em",color:"#012f84",fontWeight:"bold"},children:"You can help by volunteering"})}),Object(s.jsxs)("div",{className:"col-12 col-md-4 offset-md-4",children:[Object(s.jsx)("div",{className:"space-50"}),Object(s.jsx)(r.b,{style:{textDecoration:"none"},to:"/volunteer",children:Object(s.jsx)(I,{text:"Help us transport donations",Bgcolor:"#f7b744"})}),Object(s.jsx)("div",{className:"space-100"})]})]})})}function V(){return Object(s.jsxs)(z,{className:"container",children:[Object(s.jsx)("div",{className:"space-100"}),Object(s.jsx)(F.a,{children:Object(s.jsx)(S,{})}),Object(s.jsx)(F.a,{bottom:!0,children:Object(s.jsx)(H,{})}),Object(s.jsx)("div",{className:"space-50"}),Object(s.jsx)(A,{}),Object(s.jsx)("div",{className:"space-100"}),Object(s.jsx)("div",{className:"space-100"}),Object(s.jsx)(Y,{})]})}var W=c(12);function J(){x().user;return Object(s.jsx)(z,{className:"container",children:Object(s.jsxs)(F.a,{children:[Object(s.jsx)("div",{className:"space-100"}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsxs)("div",{className:"col-12",children:[Object(s.jsx)(L,{text:"Hi, User",size:"2em",color:"#012f84"}),Object(s.jsx)("div",{className:"space-5 bg-now"}),Object(s.jsx)("div",{className:"space-50"}),Object(s.jsx)(L,{text:"Donate money",size:"1.5em",color:"#012f84"}),Object(s.jsx)("div",{className:"space-20"})]}),Object(s.jsx)("div",{className:"col-12 col-md-4 p-2",children:Object(s.jsx)(U,{})}),Object(s.jsx)("div",{className:"col-12 offset-md-1 col-md-7 p-2",children:Object(s.jsx)(P,{paymentList:["You donate \u20b91000 on 20/2/2021","You donate \u20b92000 on 20/3/2021","You donate \u20b9100 on 20/4/2021"]})}),Object(s.jsxs)("div",{className:"col-12",children:[Object(s.jsx)("div",{className:"space-50"}),Object(s.jsx)("div",{className:"space-5 bg-light"}),Object(s.jsx)("div",{className:"space-50"}),Object(s.jsx)(L,{text:"Donate an item ",size:"1.5em",color:"#012f84"}),Object(s.jsx)("div",{className:"space-20"})]}),Object(s.jsx)("div",{className:"col-12 col-md-4",children:Object(s.jsx)(G,{})}),Object(s.jsxs)("div",{className:"col-12 col-md-7 offset-md-1",children:[Object(s.jsx)(q,{promisedItemsList:[{id:1,name:"Books",status:"Awaiting to get delivered",needTransportHelp:!0,transportVolunteer:{name:"Amal",phone:"8980989878"}},{id:2,name:"Cloths",status:"Under review",needTransportHelp:!0,transportVolunteer:{}}]}),Object(s.jsx)("div",{className:"space-20"}),Object(s.jsxs)("div",{style:{cursor:"pointer"},className:"text-now font-weight-bold p-2",children:["view donated item history",Object(s.jsxs)("span",{className:" btn-link ",children:["\xa0",Object(s.jsx)("svg",{fill:"#012f84",width:"14",height:"14",viewBox:"0 0 24 24",children:Object(s.jsx)("path",{d:"M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"})})]})]})]})]}),Object(s.jsx)("div",{className:"space-50"})]})})}var U=function(){return Object(s.jsxs)(M,{children:[Object(s.jsx)("div",{className:"text-now font-weight-bold",children:"Amount"}),Object(s.jsx)("div",{className:"space-20"}),Object(s.jsx)("div",{className:"form-group",children:Object(s.jsx)("input",{style:{borderRadius:"20px"},type:"text",className:"form-control",placeholder:"\u20b9 "})}),Object(s.jsx)(I,{text:"Donate Money",Bgcolor:"#012f84",Hovercolor:"#ec4392"})]})},P=function(e){var t=e.paymentList,c={outerBody:{boxShadow:"0px 0px 10px 5px rgba(84, 84, 84, 0.1)",borderRadius:"10px"}};return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{style:{cursor:"pointer"},className:"text-now font-weight-bold p-2",children:["View Payment History",Object(s.jsxs)("span",{className:" btn-link ",children:["\xa0",Object(s.jsx)("svg",{fill:"#012f84",width:"14",height:"14",viewBox:"0 0 24 24",children:Object(s.jsx)("path",{d:"M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"})})]})]}),Object(s.jsx)("div",{className:"p-2",children:t&&t.map((function(e,t){return Object(s.jsx)("div",{style:c.outerBody,className:" p-2 m-1",children:e},t)}))})]})},G=function(){var e={InputBox:{borderRadius:"20px"}},t=Object(n.useState)({name:"",description:"",phone:"",location:""}),c=Object(b.a)(t,2),o=c[0],a=c[1],i=Object(n.useState)(null),r=Object(b.a)(i,2),l=r[0],d=r[1],x=Object(n.useState)(!1),h=Object(b.a)(x,2),m=h[0],O=h[1],u=function(e){return function(t){a(Object(j.a)(Object(j.a)({},o),{},Object(W.a)({},e,t.target.value)))}};return Object(s.jsxs)(M,{children:[Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{className:"text-now font-weight-bold",children:"Name"}),Object(s.jsx)("input",{onChange:u("name"),value:o.name,placeholder:"e.g. Cloth, books, ...",style:e.InputBox,type:"text",className:"form-control"})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{className:"text-now font-weight-bold",children:"Description"}),Object(s.jsx)("input",{onChange:u("description"),value:o.description,placeholder:"e.g. 5 set of medium size shirts",style:e.InputBox,type:"text",className:"form-control"})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{className:"text-now font-weight-bold",children:"Phone"}),Object(s.jsx)("input",{onChange:u("phone"),value:o.phone,placeholder:"e.g. 9087879878",style:e.InputBox,type:"text",className:"form-control"})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{className:"text-now font-weight-bold",children:"Location"}),Object(s.jsx)("input",{onChange:u("location"),value:o.location,placeholder:"e.g. kochi",style:e.InputBox,type:"text",className:"form-control"})]}),Object(s.jsx)("div",{className:"p-1",children:Object(s.jsx)(R,{maxWidth:"150px",maxHeight:"150px",image:l})}),Object(s.jsx)("div",{className:"space-5"}),Object(s.jsxs)("div",{className:"custom-file",children:[Object(s.jsx)("input",{onChange:function(e){d(URL.createObjectURL(e.target.files[0]))},type:"file",className:"custom-file-input",id:"inputGroupFile01"}),Object(s.jsx)("label",{className:"custom-file-label",htmlFor:"inputGroupFile01",children:"Upload image"})]}),Object(s.jsx)("div",{className:"space-20"}),Object(s.jsxs)("div",{className:"custom-control custom-switch",children:[Object(s.jsx)("input",{type:"checkbox",checked:m,onChange:function(e){O(e.target.checked)},className:"custom-control-input",id:"customSwitch1"}),Object(s.jsxs)("label",{className:"custom-control-label",htmlFor:"customSwitch1",children:["Need transport facility?",Object(s.jsx)("div",{className:"text-info small",children:m?"Yes, I need help to pick up my donation":"I will deliver it myself"})]})]}),Object(s.jsx)("div",{className:"space-5"}),Object(s.jsx)("div",{className:"space-20"}),Object(s.jsx)(I,{text:"Donate Item",Bgcolor:"#012f84",Hovercolor:"#ec4392"})]})},q=function(e){var t=e.promisedItemsList;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"text-now font-weight-bold p-2",children:"Promised item status"}),t&&t.map((function(e){return Object(s.jsx)(o.a.Fragment,{children:Object(s.jsxs)(M,{children:[Object(s.jsxs)("div",{className:"text-now",children:["Name : ",e.name]}),Object(s.jsxs)("div",{className:"text-now",children:["status: ",e.status]}),Object(s.jsx)("div",{className:"space-20"}),e.needTransportHelp&&Object(s.jsx)(s.Fragment,{children:void 0===e.transportVolunteer.name?Object(s.jsx)("div",{className:"alert alert-light",children:"We'll let you know when someone volunteer to pickup your item."}):Object(s.jsxs)("div",{className:"alert alert-success",children:[e.transportVolunteer.name," (",e.transportVolunteer.phone,") is willing to help arrage transport facility for your donation."]})}),Object(s.jsx)("div",{className:"btn btn-danger",children:"Cancel donation"})]})},e.id)}))]})};function K(e){var t=Object(n.useState)({email:"",password:"",error:"",loading:!1,redirectToReffer:!1}),c=Object(b.a)(t,2),o=c[0],a=c[1];Object(n.useEffect)((function(){window.scrollTo(0,0)}),[]);var i=function(e){return function(t){a(Object(j.a)(Object(j.a)({},o),{},Object(W.a)({error:!1},e,t.target.value)))}},h=o.email,m=o.password,O=o.error,u=o.loading,p=function(e){var t;e.preventDefault(),a(Object(j.a)(Object(j.a)({},o),{},{error:!1,loading:!0})),(t={email:h,password:m},fetch("".concat(d,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){if(console.log(e),e)return e.json()})).catch((function(e){return console.log(e,"error"),{error:"Failed to fetch data"}}))).then((function(e){console.log(e),e.error?a(Object(j.a)(Object(j.a)({},o),{},{error:e.error,loading:!1})):function(e,t){"undefined"!=typeof window&&(localStorage.setItem("jwt",JSON.stringify(e)),t())}(e,(function(){a(Object(j.a)(Object(j.a)({},o),{},{redirectToReffer:!0}))}))}))};return Object(s.jsx)(z,{className:"container",children:Object(s.jsxs)(F.a,{children:[Object(s.jsx)("div",{className:"space-100"}),Object(s.jsx)(L,{text:"SignIn",size:"1.5em",color:"#012f84"}),Object(s.jsx)("div",{className:"space-20"}),Object(s.jsx)("div",{className:"h6 text-now",children:"Your have to sign in inorder to give donations. "}),Object(s.jsxs)("div",{className:"h6 text-now",children:["Don't have an account?",Object(s.jsxs)(r.b,{to:"/signup",children:[" ",Object(s.jsx)("span",{className:"text-pink",children:" Register here."})]})]}),Object(s.jsx)("div",{className:"space-5 bg-now"}),Object(s.jsx)("div",{className:"space-50"}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-12 col-md-6 offset-md-3",children:Object(s.jsxs)(M,{children:[Object(s.jsxs)("form",{children:[Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"",children:"Email"}),Object(s.jsx)("input",{type:"email",onChange:i("email"),value:h,className:"form-control",name:"email"})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"",children:"Password"}),Object(s.jsx)("input",{type:"password",onChange:i("password"),value:m,className:"form-control",name:"password"})]}),Object(s.jsx)("div",{className:"",onClick:p,children:Object(s.jsx)(I,{text:"Login",Bgcolor:"#012f84",Hovercolor:"#ec4392"})})]}),Object(s.jsx)("div",{className:"text-center",children:u&&Object(s.jsx)("div",{className:"spinner-border",children:Object(s.jsx)("span",{className:"sr-only",children:"Loading..."})})}),Object(s.jsx)("div",{className:"space-20"}),Object(s.jsx)("div",{className:"h6 text-danger text-center",style:{display:O?"":"none"},children:O}),function(){if(x())return Object(s.jsx)(l.a,{to:"/profile"})}()]})})}),Object(s.jsx)("div",{className:"space-100"})]})})}var Q=c.p+"static/media/placeholder.bba2e3e3.png";function X(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"space-20"}),Object(s.jsx)(L,{text:"Help us transport donations",size:"1.5em",color:"#012f84"}),Object(s.jsx)("div",{className:"space-10"}),Object(s.jsx)(L,{text:"You can also help us by volunteering to transport donated items from donars to our foundation",size:"1.1em",color:"#012f84"}),Object(s.jsx)("div",{className:"space-50"}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)(Z,{data:[{id:"1",name:"Books",location:"Alappuzha"},{id:"2",name:"Books",location:"Alappuzha"}]})})]})}var Z=function(e){return e.data.map((function(e){return Object(s.jsx)("div",{className:"col-12 col-lg-6 ",children:Object(s.jsx)(M,{children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsxs)("div",{className:"col-12",children:[Object(s.jsx)(R,{image:Q}),Object(s.jsx)(R,{image:Q}),Object(s.jsx)(R,{image:Q}),Object(s.jsx)("div",{className:"space-20"})]}),Object(s.jsx)("div",{className:"col-4 h6 font-weight-light",children:"Name :"}),Object(s.jsx)("div",{className:"col-8 h6 text-secondary font-weight-light",children:"Name"}),Object(s.jsx)("div",{className:"col-4 h6 font-weight-light",children:"From :"}),Object(s.jsx)("div",{className:"col-8 h6 text-secondary font-weight-light",children:"Location"}),Object(s.jsx)("div",{className:"col-4 h6 font-weight-light",children:"To :"}),Object(s.jsx)("div",{className:"col-8 h6 text-secondary font-weight-light",children:"Location"}),Object(s.jsx)("div",{className:"col-4 h6 font-weight-light",children:"Contact :"}),Object(s.jsx)("div",{className:"col-8 h6 text-secondary font-weight-light",children:"899098789"}),Object(s.jsxs)("div",{className:"col-12",children:[Object(s.jsx)("div",{className:"space-20"}),Object(s.jsx)("span",{className:"",children:Object(s.jsx)(I,{text:"I can help",Bgcolor:"#012f84",Hovercolor:"#ec4392"})})]})]})})},e.id)}))};function $(e){return Object(s.jsxs)(z,{className:"container",children:[Object(s.jsx)("div",{className:"space-100"}),Object(s.jsx)(L,{text:"Volunteering",size:"1.5em"}),Object(s.jsx)("div",{className:"space-5 bg-pink"}),Object(s.jsx)("div",{className:"space-20"}),Object(s.jsx)(X,{}),Object(s.jsx)("div",{className:"space-50"})]})}var _=function(){return Object(s.jsx)(r.a,{children:Object(s.jsxs)(l.d,{children:[Object(s.jsx)(l.b,{path:"/",exact:!0,component:V}),Object(s.jsx)(l.b,{path:"/profile",exact:!0,component:J}),Object(s.jsx)(l.b,{path:"/login",exact:!0,component:K}),Object(s.jsx)(l.b,{path:"/volunteer",exact:!0,component:$})]})})};i.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(_,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.f07f14ec.chunk.js.map