<style type="text/css">
  
  .panel-container{

    position: relative;
    clear: both;
    border: 1px solid #dddddd;
    border-radius: 4px;
    min-height: 400px;
    padding-bottom: 42px;
    padding-right: 1px;
  }

  .panel-container .panel-head{

    overflow: hidden;
    background: #F9FAFB;
    padding-right: 18px;
  }

  .panel-container .panel-head .table{

    margin-bottom:0px;
  }

  .panel-container .panel-body{
    overflow-x: auto;
    overflow-y: auto;
    height: 100%;
    padding: 0px;
    position: relative;
  }

  .table-head{

    margin-bottom: 0 !important;
    border-bottom: 1px solid #dddddd;
    border-collapse: collapse !important;
    border-radius: 1px;
    position: relative;
  }

  .panel-container .table>thead:first-child>tr:first-child>th{
    border-top: 0;
    border-bottom: 0px;
  }

  .panel-container .table thead > tr > th {

    padding: 0;
    margin: 0;
    vertical-align: bottom;
    border-bottom: 1px solid #ddd;
  }

  .panel-container thead th:first-child{

    border-left: none;
    border-top-left-radius: 4px;
  }

  .panel-container thead th{
    height: 0;
    padding: 0;
    margin: 0;
    border-left: 1px solid #dddddd;
  }

  .panel-container .table{
    margin-bottom: 0 !important;
    border-collapse: collapse !important;
    border-radius: 1px;
    width: 100%;
    border-bottom: 1px solid #DDD;
  }

  .panel-container tbody tr:first-child td{
    border-top: none;
  }

  .td-width-min{
    
    width: 65px;
  }

  .td-width-max{

    width: 160px;
  }

  .panel-container .table>tbody>tr>td{

    max-width: 65px;
    overflow-x: hidden;
    white-space: nowrap;
    border-left: 1px solid #dddddd;
    padding: 4px 8px;
    text-overflow: ellipsis;
  }

  .panel-container tbody td:first-child{

    border-left: none!important;
  }

  .table-hidden-head{

    margin-top: -42px;
  }

  .panel-container thead tr th:first-child div{

    width:30px;
  }

  .th-inner{
    padding: 8px;
    line-height: 24px;
    vertical-align: top;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .checkbox-large{
    width: 14px;
    height: 14px;
  }

  .tr-high-light td{
    background: #696969 !important;
    color: white;
  }

  .hide-border-left{

    border-left: none!important;
  }
</style>

<template>
  
  <div id="_table" class="panel-container" style="height:765px;">
    
    <div class="panel-head">
      <table class="table table-hover table-head" v-bind:style="{left: syncScroll +'px'}">
        <thead>
          <tr>
            <th v-show="mulitSelect">
              <div class="th-inner"><input class="checkbox-large" type="checkbox" v-model="checkedAll"></div>
            </th>
            <th v-show="checkIsShow('seriesViewNo')" v-bind:class="{ 'hide-border-left': !mulitSelect}">
              <div class="th-inner td-width-min">集-场</div>
            </th>
            <th v-show="checkIsShow('season')">
              <div class="th-inner td-width-min">季节</div>
            </th>
            <th v-show="checkIsShow('atmosphereName')">
              <div class="th-inner td-width-min">气氛</div>
            </th>
            <th v-show="checkIsShow('site')">
              <div class="th-inner td-width-min">内外景</div>
            </th>
            <th v-show="checkIsShow('viewType')">
              <div class="th-inner td-width-min">文武戏</div>
            </th>
            <th v-show="checkIsShow('shootLocation')">
              <div class="th-inner td-width-max">拍摄地点</div>
            </th>
            <th v-show="checkIsShow('lvlOneLocation')">
              <div class="th-inner td-width-max">主场景</div>
            </th>
            <th v-show="checkIsShow('lvlTwoLocation')">
              <div class="th-inner td-width-max">次场景</div>
            </th>
            <th v-show="checkIsShow('lvlThreeLocation')">
              <div class="th-inner td-width-max">三级场景</div>
            </th>
            <th v-show="checkIsShow('mainContent')">
              <div class="th-inner td-width-max">主要内容</div>
            </th>
            <th v-show="checkIsShow('pageCount')">
              <div class="th-inner td-width-min">页数</div>
            </th>
            <th v-show="checkIsShow('leadingRoles')">
              <div class="th-inner td-width-max">主要演员</div>
            </th>
            <th v-show="checkIsShow('guestRoles')">
              <div class="th-inner td-width-max">特约演员</div>
            </th>
            <th v-show="checkIsShow('massesRoles')">
              <div class="th-inner td-width-max">群众演员</div>
            </th>
            <th v-show="checkIsShow('clothes')">
              <div class="th-inner td-width-max">服装</div>
            </th>
            <th v-show="checkIsShow('makeups')">
              <div class="th-inner td-width-max">化妆</div>
            </th>
            <th v-show="checkIsShow('commonProps')">
              <div class="th-inner td-width-max">道具</div>
            </th>
            <th v-show="checkIsShow('specialProps')">
              <div class="th-inner td-width-max">特殊道具</div>
            </th>
            <th v-show="checkIsShow('remark')">
              <div class="th-inner td-width-max">备注</div>
            </th>
            <th v-show="checkIsShow('shootDate')">
              <div class="th-inner td-width-max">拍摄时间</div>
            </th>
            <th v-show="checkIsShow('shootStatus')">
              <div class="th-inner td-width-max">拍摄状态</div>
            </th>
          </tr>
        </thead>
      </table>
    </div>

    <div class="panel-body" v-on:scroll="scrollMove">
      <table class="table table-hover table-hidden-head">
        <thead>
          <tr>
            <th v-show="mulitSelect">
              <div class="th-inner"><input class="checkbox-large" type="checkbox"></div></th>
            <th v-show="checkIsShow('seriesViewNo')" v-bind:class="{ 'hide-border-left': !mulitSelect}">
              <div class="th-inner td-width-min">集-场</div>
            </th>
            <th v-show="checkIsShow('season')">
              <div class="th-inner td-width-min">季节</div>
            </th>
            <th v-show="checkIsShow('atmosphereName')">
              <div class="th-inner td-width-min">气氛</div>
            </th>
            <th v-show="checkIsShow('site')">
              <div class="th-inner td-width-min">内外景</div>
            </th>
            <th v-show="checkIsShow('viewType')">
              <div class="th-inner td-width-min">文武戏</div>
            </th>
            <th v-show="checkIsShow('shootLocation')">
              <div class="th-inner td-width-max">拍摄地点</div>
            </th>
            <th v-show="checkIsShow('lvlOneLocation')">
              <div class="th-inner td-width-max">主场景</div>
            </th>
            <th v-show="checkIsShow('lvlTwoLocation')">
              <div class="th-inner td-width-max">次场景</div>
            </th>
            <th v-show="checkIsShow('lvlThreeLocation')">
              <div class="th-inner td-width-max">三级场景</div>
            </th>
            <th v-show="checkIsShow('mainContent')">
              <div class="th-inner td-width-max">主要内容</div>
            </th>
            <th v-show="checkIsShow('pageCount')">
              <div class="th-inner td-width-min">页数</div>
            </th>
            <th v-show="checkIsShow('leadingRoles')">
              <div class="th-inner td-width-max">主要演员</div>
            </th>
            <th v-show="checkIsShow('guestRoles')">
              <div class="th-inner td-width-max">特约演员</div>
            </th>
            <th v-show="checkIsShow('massesRoles')">
              <div class="th-inner td-width-max">群众演员</div>
            </th>
            <th v-show="checkIsShow('clothes')">
              <div class="th-inner td-width-max">服装</div>
            </th>
            <th v-show="checkIsShow('makeups')">
              <div class="th-inner td-width-max">化妆</div>
            </th>
            <th v-show="checkIsShow('commonProps')">
              <div class="th-inner td-width-max">道具</div>
            </th>
            <th v-show="checkIsShow('specialProps')">
              <div class="th-inner td-width-max">特殊道具</div>
            </th>
            <th v-show="checkIsShow('remark')">
              <div class="th-inner td-width-max">备注</div>
            </th>
            <th v-show="checkIsShow('shootDate')">
              <div class="th-inner td-width-max">拍摄时间</div>
            </th>
            <th v-show="checkIsShow('shootStatus')">
              <div class="th-inner td-width-max">拍摄状态</div>
            </th>
          </tr>
        </thead>
        <tbody>

          <tr v-for="one in scenarios" 
              v-bind:class="{
              'info': withStatusColor && one.shootStatus == 1, 
              'success': withStatusColor && one.shootStatus == 2, 
              'warning': withStatusColor && one.shootStatus == 3 ,
              'tr-high-light': HighlightSelected($index, checkedIds)}"
              v-on:click="rowSelected($index)">

            <td v-show="mulitSelect">
              <input class="checkbox-large" type="checkbox" value="{{$index}}" @click.stop="" v-model="checkedIds">
            </td>

            <td v-show="checkIsShow('seriesViewNo')" v-bind:class="{ 'hide-border-left': !mulitSelect}">
              {{one.seriesNo}}-{{one.viewNo}}
            </td>
            <td v-show="checkIsShow('season')">{{one.season | season}}</td>
            <td v-show="checkIsShow('atmosphereName')">{{one.atmosphereName}}</td>
            <td v-show="checkIsShow('site')">{{one.site}}</td>
            <td v-show="checkIsShow('viewType')">{{one.viewType | viewType}}</td>
            <td v-show="checkIsShow('shootLocation')">{{one.shootLocation}}</td>
            <td v-show="checkIsShow('lvlOneLocation')" title="{{one.lvlOneLocation}}">{{one.lvlOneLocation}}</td>
            <td v-show="checkIsShow('lvlTwoLocation')">{{one.lvlTwoLocation}}</td>
            <td v-show="checkIsShow('lvlThreeLocation')">{{one.lvlThreeLocation}}</td>
            <td v-show="checkIsShow('mainContent')" title="{{one.mainContent}}">{{one.mainContent}}</td>
            <td v-show="checkIsShow('pageCount')">{{one.pageCount}}</td>

            <td v-show="checkIsShow('leadingRoles')" title="{{one.leadingRoles}}">
              <template v-for="role in one.roleList">
                {{role.viewRoleName}}
              </template>
            </td>
            <!-- <td>{{one.leadingRoles}}</td> -->
            <td v-show="checkIsShow('guestRoles')">{{one.guestRoles}}</td>
            <td v-show="checkIsShow('massesRoles')">{{one.massesRoles}}</td>
            
            <td v-show="checkIsShow('clothes')" title="{{one.clothes}}">{{one.clothes}}</td>
            <td v-show="checkIsShow('makeups')">{{one.makeups}}</td>
            <td v-show="checkIsShow('commonProps')" title="{{one.commonProps}}">{{one.commonProps}}</td>
            <td v-show="checkIsShow('specialProps')">{{one.specialProps}}</td>

            <td v-show="checkIsShow('remark')" title="{{one.remark}}">{{one.remark}}</td>
            <td v-show="checkIsShow('shootDate')">{{one.shootDate}}</td>
            <td v-show="checkIsShow('shootStatus')">{{one.shootStatus | shootstatus}}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 加载器 -->
    <slot></slot>

  </div>
