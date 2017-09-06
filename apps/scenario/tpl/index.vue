<style type="text/css">

	.container-fluid{

		padding-right: 3%;
		padding-left: 3%;
	}

	/*.row{

		margin-left: 0px;
		margin-right:0px;
	}*/
	
	body {

    font-weight: normal;
    padding-top: 50px;
	}
</style>

<template>

	<!-- 导航条 @nav-->
	<tpl-nav active="scenario">
	</tpl-nav>

	<!-- 内容 #content -->
	<tpl-content>
	</tpl-content>

</template>

<script type="text/javascript">

	import Nav from '../../../vue_components/nav/nav.vue'
	import Content from './content.vue'

	export default {
		
		components:{
			'tpl-nav':Nav,
			'tpl-content':Content
		},
		ready:function(){

			//计算场景表高度 //关于ID的命名约定
			$(window).resize(function(){

				var height = window.innerHeight - 230;

				$("#_table").css("height",height);
				
			}).trigger("resize");
		}
	}
</script>