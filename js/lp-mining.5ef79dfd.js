(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["lp-mining"],{"037c":function(e,t,i){"use strict";i("e886")},1685:function(e,t,i){"use strict";i("835c")},"1def":function(e,t,i){e.exports=i.p+"img/total-power.1801874e.png"},2986:function(e,t,i){e.exports=i.p+"img/my-power.bc5f5866.png"},3312:function(e,t,i){e.exports=i.p+"img/empty-record.45b52dc3.png"},"3cfc":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("transition",{attrs:{name:"el-fade-in-linear"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"deposit",class:e.theme?"theme1-modal":"theme2-modal",on:{click:function(t){e.show=!1}}},[t("div",{staticClass:"container",on:{click:function(e){e.stopPropagation()}}},[t("div",{staticClass:"title"},[t("span",[e._v(e._s(e.$t("deposit.text1")))]),t("i",{staticClass:"el-icon-close click",on:{click:function(t){e.show=!1}}})]),t("div",{staticClass:"content"},[t("div",{staticClass:"input-container"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{autofocus:"",type:"text",placeholder:"0"},domProps:{value:e.value},on:{input:[function(t){t.target.composing||(e.value=t.target.value)},e.input]}}),t("span",[e._v("USDT")]),t("button",{on:{click:e.max}},[e._v(e._s(e.$t("deposit.text3")))])]),t("el-button",{attrs:{type:"primary",loading:e.loading||e.approveing},on:{click:e.pledge}},[e._v(e._s(e.stateText))])],1)])])])},o=[],n=i("2f62"),d=i("8346"),r={data(){return{show:!1,balance:0,allowance:0,minValueOnce:0,value:"",loading:!1,approveing:!1}},props:["lpinit"],computed:{...Object(n["b"])(["contracts","address","theme"]),stateText(){return this.loading?this.$t("deposit.text11"):this.approveing?this.$t("deposit.text12"):this.$t("deposit.text6")}},methods:{open(){this.show=!0,this.init()},max(){this.value=this.balance,this.input()},async input(){if(""==this.value)return;await this.contracts.StaticPool.methods.getPowerByUSDT(this.value.toWei()).call()},pledge(){return this.value<=0?Object(d["c"])(this.$t("deposit.text7"),"error"):this.value.toBN().lt(this.minValueOnce)?Object(d["c"])(this.$t("deposit.text10",{minValueOnce:this.minValueOnce}),"error"):this.balance.toBN().lt(this.value)?Object(d["c"])(this.$t("deposit.text15"),"error"):this.allowance.toBN().lt(this.value)?this.approve():void this.deposit()},approve(){this.approveing=!0,this.contracts.USDTToken.methods.approve(this.contracts.StaticPool.options.address,"1000000000000".toWei()).send({from:this.address}).on("receipt",()=>{Object(d["c"])(this.$t("node.text19"),"success"),this.contracts.USDTToken.methods.allowance(this.address,this.contracts.StaticPool.options.address).call((e,t)=>{e||(this.allowance=t.fromWei(),this.pledge())})}).on("error",e=>{console.log(e),this.approveing=!1,Object(d["c"])(this.$t("node.text20"),"error")})},cancel(){this.loading=!1,this.value="",this.show=!1},deposit(){this.approveing=!1,this.loading=!0;const e=this.contracts.StaticPool.methods.deposit(this.contracts.CCToken.options.address,this.value.toWei());e.call({from:this.address},(t,i)=>{t?(this.loading=!1,Object(d["c"])(this.$t("deposit.text9"),"error")):e.send({from:this.address}).on("receipt",async()=>{Object(d["c"])(this.$t("deposit.text8"),"success"),this.cancel(),this.init(),this.$emit("lpinit")}).on("error",()=>{this.loading=!1,Object(d["c"])(this.$t("deposit.text9"),"error")})})},init(){this.contracts.USDTToken.methods.balanceOf(this.address).call((e,t)=>{e||(this.balance=t.fromWei())}),this.contracts.USDTToken.methods.allowance(this.address,this.contracts.StaticPool.options.address).call((e,t)=>{e||(this.allowance=t.fromWei())}),this.contracts.StaticPool.methods.tokenConfigOf(this.contracts.CCToken.options.address).call((e,t)=>{e||(this.minValueOnce=t.minValueOnce.fromWei())})}}},p=r,s=p,l=(i("9bb0"),i("2877")),c=Object(l["a"])(s,a,o,!1,null,"41ed87ee",null);t["default"]=c.exports},"5e7f":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("transition",{attrs:{name:"el-fade-in-linear"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"take-record",on:{click:function(t){e.show=!1}}},[t("div",{staticClass:"box",on:{click:function(e){e.stopPropagation()}}},[t("div",{staticClass:"header"},[t("div",{staticClass:"token"},[e.isPC?t("div",{staticClass:"logo"},[t("img",{attrs:{src:i("7172")}}),t("img",{attrs:{src:i("0f62")}})]):t("img",{attrs:{src:i("8432")}}),t("span",{staticClass:"symbol"},[e._v(e._s(e.$t("takeRecord.text1")))])]),t("i",{staticClass:"el-icon-close click",on:{click:function(t){e.show=!1}}})]),t("div",{staticClass:"record"},[t("div",{staticClass:"title"},[t("span",[e._v(e._s(e.$t("takeRecord.text2")))]),t("span"),t("span",[e._v(e._s(e.$t("takeRecord.text3")))])]),e.lists.length>0?t("div",{staticClass:"lists"},e._l(e.lists,(function(i){return t("div",{staticClass:"item"},[t("div",[e._v(e._s(i.time))]),t("span"),t("div",[e._v(e._s(i.amount))])])})),0):t("div",{staticClass:"empty"},[t("img",{attrs:{src:i("3312")}}),t("span",[e._v(e._s(e.$t("takeRecord.text4")))])])])])])])},o=[],n=i("8346"),d={data(){return{show:!1,tag:"take",lists:[],isPC:!Object(n["b"])()}},computed:{},methods:{async init(){this.lists=[];let e=await this.$store.state.web3.eth.getBlockNumber(),t=await this.$store.state.contracts.StaticPool.getPastEvents("TakeReward",{fromBlock:e-500,toBlock:e,filter:{user:this.$store.state.address}});if(t.length>0){const e=t.map(e=>({amount:e.returnValues.reward.fromWei().toFixed(2),time:Object(n["a"])(e.returnValues.time),timestamp:Number(e.returnValues.time)}));this.lists=e.sort((e,t)=>t.timestamp-e.timestamp)}},open(e="take"){this.tag=e,this.show=!0,this.init()}}},r=d,p=r,s=(i("037c"),i("2877")),l=Object(s["a"])(p,a,o,!1,null,"4def671f",null);t["default"]=l.exports},"66b0":function(e,t,i){e.exports=i.p+"img/total-power.f19f7635.svg"},7400:function(e,t,i){var a=i("24fb"),o=i("1de5"),n=i("d2fe"),d=i("ad80");t=a(!1);var r=o(n),p=o(d);t.push([e.i,".theme1>#main>.lp-mining>.header[data-v-aeded578]{padding:55px 174px 37px 0;border-bottom:1px solid #d8d8d8;display:flex;align-items:flex-start;justify-content:space-between;flex-direction:row;background-size:482px 349px;background-repeat:no-repeat;background-position:467px -31px;background-image:radial-gradient(rgba(94,144,255,.6),transparent,transparent)}.theme1>#main>.lp-mining>.header>.content[data-v-aeded578]{padding-top:14px;display:flex;align-items:flex-start;justify-content:center;flex-direction:column}.theme1>#main>.lp-mining>.header>.content>h2[data-v-aeded578]{font-weight:800;margin-bottom:21px;color:#333;font-size:30px;line-height:40px}.theme1>#main>.lp-mining>.header>.content>p[data-v-aeded578]{width:421px;text-align:left;color:#3d3d3d;font-size:14px;line-height:19px}.theme1>#main>.lp-mining>.header>.banner[data-v-aeded578]{width:241px;height:186px;background-size:100%;background-image:url("+r+')}.theme1>#main>.lp-mining>.pool[data-v-aeded578]{border:1px solid #8757fa;width:517px;margin:39px auto 0;border-radius:20px;padding:18px 35px 50px;background:#fff;box-sizing:border-box;border:1px solid #082d7e}.theme1>#main>.lp-mining>.pool>.token[data-v-aeded578]{font-weight:700;color:#3d3d3d;font-size:18px;line-height:24px}.theme1>#main>.lp-mining>.pool>.token[data-v-aeded578],.theme1>#main>.lp-mining>.pool>.token>div[data-v-aeded578]{display:flex;align-items:center;justify-content:space-between;flex-direction:row}.theme1>#main>.lp-mining>.pool>.token>div>.logo[data-v-aeded578]{width:65px;overflow:hidden;margin-right:18px;display:flex;align-items:flex-end;justify-content:flex-start;flex-direction:row}.theme1>#main>.lp-mining>.pool>.token>div>.logo>.ccimg[data-v-aeded578]{width:47px}.theme1>#main>.lp-mining>.pool>.token>div>.logo>.usdtimg[data-v-aeded578]{width:36px;transform:translateX(-18px)}.theme1>#main>.lp-mining>.pool>.token>.shareOutBonus>button[data-v-aeded578]{background-image:none;background:linear-gradient(180deg,#082d7e,#5e90ff);box-shadow:0 8px 14px 0 rgba(0,0,0,.3);border:none;font-size:14px;line-height:14px;height:34px}.theme1>#main>.lp-mining>.pool>.powers[data-v-aeded578]{margin-top:37px;border-radius:10px;padding:30px 35px 29px 33px;background:linear-gradient(180deg,#dae5ff,#fff);box-sizing:border-box;border:0 solid #082d7e;box-shadow:0 4px 7px 0 rgba(0,0,0,.3)}.theme1>#main>.lp-mining>.pool>.powers>div[data-v-aeded578]{display:flex;align-items:center;justify-content:space-between;flex-direction:row;color:#666;font-size:20px;line-height:27px}.theme1>#main>.lp-mining>.pool>.powers>div>.title[data-v-aeded578]{display:flex;align-items:center;justify-content:space-between;flex-direction:row;color:#082d7e;font-size:16px;line-height:21px}.theme1>#main>.lp-mining>.pool>.powers>div>span[data-v-aeded578]{font-weight:700}.theme1>#main>.lp-mining>.pool>.powers>div.total-power[data-v-aeded578]{padding-left:2px}.theme1>#main>.lp-mining>.pool>.powers>div.total-power img[data-v-aeded578]{width:20px;margin-right:14px}.theme1>#main>.lp-mining>.pool>.powers>div.my-power[data-v-aeded578]{margin-top:23px}.theme1>#main>.lp-mining>.pool>.powers>div.my-power img[data-v-aeded578]{width:23px;margin-right:13px}.theme1>#main>.lp-mining>.pool>.earns[data-v-aeded578]{display:grid;padding:35px 0;margin-top:11px;position:relative;border-radius:10px;grid-template-columns:repeat(2,1fr);background:linear-gradient(180deg,#dae5ff,#fff);box-sizing:border-box;border:0 solid #082d7e;box-shadow:0 4px 7px 0 rgba(0,0,0,.3)}.theme1>#main>.lp-mining>.pool>.earns>div[data-v-aeded578]{display:flex;align-items:center;justify-content:center;flex-direction:column}.theme1>#main>.lp-mining>.pool>.earns>div>span[data-v-aeded578]:first-child{color:#082d7e;font-size:16px;line-height:21px}.theme1>#main>.lp-mining>.pool>.earns>div>span[data-v-aeded578]:nth-child(2){margin-top:16px;color:#666;font-size:20px;line-height:27px}.theme1>#main>.lp-mining>.pool>.earns[data-v-aeded578]:after{content:"";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:1px;height:64px;background-color:#d8d8d8}.theme1>#main>.lp-mining>.pool>.buttons[data-v-aeded578]{display:grid;-moz-column-gap:13px;column-gap:13px;margin-top:56px;grid-template-columns:repeat(2,1fr)}.theme1>#main>.lp-mining>.pool>.buttons>button[data-v-aeded578]{height:50px;border-radius:47px;background:linear-gradient(180deg,#082d7e,#5e90ff);box-shadow:0 8px 14px 0 rgba(0,0,0,.3),0 -9px 18px 0 rgba(225,234,255,.8)}.theme1>#main>.lp-mining>.pool>.buttons>button[data-v-aeded578]:nth-child(2){background-image:none;background:linear-gradient(180deg,hsla(0,0%,50.6%,.65) 3%,#fff 97%)}.theme1>#main>.lp-mining>.pool>.click[data-v-aeded578]{text-align:right;margin-top:37px;color:#333;font-size:14px;line-height:19px}@media screen and (max-width:1000px){.theme1>#main>.lp-mining[data-v-aeded578]{overflow:hidden;padding:17px 15px 0}.theme1>#main>.lp-mining>.header[data-v-aeded578]{border:none;position:relative;padding:0 0 24px 0;background-image:none}.theme1>#main>.lp-mining>.header>.content[data-v-aeded578]{padding-top:0}.theme1>#main>.lp-mining>.header>.content>h2[data-v-aeded578]{font-size:18px;line-height:24px;margin-bottom:18px;color:#082d7e}.theme1>#main>.lp-mining>.header>.content>p[data-v-aeded578]{width:165px;font-size:12px;line-height:19px}.theme1>#main>.lp-mining>.header>.banner[data-v-aeded578]{width:216px;height:135px;position:absolute;right:-40px;background-image:url('+r+")}.theme1>#main>.lp-mining>.pool[data-v-aeded578]{margin:0;width:100%;padding:15px 19px 39px;border-radius:18px;opacity:1;background:#fff;box-sizing:border-box;border:1px solid #082d7e}.theme1>#main>.lp-mining>.pool>.token[data-v-aeded578]{font-size:14px;line-height:19px}.theme1>#main>.lp-mining>.pool>.token>div>.logo[data-v-aeded578]{width:48px;margin-right:8px}.theme1>#main>.lp-mining>.pool>.token>div>.logo>.ccimg[data-v-aeded578]{width:35px}.theme1>#main>.lp-mining>.pool>.token>div>.logo>.usdtimg[data-v-aeded578]{width:26px;transform:translateX(-13px)}.theme1>#main>.lp-mining>.pool>.token>.shareOutBonus>button[data-v-aeded578]{background-image:none;background:linear-gradient(180deg,#082d7e,#5e90ff);box-shadow:0 8px 14px 0 rgba(0,0,0,.3);border:none;font-size:14px;line-height:14px;height:34px}.theme1>#main>.lp-mining>.pool>.powers[data-v-aeded578]{margin-top:22px;padding:34px 22px 30px 18px;background:linear-gradient(180deg,#dae5ff,#fff);box-sizing:border-box;border:0 solid #082d7e;box-shadow:0 4px 7px 0 rgba(0,0,0,.3)}.theme1>#main>.lp-mining>.pool>.powers>div[data-v-aeded578]{font-size:16px;line-height:21px;color:#666}.theme1>#main>.lp-mining>.pool>.powers>div>.title[data-v-aeded578]{font-size:14px;line-height:19px;color:#082d7e}.theme1>#main>.lp-mining>.pool>.powers>div.total-power img[data-v-aeded578]{margin-right:8px}.theme1>#main>.lp-mining>.pool>.powers>div.my-power[data-v-aeded578]{margin-top:28px}.theme1>#main>.lp-mining>.pool>.powers>div.my-power img[data-v-aeded578]{margin-right:7px}.theme1>#main>.lp-mining>.pool>.earns[data-v-aeded578]{padding:31px 0;background:linear-gradient(180deg,#dae5ff,#fff);box-sizing:border-box;border:0 solid #082d7e;box-shadow:0 4px 7px 0 rgba(0,0,0,.3)}.theme1>#main>.lp-mining>.pool>.earns>div>span[data-v-aeded578]:first-child{font-size:14px;line-height:19px;color:#082d7e}.theme1>#main>.lp-mining>.pool>.earns>div>span[data-v-aeded578]:nth-child(2){margin-top:23px;font-size:16px;line-height:21px;color:#666}.theme1>#main>.lp-mining>.pool>.earns[data-v-aeded578]:after{background-color:#d8d8d8}.theme1>#main>.lp-mining>.pool>.buttons[data-v-aeded578]{display:grid;-moz-column-gap:15px;column-gap:15px;margin-top:30px;grid-template-columns:repeat(2,1fr)}.theme1>#main>.lp-mining>.pool>.buttons>button[data-v-aeded578]{height:49px;border-radius:47px;opacity:1;background:linear-gradient(180deg,#082d7e,#5e90ff);box-shadow:0 8px 14px 0 rgba(0,0,0,.3),0 -9px 18px 0 rgba(225,234,255,.8)}.theme1>#main>.lp-mining>.pool>.buttons>button[data-v-aeded578]:nth-child(2){background-image:none;background:linear-gradient(180deg,hsla(0,0%,50.6%,.65) 3%,#fff 97%)}.theme1>#main>.lp-mining>.pool>.click[data-v-aeded578]{margin-top:26px;font-size:12px;line-height:16px;color:#333}}.theme2>#main>.lp-mining>.header[data-v-aeded578]{padding:55px 174px 37px 0;border-bottom:1px solid #8757fa;display:flex;align-items:flex-start;justify-content:space-between;flex-direction:row;background-size:482px 349px;background-repeat:no-repeat;background-position:467px -31px;background-image:radial-gradient(rgba(215,29,246,.6),transparent,transparent)}.theme2>#main>.lp-mining>.header>.content[data-v-aeded578]{padding-top:14px;display:flex;align-items:flex-start;justify-content:center;flex-direction:column}.theme2>#main>.lp-mining>.header>.content>h2[data-v-aeded578]{font-weight:800;margin-bottom:21px;color:#fff;font-size:30px;line-height:40px}.theme2>#main>.lp-mining>.header>.content>p[data-v-aeded578]{width:421px;text-align:left;color:#8178c7;font-size:14px;line-height:19px}.theme2>#main>.lp-mining>.header>.banner[data-v-aeded578]{width:241px;height:186px;background-size:100%;background-image:url("+p+')}.theme2>#main>.lp-mining>.pool[data-v-aeded578]{border:1px solid #8757fa;width:517px;margin:39px auto 0;border-radius:20px;padding:18px 35px 31px;background-color:#301b50}.theme2>#main>.lp-mining>.pool>.token[data-v-aeded578]{font-weight:700;color:#fff;font-size:18px;line-height:24px}.theme2>#main>.lp-mining>.pool>.token[data-v-aeded578],.theme2>#main>.lp-mining>.pool>.token>div[data-v-aeded578]{display:flex;align-items:center;justify-content:space-between;flex-direction:row}.theme2>#main>.lp-mining>.pool>.token>div>.logo[data-v-aeded578]{width:65px;overflow:hidden;margin-right:18px;display:flex;align-items:flex-end;justify-content:flex-start;flex-direction:row}.theme2>#main>.lp-mining>.pool>.token>div>.logo>.ccimg[data-v-aeded578]{width:47px}.theme2>#main>.lp-mining>.pool>.token>div>.logo>.usdtimg[data-v-aeded578]{width:36px;transform:translateX(-18px)}.theme2>#main>.lp-mining>.pool>.token>.shareOutBonus>button[data-v-aeded578]{background-image:none;background-color:#40267e;border:1px solid #9a18f5;font-size:14px;line-height:14px;height:34px}.theme2>#main>.lp-mining>.pool>.powers[data-v-aeded578]{margin-top:37px;border-radius:10px;padding:30px 35px 29px 33px;background-color:#181525}.theme2>#main>.lp-mining>.pool>.powers>div[data-v-aeded578]{display:flex;align-items:center;justify-content:space-between;flex-direction:row;color:#fff;font-size:20px;line-height:27px}.theme2>#main>.lp-mining>.pool>.powers>div>.title[data-v-aeded578]{display:flex;align-items:center;justify-content:space-between;flex-direction:row;color:#8757fa;font-size:16px;line-height:21px}.theme2>#main>.lp-mining>.pool>.powers>div>span[data-v-aeded578]{font-weight:700}.theme2>#main>.lp-mining>.pool>.powers>div.total-power[data-v-aeded578]{padding-left:2px}.theme2>#main>.lp-mining>.pool>.powers>div.total-power img[data-v-aeded578]{width:20px;margin-right:14px}.theme2>#main>.lp-mining>.pool>.powers>div.my-power[data-v-aeded578]{margin-top:23px}.theme2>#main>.lp-mining>.pool>.powers>div.my-power img[data-v-aeded578]{width:23px;margin-right:13px}.theme2>#main>.lp-mining>.pool>.earns[data-v-aeded578]{display:grid;padding:35px 0;margin-top:11px;position:relative;border-radius:10px;background-color:#181525;grid-template-columns:repeat(2,1fr)}.theme2>#main>.lp-mining>.pool>.earns>div[data-v-aeded578]{display:flex;align-items:center;justify-content:center;flex-direction:column}.theme2>#main>.lp-mining>.pool>.earns>div>span[data-v-aeded578]:first-child{color:#8757fa;font-size:16px;line-height:21px}.theme2>#main>.lp-mining>.pool>.earns>div>span[data-v-aeded578]:nth-child(2){margin-top:16px;color:#fff;font-size:20px;line-height:27px}.theme2>#main>.lp-mining>.pool>.earns[data-v-aeded578]:after{content:"";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:1px;height:64px;background-color:#8757fa}.theme2>#main>.lp-mining>.pool>.buttons[data-v-aeded578]{display:grid;-moz-column-gap:13px;column-gap:13px;margin-top:56px;grid-template-columns:repeat(2,1fr)}.theme2>#main>.lp-mining>.pool>.buttons>button[data-v-aeded578]{height:50px}.theme2>#main>.lp-mining>.pool>.buttons>button[data-v-aeded578]:nth-child(2){background-image:none;background-color:#40267e}.theme2>#main>.lp-mining>.pool>.click[data-v-aeded578]{text-align:right;margin-top:37px;color:#e33bed;font-size:14px;line-height:19px}@media screen and (max-width:1000px){.theme2>#main>.lp-mining[data-v-aeded578]{overflow:hidden;padding:17px 15px 0}.theme2>#main>.lp-mining>.header[data-v-aeded578]{border:none;position:relative;padding:0 0 24px 0;background-image:none}.theme2>#main>.lp-mining>.header>.content[data-v-aeded578]{padding-top:0}.theme2>#main>.lp-mining>.header>.content>h2[data-v-aeded578]{font-size:18px;line-height:24px;margin-bottom:18px}.theme2>#main>.lp-mining>.header>.content>p[data-v-aeded578]{width:165px;font-size:12px;line-height:19px}.theme2>#main>.lp-mining>.header>.banner[data-v-aeded578]{width:200px;height:155px;position:absolute;right:-40px}.theme2>#main>.lp-mining>.pool[data-v-aeded578]{margin:0;width:100%;padding:15px 19px 39px;border-radius:18px;opacity:1}.theme2>#main>.lp-mining>.pool>.token[data-v-aeded578]{font-size:14px;line-height:19px}.theme2>#main>.lp-mining>.pool>.token>div>.logo[data-v-aeded578]{width:48px;margin-right:8px}.theme2>#main>.lp-mining>.pool>.token>div>.logo>.ccimg[data-v-aeded578]{width:35px}.theme2>#main>.lp-mining>.pool>.token>div>.logo>.usdtimg[data-v-aeded578]{width:26px;transform:translateX(-13px)}.theme2>#main>.lp-mining>.pool>.token>.shareOutBonus>button[data-v-aeded578]{background-image:none;border:none;font-size:14px;line-height:14px;height:34px}.theme2>#main>.lp-mining>.pool>.powers[data-v-aeded578]{margin-top:22px;padding:34px 22px 30px 18px}.theme2>#main>.lp-mining>.pool>.powers>div[data-v-aeded578]{font-size:16px;line-height:21px}.theme2>#main>.lp-mining>.pool>.powers>div>.title[data-v-aeded578]{font-size:14px;line-height:19px}.theme2>#main>.lp-mining>.pool>.powers>div.total-power img[data-v-aeded578]{margin-right:8px}.theme2>#main>.lp-mining>.pool>.powers>div.my-power[data-v-aeded578]{margin-top:28px}.theme2>#main>.lp-mining>.pool>.powers>div.my-power img[data-v-aeded578]{margin-right:7px}.theme2>#main>.lp-mining>.pool>.earns[data-v-aeded578]{padding:31px 0}.theme2>#main>.lp-mining>.pool>.earns>div>span[data-v-aeded578]:first-child{font-size:14px;line-height:19px}.theme2>#main>.lp-mining>.pool>.earns>div>span[data-v-aeded578]:nth-child(2){margin-top:23px;font-size:16px;line-height:21px}.theme2>#main>.lp-mining>.pool>.buttons[data-v-aeded578]{display:grid;-moz-column-gap:15px;column-gap:15px;margin-top:30px;grid-template-columns:repeat(2,1fr)}.theme2>#main>.lp-mining>.pool>.buttons>button[data-v-aeded578]{height:49px;border-radius:47px;opacity:1}.theme2>#main>.lp-mining>.pool>.buttons>button[data-v-aeded578]:nth-child(2){background-image:none}.theme2>#main>.lp-mining>.pool>.click[data-v-aeded578]{margin-top:26px;font-size:12px;line-height:16px}}',""]),e.exports=t},"835c":function(e,t,i){var a=i("7400");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var o=i("499e").default;o("5621dd36",a,!0,{sourceMap:!1,shadowMode:!1})},8432:function(e,t,i){e.exports=i.p+"img/communityHistory-title.6b6a2b87.png"},"9bb0":function(e,t,i){"use strict";i("b01b")},ad80:function(e,t,i){e.exports=i.p+"img/lp-mining-banner.1256b4f2.png"},b01b:function(e,t,i){var a=i("c120");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var o=i("499e").default;o("04452080",a,!0,{sourceMap:!1,shadowMode:!1})},c120:function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,".theme1-modal.deposit[data-v-41ed87ee]{position:fixed;top:0;left:0;right:0;bottom:0;z-index:1;background-color:rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center;flex-direction:row}.theme1-modal.deposit>.container[data-v-41ed87ee]{width:498px;border-radius:20px;padding:21px 0 53px;background:#fff;box-sizing:border-box;border:1px solid #082d7e}.theme1-modal.deposit>.container>.title[data-v-41ed87ee]{position:relative;padding:0 20px 19px;text-align:left;border-bottom:1px solid #d8d8d8;color:#333;font-size:18px;line-height:24px}.theme1-modal.deposit>.container>.title>.el-icon-close[data-v-41ed87ee]{position:absolute;top:-5px;right:25px}.theme1-modal.deposit>.container>.content[data-v-41ed87ee]{padding:73px 52px 0}.theme1-modal.deposit>.container>.content>.input-container[data-v-41ed87ee]{display:flex;align-items:center;justify-content:space-between;flex-direction:row;color:#5e90ff;font-size:16px;line-height:21px;border:1px solid #cc1cf7;border-radius:10px;background:linear-gradient(180deg,#dae5ff,#fff);box-sizing:border-box;border:0 solid #082d7e;box-shadow:0 4px 7px 0 rgba(0,0,0,.3);padding:10px 11px 10px 0}.theme1-modal.deposit>.container>.content>.input-container>input[data-v-41ed87ee]{width:100%;border:none;outline:none;padding-left:10px;text-align:left;margin-right:.5em;background-color:transparent;color:#999;font-size:16px;line-height:21px}.theme1-modal.deposit>.container>.content>.input-container>button[data-v-41ed87ee]{flex-shrink:0;margin-left:14px;border-radius:4px;padding:7px 10px 6px;background-image:none;background:#082d7e;border:none}.theme1-modal.deposit>.container>.content>button[data-v-41ed87ee]{width:216px;height:50px;margin-top:45px}@media screen and (max-width:736px){.theme1-modal.deposit>.container[data-v-41ed87ee]{width:9.2rem;padding:19px 0 33px;border-radius:18px;opacity:1;background:#fff;box-sizing:border-box;border:1px solid #082d7e}.theme1-modal.deposit>.container>.title[data-v-41ed87ee]{padding:0 20px 19px;font-size:16px;line-height:21px;text-align:left;color:#333;border-bottom:1px solid #d8d8d8}.theme1-modal.deposit>.container>.title>.el-icon-close[data-v-41ed87ee]{top:2px;right:18px}.theme1-modal.deposit>.container>.content[data-v-41ed87ee]{padding:33px 22px 0}.theme1-modal.deposit>.container>.content>.input-container[data-v-41ed87ee]{padding:10px 12px 10px 0;border-radius:10px;opacity:1;background:linear-gradient(180deg,#dae5ff,#fff);box-sizing:border-box;border:0 solid #082d7e;box-shadow:0 4px 7px 0 rgba(0,0,0,.3)}.theme1-modal.deposit>.container>.content>.input-container>input[data-v-41ed87ee]{padding-left:10px;text-align:left;color:#999}.theme1-modal.deposit>.container>.content>.input-container>button[data-v-41ed87ee]{width:55px;border-radius:10px!important;opacity:1;background:#082d7e;border:none}.theme1-modal.deposit>.container>.content>button[data-v-41ed87ee]{margin-top:45px}}.theme2-modal.deposit[data-v-41ed87ee]{position:fixed;top:0;left:0;right:0;bottom:0;z-index:1;background-color:rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center;flex-direction:row}.theme2-modal.deposit>.container[data-v-41ed87ee]{width:498px;border-radius:20px;padding:21px 0 53px;background-color:#301b50;border:1px solid #8757fa}.theme2-modal.deposit>.container>.title[data-v-41ed87ee]{position:relative;padding-bottom:26px;border-bottom:1px solid #8757fa;color:#fff;font-size:18px;line-height:24px}.theme2-modal.deposit>.container>.title>.el-icon-close[data-v-41ed87ee]{position:absolute;top:-5px;right:25px}.theme2-modal.deposit>.container>.content[data-v-41ed87ee]{padding:73px 52px 0}.theme2-modal.deposit>.container>.content>.input-container[data-v-41ed87ee]{display:flex;align-items:center;justify-content:space-between;flex-direction:row;color:#8178c7;font-size:16px;line-height:21px;border:1px solid #cc1cf7;border-radius:10px;background-color:#000;padding:10px 11px 10px 0}.theme2-modal.deposit>.container>.content>.input-container>input[data-v-41ed87ee]{width:100%;border:none;outline:none;text-align:right;margin-right:.5em;background-color:transparent;color:#fff;font-size:16px;line-height:21px}.theme2-modal.deposit>.container>.content>.input-container>button[data-v-41ed87ee]{flex-shrink:0;margin-left:14px;border-radius:4px;padding:7px 10px 6px;background-image:none;background-color:#40267e;border:1px solid #9a18f5}.theme2-modal.deposit>.container>.content>button[data-v-41ed87ee]{width:216px;height:50px;margin-top:45px}@media screen and (max-width:736px){.theme2-modal.deposit>.container[data-v-41ed87ee]{width:9.2rem;padding:19px 0 33px;border-radius:18px;opacity:1;background:#fff;box-sizing:border-box;border:1px solid #082d7e}.theme2-modal.deposit>.container>.title[data-v-41ed87ee]{padding:0 20px 19px;font-size:16px;line-height:21px;text-align:left;color:#333;border-bottom:1px solid #d8d8d8}.theme2-modal.deposit>.container>.title>.el-icon-close[data-v-41ed87ee]{top:2px;right:18px}.theme2-modal.deposit>.container>.content[data-v-41ed87ee]{padding:33px 22px 0}.theme2-modal.deposit>.container>.content>.input-container[data-v-41ed87ee]{padding:10px 12px 10px 0;border-radius:10px;opacity:1;background:linear-gradient(180deg,#dae5ff,#fff);box-sizing:border-box;border:0 solid #082d7e;box-shadow:0 4px 7px 0 rgba(0,0,0,.3)}.theme2-modal.deposit>.container>.content>.input-container>input[data-v-41ed87ee]{padding-left:10px;text-align:left;color:#999}.theme2-modal.deposit>.container>.content>.input-container>button[data-v-41ed87ee]{width:55px;border-radius:10px!important;opacity:1;background:#082d7e;border:none}.theme2-modal.deposit>.container>.content>button[data-v-41ed87ee]{margin-top:45px}}",""]),e.exports=t},c27a:function(e,t,i){e.exports=i.p+"img/my-power.0c9c0123.svg"},d2fe:function(e,t,i){e.exports=i.p+"img/lp-bg.9c6b705b.png"},e880:function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,".take-record[data-v-4def671f]{position:fixed!important;top:0;left:0;right:0;bottom:0;z-index:1;background-color:rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center;flex-direction:row}.take-record>.box[data-v-4def671f]{width:643px;border-radius:20px;padding:13px 0 23px;background:#fff;box-sizing:border-box;border:1px solid #082d7e}.take-record>.box>.header[data-v-4def671f]{display:flex;align-items:center;justify-content:space-between;flex-direction:row;padding:0 30px 15px;border-bottom:1px solid #d8d8d8}.take-record>.box>.header>.token[data-v-4def671f]{display:flex;align-items:flex-end;justify-content:center;flex-direction:row;color:#333;font-size:18px;line-height:24px}.take-record>.box>.header>.token>.logo[data-v-4def671f]{width:65px;overflow:hidden;margin-right:20px;display:flex;align-items:flex-end;justify-content:flex-start;flex-direction:row}.take-record>.box>.header>.token>.logo>img[data-v-4def671f]:first-child{width:47px}.take-record>.box>.header>.token>.logo>img[data-v-4def671f]:nth-child(2){width:36px;transform:translateX(-18px)}.take-record>.box>.header>.token>.symbol[data-v-4def671f]{padding-bottom:5px}.take-record>.box>.header>.el-icon-close[data-v-4def671f]{color:#333;font-size:20px;line-height:20px}.take-record>.box>.record[data-v-4def671f]{height:382.5px;overflow:hidden;margin:20px 30px;background:linear-gradient(180deg,#dae5ff,#fff);position:relative}.take-record>.box>.record[data-v-4def671f],.take-record>.box>.record>.title[data-v-4def671f]{border-radius:10px;box-sizing:border-box;border:0 solid #082d7e;box-shadow:0 4px 7px 0 rgba(0,0,0,.3)}.take-record>.box>.record>.title[data-v-4def671f]{display:grid;height:51.5px;background-color:#201b36;grid-template-columns:repeat(3,1fr);color:#333;font-size:14px;line-height:51.5px;opacity:1;background:linear-gradient(180deg,#dae5ff,#fff)}.take-record>.box>.record>.lists[data-v-4def671f]{height:320px;overflow:hidden auto}.take-record>.box>.record>.lists>.item[data-v-4def671f]{display:grid;height:51.5px;grid-template-columns:repeat(3,1fr);color:#333;font-size:14px;align-items:center}.take-record>.box>.record>.empty[data-v-4def671f]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:#333;font-size:14px;line-height:19px;display:flex;align-items:center;justify-content:center;flex-direction:column}.take-record>.box>.record>.empty>img[data-v-4def671f]{width:100px;margin-bottom:17px}@media screen and (max-width:1000px){.take-record>.box[data-v-4def671f]{width:9.2rem;border-radius:20px;padding:13px 0 23px;background:#fff;box-sizing:border-box;border:1px solid #082d7e}.take-record>.box>.header[data-v-4def671f]{padding:0 15px 15px;border-bottom:1px solid #d8d8d8}.take-record>.box>.header>.token>img[data-v-4def671f]{width:26px;margin-right:10px}.take-record>.box>.header>.token>.symbol[data-v-4def671f]{color:#333;padding-bottom:0}.take-record>.box>.header>.info>.logo[data-v-4def671f]{width:48px;margin-right:.1333rem}.take-record>.box>.header>.info>.logo>img[data-v-4def671f]:first-child{width:35px}.take-record>.box>.header>.info>.logo>img[data-v-4def671f]:nth-child(2){width:26px;transform:translateX(-13px)}.take-record>.box>.header>.info>.symbol[data-v-4def671f]{padding-bottom:2px;color:#333;font-size:14px;line-height:20px}.take-record>.box>.header>.info>.symbol>img[data-v-4def671f]{width:17.93px;margin-left:8px}.take-record>.box>.header>.el-icon-close[data-v-4def671f]{color:#333;font-size:20px;line-height:20px}.take-record>.box>.record[data-v-4def671f]{height:407.5px;margin-top:22px;margin:15px}.take-record>.box>.record[data-v-4def671f],.take-record>.box>.record>.title[data-v-4def671f]{border-radius:10px;opacity:1;background:linear-gradient(180deg,#dae5ff,#fff);box-sizing:border-box;border:0 solid #082d7e;box-shadow:0 4px 7px 0 rgba(0,0,0,.3)}.take-record>.box>.record>.title[data-v-4def671f]{padding-bottom:0;align-content:center;color:#333;font-size:12px;line-height:17px}.take-record>.box>.record>.lists[data-v-4def671f]{height:320px;overflow:hidden auto}.take-record>.box>.record>.lists>.item[data-v-4def671f]{display:grid;height:37px;grid-template-columns:repeat(3,1fr);font-size:14px;align-items:center}.take-record>.box>.record>.empty[data-v-4def671f]{color:#333}.take-record>.box>.record>.empty>img[data-v-4def671f]{width:100px;margin-bottom:6px}}",""]),e.exports=t},e886:function(e,t,i){var a=i("e880");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var o=i("499e").default;o("23de7f7f",a,!0,{sourceMap:!1,shadowMode:!1})},ea87:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"lp-mining"},[t("div",{staticClass:"header"},[t("div",{staticClass:"content"},[t("h2",[e._v(e._s(e.$t("lpMining.text1")))]),t("p",[e._v(e._s(e.$t("lpMining.text2")))])]),t("div",{staticClass:"banner"})]),t("div",{staticClass:"pool"},[t("div",{staticClass:"token"},[t("div",[t("div",{staticClass:"logo"},[e.theme?t("img",{staticClass:"ccimg",attrs:{src:i("7172")}}):t("img",{staticClass:"ccimg",attrs:{src:i("9f28")}}),t("img",{staticClass:"usdtimg",attrs:{src:i("0f62")}})]),t("span",{staticClass:"symbol"},[e._v(e._s(e.$t("lpMining.text14")))])]),t("div",{staticClass:"shareOutBonus"},[t("el-button",{attrs:{type:"primary",loading:e.Bonus,disabled:e.callable},on:{click:e.shareOutBonus}},[e._v(e._s(e.$t("lpMining.text15")))])],1)]),t("div",{staticClass:"powers"},[t("div",{staticClass:"total-power"},[t("div",{staticClass:"title"},[e.theme?t("img",{attrs:{src:i("1def")}}):t("img",{attrs:{src:i("66b0")}}),t("span",[e._v(e._s(e.$t("lpMining.text3")))])]),t("span",[e._v(e._s(e.totalPower))])]),t("div",{staticClass:"my-power"},[t("div",{staticClass:"title"},[e.theme?t("img",{attrs:{src:i("2986")}}):t("img",{attrs:{src:i("c27a")}}),t("span",[e._v(e._s(e.$t("lpMining.text4")))])]),t("span",[e._v(e._s(e.power))])])]),t("div",{staticClass:"earns"},[t("div",[t("span",[e._v(e._s(e.$t("lpMining.text5")))]),t("span",[e._v(e._s(e.taked))])]),t("div",[t("span",[e._v(e._s(e.$t("lpMining.text6")))]),t("span",[e._v(e._s(e.earned))])])]),t("div",{staticClass:"buttons"},[t("el-button",{attrs:{disabled:""},on:{click:e.openDeposit}},[e._v(e._s(e.$t("lpMining.text7")))]),t("el-button",{attrs:{disabled:e.earned<=0,type:"primary",loading:e.loading},on:{click:e.takeReward}},[e._v(e._s(e.stateText))])],1)]),t("deposit-box",{ref:"Deposit",on:{lpinit:e.lpinit}}),t("bind-modal",{ref:"bindRef"})],1)},o=[],n=i("8346"),d=i("2f62"),r={components:{"take-record":()=>i.e("lp-mining").then(i.bind(null,"5e7f")),"deposit-box":()=>i.e("lp-mining").then(i.bind(null,"3cfc")),"bind-modal":()=>i.e("ido-subscribe").then(i.bind(null,"751c"))},data(){return{input:"",value:!1,loading:!1,Bonus:!1,callable:!1,totalPower:0,power:0,earned:0,taked:0,isPC:!Object(n["b"])()}},computed:{...Object(d["b"])(["web3","contracts","address","parentOf","theme"]),stateText(){return this.loading?this.$t("lpMining.text11"):this.$t("lpMining.text8")}},created(){this.contracts&&this.once()},methods:{async lpinit(){const e=await this.contracts.StaticPool.methods.totalPower().call(),t=await this.contracts.StaticPool.methods.userInfoOf(this.address).call(),i=await this.contracts.StaticPool.methods.earned(this.address).call();this.power=t.power.fromWei().toFixed(2),this.earned=i.fromWei().toFixed(2),this.taked=t.taked.fromWei().toFixed(2),this.totalPower=e.fromWei().toFixed(2)},async once(){const e=await this.contracts.EpochController.methods.callable().call();this.callable=0==e;await this.contracts.StaticPool.methods.tokenConfigOf(this.contracts.CCToken._address).call(),await this.contracts.SwapPair.methods.balanceOf(this.address).call();const t=await this.contracts.USDTToken.methods.balanceOf(this.contracts.SwapPair._address).call(),i=t.toBN().times(2),a=await this.contracts.SwapPair.methods.totalSupply().call();i.div(a);this.lpinit();let o=await this.$store.state.web3.eth.getBlockNumber(),d=await this.$store.state.contracts.StaticPool.getPastEvents("Deposit",{fromBlock:o>1e3?o-1e3:0,toBlock:"latest",filter:{user:this.$store.state.address}}),r=await this.$store.state.contracts.EpochController.getPastEvents("ShareOutBonus",{fromBlock:o>1e3?o-500:0,toBlock:"latest",filter:{}});r.map(async e=>{console.log("释放  "+e.returnValues.totalLiquidity.fromWei()+" 代币 "+e.returnValues.totalToken.fromWei()+"    time "+Object(n["a"])(e.returnValues.time))}),d.length>0&&d.map(async e=>{console.log("燃烧量  "+e.returnValues.burnamount.fromWei()+" 价值 "+e.returnValues.depostValue.fromWei()+" 资产流动性  "+e.returnValues.liquidity.fromWei()+" 算力  "+e.returnValues.power.fromWei()+"    time "+Object(n["a"])(e.returnValues.time))})},shareOutBonus(){let e=this.contracts.EpochController.methods.shareOutBonus();e.call({from:this.address},(t,i)=>{console.log(t,i),t?(this.Bonus=!1,Object(n["c"])(this.$t("lpMining.text17"),"error")):(this.Bonus=!0,e.send({from:this.address}).on("receipt",async()=>{Object(n["c"])(this.$t("lpMining.text16"),"success"),this.once(),this.Bonus=!1}).on("error",()=>{this.Bonus=!1,Object(n["c"])(this.$t("lpMining.text17"),"error")}))})},takeReward(){if(Number(this.earned)<=0)return Object(n["c"])(this.$t("lpMining.text10"),"error");this.loading=!0;let e=this.contracts.StaticPool.methods.takeReward();e.call({from:this.address},(t,i)=>{t||e.send({from:this.address}).on("receipt",async()=>{Object(n["c"])(this.$t("lpMining.text12"),"success"),this.lpinit(),this.loading=!1}).on("error",()=>{this.loading=!1,Object(n["c"])(this.$t("lpMining.text13"),"error")})})},openRecord(e){this.$refs.TakeRecord.open(e)},openDeposit(){this.parentOf?this.$refs.Deposit.open():this.$refs.bindRef.open()}}},p=r,s=p,l=(i("1685"),i("2877")),c=Object(l["a"])(s,a,o,!1,null,"aeded578",null);t["default"]=c.exports}}]);