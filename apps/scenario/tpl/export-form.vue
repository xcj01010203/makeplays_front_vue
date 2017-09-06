<style>
</style>

<template>
	<form id="exportForm" action='/viewManager/exportExcel'>
    <input type='hidden' name='season' v-model="query.season">
    <input type='hidden' name='atmosphere' v-model="query.atmosphere">
    <input type='hidden' name='site' v-model="query.site">
    <input type='hidden' name='viewType' v-model="query.viewType">
    <input type='hidden' name='shootStatus' v-model="query.shootStatus">
    <input type='hidden' name='roles' v-model="query.roles">
    <input type='hidden' name='searchMode' v-model="query.searchMode">
    <input type='hidden' name='props' v-model="query.props">
    <input type='hidden' name='specialProps' v-model="query.specialProps">
    <input type='hidden' name='guest' v-model="query.guest">
    <input type='hidden' name='mass' v-model="query.mass">
    <input type='hidden' name='clothes' v-model="query.clothes">
    <input type='hidden' name='makeup' v-model="query.makeup">
    <input type='hidden' name='shootLocation' v-model="query.shootLocation">
    <input type='hidden' name='major' v-model="query.major">
    <input type='hidden' name='minor' v-model="query.minor">
    <input type='hidden' name='startSeriesNo' v-model="query.startSeriesNo">
    <input type='hidden' name='startViewNo' v-model="query.startViewNo">
    <input type='hidden' name='endSeriesNo' v-model="query.endSeriesNo">
    <input type='hidden' name='endViewNo' v-model="query.endViewNo">
  </form>
</template>

<script>
	export default {
		props: {
			query: Object
		}
	}
</script>