<style type="text/css">

	.content{

		padding-top: 15px;
	}

	.breadcrumb{

		background-color:white;
		padding: 8px 0px;
  	margin-bottom: 0px;
	}

	.crumb{

		padding-bottom: 10px;
	}

	.calendar>div:first-child>div{

		border-top: 1px solid #ddd;
	}

	.calendar>div>div:first-child{

		border-left: 1px solid #ddd;
	}

	.calendar-day{

		width: 14.2857%;
		float: left;
		position: relative;
    min-height: 1px;
    padding-top: 10px;
    padding-right: 15px;
    padding-left: 15px;
 		height: 150px;

 		border-right: 1px solid #ddd;
 		border-bottom: 1px solid #ddd;
	}

	.calendar .calendar-head div{

		width: 14.2857%;
		float: left;
		position: relative;
    min-height: 1px;
    padding-top: 5px;
    padding-right: 15px;
    padding-left: 15px;
 		height: 30px;

 		border-right: 1px solid #ddd;
 		border-bottom: 1px solid #ddd;
	}

	.calendar .calendar-head{
		background: aliceblue;
	}
	
</style>

<template>

	<div class="content container-fluid">
		
		<!-- 导航 -->
		<div class="crumb row">
			<ol class="breadcrumb pull-left">
				<li><a href="#">拍摄管理</a></li>
				<li class="active">通告单</li>
			</ol>
		</div>

		<div class="calendar">

			<div class="row calendar-head">

				<div>星期日</div>
				<div>星期一</div>
				<div>星期二</div>
				<div>星期三</div>
				<div>星期四</div>
				<div>星期五</div>
				<div>星期六</div>
			</div>

			<div class="row">

				<div class="calendar-day">.col-md-1</div>
				<div class="calendar-day">.col-md-1</div>
				<div class="calendar-day">.col-md-1</div>
				<div class="calendar-day">.col-md-1</div>

				<div class="calendar-day">.col-md-1</div>
				<div class="calendar-day">.col-md-1</div>
				<div class="calendar-day">.col-md-1</div>
			</div>

			<div class="row">

				<div class="calendar-day">.col-md-1</div>
				<div class="calendar-day">

					<p class="bg-primary">单组通告</p>
					<p class="bg-primary">2015年07月22日A组通告</p>
				</div>
				<div class="calendar-day">.col-md-1</div>
				<div class="calendar-day">.col-md-1</div>

				<div class="calendar-day">.col-md-1</div>
				<div class="calendar-day">.col-md-1</div>
				<div class="calendar-day">.col-md-1</div>
			</div>

			<div class="row">

				<div class="calendar-day">.col-md-1</div>
				<div class="calendar-day">.col-md-1</div>
				<div class="calendar-day">.col-md-1</div>
				<div class="calendar-day">.col-md-1</div>

				<div class="calendar-day">.col-md-1</div>
				<div class="calendar-day">.col-md-1</div>
				<div class="calendar-day">.col-md-1</div>
			</div>

			<div class="row">

				<div class="calendar-day">.col-md-1</div>
				<div class="calendar-day">.col-md-1</div>
				<div class="calendar-day">.col-md-1</div>
				<div class="calendar-day">.col-md-1</div>

				<div class="calendar-day">.col-md-1</div>
				<div class="calendar-day">.col-md-1</div>
				<div class="calendar-day">.col-md-1</div>
			</div>

			<div class="row">

				<div class="calendar-day">.col-md-1</div>
				<div class="calendar-day">.col-md-1</div>
				<div class="calendar-day">.col-md-1</div>
				<div class="calendar-day">.col-md-1</div>

				<div class="calendar-day">.col-md-1</div>
				<div class="calendar-day">.col-md-1</div>
				<div class="calendar-day">.col-md-1</div>
			</div>

		</div>

	</div>

</template>

<script type="text/javascript">
	
	export default {

		components:{

		},
		data:function(){

		},
		created:function(){

    },
    methods:{
    	
    },
    events:{
    
    }
	}

</script>