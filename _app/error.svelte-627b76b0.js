import{S as w,i as y,s as z,e as v,t as E,c as b,a as d,g as P,d as n,f as u,H as R,h as j,j as H,k as h,l as N,I as q}from"./chunks/vendor-9b96e2b7.js";function C(r){let f,t=r[1].frame+"",a;return{c(){f=v("pre"),a=E(t)},l(l){f=b(l,"PRE",{});var s=d(f);a=P(s,t),s.forEach(n)},m(l,s){u(l,f,s),R(f,a)},p(l,s){s&2&&t!==(t=l[1].frame+"")&&j(a,t)},d(l){l&&n(f)}}}function I(r){let f,t=r[1].stack+"",a;return{c(){f=v("pre"),a=E(t)},l(l){f=b(l,"PRE",{});var s=d(f);a=P(s,t),s.forEach(n)},m(l,s){u(l,f,s),R(f,a)},p(l,s){s&2&&t!==(t=l[1].stack+"")&&j(a,t)},d(l){l&&n(f)}}}function A(r){let f,t,a,l,s=r[1].message+"",c,k,m,p,i=r[1].frame&&C(r),o=r[1].stack&&I(r);return{c(){f=v("h1"),t=E(r[0]),a=H(),l=v("pre"),c=E(s),k=H(),i&&i.c(),m=H(),o&&o.c(),p=h()},l(e){f=b(e,"H1",{});var _=d(f);t=P(_,r[0]),_.forEach(n),a=N(e),l=b(e,"PRE",{});var S=d(l);c=P(S,s),S.forEach(n),k=N(e),i&&i.l(e),m=N(e),o&&o.l(e),p=h()},m(e,_){u(e,f,_),R(f,t),u(e,a,_),u(e,l,_),R(l,c),u(e,k,_),i&&i.m(e,_),u(e,m,_),o&&o.m(e,_),u(e,p,_)},p(e,[_]){_&1&&j(t,e[0]),_&2&&s!==(s=e[1].message+"")&&j(c,s),e[1].frame?i?i.p(e,_):(i=C(e),i.c(),i.m(m.parentNode,m)):i&&(i.d(1),i=null),e[1].stack?o?o.p(e,_):(o=I(e),o.c(),o.m(p.parentNode,p)):o&&(o.d(1),o=null)},i:q,o:q,d(e){e&&n(f),e&&n(a),e&&n(l),e&&n(k),i&&i.d(e),e&&n(m),o&&o.d(e),e&&n(p)}}}function F({error:r,status:f}){return{props:{error:r,status:f}}}function B(r,f,t){let{status:a}=f,{error:l}=f;return r.$$set=s=>{"status"in s&&t(0,a=s.status),"error"in s&&t(1,l=s.error)},[a,l]}class G extends w{constructor(f){super();y(this,f,B,A,z,{status:0,error:1})}}export{G as default,F as load};
