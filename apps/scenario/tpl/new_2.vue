<style>
.new-view {}
.new-view .modal-body{
	height: 500px;
}
.new-view .tab-pane{
	padding-top: 15px;
	padding-bottom: 15px;
}
.new-view .control-label{
	padding-left: 0px;
	padding-right: 0px;
}
.new-view .select-panel{
	border: 1px solid #ddd;
	border-radius: 2px;
	padding-left: 0px;
	padding-right: 0px;
}
.new-view .select-panel .select-head{
	background: #f5f5f5;
  height: 31px;
}
.new-view .select-panel .select-head .select-title{
  font-family: '黑体';
  font-size: 14px;
  line-height: 30px;
  margin-left: 5px;
}
.new-view .select-panel .btn{
	background: #f5f5f5;
}
.new-view .select-panel .select-head .select-search {
	width: 220px;
}
.new-view .select-panel .select-body {
	min-height: 200px;
	max-height: 379px;
  overflow: auto;
}
.new-view .select-panel .select-body ul {
	padding-left: 0px;
}
.new-view .select-panel .select-body ul li{
	  padding-left: 20px;
    padding-right: 20px;
    font-size: 13px;
    color: #666666;
    cursor: pointer;
    line-height: 22px;
    position: relative;
    list-style: none;
    overflow: hidden;
		white-space: nowrap;
	  text-overflow: ellipsis;
}
.new-view .select-panel .select-body ul li:hover{
	background: #f5f5f5;
}
.new-view .select-panel.filed-list .select-body ul li{
	  padding: 6px;
	  border-bottom: 1px solid #f5f5f5;
	  width: 50%;
	  float: left;
}
.new-view .select-panel.filed-list .select-body ul li:nth-child(odd){
	border-right: 1px solid #f5f5f5;
}
.new-view .select-panel .select-body ul .selected{
	  color: #333333;
    font-weight: normal;
    background: #ddd;
}
.new-view .select-panel .select-body ul .selected:before{
	  /*content: '';*/
    position: absolute;
    left: 4px;
    font-family: 'Glyphicons Halflings';
}
.new-view .selected-opt{
	min-height: 50px;
	line-height: 25px;
}
.new-view .selected-opt .label {
	word-spacing: 1px;
  letter-spacing: 1px;
  font-weight:normal;
}
.new-view .search-ico {
	width:31px;
	height:31px;
	line-height: 31px;
  text-align: center;
}
.new-view .search-ico:hover{
	cursor: pointer;
}
.new-view .emptyInfo{
	font-size:14px;
	font-family: '黑体';
	line-height: 150px;
	color:#999999;
}
.new-view .popup {
  color: #a94442;
  letter-spacing: 1px;
}


.text-ellipsis {
	overflow: hidden;
	white-space: nowrap;
  text-overflow: ellipsis;
}
.text-center {
	text-align:center;
}
.my-error {
	color:#d9534f;
}
.primary-border {
	border: 1px solid #337ab7;
}
.primary-head {
	background: #337ab7;
	color: white;
}
.info-border {
	border: 1px solid #5bc0de;
}
.info-head {
	background: #5bc0de;
	color: white;
}
.default-border {
	border: 1px solid #777;
}
.default-head {
	background: #777;
	color: white;
}


/*滚动条样式*/
.new-view .select-panel .select-body::-webkit-scrollbar {
    width: 6px;
    background: #f1f1f1;
}
.new-view .select-panel .select-body::-webkit-scrollbar-track {
    -webkit-border-radius: 10px;
    border-radius: 5px;
}
.new-view .select-panel .select-body::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 5px;
    background: #bcbcbc; 
}


</style>

