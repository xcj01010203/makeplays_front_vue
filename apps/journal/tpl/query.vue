<style type="text/css">
	.max-height-query{

    height:430px;
    overflow: auto;
  }

  .width-query{

    width:800px;
  }

  .row-select{

    max-height: 36px;
    overflow: hidden;
    padding: 5px 0px 5px 0px;
    border-bottom: 1px dotted #d5d5d5;
    position: relative;
  }

  .row-select .selected{

    background: #337AB7;
    color: #fff !important;
    border-radius: 4px;
  }

  .attrKey{
    float: left;
    color: #B0A59F;
    padding-top: 2px;
    width: 63px;
    text-align: right;
  }

  .attrValues{
    overflow: hidden;
    min-height: 100px;
  }

  .attrValues ul{
    list-style: none;
    margin-left: 10px;
    padding: 0;
    padding-right: 20px;
  }

  .input-text{

    list-style: none;
    margin-left: 17px;
    padding: 0;
    padding-right: 20px;
  }

  .attrValues li{
    float: left;
    margin: 0px 5px 8px 0;
    height: 24px;
    padding: 2px 7px 0px 7px;
    cursor: pointer;
    border: 1px solid #fff;
    color: #005aa0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .attrValues li:hover{

    border: 1px solid #337AB7;
    border-radius: 5px;
  }

  .more-value{
    position: absolute;
    color: #B0A59F;
    cursor: pointer;
    padding-top: 2px;
    padding-left: 1px;
    padding-right: 1px;
    border: 1px solid #FFFFFF;
    top: 5px;
    right: 0px;
  }

  .more-value:hover{
    border: 1px solid #B0A59F;
    border-radius: 5px;
  }

  .attr-width-lg li{
    width: 130px;
  }

  .attr-width-md li{
    width: 100px;
  }

  .attr-width-sm li{
    width: 70px;
  }

  .attr-width-msm li{
    min-width: 70px;
  }

  .attrValues input{

    width: 38px;
    padding: 0px;
  }

  .display-more{

    max-height:none !important;
  }

  .attr-initial{
    display: table;
  }

  .attr-initial>ul{

    list-style: none;
    margin-left: 10px;
    margin-bottom: 7px;
    padding: 0;
    padding-right: 20px;
  }

  .attr-initial>ul>li{

    display: inline-block;
    padding: 1px 7px 1px 7px;
    border: 1px solid #fff;
    color: #005aa0;
    overflow: hidden;
    cursor: default;
  }

  .nav-initial{

    display: none;
  }

  .hover-initial{

    border: 1px solid red !important;
    color: red !important;
  }
