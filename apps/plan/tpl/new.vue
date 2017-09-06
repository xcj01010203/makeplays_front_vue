<style type="text/css">

	.slider{
		margin-top: 13px;
	}

	.ui-slider-horizontal {
    height: .8em;
	}

	.ui-slider {
    position: relative;
    text-align: left;
	}

	.ui-corner-all, .ui-corner-bottom, .ui-corner-right, .ui-corner-br {
    -moz-border-radius-bottomright: 4px;
    -webkit-border-bottom-right-radius: 4px;
    -khtml-border-bottom-right-radius: 4px;
    border-bottom-right-radius: 4px;
	}

	.ui-widget-content {
    border: 1px solid #aaaaaa;
    color: #404040;
	}

	.ui-widget {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 13px;
	}

	.ui-slider-horizontal .ui-slider-range-min {
    left: 0;
	}

	.ui-slider-horizontal .ui-slider-range {
    top: 0;
    height: 100%;
	}

	.ui-slider .ui-slider-range {
    position: absolute;
    z-index: 1;
    font-size: .7em;
    display: block;
    border: 0;
    background-position: 0 0;
    color: #ffffff;
    background-color: #0064cd;
    background-repeat: repeat-x;
    background-image: -khtml-gradient(linear, left top, left bottom, from(#049cdb), to(#0064cd));
    background-image: -moz-linear-gradient(top, #049cdb, #0064cd);
    background-image: -ms-linear-gradient(top, #049cdb, #0064cd);
    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #049cdb), color-stop(100%, #0064cd));
    background-image: -webkit-linear-gradient(top, #049cdb, #0064cd);
    background-image: -o-linear-gradient(top, #049cdb, #0064cd);
    background-image: linear-gradient(top, #049cdb, #0064cd);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#049cdb', endColorstr='#0064cd', GradientType=0);
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
    border-color: #0064cd #0064cd #003f81;
    border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
	}

	.ui-widget-header {
    font-weight: bold;
    border-color: #0064cd #0064cd #003f81;
    border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
    border: 1px solid #666;
	}

	.wijmo-wijmenu .ui-state-default, .ui-widget-content .ui-state-default, .ui-widget-header .ui-state-default {
    text-shadow: none;
	}

	.ui-slider-horizontal .ui-slider-handle {
    top: -.3em;
    margin-left: -.6em;
	}

	.ui-slider .ui-slider-handle {
    position: absolute;
    z-index: 2;
    width: 1.2em;
    height: 1.2em;
    cursor: default;
	}

	.ui-state-default, .ui-widget-content .ui-state-default, .ui-widget-header .ui-state-default {
	  background-color: #e6e6e6;
	  background-repeat: no-repeat;
	  background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#ffffff), color-stop(25%, #ffffff), to(#e6e6e6));
	  background-image: -webkit-linear-gradient(#ffffff, #ffffff 25%, #e6e6e6);
	  background-image: -moz-linear-gradient(top, #ffffff, #ffffff 25%, #e6e6e6);
	  background-image: -ms-linear-gradient(#ffffff, #ffffff 25%, #e6e6e6);
	  background-image: -o-linear-gradient(#ffffff, #ffffff 25%, #e6e6e6);
	  background-image: linear-gradient(#ffffff, #ffffff 25%, #e6e6e6);
	  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#e6e6e6', GradientType=0);
	  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);
	  color: #333;
	  font-size: 13px;
	  line-height: normal;
	  border: 1px solid #ccc;
	  border-bottom-color: #bbb;
	  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
	  -moz-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
	  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
	  -webkit-transition: 0.1s linear background-image;
	  -moz-transition: 0.1s linear background-image;
	  -ms-transition: 0.1s linear background-image;
	  -o-transition: 0.1s linear background-image;
	  transition: 0.1s linear background-image;
	  overflow: visible;
	}

	.ui-widget-content a {
	    color: #404040;
	}

	.ui-corner-all, .ui-corner-bottom, .ui-corner-right, .ui-corner-br {
    -moz-border-radius-bottomright: 4px;
    -webkit-border-bottom-right-radius: 4px;
    -khtml-border-bottom-right-radius: 4px;
    border-bottom-right-radius: 4px;
	}
	.ui-corner-all, .ui-corner-bottom, .ui-corner-left, .ui-corner-bl {
    -moz-border-radius-bottomleft: 4px;
    -webkit-border-bottom-left-radius: 4px;
    -khtml-border-bottom-left-radius: 4px;
    border-bottom-left-radius: 4px;
	}
	.ui-corner-all, .ui-corner-top, .ui-corner-right, .ui-corner-tr {
    -moz-border-radius-topright: 4px;
    -webkit-border-top-right-radius: 4px;
    -khtml-border-top-right-radius: 4px;
    border-top-right-radius: 4px;
	}
	.ui-corner-all, .ui-corner-top, .ui-corner-left, .ui-corner-tl {
    -moz-border-radius-topleft: 4px;
    -webkit-border-top-left-radius: 4px;
    -khtml-border-top-left-radius: 4px;
    border-top-left-radius: 4px;
	}
</style>

<template>

	<article id="_new" class="modal fade" tabindex="-1">
	  <div class="modal-dialog modal-lg">
	    <div class="modal-content">
	      
	      <div class="modal-header">
	        <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
	        <h4 class="modal-title">
	        	新建计划 <small> - 列车临时停车, 请您耐心等待</small>
	        </h4>
	      </div>
	      
	      <div class="modal-body">
	      
					<form class="form-horizontal">
						<div class="row">
							<div class="col-md-6">

								<div class="form-group">
				          <label class="col-sm-3 control-label">计划名</label>
				          <div class="col-sm-7">
				            <input type="text" class="form-control" v-model="plan.name" placeholder="">
				          </div>
				        </div>

				        <div class="form-group">
				          <label class="col-sm-3 control-label">开机时间</label>
				          <div class="col-sm-7">
				            <input type="text" class="form-control" placeholder="">
				          </div>
				        </div>

				        <hr>
				  		</div>
				  	</div>

				  	<div class="row">
				  		<div class="col-md-6">
				        <div class="form-group">
				          <label class="col-sm-3 control-label">拍摄地</label>
				          <div class="col-sm-7">

				            <select class="form-control" v-model="shoots" v-on:change="selected" multiple>
				              <option 
				              	v-for="one in context.shootlocation" track-by="shootLocationId"
				              	v-bind:value="{type:1, factorid:one.shootLocationId, factorname:one.shootLocation, priority:1}">
				              	{{one.shootLocation}}
				              </option>
				            </select>
				          </div>
				        </div>

				        <div class="form-group">
				          <label class="col-sm-3 control-label">演员</label>
				          <div class="col-sm-7">

				            <select class="form-control" v-model="actors" v-on:change="selected" multiple>
				              <option 
				              	v-for="one in context.actor" track-by="viewRoleId"
				              	v-bind:value="{type:2, factorid:one.viewRoleId, factorname:one.viewRoleName, priority:1}">
				              	{{one.viewRoleName}}
				              </option>
				            </select>
				          </div>
				        </div>

				        <div class="form-group">
				          <label class="col-sm-3 control-label">道具</label>
				          <div class="col-sm-7">

				            <select class="form-control" v-model="props" v-on:change="selected" multiple>
				              <option 
				              	v-for="one in context.props" track-by="propsId"
				              	v-bind:value="{type:3, factorid:one.propsId, factorname:one.propsName, priority:1}">
				              	{{one.propsName}}
				              </option>
				            </select>
				          </div>
				        </div>
				  		</div>
				  		<div class="col-md-6">

				  			<div class="form-group" v-for="one in factors">
				          <label class="col-sm-3 control-label">
				          	{{one.factorname}}
				          </label>
				          <div class="col-sm-6">
				            <div class="slider" data-factor="{{one.factorid}}"></div>
				          </div>
				          <div class="col-sm-1" style="padding-top:7px;">
				          	{{one.priority}}
				          </div>
				        </div>
				  		</div>
				  	</div>
	      	</form>
	      </div>

	      <div class="modal-footer">
	      	<button type="button" class="btn btn-primary" @click="save">确定</button>
	        <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
	      </div>

	    </div>
	  </div>
	</article>
</template>

<script type="text/javascript">
	
	import Model from '../js/model'

	export default {
		
		data:function(){

			return {
				//计划
				plan:new Model.PlanModel(),
				//拍摄地
				shoots: [],
				//演员
				actors: [],
				//道具
				props: [],
				//上下文
				context:{},
			}
		},
		computed:{
			//将拍摄地、演员、道具合并
			factors:function(){
				
				return new Array().concat(this.shoots, this.actors, this.props);
			}
		},
		methods:{
			//选择影响因素
			selected:function(){

				var self = this;

				$(".slider").slider({
			    range: "min",
			    min: 0,
			    max: 10,
			    value: 1,
			    slide: function (event, ui) {

			    	self.setPriority($(this).data("factor"), ui.value);
			    }
				});
			},
			//设置优先级
			setPriority:function(id, value){

				for(var i in this.factors){

					if(this.factors[i].factorid == id){

						this.factors[i].priority = value;
					}
				}
			},
			//提交
			save:function(){

				this.$dispatch('setLoader', true);

				this.plan.factors = this.factors;

				this.$resource('/plan/create').save(this.plan, function (data, status, request) {

					this.renderNew();

					this.$dispatch('doLoading', data.planId);
	      });

	      $("#_new").modal('hide');
			},
			//重新渲染
			renderNew:function(){

				this.plan = new Model.PlanModel();
				this.shoots = [];
				this.actors = [];
				this.props = [];
			},
			openNew:function(){

				this.$resource('/plan/factors').get(function (data, status, request) {

	        this.context = data;
	      });
			}
		},
		events:{

			doOpenNew:function(){

				this.openNew();
			}
		}
	}
</script>