<style type="text/css">
  
  .toolbar{

    padding: 10px 0px;
  }

  .toolbar>ul{

    margin-bottom: 0px;
  }

  .table{

    margin-bottom: 5px;
  }

  .checkbox-large{

    width: 14px;
    height: 14px;
  }

  .tr-high-light td{

    background: #696969 !important;
    color: white;
  }

  .table>tbody>tr>td{

    padding:4px 8px;
  }
</style>

<template>
	
  <article>

    <tpl-search>
    </tpl-search>

    <hr>

    <div class="toolbar">

      <ul class="list-inline">

        <li>
          <button type="button" class="btn btn-default btn-sm" title="">
            移动到
          </button>
        </li>

        <li>
          <button type="button" class="btn btn-default btn-sm" title="">
            添加到通告单
          </button>
        </li>
      </ul>
    </div>

    <table class="table table-bordered table-hover">
      <thead>
        <tr>
          <th><input class="checkbox-large" type="checkbox" v-model="checkedAll"></th>
          <th>集-场</th>
          <th>主场景</th>
          <th>拍摄地</th>
          <th>演员</th>
          <th>特殊道具</th>
          <th>主要内容</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="one in detail" 
          v-bind:class="{'tr-high-light': HighlightSelected($index, checkedIds)}">
          <td><input class="checkbox-large" type="checkbox" value="{{$index}}" v-model="checkedIds"></td>
          <td>{{one.seriesNo}} - {{one.viewNo}}</td>
          <td>{{one.viewLocation.location}}</td>
          <td>{{one.shootLocation}}</td>
          <td>
            <template v-for="role in one.viewRole">
              {{role.viewRoleName}} 
            </template>
          </td>
          <td></td>
          <td>{{one.maincontent}}</td>
        </tr>
      </tbody>
    </table>

    <!-- 分页 @pagination-->
    <tpl-pagination 
      :page.sync="page">
    </tpl-pagination>

  </article>
</template>

<script type="text/javascript">
  
  import Search from './search.vue'
  import Pagination from '../../../vue_components/pagination/pagination.vue'

  export default {
    components:{
      'tpl-search':Search
      ,'tpl-pagination':Pagination
    },
  	props:{
      detail:Array,
      page:Object
  	},
    data:function(){

      return{

        checkedAll:false,
        checkedIds:[]
      }
    },
    computed: {
      
      //计算全选与单选的关系
      checkedAll: {
        get: function () {

          if(this.checkedIds.length != 0 && this.checkedIds.length == this.detail.length){
            return true;
          }else{
            return false;
          }
        },
        set: function (value) {

          var arr = new Array();

          if(value){

            for(var i in this.detail){

              arr.push(Number(i));
            }
          }

          this.checkedIds = arr;
        }
      }
    },
    methods:{

      //高亮选择的行
      HighlightSelected:function(index, arr){

        for(var i in arr){

          if(arr[i] == index){

            return true;
          }
        }
      }
    }
  }
</script>