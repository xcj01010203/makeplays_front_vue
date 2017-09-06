<style type="text/css">
  .view-settings .row {
    margin-bottom: 10px;
  }
</style>

<template>
  <div class="popup-tpl ui popup" style="width:300px;">
          <div class="modal-header">
            <button type="button" class="close close-popup"><span aria-hidden="true">&times;</span></button>
            <h4>设置<small></small></h4>
          </div>


          <div class="modal-body view-settings">

            <div class="row">
              <div class="col-md-5">
                区域切换
              </div>
              <div class="col-md-7">
                <div class="btn-group btn-group-justified" role="group">
                  <div class="btn-group btn-group-xs" role="group">
                    <button v-on:click="switchTableView('tpl-table')" type="button" class="btn btn-default btn-sm"
                      v-bind:class="{ 'active': tableView == 'tpl-table'}">
                      <!-- <span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> -->
                      大陆
                    </button>
                  </div>
                  <div class="btn-group btn-group-xs" role="group">
                    <button v-on:click="switchTableView('tpl-block')" type="button" class="btn btn-default btn-sm"
                      v-bind:class="{ 'active': tableView == 'tpl-block'}">
                      <!-- <span class="glyphicon glyphicon-th" aria-hidden="true"></span> -->
                      港台
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="row">
              <div class="col-md-5">
                表格切换
              </div>
              <div class="col-md-7">
                <div class="btn-group btn-group-justified" role="group">
                  <div class="btn-group btn-group-xs" role="group">
                    <button v-on:click="orderBy('1')" type="button" class="btn btn-default btn-sm"
                      v-bind:class="{ 'active': query.sortType == 1 }">
                      顺场
                      <!-- <span class="glyphicon glyphicon-sort-by-order" aria-hidden="true"></span> -->
                    </button>
                  </div>
                  <div class="btn-group btn-group-xs" role="group">
                    <button v-on:click="orderBy('2')" type="button" class="btn btn-default btn-sm"
                      v-bind:class="{ 'active': query.sortType == 2 }">
                      分场
                      <!-- <span class="glyphicon glyphicon-sort-by-attributes" aria-hidden="true"></span> -->
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-5">
                高亮区分状态
              </div>
              <div class="col-md-7">
                <div class="btn-group btn-group-justified" role="group">
                  <div class="btn-group btn-group-xs" role="group">
                    <button v-on:click="switchColor(false)" type="button" class="btn btn-default btn-sm"
                      v-bind:class="{ 'active': !withStatusColor }">
                      否
                      <!-- <span class="glyphicon glyphicon-align-justify" aria-hidden="true"></span> -->
                    </button>
                  </div>
                  <div class="btn-group btn-group-xs" role="group">
                    <button v-on:click="switchColor(true)" type="button" class="btn btn-default btn-sm"
                      v-bind:class="{ 'active': withStatusColor }">
                      是
                      <!-- <span class="glyphicon glyphicon-align-center" aria-hidden="true"></span> -->
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="row">
              <div class="col-md-5">
                  每页显示条数
               </div>
              <div class="col-md-7">
                <div class="btn-group btn-group-justified" role="group">
                  <div class="btn-group btn-group-xs" role="group">
                    <button v-on:click="setPageSize(50)" type="button" class="btn btn-default btn-sm" v-bind:class="{ 'active': page.pagesize==50 }">50</button>
                  </div>
                  <div class="btn-group btn-group-xs" role="group">
                    <button v-on:click="setPageSize(100)" type="button" class="btn btn-default btn-sm" v-bind:class="{ 'active': page.pagesize==100 }">100</button>
                  </div>
                  <div class="btn-group btn-group-xs" role="group">
                    <button v-on:click="setPageSize(200)" type="button" class="btn btn-default btn-sm" v-bind:class="{ 'active': page.pagesize==200 }">200</button>
                  </div>
                  <div class="btn-group btn-group-xs" role="group">
                    <button v-on:click="setPageSize(500)" type="button" class="btn btn-default btn-sm" v-bind:class="{ 'active': page.pagesize==500 }">500</button>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div class="modal-footer" style="padding: 10px;">
            <button type="button" class="btn btn-default close-popup btn-sm">关闭</button>
          </div>

        </div>
</template>

<script type="text/javascript">
  export default {
    data:function(){

      return { 
        
      }
    },
    props:{
      tableView: String,
      query: Object,
      //是否带有拍摄状态颜色
      withStatusColor: {
        type: Boolean,
        default: false
      },
      //分页信息
      page: Object
    },
    methods:{
      //切换大陆版与港台版
      switchTableView: function(id){

        if(id == 'tpl-block'){

          this.tableView = 'tpl-block';
        }else{

          this.tableView = 'tpl-table';
        }
      },
      //切换顺场表分场表
      orderBy: function(id){

        if(this.query.sortType != id){

          this.query.sortType = id;
          this.$dispatch('paging');
        }
      },
      //是否带有状态颜色切换
      switchColor: function(withColor) {
        this.withStatusColor = withColor;
      },
      //设置每页显示条数
      setPageSize: function(pageSize) {
        this.page.pagesize = pageSize;
        this.$dispatch('paging');
      }
    }
  }
</script>