<style type="text/css">

	.container-fluid{

		padding-right: 3%;
		padding-left: 3%;
	}

	body {
    padding-top: 65px;
		padding-bottom: 15px;
	}
</style>

<template>

	<!-- 导航条 @nav-->
	<tpl-nav 
		active="plan">
	</tpl-nav>

	<!-- 内容 #main -->
	<tpl-main>
	</tpl-main>
</template>

<script type="text/javascript">

	import Nav from '../../../vue_components/nav/nav.vue'
	import Main from './main.vue'

	export default {
		
		components:{
			'tpl-nav':Nav
			,'tpl-main':Main
		}
	}
</script>