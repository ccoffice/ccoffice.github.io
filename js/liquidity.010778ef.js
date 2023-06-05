(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["liquidity"],{"5bba":function(t,i,a){var e=a("f059");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var s=a("499e").default;s("9a8132a8",e,!0,{sourceMap:!1,shadowMode:!1})},"8a37":function(t,i,a){t.exports=a.p+"img/plus.aa6b70bb.svg"},ed61:function(t,i,a){"use strict";a.r(i);var e=function(){var t=this,i=t._self._c;t._self._setupProxy;return i("div",{staticClass:"liquidity"},[i("div",{staticClass:"title"},[i("span",[t._v(t._s(t.$t("liquidity.text1")))]),i("img",{staticClass:"click",attrs:{src:a("cc6c")},on:{click:function(i){return t.$emit("openSetting")}}})]),i("div",{staticClass:"sub-title"},[t._v(t._s(t.$t("liquidity.text2")))]),i("div",{staticClass:"form"},[i("div",{staticClass:"container"},[t._m(0),i("span",{staticClass:"balance"},[t._v(t._s(t.$t("liquidity.text3"))+" "+t._s(t.balance0.toFixed(2)))]),i("input",{attrs:{autofocus:"",type:"text",placeholder:"0.00"},domProps:{value:t.amount0.toFixed(2)},on:{input:t.handleInput0}})]),i("img",{attrs:{src:a("8a37")}}),i("div",{staticClass:"container"},[t._m(1),i("span",{staticClass:"balance"},[t._v(t._s(t.$t("liquidity.text3"))+" "+t._s(t.balance1.toFixed(2)))]),i("input",{attrs:{type:"text",placeholder:"0.00"},domProps:{value:t.amount1.toFixed(2)},on:{input:t.handleInput1}})])]),i("div",{staticClass:"label"},[t._v(t._s(t.$t("liquidity.text4")))]),i("div",{staticClass:"info"},[i("div",[i("span",[t._v(t._s(t.priceUSDT.toFixed(6)))]),i("span",[t._v("USDT/CC")])]),i("div",[i("span",[t._v(t._s(t.priceCC.toFixed(6)))]),i("span",[t._v("CC/USDT")])]),i("div",[i("span",[t._v(t._s(t.holdRatio.toFixed(2))+"%")]),i("span",[t._v(t._s(t.$t("liquidity.text5")))])])]),i("el-button",{directives:[{name:"show",rawName:"v-show",value:"none"===t.tradingStatus,expression:"tradingStatus === 'none'"}],attrs:{disabled:t.disabled},on:{click:t.addLiquidity}},[t._v(t._s(t.btnText))]),i("el-button",{directives:[{name:"show",rawName:"v-show",value:"trading"===t.tradingStatus,expression:"tradingStatus === 'trading'"}],attrs:{loading:""}},[t._v(t._s(t.btnText))])],1)},s=[function(){var t=this,i=t._self._c;t._self._setupProxy;return i("div",{staticClass:"token"},[i("img",{staticClass:"logo",attrs:{src:a("0f62")}}),i("span",[t._v("CC")]),i("i",{staticClass:"el-icon-caret-bottom"})])},function(){var t=this,i=t._self._c;t._self._setupProxy;return i("div",{staticClass:"token"},[i("img",{staticClass:"logo",attrs:{src:a("0f62")}}),i("span",[t._v("USDT")]),i("i",{staticClass:"el-icon-caret-bottom"})])}],o=a("2f62"),n={data(){return{balance0:0,balance1:0,allowance0:0,allowance1:0,amount0:"",amount1:"",reserve0:0,reserve1:0,priceUSDT:0,priceCC:0,balanceLP:0,totalSupply:0,tradingStatus:"none"}},computed:{...Object(o["b"])(["address","contracts","slippage","deadline"]),holdRatio(){return this.balanceLP<=0||this.totalSupply<=0?0:this.balanceLP.toBN().div(this.totalSupply).times(100).toFixed()},disabled(){return this.amount0<=0||this.amount1<=0||this.amount0.toBN().gt(this.balance0)||this.amount1.toBN().gt(this.balance1)},btnText(){return"trading"===this.tradingStatus?this.$t("liquidity.text7"):this.amount0.toBN().gt(this.allowance0)?this.$t("liquidity.text8",{symbol:"CC"}):this.amount1.toBN().gt(this.allowance1)?this.$t("liquidity.text8",{symbol:"USDT"}):this.amount0.toBN().gt(this.balance0)?this.$t("liquidity.text9",{symbol:"CC"}):this.amount1.toBN().gt(this.balance1)?this.$t("liquidity.text9",{symbol:"USDT"}):this.$t("liquidity.text6")}},created(){this.contracts&&this.getData()},methods:{handleInput0(t){const i=t.target.value;this.amount0=i,this.amount1=i<=0?"":i.toBN().times(this.reserve1).div(this.reserve0).toFixed()},handleInput1(t){const i=t.target.value;this.amount1=i,this.amount0=i<=0?"":i.toBN().times(this.reserve0).div(this.reserve1).toFixed()},approve(){const t=this.amount0.toBN().gt(this.allowance0)?"CCToken":"USDTToken",i=this.amount0.toBN().gt(this.allowance0)?this.amount0:this.amount1,a=this.amount0.toBN().gt(this.allowance0)?"allowance0":"allowance1";this.contracts[t].methods.approve(this.contracts.SwapRouter.options.address,i.toWei()).send({from:this.address}).on("transactionHash",t=>{this.tradingStatus="trading"}).on("receipt",i=>{this.contracts[t].methods.allowance(this.address,this.contracts.SwapRouter.options.address).call((t,i)=>{t||(this[a]=i.fromWei(),this.tradingStatus="none")})}).on("error",t=>{this.tradingStatus="none",console.error(t)})},addLiquidity(){if(this.amount0.toBN().gt(this.allowance0))return this.approve();const t=this.amount0.toBN().div(100).times(this.slippage),i=this.amount1.toBN().div(100).times(this.slippage),a=this.amount0.toBN().minus(t).toFixed(),e=this.amount1.toBN().minus(i).toFixed(),s=Math.floor(new Date/1e3)+this.deadline,o=this.contracts.SwapRouter.methods.addLiquidity(this.contracts.CCToken.options.address,this.contracts.USDTToken.options.address,this.amount0.toWei().toFixed(0),this.amount1.toWei().toFixed(0),a.toWei().toFixed(0),e.toWei().toFixed(0),this.address,s);o.call((t,i)=>{t||console.log(i)})},getData(){this.address&&this.userInfo(),this.contracts.SwapRouter.methods.getAmountsOut("1".toWei(),[this.contracts.CCToken.options.address,this.contracts.USDTToken.options.address]).call((t,i)=>{t||(this.priceCC=i[1].fromWei())}),this.contracts.SwapRouter.methods.getAmountsOut("1".toWei(),[this.contracts.USDTToken.options.address,this.contracts.CCToken.options.address]).call((t,i)=>{t||(this.priceUSDT=i[1].fromWei())}),this.contracts.SwapPair.methods.totalSupply().call((t,i)=>{t||(this.totalSupply=i.fromWei())}),this.contracts.CCToken.methods.balanceOf(this.contracts.SwapPair.options.address).call((t,i)=>{t||(this.reserve0=i.fromWei())}),this.contracts.USDTToken.methods.balanceOf(this.contracts.SwapPair.options.address).call((t,i)=>{t||(this.reserve1=i.fromWei())})},userInfo(){this.contracts.CCToken.methods.balanceOf(this.address).call((t,i)=>{t||(this.balance0=i.fromWei())}),this.contracts.CCToken.methods.allowance(this.address,this.contracts.SwapRouter.options.address).call((t,i)=>{t||(this.allowance0=i.fromWei())}),this.contracts.USDTToken.methods.balanceOf(this.address).call((t,i)=>{t||(this.balance1=i.fromWei())}),this.contracts.USDTToken.methods.allowance(this.address,this.contracts.SwapRouter.options.address).call((t,i)=>{t||(this.allowance1=i.fromWei())}),this.contracts.SwapPair.methods.balanceOf(this.address).call((t,i)=>{t||(this.balanceLP=i.fromWei())})}}},l=n,r=l,d=(a("ffec"),a("2877")),c=Object(d["a"])(r,e,s,!1,null,"522903ea",null);i["default"]=c.exports},f059:function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,".liquidity[data-v-522903ea]{padding:37px 35px 71px}.liquidity>.title[data-v-522903ea]{display:flex;align-items:center;justify-content:space-between;flex-direction:row;color:#fff;font-size:18px;line-height:24px;font-weight:700}.liquidity>.title>img[data-v-522903ea]{width:22.31px}.liquidity>.sub-title[data-v-522903ea]{text-align:left;margin:9px 0 11px;color:#8178c7;font-size:14px;line-height:19px}.liquidity>.form[data-v-522903ea]{display:flex;align-items:center;justify-content:space-between;flex-direction:row}.liquidity>.form>.container[data-v-522903ea]{border-radius:10px;background-color:#181525;padding:19px 0 27px 26px;border:1px solid #8757fa;display:flex;align-items:flex-start;justify-content:center;flex-direction:column}.liquidity>.form>.container>.token[data-v-522903ea]{display:flex;align-items:center;justify-content:space-between;flex-direction:row;color:#fff;font-size:24px;line-height:32px}.liquidity>.form>.container>.token>.logo[data-v-522903ea]{width:36px;margin-right:14px}.liquidity>.form>.container>.token>.el-icon-caret-bottom[data-v-522903ea]{margin-left:16px;color:#8178c7;font-size:14px;line-height:8.74px}.liquidity>.form>.container>.balance[data-v-522903ea]{margin-top:8px;padding-left:2px;color:#8178c7;font-size:14px;line-height:19px}.liquidity>.form>.container>input[data-v-522903ea]{width:100%;border:none;outline:none;margin-top:13px;font-weight:700;padding-left:2px;background-color:transparent;color:#fff;font-size:20px;line-height:27px}.liquidity>.form>img[data-v-522903ea]{width:35.65px;flex-shrink:0;margin:0 8.5px}.liquidity>.label[data-v-522903ea]{margin-top:42px;text-align:left;font-weight:700;color:#fff;font-size:14px;line-height:19px}.liquidity>.info[data-v-522903ea]{display:grid;margin-top:14px;border-radius:10px;padding:19px 0 23px;background-color:#181525;grid-template-columns:repeat(3,1fr)}.liquidity>.info>div[data-v-522903ea]{row-gap:8px;color:#8178c7;font-size:14px;line-height:19px;display:flex;align-items:center;justify-content:center;flex-direction:column}.liquidity>button[data-v-522903ea]{width:100%;height:50px;margin-top:35px}.liquidity>button+button[data-v-522903ea]{margin-left:0}@media screen and (max-width:736px){.liquidity[data-v-522903ea]{padding:28px 21px 47px}.liquidity>.title[data-v-522903ea]{font-size:14px;line-height:19px}.liquidity>.title>img[data-v-522903ea]{width:14.87px}.liquidity>.sub-title[data-v-522903ea]{font-size:12px;line-height:16px;margin:3px 0 16px}.liquidity>.form>.container[data-v-522903ea]{padding:13px 0 23px 9px}.liquidity>.form>.container>.token[data-v-522903ea]{font-size:16px;line-height:21px}.liquidity>.form>.container>.token>.logo[data-v-522903ea]{width:24px;margin-right:9px}.liquidity>.form>.container>.token>.el-icon-caret-bottom[data-v-522903ea]{margin-left:10px;font-size:9.51px;line-height:5.94px}.liquidity>.form>.container>.balance[data-v-522903ea]{margin-top:11px;padding-left:1px;font-size:12px;line-height:16px}.liquidity>.form>.container>input[data-v-522903ea]{margin-top:15px;padding-left:1px;font-size:16px;line-height:21px}.liquidity>.form>img[data-v-522903ea]{width:24.22px;margin:0 6.5px}.liquidity>.label[data-v-522903ea]{margin-top:21px}.liquidity>.info[data-v-522903ea]{padding:21px 0 24px}.liquidity>.info>div[data-v-522903ea]{row-gap:11px;font-size:12px;line-height:16px}.liquidity>button[data-v-522903ea]{margin-top:21px}}",""]),t.exports=i},ffec:function(t,i,a){"use strict";a("5bba")}}]);