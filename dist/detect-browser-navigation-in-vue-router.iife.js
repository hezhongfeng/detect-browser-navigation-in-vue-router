var DetectBrowserNavigationInVueRouter=function(){"use strict";return{install(l,{router:t,backCallback:r,forwardCallback:i}={router:null,backCallback:null,forwardCallback:null}){if(!t)throw Error("router is required");let e=null;t.options.history.listen((u,a,o)=>{e=o}),t.beforeEach(()=>{e&&(e.direction==="back"&&r?r():e.direction==="forward"&&i&&i(),e=null)})}}}();
