import{S as at,i as ot,s as st,e as V,a as K,g as he,t as F,c as me,b as B,d as J,f as it,o as Pe,h as lt,j as ct,k as ft,l as ke,m as q,n as ut,p as dt,q as pt,r as W,u as Y,v as Ne,w as X,x as Z,y as ce}from"./chunks/index-03c6fbe9.js";import{S as nt,I as C,g as We,f as Ye,a as Se,b as fe,s as G,i as Xe,c as pe,P as Ze,d as ht,e as mt}from"./chunks/singletons-981622f6.js";import{_ as z}from"./chunks/preload-helper-41c905a7.js";import{s as _t}from"./chunks/paths-b4419565.js";function gt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function wt(r){return r.split("%25").map(decodeURI).join("%25")}function yt(r){for(const e in r)r[e]=decodeURIComponent(r[e]);return r}const bt=["href","pathname","search","searchParams","toString","toJSON"];function vt(r,e){const n=new URL(r);for(const i of bt){let s=n[i];Object.defineProperty(n,i,{get(){return e(),s},enumerable:!0,configurable:!0})}return Et(n),n}function Et(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const kt="/__data.json";function St(r){return r.replace(/\/$/,"")+kt}function Rt(r){let e=5381;if(typeof r=="string"){let n=r.length;for(;n;)e=e*33^r.charCodeAt(--n)}else if(ArrayBuffer.isView(r)){const n=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let i=n.length;for(;i;)e=e*33^n[--i]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const _e=window.fetch;window.fetch=(r,e)=>((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"&&te.delete(Ue(r)),_e(r,e));const te=new Map;function Ot(r,e){const n=Ue(r,e),i=document.querySelector(n);if(i!=null&&i.textContent){const{body:s,...m}=JSON.parse(i.textContent),t=i.getAttribute("data-ttl");return t&&te.set(n,{body:s,init:m,ttl:1e3*Number(t)}),Promise.resolve(new Response(s,m))}return _e(r,e)}function It(r,e,n){if(te.size>0){const i=Ue(r,n),s=te.get(i);if(s){if(performance.now()<s.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(s.body,s.init);te.delete(i)}}return _e(e,n)}function Ue(r,e){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;return(e==null?void 0:e.body)&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(i+=`[data-hash="${Rt(e.body)}"]`),i}const Lt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Pt(r){const e=[];return{pattern:r==="/"?/^\/$/:new RegExp(`^${jt(r).map(i=>{const s=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(i);if(s)return e.push({name:s[1],matcher:s[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const m=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(i);if(m)return e.push({name:m[1],matcher:m[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!i)return;const t=i.split(/\[(.+?)\](?!\])/);return"/"+t.map((h,_)=>{if(_%2){if(h.startsWith("x+"))return Re(String.fromCharCode(parseInt(h.slice(2),16)));if(h.startsWith("u+"))return Re(String.fromCharCode(...h.slice(2).split("-").map($=>parseInt($,16))));const w=Lt.exec(h);if(!w)throw new Error(`Invalid param: ${h}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,v,S,U,T]=w;return e.push({name:U,matcher:T,optional:!!v,rest:!!S,chained:S?_===1&&t[0]==="":!1}),S?"(.*?)":v?"([^/]*)?":"([^/]+?)"}return Re(h)}).join("")}).join("")}/?$`),params:e}}function $t(r){return!/^\([^)]+\)$/.test(r)}function jt(r){return r.slice(1).split("/").filter($t)}function At(r,e,n){const i={},s=r.slice(1);let m="";for(let t=0;t<e.length;t+=1){const f=e[t];let h=s[t];if(f.chained&&f.rest&&m&&(h=h?m+"/"+h:m),m="",h===void 0)f.rest&&(i[f.name]="");else{if(f.matcher&&!n[f.matcher](h)){if(f.optional&&f.chained){let _=s.indexOf(void 0,t);if(_===-1){const w=e[t+1];if((w==null?void 0:w.rest)&&w.chained)m=h;else return}for(;_>=t;)s[_]=s[_-1],_-=1;continue}return}i[f.name]=h}}if(!m)return i}function Re(r){return r.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Nt(r,e,n,i){const s=new Set(e);return Object.entries(n).map(([f,[h,_,w]])=>{const{pattern:v,params:S}=Pt(f),U={id:f,exec:T=>{const $=v.exec(T);if($)return At($,S,i)},errors:[1,...w||[]].map(T=>r[T]),layouts:[0,..._||[]].map(t),leaf:m(h)};return U.errors.length=U.layouts.length=Math.max(U.errors.length,U.layouts.length),U});function m(f){const h=f<0;return h&&(f=~f),[h,r[f]]}function t(f){return f===void 0?f:[s.has(f),r[f]]}}function Ut(r){let e,n,i;var s=r[0][0];function m(t){return{props:{data:t[2],form:t[1]}}}return s&&(e=W(s,m(r))),{c(){e&&Y(e.$$.fragment),n=V()},l(t){e&&Ne(e.$$.fragment,t),n=V()},m(t,f){e&&X(e,t,f),K(t,n,f),i=!0},p(t,f){const h={};if(f&4&&(h.data=t[2]),f&2&&(h.form=t[1]),s!==(s=t[0][0])){if(e){he();const _=e;F(_.$$.fragment,1,0,()=>{Z(_,1)}),me()}s?(e=W(s,m(t)),Y(e.$$.fragment),B(e.$$.fragment,1),X(e,n.parentNode,n)):e=null}else s&&e.$set(h)},i(t){i||(e&&B(e.$$.fragment,t),i=!0)},o(t){e&&F(e.$$.fragment,t),i=!1},d(t){t&&J(n),e&&Z(e,t)}}}function Tt(r){let e,n,i;var s=r[0][0];function m(t){return{props:{data:t[2],$$slots:{default:[Dt]},$$scope:{ctx:t}}}}return s&&(e=W(s,m(r))),{c(){e&&Y(e.$$.fragment),n=V()},l(t){e&&Ne(e.$$.fragment,t),n=V()},m(t,f){e&&X(e,t,f),K(t,n,f),i=!0},p(t,f){const h={};if(f&4&&(h.data=t[2]),f&523&&(h.$$scope={dirty:f,ctx:t}),s!==(s=t[0][0])){if(e){he();const _=e;F(_.$$.fragment,1,0,()=>{Z(_,1)}),me()}s?(e=W(s,m(t)),Y(e.$$.fragment),B(e.$$.fragment,1),X(e,n.parentNode,n)):e=null}else s&&e.$set(h)},i(t){i||(e&&B(e.$$.fragment,t),i=!0)},o(t){e&&F(e.$$.fragment,t),i=!1},d(t){t&&J(n),e&&Z(e,t)}}}function Dt(r){let e,n,i;var s=r[0][1];function m(t){return{props:{data:t[3],form:t[1]}}}return s&&(e=W(s,m(r))),{c(){e&&Y(e.$$.fragment),n=V()},l(t){e&&Ne(e.$$.fragment,t),n=V()},m(t,f){e&&X(e,t,f),K(t,n,f),i=!0},p(t,f){const h={};if(f&8&&(h.data=t[3]),f&2&&(h.form=t[1]),s!==(s=t[0][1])){if(e){he();const _=e;F(_.$$.fragment,1,0,()=>{Z(_,1)}),me()}s?(e=W(s,m(t)),Y(e.$$.fragment),B(e.$$.fragment,1),X(e,n.parentNode,n)):e=null}else s&&e.$set(h)},i(t){i||(e&&B(e.$$.fragment,t),i=!0)},o(t){e&&F(e.$$.fragment,t),i=!1},d(t){t&&J(n),e&&Z(e,t)}}}function Qe(r){let e,n=r[5]&&xe(r);return{c(){e=lt("div"),n&&n.c(),this.h()},l(i){e=ct(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=ft(e);n&&n.l(s),s.forEach(J),this.h()},h(){ke(e,"id","svelte-announcer"),ke(e,"aria-live","assertive"),ke(e,"aria-atomic","true"),q(e,"position","absolute"),q(e,"left","0"),q(e,"top","0"),q(e,"clip","rect(0 0 0 0)"),q(e,"clip-path","inset(50%)"),q(e,"overflow","hidden"),q(e,"white-space","nowrap"),q(e,"width","1px"),q(e,"height","1px")},m(i,s){K(i,e,s),n&&n.m(e,null)},p(i,s){i[5]?n?n.p(i,s):(n=xe(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&J(e),n&&n.d()}}}function xe(r){let e;return{c(){e=ut(r[6])},l(n){e=dt(n,r[6])},m(n,i){K(n,e,i)},p(n,i){i&64&&pt(e,n[6])},d(n){n&&J(e)}}}function Vt(r){let e,n,i,s,m;const t=[Tt,Ut],f=[];function h(w,v){return w[0][1]?0:1}e=h(r),n=f[e]=t[e](r);let _=r[4]&&Qe(r);return{c(){n.c(),i=V(),_&&_.c(),s=V()},l(w){n.l(w),i=V(),_&&_.l(w),s=V()},m(w,v){f[e].m(w,v),K(w,i,v),_&&_.m(w,v),K(w,s,v),m=!0},p(w,[v]){let S=e;e=h(w),e===S?f[e].p(w,v):(he(),F(f[S],1,1,()=>{f[S]=null}),me(),n=f[e],n?n.p(w,v):(n=f[e]=t[e](w),n.c()),B(n,1),n.m(i.parentNode,i)),w[4]?_?_.p(w,v):(_=Qe(w),_.c(),_.m(s.parentNode,s)):_&&(_.d(1),_=null)},i(w){m||(B(n),m=!0)},o(w){F(n),m=!1},d(w){f[e].d(w),w&&J(i),_&&_.d(w),w&&J(s)}}}function qt(r,e,n){let{stores:i}=e,{page:s}=e,{components:m}=e,{form:t}=e,{data_0:f=null}=e,{data_1:h=null}=e;it(i.page.notify);let _=!1,w=!1,v=null;return Pe(()=>{const S=i.page.subscribe(()=>{_&&(n(5,w=!0),n(6,v=document.title||"untitled page"))});return n(4,_=!0),S}),r.$$set=S=>{"stores"in S&&n(7,i=S.stores),"page"in S&&n(8,s=S.page),"components"in S&&n(0,m=S.components),"form"in S&&n(1,t=S.form),"data_0"in S&&n(2,f=S.data_0),"data_1"in S&&n(3,h=S.data_1)},r.$$.update=()=>{r.$$.dirty&384&&i.page.set(s)},[m,t,f,h,_,w,v,i,s]}class Ct extends at{constructor(e){super(),ot(this,e,qt,Vt,st,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Ft={},ge=[()=>z(()=>import("./chunks/0-86b18c23.js"),["./chunks/0-86b18c23.js","./chunks/_layout-da46b06b.js","./components/pages/_layout.svelte-9900cb4c.js","./chunks/index-03c6fbe9.js","./chunks/paths-b4419565.js","./chunks/IconBase-284ed854.js","./assets/IconBase-d93538e2.css","./assets/_layout-a2111cc4.css"],import.meta.url),()=>z(()=>import("./chunks/1-99ed1910.js"),["./chunks/1-99ed1910.js","./components/error.svelte-a73e1752.js","./chunks/index-03c6fbe9.js","./chunks/singletons-981622f6.js","./chunks/index-0a7d73c5.js","./chunks/paths-b4419565.js"],import.meta.url),()=>z(()=>import("./chunks/2-e761f538.js"),["./chunks/2-e761f538.js","./components/pages/_page.svelte-f8c4c9c5.js","./chunks/index-03c6fbe9.js","./chunks/paths-b4419565.js"],import.meta.url),()=>z(()=>import("./chunks/3-f86aa140.js"),["./chunks/3-f86aa140.js","./components/pages/default/_page.svelte-29726988.js","./chunks/index-03c6fbe9.js","./chunks/Editable-eb2b4071.js","./chunks/index-0a7d73c5.js","./assets/Editable-4e0c96a4.css"],import.meta.url),()=>z(()=>import("./chunks/4-8d567c8c.js"),["./chunks/4-8d567c8c.js","./components/pages/huge-document/_page.svelte-3deba07c.js","./chunks/index-03c6fbe9.js","./chunks/Editable-eb2b4071.js","./chunks/index-0a7d73c5.js","./assets/Editable-4e0c96a4.css","./chunks/HoveringToolbar-98f631e3.js","./chunks/IconBase-284ed854.js","./assets/IconBase-d93538e2.css","./chunks/preload-helper-41c905a7.js","./assets/HoveringToolbar-15aeedb2.css","./assets/_page-4ad228cf.css"],import.meta.url),()=>z(()=>import("./chunks/5-25294411.js"),["./chunks/5-25294411.js","./components/pages/plugins/_page.svelte-6887cb7b.js","./chunks/index-03c6fbe9.js","./chunks/Editable-eb2b4071.js","./chunks/index-0a7d73c5.js","./assets/Editable-4e0c96a4.css","./chunks/HoveringToolbar-98f631e3.js","./chunks/IconBase-284ed854.js","./assets/IconBase-d93538e2.css","./chunks/preload-helper-41c905a7.js","./assets/HoveringToolbar-15aeedb2.css","./assets/_page-4ad228cf.css"],import.meta.url)],Bt=[],Jt={"/":[2],"/default":[3],"/huge-document":[4],"/plugins":[5]},Mt={handleError:({error:r})=>{console.error(r)}};class $e{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class et{constructor(e,n){this.status=e,this.location=n}}async function Gt(r){var e;for(const n in r)if(typeof((e=r[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([i,s])=>[i,await s])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Kt=-1,Ht=-2,zt=-3,Wt=-4,Yt=-5,Xt=-6;function Zt(r){if(typeof r=="number")return i(r,!0);if(!Array.isArray(r)||r.length===0)throw new Error("Invalid input");const e=r,n=Array(e.length);function i(s,m=!1){if(s===Kt)return;if(s===zt)return NaN;if(s===Wt)return 1/0;if(s===Yt)return-1/0;if(s===Xt)return-0;if(m)throw new Error("Invalid input");if(s in n)return n[s];const t=e[s];if(!t||typeof t!="object")n[s]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[s]=new Date(t[1]);break;case"Set":const h=new Set;n[s]=h;for(let v=1;v<t.length;v+=1)h.add(i(t[v]));break;case"Map":const _=new Map;n[s]=_;for(let v=1;v<t.length;v+=2)_.set(i(t[v]),i(t[v+1]));break;case"RegExp":n[s]=new RegExp(t[1],t[2]);break;case"Object":n[s]=Object(t[1]);break;case"BigInt":n[s]=BigInt(t[1]);break;case"null":const w=Object.create(null);n[s]=w;for(let v=1;v<t.length;v+=2)w[t[v]]=i(t[v+1]);break}else{const f=new Array(t.length);n[s]=f;for(let h=0;h<t.length;h+=1){const _=t[h];_!==Ht&&(f[h]=i(_))}}else{const f={};n[s]=f;for(const h in t){const _=t[h];f[h]=i(_)}}return n[s]}return i(0)}const Oe=Nt(ge,Bt,Jt,Ft),je=ge[0],Ae=ge[1];je();Ae();let ne={};try{ne=JSON.parse(sessionStorage[nt])}catch{}function Ie(r){ne[r]=pe()}function Qt({target:r,base:e}){var Ke;const n=document.documentElement,i=[];let s=null;const m={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},f=!1,h=!1,_=!0,w=!1,v=!1,S=!1,U=!1,T,$=(Ke=history.state)==null?void 0:Ke[C];$||($=Date.now(),history.replaceState({...history.state,[C]:$},"",location.href));const we=ne[$];we&&(history.scrollRestoration="manual",scrollTo(we.x,we.y));let M,Te,re;async function De(){re=re||Promise.resolve(),await re,re=null;const a=new URL(location.href),o=se(a,!0);s=null,await qe(o,a,[])}async function ye(a,{noScroll:o=!1,replaceState:c=!1,keepFocus:l=!1,state:d={},invalidateAll:u=!1},p,b){return typeof a=="string"&&(a=new URL(a,We(document))),ie({url:a,scroll:o?pe():null,keepfocus:l,redirect_chain:p,details:{state:d,replaceState:c},nav_token:b,accepted:()=>{u&&(U=!0)},blocked:()=>{},type:"goto"})}async function Ve(a){const o=se(a,!1);if(!o)throw new Error(`Attempted to preload a URL that does not belong to this app: ${a}`);return s={id:o.id,promise:Be(o).then(c=>(c.type==="loaded"&&c.state.error&&(s=null),c))},s.promise}async function ae(...a){const c=Oe.filter(l=>a.some(d=>l.exec(d))).map(l=>Promise.all([...l.layouts,l.leaf].map(d=>d==null?void 0:d[1]())));await Promise.all(c)}async function qe(a,o,c,l,d={},u){var b,y;Te=d;let p=a&&await Be(a);if(p||(p=await Ge(o,{id:null},await ee(new Error(`Not found: ${o.pathname}`),{url:o,params:{},route:{id:null}}),404)),o=(a==null?void 0:a.url)||o,Te!==d)return!1;if(p.type==="redirect")if(c.length>10||c.includes(o.pathname))p=await oe({status:500,error:await ee(new Error("Redirect loop"),{url:o,params:{},route:{id:null}}),url:o,route:{id:null}});else return ye(new URL(p.location,o).href,{},[...c,o.pathname],d),!1;else((y=(b=p.props)==null?void 0:b.page)==null?void 0:y.status)>=400&&await G.updated.check()&&await le(o);if(i.length=0,U=!1,w=!0,l&&l.details){const{details:g}=l,O=g.replaceState?0:1;g.state[C]=$+=O,history[g.replaceState?"replaceState":"pushState"](g.state,"",o)}if(s=null,h){t=p.state,p.props.page&&(p.props.page.url=o);const g=de();T.$set(p.props),g()}else Ce(p);if(l){const{scroll:g,keepfocus:O}=l;if(O||Le(),await ce(),_){const I=o.hash&&document.getElementById(o.hash.slice(1));g?scrollTo(g.x,g.y):I?I.scrollIntoView():scrollTo(0,0)}}else await ce();_=!0,p.props.page&&(M=p.props.page),u&&u(),w=!1}function Ce(a){var d;t=a.state;const o=document.querySelector("style[data-sveltekit]");o&&o.remove(),M=a.props.page;const c=de();T=new Ct({target:r,props:{...a.props,stores:G},hydrate:!0}),c();const l={from:null,to:ue("to",{params:t.params,route:{id:((d=t.route)==null?void 0:d.id)??null},url:new URL(location.href)}),willUnload:!1,type:"enter"};m.after_navigate.forEach(u=>u(l)),h=!0}async function Q({url:a,params:o,branch:c,status:l,error:d,route:u,form:p}){const b=c.filter(Boolean);let y="never";for(const R of c)(R==null?void 0:R.slash)!==void 0&&(y=R.slash);a.pathname=gt(a.pathname,y),a.search=a.search;const g={type:"loaded",state:{url:a,params:o,branch:c,error:d,route:u},props:{components:b.map(R=>R.node.component)}};p!==void 0&&(g.props.form=p);let O={},I=!M;for(let R=0;R<b.length;R+=1){const E=b[R];O={...O,...E.data},(I||!t.branch.some(j=>j===E))&&(g.props[`data_${R}`]=O,I=I||Object.keys(E.data??{}).length>0)}if(I||(I=Object.keys(M.data).length!==Object.keys(O).length),!t.url||a.href!==t.url.href||t.error!==d||p!==void 0||I){g.props.page={error:d,params:o,route:u,status:l,url:new URL(a),form:p??null,data:I?O:M.data},Object.defineProperty(g.props.page,"routeId",{get(){throw new Error("$page.routeId has been replaced by $page.route.id")},enumerable:!1});const R=(E,j)=>{Object.defineProperty(g.props.page,E,{get:()=>{throw new Error(`$page.${E} has been replaced by $page.url.${j}`)}})};R("origin","origin"),R("path","pathname"),R("query","searchParams")}return g}async function be({loader:a,parent:o,url:c,params:l,route:d,server_data_node:u}){var g,O,I;let p=null;const b={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},y=await a();if((g=y.shared)!=null&&g.load){let D=function(...E){for(const j of E){const{href:N}=new URL(j,c);b.dependencies.add(N)}};const R={route:{get id(){return b.route=!0,d.id}},params:new Proxy(l,{get:(E,j)=>(b.params.add(j),E[j])}),data:(u==null?void 0:u.data)??null,url:vt(c,()=>{b.url=!0}),async fetch(E,j){let N;E instanceof Request?(N=E.url,j={body:E.method==="GET"||E.method==="HEAD"?void 0:await E.blob(),cache:E.cache,credentials:E.credentials,headers:E.headers,integrity:E.integrity,keepalive:E.keepalive,method:E.method,mode:E.mode,redirect:E.redirect,referrer:E.referrer,referrerPolicy:E.referrerPolicy,signal:E.signal,...j}):N=E;const k=new URL(N,c).href;return D(k),h?It(N,k,j):Ot(N,j)},setHeaders:()=>{},depends:D,parent(){return b.parent=!0,o()}};Object.defineProperties(R,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},routeId:{get(){throw new Error("routeId has been replaced by route.id")},enumerable:!1}}),p=await y.shared.load.call(null,R)??null,p=p?await Gt(p):null}return{node:y,loader:a,server:u,shared:(O=y.shared)!=null&&O.load?{type:"data",data:p,uses:b}:null,data:p??(u==null?void 0:u.data)??null,slash:((I=y.shared)==null?void 0:I.trailingSlash)??(u==null?void 0:u.slash)}}function Fe(a,o,c,l,d){if(U)return!0;if(!l)return!1;if(l.parent&&a||l.route&&o||l.url&&c)return!0;for(const u of l.params)if(d[u]!==t.params[u])return!0;for(const u of l.dependencies)if(i.some(p=>p(new URL(u))))return!0;return!1}function ve(a,o){return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set(a.uses.dependencies??[]),params:new Set(a.uses.params??[]),parent:!!a.uses.parent,route:!!a.uses.route,url:!!a.uses.url},slash:a.slash}:(a==null?void 0:a.type)==="skip"?o??null:null}async function Be({id:a,invalidating:o,url:c,params:l,route:d}){if((s==null?void 0:s.id)===a)return s.promise;const{errors:u,layouts:p,leaf:b}=d,y=[...p,b];u.forEach(k=>k==null?void 0:k().catch(()=>{})),y.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let g=null;const O=t.url?a!==t.url.pathname+t.url.search:!1,I=t.route?a!==t.route.id:!1,D=y.reduce((k,P,A)=>{var x;const L=t.branch[A],H=!!(P!=null&&P[0])&&((L==null?void 0:L.loader)!==P[1]||Fe(k.some(Boolean),I,O,(x=L.server)==null?void 0:x.uses,l));return k.push(H),k},[]);if(D.some(Boolean)){try{g=await tt(c,D)}catch(k){return oe({status:500,error:await ee(k,{url:c,params:l,route:{id:d.id}}),url:c,route:d})}if(g.type==="redirect")return g}const R=g==null?void 0:g.nodes;let E=!1;const j=y.map(async(k,P)=>{var x;if(!k)return;const A=t.branch[P],L=R==null?void 0:R[P];if((!L||L.type==="skip")&&k[1]===(A==null?void 0:A.loader)&&!Fe(E,I,O,(x=A.shared)==null?void 0:x.uses,l))return A;if(E=!0,(L==null?void 0:L.type)==="error")throw L;return be({loader:k[1],url:c,params:l,route:d,parent:async()=>{var ze;const He={};for(let Ee=0;Ee<P;Ee+=1)Object.assign(He,(ze=await j[Ee])==null?void 0:ze.data);return He},server_data_node:ve(L===void 0&&k[0]?{type:"skip"}:L??null,A==null?void 0:A.server)})});for(const k of j)k.catch(()=>{});const N=[];for(let k=0;k<y.length;k+=1)if(y[k])try{N.push(await j[k])}catch(P){if(P instanceof et)return{type:"redirect",location:P.location};let A=500,L;R!=null&&R.includes(P)?(A=P.status??A,L=P.error):P instanceof $e?(A=P.status,L=P.body):L=await ee(P,{params:l,url:c,route:{id:d.id}});const H=await Je(k,N,u);return H?await Q({url:c,params:l,branch:N.slice(0,H.idx).concat(H.node),status:A,error:L,route:d}):await Ge(c,{id:d.id},L,A)}else N.push(void 0);return await Q({url:c,params:l,branch:N,status:200,error:null,route:d,form:o?void 0:null})}async function Je(a,o,c){for(;a--;)if(c[a]){let l=a;for(;!o[l];)l-=1;try{return{idx:l+1,node:{node:await c[a](),loader:c[a],data:{},server:null,shared:null}}}catch{continue}}}async function oe({status:a,error:o,url:c,route:l}){const d={},u=await je();let p=null;if(u.server)try{const g=await tt(c,[!0]);if(g.type!=="data"||g.nodes[0]&&g.nodes[0].type!=="data")throw 0;p=g.nodes[0]??null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||f)&&await le(c)}const b=await be({loader:je,url:c,params:d,route:l,parent:()=>Promise.resolve({}),server_data_node:ve(p)}),y={node:await Ae(),loader:Ae,shared:null,server:null,data:null};return await Q({url:c,params:d,branch:[b,y],status:a,error:o,route:null})}function se(a,o){if(Xe(a,e))return;const c=wt(a.pathname.slice(e.length)||"/");for(const l of Oe){const d=l.exec(c);if(d)return{id:a.pathname+a.search,invalidating:o,route:l,params:yt(d),url:a}}}function Me({url:a,type:o,intent:c,delta:l}){var b,y;let d=!1;const u={from:ue("from",{params:t.params,route:{id:((b=t.route)==null?void 0:b.id)??null},url:t.url}),to:ue("to",{params:(c==null?void 0:c.params)??null,route:{id:((y=c==null?void 0:c.route)==null?void 0:y.id)??null},url:a}),willUnload:!c,type:o};l!==void 0&&(u.delta=l);const p={...u,cancel:()=>{d=!0}};return v||m.before_navigate.forEach(g=>g(p)),d?null:u}async function ie({url:a,scroll:o,keepfocus:c,redirect_chain:l,details:d,type:u,delta:p,nav_token:b,accepted:y,blocked:g}){const O=se(a,!1),I=Me({url:a,type:u,delta:p,intent:O});if(!I){g();return}Ie($),y(),v=!0,h&&G.navigating.set(I),await qe(O,a,l,{scroll:o,keepfocus:c,details:d},b,()=>{v=!1,m.after_navigate.forEach(D=>D(I)),G.navigating.set(null)})}async function Ge(a,o,c,l){return a.origin===location.origin&&a.pathname===location.pathname&&!f?await oe({status:l,error:c,url:a,route:o}):await le(a)}function le(a){return location.href=a.href,new Promise(()=>{})}function rt(){let a;n.addEventListener("mousemove",u=>{const p=u.target;clearTimeout(a),a=setTimeout(()=>{l(p,2)},20)});function o(u){l(u.composedPath()[0],1)}n.addEventListener("mousedown",o),n.addEventListener("touchstart",o,{passive:!0});const c=new IntersectionObserver(u=>{for(const p of u)p.isIntersecting&&(ae(new URL(p.target.href).pathname),c.unobserve(p.target))},{threshold:0});function l(u,p){const b=Ye(u,n);if(!b)return;const{url:y,external:g}=Se(b,e);if(g)return;const O=fe(b);O.reload||(p<=O.preload_data?Ve(y):p<=O.preload_code&&ae(y.pathname))}function d(){c.disconnect();for(const u of n.querySelectorAll("a")){const{url:p,external:b}=Se(u,e);if(b)continue;const y=fe(u);y.reload||(y.preload_code===Ze.viewport&&c.observe(u),y.preload_code===Ze.eager&&ae(p.pathname))}}m.after_navigate.push(d),d()}return{after_navigate:a=>{Pe(()=>(m.after_navigate.push(a),()=>{const o=m.after_navigate.indexOf(a);m.after_navigate.splice(o,1)}))},before_navigate:a=>{Pe(()=>(m.before_navigate.push(a),()=>{const o=m.before_navigate.indexOf(a);m.before_navigate.splice(o,1)}))},disable_scroll_handling:()=>{(w||!h)&&(_=!1)},goto:(a,o={})=>{if("keepfocus"in o&&!("keepFocus"in o))throw new Error("`keepfocus` has been renamed to `keepFocus` (note the difference in casing)");if("noscroll"in o&&!("noScroll"in o))throw new Error("`noscroll` has been renamed to `noScroll` (note the difference in casing)");return ye(a,o,[])},invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")i.push(a);else{const{href:o}=new URL(a,location.href);i.push(c=>c.href===o)}return De()},invalidateAll:()=>(U=!0,De()),preload_data:async a=>{const o=new URL(a,We(document));await Ve(o)},preload_code:ae,apply_action:async a=>{if(a.type==="error"){const o=new URL(location.href),{branch:c,route:l}=t;if(!l)return;const d=await Je(t.branch.length,c,l.errors);if(d){const u=await Q({url:o,params:t.params,branch:c.slice(0,d.idx).concat(d.node),status:500,error:a.error,route:l});t=u.state;const p=de();T.$set(u.props),p(),ce().then(Le)}}else if(a.type==="redirect")ye(a.location,{invalidateAll:!0},[]);else{const o={form:a.data,page:{...M,form:a.data,status:a.status}},c=de();T.$set(o),c(),a.type==="success"&&ce().then(Le)}},_start_router:()=>{var a;history.scrollRestoration="manual",addEventListener("beforeunload",o=>{var l;let c=!1;if(!v){const d={from:ue("from",{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:t.url}),to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};m.before_navigate.forEach(u=>u(d))}c?(o.preventDefault(),o.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Ie($);try{sessionStorage[nt]=JSON.stringify(ne)}catch{}}}),(a=navigator.connection)!=null&&a.saveData||rt(),n.addEventListener("click",o=>{if(o.button||o.which!==1||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.defaultPrevented)return;const c=Ye(o.composedPath()[0],n);if(!c)return;const{url:l,external:d,has:u}=Se(c,e),p=fe(c);if(!l||!(c instanceof SVGAElement)&&l.protocol!==location.protocol&&!(l.protocol==="https:"||l.protocol==="http:")||u.download)return;if(d||p.reload){Me({url:l,type:"link"})||o.preventDefault(),v=!0;return}const[y,g]=l.href.split("#");if(g!==void 0&&y===location.href.split("#")[0]){S=!0,Ie($),t.url=l,G.page.set({...M,url:l}),G.page.notify();return}ie({url:l,scroll:p.noscroll?pe():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:l.href===location.href},accepted:()=>o.preventDefault(),blocked:()=>o.preventDefault(),type:"link"})}),n.addEventListener("submit",o=>{var y;if(o.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(o.target),l=o.submitter;if(((l==null?void 0:l.formMethod)||c.method)!=="get")return;const u=new URL(((y=o.submitter)==null?void 0:y.hasAttribute("formaction"))&&(l==null?void 0:l.formAction)||c.action);if(Xe(u,e))return;const{noscroll:p,reload:b}=fe(o.target);b||(o.preventDefault(),o.stopPropagation(),u.search=new URLSearchParams(new FormData(o.target)).toString(),ie({url:u,scroll:p?pe():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"}))}),addEventListener("popstate",o=>{var c;if((c=o.state)!=null&&c[C]){if(o.state[C]===$)return;const l=o.state[C]-$;ie({url:new URL(location.href),scroll:ne[o.state[C]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{$=o.state[C]},blocked:()=>{history.go(-l)},type:"popstate",delta:l})}}),addEventListener("hashchange",()=>{S&&(S=!1,history.replaceState({...history.state,[C]:++$},"",location.href))});for(const o of document.querySelectorAll("link"))o.rel==="icon"&&(o.href=o.href);addEventListener("pageshow",o=>{o.persisted&&G.navigating.set(null)})},_hydrate:async({status:a=200,error:o,node_ids:c,params:l,route:d,data:u,form:p})=>{f=!0;const b=new URL(location.href);({params:l={},route:d={id:null}}=se(b,!1)||{});let y;try{const g=c.map(async(O,I)=>{const D=u[I];return be({loader:ge[O],url:b,params:l,route:d,parent:async()=>{const R={};for(let E=0;E<I;E+=1)Object.assign(R,(await g[E]).data);return R},server_data_node:ve(D)})});y=await Q({url:b,params:l,branch:await Promise.all(g),status:a,error:o,form:p,route:Oe.find(({id:O})=>O===d.id)??null})}catch(g){if(g instanceof et){await le(new URL(g.location,location.href));return}y=await oe({status:g instanceof $e?g.status:500,error:await ee(g,{url:b,params:l,route:d}),url:b,route:d})}Ce(y)}}}async function tt(r,e){var m;const n=new URL(r);n.pathname=St(r.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const i=await _e(n.href),s=await i.json();if(!i.ok)throw new Error(s);return(m=s.nodes)==null||m.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=Zt(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),s}function ee(r,e){return r instanceof $e?r.body:Mt.handleError({error:r,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}const xt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function ue(r,e){for(const n of xt)Object.defineProperty(e,n,{get(){throw new Error(`The navigation shape changed - ${r}.${n} should now be ${r}.url.${n}`)},enumerable:!1});return Object.defineProperty(e,"routeId",{get(){throw new Error(`The navigation shape changed - ${r}.routeId should now be ${r}.route.id`)},enumerable:!1}),e}function de(){return()=>{}}function Le(){const r=document.querySelector("[autofocus]");if(r)r.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var i;(i=getSelection())==null||i.removeAllRanges()}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex")}}async function an({env:r,hydrate:e,paths:n,target:i,version:s}){_t(n),mt(s);const m=Qt({target:i,base:n.base});ht({client:m}),e?await m._hydrate(e):m.goto(location.href,{replaceState:!0}),m._start_router()}export{an as start};