<template>
	<div class="modal fade new-view" id="newViewModal" tabindex="-1" role="dialog" aria-labelledby="newViewModel">
    <div class="modal-dialog modal-lg" role="document" aria-hidden="true">
      <div class="modal-content">
      	<div class="modal-body">
      		<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      		<div>

					  <!-- Nav tabs -->
					  <ul class="nav nav-tabs" role="tablist">
					    <li role="presentation" class="active">
					    	<a data-toggle="tab" href="#newBaseInfo" aria-controls="home" role="tab">
					    		<span :class="{'my-error': !isSeriesNoValid || !isViewNoValid}">
					    			<i v-show="!isSeriesNoValid || !isViewNoValid" class="glyphicon glyphicon-alert"></i> 基本信息
					    		</span>
					    	</a>
					    </li>
					    <li role="presentation"><a data-toggle="tab" href="#newLocation" aria-controls="profile" role="tab">场景</a></li>
					    <li role="presentation"><a data-toggle="tab" href="#newFigure" aria-controls="messages" role="tab">人物</a></li>
					    <li role="presentation"><a data-toggle="tab" href="#newAssist" aria-controls="settings" role="tab">服化道</a></li>
					  </ul>

					  <!-- Tab panes -->
					  <div class="tab-content">
					    <div class="tab-pane fade in active" id="newBaseInfo" role="tabpanel">
					    	<div class="form-horizontal col-sm-7">
						    	<div class="form-group">
				            <label class="col-sm-2 control-label">集-场<span class="my-error"> * </span></label>
				            <div class="col-sm-5" :class="{'has-error':!isSeriesNoValid}">
				              <input class="form-control" id="seriesNo" type="text" v-model="scenario.seriesNo"
				              	@blur="notNullBlur('seriesNo', 'isSeriesNoValid')" @keyup="seriesNoKeyup"
				              	data-content="当前集次(数字)，必要信息" data-variation="tiny">
				            </div>
				            <div class="col-sm-5" :class="{'has-error':!isViewNoValid}">
				              <input class="form-control" id="viewNo" type="text" v-model="scenario.viewNo"
				             		@blur="notNullBlur('viewNo', 'isViewNoValid')"
				              	data-content="当前场次，必要信息" data-variation="small">
				            </div>
				          </div>
				          <div class="form-group">
				            <label class="col-sm-2 control-label">页数</label>
				            <div class="col-sm-10">
				              <input class="form-control" type="text" v-model="scenario.pageCount">
				            </div>
				          </div>
				          <div class="form-group">
				            <label class="col-sm-2 control-label">气氛/内外</label>
				            <div class="col-sm-5">
				              <input class="form-control" type="text" 
				              	@focus="selectFocus('baseInfo', '气氛', '搜索'+context.atmospheres.length+'种气氛', context.atmospheres, scenario.atmosphereName, 'atmosphereName')" 
				              	@keyup="singleKeyup('baseInfo', scenario.atmosphereName)"
				              	v-model="scenario.atmosphereName" placeholder="气氛">
				            </div>
				            <div class="col-sm-5">
				              <input class="form-control" type="text"
				              	@focus="selectFocus('baseInfo', '内外景', '搜索'+context.sites.length+'种内外景', context.sites, scenario.site, 'site')" 
				              	@keyup="singleKeyup('baseInfo', scenario.site)"
				              	v-model="scenario.site" placeholder="内外">
				            </div>
				          </div>
				          <div class="form-group">
				            <label class="col-sm-2 control-label">文武戏</label>
			              <div class="col-sm-10">
				              <select class="form-control" v-model="scenario.viewType">
			                  <option value="1">文</option>
			                  <option value="2">武</option>
			                  <option value="3">文武</option>
			                </select>
			              </div>
				          </div>
				          <div class="form-group">
				            <label class="col-sm-2 control-label">特效</label>
		                <div class="col-sm-10">
				              <input class="form-control" type="text" v-model="scenario.specialEffects">
				            </div>
				          </div>
				          <div class="form-group">
				            <label class="col-sm-2 control-label">季节/天气</label>
				            <div class="col-sm-5">
				              <select class="form-control" v-model="scenario.season">
			                  <option value="1">春</option>
			                  <option value="2">夏</option>
			                  <option value="3">秋</option>
			                  <option value="4">冬</option>
			                </select>
		                </div>
				            <div class="col-sm-5">
				              <input class="form-control" type="text" v-model="scenario.weather" placeholder="天气">
				            </div>
				          </div>
				          <div class="form-group">
				            <label class="col-sm-2 control-label">主要内容</label>
				            <div class="col-sm-10">
				              <textarea class="form-control" type="text" rows="2" v-model="scenario.mainContent"></textarea>
				            </div>
				          </div>
				          <div class="form-group">
				            <label class="col-sm-2 control-label">备注</label>
				            <div class="col-sm-10">
				              <textarea class="form-control" type="text" rows="2" v-model="scenario.remark"></textarea>
				            </div>
				          </div>
			          </div>


								<div class="select-panel col-sm-5">
								  <div class="select-head">
								  	<span class="select-title">{{selectModel.baseInfo.title}}</span>

								    <div class="input-group pull-right input-group-sm select-search" v-show="selectModel.baseInfo.showInput" @mouseover="focus">
								      <input type="text" class="form-control" placeholder="{{selectModel.baseInfo.inputHolder}}" v-model="selectModel.baseInfo.inputValue">
								      <span class="input-group-btn">
								        <button class="btn btn-default" type="button" @click="switchSearchInput('baseInfo')">
								          <span class="glyphicon glyphicon-zoom-out"></span>
								        </button>
								      </span>
								    </div>
						        <div class="pull-right search-ico" v-show="!selectModel.baseInfo.showInput && selectModel.baseInfo.dataSource.length > 0" 
						        		@click="switchSearchInput('baseInfo')">
						        	<i class="glyphicon glyphicon-search"></i>
						        </div>
								  </div>
								  <div class="select-body" :class="{'text-center': selectModel.baseInfo.dataSource.length == 0}">	
								    <ul v-show="selectModel.baseInfo.dataSource.length > 0">
								    	<!-- <li>立春</li>
								    	<li>夏至</li>
								    	<li class="selected glyphicon-ok">秋分</li>
								    	<li>冬至</li> -->

								    	<li v-for="one in selectModel.baseInfo.dataSource | filterBy selectModel.baseInfo.inputValue in 'name'" 
								    		:class="{'selected':selectModel.baseInfo.selectedValue==one.name, 'glyphicon-ok':selectModel.baseInfo.selectedValue==one.name}"
									    	@click="singleSelect('baseInfo', selectModel.baseInfo.vmodel, one.name)">{{one.name}}</li>
								    </ul>
								    <span class="emptyInfo" v-show="selectModel.baseInfo.dataSource.length == 0">暂无数据</span>
								  </div>

								</div>

					    </div>
					    <div class="tab-pane fade" id="newLocation" role="tabpanel">
					    	<div class="form-horizontal col-sm-7">
						    	<div class="form-group">
				            <label class="col-sm-2 control-label">主场景</label>
				            <div class="col-sm-10">
				              <input type="text" class="form-control">
				            </div>
				          </div>
				          <div class="form-group">
				            <label class="col-sm-2 control-label">次场景</label>
				            <div class="col-sm-10">
				              <input type="text" class="form-control">
				            </div>
				          </div>
				          <div class="form-group">
				            <label class="col-sm-2 control-label">三级场景</label>
				            <div class="col-sm-10">
				              <input type="text" class="form-control">
				            </div>
				          </div>
				          <div class="form-group">
				            <label class="col-sm-2 control-label">拍摄地</label>
				            <div class="col-sm-10">
				              <input type="text" class="form-control">
				            </div>
				          </div>
			          </div>

			          <div class="select-panel col-sm-5">
								  <div class="select-head">
								  	<span class="select-title">主场景</span>

								    <div class="input-group pull-right input-group-sm select-search">
								      <input type="text" class="form-control" placeholder="search for...">
								      <span class="input-group-btn">
								        <button class="btn btn-primary" type="button" tabindex="-1">
								          <span class="glyphicon glyphicon-search"></span>
								        </button>
								      </span>
								    </div>

								  </div>
								  <div class="select-body">
								    <ul>
								    	<li>河田大厦1楼</li>
								    	<li class="selected glyphicon-ok">河田大厦2楼</li>
								    	<li>河田大厦3楼</li>
								    	<li>河田大厦4楼</li>
								    	<li>浩泽的车&周心妍的车&李家瑜的车</li>
								    </ul>
								  </div>

								</div>


					    </div>
					    <div class="tab-pane fade" id="newFigure" role="tabpanel">
					    	<div class="form-horizontal col-sm-7">
						    	<!-- <div class="form-group">
				            <label class="col-sm-2 control-label">主要演员</label>
				            <div class="col-sm-10">
				              <div class="input-group">
									      <input type="text" class="form-control">
									      <span class="input-group-btn">
									        <button class="btn btn-default" type="button" tabindex="-1">
									          <span class="glyphicon glyphicon-plus"></span>
									        </button>
									      </span>
									    </div>
				            </div>
				          </div> -->
				          <div class="form-group">
				          	<label class="col-sm-2 control-label">主要演员</label>
				          	<div class="col-sm-10 selected-opt">
											<a class="label label-primary" @click="">赵晖</a>
											<span class="label label-primary">钱多多</span>
											<span class="label label-primary">孙不二</span>
											<span class="label label-primary">李光全</span>
											<span class="label label-primary">周新民</span>
											<span class="label label-primary">吴九</span>
											<span class="label label-primary">Tomsaon Jack</span>
											<!-- <div>
												<button class="btn btn-default btn-xs" v-on:click="">
								          <span class="glyphicon glyphicon-plus"></span>
								        </button>
							        </div> -->
							        <div class="input-group input-group-sm col-sm-10" @mouseover="focus">
									      <input type="text" class="form-control" placeholder="按Enter键添加">
									      <span class="input-group-btn">
									        <button class="btn btn-default" type="button" @click="">
									          <!-- <span class="glyphicon glyphicon-remove"></span> -->
									          隐藏
									        </button>
									      </span>
									    </div>
				          	</div>
				          </div>
				          <hr>

				          <div class="form-group">
				          	<label class="col-sm-2 control-label">特约演员</label>
				          	<div class="col-sm-10 selected-opt">
											<span class="label label-info">赵晖</span>
											<span class="label label-info">钱多多</span>
											<span class="label label-info">孙不二</span>
											<span class="label label-info">李光全</span>
											<span class="label label-info">周新民</span>
											<span class="label label-info">吴九</span>
											<span class="label label-info">Tomsaon Jack</span>
				          	</div>
				          </div>
				          <hr>

				          <div class="form-group">
				            <label class="col-sm-2 control-label">群众演员</label>
				            <div class="col-sm-10 selected-opt">
											<span class="label label-default">赵晖</span>
											<span class="label label-default">钱多多</span>
											<span class="label label-default">孙不二</span>
											<span class="label label-default">李光全</span>
											<span class="label label-default">周新民</span>
											<span class="label label-default">吴九</span>
											<span class="label label-default">Tomsaon Jack</span>
				          	</div>
				          </div>
			          </div>

			          <div class="select-panel filed-list col-sm-5" style="border:1px solid #337ab7">
								  <div class="select-head" style="background:#337ab7;color:white;">
								  	<span class="select-title">主要演员</span>

								    <div class="input-group pull-right input-group-sm select-search" v-show="inputShow" @mouseover="focus">
								      <input type="text" class="form-control" placeholder="搜索32位主要演员">
								      <span class="input-group-btn">
								        <button class="btn btn-default" type="button" @click="">
								          <span class="glyphicon glyphicon-zoom-out"></span>
								        </button>
								      </span>
								    </div>
						        <div class="pull-right search-ico" v-show="!inputShow" @click="">
						        	<i class="glyphicon glyphicon-search"></i>
						        </div>

								  </div>
								  <div class="select-body">
								    <ul>
								    	<li class="selected">张晓晗</li>
								    	<li>赵晖</li>
								    	<li>李大钊</li>
								    	<li>王佳乐</li>
								    	<li class="selected">布置生日宴会的人员</li>
								    	<li>张晓晗</li>
								    	<li>赵晖</li>
								    	<li>李大钊</li>
								    	<li class="selected">王佳乐</li>
								    	<li>陈国明</li>
								    	<li>张晓晗</li>
								    	<li class="selected">赵晖</li>
								    	<li>李大钊</li>
								    	<li>王佳乐</li>
								    	<li class="selected">陈国明</li>
								    	<li>张晓晗</li>
								    	<li>赵晖</li>
								    	<li>李大钊</li>
								    	<li>王佳乐</li>
								    	<li>陈国明</li>
								    	<li>张晓晗</li>
								    	<li>赵晖</li>
								    	<li>李大钊</li>
								    	<li>王佳乐</li>
								    	<li>陈国明</li>
								    </ul>
								  </div>

								</div>
					    </div>
					    <div class="tab-pane fade" id="newAssist" role="tabpanel">
					    	<div class="form-horizontal col-sm-7">
						    	<div class="form-group">
				            <label class="col-sm-2 control-label">服装</label>
				            <div class="col-sm-10">
				              <div class="input-group">
									      <input type="text" class="form-control">
									      <span class="input-group-btn">
									        <button class="btn btn-default" type="button" tabindex="-1">
									          <span class="glyphicon glyphicon-plus"></span>
									        </button>
									      </span>
									    </div>
				            </div>
				          </div>
				          <div class="form-group">
				            <label class="col-sm-2 control-label">化妆</label>
				            <div class="col-sm-10">
				              <div class="input-group">
									      <input type="text" class="form-control">
									      <span class="input-group-btn">
									        <button class="btn btn-default" type="button" tabindex="-1">
									          <span class="glyphicon glyphicon-plus"></span>
									        </button>
									      </span>
									    </div>
				            </div>
				          </div>
				          <div class="form-group">
				            <label class="col-sm-2 control-label">道具</label>
				            <div class="col-sm-10">
				              <div class="input-group">
									      <input type="text" class="form-control">
									      <span class="input-group-btn">
									        <button class="btn btn-default" type="button" tabindex="-1">
									          <span class="glyphicon glyphicon-plus"></span>
									        </button>
									      </span>
									    </div>
				            </div>
				          </div>
				          <div class="form-group">
				            <label class="col-sm-2 control-label">特殊道具</label>
				            <div class="col-sm-10">
				              <div class="input-group">
									      <input type="text" class="form-control">
									      <span class="input-group-btn">
									        <button class="btn btn-default" type="button" tabindex="-1">
									          <span class="glyphicon glyphicon-plus"></span>
									        </button>
									      </span>
									    </div>
				            </div>
				          </div>
			          </div>

			          <div class="select-panel filed-list col-sm-5">
								  <div class="select-head">
								  	<span class="select-title">道具</span>

								    <div class="input-group pull-right input-group-sm select-search">
								      <input type="text" class="form-control" placeholder="search for...">
								      <span class="input-group-btn">
								        <button class="btn btn-primary" type="button" tabindex="-1">
								          <span class="glyphicon glyphicon-search"></span>
								        </button>
								      </span>
								    </div>

								  </div>
								  <div class="select-body">
								    <ul>
								    	<li class="selected">MBA高层管理研究生毕业证书</li>
								    	<li class="selected">家瑜和天明的照片（大九拍）</li>
								    	<li class="selected">艾迪亚咖啡工作服</li>
								    	<li class="selected">冲锋枪</li>
								    	<li class="selected">机关枪</li>
								    	<li>手枪</li>
								    	<li class="selected">坦克</li>
								    	<li>大炮</li>
								    	<li>冲锋枪</li>
								    	<li>机关枪</li>
								    </ul>
								  </div>

								</div>
					    </div>
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
	import Model from '../js/model'

	export default {
		data: function(){
			return {
				scenario: new Model.ScenarioModel(),
				isSeriesNoValid: true,
				isViewNoValid: true,
				selectModel: new Model.SelectModel()
			}
		},
		props: {
			context: Object
		},
		methods: {
			switchSearchInput: function(type) {
				this.selectModel[type].showInput = !this.selectModel[type].showInput;
			},
			selectFocus: function(type, title, inputHolder, dataSource, selectedValue, vmodel) {
				this.selectModel[type].title = title;
				this.selectModel[type].inputHolder = inputHolder;
				this.selectModel[type].dataSource = dataSource;

				this.selectModel[type].selectedValue = selectedValue;
				this.selectModel[type].vmodel = vmodel;
			},
			singleSelect: function(type, vmodel, value) {
				this.scenario[vmodel] = value;
				this.selectModel[type].selectedValue = value;
			},
			singleKeyup: function(type, value) {
				this.selectModel[type].selectedValue = value;
			},
			focus: function() {
				$(event.currentTarget).find("input").focus();
			},
			//保存场景信息
      save: function() {
        var self = this;

        //前端验证//application/x-www-form-urlencoded;//json//组件里本身的请求在组件本身
        if (!this.checkValid()) {
          return false;
        }

        $.ajax({
          url:'/viewManager/saveOrUpdateViewInfo',
          type:'POST',
          data: this.scenario,
          success:function(data){
            if (data.success) {
              self.reset();

              $("#newViewModel").modal("hide");

              self.$dispatch('reload');
            } else {
              self.errorMessage = data.message;
            }
          }
        });
      },
      checkValid: function() {
        var self = this;
        var isValid = true;

        /*
         *  校验集-场号
         */
        //校验集-场是否有效
        this.errorMessage = ""
        var isSeriesViewNoValid = true;
        if (this.scenario.seriesNo == "") {
          this.isSeriesValid = false;
          isSeriesViewNoValid = false;
        }
        if (this.scenario.viewNo == "") {
          this.isViewValid = false;
          isSeriesViewNoValid = false;
        }

        //校验集-场是否重复
        if (isSeriesViewNoValid) {
          $.ajax({
            url:'/viewManager/checkSeriesViewNoRepeat',
            type:'POST',
            data: {seriesNo: this.scenario.seriesNo, viewNo: this.scenario.viewNo},
            async: false,
            success:function(data){
              if (data.success && data.repeated) {
                self.isRepeated = true;
                isSeriesViewNoValid = false;
              }
            }
          });
        }


        /*
         *  校验演员信息
         */
        //校验演员之间是否有重复
        var leadingRoles = this.scenario.leadingRoles.split(",");
        var guestRoles = this.scenario.guestRoles.split(",");
        var massesRoles = this.scenario.massesRoles.split(",");

        for (var n in leadingRoles) {
          var leadingRole = leadingRoles[n];
          if (leadingRole != "" && $.inArray(leadingRole, guestRoles) != -1) {
            this.isRoleRepeated = true;
            this.roleRepeatedMessage = "主要演员和特约演员存在重复：" + leadingRole;

            break;
          }
          if (leadingRole != "" && $.inArray(leadingRole, massesRoles) != -1) {
            this.isRoleRepeated = true;
            this.roleRepeatedMessage = "主要演员和群众演员存在重复：" + leadingRole;

            break;
          }
        }

        if (!this.isRoleRepeated) {
          for (var n in guestRoles) {
            var guestRole = guestRoles[n];
            if (guestRole != "" && $.inArray(guestRole, massesRoles) != -1) {
              this.isRoleRepeated = true;
              this.roleRepeatedMessage = "特约演员和群众演员存在重复：" + guestRole;

              break;
            }
          }
        }

        if (this.isRoleRepeated) {
          isValid = false;
          this.scrollTop(350);
        }


        if (!isSeriesViewNoValid) {
          isValid = false;
          this.scrollTop(0);
          $("#seriesNo").focus();
        }

        return isValid;
      },
      notNullBlur: function(vmodel, validModel) {
      	if (this.scenario[vmodel] == '') {
      		//无效的集次信息
      		this[validModel] = false;
      	} else {
      		this[validModel] = true;
      	}
      },
      seriesNoKeyup: function() {
      	//集次不是数字时，把集次置为空
      	if (isNaN(this.scenario.seriesNo)) {
          this.scenario.seriesNo = "";
        }
      }
		},
		events: {

		},
		ready: function() {
			$(".select-body").scrollUnique();
			$('#seriesNo, #viewNo').popup({
		    on: 'focus',
		    inline: true,
		    position: "bottom left",
		    lastResort: true,
		    exclusive: false
		  });
		}
	}

</script>