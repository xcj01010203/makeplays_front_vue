<style type="text/css">

.container-fluid{

	padding-right: 3%;
	padding-left: 3%;
}

</style>

<!--********************************************-->

<template>

	<!--VUE导航条-->
	<app-nav active="cost-schedule"></app-nav>

	<!--VUE内容-->
	<app-content></app-content>

</template>

<!--********************************************-->

<script type="text/javascript">

import nav from '../../../vue_components/nav/nav.vue'
import content from './content.vue'

module.exports = {
	components:{
		'app-nav':nav
		,'app-content':content
	}
}

</script>