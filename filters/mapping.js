(function(){

  module.exports = {
    season:function(value){

      var array = new Array();
      array[1] = "春";
      array[2] = "夏";
      array[3] = "秋";
      array[4] = "冬";

      return array[value];
    },
    shootStatus:function(value){

      var array = new Array();
      array[0] = "未完成";
      array[1] = "部分完成";
      array[2] = "完成";
      array[3] = "删戏";

      return array[value];
    },
    viewType:function(value){

      var array = new Array();
      array[1] = "文";
      array[2] = "武";
      array[3] = "文武";

      return array[value];
    },
    balanceStatus:function(value){

      var array = new Array();
      array[0] = "未结算";
      array[1] = "已结算";

      return array[value];
    },
    financeType:function(value){
      var array = new Array();
      array[1] = "付款";
      array[2] = "付款";
      array[3] = "收款";
      array[4] = "借款";
      array[5] = "付款(部分抵借)";
      array[6] = "付款(抵借)";

      return array[value];
    },
    paymentWay:function(value){

      var array = new Array();
      array[1] = "现金";
      array[2] = "现金(网转)";
      array[3] = "银行";

      return array[value];
    },
    hasReceipt:function(value){

      var array = new Array();
      array[0] = "无发票";
      array[1] = "有发票";
      
      return array[value];
    }

  }
})(this)