(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Union"],{"2c56":function(i,n,t){"use strict";t.r(n);var e=function(){var i=this,n=i._self._c;i._self._setupProxy;return n("div",{staticClass:"union-mining"},[n("div",{staticClass:"pool"},[n("div",{staticClass:"title"},[n("img",{attrs:{src:t("fe6a")}}),n("span",[i._v(i._s(i.$t("union.text1")))])]),n("div",{staticClass:"reward"},[n("div",[n("span",[i._v(i._s(i.$t("union.text2")))]),n("span",[i._v(i._s(i.taked))])]),n("div",[n("span",[i._v(i._s(i.$t("union.text3")))]),n("span",[i._v(i._s(i.earned))])])]),n("div",{staticClass:"bottom"},[n("el-button",{attrs:{type:"primary",loading:i.loading,disabled:i.earned<=0},on:{click:i.takeReward}},[i._v(i._s(i.stateText))]),n("span",{staticClass:"click",on:{click:function(n){return i.openRecord("take")}}},[i._v(i._s(i.$t("union.text4"))+" ")])],1)]),n("union-record",{ref:"Unionrecord"})],1)},o=[],d=t("2f62"),a=t("8346"),r={components:{"union-record":()=>t.e("chunk-914a9376").then(t.bind(null,"5b3c"))},data(){return{loading:!1,earned:0,taked:0}},computed:{...Object(d["b"])(["contracts","address"]),stateText(){return this.loading?this.$t("node.text13"):this.$t("union.text5")}},created(){this.contracts&&this.init()},methods:{async init(){const i=await this.contracts.LeaguePool.methods.earned(this.address).call(),n=await this.contracts.LeaguePool.methods.userPoolInfo(this.address).call();this.earned=i.fromWei().toFixed(2),this.taked=n.taked.fromWei().toFixed(2)},takeReward(){let i=this.contracts.LeaguePool.methods.takeReward();i.call({from:this.address},(n,t)=>{n?(this.loading=!1,Object(a["c"])(this.$t("node.text17"),"error")):(this.loading=!0,i.send({from:this.address}).on("receipt",async()=>{Object(a["c"])(this.$t("node.text16"),"success"),this.init(),this.loading=!1}).on("error",()=>{this.loading=!1,Object(a["c"])(this.$t("node.text17"),"error")}))})},openRecord(i){this.$refs.Unionrecord.open(i)}}},p=r,s=p,l=(t("a8c4"),t("2877")),f=Object(l["a"])(s,e,o,!1,null,"0b1d216f",null);n["default"]=f.exports},"543d":function(i,n,t){var e=t("24fb");n=e(!1),n.push([i.i,'.union-mining[data-v-0b1d216f]{padding-top:60px}.union-mining>.header[data-v-0b1d216f]{padding:55px 105px 10px 0;border-bottom:1px solid #8757fa;display:flex;align-items:flex-start;justify-content:space-between;flex-direction:row;background-size:482px 349px;background-repeat:no-repeat;background-position:546px -2px;background-image:radial-gradient(rgba(215,29,246,.6),transparent,transparent)}.union-mining>.header>.content[data-v-0b1d216f]{padding-top:14px;display:flex;align-items:flex-start;justify-content:center;flex-direction:column}.union-mining>.header>.content>h2[data-v-0b1d216f]{font-weight:800;margin-bottom:21px;color:#fff;font-size:30px;line-height:40px}.union-mining>.header>.content>p[data-v-0b1d216f]{width:421px;text-align:left;color:#8178c7;font-size:14px;line-height:19px;margin-bottom:50px}.union-mining>.header>.content>.power[data-v-0b1d216f]{display:flex;align-items:center;justify-content:center;flex-direction:row;color:#fff;font-size:16px;line-height:21px}.union-mining>.header>.content>.power>div>span[data-v-0b1d216f]{color:#cc1cf7}.union-mining>.header>.content>.power>div>.colour[data-v-0b1d216f]{color:#28b1f5}.union-mining>.header>.content>.power>.centre[data-v-0b1d216f]{margin:0 55px}.union-mining>.header>img[data-v-0b1d216f]{width:230px}.union-mining>div[data-v-0b1d216f]{position:relative}.union-mining>div.pool[data-v-0b1d216f]{border:1px solid #8757fa;width:517px;margin:40px auto 0;padding:36px 39px;border-radius:20px;padding:18px 35px 31px;background:#fff;box-sizing:border-box;border:1px solid #082d7e}.union-mining>div.pool>.title[data-v-0b1d216f]{display:flex;align-items:center;justify-content:flex-start;flex-direction:row;color:#3d3d3d;font-size:18px;line-height:24px}.union-mining>div.pool>.title>img[data-v-0b1d216f]{width:36px;margin-right:15px}.union-mining>div.pool>.info[data-v-0b1d216f]{border-radius:10px;margin:37px 0 11px;display:flex;align-items:center;justify-content:center;flex-direction:column}.union-mining>div.pool>.info>div[data-v-0b1d216f]{width:100%;display:flex;align-items:center;justify-content:space-between;flex-direction:row;padding:25px 34px}.union-mining>div.pool>.info>div>div[data-v-0b1d216f]{display:flex;align-items:center;justify-content:center center;flex-direction:row;color:#8757fa;font-size:16px;line-height:21px}.union-mining>div.pool>.info>div>div>img[data-v-0b1d216f]{width:19.4px;height:18.56px;margin-right:13px}.union-mining>div.pool>.info>div>span[data-v-0b1d216f]{color:#fff;font-size:20px;line-height:27px;font-weight:700}.union-mining>div.pool>.reward[data-v-0b1d216f]{display:grid;padding:35px 0;margin-top:11px;position:relative;border-radius:10px;grid-template-columns:repeat(2,1fr);background:linear-gradient(180deg,#dae5ff,#fff);box-sizing:border-box;border:0 solid #082d7e;box-shadow:0 4px 7px 0 rgba(0,0,0,.3)}.union-mining>div.pool>.reward>div[data-v-0b1d216f]{display:flex;align-items:center;justify-content:center;flex-direction:column}.union-mining>div.pool>.reward>div>span[data-v-0b1d216f]:first-child{color:#082d7e;font-size:16px;line-height:21px}.union-mining>div.pool>.reward>div>span[data-v-0b1d216f]:nth-child(2){margin-top:16px;color:#666;font-size:20px;line-height:27px}.union-mining>div.pool>.reward[data-v-0b1d216f]:after{content:"";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:1px;height:64px;background-color:#d8d8d8}.union-mining>div.pool>.bottom>button[data-v-0b1d216f]{width:100%;padding:15px 0;margin:19px 0}.union-mining>div.pool>.bottom>span[data-v-0b1d216f]{color:#333;font-size:14px;line-height:19px}@media screen and (max-width:1000px){.union-mining[data-v-0b1d216f]{padding:0 14px}.union-mining>.header[data-v-0b1d216f]{padding:55px 105px 10px 0;border-bottom:1px solid #8757fa;display:flex;align-items:flex-start;justify-content:space-between;flex-direction:row;background-size:482px 349px;background-repeat:no-repeat;background-position:546px -2px;background-image:radial-gradient(rgba(215,29,246,.6),transparent,transparent);display:none}.union-mining>.header>.content[data-v-0b1d216f]{padding-top:14px;display:flex;align-items:flex-start;justify-content:center;flex-direction:column}.union-mining>.header>.content>h2[data-v-0b1d216f]{font-weight:800;margin-bottom:21px;color:#fff;font-size:30px;line-height:40px}.union-mining>.header>.content>p[data-v-0b1d216f]{width:421px;text-align:left;color:#8178c7;font-size:14px;line-height:19px;margin-bottom:50px}.union-mining>.header>.content>.power[data-v-0b1d216f]{display:flex;align-items:center;justify-content:center;flex-direction:row;color:#fff;font-size:16px;line-height:21px}.union-mining>.header>.content>.power>div>span[data-v-0b1d216f]{color:#cc1cf7}.union-mining>.header>.content>.power>div>.colour[data-v-0b1d216f]{color:#28b1f5}.union-mining>.header>.content>.power>.centre[data-v-0b1d216f]{margin:0 55px}.union-mining>.header>img[data-v-0b1d216f]{width:230px}.union-mining>div[data-v-0b1d216f]{position:relative}.union-mining>div.pool[data-v-0b1d216f]{border:1px solid #8757fa;width:100%;margin:40px auto 0;border-radius:20px;padding:20px 20px 50px;background:#301b50}.union-mining>div.pool>.title[data-v-0b1d216f]{display:flex;align-items:center;justify-content:flex-start;flex-direction:row;color:#fff;font-size:14px;line-height:19px}.union-mining>div.pool>.title>img[data-v-0b1d216f]{width:32px;margin-right:15px}.union-mining>div.pool>.info[data-v-0b1d216f]{border-radius:10px;margin:20px 0 11px;display:flex;align-items:center;justify-content:center;flex-direction:column}.union-mining>div.pool>.info>div[data-v-0b1d216f]{width:100%;display:flex;align-items:center;justify-content:space-between;flex-direction:row;padding:15px 21px}.union-mining>div.pool>.info>div>div[data-v-0b1d216f]{display:flex;align-items:center;justify-content:center center;flex-direction:row;color:#8757fa;font-size:14px;line-height:21px}.union-mining>div.pool>.info>div>div>img[data-v-0b1d216f]{width:19.4px;height:18.56px;margin-right:13px}.union-mining>div.pool>.info>div>span[data-v-0b1d216f]{color:#fff;font-size:20px;line-height:27px;font-weight:700}.union-mining>div.pool>.reward[data-v-0b1d216f]{display:grid;padding:15px 0;margin-top:11px;position:relative;border-radius:10px;background-color:#181525;grid-template-columns:repeat(2,1fr)}.union-mining>div.pool>.reward>div[data-v-0b1d216f]{display:flex;align-items:center;justify-content:center;flex-direction:column}.union-mining>div.pool>.reward>div>span[data-v-0b1d216f]:first-child{color:#8757fa;font-size:14px;line-height:21px}.union-mining>div.pool>.reward>div>span[data-v-0b1d216f]:nth-child(2){margin-top:16px;color:#fff;font-size:16px;line-height:27px}.union-mining>div.pool>.reward[data-v-0b1d216f]:after{content:"";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:1px;height:64px;background-color:#8757fa}.union-mining>div.pool>.bottom>button[data-v-0b1d216f]{width:100%;padding:15px 0;margin:31px 0 10px}.union-mining>div.pool>.bottom>span[data-v-0b1d216f]{color:#e33bed;font-size:14px;line-height:19px}}',""]),i.exports=n},a8c4:function(i,n,t){"use strict";t("b0a6")},b0a6:function(i,n,t){var e=t("543d");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[i.i,e,""]]),e.locals&&(i.exports=e.locals);var o=t("499e").default;o("40f2d8ca",e,!0,{sourceMap:!1,shadowMode:!1})},fe6a:function(i,n,t){i.exports=t.p+"img/union-logo.7b9580b4.png"}}]);