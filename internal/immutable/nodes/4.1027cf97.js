import{S as be,i as Pe,H as we,u as te,P as ne,h as A,n as Z,w as h,j as k,k as F,p as x,f as I,x as b,l as E,a as V,K as D,y as P,R as Ne,Q as re,d as w,b as N,z as O}from"../chunks/index.63937b64.js";import{S as Oe,w as Re,a as Se,E as Ie,H as Te,P as Ee,c as Ae,D as ke,i as Me,t as ye}from"../chunks/Editable.35235ff2.js";import{H as Le,I as Ue,a as De,w as We,C as Fe,b as Be,c as He,M as Ce,d as Ge,e as je,f as q,B as W,g as qe,h as ze,i as Ye,j as Ke,T as Ve,k as Xe,l as Qe,m as Je,n as Ze,o as xe,p as et,q as tt,r as nt,s as rt}from"../chunks/HoveringToolbar.a1d8253f.js";var ae={},S={};Object.defineProperty(S,"__esModule",{value:!0});S.FORMAT_PLAIN=S.FORMAT_HTML=S.FORMATS=void 0;var oe="html";S.FORMAT_HTML=oe;var ue="plain";S.FORMAT_PLAIN=ue;var at=[oe,ue];S.FORMATS=at;var R={};Object.defineProperty(R,"__esModule",{value:!0});R.UNIT_WORDS=R.UNIT_WORD=R.UNIT_SENTENCES=R.UNIT_SENTENCE=R.UNIT_PARAGRAPHS=R.UNIT_PARAGRAPH=R.UNITS=void 0;var ie="words";R.UNIT_WORDS=ie;var se="word";R.UNIT_WORD=se;var fe="sentences";R.UNIT_SENTENCES=fe;var le="sentence";R.UNIT_SENTENCE=le;var me="paragraphs";R.UNIT_PARAGRAPHS=me;var de="paragraph";R.UNIT_PARAGRAPH=de;var ot=[ie,se,fe,le,me,de];R.UNITS=ot;var B={};Object.defineProperty(B,"__esModule",{value:!0});B.WORDS=void 0;var ut=["ad","adipisicing","aliqua","aliquip","amet","anim","aute","cillum","commodo","consectetur","consequat","culpa","cupidatat","deserunt","do","dolor","dolore","duis","ea","eiusmod","elit","enim","esse","est","et","eu","ex","excepteur","exercitation","fugiat","id","in","incididunt","ipsum","irure","labore","laboris","laborum","Lorem","magna","minim","mollit","nisi","non","nostrud","nulla","occaecat","officia","pariatur","proident","qui","quis","reprehenderit","sint","sit","sunt","tempor","ullamco","ut","velit","veniam","voluptate"];B.WORDS=ut;var ce={},z={};Object.defineProperty(z,"__esModule",{value:!0});z.LINE_ENDINGS=void 0;var it={POSIX:`
`,WIN32:`\r
`};z.LINE_ENDINGS=it;var $e={},Q={},ge={};(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var e=function(a){var $=a.trim();return $.charAt(0).toUpperCase()+$.slice(1)},n=e;r.default=n})(ge);var X={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=function(){return!!r.exports},t=n;e.default=t})(X,X.exports);var st=X.exports,_e={};(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var e=function(){var a=!1;try{a=navigator.product==="ReactNative"}catch{a=!1}return a},n=e;r.default=n})(_e);var pe={},Y={};Object.defineProperty(Y,"__esModule",{value:!0});Y.SUPPORTED_PLATFORMS=void 0;var ft={DARWIN:"darwin",LINUX:"linux",WIN32:"win32"};Y.SUPPORTED_PLATFORMS=ft;(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var e=Y,n=function(){var $=!1;try{$=process.platform===e.SUPPORTED_PLATFORMS.WIN32}catch{$=!1}return $},t=n;r.default=t})(pe);var J={};(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var e=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return Array.apply(null,Array(a)).map(function($,p){return p})},n=e;r.default=n})(J);var ve={};(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var e=n(J);function n($){return $&&$.__esModule?$:{default:$}}var t=function(p,u){var s=(0,e.default)(p);return s.map(function(){return u()})},a=t;r.default=a})(ve);(function(r){Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"capitalize",{enumerable:!0,get:function(){return e.default}}),Object.defineProperty(r,"isNode",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(r,"isReactNative",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(r,"isWindows",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(r,"makeArrayOfLength",{enumerable:!0,get:function(){return $.default}}),Object.defineProperty(r,"makeArrayOfStrings",{enumerable:!0,get:function(){return p.default}});var e=u(ge),n=u(st),t=u(_e),a=u(pe),$=u(J),p=u(ve);function u(s){return s&&s.__esModule?s:{default:s}}})(Q);(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var e=B,n=Q;function t(_,m){if(!(_ instanceof m))throw new TypeError("Cannot call a class as a function")}function a(_,m){for(var g=0;g<m.length;g++){var o=m[g];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(_,o.key,o)}}function $(_,m,g){return m&&a(_.prototype,m),g&&a(_,g),Object.defineProperty(_,"prototype",{writable:!1}),_}function p(_,m,g){return m in _?Object.defineProperty(_,m,{value:g,enumerable:!0,configurable:!0,writable:!0}):_[m]=g,_}var u=function(){function _(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},g=m.sentencesPerParagraph,o=g===void 0?{max:7,min:3}:g,d=m.wordsPerSentence,l=d===void 0?{max:15,min:5}:d,f=m.random;m.seed;var v=m.words,i=v===void 0?e.WORDS:v;if(t(this,_),p(this,"sentencesPerParagraph",void 0),p(this,"wordsPerSentence",void 0),p(this,"random",void 0),p(this,"words",void 0),o.min>o.max)throw new Error("Minimum number of sentences per paragraph (".concat(o.min,") cannot exceed maximum (").concat(o.max,")."));if(l.min>l.max)throw new Error("Minimum number of words per sentence (".concat(l.min,") cannot exceed maximum (").concat(l.max,")."));this.sentencesPerParagraph=o,this.words=i,this.wordsPerSentence=l,this.random=f||Math.random}return $(_,[{key:"generateRandomInteger",value:function(g,o){return Math.floor(this.random()*(o-g+1)+g)}},{key:"generateRandomWords",value:function(g){var o=this,d=this.wordsPerSentence,l=d.min,f=d.max,v=g||this.generateRandomInteger(l,f);return(0,n.makeArrayOfLength)(v).reduce(function(i,c){return"".concat(o.pluckRandomWord()," ").concat(i)},"").trim()}},{key:"generateRandomSentence",value:function(g){return"".concat((0,n.capitalize)(this.generateRandomWords(g)),".")}},{key:"generateRandomParagraph",value:function(g){var o=this,d=this.sentencesPerParagraph,l=d.min,f=d.max,v=g||this.generateRandomInteger(l,f);return(0,n.makeArrayOfLength)(v).reduce(function(i,c){return"".concat(o.generateRandomSentence()," ").concat(i)},"").trim()}},{key:"pluckRandomWord",value:function(){var g=0,o=this.words.length-1,d=this.generateRandomInteger(g,o);return this.words[d]}}]),_}(),s=u;r.default=s})($e);(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var e=S,n=z,t=$($e),a=Q;function $(o){return o&&o.__esModule?o:{default:o}}function p(o,d){if(!(o instanceof d))throw new TypeError("Cannot call a class as a function")}function u(o,d){for(var l=0;l<d.length;l++){var f=d[l];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(o,f.key,f)}}function s(o,d,l){return d&&u(o.prototype,d),l&&u(o,l),Object.defineProperty(o,"prototype",{writable:!1}),o}function _(o,d,l){return d in o?Object.defineProperty(o,d,{value:l,enumerable:!0,configurable:!0,writable:!0}):o[d]=l,o}var m=function(){function o(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.FORMAT_PLAIN,f=arguments.length>2?arguments[2]:void 0;if(p(this,o),this.format=l,this.suffix=f,_(this,"generator",void 0),e.FORMATS.indexOf(l.toLowerCase())===-1)throw new Error("".concat(l," is an invalid format. Please use ").concat(e.FORMATS.join(" or "),"."));this.generator=new t.default(d)}return s(o,[{key:"getLineEnding",value:function(){return this.suffix?this.suffix:!(0,a.isReactNative)()&&(0,a.isNode)()&&(0,a.isWindows)()?n.LINE_ENDINGS.WIN32:n.LINE_ENDINGS.POSIX}},{key:"formatString",value:function(l){return this.format===e.FORMAT_HTML?"<p>".concat(l,"</p>"):l}},{key:"formatStrings",value:function(l){var f=this;return l.map(function(v){return f.formatString(v)})}},{key:"generateWords",value:function(l){return this.formatString(this.generator.generateRandomWords(l))}},{key:"generateSentences",value:function(l){return this.formatString(this.generator.generateRandomParagraph(l))}},{key:"generateParagraphs",value:function(l){var f=this.generator.generateRandomParagraph.bind(this.generator);return this.formatStrings((0,a.makeArrayOfStrings)(l,f)).join(this.getLineEnding())}}]),o}(),g=m;r.default=g})(ce);(function(r){Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"LoremIpsum",{enumerable:!0,get:function(){return a.default}}),r.loremIpsum=void 0;var e=S,n=R,t=B,a=$(ce);function $(u){return u&&u.__esModule?u:{default:u}}var p=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},_=s.count,m=_===void 0?1:_,g=s.format,o=g===void 0?e.FORMAT_PLAIN:g,d=s.paragraphLowerBound,l=d===void 0?3:d,f=s.paragraphUpperBound,v=f===void 0?7:f,i=s.random,c=s.sentenceLowerBound,T=c===void 0?5:c,M=s.sentenceUpperBound,H=M===void 0?15:M,y=s.units,C=y===void 0?n.UNIT_SENTENCES:y,L=s.words,G=L===void 0?t.WORDS:L,U=s.suffix,j=U===void 0?"":U,he={random:i,sentencesPerParagraph:{max:v,min:l},words:G,wordsPerSentence:{max:H,min:T}},K=new a.default(he,o,j);switch(C){case n.UNIT_PARAGRAPHS:case n.UNIT_PARAGRAPH:return K.generateParagraphs(m);case n.UNIT_SENTENCES:case n.UNIT_SENTENCE:return K.generateSentences(m);case n.UNIT_WORDS:case n.UNIT_WORD:return K.generateWords(m);default:return""}};r.loremIpsum=p})(ae);function lt(r){let e,n;return e=new Xe({}),{c(){h(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,a){P(e,t,a),n=!0},i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){N(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function mt(r){let e,n;return e=new Qe({}),{c(){h(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,a){P(e,t,a),n=!0},i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){N(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function dt(r){let e,n;return e=new Je({}),{c(){h(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,a){P(e,t,a),n=!0},i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){N(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function ct(r){let e,n;return e=new Ze({}),{c(){h(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,a){P(e,t,a),n=!0},i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){N(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function $t(r){let e,n;return e=new xe({}),{c(){h(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,a){P(e,t,a),n=!0},i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){N(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function gt(r){let e,n;return e=new et({}),{c(){h(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,a){P(e,t,a),n=!0},i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){N(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function _t(r){let e,n;return e=new tt({}),{c(){h(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,a){P(e,t,a),n=!0},i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){N(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function pt(r){let e,n;return e=new nt({}),{c(){h(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,a){P(e,t,a),n=!0},i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){N(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function vt(r){let e,n;return e=new rt({}),{c(){h(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,a){P(e,t,a),n=!0},i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){N(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function ht(r){let e,n,t,a,$,p,u,s,_,m,g,o,d,l,f,v;return n=new q({props:{format:"bold",$$slots:{default:[lt]},$$scope:{ctx:r}}}),t=new q({props:{format:"italic",$$slots:{default:[mt]},$$scope:{ctx:r}}}),a=new q({props:{format:"underline",$$slots:{default:[dt]},$$scope:{ctx:r}}}),$=new q({props:{format:"code",$$slots:{default:[ct]},$$scope:{ctx:r}}}),p=new W({props:{format:"heading1",$$slots:{default:[$t]},$$scope:{ctx:r}}}),u=new W({props:{format:"heading2",$$slots:{default:[gt]},$$scope:{ctx:r}}}),s=new W({props:{format:"block-quote",$$slots:{default:[_t]},$$scope:{ctx:r}}}),_=new W({props:{format:"numbered-list",$$slots:{default:[pt]},$$scope:{ctx:r}}}),m=new W({props:{format:"bulleted-list",$$slots:{default:[vt]},$$scope:{ctx:r}}}),g=new qe({}),o=new ze({}),d=new Ye({}),l=new Ke({}),f=new Ve({}),{c(){e=A("div"),h(n.$$.fragment),h(t.$$.fragment),h(a.$$.fragment),h($.$$.fragment),h(p.$$.fragment),h(u.$$.fragment),h(s.$$.fragment),h(_.$$.fragment),h(m.$$.fragment),h(g.$$.fragment),h(o.$$.fragment),h(d.$$.fragment),h(l.$$.fragment),h(f.$$.fragment),this.h()},l(i){e=k(i,"DIV",{class:!0});var c=F(e);b(n.$$.fragment,c),b(t.$$.fragment,c),b(a.$$.fragment,c),b($.$$.fragment,c),b(p.$$.fragment,c),b(u.$$.fragment,c),b(s.$$.fragment,c),b(_.$$.fragment,c),b(m.$$.fragment,c),b(g.$$.fragment,c),b(o.$$.fragment,c),b(d.$$.fragment,c),b(l.$$.fragment,c),b(f.$$.fragment,c),c.forEach(I),this.h()},h(){E(e,"class","toolbar svelte-ic1xkd")},m(i,c){V(i,e,c),P(n,e,null),P(t,e,null),P(a,e,null),P($,e,null),P(p,e,null),P(u,e,null),P(s,e,null),P(_,e,null),P(m,e,null),P(g,e,null),P(o,e,null),P(d,e,null),P(l,e,null),P(f,e,null),v=!0},p(i,c){const T={};c&512&&(T.$$scope={dirty:c,ctx:i}),n.$set(T);const M={};c&512&&(M.$$scope={dirty:c,ctx:i}),t.$set(M);const H={};c&512&&(H.$$scope={dirty:c,ctx:i}),a.$set(H);const y={};c&512&&(y.$$scope={dirty:c,ctx:i}),$.$set(y);const C={};c&512&&(C.$$scope={dirty:c,ctx:i}),p.$set(C);const L={};c&512&&(L.$$scope={dirty:c,ctx:i}),u.$set(L);const G={};c&512&&(G.$$scope={dirty:c,ctx:i}),s.$set(G);const U={};c&512&&(U.$$scope={dirty:c,ctx:i}),_.$set(U);const j={};c&512&&(j.$$scope={dirty:c,ctx:i}),m.$set(j)},i(i){v||(w(n.$$.fragment,i),w(t.$$.fragment,i),w(a.$$.fragment,i),w($.$$.fragment,i),w(p.$$.fragment,i),w(u.$$.fragment,i),w(s.$$.fragment,i),w(_.$$.fragment,i),w(m.$$.fragment,i),w(g.$$.fragment,i),w(o.$$.fragment,i),w(d.$$.fragment,i),w(l.$$.fragment,i),w(f.$$.fragment,i),v=!0)},o(i){N(n.$$.fragment,i),N(t.$$.fragment,i),N(a.$$.fragment,i),N($.$$.fragment,i),N(p.$$.fragment,i),N(u.$$.fragment,i),N(s.$$.fragment,i),N(_.$$.fragment,i),N(m.$$.fragment,i),N(g.$$.fragment,i),N(o.$$.fragment,i),N(d.$$.fragment,i),N(l.$$.fragment,i),N(f.$$.fragment,i),v=!1},d(i){i&&I(e),O(n),O(t),O(a),O($),O(p),O(u),O(s),O(_),O(m),O(g),O(o),O(d),O(l),O(f)}}}function bt(r){let e,n,t,a;e=new Le({props:{container:r[1],$$slots:{default:[ht]},$$scope:{ctx:r}}});function $(u){r[7](u)}let p={placeholder:"Enter some plain text...",readOnly:r[2],onKeyDown:r[5]};return r[1]!==void 0&&(p.ref=r[1]),n=new Ie({props:p}),te.push(()=>ne(n,"ref",$)),{c(){h(e.$$.fragment),h(n.$$.fragment)},l(u){b(e.$$.fragment,u),b(n.$$.fragment,u)},m(u,s){P(e,u,s),P(n,u,s),a=!0},p(u,s){const _={};s&2&&(_.container=u[1]),s&512&&(_.$$scope={dirty:s,ctx:u}),e.$set(_);const m={};s&4&&(m.readOnly=u[2]),!t&&s&2&&(t=!0,m.ref=u[1],re(()=>t=!1)),n.$set(m)},i(u){a||(w(e.$$.fragment,u),w(n.$$.fragment,u),a=!0)},o(u){N(e.$$.fragment,u),N(n.$$.fragment,u),a=!1},d(u){O(e,u),O(n,u)}}}function Pt(r){let e,n,t,a,$,p,u,s,_,m,g,o;function d(f){r[8](f)}let l={editor:r[3],plugins:r[4],$$slots:{default:[bt]},$$scope:{ctx:r}};return r[0]!==void 0&&(l.value=r[0]),s=new Oe({props:l}),te.push(()=>ne(s,"value",d)),{c(){e=A("p"),n=A("a"),t=Z(`Source
	`),a=A("div"),$=A("label"),p=Z("Read Only?"),u=A("input"),h(s.$$.fragment),this.h()},l(f){e=k(f,"P",{});var v=F(e);n=k(v,"A",{target:!0,rel:!0,href:!0});var i=F(n);t=x(i,`Source
	`),i.forEach(I),v.forEach(I),a=k(f,"DIV",{});var c=F(a);$=k(c,"LABEL",{for:!0});var T=F($);p=x(T,"Read Only?"),T.forEach(I),u=k(c,"INPUT",{name:!0,type:!0}),c.forEach(I),b(s.$$.fragment,f),this.h()},h(){E(n,"target","_blank"),E(n,"rel","noreferrer"),E(n,"href","https://github.com/nathanfaucett/svelte-slate/blob/main/src/routes/huge-document/+page.svelte"),E($,"for","readOnly"),E(u,"name","readOnly"),E(u,"type","checkbox")},m(f,v){V(f,e,v),D(e,n),D(n,t),V(f,a,v),D(a,$),D($,p),D(a,u),u.checked=r[2],P(s,f,v),m=!0,g||(o=Ne(u,"change",r[6]),g=!0)},p(f,[v]){v&4&&(u.checked=f[2]);const i={};v&518&&(i.$$scope={dirty:v,ctx:f}),!_&&v&1&&(_=!0,i.value=f[0],re(()=>_=!1)),s.$set(i)},i(f){m||(w(s.$$.fragment,f),m=!0)},o(f){N(s.$$.fragment,f),m=!1},d(f){f&&I(e),f&&I(a),O(s,f),g=!1,o()}}}const ee=new ae.LoremIpsum({sentencesPerParagraph:{max:8,min:4},wordsPerSentence:{max:16,min:4}});function wt(r,e){const n=[];for(let t=0;t<r;t++){n.push({type:Te,children:[{text:ee.generateSentences(1)}]});for(let a=0;a<e;a++)n.push({type:Ee,children:[{text:ee.generateParagraphs(1)}]})}return n}const Nt={"mod+b":"bold","mod+i":"italic","mod+u":"underline","mod+`":"code"};function Ot(r,e,n){const t=Re(Se(Ae()));let a={...ke,[Ue]:{component:De,withFn:We},[Fe]:{component:Be,withFn:He},[Ce]:{component:Ge,withFn:je}},$=wt(100,7),p,u=!1;function s(o){Object.entries(Nt).forEach(([d,l])=>{Me(d,o)&&(o.preventDefault(),o.stopPropagation(),ye(t,l))})}function _(){u=this.checked,n(2,u)}function m(o){p=o,n(1,p)}function g(o){$=o,n(0,$)}return[$,p,u,t,a,s,_,m,g]}class Tt extends be{constructor(e){super(),Pe(this,e,Ot,Pt,we,{})}}export{Tt as component};
