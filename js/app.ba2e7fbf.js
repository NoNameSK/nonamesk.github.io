(function(){"use strict";var t={7132:function(t,e,n){var o=n(9242),i=n(3396);const r={class:"main-container"};function a(t,e,n,o,a,s){const l=(0,i.up)("contributions-chart"),u=(0,i.up)("contribution-activity");return(0,i.wg)(),(0,i.iD)("div",r,[(0,i.Wm)(l,{onYearChanged:s.handleYearChanged},null,8,["onYearChanged"]),(0,i.Wm)(u)])}n(7658);var s=n(7139);const l={class:"contributions-chart"},u={class:"total-contributions"},c={class:"chart"},d=["title"],h={class:"legend"},b=(0,i._)("div",{class:"legend-label"},"Less",-1),f={class:"legend-label"},g=(0,i._)("div",{class:"legend-label"},"More",-1),m={class:"year-selector"};function w(t,e,n,o,r,a){const w=(0,i.up)("a-radio-button"),v=(0,i.up)("a-radio-group");return(0,i.wg)(),(0,i.iD)("div",l,[(0,i._)("div",null,[(0,i._)("div",u," Total contributions: "+(0,s.zw)(a.totalContributions),1),(0,i._)("div",c,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.monthLabels,((t,e)=>((0,i.wg)(),(0,i.iD)("div",{class:"month",key:e,style:(0,s.j5)({gridColumn:4*e+2})},(0,s.zw)(t.name),5)))),128)),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.filteredDayLabels,((t,e)=>((0,i.wg)(),(0,i.iD)("div",{class:"day-label",key:e,style:(0,s.j5)({gridRow:2*e+2})},(0,s.zw)(t),5)))),128)),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.contributions,((t,e)=>((0,i.wg)(),(0,i.iD)("div",{key:e,class:(0,s.C_)(["day",a.getContributionClass(t)]),style:(0,s.j5)({gridRow:a.getDayGridRow(t.date),gridColumn:a.getDayGridColumn(t.date)+1}),title:t.title},null,14,d)))),128))]),(0,i._)("div",h,[b,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.legendItems,((t,e)=>((0,i.wg)(),(0,i.iD)("div",{class:"legend-item",key:e},[(0,i._)("div",{class:(0,s.C_)(["legend-color",t.class])},null,2),(0,i._)("div",f,(0,s.zw)(t.label),1)])))),128)),g])]),(0,i._)("div",m,[(0,i.Wm)(v,{class:"year-selector-container",value:r.selectedYear,onInput:a.handleYearInput,"button-style":"solid"},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.years,(t=>((0,i.wg)(),(0,i.j4)(w,{key:t,value:t,style:{display:"block"}},{default:(0,i.w5)((()=>[(0,i.Uk)((0,s.zw)(t),1)])),_:2},1032,["value"])))),128))])),_:1},8,["value","onInput"])])])}var v=n(3338),y={name:"ContributionsChart",components:{[v.ZP.Group.name]:v.ZP.Group,[v.ZP.Button.name]:v.ZP.Button},data(){return{fetchedData:[],contributions:[],selectedYear:(new Date).getFullYear(),years:Array.from({length:12},((t,e)=>2012+e))}},computed:{totalContributions(){return this.contributions.reduce(((t,e)=>t+e.contributions),0)},filteredDayLabels(){return["Mon","Wed","Fri"]},monthLabels(){const t=[];let e=null;return this.contributions.forEach((n=>{const o=new Date(n.date).toLocaleDateString("default",{month:"short"}),i=this.getDayGridColumn(n.date)+1;e!==o&&(t.push({name:o,gridColumn:i}),e=o)})),t},legendItems(){return[{class:"no-contributions",label:""},{class:"few-contributions",label:""},{class:"some-contributions",label:""},{class:"many-contributions",label:""},{class:"max-contributions",label:""}]}},methods:{handleYearInput(t){this.selectedYear=t.target.value,this.changeYear()},async fetchData(){const t=await fetch("./mocks/github-dataset.json"),e=await t.json();this.fetchedData=e,this.contributions=this.generateContributionsData(this.selectedYear)},generateContributionsData(t){const e=new Date(t,0,1),n=new Date(t,11,31),o=Math.floor((n-e)/864e5)+1,i=[];for(let r=0;r<o;r++){const t=new Date(e);t.setDate(t.getDate()+r);const n=t.toISOString().slice(0,10),o=this.fetchedData.filter((t=>new Date(t.created_at).toISOString().slice(0,10)===n)).length;i.push({date:n,contributions:o,title:`${o} contributions on ${n}`})}return i},changeYear(){this.fetchData(),this.$emit("yearChanged",this.selectedYear)},getContributionClass(t){const{contributions:e}=t;let n="no-contributions";return e>=1&&e<=2?n="few-contributions":e>=3&&e<=4?n="some-contributions":e>=5&&e<=6?n="many-contributions":e>=7&&(n="max-contributions"),n},getDayGridRow(t){return new Date(t).getDay()+2},getDayGridColumn(t){const e=new Date(this.contributions[0].date),n=Math.floor((new Date(t)-e)/864e5);return Math.floor(n/7)+1}},watch:{selectedYear(t){this.$emit("year-changed",t)}},mounted(){this.fetchData()}},p=n(89);const D=(0,p.Z)(y,[["render",w]]);var C=D;const _={class:"date"},Y={class:"commits"},j={class:"pulls"},k={key:1};function O(t,e,n,o,r,a){const l=(0,i.up)("a-timeline-item"),u=(0,i.up)("a-timeline");return(0,i.wg)(),(0,i.iD)("div",null,[Object.keys(a.filteredContributions).length?((0,i.wg)(),(0,i.j4)(u,{key:0},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.filteredContributions,((t,e)=>((0,i.wg)(),(0,i.j4)(l,{key:e},{default:(0,i.w5)((()=>[(0,i._)("div",_,(0,s.zw)(e),1),(0,i._)("div",Y,"Commits: "+(0,s.zw)(t.commits),1),(0,i._)("div",j,"Pull Requests: "+(0,s.zw)(t.pulls),1)])),_:2},1024)))),128))])),_:1})):((0,i.wg)(),(0,i.iD)("div",k,"No data"))])}var P={name:"ContributionActivity",data(){return{rawContributions:[]}},computed:{fromDate(){return this.$route.query.from||`${(new Date).getFullYear()}-01-01`},toDate(){return this.$route.query.to||`${(new Date).getFullYear()}-12-31`},sortedContributions(){const t=this.rawContributions.map((t=>({date:t.created_at.split(" ")[0],commits:"PushEvent"===t.type?1:0,pulls:"PullRequestEvent"===t.type?1:0})));return t.sort(((t,e)=>new Date(e.date)-new Date(t.date))).reduce(((t,e)=>{const n=`${new Date(e.date).getFullYear()}-${(new Date(e.date).getMonth()+1).toString().padStart(2,"0")}`;return t[n]||(t[n]={commits:0,pulls:0}),t[n].commits+=e.commits,t[n].pulls+=e.pulls,t}),{})},filteredContributions(){const t=new Date(this.fromDate),e=new Date(this.toDate);return Object.entries(this.sortedContributions).filter((([n])=>{const o=new Date(n);return o>=t&&o<=e})).reduce(((t,[e,n])=>(t[e]=n,t)),{})}},async created(){const t=await fetch("./mocks/github-dataset.json"),e=await t.json();this.rawContributions=e}};const $=(0,p.Z)(P,[["render",O],["__scopeId","data-v-604dd5a2"]]);var S=$,I={name:"App",components:{ContributionActivity:S,ContributionsChart:C},methods:{handleYearChanged(t){this.$router.push({query:{from:`${t}-01-01`,to:`${t}-12-31`}})}}};const M=(0,p.Z)(I,[["render",a]]);var z=M,Z=n(7382),x=n(407),G=n.n(x),H=n(678);const F=[{path:"/",name:"Home",component:z}],K=(0,H.p7)({history:(0,H.PO)(),routes:F});var L=K;const R=(0,o.ri)(z);R.use(L),R.use(Z.ZP),R.use(G()),R.mount("#app")}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={exports:{}};return t[o].call(r.exports,r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,o,i,r){if(!o){var a=1/0;for(c=0;c<t.length;c++){o=t[c][0],i=t[c][1],r=t[c][2];for(var s=!0,l=0;l<o.length;l++)(!1&r||a>=r)&&Object.keys(n.O).every((function(t){return n.O[t](o[l])}))?o.splice(l--,1):(s=!1,r<a&&(a=r));if(s){t.splice(c--,1);var u=i();void 0!==u&&(e=u)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[o,i,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var i,r,a=o[0],s=o[1],l=o[2],u=0;if(a.some((function(e){return 0!==t[e]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(l)var c=l(n)}for(e&&e(o);u<a.length;u++)r=a[u],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(c)},o=self["webpackChunkvue_activity_timeline"]=self["webpackChunkvue_activity_timeline"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(7132)}));o=n.O(o)})();
//# sourceMappingURL=app.ba2e7fbf.js.map