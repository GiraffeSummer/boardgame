var Jt=Object.defineProperty,Wt=Object.defineProperties;var Xt=Object.getOwnPropertyDescriptors;var ft=Object.getOwnPropertySymbols;var Zt=Object.prototype.hasOwnProperty,xt=Object.prototype.propertyIsEnumerable;var dt=(t,e,n)=>e in t?Jt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Ie=(t,e)=>{for(var n in e||(e={}))Zt.call(e,n)&&dt(t,n,e[n]);if(ft)for(var n of ft(e))xt.call(e,n)&&dt(t,n,e[n]);return t},Fe=(t,e)=>Wt(t,Xt(e));import{w as le,g as F,S as re,i as ie,s as oe,e as b,t as P,a as L,b as k,c as v,d,f as N,h as Re,j as Ue,k as Gt,l as He,m as Rt,n as g,o as S,p as de,q as O,r as _e,u as x,v as Z,x as V,y as en,z as M,A as Me,B as tn,C as nn,D as ln,E as _t,F as rn,G as on,H as sn,I as an,J as pe,K as un,L as ae,M as ue,N as ce,O as cn,P as fn,Q as dn,R as mt,T as Ut,U as ht}from"./vendor.e6f0649d.js";const _n=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}};_n();function pt(t,e,n){const l=t.slice();return l[1]=e[n],l}function bt(t){let e,n,l=t[1].message+"",r,o,i,s,a,u;return{c(){e=b("mark"),n=b("p"),r=P(l),o=L(),k(e,"class",i="inline-block alert "+t[1].color+" svelte-rlhbd2")},m(c,_){v(c,e,_),d(e,n),d(n,r),d(e,o),u=!0},p(c,_){(!u||_&1)&&l!==(l=c[1].message+"")&&N(r,l),(!u||_&1&&i!==(i="inline-block alert "+c[1].color+" svelte-rlhbd2"))&&k(e,"class",i)},i(c){u||(Re(()=>{a&&a.end(1),s=Ue(e,Gt,{}),s.start()}),u=!0)},o(c){s&&s.invalidate(),a=He(e,Rt,{}),u=!1},d(c){c&&g(e),c&&a&&a.end()}}}function mn(t){let e,n,l=t[0],r=[];for(let i=0;i<l.length;i+=1)r[i]=bt(pt(t,l,i));const o=i=>O(r[i],1,1,()=>{r[i]=null});return{c(){e=b("div");for(let i=0;i<r.length;i+=1)r[i].c()},m(i,s){v(i,e,s);for(let a=0;a<r.length;a+=1)r[a].m(e,null);n=!0},p(i,[s]){if(s&1){l=i[0];let a;for(a=0;a<l.length;a+=1){const u=pt(i,l,a);r[a]?(r[a].p(u,s),S(r[a],1)):(r[a]=bt(u),r[a].c(),S(r[a],1),r[a].m(e,null))}for(de(),a=l.length;a<r.length;a+=1)o(a);_e()}},i(i){if(!n){for(let s=0;s<l.length;s+=1)S(r[s]);n=!0}},o(i){r=r.filter(Boolean);for(let s=0;s<r.length;s+=1)O(r[s]);n=!1},d(i){i&&g(e),x(r,i)}}}let Ne=le([]);function B(t,e="primary",n=1200){let l={message:t,color:e,duration:n};Ne.set([...F(Ne),l])}function Ht(){Ne.set([])}function hn(t,e,n){let l;return Z(t,Ne,r=>n(0,l=r)),[l]}class pn extends re{constructor(e){super();ie(this,e,hn,mn,oe,{})}}const bn="modulepreload",vt={},vn="./",gn=function(e,n){return!n||n.length===0?e():Promise.all(n.map(l=>{if(l=`${vn}${l}`,l in vt)return;vt[l]=!0;const r=l.endsWith(".css"),o=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${o}`))return;const i=document.createElement("link");if(i.rel=r?"stylesheet":bn,r||(i.as="script",i.crossOrigin=""),i.href=l,document.head.appendChild(i),r)return new Promise((s,a)=>{i.addEventListener("load",s),i.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>e())};function gt(t,e,n){const l=t.slice();return l[1]=e[n],l}function yt(t){let e,n,l,r,o,i=t[0].title+"",s,a,u,c=t[0].message+"",_,h,f,m,T,C,$,p=t[0].buttons,y=[];for(let w=0;w<p.length;w+=1)y[w]=kt(gt(t,p,w));return{c(){e=b("div"),l=L(),r=b("div"),o=b("h3"),s=P(i),a=L(),u=b("p"),_=P(c),h=L(),f=b("div");for(let w=0;w<y.length;w+=1)y[w].c();k(e,"class","background svelte-1naglno"),k(o,"class","section"),k(u,"class","section"),k(f,"class","section"),k(r,"class","card modal-content svelte-1naglno")},m(w,I){v(w,e,I),v(w,l,I),v(w,r,I),d(r,o),d(o,s),d(r,a),d(r,u),d(u,_),d(r,h),d(r,f);for(let j=0;j<y.length;j+=1)y[j].m(f,null);T=!0,C||($=V(e,"click",wn),C=!0)},p(w,I){if((!T||I&1)&&i!==(i=w[0].title+"")&&N(s,i),(!T||I&1)&&c!==(c=w[0].message+"")&&N(_,c),I&1){p=w[0].buttons;let j;for(j=0;j<p.length;j+=1){const G=gt(w,p,j);y[j]?y[j].p(G,I):(y[j]=kt(G),y[j].c(),y[j].m(f,null))}for(;j<y.length;j+=1)y[j].d(1);y.length=p.length}},i(w){T||(n&&n.end(1),m||Re(()=>{m=Ue(r,Gt,{}),m.start()}),T=!0)},o(w){n=He(e,Rt,{}),T=!1},d(w){w&&g(e),w&&n&&n.end(),w&&g(l),w&&g(r),x(y,w),C=!1,$()}}}function kt(t){let e,n=t[1].text+"",l,r,o,i;return{c(){e=b("button"),l=P(n),k(e,"class",r="button "+t[1].style+" svelte-1naglno")},m(s,a){v(s,e,a),d(e,l),o||(i=V(e,"click",function(){en(t[1].pressed)&&t[1].pressed.apply(this,arguments)}),o=!0)},p(s,a){t=s,a&1&&n!==(n=t[1].text+"")&&N(l,n),a&1&&r!==(r="button "+t[1].style+" svelte-1naglno")&&k(e,"class",r)},d(s){s&&g(e),o=!1,i()}}}function yn(t){let e,n,l=t[0].show&&yt(t);return{c(){e=b("div"),l&&l.c(),k(e,"class","modal")},m(r,o){v(r,e,o),l&&l.m(e,null),n=!0},p(r,[o]){r[0].show?l?(l.p(r,o),o&1&&S(l,1)):(l=yt(r),l.c(),S(l,1),l.m(e,null)):l&&(de(),O(l,1,1,()=>{l=null}),_e())},i(r){n||(S(l),n=!0)},o(r){O(l),n=!1},d(r){r&&g(e),l&&l.d()}}}let J=le({show:!1}),qe;function qt(t,e="Alert!"){J.set({show:!1,title:e,message:t,canCancel:!0,buttons:[]});const n={show(){return J.update(l=>(l.show=!0,l)),F(J)},canCancel(l=!0){J.update(r=>(r.canCancel=l,r))},hide(){J.update(l=>(l.show=!1,l)),this._oncloseListeners.forEach(l=>l())},addButton(l,r=()=>{},o="primary",i=!0){return J.update(s=>(s.buttons.push(kn(l,r,o,i)),s)),this},_oncloseListeners:[],onClose(l){return this._oncloseListeners.push(l),this}};return qe=n,n}function kn(t,e=()=>{},n="primary",l=!0){return{text:t,style:n,closing:l,pressed:()=>(l&&qe.hide(),e())}}function wn(){F(J).canCancel&&qe.hide()}function $n(t,e,n){let l;return Z(t,J,r=>n(0,l=r)),[l]}class Tn extends re{constructor(e){super();ie(this,e,$n,yn,oe,{})}}var zt={rainbow:";animation: rainbow 5s linear;animation-iteration-count: infinite;",background_image:(t,e="cover")=>`;background-repeat: no-repeat;background-size: ${e};background-image:url("${t}")`};async function Cn(t,e){console.log("map data from "+t.generator);const{generate:n}=await gn(()=>import(t.generator),[]);return n(e,{CreateTile:D,defaultStay:me,createTurn:z,colors:X,GetNextPlayer:Vt,GetRandomPlayer:Kt,CreateAlert:B,Effects:zt,filters:Ln,CreatePopup:qt,gameManager:H},An)}function Pn(t){return Math.floor(Math.random()*t)}const An={atm:()=>D("ATM","background-color:purple;color:white;").makeInteractable(function(t,e){if(t.hasInteracted<1){const n=Pn(4)+2;B(`You stole ${n}!`,"tertiary"),t.hasInteracted++,t.setupClearInteraction(e),e.coins+=n,e.update()}else B("You already stole from here!","secondary")},"Steal"),gross:()=>D("gross","background-color:maroon;color:white;").addStay(function(t){t.color!="#663300"?(B("Ew you're gross!","secondary",1200),t.color="#663300",this.stay=me,this.style=""):B("You're already gross!","primary",1e3)}),carwash:()=>D("carwash","background-color:green;color:white;").makeInteractable(function(t,e){e.color!=X[e.index]?(B("You got nice and clean!","secondary",1200),e.color=X[e.index],t.update(),this.stay=me,this.style=""):B("You don't need to be cleaned!","primary",1e3)},"Clean"),mimic:()=>D("mimic","background-color:green;color:white;"+zt.rainbow).addStay(function(t){if(t.color==X[t.index]){let e=Kt();B(`You mimiced the color of ${e.name}!`,"primary",1200),t.color=e.color,this.stay=me,this.style=""}else B("You're already disguised!","primary",1e3)}),backwards:()=>D("backwards","background-color:maroon;color:white;").addStay(function(t){t.currentTurn.immune||(B("You have to move backwards next turn","secondary"),t.turnQueue[0].stepAmount=-1,t.turnQueue[0].immune=!0)}),modifier:(t=2)=>{let e=t>0?"green":"maroon";return D("modifier "+t,`background-color:${e};color:white;`).addStay(function(n){n.currentTurn.immune&&t<0||(t>0?B("You get to move extra next turn","tertiary"):B("You have to move backwards next turn","secondary"),n.turnQueue[0].stepAmount=t,n.turnQueue[0].immune=t<0)})},setback:(t=2)=>D("setback "+t,"background-color:maroon;color:white;").addStay(function(e){e.currentTurn.immune||(B(`You got sent back ${t} tiles!`,"secondary",1200),e.move(-t),e.turnQueue[0].immune=!0,e.currentTurn.immune=!0)}),bigdice:(t=8)=>D("big Dice","background-color:green;color:white;").addStay(function(e){B(`You get to use a d${t} next turn!`,"tertiary"),e.turnQueue[0].dice.sides=t}),addaction:()=>D("extra action","background-color:green;color:white;").addStay(function(t){B("You get an extra action!","tertiary"),t.currentTurn.actions.max+=1,t.currentTurn.actions.left+=1}),moreaction:()=>D("extra next action","background-color:green;color:white;").addStay(function(t){B("You get an extra action next turn!","tertiary");let e=z();e.actions={left:t.turnQueue[0].actions.left+1,max:t.turnQueue[0].actions.max+1},t.turnQueue[0]=e})},Ln={noColorChange:["mimic","gross","carwash"],noExtraAction:["addaction","moreaction"],noBad:["setback","backwards","gross"],noGood:["moreaction","addaction","bigdice","modifier"],noOP:["modifier"]},fe=le(!1),wt=le(""),be=le([]);function In(t,e=0){console.log(`${t.name} passed the end by ${e}`),B(`${t.name} passed the end by ${e}`),t.round+=1,t.tile=e,F(be)[t.tile].addPlayer(t).stay(t),H.dispatch("lapped",t)}function Mn(t){let e=[];for(let n=0;n<t;n++)e.push(D("tile "+n));return e}const he=le([]),W=le(void 0);let R={ready:!1,turn:0,playerCount:0,currentPlayerIndex:0,actions:1};const H=Fe(Ie({},ze()),{end:function(){Ht(),fe.set(!1),F(W).endTurn(),he.set([]),be.set([]),W.set(void 0),R={ready:!1,turn:0,playerCount:0,currentPlayerIndex:0,actions:1},this.events=[]}});function Nn(t){let e=F(be);he.update(l=>[...l,Ie({name:t,tile:0,index:l.length,turn:0,color:X[l.length],round:0,coins:0,rollHistory:[],getTile:function(){return e[this.tile]},move:function(r){r=r*this.currentTurn.stepAmount;const o=e[this.tile];if(o.removePlayer(this),this.tile+r>=e.length)In(this,this.tile+r-e.length);else{this.tile+=r,this.tile<0&&(this.tile=0);const i=e[this.tile];i.addPlayer(this),console.log(`moving from ${o.name} to ${i.name}`),this.update(),i.stay(this)}this.update()},currentTurn:z(),turnQueue:[z(),z(),z(),z(),z()],endTurn:function(){if(F(fe)==!1)return $t();this.currentTurn=this.turnQueue.shift(),this.turnQueue=[...this.turnQueue,z()],this.dispatch("endturn"),Ht(),B(`player ${this.name} ended their turn ${this.turn}`,"tertiary"),$t()},_v:0,update:function(){this._v++,this.dispatch("update")}},ze())]),R.playerCount++;let n=F(he);F(W)==null&&(W.set(n[0]),W.update(l=>(l.turn=1,l))),e[0].addPlayer(n[n.length-1])}function z(){let t={immune:!1,rollValue:{},stepAmount:1,dice:{sides:6,amount:1},actions:{max:R.actions,left:0},isNormal:function(){let e=this.immune==!1&&this.stepAmount==1&&this.dice.sides==6&&this.dice.amount==1&&this.actions.max==R.actions,n={};return this.immune!=!1&&(n.immune=this.immune),this.stepAmount!=1&&(n.stepAmount=this.stepAmount),this.actions.max!=R.actions&&(n.actions=this.actions.max),(this.dice.sides!=6||this.dice.amount!=1)&&(n.dice={}),this.dice.sides!=6&&(n.dice.sides=this.dice.sides),this.dice.amount!=1&&(n.dice.amount=this.dice.amount),{normal:e,modifiers:n}}};return t.actions.left=t.actions.max,t.hasActionsLeft=function(){return!this.actions.left>0},t.useAction=function(e=1){this.actions.left>=e?this.actions.left-=e:B("No more actions","secondary")},t}function me(t){console.log(`player ${t.name} stopped at ${this.name}`),B(`player ${t.name} moved to ${this.name}`)}function D(t="Tile",e=""){return Fe(Ie({players:[],name:t,stay:me,style:e,interactable:!1,interact:function(l){this.dispatch("interact",l)},hasInteracted:0,removePlayer:function(l){this.players=this.players.filter(r=>r!=l),this.update()},addPlayer:function(l){return this.players.push(l),this.players=this.players,this.update(),this}},ze()),{_v:0,update:function(){this._v++,this.dispatch("update")},makeInteractable:function(l,r="Nothing"){return this.interactable=!0,this.interactableType=r,this.hasInteracted=0,this.addListener("interact",l),this},addStay:function(l){return this.stay=l,this},setupClearInteraction:function(l){l.addListener("endturn",r=>{this.players.length>0?this.players[this.players.length-1].addListener("endturn",i=>{this.hasInteracted=0},!0):this.hasInteracted=0},!0)}})}function ze(){return{events:{},addListener:function(t,e,n=!1){const l={run:e,single:n};t in this.events?this.events[t].push(l):this.events[t]=[l]},dispatch:function(t){if(t in this.events){let e=Array.prototype.slice.call(arguments);e.length>1&&e.shift(),this.events[t].forEach(n=>{e.length<=0?n.run(this):n.run(this,...e)}),this.events[t].filter(n=>!n.single)}}}}function Vt(){let t=R,e=t.currentPlayerIndex+1==t.playerCount?0:t.currentPlayerIndex+1;return F(he)[e]}function Kt(t=!1){const e=F(he);if(t){const n=Tt(e.length);return e[n]}else{const n=R.currentPlayerIndex,l=e.filter(o=>o.index!=n),r=Tt(l.length);return l[r]}}function $t(){if(F(fe)==!1)return;let t=R,e=Vt();t.currentPlayerIndex=e.index,e.turn+=1,W.set(e),H.dispatch("startturn",e)}const X=["blue","red","gold","#50C878","#6600FF","#FF6A6A"];async function Ve(){var t;return"inBrowser"in H||(H.inBrowser=!await((t=window.api)==null?void 0:t.isElectron())||!1),H.inBrowser}async function jn(t,e=2){console.log("loading game");const n=await Ve(),l=`/maps/${t}/`,r=n?"":await window.api.GetContentFolder(),o=await(await fetch(r+l+"map.json")).json();o.generator=r+l+o.generator;const i=Mn(o.tiles);let s=await Cn(o,i);be.set(s),R.actions=o.actions,e=e!=null&&e>X.length?X.length:e;for(let a=0;a<e;a++)Nn("player "+(a+1));B("Game Started!","tertiary",1e3),R.ready=!0,H.dispatch("ready")}function Tt(t){return Math.floor(Math.random()*t)}function Sn(t){let e,n,l,r,o,i,s,a;return{c(){e=b("ul"),n=b("li"),l=b("button"),r=b("span"),o=P(" Home"),k(r,"class","icon-home inverse"),l.disabled=i=!t[0],k(l,"class","svelte-1bwnjup"),k(n,"class","svelte-1bwnjup"),k(e,"class","svelte-1bwnjup")},m(u,c){v(u,e,c),d(e,n),d(n,l),d(l,r),d(l,o),s||(a=V(l,"click",t[2]),s=!0)},p(u,[c]){c&1&&i!==(i=!u[0])&&(l.disabled=i)},i:M,o:M,d(u){u&&g(e),s=!1,a()}}}function En(t,e,n){let l;Z(t,fe,i=>n(0,l=i));function r(i=!0){i?qt(`Going back home will end the game
are you sure you want to continue?`).addButton("Cancel",()=>{},"tertiary").addButton("Yes end game",()=>{H.end()},"secondary").show():H.end()}return[l,r,()=>{r(!0)}]}class Bn extends re{constructor(e){super();ie(this,e,En,Sn,oe,{})}}var Ge=["\u2B24","\u2460","\u2461","\u2462","\u2463","\u2464","\u2465","\u2466","\u2467","\u2468","\u2469","\u246A","\u246B","\u246C","\u246D","\u246E","\u246F","\u2470","\u2471","\u2472","\u2473","\u3251","\u3252","\u3253","\u3254","\u3255","\u3256","\u3257","\u3258","\u3259","\u325A","\u325B","\u325C","\u325D","\u325E","\u325F","\u32B1","\u32B2","\u32B3","\u32B4","\u32B5","\u32B6","\u32B7","\u32B8","\u32B9","\u32BA","\u32BB","\u32BC","\u32BD","\u32BE","\u32BF"];function Ct(t,e,n){const l=t.slice();return l[1]=e[n],l}function Pt(t,e){let n,l,r,o,i,s,a=M,u;return{key:t,first:null,c(){n=b("span"),l=b("span"),l.textContent=`${Ge[0]}`,k(l,"class","svelte-oyrjik"),k(n,"aria-label",r=e[1].name),k(n,"class","player tooltip svelte-oyrjik"),Me(n,"color",e[1].color),this.first=n},m(c,_){v(c,n,_),d(n,l),u=!0},p(c,_){e=c,(!u||_&1&&r!==(r=e[1].name))&&k(n,"aria-label",r),(!u||_&1)&&Me(n,"color",e[1].color)},r(){s=n.getBoundingClientRect()},f(){tn(n),a(),nn(n,s)},a(){a(),a=ln(n,s,on,{})},i(c){u||(Re(()=>{i&&i.end(1),o=Ue(n,_t,{x:-50}),o.start()}),u=!0)},o(c){o&&o.invalidate(),i=He(n,_t,{x:50}),u=!1},d(c){c&&g(n),c&&i&&i.end()}}}function On(t){let e,n,l=t[0].name+"",r,o,i,s=[],a=new Map,u,c,_=t[0].players;const h=f=>f[1].name;for(let f=0;f<_.length;f+=1){let m=Ct(t,_,f),T=h(m);a.set(T,s[f]=Pt(T,m))}return{c(){e=b("div"),n=b("b"),r=P(l),o=L(),i=b("div");for(let f=0;f<s.length;f+=1)s[f].c();k(i,"class","row"),k(e,"class","tile card svelte-oyrjik"),k(e,"style",u=t[0].style)},m(f,m){v(f,e,m),d(e,n),d(n,r),d(e,o),d(e,i);for(let T=0;T<s.length;T+=1)s[T].m(i,null);c=!0},p(f,[m]){if((!c||m&1)&&l!==(l=f[0].name+"")&&N(r,l),m&1){_=f[0].players,de();for(let T=0;T<s.length;T+=1)s[T].r();s=rn(s,m,h,1,f,_,a,i,sn,Pt,null,Ct);for(let T=0;T<s.length;T+=1)s[T].a();_e()}(!c||m&1&&u!==(u=f[0].style))&&k(e,"style",u)},i(f){if(!c){for(let m=0;m<_.length;m+=1)S(s[m]);c=!0}},o(f){for(let m=0;m<s.length;m+=1)O(s[m]);c=!1},d(f){f&&g(e);for(let m=0;m<s.length;m+=1)s[m].d()}}}function Yn(t,e,n){let{tile:l}=e;return l.addListener("update",r=>{n(0,l=r)}),t.$$set=r=>{"tile"in r&&n(0,l=r.tile)},[l]}class Qn extends re{constructor(e){super();ie(this,e,Yn,On,oe,{tile:0})}}function At(t,e,n){const l=t.slice();return l[11]=e[n],l}function Lt(t,e,n){const l=t.slice();return l[14]=e[n][0],l[15]=e[n][1],l}function It(t,e,n){const l=t.slice();return l[18]=e[n][0],l[19]=e[n][1],l}function Dn(t){let e,n,l,r,o=Object.entries(t[3].modifiers),i=[];for(let s=0;s<o.length;s+=1)i[s]=Nt(Lt(t,o,s));return{c(){e=P("Modifiers:"),n=b("br"),l=L();for(let s=0;s<i.length;s+=1)i[s].c();r=pe()},m(s,a){v(s,e,a),v(s,n,a),v(s,l,a);for(let u=0;u<i.length;u+=1)i[u].m(s,a);v(s,r,a)},p(s,a){if(a&8){o=Object.entries(s[3].modifiers);let u;for(u=0;u<o.length;u+=1){const c=Lt(s,o,u);i[u]?i[u].p(c,a):(i[u]=Nt(c),i[u].c(),i[u].m(r.parentNode,r))}for(;u<i.length;u+=1)i[u].d(1);i.length=o.length}},d(s){s&&g(e),s&&g(n),s&&g(l),x(i,s),s&&g(r)}}}function Fn(t){let e;return{c(){e=P("Normal")},m(n,l){v(n,e,l)},p:M,d(n){n&&g(e)}}}function Gn(t){let e,n=t[14][0].toUpperCase()+t[14].slice(1)+"",l,r,o=t[15]+"",i,s,a;return{c(){e=b("b"),l=P(n),r=P(": "),i=P(o),s=L(),a=b("br")},m(u,c){v(u,e,c),d(e,l),v(u,r,c),v(u,i,c),v(u,s,c),v(u,a,c)},p(u,c){c&8&&n!==(n=u[14][0].toUpperCase()+u[14].slice(1)+"")&&N(l,n),c&8&&o!==(o=u[15]+"")&&N(i,o)},d(u){u&&g(e),u&&g(r),u&&g(i),u&&g(s),u&&g(a)}}}function Rn(t){let e,n=t[14][0].toUpperCase()+t[14].slice(1)+"",l,r,o,i,s,a=Object.entries(t[15]),u=[];for(let c=0;c<a.length;c+=1)u[c]=Mt(It(t,a,c));return{c(){e=b("b"),l=P(n),r=P(":"),o=b("br"),i=L();for(let c=0;c<u.length;c+=1)u[c].c();s=pe()},m(c,_){v(c,e,_),d(e,l),d(e,r),v(c,o,_),v(c,i,_);for(let h=0;h<u.length;h+=1)u[h].m(c,_);v(c,s,_)},p(c,_){if(_&8&&n!==(n=c[14][0].toUpperCase()+c[14].slice(1)+"")&&N(l,n),_&8){a=Object.entries(c[15]);let h;for(h=0;h<a.length;h+=1){const f=It(c,a,h);u[h]?u[h].p(f,_):(u[h]=Mt(f),u[h].c(),u[h].m(s.parentNode,s))}for(;h<u.length;h+=1)u[h].d(1);u.length=a.length}},d(c){c&&g(e),c&&g(o),c&&g(i),x(u,c),c&&g(s)}}}function Mt(t){let e,n=t[18][0].toUpperCase()+t[18].slice(1)+"",l,r,o=t[19]+"",i;return{c(){e=b("b"),l=P(n),r=P(": "),i=P(o)},m(s,a){v(s,e,a),d(e,l),d(e,r),d(e,i)},p(s,a){a&8&&n!==(n=s[18][0].toUpperCase()+s[18].slice(1)+"")&&N(l,n),a&8&&o!==(o=s[19]+"")&&N(i,o)},d(s){s&&g(e)}}}function Nt(t){let e;function n(o,i){return typeof o[15]=="object"?Rn:Gn}let l=n(t),r=l(t);return{c(){r.c(),e=pe()},m(o,i){r.m(o,i),v(o,e,i)},p(o,i){l===(l=n(o))&&r?r.p(o,i):(r.d(1),r=l(o),r&&(r.c(),r.m(e.parentNode,e)))},d(o){r.d(o),o&&g(e)}}}function jt(t){let e,n=(t[11]-1<t[4].length?t[4][t[11]-1]:t[11])+"",l;return{c(){e=b("span"),l=P(n),k(e,"class","dice svelte-1uo4w7e")},m(r,o){v(r,e,o),d(e,l)},p(r,o){o&2&&n!==(n=(r[11]-1<r[4].length?r[4][r[11]-1]:r[11])+"")&&N(l,n)},d(r){r&&g(e)}}}function Un(t){let e,n,l,r,o=Ge[t[0].round]+"",i,s,a=t[0].name+"",u,c,_=t[0].currentTurn.immune?"\u{1F6E1}\uFE0F":"",h,f,m,T,C=t[0].currentTurn.dice.sides+"",$,p=t[0].currentTurn.amount>1?"x"+t[0].currentTurn.dice.amount:"",y,w,I,j,G,Ke,ve=t[0].turn+"",je,Je,ge=t[0].currentTurn.actions.left+"",Se,We,ye=t[0].currentTurn.actions.max+"",Ee,Xe,ke,Ze,we=t[0].coins+"",Be,xe,q,et,Oe,tt,nt,$e=(t[1].total||0)+"",Ye,lt,K,ee,rt,Te,it,te,Ce=(t[2].interactableType||"Nothing")+"",Qe,Pe,ot,ne,st,Ae,De,at;function ut(A,E){return A[3].normal?Fn:Dn}let Le=ut(t),U=Le(t),se=t[1].rolls,Q=[];for(let A=0;A<se.length;A+=1)Q[A]=jt(At(t,se,A));return{c(){e=b("div"),n=b("div"),l=b("div"),r=b("h3"),i=P(o),s=L(),u=P(a),c=L(),h=P(_),f=L(),m=b("h6"),T=P("Dice: d"),$=P(C),y=P(p),w=L(),I=b("h6"),U.c(),j=L(),G=b("h6"),Ke=P("Turn: "),je=P(ve),Je=P(`
        Actions: `),Se=P(ge),We=P("/"),Ee=P(ye),Xe=L(),ke=b("h6"),Ze=P("\u{1FA99}: "),Be=P(we),xe=L(),q=b("h6"),et=P(`Result:
        `);for(let A=0;A<Q.length;A+=1)Q[A].c();Oe=L(),tt=b("br"),nt=P(`
        total: `),Ye=P($e),lt=L(),K=b("div"),ee=b("button"),rt=P("Roll"),it=L(),te=b("button"),Qe=P(Ce),ot=L(),ne=b("button"),st=P("End turn"),Me(r,"color",t[0].color),k(l,"class","section"),ee.disabled=Te=t[0].currentTurn.hasActionsLeft(),k(ee,"class","button primary svelte-1uo4w7e"),te.disabled=Pe=!t[2].interactable,k(te,"class","button tertiary svelte-1uo4w7e"),ne.disabled=Ae=!(t[0].currentTurn.actions.left<t[0].currentTurn.actions.max),k(ne,"class","button secondary svelte-1uo4w7e"),k(K,"class","button-group section dark "),k(n,"class","card col-lg-12"),k(e,"class","row")},m(A,E){v(A,e,E),d(e,n),d(n,l),d(l,r),d(r,i),d(r,s),d(r,u),d(r,c),d(r,h),d(l,f),d(l,m),d(m,T),d(m,$),d(m,y),d(l,w),d(l,I),U.m(I,null),d(l,j),d(l,G),d(G,Ke),d(G,je),d(G,Je),d(G,Se),d(G,We),d(G,Ee),d(l,Xe),d(l,ke),d(ke,Ze),d(ke,Be),d(l,xe),d(l,q),d(q,et);for(let Y=0;Y<Q.length;Y+=1)Q[Y].m(q,null);d(q,Oe),d(q,tt),d(q,nt),d(q,Ye),d(n,lt),d(n,K),d(K,ee),d(ee,rt),d(K,it),d(K,te),d(te,Qe),d(K,ot),d(K,ne),d(ne,st),De||(at=[V(ee,"click",t[6]),V(te,"click",t[7]),V(ne,"click",t[8])],De=!0)},p(A,[E]){if(E&1&&o!==(o=Ge[A[0].round]+"")&&N(i,o),E&1&&a!==(a=A[0].name+"")&&N(u,a),E&1&&_!==(_=A[0].currentTurn.immune?"\u{1F6E1}\uFE0F":"")&&N(h,_),E&1&&Me(r,"color",A[0].color),E&1&&C!==(C=A[0].currentTurn.dice.sides+"")&&N($,C),E&1&&p!==(p=A[0].currentTurn.amount>1?"x"+A[0].currentTurn.dice.amount:"")&&N(y,p),Le===(Le=ut(A))&&U?U.p(A,E):(U.d(1),U=Le(A),U&&(U.c(),U.m(I,null))),E&1&&ve!==(ve=A[0].turn+"")&&N(je,ve),E&1&&ge!==(ge=A[0].currentTurn.actions.left+"")&&N(Se,ge),E&1&&ye!==(ye=A[0].currentTurn.actions.max+"")&&N(Ee,ye),E&1&&we!==(we=A[0].coins+"")&&N(Be,we),E&18){se=A[1].rolls;let Y;for(Y=0;Y<se.length;Y+=1){const ct=At(A,se,Y);Q[Y]?Q[Y].p(ct,E):(Q[Y]=jt(ct),Q[Y].c(),Q[Y].m(q,Oe))}for(;Y<Q.length;Y+=1)Q[Y].d(1);Q.length=se.length}E&2&&$e!==($e=(A[1].total||0)+"")&&N(Ye,$e),E&1&&Te!==(Te=A[0].currentTurn.hasActionsLeft())&&(ee.disabled=Te),E&4&&Ce!==(Ce=(A[2].interactableType||"Nothing")+"")&&N(Qe,Ce),E&4&&Pe!==(Pe=!A[2].interactable)&&(te.disabled=Pe),E&1&&Ae!==(Ae=!(A[0].currentTurn.actions.left<A[0].currentTurn.actions.max))&&(ne.disabled=Ae)},i:M,o:M,d(A){A&&g(e),U.d(),x(Q,A),De=!1,an(at)}}}function Hn(t,e){return Math.floor(Math.random()*(e-t+1))+t}function qn(t,e,n){let l,r,o;Z(t,W,m=>n(9,o=m));const i=["\u2680","\u2681","\u2682","\u2683","\u2684","\u2685"];let{player:s={}}=e;const a=(m,T)=>{let C=[];for(let $=0;$<m;$++)C.push(u(T));return{amount:m,sides:T,rolls:C,total:C.reduce(($,p)=>$+p,0)}},u=(m=6)=>Hn(1,m);let c={rolls:[]};s.addListener("update",m=>{n(0,s=m)}),o.addListener("endturn",m=>{n(1,c={rolls:[]})});const _=()=>{const m=s.currentTurn.dice;n(1,c=a(m.amount,m.sides)),n(0,s.rollHistory=[c,...s.rollHistory],s),n(0,s.currentTurn.rollValue=c,s),s.currentTurn.useAction(),s.move(c.total)},h=()=>{r.interact(s)},f=()=>{s.endTurn()};return t.$$set=m=>{"player"in m&&n(0,s=m.player)},t.$$.update=()=>{t.$$.dirty&1&&n(3,l=s.currentTurn.isNormal()),t.$$.dirty&1&&n(2,r=s.getTile())},[s,c,r,l,i,a,_,h,f]}class zn extends re{constructor(e){super();ie(this,e,qn,Un,oe,{player:0})}}function St(t,e,n){const l=t.slice();return l[5]=e[n],l[7]=n,l}function Vn(t){let e,n,l,r,o,i,s,a,u;l=new zn({props:{player:t[1]}}),i=new pn({});let c=t[2],_=[];for(let f=0;f<c.length;f+=1)_[f]=Et(St(t,c,f));const h=f=>O(_[f],1,1,()=>{_[f]=null});return{c(){e=b("div"),n=b("div"),ae(l.$$.fragment),r=L(),o=b("div"),ae(i.$$.fragment),s=L(),a=b("div");for(let f=0;f<_.length;f+=1)_[f].c();k(n,"class","col-md"),k(o,"class","col-md"),k(e,"class","row"),k(a,"class","row")},m(f,m){v(f,e,m),d(e,n),ue(l,n,null),d(e,r),d(e,o),ue(i,o,null),v(f,s,m),v(f,a,m);for(let T=0;T<_.length;T+=1)_[T].m(a,null);u=!0},p(f,m){const T={};if(m&2&&(T.player=f[1]),l.$set(T),m&4){c=f[2];let C;for(C=0;C<c.length;C+=1){const $=St(f,c,C);_[C]?(_[C].p($,m),S(_[C],1)):(_[C]=Et($),_[C].c(),S(_[C],1),_[C].m(a,null))}for(de(),C=c.length;C<_.length;C+=1)h(C);_e()}},i(f){if(!u){S(l.$$.fragment,f),S(i.$$.fragment,f);for(let m=0;m<c.length;m+=1)S(_[m]);u=!0}},o(f){O(l.$$.fragment,f),O(i.$$.fragment,f),_=_.filter(Boolean);for(let m=0;m<_.length;m+=1)O(_[m]);u=!1},d(f){f&&g(e),ce(l),ce(i),f&&g(s),f&&g(a),x(_,f)}}}function Kn(t){let e;return{c(){e=b("div"),k(e,"class","spinner primary")},m(n,l){v(n,e,l)},p:M,i:M,o:M,d(n){n&&g(e)}}}function Et(t){let e,n;return e=new Qn({props:{tile:t[5]}}),{c(){ae(e.$$.fragment)},m(l,r){ue(e,l,r),n=!0},p(l,r){const o={};r&4&&(o.tile=l[5]),e.$set(o)},i(l){n||(S(e.$$.fragment,l),n=!0)},o(l){O(e.$$.fragment,l),n=!1},d(l){ce(e,l)}}}function Jn(t){let e,n,l,r;const o=[Kn,Vn],i=[];function s(a,u){return a[0]?a[1]!=null?1:-1:0}return~(e=s(t))&&(n=i[e]=o[e](t)),{c(){n&&n.c(),l=pe()},m(a,u){~e&&i[e].m(a,u),v(a,l,u),r=!0},p(a,[u]){let c=e;e=s(a),e===c?~e&&i[e].p(a,u):(n&&(de(),O(i[c],1,1,()=>{i[c]=null}),_e()),~e?(n=i[e],n?n.p(a,u):(n=i[e]=o[e](a),n.c()),S(n,1),n.m(l.parentNode,l)):n=null)},i(a){r||(S(n),r=!0)},o(a){O(n),r=!1},d(a){~e&&i[e].d(a),a&&g(l)}}}function Wn(t,e,n){let l,r;Z(t,W,a=>n(1,l=a)),Z(t,be,a=>n(2,r=a));let o=!1;H.addListener("ready",()=>{n(0,o=R.ready),console.log("game ready")});let{playerAmount:i=2}=e;un(()=>{});let{mapname:s="random"}=e;return jn(s,i),t.$$set=a=>{"playerAmount"in a&&n(3,i=a.playerAmount),"mapname"in a&&n(4,s=a.mapname)},[o,l,r,i,s]}class Xn extends re{constructor(e){super();ie(this,e,Wn,Jn,oe,{playerAmount:3,mapname:4})}}function Bt(t,e,n){const l=t.slice();return l[9]=e[n][0],l[10]=e[n][1],l}function Ot(t,e,n){const l=t.slice();return l[13]=e[n],l}function Zn(t){return{c:M,m:M,p:M,i:M,o:M,d:M}}function xn(t){let e,n,l=!t[16]&&el();return{c(){l&&l.c(),e=pe()},m(r,o){l&&l.m(r,o),v(r,e,o),n=!0},p:M,i(r){n||(S(l),n=!0)},o(r){O(l),n=!1},d(r){l&&l.d(r),r&&g(e)}}}function el(t){let e,n;return e=new Bn({}),{c(){ae(e.$$.fragment)},m(l,r){ue(e,l,r),n=!0},i(l){n||(S(e.$$.fragment,l),n=!0)},o(l){O(e.$$.fragment,l),n=!1},d(l){ce(e,l)}}}function tl(t){return{c:M,m:M,p:M,i:M,o:M,d:M}}function nl(t){let e;return{c(){e=b("div"),k(e,"class","spinner primary")},m(n,l){v(n,e,l)},p:M,i:M,o:M,d(n){n&&g(e)}}}function ll(t){let e,n,l,r,o,i,s,a,u,c,_,h,f,m,T,C=t[0],$=[];for(let y=0;y<C.length;y+=1)$[y]=Yt(Ot(t,C,y));let p=t[1][t[2]]!=null&&Qt(t);return{c(){e=b("div"),n=b("div"),l=b("div"),l.innerHTML="<h3>Please select a map:</h3>",r=L(),o=b("div");for(let y=0;y<$.length;y+=1)$[y].c();i=L(),s=b("div"),a=b("button"),a.textContent="Play",u=L(),c=b("div"),_=b("div"),_.innerHTML="<h3>Info</h3>",h=L(),f=b("div"),p&&p.c(),k(l,"class","section"),k(o,"class","section"),k(a,"class","button primary"),k(s,"class","section dark button-group"),k(n,"class","card"),k(_,"class","section"),k(f,"class","section"),k(c,"class","card"),k(e,"class","row")},m(y,w){v(y,e,w),d(e,n),d(n,l),d(n,r),d(n,o);for(let I=0;I<$.length;I+=1)$[I].m(o,null);d(n,i),d(n,s),d(s,a),d(e,u),d(e,c),d(c,_),d(c,h),d(c,f),p&&p.m(f,null),m||(T=V(a,"click",t[4]),m=!0)},p(y,w){if(w&5){C=y[0];let I;for(I=0;I<C.length;I+=1){const j=Ot(y,C,I);$[I]?$[I].p(j,w):($[I]=Yt(j),$[I].c(),$[I].m(o,null))}for(;I<$.length;I+=1)$[I].d(1);$.length=C.length}y[1][y[2]]!=null?p?p.p(y,w):(p=Qt(y),p.c(),p.m(f,null)):p&&(p.d(1),p=null)},i:M,o:M,d(y){y&&g(e),x($,y),p&&p.d(),m=!1,T()}}}function rl(t){let e,n,l,r;return n=new Xn({props:{mapname:t[2],playerAmount:t[1][t[2]].players}}),{c(){e=b("div"),ae(n.$$.fragment),e.hidden=l=!t[3]},m(o,i){v(o,e,i),ue(n,e,null),r=!0},p(o,i){const s={};i&4&&(s.mapname=o[2]),i&6&&(s.playerAmount=o[1][o[2]].players),n.$set(s),(!r||i&8&&l!==(l=!o[3]))&&(e.hidden=l)},i(o){r||(S(n.$$.fragment,o),r=!0)},o(o){O(n.$$.fragment,o),r=!1},d(o){o&&g(e),ce(n)}}}function Yt(t){let e,n,l,r,o=t[13]+"",i,s,a,u,c;return{c(){e=b("label"),n=b("input"),r=L(),i=P(o),s=L(),a=b("br"),k(n,"type","radio"),k(n,"name","maps"),n.__value=l=t[13],n.value=n.__value,t[6][0].push(n)},m(_,h){v(_,e,h),d(e,n),n.checked=n.__value===t[2],d(e,r),d(e,i),v(_,s,h),v(_,a,h),u||(c=V(n,"change",t[5]),u=!0)},p(_,h){h&1&&l!==(l=_[13])&&(n.__value=l,n.value=n.__value),h&4&&(n.checked=n.__value===_[2]),h&1&&o!==(o=_[13]+"")&&N(i,o)},d(_){_&&g(e),t[6][0].splice(t[6][0].indexOf(n),1),_&&g(s),_&&g(a),u=!1,c()}}}function Qt(t){let e,n,l,r,o,i,s,a,u,c,_,h=t[1][t[2]].description+"",f,m,T,C=Object.entries(t[1][t[2]]).filter(Ft),$=[];for(let p=0;p<C.length;p+=1)$[p]=Dt(Bt(t,C,p));return{c(){for(let p=0;p<$.length;p+=1)$[p].c();e=L(),n=b("label"),n.innerHTML="<b>Players:</b>",l=L(),r=b("input"),s=b("br"),a=L(),u=b("b"),u.textContent="Description:",c=L(),_=b("p"),f=P(h),k(n,"for","playerAmount"),k(r,"name","playerAmount"),k(r,"type","number"),k(r,"max",o=X.length),k(r,"min",i=2)},m(p,y){for(let w=0;w<$.length;w+=1)$[w].m(p,y);v(p,e,y),v(p,n,y),v(p,l,y),v(p,r,y),ht(r,t[1][t[2]].players),v(p,s,y),v(p,a,y),v(p,u,y),v(p,c,y),v(p,_,y),d(_,f),m||(T=V(r,"input",t[7]),m=!0)},p(p,y){if(y&6){C=Object.entries(p[1][p[2]]).filter(Ft);let w;for(w=0;w<C.length;w+=1){const I=Bt(p,C,w);$[w]?$[w].p(I,y):($[w]=Dt(I),$[w].c(),$[w].m(e.parentNode,e))}for(;w<$.length;w+=1)$[w].d(1);$.length=C.length}y&6&&Ut(r.value)!==p[1][p[2]].players&&ht(r,p[1][p[2]].players),y&6&&h!==(h=p[1][p[2]].description+"")&&N(f,h)},d(p){x($,p),p&&g(e),p&&g(n),p&&g(l),p&&g(r),p&&g(s),p&&g(a),p&&g(u),p&&g(c),p&&g(_),m=!1,T()}}}function Dt(t){let e,n=t[9][0].toUpperCase()+t[9].slice(1)+"",l,r,o=t[10]+"",i,s,a;return{c(){e=b("b"),l=P(n),r=P(": "),i=P(o),s=L(),a=b("br")},m(u,c){v(u,e,c),d(e,l),v(u,r,c),v(u,i,c),v(u,s,c),v(u,a,c)},p(u,c){c&6&&n!==(n=u[9][0].toUpperCase()+u[9].slice(1)+"")&&N(l,n),c&6&&o!==(o=u[10]+"")&&N(i,o)},d(u){u&&g(e),u&&g(r),u&&g(i),u&&g(s),u&&g(a)}}}function il(t){let e,n,l,r,o,i,s;e=new Tn({});let a={ctx:t,current:null,token:null,hasCatch:!1,pending:tl,then:xn,catch:Zn,value:16,blocks:[,,,]};cn(Ve(),a);const u=[rl,ll,nl],c=[];function _(h,f){return h[3]?0:h[0]!=null?1:2}return o=_(t),i=c[o]=u[o](t),{c(){ae(e.$$.fragment),n=L(),l=b("main"),a.block.c(),r=L(),i.c()},m(h,f){ue(e,h,f),v(h,n,f),v(h,l,f),a.block.m(l,a.anchor=null),a.mount=()=>l,a.anchor=r,d(l,r),c[o].m(l,null),s=!0},p(h,[f]){t=h,fn(a,t,f);let m=o;o=_(t),o===m?c[o].p(t,f):(de(),O(c[m],1,1,()=>{c[m]=null}),_e(),i=c[o],i?i.p(t,f):(i=c[o]=u[o](t),i.c()),S(i,1),i.m(l,null))},i(h){s||(S(e.$$.fragment,h),S(a.block),S(i),s=!0)},o(h){O(e.$$.fragment,h);for(let f=0;f<3;f+=1){const m=a.blocks[f];O(m)}O(i),s=!1},d(h){ce(e,h),h&&g(n),h&&g(l),a.block.d(),a.token=null,a=null,c[o].d()}}}const Ft=([t,e])=>!["generator","description","players"].includes(t);function ol(t,e,n){let l,r;Z(t,fe,h=>n(3,l=h)),Z(t,wt,h=>n(8,r=h));let o,i={};dn(async()=>{const h=await Ve();if(console.log(h?"Running in browser":"Running in electron"),h){const f=await(await fetch(r+"/maps/list.json")).json();n(0,o=f)}else{const f=await window.api.GetContentFolder();mt(wt,r=f,r),n(0,o=await window.api.GetMaps())}o.forEach(async f=>{const m=r+`/maps/${f}/map.json`,T=h?await(await fetch(m)).json():await window.api.LoadPath(m);n(1,i[f]=T,i)})});let s="random";function a(){mt(fe,l=!0,l)}const u=[[]];function c(){s=this.__value,n(2,s)}function _(){i[s].players=Ut(this.value),n(1,i)}return[o,i,s,l,a,c,u,_]}class sl extends re{constructor(e){super();ie(this,e,ol,il,oe,{})}}new sl({target:document.body});
