import{S as k,i as x,s as P,O as y,P as j,h as p,n as q,u as h,j as m,k as _,p as z,d as c,v as g,l as d,a as A,J as $,w as v,Q as C,b,t as S,x as w,z as H}from"../../../chunks/index-7c29a546.js";import{w as J,a as O,c as Q}from"../../../chunks/withSvelte-ec12cff3.js";import"../../../chunks/preload-helper-176e53da.js";import{S as T,E as B}from"../../../chunks/Editable-a21ba2f2.js";/* empty css                                                             */function D(l){let e,n;return e=new B({props:{placeholder:"Enter some plain text..."}}),{c(){h(e.$$.fragment)},l(a){g(e.$$.fragment,a)},m(a,s){v(e,a,s),n=!0},p:H,i(a){n||(b(e.$$.fragment,a),n=!0)},o(a){S(e.$$.fragment,a),n=!1},d(a){w(e,a)}}}function F(l){let e,n,a,s,u,o;function E(t){l[2](t)}let f={editor:l[1],$$slots:{default:[D]},$$scope:{ctx:l}};return l[0]!==void 0&&(f.value=l[0]),s=new T({props:f}),y.push(()=>j(s,"value",E)),{c(){e=p("p"),n=p("a"),a=q(`Source
	`),h(s.$$.fragment),this.h()},l(t){e=m(t,"P",{});var r=_(e);n=m(r,"A",{target:!0,href:!0});var i=_(n);a=z(i,`Source
	`),i.forEach(c),r.forEach(c),g(s.$$.fragment,t),this.h()},h(){d(n,"target","_blank"),d(n,"href","https://github.com/nathanfaucett/svelte-slate/blob/main/src/routes/default/+page.svelte")},m(t,r){A(t,e,r),$(e,n),$(n,a),v(s,t,r),o=!0},p(t,[r]){const i={};r&8&&(i.$$scope={dirty:r,ctx:t}),!u&&r&1&&(u=!0,i.value=t[0],C(()=>u=!1)),s.$set(i)},i(t){o||(b(s.$$.fragment,t),o=!0)},o(t){S(s.$$.fragment,t),o=!1},d(t){t&&c(e),w(s,t)}}}function G(l,e,n){const a=J(O(Q()));let s=[{children:[{text:"This is editable."}]}];function u(o){s=o,n(0,s)}return[s,a,u]}class R extends k{constructor(e){super(),x(this,e,G,F,P,{})}}export{R as default};
