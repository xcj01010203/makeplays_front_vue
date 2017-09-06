<style type="text/css">

  .breadcrumb{

    background-color:white;
    padding: 8px 0px;
    margin-bottom: 0px;
  }

  .query-item-container{
    padding: 8px 0px;
    margin-bottom: 0px;
  }

  .query-item{

    border: 1px solid #DDD;
    padding: 3px 28px 3px 5px;
    position: relative;
    background-color: #F9FAFB;
  }

  .query-item span{

    right: 2px;
    position: absolute;
    opacity: 0.5;
    color: black;
    font-size: 13px;
    top: 5px;
  }
</style>

<template>

  <div class="row">
    
    <ol class="breadcrumb pull-left">
      <li class="active">拍摄管理</li>
      <li><a href="/makeplays/apps/scenario/index.html">场景表</a></li>
      <li></li>
    </ol>

    <ul class="list-inline pull-left query-item-container">

      <li v-if="query.startSeriesNo != '' ">
        <a class="query-item" href="#" v-on:click="removeQuery('startSeriesNo')">
          {{query.startSeriesNo}}
          <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
        </a>
      </li>
      <li v-if="query.startViewNo != '' ">
        <a class="query-item" href="#" v-on:click="removeQuery('startViewNo')">
          {{query.startViewNo}}
          <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
        </a>
      </li>
      <li v-if="query.endSeriesNo != '' ">
        <a class="query-item" href="#" v-on:click="removeQuery('endSeriesNo')">
          {{query.endSeriesNo}}
          <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
        </a>
      </li>
      <li v-if="query.endViewNo != '' ">
        <a class="query-item" href="#" v-on:click="removeQuery('endViewNo')">
          {{query.endViewNo}}
          <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
        </a>
      </li>
      <li v-if="query.shootStatus != '' ">
        <a class="query-item" href="#" v-on:click="removeQuery('shootStatus')">
          {{query.value.shootStatus}}
          <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
        </a>
      </li>

      <li v-if="query.roles != '' ">
        <a class="query-item" href="#" v-on:click="removeQuery('roles')">
          {{query.value.roles}}
          <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
        </a>
      </li>
      <li v-if="query.guest != '' ">
        <a class="query-item" href="#" v-on:click="removeQuery('guest')">
          {{query.value.guest}}
          <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
        </a>
      </li>
      <li v-if="query.mass != '' ">
        <a class="query-item" href="#" v-on:click="removeQuery('mass')">
          {{query.value.mass}}
          <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
        </a>
      </li>

      <li v-if="query.shootLocation != '' ">
        <a class="query-item" href="#" v-on:click="removeQuery('shootLocation')">
          {{query.shootLocation}}
          <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
        </a>
      </li>
      <li v-if="query.major != '' ">
        <a class="query-item" href="#" v-on:click="removeQuery('major')">
          {{query.value.major}}
          <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
        </a>
      </li>
      <li v-if="query.minor != '' ">
        <a class="query-item" href="#" v-on:click="removeQuery('minor')">
          {{query.value.minor}}
          <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
        </a>
      </li>

      <li v-if="query.season != '' ">
        <a class="query-item" href="#" v-on:click="removeQuery('season')">
          {{query.value.season}}
          <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
        </a>
      </li>
      <li v-if="query.site != '' ">
        <a class="query-item" href="#" v-on:click="removeQuery('site')">
          {{query.site}}
          <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
        </a>
      </li>
      <li v-if="query.atmosphere != '' ">
        <a class="query-item" href="#" v-on:click="removeQuery('atmosphere')">
          {{query.value.atmosphere}}
          <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
        </a>
      </li>
      <li v-if="query.viewType != '' ">
        <a class="query-item" href="#" v-on:click="removeQuery('viewType')">
          {{query.value.viewType}}
          <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
        </a>
      </li>

      <li v-if="query.clothes != '' ">
        <a class="query-item" href="#" v-on:click="removeQuery('clothes')">
          {{query.value.clothes}}
          <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
        </a>
      </li>
      <li v-if="query.makeup != '' ">
        <a class="query-item" href="#" v-on:click="removeQuery('makeup')">
          {{query.value.makeup}}
          <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
        </a>
      </li>
      <li v-if="query.props != '' ">
        <a class="query-item" href="#" v-on:click="removeQuery('props')">
          {{query.value.props}}
          <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
        </a>
      </li>
      <li v-if="query.specialProps != '' ">
        <a class="query-item" href="#" v-on:click="removeQuery('specialProps')">
          {{query.value.specialProps}}
          <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
        </a>
      </li>

      <li v-if="query.mainContent != '' ">
        <a class="query-item" href="#" v-on:click="removeQuery('mainContent')">
          {{query.mainContent}}
          <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
        </a>
      </li>
      <li v-if="query.remark != '' ">
        <a class="query-item" href="#" v-on:click="removeQuery('remark')">
          {{query.remark}}
          <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
        </a>
      </li>

    </ul> 
  </div>
</template>

<script type="text/javascript">
  
  export default {

    props:{
      //查询条件
      query:Object
    },
    methods:{

      //移除一个查询条件, 刷新表格
      removeQuery:function(key){

        this.query[key] = '';

        this.$dispatch('reload');
      }
    }
  }
</script>