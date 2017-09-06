<style type="text/css">
	.prop-tree-panl{
		position: fixed;
		display: none;
		background-color: #ebebeb;
		
		padding-right: 10px;
		padding-top: 20px;
		padding-bottom: 20px;
		overflow: hidden;
	}
	.prop-tree-panl>div{
		padding-right: 30px;
		min-width: 192px;
		overflow-y: auto;
		overflow-x: hidden;
		max-height: 200px;
	}
	.prop-tree-panl .item {
	  cursor: pointer;
	}
	.prop-tree-panl .bold {
	  font-weight: bold;
	}
	.prop-tree-panl ul {
	  padding-left: 1em;
	  line-height: 1.5em;
	  
	}
	.prop-tree-panl ul li {
	  list-style: none;
	}
	
</style>
<template>


	<div class="prop-tree-panl" @click.stop>
		<div>
			<ul>
				<tpl-item
				  v-for="one in treeData"
	    		  :model="one"
	    		  :select-data="selectData"
	    		  :select-Index="selectIndex"
	    		  :journal-account="journalAccount">

	    		  </tpl-item>
		    </ul>
		</div>
	</div>


</template>
<script type="text/javascript">
	import Item from './prop-tree-item.vue'

	export default {
		components:{
			"tpl-item":Item
		},
		props:{
			treeData:Array,
			//已选择科目
			selectData:Array,
			//科目选择位子
			selectIndex:Number,
			//已选择单据财务科目关联
  			journalAccount:Array,
		},
		data:function(){
			return {
				
			}
		},
		
		ready:function(){
			$(document).click(function(){
				$(".prop-tree-panl").hide();
			});
			
		}
	}
</script>