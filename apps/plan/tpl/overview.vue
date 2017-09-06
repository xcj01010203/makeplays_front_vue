<style type="text/css">

	.stage-group {
		padding: 15px;
    border-top: 1px solid #DDD;
	}

	.two-stage-group{
		display:none;
	}

	.bs-example {
    margin-right: 0;
    margin-left: 0;
    background-color: #fff;
    border-color: #ddd;
    border-width: 1px;
    border-radius: 4px 4px 4px 4px;
    -webkit-box-shadow: none;
    box-shadow: none;
    padding: 45px 15px 15px;
		border-style: solid;
	}

	.stage-well{

		background: -webkit-gradient(linear, 0% 0%, 0% 50%,from(rgba(184,196,203,0.48)), to(rgb(255, 255, 255)));
		box-shadow: inset 0 0px 5px rgba(51, 122, 183, 0.2);
		min-height: 20px;
    padding: 19px;
    margin-bottom: 20px;
    border-radius: 4px;
	}

	.tr-high-light td{
    background: #696969 !important;
    color: white;
  }

  .toolbar{

    padding-top: 10px;
    padding-bottom: 10px;
  }
</style>

<template>

	<article>
		
    <div v-for="(index, stage) in overview.planViews" class="panel panel-default" id="stage_{{index}}">

			<div class="panel-heading">
				<h3 style="margin-top:0px;margin-bottom:0px;">
					
					<a href="javascript:void(0)" v-on:click="collapseStage(index)">{{index | roman}} 阶段 </a>
					<small> - 2015.11.01-2015.12.12</small>
				</h3>
			</div>

			<div class="panel-body" style="overflow: hidden;">
				<canvas id="factor_stat_{{index}}" style="width:99%;height:150px;"></canvas>
		  </div>

		  <div class="stage-group" v-show="displayStage(index)">

        <!-- 
        <div v-for="(index2, group) in stage.views">
          <canvas id="factor_stat_{{index}}_{{index2}}" style="width:100%;height:150px;"></canvas>
        </div> 
        -->
			</div>
		</div>
	</article>
</template>

<script type="text/javascript">

  export default {
  	props:{
  		overview: Object
  	},
    data(){
      return {
        checkedIds:[],
        stageId:'',
        groupId:''
      }
    },
    filters:{

    	roman:function(value){

	    	var array = new Array();
	      array[0] = "I";
	      array[1] = "II";
	      array[2] = "III";
	      array[3] = "IV";
	      array[4] = "V";
	      array[5] = "VI";

	      return array[value];
	    }
    },
    methods:{
    	displayStage:function(first){

    		if(this.stageId === first){

    			return true;
    		}

    		return false;
    	},
    	displayGroup:function(first, second){

    		if(this.stageId === first && this.groupId === second){

    			return true;
    		}

    		return false;
    	},
    	collapseGroup:function(first, second){

    		if(this.stageId === first && this.groupId === second){
    			
    			this.groupId = '';
    		}else{
    			this.stageId = first;
    			this.groupId = second;
    		}
    	},
    	collapseStage:function(first){

    		if(this.stageId === first){

    			this.stageId = '';
    		}else{
    			this.stageId = first;
    		}
    	},
      HighlightSelected:function(index, arr){

        for(var i in arr){

          if(arr[i] == index){

            return true;
          }
        }
      },
      moveTo:function(stagenum, groupnum){

      	var obj = {
      		planId:this.plan.id,
      		stagenum:stagenum,
      		groupnum:groupnum,
      		planViewIds:this.checkedIds
      	};

      	this.$resource('/plan/stage/update').save(obj, function (data, status, request) {

					this.$dispatch('reloadPlan', this.plan.id);
					this.checkedIds = [];
	      });
      },
      renderChart:function(){

      	for(var i in this.overview.planViews){

      		var factor = document.getElementById("factor_stat_"+i).getContext("2d");

      		new Chart(factor).Bar(
            this.getBarData(this.overview.planViews[i]), 
            {barValueSpacing:20, barDatasetSpacing:100, responsive: true}
          );

          /*for(var j in this.plan.planViews[i].views){

            var factor2 = document.getElementById("factor_stat_"+i+"_"+j).getContext("2d");

            new Chart(factor2).Bar(this.getBarData(this.plan.planViews[i].views[j]), {barValueSpacing:20, barDatasetSpacing:100});
          }*/
      	}
      },
      getBarData:function(factors){

      	var labels = [],
      			data = [];

      	labels.push('总场数');
      	data.push(factors.viewsnum);

      	for(var i in factors.factorStat){

      		labels.push(factors.factorStat[i].name);
      		data.push(factors.factorStat[i].cnt);
      	}

      	return {
					labels : labels,
					datasets : [
						{
							fillColor : "rgba(220,220,220,0.5)",
							strokeColor : "rgba(220,220,220,1)",
							data : data
						}
					]
				}
      }
    },
    events: {
      doRenderChart:function(){

        this.renderChart();
      }
	  }
  }
</script>