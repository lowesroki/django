System.register([],function(s){"use strict";return{execute:function(){const a=e=>{let t;const n=new Set,r=(c,f)=>{const o=typeof c=="function"?c(t):c;if(!Object.is(o,t)){const S=t;t=(f!=null?f:typeof o!="object")?o:Object.assign({},t,o),n.forEach(b=>b(t,S))}},i=()=>t,u={setState:r,getState:i,subscribe:c=>(n.add(c),()=>n.delete(c)),destroy:()=>{n.clear()}};return t=e(r,i,u),u},l=s("createStore",e=>e?a(e):a);var d=s("default",e=>l(e))}}});