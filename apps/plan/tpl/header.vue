<style type="text/css">

	.title{

		border-bottom: 1px solid #eee;
    margin-bottom: 20px;
    border-top: 1px solid #eee;
	}

	.align-select{
		margin-top: 20px;
    margin-bottom: 10px;
		position: relative;
	}
</style>

<template>

	<article class="title">

		<div class="row">

			<div class="col-lg-2 col-md-3 col-sm-2 col-xs-12">

				<div class="btn-group" style="margin-top: 29px;">
					<button @click="setDisplay('tpl-overview')" type="button" class="btn btn-default btn-sm"
						v-bind:class="{ 'active': display == 'tpl-overview'}">
	        	概览
	        </button>
					<button @click="setDisplay('tpl-detail')" type="button" class="btn btn-default btn-sm"
						v-bind:class="{ 'active': display == 'tpl-detail'}">
	        	详情
	        </button>
      	</div>
			</div>

			<div class="col-lg-8 col-md-6 col-sm-8 col-xs-12">

				<h1 v-if="plans.length > 0" class="text-center">
					{{selected.name}}
				</h1>

				<h1 v-else>
					<small>点击右侧按钮创建计划</small>
				</h1>
			</div>

			<div class="col-lg-2 col-md-3 col-sm-2 col-xs-12">

				<div class="input-group pull-right" style="margin-top: 25px;margin-bottom:10px;">

		      <select class="form-control" v-model="selected" v-on:change="change">

		      	<template v-for="one in plans">
		      		<option v-if="one.official == 1" 
		      			v-bind:value="{id:one.id, name:one.name}" selected>
						  	{{one.name}}
						  </option>
						  <option v-else v-bind:value="{id:one.id, name:one.name}">
						  	{{one.name}}
						  </option>
		      	</template>
					  
					</select>

		      <div class="input-group-btn">
		        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
		        	<span class="glyphicon glyphicon-menu-hamburger"></span>
		        </button>
		        <ul class="dropdown-menu dropdown-menu-right">
		          
		          <li><a href="#" @click="openNew">新建</a></li>
		          <li><a href="#">修改</a></li>
		          <li><a href="#">删除</a></li>
		          <li class="divider"></li>
		          <li><a href="#">默认</a></li>
		        </ul>
		      </div>
		    </div>
			</div>
		</div>

		<!-- 新建/修改 #new -->
		<tpl-new>
		</tpl-new>

	</article>
</template>

<script type="text/javascript">
	
	import New from './new.vue'

	export default {
		components:{
			'tpl-new':New
		},
		props:{
			plans:Array,
			display:String
		},
		data:function(){
			//选择的计划
			return {
				selected:{
					id:'',
					name:''
				}
			}
		},
		methods:{
			setDisplay:function(name){

				this.$dispatch('doSetDisplay', name);
			},
			openNew:function(){
				
				$("#_new").modal('show');
				this.$broadcast('doOpenNew');
			},
			change:function(){

				this.$dispatch('doChange', this.selected.id);
			}
		}
	}
</script>