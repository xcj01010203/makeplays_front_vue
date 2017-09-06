var Vue = require('vue');
var Resource = require('vue-resource');
var App = require('../tpl/index.vue');

var _mapping = require('../../../filters/mapping');
var _calculate = require('../../../filters/calculate');

Vue.use(Resource);

new Vue({
  el: 'body',
  components: {
    app: App
  }
});

Date.prototype.Format = function(fmt)   
{ //author: meizz   
  var o = {   
    "M+" : this.getMonth()+1,                 //月份   
    "d+" : this.getDate(),                    //日   
    "h+" : this.getHours(),                   //小时   
    "m+" : this.getMinutes(),                 //分   
    "s+" : this.getSeconds(),                 //秒   
    "q+" : Math.floor((this.getMonth()+3)/3), //季度   
    "S"  : this.getMilliseconds()             //毫秒   
  };   
  if(/(y+)/.test(fmt))   
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));   
  for(var k in o)   
    if(new RegExp("("+ k +")").test(fmt))   
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
  return fmt;   
} 

Vue.filter('balanceStatus', _mapping.balanceStatus);
Vue.filter('financeType', _mapping.financeType);
Vue.filter('fmoney', _calculate.fmoney);
Vue.filter('paymentWay', _mapping.paymentWay);
Vue.filter('hasReceipt', _mapping.hasReceipt);
Vue.filter('calculatePayTotal', _calculate.calculatePayTotal);
Vue.filter('moneyToCap', _calculate.moneyToCap);

Vue.config.debug = true