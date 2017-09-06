<style type="text/css">
	.breadcrumb{

    background-color:white;
    padding: 8px 0px;
    margin-bottom: 0px;
  }

  .query-item-container{
    padding: 8px 0px;
    margin-bottom: 0px;
  }

  .query-item{

    border: 1px solid #DDD;
    padding: 3px 28px 3px 5px;
    position: relative;
    background-color: #F9FAFB;
  }

  .query-item span{

    right: 2px;
    position: absolute;
    opacity: 0.5;
    color: black;
    font-size: 13px;
    top: 5px;
  }
</style>
<template>
	<div class="row">
		<!-- <ol class="breadcrumb pull-left" style="background-color:white;margin-bottom: 0px;">
			<li><a href="#">拍摄管理</a></li>
			<li class="active">财务详情</li>
		</ol> -->

		<ul class="list-inline pull-left query-item-container">
			<li v-if="query.payeeName != '' ">
		        <a class="query-item" href="#" v-on:click="removeQuery('payeeName')">
		          {{query.value.payeeName}}
		          <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
		        </a>
		    </li>

		</ul>
		<!-- <ul class="list-inline pull-left query-item-container">
			<li v-if="query.accountIds != '' ">
		        <a class="query-item" href="#" v-on:click="removeQuery('accountIds')">
		          {{query.value.accountIds}}
		          <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
		        </a>
		    </li>
		
		</ul> -->
		<ul class="list-inline pull-left query-item-container">
			<li v-if="query.agent != '' ">
		        <a class="query-item" href="#" v-on:click="removeQuery('agent')">
		          {{query.value.agent}}
		          <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
		        </a>
		    </li>

		</ul>
		<ul class="list-inline pull-left query-item-container">
			<li v-if="query.paymentDate != '' ">
		        <a class="query-item" href="#" v-on:click="removeQuery('paymentDate')">
		          {{query.value.paymentDate}}
		          <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
		        </a>
		    </li>

		</ul>
		<ul class="list-inline pull-left query-item-container">
			<li v-if="query.type != '' ">
		        <a class="query-item" href="#" v-on:click="removeQuery('type')">
		          {{query.value.type}}
		          <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
		        </a>
		    </li>

		</ul>
		<ul class="list-inline pull-left query-item-container">
			<li v-if="query.status != '' ">
		        <a class="query-item" href="#" v-on:click="removeQuery('status')">
		          {{query.value.status}}
		          <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
		        </a>
		    </li>

		</ul>
		<ul class="list-inline pull-left query-item-container">
			<li v-if="query.receipt != '' ">
		        <a class="query-item" href="#" v-on:click="removeQuery('receipt')">
		          {{query.value.receipt}}
		          <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
		        </a>
		    </li>

		</ul>
		<ul class="list-inline pull-left query-item-container">
			<li v-if="query.summary != '' ">
		        <a class="query-item" href="#" v-on:click="removeQuery('summary')">
		          {{query.summary}}
		          <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
		        </a>
		    </li>

		</ul>
	</div>
</template>
<script type="text/javascript">
	export default {

	    props:{
	      //查询条件
	      query:Object
	    },
	    methods:{

	      //移除一个查询条件, 刷新表格
	      removeQuery:function(key){

	        this.query[key] = '';

	        this.$dispatch('reload');
	      }
	    }
	}
</script>