<style type="text/css">
	
	.content{

		font-family: "Helvetica Neue", "Helvetica", "Lucida Grande", "Arial", "Hiragino Sans GB", "Microsoft Yahei", "WenQuanYi Micro Hei", "sans-serif";
    font-weight: normal;
	}

	.title{
		border-bottom: 1px solid #eee;
	  margin: 40px 0 20px;
	  padding-bottom: 9px;
	}

	.masthead{

		padding: 80px 0 100px;
		color: #fff;
	}

	.masthead h1 {
		font-size: 100px;
	}

	.masthead h2 {
    font-size: 30px;
	}

	.jumbotron{

		position: relative;
		text-align: center;
		text-shadow: 0 1px 3px rgba(0,0,0,.4),0 0 30px rgba(0,0,0,.075);
		background: linear-gradient(45deg,#020031 0,#6d3353 100%);
		box-shadow: inset 0 3px 7px rgba(0,0,0,.2),inset 0 -3px 7px rgba(0,0,0,.2);
	}

	.page-header{

		padding-bottom: 9px;
    margin: 40px 0 20px;
    border-bottom: 1px solid #eee;
	}

	.footer {
    text-align: center;
    padding: 30px 0;
    margin-top: 100px;
    border-top: 1px solid #e5e5e5;
    background-color: #f5f5f5;
	}

</style>

<template>

	<div class="content">

		<div class="jumbotron masthead">
	    
	    <div class="container">

	      <h1>好妻子</h1>
	      <h2>已开机 149 天，预计剩余 28 天</h2>
	    </div>
	  </div>

	  <div class="container">

	  	<div class="row">
      	
      	<h2 class="page-header">拍摄进度</h2>

      	<div class="col-md-6">

      		<div style="width:300px;">
						<canvas id="pie" style="width:100%;height:300px"></canvas>

						<p>已完成拍摄 86 /3,090 场</p>
						<del><p>昨日通告：共9场,甩戏1场,完成8场</p></del>
						
					</div>
      	</div>

      	<div class="col-md-6">

					<canvas id="star" style="width:100%;height:300px"></canvas>

      	</div>
      	
  		</div>

  		<div class="row" style="margin-top:40px;">

  			<h2 class="page-header">费用进度</h2>

  			<div class="col-md-6">
  				<div>
						<canvas id="cost" style="width:100%;height:300px"/>
					</div>

      		<p>已支出：	<strong>6,258,268.91</strong>(CNY)元</p>
      		<p>总预算：	<strong>55,373,550.00</strong>(CNY)元</p>
      	</div>

      	<div class="col-md-6">
      		<p>单集投资：1,287,756.98(CNY)万</p>
					<p>已拍摄4天，单日拍摄摊分成本：1,564,567.23元</p>
					<p>昨日支出费用：0元</p>
      	</div>
    	</div>
		</div>

		<footer class="footer">
      <div class="container">
        <p>小土科技</p>
        <p>影视剧生产管理系统</p>
        <p>
        	<a href="#">京ICP备11008151号</a>
        	<a href="#">京公网安备11010802014853</a>
       	</p>
      </div>
    </footer>

  </div>

</template>

<script type="text/javascript">

	var pieData = [
		{
			value: 300,
			color:"#F7464A",
			highlight: "#FF5A5E",
			label: "Red"
		},
		{
			value: 50,
			color: "#46BFBD",
			highlight: "#5AD3D1",
			label: "Green"
		},
		{
			value: 100,
			color: "#FDB45C",
			highlight: "#FFC870",
			label: "Yellow"
		},
		{
			value: 40,
			color: "#949FB1",
			highlight: "#A8B3C5",
			label: "Grey"
		},
		{
			value: 120,
			color: "#4D5360",
			highlight: "#616774",
			label: "Dark Grey"
		}
	];

	var doughnutData = [
		{
			value: 11,
			color:"#F7464A",
			label : "已支出"
		},
		{
			value : 89,
			color : "#949FB1",
			label : "剩余" 
		}
	];

	var barData = {
		labels : ["弗拉基米尔","莱昂纳多","梁朝伟","苏菲玛索"],
		datasets : [
			{
				fillColor : "rgba(220,220,220,0.5)",
				strokeColor : "rgba(220,220,220,1)",
				data : [912,986,1298,842]
			},
			{
				fillColor : "rgba(151,187,205,0.5)",
				strokeColor : "rgba(151,187,205,1)",
				data : [22,39,36,31]
			}
		]
	}

	module.exports = {

		ready(){

	    var self = this;

			var ctx = document.getElementById("pie").getContext("2d");
			new Chart(ctx).Pie(pieData);

			var cost = document.getElementById("cost").getContext("2d");
			new Chart(cost).Doughnut(doughnutData);

			var star = document.getElementById("star").getContext("2d");
			new Chart(star).Bar(barData);
		}
	}

</script>