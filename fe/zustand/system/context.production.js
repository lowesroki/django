System.register(["react","zustand"],function(v){"use strict";var u,c,a,n,i,f;return{setters:[function(e){u=e.createContext,c=e.useRef,a=e.createElement,n=e.useContext,i=e.useMemo},function(e){f=e.useStore}],execute:function(){v("default",e);function e(){const o=u(void 0);return{Provider:({createStore:t,children:s})=>{const r=c();return r.current||(r.current=t()),a(o.Provider,{value:r.current},s)},useStore:(t,s)=>{const r=n(o);if(!r)throw new Error("Seems like you have not used zustand provider as an ancestor.");return f(r,t,s)},useStoreApi:()=>{const t=n(o);if(!t)throw new Error("Seems like you have not used zustand provider as an ancestor.");return i(()=>({...t}),[t])}}}}}});
