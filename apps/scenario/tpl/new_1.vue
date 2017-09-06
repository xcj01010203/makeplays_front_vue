<style>
.new-view {}
.new-view .modal-body{
	height: 500px;
}
.new-view .menu-bar{
	height: 100%;
}
.new-view .control-label{
	padding-left: 0px;
	padding-right: 0px;
}
.new-view .panel {
	padding-left: 0px;
	padding-right: 0px;
	height: 100%;
	overflow: auto;
}

</style>

<template>
	<div class="modal fade new-view" tabindex="-1" role="dialog" aria-labelledby="newViewModel">
    <div class="modal-dialog modal-lg" role="document" aria-hidden="true">
      <div class="modal-content">
      	<div class="modal-header">
      		<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
	        <h4 class="modal-title">添加场景</h4>
      	</div>
      	<div class="modal-body">


      		<div class="menu-bar col-sm-2">
					  <a href="#" class="col-sm-12">
					  	基本信息
					  	<span class="glyphicon glyphicon-chevron-right pull-right"></span>
					  </a>
					  <a href="#" class="col-sm-12">
					  	场景
					  	<span class="glyphicon glyphicon-chevron-right pull-right"></span>
					  <a href="#" class="col-sm-12">
					  	人物
					  	<span class="glyphicon glyphicon-chevron-right pull-right"></span>
					  </a>
					  <a href="#" class="col-sm-12">
					  	服化道
					  	<span class="glyphicon glyphicon-chevron-right pull-right"></span>
					  </a>
					  <a href="#" class="col-sm-12">
					  	剧本
					  	<span class="glyphicon glyphicon-chevron-right pull-right"></span>
					  </a>
					</div>



					<div class="base-info col-sm-7 form-horizontal">
		      	<div class="form-group">
	            <label for="seriesNo" class="col-sm-2 control-label">集-场</label>
	            <div class="col-sm-5">
	              <input type="text" class="form-control" id="seriesNo" placeholder="" @keyup="">
	            </div>
	            <div class="col-sm-5">
	              <input type="text" class="form-control" id="viewNo" placeholder="" @keyup="">
	            </div>
	          </div>
	          <div class="form-group">
	            <label class="col-sm-2 control-label">页数</label>
	            <div class="col-sm-10">
	              <input type="text" class="form-control">
	            </div>
	          </div>
	          <div class="form-group">
	            <label class="col-sm-2 control-label">气氛</label>
	            <div class="col-sm-10">
	              <input type="text" class="form-control">
	            </div>
	          </div>
	          <div class="form-group">
	            <label class="col-sm-2 control-label">内外</label>
	            <div class="col-sm-10">
	              <input type="text" class="form-control">
	            </div>
	          </div>
	          <div class="form-group">
	            <label class="col-sm-2 control-label">文武戏</label>
	            <div class="col-sm-10">
	              <input type="text" class="form-control">
	            </div>
	          </div>
	          <div class="form-group">
	            <label class="col-sm-2 control-label">季节</label>
	            <div class="col-sm-10">
	              <input type="text" class="form-control">
	            </div>
	          </div>
	          <div class="form-group">
	            <label class="col-sm-2 control-label">主要内容</label>
	            <div class="col-sm-10">
	              <input type="text" class="form-control">
	            </div>
	          </div>
	          <div class="form-group">
	            <label class="col-sm-2 control-label">备注</label>
	            <div class="col-sm-10">
	              <input type="text" class="form-control">
	            </div>
	          </div>
					</div>




          <div class="col-sm-3 panel panel-default">
					  <div class="panel-heading">
					    <h3 class="panel-title">气氛</h3>
					  </div>
					  <div class="panel-body">
					  	<div class="input-group">
					      <input type="text" class="form-control" placeholder="搜索...">
					      <span class="input-group-btn">
					        <button class="btn btn-primary" type="button">
					          <span class="glyphicon glyphicon-search"></span>
					        </button>
					      </span>
					    </div>
					    <ul>
					    	<li>立春</li>
					    	<li>小雪</li>
					    	<li>大雪</li>
					    	<li>冬至</li>
					    	<li>惊蛰</li>
					    </ul>
					  </div>
					</div>

					
      	</div>
      	<div class="modal-footer">
      		<button type="button" class="btn btn-primary">提交</button>
	        <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
      	</div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
	export default {
		data: function(){

		},
		props: {
			context: Object
		},
		methods: {

		},
		events: {

		},
		ready: function() {
			
		}
	}

</script>