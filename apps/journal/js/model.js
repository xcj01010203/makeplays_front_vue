(function(){

	module.exports = {
		PageModel:function(){
	      return {
	        pagesize:200,
	        pagenum:0,
	        total:0
	      }
	    },
	    QueryModel:function(){
	    	return {
	    		paymentDate:'',
	    		payeeName:'',
	    		agent:'',
	    		status:'',
	    		type:'',
	    		flag:'',
	    		receipt:'',
	    		accountIds:'',
	    		summary:'',
	    		startDate:'',
	    		endDate:'',
	    		sortColumn:0,
	    		sortWay:1,

	    		value:{
	    			paymentDate:'',
		    		payeeName:'',
		    		agent:'',
		    		status:'',
		    		type:'',
		    		receipt:'',
		    		accountIds:'',
	    		}
	    	}
	    },
	    ContextModel:function(){

	      return {
	        journalNameList:[],
	        journalDateList:[],
	        journalAgentList:[],
	        journalType:[],
	        hasReceipt:[],
	        isBalance:[]
	      }
	    },
	    JournalModel:function(){
	    	return {
	    		id:'',
	    		date:'', //日期
	    		billNo:'',  //票据编号
	    		desc:'',   //摘要
	    		accountId:'', // 财务科目id
	    		accountName:'',// 财务科目名称
	    		paymentMoney:'',// 付款金额
	    		collectionsMoney:'',// 收款金额
	    		balance:'',// 资金余额
	    		status:'',// 状态
	    		journalType:'',// 财务类型
	    		personId:'', // 人员id
	    		personType:'', // 人员类型
	    		name:'',// 收，付人名称
	    		way:'',// 收付方式
	    		invoice:'',// 有无发票
	    		billCount:'',// 发票张数
	    		voucher:'',// 是否已生成凭证
	    		attn:'',// 经办人
	    		currencyId:'',// 币种Id
	    		currencyCode:'',// 币种
	    		currencyName:'',// 币种名称
	    		show:'',// 是否显示
	    		isCheck:'',// 是否选中
	    		dates:'',
	    		type:'',   //细化财务类型 1、付款，2、薪酬付款，3、收款，4、借款付款，5、付款（部分抵借），6、付款（抵借）
	    		contractNo:'',//合同编号
	    		createTime:'',
	    		contractId:'',
	    		dateType:'',
	    		realPayMoney:'', //实际付款金额（付款金额减借款金额）
	    		loanMoney:''  //借款金额
	    	}
	    },
	    JournalAccountModel:function(){
	    	return {
	    		accountId:'',   //科目id
	    		summary:'',  //摘要
	    		money:'',   //金额
	    		accountName:''  //科目名称
	    	}
	    },
	    currencyModel:function(){
	    	return {
	    		currencyId:'',  // 币种id
	    		currencyName: '',  //币种名称
	    		currencyCode: '',  //币种编码
	    		ifStandard: '',  //是否为本位币
	    		ifEnable: '',   //该币种是否启用
	    		exchangeRate: '',   //汇率
	    		crewId:''  
	    	}
	    }
	}

})(this)