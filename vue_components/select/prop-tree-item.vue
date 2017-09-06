<style type="text/css">
	.prop-tree-panl .word{
		white-space: nowrap;
	}
</style>
<template>
	
	<li class="item">
	    <div
	      :class="{bold: isFolder}"
	      @click="toggle"
	      @dblclick="changeType">
	      <span v-if="isFolder" v-bind:class="{'glyphicon':true,'glyphicon-triangle-right':!open,'glyphicon-triangle-bottom':open}"></span>
	      <span v-if="isFolder" class="word">{{model.accountName}}</span>
	      <span v-else @click="selectAccount" ids="{{model.accountId}}" class="word">{{model.accountName}}</span>
	      
	    </div>

	    <ul v-show="open" v-if="isFolder">
	      
	      <tpl-item 
	        v-for="one in model.childList" 
	        :model="one"
	        :select-data="selectData"
	        :select-Index="selectIndex"
	        :journal-account="journalAccount">
	      </tpl-item>

	      
	    </ul>

	</li>

</template>
<script type="text/javascript">
	import Model from '../../apps/journal/js/model'

	export default {
		name:'tpl-item',
		
		props:{
			model: Object,
			//已选择节点，向父节点派发
			selectData:Array,
			//科目选择位子
			selectIndex:Number,
			//已选择单据财务科目关联
  			journalAccount:Array,
		},
		data:function(){
			return {
				open: false,
				
			}
		},
		computed: {
		    isFolder: function () {
		    	
		      return this.model.childList &&
		        this.model.childList.length
		    }
		},
		methods:{
			toggle: function () {
		      if (this.isFolder) {
		        this.open = !this.open
		      }
		    },
		    changeType: function () {
		      if (!this.isFolder) {
		        this.set(this.model, 'childList', [])
		        this.addChild()
		        this.open = true
		      }
		    },
		    addChild: function () {
		      this.model.childList.push({
		        name: 'new stuff'
		      })
		    },
		    selectAccount:function(event){
		    	
		    	var ids = event.target.attributes.ids;
		    	
		    	this.$dispatch("pushData");
		    	this.selectData.reverse();
		    	$(".prop-tree-panl").hide();

		    	var jour = Object.assign({}, this.journalAccount[this.selectIndex]);
		    	
		    	jour.accountName = this.selectData.join("-");
		    	jour.accountId = event.target.attributes.ids;
		    	
		    	this.journalAccount.$set(this.selectIndex, jour)

		    }
		  
		},
		events:{
			//第一级
			pushData:function(){
				this.selectData.push(this.model.accountName);
				
				if(this.selectData.length/2>0 && this.selectData.length%2==0){
					this.selectData.splice(this.selectData.length-1,1);
					
					this.$dispatch("pushData1");
				}
				
			},
			//第二级
			pushData1:function(){
				this.selectData.push(this.model.accountName);
				//this.$dispatch("pushData");
				if(this.selectData.length/2>0 && this.selectData.length%2==1){
					this.selectData.splice(this.selectData.length-1,1);
					//console.log("go1");
					this.$dispatch("pushData2");
				}
				//console.log(this.selectData)
			},
			//第三级
			pushData2:function(){
				this.selectData.push(this.model.accountName);
				//this.$dispatch("pushData");

				if(this.selectData.length/2>0 && this.selectData.length%2==0){
					this.selectData.splice(this.selectData.length-1,1);
					//console.log("go2");
					this.$dispatch("pushData3");
				}
				//console.log(this.selectData)
			},
			//第四级
			pushData3:function(){
				this.selectData.push(this.model.accountName);
				//this.selectData.splice(this.selectData.length-1,1);
				//this.$dispatch("pushData");
				if(this.selectData.length/2>0 && this.selectData.length%2==1){
					this.selectData.splice(this.selectData.length-1,1);
					//console.log("go3");
					//this.$dispatch("pushData2");
				}
				//console.log(this.selectData)
			},
		},
		ready:function(){
			
		}
	}
</script>