</style>
<template>
	<div class="popup-tpl ui popup width-query">
		<div class="modal-header">
	      <button type="button" class="close close-popup"><span aria-hidden="true">&times;</span></button>
	      <h4 class="modal-title">搜索场景 <small> - 你可以通过首字母导航进行快速查找</small></h4>
	    </div>

	    <div class="modal-body max-height-query">

	        <!--财务科目 -->
	    	<div class="row-select">
	    		<div class="attrKey">财务科目:</div>
	    		<div class="attrValues"></div>
	    	</div>

	    	<!--收付款人 -->
	    	<div class="row-select">
	    		<div class="attrKey">收/付款人:</div>
	    		<div class="attr-initial">
	    			<ul class="nav-initial">
			            <li v-on:mouseover="displayInitial"
			                data-initial="ALL">
			              所有
			            </li>
			            <li v-for="one in initials.jnInitial | orderBy true"
			                v-on:mouseover="displayInitial"
			                data-initial="{{one}}">
			              {{one}}
			            </li>
			        </ul>

			        <div class="attrValues attr-width-msm">
			            <ul>
			              <li v-for="one in context.journalNameList" track-by="id"
			                  v-on:click="addtoQuery('payeeName', one.name, one.name)"
			                  v-bind:class="{ 'selected': (','+tmpQuery.payeeName+',').indexOf(','+one.name+',') > -1}"
			                  data-initial="{{one.initial}}">
			                {{one.name}} 
			              </li>
			            </ul>
			          </div>
			    </div>

		        <div class="more-value" v-show="context.journalNameList.length > minNum">
		          <i class="glyphicon glyphicon-menu-down"></i>
		        </div>
	    	</div>

	    	<!-- 票据日期 -->
	    	<div class="row-select">
	    		<div class="attrKey">票据日期:</div>
	    		<div class="attr-initial">
	    			<ul class="nav-initial">
			            <li v-on:mouseover="displayInitial"
			                data-initial="ALL">
			              所有
			            </li>
			            <li v-for="one in initials.jdInitial"
			                v-on:mouseover="displayInitial"
			                data-initial="{{one}}">
			              {{one}}
			            </li>
			        </ul>

			        <div class="attrValues attr-width-md">
			            <ul>
			              <li v-for="one in context.journalDateList" track-by="id"
			                  v-on:click="addtoQuery('paymentDate', one.name, one.name)"
			                  v-bind:class="{ 'selected': (','+tmpQuery.paymentDate+',').indexOf(','+one.name+',') > -1}"
			                  data-initial="{{one.initial}}">
			                {{one.name}} 
			              </li>
			            </ul>
			          </div>
			    </div>
			    <div class="more-value" v-show="context.journalNameList.length > minNum">
		          <i class="glyphicon glyphicon-menu-down"></i>
		        </div>
	    	</div>

	    	<!-- 记账人 -->
	    	<div class="row-select">
	    		<div class="attrKey">记账人:</div>
	    		<div class="attr-initial">
	    			<ul class="nav-initial">
			            <li v-on:mouseover="displayInitial"
			                data-initial="ALL">
			              所有
			            </li>
			            <li v-for="one in initials.jaInitial | orderBy true"
			                v-on:mouseover="displayInitial"
			                data-initial="{{one}}">
			              {{one}}
			            </li>
			        </ul>

			        <div class="attrValues attr-width-sm">
			            <ul>
			              <li v-for="one in context.journalAgentList" track-by="id"
			                  v-on:click="addtoQuery('agent', one.name, one.name)"
			                  v-bind:class="{ 'selected': (','+tmpQuery.agent+',').indexOf(','+one.name+',') > -1}"
			                  data-initial="{{one.initial}}">
			                {{one.name}} 
			              </li>
			            </ul>
			          </div>
			    </div>

		        <div class="more-value" v-show="context.journalAgentList.length > minNum">
		          <i class="glyphicon glyphicon-menu-down"></i>
		        </div>
	    	</div>

	    	<!-- 收付款 -->
	    	<div class="row-select">
	    		<div class="attrKey">收付款:</div>
	    		<div class="attrValues attr-width-sm">
		          <ul>
		            <li v-for="one in context.journalType" track-by="id"
		                v-on:click="addOnetoQuery('type', one.id, one.name)"
		                v-bind:class="{ 'selected': (','+tmpQuery.type+',').indexOf(','+one.id+',') > -1}">
		              {{one.name}}
		            </li>
		          </ul>
		        </div>
	    	</div>

	    	<!-- 有无发票 -->
	    	<div class="row-select">
	    		<div class="attrKey">有无发票:</div>
	    		<div class="attrValues attr-width-sm">
	    			<ul>
			            <li v-for="one in context.hasReceipt" track-by="id"
			                v-on:click="addOnetoQuery('receipt', one.id, one.name)"
			                v-bind:class="{ 'selected': (','+tmpQuery.receipt+',').indexOf(','+one.id+',') > -1}">
			              {{one.name}}
			            </li>
			        </ul>
	    		</div>
	    	</div>

	    	<!-- 结算状态 -->
	    	<div class="row-select">
	    		<div class="attrKey">结算状态:</div>
	    		<div class="attrValues">
	    			<div class="attrValues attr-width-sm">
		    			<ul>
				            <li v-for="one in context.isBalance" track-by="id"
				                v-on:click="addOnetoQuery('status', one.id, one.name)"
				                v-bind:class="{ 'selected': (','+tmpQuery.status+',').indexOf(','+one.id+',') > -1}">
				              {{one.name}}
				            </li>
				        </ul>
		    		</div>
	    		</div>
	    	</div>

	    	<!-- 摘要 -->
	    	<div class="row-select">
	    		<div class="attrKey">摘要:</div>
	    		<div class="attrValues">
	    			<div class="input-text">
			          <input type="text" style="width:200px;" v-model="tmpQuery.summary">
			        </div>
	    		</div>
	    	</div>
	    </div>

	    <div class="modal-footer">
	      <button type="button" class="btn btn-primary close-popup btn-sm" v-on:click="queryJournal">确定</button>
	      <button type="button" class="btn btn-default close-popup btn-sm">取消</button>
	    </div>
	</div>
