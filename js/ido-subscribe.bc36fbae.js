(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ido-subscribe"],{"0030":function(t,i,e){var o=e("61b3");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var s=e("499e").default;s("6ad661dd",o,!0,{sourceMap:!1,shadowMode:!1})},"008c":function(t,i,e){t.exports=e.p+"img/ido-bgImg.b670a9d4.png"},"0ab8":function(t,i,e){var o=e("24fb");i=o(!1),i.push([t.i,".bind-modal[data-v-f3a50660]{position:fixed!important;top:0;left:0;right:0;bottom:0;-webkit-overflow-scrolling:touch;background-color:rgba(0,0,0,.5);z-index:2}.bind-modal>.box[data-v-f3a50660]{width:583px;border-radius:10px;margin:18% auto;background:#fff;box-sizing:border-box;border:1px solid #082d7e}.bind-modal>.box>.top[data-v-f3a50660]{padding:20px 15px;border-bottom:1px solid #d8d8d8;position:relative}.bind-modal>.box>.top>.title[data-v-f3a50660]{font-size:18px;font-family:PingFang SC-Regular,PingFang SC;font-weight:400;color:#333}.bind-modal>.box>.top>.el-icon-close[data-v-f3a50660]{position:absolute;right:20px;top:20px;color:#333;font-size:24px;line-height:24px}.bind-modal>.box>.content[data-v-f3a50660]{padding:40px 100px 60px 100px}.bind-modal>.box>.content>.text[data-v-f3a50660]{font-size:18px;font-family:PingFang SC-Light,PingFang SC;font-weight:300;color:#333}.bind-modal>.box>.content>input[data-v-f3a50660]{width:100%;background:#000;border-radius:10px 10px 10px 10px;opacity:1;background:linear-gradient(180deg,#dae5ff,#fff);border:1px solid #333!important;height:56px;outline:none;color:#999;font-size:14px;line-height:20px;padding:0 20px;margin:43px 0 33px}.bind-modal>.box>.content>button[data-v-f3a50660]{width:100%;height:50px}@media(max-width:736px){.bind-modal[data-v-f3a50660]{padding-top:20%}.bind-modal>.box[data-v-f3a50660]{width:9.2rem;border-radius:20px;background:#fff;box-sizing:border-box;border:1px solid #082d7e}.bind-modal>.box>.top[data-v-f3a50660]{display:flex;align-items:center;padding:20px 15px;border-bottom:1px solid #d8d8d8}.bind-modal>.box>.top>.title[data-v-f3a50660]{font-size:16px;text-align:left;font-weight:400;letter-spacing:0;color:#333}.bind-modal>.box>.top>.el-icon-close[data-v-f3a50660]{position:absolute;right:20px;top:20px;color:#fff;font-size:24px;line-height:24px;color:#333}.bind-modal>.box>.content[data-v-f3a50660]{padding:40px 10px 60px 10px}.bind-modal>.box>.content>.text[data-v-f3a50660]{font-size:18px;font-family:PingFang SC-Light,PingFang SC;font-weight:300;color:#333}.bind-modal>.box>.content>input[data-v-f3a50660]{width:100%;background:#000;border-radius:10px 10px 10px 10px;opacity:1;background:linear-gradient(180deg,#dae5ff,#fff);border:1px solid #333!important;height:56px;outline:none;color:#999;font-size:14px;line-height:20px;padding:0 20px;margin:20px 0 33px}.bind-modal>.box>.content>button[data-v-f3a50660]{width:100%;height:50px}}",""]),t.exports=i},"1f11":function(t,i,e){var o=e("a940");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var s=e("499e").default;s("72941f62",o,!0,{sourceMap:!1,shadowMode:!1})},3312:function(t,i,e){t.exports=e.p+"img/empty-record.45b52dc3.png"},"437d":function(t,i,e){"use strict";e("0030")},"5fc0":function(t,i,e){"use strict";e.r(i);var o=function(){var t=this,i=t._self._c;t._self._setupProxy;return i("div",{staticClass:"ido-subscribe"},[i("img",{staticClass:"bg-img",attrs:{src:e("008c")}}),i("div",{staticClass:"header"},[i("h2",[t._v(t._s(t.$t("ido.text1")))]),i("span",[t._v(t._s(t.$t("ido.text2")))]),i("div",{staticClass:"note"},[t._v(t._s(t.$t("ido.text3")))])]),i("div",{staticClass:"box"},[i("div",{staticClass:"container"},[i("div",{ref:"listContainer",staticClass:"date-list"},[t._l(t.showList,(function(e){return[i("div",{staticClass:"list-item click",class:{active:t.currentDate.month==e.month&&t.currentDate.day==e.day}},[i("span",[t._v(t._s(e.month)+t._s(t.$t("ido.text4"))+t._s(e.day)+t._s(t.$t("ido.text5")))]),t.isToday(e)?[i("span",[t._v(t._s(t.$t("ido.text6")))])]:t.isUpcoming(e)?[i("span",[t._v(t._s(t.$t("ido.text7")))])]:t.isExpired(e)?[i("span",[t._v(t._s(t.$t("ido.text8")))])]:[i("span")]],2)]}))],2)]),i("div",{staticClass:"content"},[i("div",{staticClass:"subscribe"},[i("p",{directives:[{name:"show",rawName:"v-show",value:"wait"===t.status,expression:"status === 'wait'"}]},[t._v(t._s(t.$t("ido.text9"))+" "),i("span",[t._v("8")]),t._v(" "+t._s(t.$t("ido.text11"))+"：")]),i("div",{directives:[{name:"show",rawName:"v-show",value:"wait"!==t.status,expression:"status !== 'wait'"}],staticClass:"title"},[i("span",[t._v(" "+t._s("end"==t.status?t.$t("ido.text12"):"")+" "+t._s("subscribing"==t.status?t.$t("ido.text13"):"")+" ")]),i("span",[t._v(t._s("subscribing"==t.status?t.$t("ido.text14")+":":""))])]),i("div",{directives:[{name:"show",rawName:"v-show",value:"idoEnd"==t.status,expression:"status == 'idoEnd'"}],staticClass:"idoEnd"},[t._v(" "+t._s(t.$t("ido.text12_1"))+" ")]),i("div",{directives:[{name:"show",rawName:"v-show",value:"idoEnd"!==t.status,expression:"status !== 'idoEnd'"}],staticClass:"countdown"},[i("span",{staticClass:"time"},[t._v(t._s(Number(t.countDate.hour)+24*Number(t.countDate.day)))]),i("span",{staticClass:"mark"},[t._v(":")]),i("span",{staticClass:"time"},[t._v(t._s(t.countDate.minute))]),i("span",{staticClass:"mark"},[t._v(":")]),i("span",{staticClass:"time"},[t._v(t._s(t.countDate.second))])]),t.isSubscribed?[i("div",{staticClass:"subscribed"},[i("span",[t._v(t._s(t.$t("ido.text15"))+" ")])])]:t._e(),[i("div",{staticClass:"input"},[i("span",{staticClass:"prefix"},[t._v(t._s(t.$t("ido.text16")))]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],attrs:{placeholder:"100-2000USDT"},domProps:{value:t.amount},on:{input:function(i){i.target.composing||(t.amount=i.target.value)}}}),i("div",{staticClass:"max",on:{click:function(i){return t.setMax()}}},[t._v(t._s(t.$t("ido.text17")))])])],i("el-button",{attrs:{disabled:"wait"===t.status||"end"===t.status||"idoEnd"==t.status||this.boughtOf==this.useMaxBuy,loading:t.loading},on:{click:t.submit}},[t._v(t._s(t.$t("ido.text18"))+" ")]),i("div",{staticClass:"record",on:{click:function(i){return t.openRecord()}}},[t._v(t._s(t.$t("ido.text19"))+" >")])],2)])]),[i("bind-modal",{ref:"bindRef"}),i("ido-record",{ref:"idoRef"})]],2)},s=[],a=e("8346"),n=e("2f62"),d={components:{"bind-modal":()=>e.e("ido-subscribe").then(e.bind(null,"751c")),"ido-record":()=>e.e("ido-subscribe").then(e.bind(null,"753a"))},data(){return{isPC:!Object(a["b"])(),list:[{month:7,day:11},{month:7,day:12},{month:7,day:13},{month:7,day:14,status:"即将开抢"},{month:7,day:15,status:"即将开抢"},{month:7,day:16,status:"即将开抢"},{month:7,day:17,status:"即将开抢"},{month:7,day:18,status:"即将开抢"},{month:7,day:19,status:"即将开抢"},{month:7,day:20,status:"即将开抢"},{month:7,day:21},{month:7,day:22}],totalQuota:0,totalBought:0,boughtOf:0,useMaxBuy:2e3,currentDate:{},showList:[],status:"wait",isSubscribed:!1,loading:!1,amount:null,countDate:{day:0,hour:0,minute:0,second:0}}},computed:{...Object(n["b"])(["web3","contracts","address"])},mounted(){this.contracts&&this.init()},methods:{async init(){await this.getInfo();let t=await this.getBlockTime(),i=t.getFullYear(),e=t.getMonth()+1,o=t.getDate();this.currentDate={year:i,month:e,day:o};let s=await this.contracts.Genesis.methods.isOpened().call(),a=new Date("2023/7/11 16:03");if(t.getTime()>a.getTime()||!s)return document.documentElement.offsetWidth<=736?this.showList=this.list.slice(-4):this.showList=this.list.slice(-7),void(this.status="idoEnd");if(document.documentElement.offsetWidth<=736)if(e<7){this.showList=this.list.slice(0,4),this.status="wait";let t=this.getDefaultTime();this.countDown(t)}else if(7==e&&o<11){this.showList=this.list.slice(0,4),this.status="wait";let t=this.getDefaultTime();this.countDown(t)}else if(7==e&&o<=14){this.showList=this.list.slice(0,4);let t=await this.getFixTime();this.countDown(t)}else if(7==e&&o>14&&o<=18){this.showList=this.list.slice(4,8);let t=await this.getFixTime();this.countDown(t)}else if(7==e&&o>18&&o<=22){this.showList=this.list.slice(8,12);let t=await this.getFixTime();this.countDown(t)}else if(7==e&&o>22&&o<=25){this.showList=this.list.slice(-4);let t=await this.getFixTime();this.countDown(t)}else this.showList=this.list.slice(-4),this.status="end";else if(e<7){this.showList=this.list.slice(0,7),this.status="wait";let t=this.getDefaultTime();this.countDown(t)}else if(7==e&&o<11){this.showList=this.list.slice(0,7),this.status="wait";let t=this.getDefaultTime();this.countDown(t)}else if(7==e&&o<=17){this.showList=this.list.slice(0,7);let t=await this.getFixTime();this.countDown(t)}else if(7==e&&o>17&&o<=24){this.showList=this.list.slice(7,14);let t=await this.getFixTime();this.countDown(t)}else if(7==e&&o<=25){this.showList=this.list.slice(-7);let t=await this.getFixTime();this.countDown(t)}else this.showList=this.list.slice(-7),this.status="end"},async getInfo(){try{let t=await this.contracts.Genesis.methods.totalQuota().call(),i=await this.contracts.Genesis.methods.totalBought().call();console.log(t+"------"+i),this.totalQuota=t.fromWei(),this.totalBought=i.fromWei();let e=await this.contracts.Genesis.methods.boughtOf(this.address).call();this.boughtOf=e.fromWei()}catch(t){}},getDefaultTime(){let t=new Date("2023/07/6 17:43").getTime();return Math.floor(t/1e3)},async getFixTime(){const t=await this.getBlockTime();t.setHours(16,3,0,0);let i=Math.floor(t.getTime()/1e3);return i},async getBlockTime(){const t=await this.getTimes(),i=new Date(1e3*t);return i},async getTimes(){let t=(await this.web3.eth.getBlock("latest")).timestamp;return t},async countDown(t){if(console.log(this.totalQuota+"--+++----"+this.totalBought),this.totalBought==this.totalQuota&&0!=this.totalBought)return void(this.status="idoEnd");let i=t;const e=await this.getTimes();clearInterval(this.timer),e>=i?this.status="end":this.timer=setInterval(async()=>{const t=await this.getTimes();let e=i-t;if(e>0){let t=Math.floor(e/3600/24),i=Math.floor(e/3600%24),o=Math.floor(e/60%60),s=Math.floor(e%60),a=Math.floor(e/60);(3==a&&0===s||a<3)&&(this.status="subscribing"),this.countDate={day:t,hour:i<10?"0"+i:i,minute:o<10?"0"+o:o,second:s<10?"0"+s:s}}else console.log("END"),clearInterval(this.timer),this.countDate={day:0,hour:0,minute:0,second:0},this.status="end"},1e3)},isUpcoming(t){return 2023==this.currentDate.year&&this.currentDate.month<t.month||2023==this.currentDate.year&&"idoEnd"!=this.status&&this.currentDate.month==t.month&&this.currentDate.day<t.day},isToday(t){return"idoEnd"!=this.status&&2023==this.currentDate.year&&this.currentDate.month==t.month&&this.currentDate.day==t.day},isExpired(t){return 2023==this.currentDate.year&&this.currentDate.month==t.month&&this.currentDate.day>t.day||2023==this.currentDate.year&&this.currentDate.month>t.month||this.currentDate.year>2023||"idoEnd"==this.status},openRecord(){this.$refs.idoRef.open()},async setMax(){let t=await this.contracts.Genesis.methods.boughtOf(this.address).call(),i=this.useMaxBuy-t.fromWei();this.amount=i},async submit(){if(this.amount%100!=0)return Object(a["c"])(this.$t("ido.tips6"),"error");if(this.amount<100||this.amount>this.useMaxBuy)return Object(a["c"])(this.$t("ido.tips1"),"error");let t=/^\d+(\.\d{1,2})?$/,i=t.test(this.amount);if(!i)return Object(a["c"])(this.$t("ido.tips2"),"error");let e=await this.contracts.USDTToken.methods.balanceOf(this.address).call();if(parseFloat(e.fromWei())<this.amount)return Object(a["c"])(this.$t("ido.tips3"),"error");let o=await this.contracts.Genesis.methods.totalQuota().call(),s=await this.contracts.Genesis.methods.totalBought().call(),n=o.fromWei()-s.fromWei();if(this.amount>n)return Object(a["c"])(this.$t("ido.tips7")+n,"error");let d=await this.contracts.Genesis.methods.boughtOf(this.address).call(),r=this.useMaxBuy-d.fromWei();if(this.amount>r)return Object(a["c"])(this.$t("ido.tips4")+r,"error");let c=await this.contracts.USDTToken.methods.allowance(this.address,this.contracts.Genesis._address).call();if(this.loading=!0,this.amount>parseFloat(c.fromWei())){const t=Number(1e6).toWei();this.contracts.USDTToken.methods.approve(this.$store.state.contracts.Genesis._address,t).send({from:this.$store.state.address}).on("receipt",()=>{Object(a["c"])(this.$t("ido.approveS"),"success"),this.buy()}).on("error",t=>{Object(a["c"])("bind.cancel","error"),this.loading=!1})}else this.buy()},buy(){this.contracts.Genesis.methods.subscribe(this.amount.toWei()).call({from:this.address},console.log),this.contracts.Genesis.methods.subscribe(this.amount.toWei()).send({from:this.address}).on("receipt",t=>{Object(a["c"])(this.$t("ido.tips5"),"success"),this.loading=!1,this.amount=null,this.getInfo()}).on("error",t=>{Object(a["c"])(this.$t("bind.cancel"),"error"),this.loading=!1})}}},r=d,c=r,b=(e("437d"),e("2877")),l=Object(b["a"])(c,o,s,!1,null,"71b75c36",null);i["default"]=l.exports},"61b3":function(t,i,e){var o=e("24fb"),s=e("1de5"),a=e("008c");i=o(!1);var n=s(a);i.push([t.i,".ido-subscribe[data-v-71b75c36]{position:relative;padding:38px 0 50px;background-size:800px 496px;background-repeat:no-repeat;background-position:325px -80px;background-image:radial-gradient(closest-side,rgba(94,144,255,.6),transparent 70%)}.ido-subscribe>.bg-img[data-v-71b75c36]{position:absolute;width:530px;top:30px;right:20px}.ido-subscribe>div[data-v-71b75c36]{position:relative}.ido-subscribe>.header[data-v-71b75c36]{display:flex;align-items:flex-start;justify-content:center;flex-direction:column}.ido-subscribe>.header>h2[data-v-71b75c36]{font-weight:800;color:#082d7e;font-size:30px;line-height:42px}.ido-subscribe>.header>span[data-v-71b75c36]{margin-top:21px;color:#3d3d3d;font-size:20px;line-height:24px;margin-bottom:18px;font-weight:700}.ido-subscribe>.header>.note[data-v-71b75c36]{width:422px;white-space:pre-wrap;text-align:left;color:#3d3d3d;font-size:16px;line-height:24px}.ido-subscribe>.box[data-v-71b75c36]{height:633.97px;margin-top:36px;padding:2px 37px 0;border-radius:20px;background:rgba(218,229,255,.51);box-shadow:0 8px 14px 0 rgba(0,0,0,.3);border:1px solid #082d7e}.ido-subscribe>.box>.container>.date-list[data-v-71b75c36]{height:90px;display:grid;grid-template-columns:repeat(7,1fr)}.ido-subscribe>.box>.container>.date-list>.list-item[data-v-71b75c36]{row-gap:2px;padding-top:23px;color:#8178c7;font-size:14px;line-height:20px;display:flex;align-items:center;justify-content:flex-start;flex-direction:column}.ido-subscribe>.box>.container>.date-list>.list-item>span[data-v-71b75c36]:first-child{color:#3d3d3d}.ido-subscribe>.box>.container>.date-list>.list-item.active[data-v-71b75c36]{row-gap:1px;padding-top:19px;background-image:linear-gradient(1turn,#5e90ff,#082d7e)!important;color:#fff}.ido-subscribe>.box>.container>.date-list>.list-item.active>span[data-v-71b75c36]:first-child{font-size:18px;line-height:25px;color:#fff}.ido-subscribe>.box>.content[data-v-71b75c36]{height:487.19px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-direction:row;background:#fff;box-sizing:border-box;border:0 solid #082d7e}.ido-subscribe>.box>.content>.subscribe>p[data-v-71b75c36]{margin-bottom:29px;color:#3d3d3d;font-size:18px;line-height:37px}.ido-subscribe>.box>.content>.subscribe>p>span[data-v-71b75c36]{color:#082d7e;font-size:26px;line-height:37px}.ido-subscribe>.box>.content>.subscribe .idoEnd[data-v-71b75c36]{font-size:20px;font-family:PingFang SC-Bold,PingFang SC;font-weight:700;color:#fcd32e}.ido-subscribe>.box>.content>.subscribe>.title[data-v-71b75c36]{margin-bottom:20px;display:flex;align-items:center;justify-content:center;flex-direction:column}.ido-subscribe>.box>.content>.subscribe>.title>span[data-v-71b75c36]:first-child{font-weight:700;color:#fcd32e;font-size:20px;line-height:28px}.ido-subscribe>.box>.content>.subscribe>.title>span[data-v-71b75c36]:nth-child(2){margin-top:11px;color:#fff;font-size:18px;line-height:25px}.ido-subscribe>.box>.content>.subscribe>.countdown[data-v-71b75c36]{display:flex;align-items:center;justify-content:center;flex-direction:row;color:#575c63;font-size:26px;line-height:37px}.ido-subscribe>.box>.content>.subscribe>.countdown>.time[data-v-71b75c36]{width:62px;height:62px;line-height:62px;border-radius:10px;background:#082d7e;color:#fff;border:1px solid #8178c7}.ido-subscribe>.box>.content>.subscribe>.countdown>.mark[data-v-71b75c36]{margin:0 8px}.ido-subscribe>.box>.content>.subscribe>.countdown.in>.time[data-v-71b75c36]{border-color:#fcd32e;background-color:transparent}.ido-subscribe>.box>.content>.subscribe>.input[data-v-71b75c36]{width:300px;margin:46px auto 0;border-radius:10px;padding:10px 14px 10px 17px;display:flex;align-items:center;justify-content:space-between;flex-direction:row;color:#8178c7;font-size:14px;line-height:20px;background:linear-gradient(180deg,#dae5ff,#fff);box-sizing:border-box;border:0 solid #082d7e;box-shadow:0 4px 7px 0 rgba(0,0,0,.3)}.ido-subscribe>.box>.content>.subscribe>.input>.prefix[data-v-71b75c36]{flex-shrink:0;line-height:25px;padding-right:16px;border-right:1px solid #8178c7;color:#082d7e}.ido-subscribe>.box>.content>.subscribe>.input>.max[data-v-71b75c36]{width:50px;height:34px;background:#082d7e;border-radius:4px 4px 4px 4px;font-size:14px;padding:10px;word-break:keep-all;display:flex;align-items:center;color:#fff;cursor:pointer}.ido-subscribe>.box>.content>.subscribe>.input>input[data-v-71b75c36]{width:100%;border:none;outline:none;text-align:right;margin-right:.5em;background-color:transparent;color:#8178c7;font-size:14px;line-height:20px}.ido-subscribe>.box>.content>.subscribe>button[data-v-71b75c36]{width:300px;height:50px;margin-top:34px}.ido-subscribe>.box>.content>.subscribe>.record[data-v-71b75c36]{font-size:14px;font-family:PingFang SC-Regular,PingFang SC;font-weight:400;color:#333;margin-top:16px;cursor:pointer}.ido-subscribe>.box>.content>.subscribe>.bind[data-v-71b75c36]{margin-top:16px;color:#8178c7;font-size:14px;line-height:20px}.ido-subscribe>.box>.content>.subscribe>.bind>span[data-v-71b75c36]{color:#cc1cf7;text-decoration:underline}.ido-subscribe>.box>.content>.subscribe>.subscribed[data-v-71b75c36]{margin-top:63px;color:#28b1f5;font-size:20px;line-height:28px;display:flex;align-items:center;justify-content:center;flex-direction:column}.ido-subscribe>.box>.content>.subscribe>.subscribed>.info[data-v-71b75c36]{margin-top:56px;-moz-column-gap:61.11px;column-gap:61.11px;display:flex;align-items:center;justify-content:center;flex-direction:row}.ido-subscribe>.box>.content>.subscribe>.subscribed>.info>div[data-v-71b75c36]{display:flex;align-items:flex-start;justify-content:center;flex-direction:column}.ido-subscribe>.box>.content>.subscribe>.subscribed>.info>div[data-v-71b75c36]:last-child{justify-self:end}.ido-subscribe>.box>.content>.subscribe>.subscribed>.info>div>span[data-v-71b75c36]{color:#8178c7;font-size:14px;line-height:20px}.ido-subscribe>.box>.content>.subscribe>.subscribed>.info>div>span[data-v-71b75c36]:nth-child(2){color:#fff;margin-top:10px}@media screen and (max-width:1000px){.ido-subscribe[data-v-71b75c36]{padding:17px .4rem 0;background-size:10.9333rem 6.1333rem;background-position:1.6533rem 2px;background-image:radial-gradient(closest-side at 60% 40%,#d71df6,transparent 90%);overflow-x:hidden}.ido-subscribe>.bg-img[data-v-71b75c36]{width:4.24rem;top:-1px;right:-1rem}.ido-subscribe>.header>h2[data-v-71b75c36]{color:#fff;font-size:18px;line-height:25px}.ido-subscribe>.header>span[data-v-71b75c36]{margin-top:17px;color:#28b1f5;font-size:12px;line-height:20px}.ido-subscribe>.header>.note[data-v-71b75c36]{width:6rem;color:#8178c7;font-size:12px;line-height:20px}.ido-subscribe>.box[data-v-71b75c36]{height:549px;padding:2px 14px 0}.ido-subscribe>.box>.date-list[data-v-71b75c36]{width:100%;height:79px;display:flex;align-items:flex-start;overflow:auto}.ido-subscribe>.box>.date-list>.list-item[data-v-71b75c36]{width:81px;height:100%;flex-shrink:0;row-gap:5px;padding-top:19px;color:#8178c7;font-size:12px;line-height:17px}.ido-subscribe>.box>.date-list>.list-item.active[data-v-71b75c36]{row-gap:5px;padding-top:18px}.ido-subscribe>.box>.date-list>.list-item.active>span[data-v-71b75c36]:first-child{font-size:12px;line-height:17px}.ido-subscribe>.box>.content[data-v-71b75c36]{height:412px}.ido-subscribe>.box>.content>.subscribe>p[data-v-71b75c36]{margin-bottom:21px;color:#fff;font-size:14px;line-height:28px}.ido-subscribe>.box>.content>.subscribe>p>span[data-v-71b75c36]{color:#28b1f5;font-size:20px;line-height:28px}.ido-subscribe>.box>.content>.subscribe>.title[data-v-71b75c36]{margin-bottom:23px}.ido-subscribe>.box>.content>.subscribe>.title>span[data-v-71b75c36]:first-child{color:#fcd32e;font-size:16px;line-height:22px}.ido-subscribe>.box>.content>.subscribe>.title>span[data-v-71b75c36]:nth-child(2){margin-top:7px;color:#fff;font-size:14px;line-height:20px}.ido-subscribe>.box>.content>.subscribe>.countdown[data-v-71b75c36]{color:#fff;font-size:21px;line-height:29px}.ido-subscribe>.box>.content>.subscribe>.countdown>.time[data-v-71b75c36]{width:49px;height:49px;line-height:49px}.ido-subscribe>.box>.content>.subscribe>.input[data-v-71b75c36]{width:270px;margin:43px auto 0;padding:15px 14px 14px 10px}.ido-subscribe>.box>.content>.subscribe>.input>.prefix[data-v-71b75c36]{padding-right:10px}.ido-subscribe>.box>.content>.subscribe>button[data-v-71b75c36]{width:270px}.ido-subscribe>.box>.content>.subscribe>.bind[data-v-71b75c36]{color:#8178c7;font-size:12px;line-height:17px}.ido-subscribe>.box>.content>.subscribe>.subscribed[data-v-71b75c36]{margin-top:45px;color:#28b1f5;font-size:16px;line-height:22px}.ido-subscribe>.box>.content>.subscribe>.subscribed>span[data-v-71b75c36]{width:3.84rem}.ido-subscribe>.box>.content>.subscribe>.subscribed>.info[data-v-71b75c36]{margin-top:23px;-moz-column-gap:normal;column-gap:normal;display:flex;align-items:flex-start;justify-content:center;flex-direction:column}.ido-subscribe>.box>.content>.subscribe>.subscribed>.info>div[data-v-71b75c36]{flex-direction:row}.ido-subscribe>.box>.content>.subscribe>.subscribed>.info>div>span[data-v-71b75c36]:nth-child(2){margin-top:0;margin-left:5px}}@media(max-width:736px){.mobile-ido[data-v-71b75c36]{padding:10px 14px;overflow:hidden}.mobile-ido>.header[data-v-71b75c36]{display:flex;align-items:flex-start;justify-content:space-between;flex-direction:row}.mobile-ido>.header>.mobile-left[data-v-71b75c36]{width:100%;background-image:url("+n+");background-repeat:no-repeat;background-size:303.5px 166px;background-position:83px -8px;padding:0}.mobile-ido>.header>.mobile-left>.title[data-v-71b75c36]{display:flex;align-items:flex-start;justify-content:center;flex-direction:column;margin-bottom:60px}.mobile-ido>.header>.mobile-left>.title>span[data-v-71b75c36],.mobile-ido>.header>.mobile-left>.title>span[data-v-71b75c36]:first-child{color:#082d7e;font-size:22px;line-height:30px}.mobile-ido>.header>.mobile-left>.title>span[data-v-71b75c36]:last-child{color:#3d3d3d;font-size:14px;line-height:19px;margin:5px 0}.mobile-ido>.box[data-v-71b75c36]{position:relative;z-index:1;border-radius:18px;opacity:1;background:#fff;box-sizing:border-box;border:1px solid #082d7e;padding:20px 15px 50px}.mobile-ido>.box>.content[data-v-71b75c36]{font-size:12px;font-weight:400;line-height:18px;text-align:justify;letter-spacing:0;color:#3d3d3d}.ido-subscribe[data-v-71b75c36]{padding:17px .4rem 10px;background-size:10.9333rem 6.1333rem;background-position:1.6533rem 2px;background:none}.ido-subscribe>.bg-img[data-v-71b75c36]{width:8rem;top:-1px;right:-1rem}.ido-subscribe>.header>h2[data-v-71b75c36]{color:#082d7e;font-size:18px;line-height:25px}.ido-subscribe>.header>span[data-v-71b75c36]{margin-top:17px;color:#3d3d3d;font-size:12px;line-height:20px}.ido-subscribe>.header>.note[data-v-71b75c36]{width:6rem;color:#3d3d3d;font-size:12px;line-height:20px}.ido-subscribe>.header>.note>.text[data-v-71b75c36]{display:block}.ido-subscribe>.box[data-v-71b75c36]{height:549px;padding:2px 14px 0;border-radius:18px;opacity:1;background:rgba(218,229,255,.51);border:1px solid #082d7e;box-shadow:0 8px 14px 0 rgba(0,0,0,.3)}.ido-subscribe>.box>.container>.date-list[data-v-71b75c36]{width:100%;height:79px;grid-template-columns:repeat(4,1fr)}.ido-subscribe>.box>.container>.date-list>.list-item[data-v-71b75c36]{width:81px;height:100%;flex-shrink:0;row-gap:5px;padding-top:19px;color:#8178c7;font-size:12px;line-height:17px}.ido-subscribe>.box>.container>.date-list>.list-item>span[data-v-71b75c36]:first-child{color:#3d3d3d}.ido-subscribe>.box>.container>.date-list>.list-item.active[data-v-71b75c36]{row-gap:5px;padding-top:18px;background-image:linear-gradient(1turn,#5e90ff,#082d7e)!important;color:#fff}.ido-subscribe>.box>.container>.date-list>.list-item.active>span[data-v-71b75c36]:first-child{font-size:12px;line-height:17px;color:#fff}.ido-subscribe>.box>.content[data-v-71b75c36]{height:412px;border-radius:10px;opacity:1;background:#fff;box-sizing:border-box;border:0 solid #082d7e}.ido-subscribe>.box>.content>.subscribe>p[data-v-71b75c36]{margin-bottom:21px;color:#3d3d3d;font-size:14px;line-height:28px}.ido-subscribe>.box>.content>.subscribe>p>span[data-v-71b75c36]{color:#082d7e;font-size:20px;line-height:28px}.ido-subscribe>.box>.content>.subscribe>.title[data-v-71b75c36]{margin-bottom:23px}.ido-subscribe>.box>.content>.subscribe>.title>span[data-v-71b75c36]:first-child{color:#fcd32e;font-size:16px;line-height:22px}.ido-subscribe>.box>.content>.subscribe>.title>span[data-v-71b75c36]:nth-child(2){margin-top:7px;color:#fff;font-size:14px;line-height:20px}.ido-subscribe>.box>.content>.subscribe>.countdown[data-v-71b75c36]{color:#575c63;font-size:21px;line-height:29px}.ido-subscribe>.box>.content>.subscribe>.countdown>.time[data-v-71b75c36]{width:49px;height:49px;line-height:49px;background:#082d7e;color:#fff}.ido-subscribe>.box>.content>.subscribe>.input[data-v-71b75c36]{width:270px;margin:43px auto 0;padding:15px 14px 14px 10px;background:linear-gradient(180deg,#dae5ff,#fff);box-sizing:border-box;border:0 solid #082d7e;box-shadow:0 4px 7px 0 rgba(0,0,0,.3)}.ido-subscribe>.box>.content>.subscribe>.input>.prefix[data-v-71b75c36]{padding-right:10px;color:#082d7e}.ido-subscribe>.box>.content>.subscribe>.input>.max[data-v-71b75c36]{background:#082d7e;border:none}.ido-subscribe>.box>.content>.subscribe>button[data-v-71b75c36]{width:270px}.ido-subscribe>.box>.content>.subscribe>.bind[data-v-71b75c36]{color:#8178c7;font-size:12px;line-height:17px}.ido-subscribe>.box>.content>.subscribe>.subscribed[data-v-71b75c36]{margin-top:45px;color:#28b1f5;font-size:16px;line-height:22px}.ido-subscribe>.box>.content>.subscribe>.subscribed>span[data-v-71b75c36]{width:3.84rem}.ido-subscribe>.box>.content>.subscribe>.subscribed>.info[data-v-71b75c36]{margin-top:23px;-moz-column-gap:normal;column-gap:normal;display:flex;align-items:flex-start;justify-content:center;flex-direction:column}.ido-subscribe>.box>.content>.subscribe>.subscribed>.info>div[data-v-71b75c36]{flex-direction:row}.ido-subscribe>.box>.content>.subscribe>.subscribed>.info>div>span[data-v-71b75c36]:nth-child(2){margin-top:0;margin-left:5px}.ido-subscribe>.box>.content>.subscribe>.record[data-v-71b75c36]{color:#333}.date-list[data-v-71b75c36]::-webkit-scrollbar{width:0;height:0}}",""]),t.exports=i},"751c":function(t,i,e){"use strict";e.r(i);var o=function(){var t=this,i=t._self._c;t._self._setupProxy;return i("transition",{attrs:{name:"el-fade-in-linear"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"bind-modal"},[i("div",{staticClass:"box"},[i("div",{staticClass:"top"},[i("div",{staticClass:"title"},[t._v(t._s(t.$t("bind.text1")))]),i("i",{staticClass:"el-icon-close click",on:{click:function(i){t.show=!1}}})]),i("div",{staticClass:"content"},[i("div",{staticClass:"text"},[t._v(t._s(t.$t("bind.text2")))]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.parentAddress,expression:"parentAddress"}],attrs:{placeholder:t.$t("bind.text3"),autofocus:"",type:"text"},domProps:{value:t.parentAddress},on:{input:function(i){i.target.composing||(t.parentAddress=i.target.value)}}}),i("el-button",{attrs:{loading:t.loading},on:{click:t.submit}},[t._v(t._s(t.$t("bind.text4")))])],1)])])])},s=[],a=e("2f62"),n=e("8346"),d=e("5c96"),r={components:{[d["Button"].name]:d["Button"]},computed:{...Object(a["b"])(["address","web3","contracts","parentOf"])},data(){return{show:!1,parentAddress:null,loading:!1}},created(){},mounted(){this.contracts&&this.init()},methods:{open(){this.show=!0},async init(){sessionStorage.getItem("inviterAddress")&&(this.parentAddress=sessionStorage.getItem("inviterAddress"));let t=await this.contracts.Family.methods.rootAddress().call();this.address.toLowerCase()!=t.toLowerCase()&&(this.$store.state.parentOf||(this.show=!0))},async submit(){if(!this.web3.utils.isAddress(this.parentAddress))return Object(n["c"])(this.$t("bind.tips1"),"error");let t=await this.contracts.Family.methods.parentOf(this.parentAddress).call(),i=await this.contracts.Family.methods.rootAddress().call();this.parentAddress.toLowerCase()!=i.toLowerCase()&&"0x0000000000000000000000000000000000000000"==t&&Object(n["c"])(this.$t("bind.tips2"),"error"),this.loading=!0,this.contracts.Family.methods.makeRelation(this.parentAddress).send({from:this.address}).on("receipt",t=>{Object(n["c"])(this.$t("bind.tips3"),"success"),this.handCancel()}).on("error",t=>{Object(n["c"])(this.$t("bind.cancel"),"error"),this.loading=!1})},handCancel(){this.loading=!1,this.parentAddress=null,this.show=!1}}},c=r,b=c,l=(e("7aeb"),e("2877")),p=Object(l["a"])(b,o,s,!1,null,"f3a50660",null);i["default"]=p.exports},"753a":function(t,i,e){"use strict";e.r(i);var o=function(){var t=this,i=t._self._c;t._self._setupProxy;return i("transition",{attrs:{name:"el-fade-in-linear"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"ido-record",on:{click:function(i){t.show=!1}}},[i("div",{staticClass:"box",on:{click:function(t){t.stopPropagation()}}},[i("div",{staticClass:"top"},[t.isPC?t._e():i("img",{attrs:{src:e("8487")}}),i("div",{staticClass:"title"},[t._v(t._s(t.$t("ido.text19")))]),i("i",{staticClass:"el-icon-close click",on:{click:function(i){t.show=!1}}})]),i("div",{staticClass:"record"},[i("div",{staticClass:"title"},[i("span",[t._v(t._s(t.$t("ido.text20"))+"(USDT)")]),i("span",[t._v(t._s(t.$t("ido.text22")))])]),t.lists.length>0?i("div",{staticClass:"lists"},t._l(t.lists,(function(e){return i("div",{staticClass:"item"},[i("div",[t._v(t._s(e.amount))]),i("div",[t._v(t._s(e.time))])])})),0):i("div",{staticClass:"empty"},[i("img",{attrs:{src:e("3312")}}),i("span",[t._v(t._s(t.$t("ido.text23")))])])])])])])},s=[],a=e("8346"),n={data(){return{show:!1,lists:[],isPC:!Object(a["b"])()}},methods:{open(){this.show=!0,this.getRecords()},async getRecords(){console.log(this.$store.state.contracts.Genesis),this.lists=[];let t=await this.$store.state.web3.eth.getBlockNumber(),i=await this.$store.state.contracts.Genesis.getPastEvents("Subscribe",{fromBlock:t-1e3,toBlock:t,filter:{user:this.$store.state.address}});console.log(i),i.length>0&&i.map(async t=>{this.lists.unshift({amount:t.returnValues.amount.fromWei().toFixed(2),time:Object(a["a"])(t.returnValues.time)})})}}},d=n,r=d,c=(e("89ee"),e("2877")),b=Object(c["a"])(r,o,s,!1,null,"29c80242",null);i["default"]=b.exports},"7aeb":function(t,i,e){"use strict";e("809a")},"809a":function(t,i,e){var o=e("0ab8");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var s=e("499e").default;s("6557bf3d",o,!0,{sourceMap:!1,shadowMode:!1})},8487:function(t,i,e){t.exports=e.p+"img/record-img.8ae1fcf3.png"},"89ee":function(t,i,e){"use strict";e("1f11")},a940:function(t,i,e){var o=e("24fb");i=o(!1),i.push([t.i,".ido-record[data-v-29c80242]{position:fixed!important;top:0;left:0;right:0;bottom:0;-webkit-overflow-scrolling:touch;background-color:rgba(0,0,0,.5);z-index:2}.ido-record>.box[data-v-29c80242]{width:600px;border-radius:20px;margin:10% auto;background:#fff;box-sizing:border-box;border:1px solid #082d7e}.ido-record>.box>.top[data-v-29c80242]{padding:25px 0;border-bottom:1px solid #d8d8d8;position:relative}.ido-record>.box>.top>.title[data-v-29c80242]{font-size:18px;font-family:PingFang SC-Regular,PingFang SC;font-weight:400;color:#333}.ido-record>.box>.top>.el-icon-close[data-v-29c80242]{position:absolute;right:20px;top:20px;color:#333;font-size:24px;line-height:24px}.ido-record>.box>.record[data-v-29c80242]{height:382.5px;overflow:hidden;margin-top:41px;position:relative;margin:29px 35px 56px}.ido-record>.box>.record[data-v-29c80242],.ido-record>.box>.record>.title[data-v-29c80242]{border-radius:10px;background:linear-gradient(180deg,#dae5ff,#fff);box-sizing:border-box;border:0 solid #082d7e;box-shadow:0 4px 7px 0 rgba(0,0,0,.3)}.ido-record>.box>.record>.title[data-v-29c80242]{display:grid;height:51.5px;grid-template-columns:repeat(2,1fr);color:#333;font-size:14px;line-height:51.5px}.ido-record>.box>.record>.lists[data-v-29c80242]{height:320px;overflow:hidden auto}.ido-record>.box>.record>.lists>.item[data-v-29c80242]{display:grid;height:51.5px;grid-template-columns:repeat(2,1fr);color:#333;font-size:14px;align-items:center}.ido-record>.box>.record>.empty[data-v-29c80242]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:#333;font-size:14px;line-height:19px;display:flex;align-items:center;justify-content:center;flex-direction:column}.ido-record>.box>.record>.empty>img[data-v-29c80242]{width:100px;margin-bottom:17px}@media(max-width:736px){.ido-record[data-v-29c80242]{padding-top:20%}.ido-record>.box[data-v-29c80242]{width:9.2rem;border-radius:20px;background:#fff;box-sizing:border-box;border:1px solid #082d7e}.ido-record>.box>.top[data-v-29c80242]{display:flex;align-items:center;padding:20px 15px;border-bottom:1px solid #d8d8d8}.ido-record>.box>.top>img[data-v-29c80242]{width:26px;margin-right:10px}.ido-record>.box>.top>.title[data-v-29c80242]{font-size:16px;text-align:left;font-weight:400;letter-spacing:0;color:#333}.ido-record>.box>.top>.el-icon-close[data-v-29c80242]{font-size:20px;top:15px;right:15px;color:#333}.ido-record>.box>.header[data-v-29c80242]{padding-bottom:16px}.ido-record>.box>.header>.info>.logo[data-v-29c80242]{width:48px;margin-right:.1333rem}.ido-record>.box>.header>.info>.logo>i[data-v-29c80242]:first-child{width:35px;height:35px}.ido-record>.box>.header>.info>.logo>i[data-v-29c80242]:nth-child(2){width:26px;height:26px;transform:translateX(-13px)}.ido-record>.box>.header>.info>.symbol[data-v-29c80242]{padding-bottom:2px;color:#fff;font-size:14px;line-height:20px}.ido-record>.box>.header>.info>.symbol>img[data-v-29c80242]{width:17.93px;margin-left:8px}.ido-record>.box>.header>.el-icon-close[data-v-29c80242]{color:#fff;font-size:14px;line-height:14px}.ido-record>.box>.record[data-v-29c80242]{height:320px;margin:22px 15px 30px;background:linear-gradient(180deg,#dae5ff,#fff)}.ido-record>.box>.record[data-v-29c80242],.ido-record>.box>.record>.title[data-v-29c80242]{border-radius:10px;opacity:1;box-sizing:border-box;border:0 solid #082d7e;box-shadow:0 4px 7px 0 rgba(0,0,0,.3)}.ido-record>.box>.record>.title[data-v-29c80242]{display:grid;height:51.5px;background-color:#201b36;grid-template-columns:repeat(2,1fr);color:#333;font-size:14px;line-height:51.5px;background:linear-gradient(180deg,#dae5ff,#fff)}.ido-record>.box>.record>.empty[data-v-29c80242]{color:#333}.ido-record>.box>.record>.empty>img[data-v-29c80242]{width:50px;margin-bottom:6px}}",""]),t.exports=i}}]);