</template>

<script type="text/javascript">
  
  //现在表格数据为300行, 只能减不能加.
  export default {

    props:{
      //已选中的行
      checkedIds:Array,
      //所有场景
      scenarios:Array,
      //是否多选
      mulitSelect:Boolean,
      //场景表中列信息
      viewColumnModel: Array,
      //是否带有拍摄状态颜色
      withStatusColor: {
        type: Boolean,
        default: false
      },
      totalPageCount: Number
    },
    data:function(){
      return {

        //全选
        checkedAll:false,
        //横向滚动条
        syncScroll:'0'
      }
    },
    computed: {
      
      //计算全选与单选的关系
      checkedAll: {
        get: function () {

          if(this.checkedIds.length != 0 && this.checkedIds.length == this.scenarios.length){
            return true;
          }else{
            return false;
          }
        },
        set: function (value) {

          var arr = new Array();

          if(value){

            for(var i in this.scenarios){

              arr.push(Number(i));
            }
          }

          this.checkedIds = arr;
        }
      },
      totalPageCount: function() {
        var result = 0;
        for (var i = 0; i < this.checkedIds.length; i++) {
          if (this.scenarios.length > 0) {
            var index = this.checkedIds[i];
            result = result.add(this.scenarios[index].pageCount);
          }
        }
        return result;
      }
    },
    methods:{

      //横向滚动条滚动
      scrollMove:function(event){
 
        this.syncScroll = '-'+ $(event.target).scrollLeft();
      },
      //高亮选择的行
      HighlightSelected:function(index, arr){

        for(var i in arr){

          if(arr[i] == index){

            return true;
          }
        }
      },
      //点击行选择
      rowSelected:function(index){
        if(this.mulitSelect){

          if(!this.checkedIds.$remove(index)){

            this.checkedIds.push(index);
          }
        }else{

           this.checkedIds.$set(0, index);
        }
      },
      checkIsShow: function(field) {
        for (var i = 0; i < this.viewColumnModel.length; i++) {
          if (this.viewColumnModel[i].field == field) {
            return this.viewColumnModel[i].show;
          }
        }
      }
    },
    ready:function(){

      var height = window.innerHeight - 230;

      $("#_table").css("height",height);
    }
  }
</script>