(function(){
	module.exports = {
		/*格式化金额*/
	    fmoney:function(s, n){
	    	var ss = $.trim(s);
		    if(s == null || ss == "" || s==undefined){return ""};
	        n = n > 0 && n <= 20 ? n : 2;   
			s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";   
			var l = s.split(".")[0].split("").reverse(),   
			r = s.split(".")[1];   
			t = "";   
			for(i = 0; i < l.length; i ++ )   
			{   
			  t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");   
			}   
			return t.split("").reverse().join("") + "." + r;
	    },

	    /*计算天数差的函数，通用  */
	    DateDiff:function(sDate1,  sDate2){    //sDate1和sDate2是2006-12-18格式 
	    	var  aDate,  oDate1,  oDate2,  iDays ; 
	        aDate  =  sDate1.split("-");  
	        oDate1  =  new  Date(aDate[1]  +  '-'  +  aDate[2]  +  '-'  +  aDate[0]);    //转换为12-18-2006格式  
	        aDate  =  sDate2.split("-");  
	        oDate2  =  new  Date(aDate[1]  +  '-'  +  aDate[2]  +  '-'  +  aDate[0]);  
	        iDays  =  parseInt(Math.abs(oDate1  -  oDate2)  /  1000  /  60  /  60  /24);    //把相差的毫秒数转换为天数  
	        return  iDays ;
	    },

	    /*加法函数*/
	    accAdd:function(arg1, arg2){
	    	var r1, r2, m;  
	        try {  
	            r1 = arg1.toString().split(".")[1].length;  
	        }  
	        catch (e) {  
	            r1 = 0;  
	        }  
	        try {  
	            r2 = arg2.toString().split(".")[1].length;  
	        }  
	        catch (e) {  
	            r2 = 0;  
	        }  
	        m = Math.pow(10, Math.max(r1, r2));  
	        return (arg1 * m + arg2 * m) / m;
	    },

	    /*减法函数  */
	    Subtr:function(arg1, arg2){
	    	var r1, r2, m, n;  
	        try {  
	            r1 = arg1.toString().split(".")[1].length;  
	        }  
	        catch (e) {  
	            r1 = 0;  
	        }  
	        try {  
	            r2 = arg2.toString().split(".")[1].length;  
	        }  
	        catch (e) {  
	            r2 = 0;  
	        }  
	        m = Math.pow(10, Math.max(r1, r2));  
	         //last modify by deeka  
	         //动态控制精度长度  
	        n = (r1 >= r2) ? r1 : r2;  
	        return ((arg1 * m - arg2 * m) / m).toFixed(n);
	    },

	    /*除法函数  */
	    accDiv:function (arg1, arg2) {
	    	var t1 = 0, t2 = 0, r1, r2;  
	        try {  
	            t1 = arg1.toString().split(".")[1].length;  
	        }  
	        catch (e) {  
	        }  
	        try {  
	            t2 = arg2.toString().split(".")[1].length;  
	        }  
	        catch (e) {  
	        }  
	        with (Math) {  
	            r1 = Number(arg1.toString().replace(".", ""));  
	            r2 = Number(arg2.toString().replace(".", ""));  
	            return (r1 / r2) * pow(10, t2 - t1);  
	        } 
	    },

	    /*精确乘法运算*/
	    accMul:function(arg1,arg2){
	    	var m=0,s1=arg1.toString(),s2=arg2.toString();
			try{m+=s1.split(".")[1].length}catch(e){}
			try{m+=s2.split(".")[1].length}catch(e){}
			return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m);
	    },

	    /*金额转大写*/
	    moneyToCap:function(num){
	    	var strOutput = "";  
		    var strUnit = '仟佰拾亿仟佰拾万仟佰拾元角分';  
		    num += "00";  
		    var intPos = num.indexOf('.');  
		    if (intPos >= 0)  
		    num = num.substring(0, intPos) + num.substr(intPos + 1, 2);  
		    strUnit = strUnit.substr(strUnit.length - num.length);  
		    for (var i=0; i < num.length; i++){  
		      strOutput += '零壹贰叁肆伍陆柒捌玖'.substr(num.substr(i,1),1) + strUnit.substr(i,1); 
		    } 
		    return strOutput.replace(/零角零分$/, '整').replace(/零[仟佰拾]/g, '零').replace(/零{2,}/g, '零').replace(/零([亿|万])/g, '$1').replace(/零+元/, '元').replace(/亿零{0,3}万/, '亿').replace(/^元/, "零元");
	    },

	    /*计算付款单金额合计*/
	    calculatePayTotal:function(acc){
	    	var money = 0.0;
	    	for(var i=0; i<acc.length; i++){
	    		if(acc[i].money!=undefined && $.trim(acc[i].money)!=''){
	    			var mon = (acc[i].money).replace(/,/g,"");
	    			money = parseFloat(money)+parseFloat(mon);
	    		}
	    	}
	    	return money;
	    }
	}
})(this)