</template>
<script type="text/javascript">
    
    import Model from '../js/model'

	export default {
		props:{
			//已经存在的查询条件
            query:Object,
			//查询上下文
		    context:Object,
		    //首字母
		    initials:Object
		},
		data:function(){
	      return {

	        //临时存储的查询条件
	        tmpQuery: new Model.QueryModel(),
	        //一列显示的数量
	        maxNum:6,
	        minNum:3
	      }
	    },
		methods:{
			//添加到临时查询条件
			addtoQuery:function(key, value, name){

				var arr = [],
				arrValue = [],
				repeat = false;

				if(this.tmpQuery[key] != ''){
					arr = this.tmpQuery[key].split(",");
					arrValue = this.tmpQuery.value[key].split(",");
				}

				for (var i in arr) {
					if (arr[i] == value) {

						arr.splice(i, 1);
						arrValue.splice(i, 1);
						repeat = true;
						break;
					}
				}

				if(!repeat){

					arr.push(value);
					arrValue.push(name);
				}

				this.tmpQuery[key] = arr.join();
				this.tmpQuery.value[key] = arrValue.join();
			},
			//添加到临时查询条件
			addOnetoQuery:function(key, value, name){

				var arr = [],
				arrValue = [],
				repeat = false;

				if(this.tmpQuery[key] != value){
					arr.push(value);
					arrValue.push(name);
				}

				this.tmpQuery[key] = arr.join();
				this.tmpQuery.value[key] = arrValue.join();
			},
			//执行查询
		    queryJournal:function(){

		        this.query = Object.assign({}, this.tmpQuery);
		        this.query.value = Object.assign({}, this.tmpQuery.value);

		        this.$dispatch('refresh');
		    },
			displayInitial:function(event){

		        var target = $(event.target);
		        var initial = target.data("initial");

		        target.siblings().removeClass("hover-initial");
		        target.addClass("hover-initial");

		        if(initial == 'ALL'){

		          target.parent().next().find("li").show();

		        }else{

		          target.parent().next().find("li").each(function(){

		            if($(this).data("initial") == initial){

		              $(this).show();
		            }else{
		              $(this).hide();
		            }
		          });
		        }
	        }
		},
		events:{
	      //js obj arr 是引用传递，所以要深度赋值一个
	      renderQuery:function(){

	        this.tmpQuery = Object.assign({}, this.query);
	        this.tmpQuery.value = Object.assign({}, this.query.value);
	      }
	    },
		ready:function(){
			//所有的 “更多” 显示首字母导航
			$(".more-value").on("click",function(){

				var parent = $(this).parents(".row-select");
				parent.toggleClass("display-more");
				parent.find(".nav-initial").toggle();

				parent.find(".attrValues li").show();
				parent.find(".nav-initial li").removeClass("hover-initial");
				parent.find(".nav-initial li:first-child").addClass("hover-initial");
			});
		}
	}
</script>