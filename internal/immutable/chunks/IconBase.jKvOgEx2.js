import{s as w,x as B,r as m,e as u,u as v,f as h,d as _,g as r,i as d,z as g,A as p,B as b,C as k,j as C,k as E,l as I}from"./scheduler.vOps6Zji.js";import{S,i as j,a as q,t as x}from"./index.nYzQeYb_.js";function c(n){let e,a;return{c(){e=m("title"),a=C(n[0])},l(l){e=v(l,"title",{});var t=h(e);a=E(t,n[0]),t.forEach(_)},m(l,t){d(l,e,t),g(e,a)},p(l,t){t&1&&I(a,l[0])},d(l){l&&_(e)}}}function y(n){let e,a,l,t=n[0]&&c(n);const f=n[3].default,i=B(f,n,n[2],null);return{c(){e=m("svg"),t&&t.c(),a=u(),i&&i.c(),this.h()},l(s){e=v(s,"svg",{xmlns:!0,viewBox:!0,class:!0});var o=h(e);t&&t.l(o),a=u(),i&&i.l(o),o.forEach(_),this.h()},h(){r(e,"xmlns","http://www.w3.org/2000/svg"),r(e,"viewBox",n[1]),r(e,"class","svelte-3h8371")},m(s,o){d(s,e,o),t&&t.m(e,null),g(e,a),i&&i.m(e,null),l=!0},p(s,[o]){s[0]?t?t.p(s,o):(t=c(s),t.c(),t.m(e,a)):t&&(t.d(1),t=null),i&&i.p&&(!l||o&4)&&p(i,f,s,s[2],l?k(f,s[2],o,null):b(s[2]),null),(!l||o&2)&&r(e,"viewBox",s[1])},i(s){l||(q(i,s),l=!0)},o(s){x(i,s),l=!1},d(s){s&&_(e),t&&t.d(),i&&i.d(s)}}}function z(n,e,a){let{$$slots:l={},$$scope:t}=e,{title:f=null}=e,{viewBox:i}=e;return n.$$set=s=>{"title"in s&&a(0,f=s.title),"viewBox"in s&&a(1,i=s.viewBox),"$$scope"in s&&a(2,t=s.$$scope)},[f,i,t,l]}class F extends S{constructor(e){super(),j(this,e,z,y,w,{title:0,viewBox:1})}}export{F as I};
