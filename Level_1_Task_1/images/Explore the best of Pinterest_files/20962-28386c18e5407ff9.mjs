"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[20962],{922719:(e,t,i)=>{i.d(t,{CC:()=>n,Ll:()=>a,XF:()=>s});let r=(e,t,i)=>({x:Math.floor(e*Math.cos(i)),y:Math.floor(t*Math.sin(i))}),n=(e,t)=>r(t/2,e/2,2*Math.random()*Math.PI),s=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,a=e=>["@-webkit-keyframes","@keyframes"].map(t=>e.map(e=>t+" "+e).join("\n")).join("\n")},549629:(e,t,i)=>{i.d(t,{Q:()=>l,Z:()=>u});var r=i(667294),n=i(587703),s=i(525364),a=i(996523),o=i(5859);function l(e,t){let{setViewContextData:i}=(0,s.sV)(),{requestIdentifier:l}=(0,o.B)(),u=(0,n.Z)(),{viewData:d}=(0,s.SU)();(0,r.useEffect)(()=>{e&&(i({viewType:e.view_type??1,viewParameter:e.view_parameter,viewData:e.view_data?(0,a.Z)(d,e.view_data):d,component:e.component,element:e.element,objectIdStr:e.object_id_str,auxData:e.aux_data,clientTrackingParams:e.clientTrackingParams}),u({...e,event_type:13,request_identifier:l}))},[t])}function u(e){let{children:t,log:i}=e;return l(i),t||null}},454514:(e,t,i)=>{i.d(t,{UZ:()=>u,Vg:()=>l,ZP:()=>d});var r=i(667294),n=i(883119),s=i(554786),a=i(494125),o=i(785893);let l=200,u=({deviceType:e,hiding:t,visible:i})=>{let r="desktop"===e,n=0,s=r?"translateY(200px)":"translateY(-200px)",a="opacity 0.1s ease-in-out",o="hidden";return i&&!t&&(n=1,s="translateY(0)",a="all 0.7s cubic-bezier(.19, 1.15, .48, 1)",o="visible"),i&&t&&(s="scale(1.1)",a="opacity transform 0.2s"),{opacity:n,pointerEvents:"auto",position:"relative",marginTop:r?10:0,transform:s,transition:a,visibility:o}};function d({_dangerouslySetThumbnail:e,_dangerouslySetPrimaryAction:t,text:i,primaryAction:d,dismissButton:c,helperLink:p,thumbnail:h,type:g,dataTestId:_,duration:m=2e3,onHide:f,href:b,onClick:y,openNewPage:x,imageUrl:w}){let v;let S=(0,s.ZP)(),[j,E]=(0,r.useState)(!1),[C,P]=(0,r.useState)(!1),$=(0,r.useRef)(),k=()=>{E(!0),$.current=setTimeout(f,l)},I=()=>{$.current=setTimeout(k,m)},Z=()=>{$.current&&clearTimeout($.current)};(0,a.Z)(()=>(setTimeout(()=>P(!0),100),I(),Z)),w&&(v={image:(0,o.jsx)(n.Ee,{alt:"string"==typeof i?i:`${i[0]} ${i[1]}`,fit:"cover",naturalHeight:1,naturalWidth:1,src:w})});let T=(0,o.jsx)(n.FN,{_dangerouslySetPrimaryAction:t,_dangerouslySetThumbnail:e,dismissButton:c,helperLink:p,primaryAction:d,text:i,thumbnail:v??h,type:g}),{marginTop:A,opacity:z,pointerEvents:O,position:D,transform:R,transition:L,visibility:M}=u({deviceType:S,hiding:j,visible:C});return(0,o.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:{transform:R,transition:L,visibility:M,pointerEvents:O}},"data-test-id":_??"toast",display:"flex",marginTop:A,onMouseEnter:Z,onMouseLeave:I,opacity:z,position:D,children:b?(0,o.jsx)(n.Tg,{href:b,onTap:({event:e,dangerouslyDisableOnNavigation:t})=>{b.startsWith("#")&&(e.preventDefault(),t()),y?.(e)},rounding:"pill",target:x?"blank":null,children:T}):T})}},407996:(e,t,i)=>{i.d(t,{Z:()=>a});var r=i(883119),n=i(140017),s=i(785893);let a=({isInModal:e})=>{let t=(0,n.ZP)();return(0,s.jsx)(r.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{backgroundColor:"rgba(255, 255, 255, .5)"}},display:"flex",height:"100%",justifyContent:"center",left:!0,position:e?"absolute":"fixed",top:!0,width:"100%",zIndex:new r.Ry(1),children:(0,s.jsx)(r.$j,{accessibilityLabel:t._('Loading', 'Full page loading state', 'Full page loading state'),show:!0})})}},295923:(e,t,i)=>{i.d(t,{Z:()=>x});var r=i(667294),n=i(883119),s=i(922719),a=i(406893);let o={yellow:"#FAB904",orange:"#FF6400",green:"#0FA573",blue:"#0074e8",purple:"#B469EB"},l="DelightfulBubbles__",u=(e,t)=>{let i=e.length,r=e.indexOf(t)+1>=i?0:e.indexOf(t)+1;return e[r]},d=`${l}fadeIn {
  to {
    opacity: 1;
  }
}
`,c=`${l}growShrink {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
`,p=`${l}swirl {
  0% {
    transform: rotate(0deg) translateX(-50%);
  }
  100% {
    transform: rotate(-360deg) translateX(-50%);
  }
}
`,h=[d,c,p,...(()=>{let e=Object.keys(o).map(e=>{let t=u(Object.keys(o),e);return`${l}colorChange_${e} {
      0% {
        background-color: ${o[e]};
      }
      50% {
        background-color: ${o[t]};
      }
    }
    `});return e})()],g=(0,s.Ll)(h),_=(e,t,i,r,n,s,a,u)=>({bubblePositionStyles:{position:"absolute",marginLeft:`${s/2-n}px`,marginTop:`${i/2-n}px`,left:`${a}px`,top:`${u}px`},bubbleSwirlStyles:{animation:`${l}swirl 6s ease-in-out ${e}s infinite forwards`,WebkitAnimation:`${l}swirl 6s ease-in-out ${e}s infinite forwards`},bubbleGrowShrinkStyles:{transform:"scale(0)",WebkitTransform:"scale(0)",animation:`${l}growShrink 6s ease-in-out ${e}s infinite alternate`,WebkitAnimation:`${l}growShrink 6s ease-in-out ${e}s infinite alternate`},bubbleShapeStyles:{height:`${t}px`,width:`${t}px`,borderRadius:"50%",backgroundColor:o[r],opacity:0,animation:`${l}colorChange_${r} 12s steps(1, start) ${e}s infinite forwards,
      ${l}fadeIn 3s linear ${e}s 1 forwards`,WebkitAnimation:`${l}colorChange_${r} 12s steps(1, start) ${e}s infinite forwards,
      ${l}fadeIn 3s linear ${e}s 1 forwards`}});var m=i(785893);function f(e,t,i){var r;return(t="symbol"==typeof(r=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?r:String(r))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}let b=e=>{let{delay:t,diameter:i,height:r,initialColor:s,width:a,xOffset:o,yOffset:l}=e,u=Math.floor(i/2),d=_(t,i,r,s,u,a,o,l);return(0,m.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:d.bubblePositionStyles},children:(0,m.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:d.bubbleSwirlStyles},children:(0,m.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:d.bubbleGrowShrinkStyles},children:(0,m.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:d.bubbleShapeStyles}})})})})};class y extends r.Component{constructor(...e){super(...e),f(this,"state",{isInitialized:!1})}componentDidMount(){window.requestAnimationFrame(()=>{this.setState({isInitialized:!0})})}shouldComponentUpdate(e,t){return!e.numBubbles===this.props.numBubbles||!t.isInitialized===this.state.isInitialized}getSize(){let{width:e,height:t}=this.props;return void 0!==e&&void 0!==t?{width:e,height:t}:this.containerElement?{height:this.containerElement.offsetHeight,width:this.containerElement.offsetWidth}:{height:void 0,width:void 0}}createBubbles(e,t){let{delayFactor:i,delayOffset:r,numBubbles:n,xRadiusAdjustment:a,yRadiusAdjustment:l}=this.props,u=e+2*l,d=t+2*a,c=[],p=Object.keys(o);for(let a=0;a<n;a+=1){let n=16+(0,s.XF)(-4,4),o=p[a%p.length],{x:l,y:h}=(0,s.CC)(u,d);c.push((0,m.jsx)(b,{delay:a*i+r,diameter:n,height:e,initialColor:o,width:t,xOffset:l,yOffset:h},a))}return c}render(){let{isDesktop:e}=this.props,{height:t,width:i}=this.getSize();return(0,m.jsxs)(n.xu,{height:t,position:"relative",width:i,children:[(0,m.jsx)(a.Z,{unsafeCSS:g}),(0,m.jsxs)(n.xu,{ref:e=>this.containerElement=e,position:e?void 0:"absolute",children:[this.state.isInitialized&&this.createBubbles(t||0,i||0),(0,m.jsx)(n.xu,{position:"relative",children:this.props.children})]})]})}}f(y,"defaultProps",{numBubbles:10,xRadiusAdjustment:0,yRadiusAdjustment:0,delayFactor:1,delayOffset:0});let x=y},310822:(e,t,i)=>{i.d(t,{R:()=>h,Z:()=>g});var r=i(667294),n=i(883119),s=i(22724),a=i(549629),o=i(140017),l=i(5859),u=i(407996),d=i(407053),c=i(295923),p=i(785893);let h=e=>{let t=new Set([...d.EU,...d.rT,...d.IO]);return t.has(e)};function g({isReducedHeader:e,progressBarAnimationDuration:t}){let i=(0,o.ZP)(),{country:d}=(0,l.B)(),g=h(d);return(0,p.jsx)(r.Fragment,{children:g?(0,p.jsx)(a.Z,{log:{view_type:10,view_parameter:259},children:(0,p.jsxs)(n.xu,{bottom:!0,color:"default",left:!0,position:"fixed",right:!0,top:!0,width:"100%",children:[(0,p.jsx)(s.Z,{color:"dark",duration:t||3e3,finalProgress:95}),(0,p.jsxs)(n.kC,{alignItems:"stretch",direction:"column",height:"100%",justifyContent:"start",children:[(0,p.jsxs)(n.xu,{"data-test-id":"account-creation-heading",margin:10,children:[(0,p.jsx)(n.X6,{overflow:"normal",size:e?"500":"600",children:i._('Your account is being created!', 'account created heading', 'account created heading')}),(0,p.jsx)(n.xv,{overflow:"normal",children:i._('You can now save ideas, get personalized recommendations, and more', 'loading state description while waiting for any sign up registration to complete', 'loading state description while waiting for any sign up registration to complete')})]}),(0,p.jsx)(n.kC,{alignItems:"center",flex:"grow",justifyContent:"center",children:(0,p.jsx)(c.Z,{delayOffset:-5,isDesktop:!1,xRadiusAdjustment:40,yRadiusAdjustment:40,children:(0,p.jsx)(n.xu,{alignItems:"center",color:"lightWash",direction:"column",display:"flex",height:120,justifyContent:"end",overflow:"hidden",rounding:"circle",width:120,children:(0,p.jsx)(n.JO,{accessibilityLabel:i._('Loading', 'Loading state for any sign up registration', 'Loading state for any sign up registration'),color:"subtle",icon:"person",size:"90"})})})})]})]})}):(0,p.jsx)(u.Z,{})})}},615208:(e,t,i)=>{i.d(t,{m:()=>I});var r=i(702664),n=i(216167),s=i(224796),a=i(324358),o=i(587703),l=i(658583),u=i(622541),d=i(957753),c=i(820428),p=i(96452),h=i(321725),g=i(340523),_=i(182962),m=i(891276),f=i(5859),b=i(666698),y=i(731714),x=i(573810),w=i(217058),v=i(722363),S=i(758939),j=i(546689),E=i(191313),C=i(407053),P=i(310822),$=i(953565);let k=e=>({type:"REGISTER_USER",payload:{user:e}}),I=()=>{let e=(0,g.F)(),t=(0,r.useDispatch)(),{country:i,countryFromHostName:I,countryFromIp:Z,regionFromIp:T,isAuthenticated:A}=(0,f.B)(),z=(0,_.Z)(),O=(0,o.Z)(),D=(0,v.Z)();return(r,{signupAttemptContextEvent:o})=>{let g=(0,h.yV)(r),_=e=>{O({...o,event_type:e,aux_data:{...o.aux_data,upsell_reason:o.aux_data?.upsell_reason||y.Z.getItem(s.bg)||null,upsell_view_count:y.Z.getItem(s.w0)||0}}),7487===e&&y.Z.setItem(s.w0,0)};_(7537),D({action:"signup",event:"attempt",type:g}),z();let f=0,v=(0,P.R)(i),R=new Promise(e=>{v?setTimeout(()=>{e(void 0)},3e3):e(void 0)});return new Promise((s,o)=>{let y=()=>{let v=(0,j.t_)(),P=(0,j.OJ)(),z={...r,user_behavior_data:function(){let e=[C.E9];return function(e){let t={};return e.forEach(e=>{let i=JSON.parse((0,E.qn)(e));i&&(t[e]=i)}),JSON.stringify(t)}(e)}(),visited_pages:v};P&&(z.referrer=P),(0,$.nP)("webapp.debug_signup_type.redux_registration",{sampleRate:1,tags:{CHECK_TYPE:(0,h.Eh)(z,"CHECK_TYPE")??"none",CHECK_EXISTS:(0,h.Eh)(z,"DEPRECATED_CHECK_EXISTS"),CHECK_TRUTHY:(0,h.Eh)(z,"DEPRECATED_CHECK_TRUTHY")}}),n.Z.create("UserRegisterResource",{...z,get_user:!0}).callCreate().then(n=>R.then(()=>{(0,x.L_)("d_pif_invite");let o=n.client_context;t(k(n.resource_response.data.user));let l=n.resource_response.data.user.gatekeeper_experiments;if(l){let{active:t,triggerable:i}=l;t&&i||(0,$.nP)("webapp.registration.emptyExperimentsDebug",{sampleRate:1,tags:{active:String(!!t),triggerable:String(!!i)}}),e.updateExperiments(t,i)}else(0,$.nP)("webapp.registration.updateExperimentsFailed");o&&o.placed_experiences&&t((0,d.OD)(o.placed_experiences)),A&&(0,S.Z)("registration.signup_success");let u=r.email||r.username||null,p=r.password||null,{credentials:h}=navigator;if(h&&u&&p)try{let e=new window.PasswordCredential({id:u,password:p});(0,w.My)("unauth_mweb.navigatorCredentials.store.attempt"),h.store(e).then(()=>{(0,w.My)("unauth_mweb.navigatorCredentials.store.success")})}catch(e){(0,w.My)("unauth_mweb.navigatorCredentials.store.error")}_(7487),D({action:"signup",event:"success",type:g}),(0,a.Z)(),(0,c.Z)(),A&&(0,b.Dm)(),(0,m.ko)({country:i,countryFromHostName:I,countryFromIp:Z,regionFromIp:T,deviceType:"Mobile",eventCategory:"NewUsers"}),s()})).catch(e=>{e?.api_error_code===p.tz&&((0,w.My)("multi_step_set_age_restrict_cookie"),l.t8(u.It,"1",(0,l.kZ)(u.It))),f<3&&[p.dO,p.cZ].includes(e?.api_error_code)?(f+=1,y()):(_(7488),D({action:"signup",event:"fail",type:g}),A&&(0,S.Z)("registration.signup_error"),o(e))})};y()})}}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/20962-28386c18e5407ff9.mjs.map