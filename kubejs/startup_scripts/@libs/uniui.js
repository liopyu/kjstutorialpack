/**
* UniUI, a tizu project.
* An opinionated UI library for KubeJS - v0.0.1-testing
* https://tizudev.vercel.app/uniui
*
* SEE https://tizudev.vercel.app/uniui/docs/license FOR LICENSE!
*   ^ DO NOT REMOVE THIS HEADER OR CLAIM THIS CODE IS YOURS! ^
*/

global.uni={};global.uni._err=(b)=>{if(console.error(["[UniUI]",b].join(" ")),Client.gui)Client.gui.chat.addMessage(Text.red(["[UniUI]",b].join(" ")))};global.uni._getRefs=()=>{const b={},c=(m)=>{console.log(`[UniUI] Loading ${m}`);const j=JsonIO.read(m);for(let[d,n]of Object.entries(j))switch(typeof n){case"string":c(n);continue;case"object":if(b[d]){global.uni._err(`Reference name ${d} is ambiguous. It may not be used more than once.`);continue}if(!n.base||!n.components||!n.height||!n.interactions){global.uni._err(`Reference ${d} (${m}) is not compliant with UniUI. Take a look at the documentation.`);continue}b[d]=n;break;default:global.uni._err(`${d} (${m}) is not a valid UniUI interface.`);continue}};return c("kubejs/config/uniui.json"),b};StartupEvents.registry("item",(b)=>b.create("uniui:button").modelJson({elements:[]}));
