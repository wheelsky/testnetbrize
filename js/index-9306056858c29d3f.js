(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{87314:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(80895)}])},80895:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ne}});var r=n(52322),i=n(2784),s=n(12121),o=n(14275),a=n(56315),l=n(66383),c=n(11590),d=n(95508),u=n(6697),p=n(97481),h=n(87560),x=n(82749),g=n(33445),m=n(76780),E=n(6665),v=n(90399),f=n(60137),C=n(79590),j=n(2035),b=n(34491),k=n(31066),y=n(16492),M=n(16919),w=n(8960),R=n(53996),T=n(13139),A=n(35415),P=n(45219),N=n(22697),Z=n(70790),I=n(17575),S=n(47842),_=n(70865),O=n(96670),F=n(5276),z=n(46013);const H=(0,z.Z)(b.Z)((()=>({position:"relative",width:"100%"}))),W=(0,z.Z)("div")((({theme:e})=>({width:"100%",backgroundColor:e.palette.secondary.main,borderRadius:e.shape.borderRadius,height:32}))),L=(0,z.Z)("div")((()=>({position:"absolute",top:0,bottom:0,display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"}))),V=(0,z.Z)("button")((({itemWidth:e,active:t,theme:n})=>({color:t?n.palette.primary.contrastText:n.palette.secondary.contrastText,backgroundColor:"transparent",border:0,borderRadius:n.shape.borderRadius,width:`${e}%`,height:"100%",fontSize:12,lineHeight:"16px",textTransform:"uppercase",outline:0,"&:hover":{backgroundColor:"rgba(255,255,255,0.05)",opacity:.7,cursor:"pointer"}}))),D=(0,z.Z)("div")((({position:e=0,itemWidth:t,theme:n})=>({backgroundColor:n.palette.primary.main,borderRadius:n.shape.borderRadius,width:`${t}%`,height:32,position:"absolute",top:0,transform:`translateX(${100*e}%)`,transition:"transform 100ms ease-out"}))),B=e=>{const{selection:t}=e,n=i.Children.toArray(e.children),s=n.findIndex((e=>e.props.value===t)),o=Math.max(s,0),a=100/n.length;return(0,r.jsxs)(H,{children:[(0,r.jsx)(W,{}),s>-1&&(0,r.jsx)(D,{position:o,itemWidth:a}),(0,r.jsx)(L,{children:i.Children.map(n,(({props:{value:e,onClick:n,children:i}})=>(0,r.jsx)(V,Object.assign({onClick:n,itemWidth:a,active:t===e},{children:i}))))})]})};B.Option=e=>null;var X,G=n(91179),Y=(X={},(0,S.Z)(X,R.tC.HALF_PERCENT,!0),(0,S.Z)(X,R.tC.ONE_PERCENT,!0),(0,S.Z)(X,R.tC.FIVE_PERCENT,!0),X),U=(0,o.Pi)((function(e){var t,n=(0,h.Z)(),s=R.ME.form,o=R.ME.slippage,a=(t=s.slippage,Y.hasOwnProperty(t)?s.slippage:void 0),l=(0,i.useRef)(null!=a?a:R.tC.FIVE_PERCENT);a&&(l.current=a);var c=(0,i.useRef)(o);o&&(c.current=o);var d=null!=a,u=d?null==o?void 0:o.toFixed(2):s.slippage;return(0,r.jsx)(F.u,(0,O.Z)((0,_.Z)({title:"slippage tolerance",topAdornment:(0,r.jsx)(b.Z,{sx:{p:2},children:(0,r.jsx)(f.xv,{variant:"p2",color:"text.secondary",children:"YOUR TRANSACTION WILL REVERT IF THE PRICE CHANGE UNFAVOURABLY BY MORE THAN THIS PERCENTAGE."})})},e),{onClose:function(){var t,n;null==o&&null!=s.slippage&&R.ME.setSlippage(null!==(n=null===(t=c.current)||void 0===t?void 0:t.toFixed(2))&&void 0!==n?n:""),e.onClose()},children:(0,r.jsxs)(b.Z,{sx:{p:2,height:"100%",display:"flex",flexDirection:"column"},children:[(0,r.jsx)(b.Z,{sx:{mt:0,mb:2},children:(0,r.jsxs)(B,{selection:null!=a?a:l.current,children:[(0,r.jsx)(B.Option,{onClick:function(){return R.ME.setSlippage(R.tC.HALF_PERCENT)},value:R.tC.HALF_PERCENT,children:"0.5%"}),(0,r.jsx)(B.Option,{onClick:function(){return R.ME.setSlippage(R.tC.ONE_PERCENT)},value:R.tC.ONE_PERCENT,children:"1%"}),(0,r.jsx)(B.Option,{onClick:function(){return R.ME.setSlippage(R.tC.FIVE_PERCENT)},value:R.tC.FIVE_PERCENT,children:"5.0%"})]})}),(0,r.jsxs)(b.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,r.jsx)(f.xv,{color:n.palette.text.secondary,children:"Custom percentage"}),(0,r.jsx)(G.r,{checked:!d,onCheckedChange:function(){R.ME.setSlippage(d?null!=u?u:"0":l.current)}})]}),(0,r.jsx)(E.I,{onChange:function(e){return R.ME.setSlippage(e.target.value)},size:"md",value:u,sx:{mt:2,width:"100%"}}),(0,r.jsx)(q,{})]})}))})),q=(0,o.Pi)((function(){var e=R.ME.form,t=R.ME.slippage;return e.slippage?null==t||(null==t?void 0:t.lessThan(new p.Percent(0)))||(null==t?void 0:t.greaterThan(new p.Percent(1)))?(0,r.jsx)(K,{children:"ENTER A VALID SLIPPAGE PERCENTAGE"}):t.greaterThan(new p.Percent(5,100))?(0,r.jsx)($,{children:"YOUR TRANSACTION MAYBE FRONTRUN"}):null:null})),K=(0,z.Z)("div",{name:"Error"})((function(e){return{fontSize:12,lineHeight:"16px",color:e.theme.palette.error.main,textAlign:"right",width:"100%",marginTop:4}})),$=(0,z.Z)(K,{name:"Warning"})((function(e){return{color:e.theme.palette.warning.main}})),J=n(50005),Q=n(48481),ee=n(7570),te=(0,o.Pi)((function(){var e,t,n,i=(0,h.Z)(),s=c.t.evm,o=(0,l.Z)(R.ME.errors,1)[0],a=R.ME.isApproving,S=R.ME.isExecuting,_=R.ME.amount,O=R.ME.form,F=R.ME.messageFee,z=R.ME.slippage,H=R.ME.minAmount,W=R.ME.gasCost,L=R.ME.isSigning||R.ME.isApproving&&d.i.isSigning||R.ME.isRegistering&&u.c.isSigning,V=R.ME.isMining||R.ME.isApproving&&d.i.isMining||R.ME.isRegistering&&u.c.isMining,D=T.kD.txProgress.transactions.length>0;return(0,r.jsxs)(x.Z,{maxWidth:"sm",sx:{paddingX:0,minHeight:"calc(100vh - 235px)",mb:6.5,zIndex:1},children:[D&&(0,r.jsx)(g.s,{title:"",sx:{margin:"auto",height:118},children:(0,r.jsx)(m.x,{renderTracker:function(e){return(0,r.jsx)(I.f,{tx:e,sx:{minWidth:"100%"},onClose:e.completed||e.error?function(){return T.kD.txProgress.dismiss(e.txHash)}:void 0},e.txHash)},txs:T.kD.txProgress.transactions})}),(0,r.jsxs)(g.s,{sx:{margin:"auto",mt:D?-1:8},children:[(0,r.jsxs)(P.K,{children:[(0,r.jsx)(A.V,{value:R.ME.form.srcCurrency,options:R.ME.srcCurrencyOptions,onSelect:R.ME.setSrcCurrency,title:"Token",network:(0,r.jsx)(A.K,{chainId:R.ME.form.srcChainId})},"src"),(0,r.jsx)(E.I,{size:"lg",placeholder:"0.0",sx:{fontFeatureSettings:'"ss04" on'},startAdornment:(0,r.jsx)(v.z,{size:"xs",variant:"tertiary",onClick:R.ME.setMaxAmount,children:"Max"}),onChange:function(e){return R.ME.setAmount(e.target.value)},value:R.ME.form.amount,endAdornment:(0,r.jsxs)(E.o,{children:[(0,r.jsx)(f.xv,{color:i.palette.text.secondary,size:12,sx:{textTransform:"uppercase"},children:"Balance"}),(0,r.jsx)(f.xv,{color:i.palette.text.secondary,size:12,children:R.ME.srcBalance?p.formatCurrencyAmount.short(R.ME.srcBalance,6):"-"})]})})]}),(0,r.jsx)(C.L,{onClick:R.ME.switch}),(0,r.jsxs)(P.K,{children:[(0,r.jsx)(A.V,{value:R.ME.form.dstCurrency,options:R.ME.dstCurrencyOptions,readonly:!0,title:"To",network:(0,r.jsx)(A.K,{chainId:R.ME.form.dstChainId})},"dst"),(0,r.jsx)(E.I,{size:"lg",value:null!==(n=null==H?void 0:H.toExact())&&void 0!==n?n:"-",readOnly:!0})]}),(0,r.jsx)(j.P,{sx:{my:"24px",textTransform:"uppercase"},items:[{label:"You will receive",value:H?(0,r.jsx)(b.Z,{sx:{cursor:"pointer"},children:null==H?void 0:H.toExact()}):"--"},{label:(0,r.jsx)(ee.i,{children:(0,r.jsx)(J.k,{messageFee:F,gasCost:W})}),value:(0,Q.A)({messageFee:F,gasCost:W})},{label:(0,r.jsxs)(k.Z,{direction:"row",alignItems:"center",sx:{gap:1},children:[(0,r.jsx)("span",{children:"Slippage tolerance"}),(0,r.jsx)(y.R,{text:(0,r.jsx)(b.Z,{sx:{maxWidth:330},children:"In the event that the price experiences an unfavorable change beyond this percentage, your transaction will be reverted."}),children:(0,r.jsx)("div",{children:(0,r.jsx)(M.J.Info,{size:12})})})]}),value:(0,r.jsxs)(k.Z,{direction:"row",alignItems:"center",sx:{gap:1},children:[(0,r.jsx)(b.Z,{children:z?"".concat(z.toFixed(2),"%"):"--"}),(0,r.jsx)(b.Z,{children:(0,r.jsx)(f.xv.Link,{size:12,onClick:T.kD.slippageAmountModal.open,children:"EDIT"})})]})}]}),s?o?(0,r.jsx)(Z.c,{variant:"primary",type:"button",disabled:!0,children:o}):a?(0,r.jsx)(Z.c,{variant:"primary",type:"button",disabled:!0,children:"Approving ..."}):S?(0,r.jsx)(Z.c,{variant:"primary",type:"button",disabled:!0,children:"Sending ..."}):(0,r.jsx)(Z.c,{variant:"primary",type:"button",onClick:R.ME.transfer,children:"Transfer"}):(0,r.jsx)(Z.c,{variant:"primary",type:"button",onClick:function(){return c.t.connect()},children:"Connect"})]}),(0,r.jsxs)(w.b,{open:R.ME.isExecuting,image:(0,r.jsx)(N.r,{}),title:R.ME.isApproving?"Approving transaction":V?"Submitting transaction":c.t.isSwitching?"Switch Network":"Confirm in your wallet",children:[(0,r.jsxs)(f.xv,{variant:"p1",children:["Transferring"," ",(0,r.jsxs)(f.xv,{variant:"p1",children:[null==_?void 0:_.toSignificant()," ",null==_?void 0:_.currency.symbol," "]}),"from ",(0,r.jsxs)(f.xv,{variant:"p1",children:[null===(e=(0,p.tryGetNetwork)(O.srcChainId))||void 0===e?void 0:e.name," "]}),"to ",(0,r.jsxs)(f.xv,{variant:"p1",children:[null===(t=(0,p.tryGetNetwork)(O.dstChainId))||void 0===t?void 0:t.name," "]})]}),(0,r.jsx)(f.xv,{color:i.palette.text.secondary,size:12,sx:{mt:3},children:R.ME.isRegistering||c.t.isSwitching?"Confirm this transaction in your wallet":R.ME.isApproving?"Approve this transaction in your wallet.":L?"Please check pending wallet actions if you did not receive a transaction prompt.":V?"Waiting for blockchain confirmation...":(0,r.jsx)(r.Fragment,{children:" "})})]},"transfer"),(0,r.jsx)(U,{open:T.kD.slippageAmountModal.value,onClose:T.kD.slippageAmountModal.close})]})})),ne=(0,o.Pi)((function(){return(0,r.jsx)(s.Ar,{centered:!0,header:(0,r.jsx)(a.t,{activePage:"bridge"}),footer:(0,r.jsx)(a.q,{}),children:(0,r.jsx)(te,{})})}))},91179:function(e,t,n){"use strict";n.d(t,{r:function(){return w}});var r=n(52322),i=n(46013),s=n(7896),o=n(2784),a=n(41816),l=n(26215),c=n(34540),d=n(73597),u=n(34158),p=n(72130);const h="Switch",[x,g]=(0,c.b)(h),[m,E]=x(h),v=(0,o.forwardRef)(((e,t)=>{const{__scopeSwitch:n,name:r,checked:i,defaultChecked:c,required:u,disabled:h,value:x="on",onCheckedChange:g,...E}=e,[v,f]=(0,o.useState)(null),b=(0,l.e)(t,(e=>f(e))),k=(0,o.useRef)(!1),y=!v||Boolean(v.closest("form")),[M=!1,w]=(0,d.T)({prop:i,defaultProp:c,onChange:g});return(0,o.createElement)(m,{scope:n,checked:M,disabled:h},(0,o.createElement)(p.WV.button,(0,s.Z)({type:"button",role:"switch","aria-checked":M,"aria-required":u,"data-state":j(M),"data-disabled":h?"":void 0,disabled:h,value:x},E,{ref:b,onClick:(0,a.M)(e.onClick,(e=>{w((e=>!e)),y&&(k.current=e.isPropagationStopped(),k.current||e.stopPropagation())}))})),y&&(0,o.createElement)(C,{control:v,bubbles:!k.current,name:r,value:x,checked:M,required:u,disabled:h,style:{transform:"translateX(-100%)"}}))})),f=(0,o.forwardRef)(((e,t)=>{const{__scopeSwitch:n,...r}=e,i=E("SwitchThumb",n);return(0,o.createElement)(p.WV.span,(0,s.Z)({"data-state":j(i.checked),"data-disabled":i.disabled?"":void 0},r,{ref:t}))})),C=e=>{const{control:t,checked:n,bubbles:r=!0,...i}=e,a=(0,o.useRef)(null),l=function(e){const t=(0,o.useRef)({value:e,previous:e});return(0,o.useMemo)((()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous)),[e])}(n),c=(0,u.t)(t);return(0,o.useEffect)((()=>{const e=a.current,t=window.HTMLInputElement.prototype,i=Object.getOwnPropertyDescriptor(t,"checked").set;if(l!==n&&i){const t=new Event("click",{bubbles:r});i.call(e,n),e.dispatchEvent(t)}}),[l,n,r]),(0,o.createElement)("input",(0,s.Z)({type:"checkbox","aria-hidden":!0,defaultChecked:n},i,{tabIndex:-1,ref:a,style:{...e.style,...c,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function j(e){return e?"checked":"unchecked"}const b=v,k=f,y=(0,i.Z)(b)((({theme:e})=>({width:38,height:20,borderRadius:23,border:0,padding:0,cursor:"pointer",backgroundColor:e.palette.divider,"&[data-state=checked]":{backgroundColor:e.palette.primary.main},"&:hover":{backgroundColor:e.palette.primary.light}}))),M=(0,i.Z)(k)((({theme:e})=>({width:16,height:16,borderRadius:"100%",backgroundColor:"#FFF",display:"block",transform:"translateX(2px)",transition:"transform 100ms ease-in","&[data-state=checked]":{transform:"translateX(calc(100% + 4px))"}}))),w=e=>(0,r.jsx)(y,Object.assign({},e,{children:(0,r.jsx)(M,{})}))}},function(e){e.O(0,[7642,7659,1218,6315,5934,9774,2888,179],(function(){return 87314,e(e.s=87314)}));var t=e.O();_N_E=t}]);