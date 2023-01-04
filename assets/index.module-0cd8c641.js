var T=Object.defineProperty;var d=(e,t)=>T(e,"name",{value:t,configurable:!0});import{r}from"./index-dbe441b7.js";import{a as y,$ as I}from"./index.module-eab2fe61.js";import{r as U}from"./index-f7a46eb0.js";function C(){return C=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},C.apply(this,arguments)}d(C,"_extends$1");function z(e,t=[]){let n=[];function o(s,f){const i=r.createContext(f),u=n.length;n=[...n,f];function a(l){const{scope:p,children:b,...m}=l,g=(p==null?void 0:p[e][u])||i,h=r.useMemo(()=>m,Object.values(m));return r.createElement(g.Provider,{value:h},b)}d(a,"Provider");function $(l,p){const b=(p==null?void 0:p[e][u])||i,m=r.useContext(b);if(m)return m;if(f!==void 0)return f;throw new Error(`\`${l}\` must be used within \`${s}\``)}return d($,"useContext"),a.displayName=s+"Provider",[a,$]}d(o,"$c512c27ab02ef895$export$fd42f52fd3ae1109");const c=d(()=>{const s=n.map(f=>r.createContext(f));return d(function(i){const u=(i==null?void 0:i[e])||s;return r.useMemo(()=>({[`__scope${e}`]:{...i,[e]:u}}),[i,u])},"useScope")},"createScope");return c.scopeName=e,[o,D(c,...t)]}d(z,"$c512c27ab02ef895$export$50c7b4e9d9f19c1");function D(...e){const t=e[0];if(e.length===1)return t;const n=d(()=>{const o=e.map(c=>({useScope:c(),scopeName:c.scopeName}));return d(function(s){const f=o.reduce((i,{useScope:u,scopeName:a})=>{const l=u(s)[`__scope${a}`];return{...i,...l}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:f}),[f])},"useComposedScopes")},"createScope1");return n.scopeName=t.scopeName,n}d(D,"$c512c27ab02ef895$var$composeContextScopes");function k(e,t,{checkForDefaultPrevented:n=!0}={}){return d(function(c){if(e==null||e(c),n===!1||!c.defaultPrevented)return t==null?void 0:t(c)},"handleEvent")}d(k,"$e42e1063c40fb3ef$export$b9ecd428b558ff10");function A(e){const t=r.useRef(e);return r.useEffect(()=>{t.current=e}),r.useMemo(()=>(...n)=>{var o;return(o=t.current)===null||o===void 0?void 0:o.call(t,...n)},[])}d(A,"$b1b2314f5f9a1d84$export$25bec8c6f54ee79a");function j({prop:e,defaultProp:t,onChange:n=d(()=>{},"onChange")}){const[o,c]=B({defaultProp:t,onChange:n}),s=e!==void 0,f=s?e:o,i=A(n),u=r.useCallback(a=>{if(s){const l=typeof a=="function"?a(e):a;l!==e&&i(l)}else c(a)},[s,e,c,i]);return[f,u]}d(j,"$71cd76cc60e0454e$export$6f32135080cb4c3");function B({defaultProp:e,onChange:t}){const n=r.useState(e),[o]=n,c=r.useRef(o),s=A(t);return r.useEffect(()=>{c.current!==o&&(s(o),c.current=o)},[o,c,s]),n}d(B,"$71cd76cc60e0454e$var$useUncontrolledState");function L(e){const t=r.useRef({value:e,previous:e});return r.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}d(L,"$010c2913dbd2fe3d$export$5cae361ad82dce8b");const E=Boolean(globalThis==null?void 0:globalThis.document)?r.useLayoutEffect:()=>{};function q(e){const[t,n]=r.useState(void 0);return E(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const o=new ResizeObserver(c=>{if(!Array.isArray(c)||!c.length)return;const s=c[0];let f,i;if("borderBoxSize"in s){const u=s.borderBoxSize,a=Array.isArray(u)?u[0]:u;f=a.inlineSize,i=a.blockSize}else f=e.offsetWidth,i=e.offsetHeight;n({width:f,height:i})});return o.observe(e,{box:"border-box"}),()=>o.unobserve(e)}else n(void 0)},[e]),t}d(q,"$db6c3485150b8e66$export$1ab7ae714698c4b8");function K(e,t){return r.useReducer((n,o)=>{const c=t[n][o];return c??n},e)}d(K,"$fe963b355347cc68$export$3e6543de14f8614f");const O=d(e=>{const{present:t,children:n}=e,o=F(t),c=typeof n=="function"?n({present:o.isPresent}):r.Children.only(n),s=y(o.ref,c.ref);return typeof n=="function"||o.isPresent?r.cloneElement(c,{ref:s}):null},"$921a889cee6df7e8$export$99c2b779aa4e8b8b");O.displayName="Presence";function F(e){const[t,n]=r.useState(),o=r.useRef({}),c=r.useRef(e),s=r.useRef("none"),f=e?"mounted":"unmounted",[i,u]=K(f,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return r.useEffect(()=>{const a=N(o.current);s.current=i==="mounted"?a:"none"},[i]),E(()=>{const a=o.current,$=c.current;if($!==e){const p=s.current,b=N(a);e?u("MOUNT"):b==="none"||(a==null?void 0:a.display)==="none"?u("UNMOUNT"):u($&&p!==b?"ANIMATION_OUT":"UNMOUNT"),c.current=e}},[e,u]),E(()=>{if(t){const a=d(l=>{const b=N(o.current).includes(l.animationName);l.target===t&&b&&U.flushSync(()=>u("ANIMATION_END"))},"handleAnimationEnd"),$=d(l=>{l.target===t&&(s.current=N(o.current))},"handleAnimationStart");return t.addEventListener("animationstart",$),t.addEventListener("animationcancel",a),t.addEventListener("animationend",a),()=>{t.removeEventListener("animationstart",$),t.removeEventListener("animationcancel",a),t.removeEventListener("animationend",a)}}else u("ANIMATION_END")},[t,u]),{isPresent:["mounted","unmountSuspended"].includes(i),ref:r.useCallback(a=>{a&&(o.current=getComputedStyle(a)),n(a)},[])}}d(F,"$921a889cee6df7e8$var$usePresence");function N(e){return(e==null?void 0:e.animationName)||"none"}d(N,"$921a889cee6df7e8$var$getAnimationName");function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},P.apply(this,arguments)}d(P,"_extends");const W=["a","button","div","h2","h3","img","label","li","nav","ol","p","span","svg","ul"],_=W.reduce((e,t)=>{const n=r.forwardRef((o,c)=>{const{asChild:s,...f}=o,i=s?I:t;return r.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),r.createElement(i,P({},f,{ref:c}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),M="Checkbox",[X,oe]=z(M),[H,G]=X(M),J=r.forwardRef((e,t)=>{const{__scopeCheckbox:n,name:o,checked:c,defaultChecked:s,required:f,disabled:i,value:u="on",onCheckedChange:a,...$}=e,[l,p]=r.useState(null),b=y(t,v=>p(v)),m=r.useRef(!1),g=l?Boolean(l.closest("form")):!0,[h=!1,w]=j({prop:c,defaultProp:s,onChange:a});return r.createElement(H,{scope:n,state:h,disabled:i},r.createElement(_.button,C({type:"button",role:"checkbox","aria-checked":x(h)?"mixed":h,"aria-required":f,"data-state":R(h),"data-disabled":i?"":void 0,disabled:i,value:u},$,{ref:b,onKeyDown:k(e.onKeyDown,v=>{v.key==="Enter"&&v.preventDefault()}),onClick:k(e.onClick,v=>{w(S=>x(S)?!0:!S),g&&(m.current=v.isPropagationStopped(),m.current||v.stopPropagation())})})),g&&r.createElement(Z,{control:l,bubbles:!m.current,name:o,value:u,checked:h,required:f,disabled:i,style:{transform:"translateX(-100%)"}}))}),Q="CheckboxIndicator",Y=r.forwardRef((e,t)=>{const{__scopeCheckbox:n,forceMount:o,...c}=e,s=G(Q,n);return r.createElement(O,{present:o||x(s.state)||s.state===!0},r.createElement(_.span,C({"data-state":R(s.state),"data-disabled":s.disabled?"":void 0},c,{ref:t,style:{pointerEvents:"none",...e.style}})))}),Z=d(e=>{const{control:t,checked:n,bubbles:o=!0,...c}=e,s=r.useRef(null),f=L(n),i=q(t);return r.useEffect(()=>{const u=s.current,a=window.HTMLInputElement.prototype,l=Object.getOwnPropertyDescriptor(a,"checked").set;if(f!==n&&l){const p=new Event("click",{bubbles:o});u.indeterminate=x(n),l.call(u,x(n)?!1:n),u.dispatchEvent(p)}},[f,n,o]),r.createElement("input",C({type:"checkbox","aria-hidden":!0,defaultChecked:x(n)?!1:n},c,{tabIndex:-1,ref:s,style:{...e.style,...i,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))},"$e698a72e93240346$var$BubbleInput");function x(e){return e==="indeterminate"}d(x,"$e698a72e93240346$var$isIndeterminate");function R(e){return x(e)?"indeterminate":e?"checked":"unchecked"}d(R,"$e698a72e93240346$var$getState");const re=J,ce=Y;export{re as $,ce as a,J as b};
//# sourceMappingURL=index.module-0cd8c641.js.map
