<style type="text/css">

	.container-fluid{
		padding-right: 3%;
		padding-left: 3%;
	}

	body {
    padding-top: 50px;
	}

</style>

<template>

	<!-- 导航条 @nav-->
	<tpl-nav active="home"></tpl-nav>

	<!-- 内容 #content -->
	<tpl-content></tpl-content>

</template>

<script type="text/javascript">

	import Nav from '../../../vue_components/nav/nav.vue'
	import Content from './content.vue'

	export default {
		
		components:{
			'tpl-nav':Nav
			,'tpl-content':Content
		}
	}
</script>