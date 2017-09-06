<style type="text/css">

  .popup-tpl{

    display: none;
    position: absolute;
    border-radius: 4px;
    box-shadow: 0 6px 12px rgba(0,0,0,.175) !important;    
    border: 1px solid rgba(0,0,0,.15) !important;
    background-clip: padding-box;
    width: 100%;
    max-width:1000px !important;
    line-height: 1.4285em;
    background-color: #fff;
    padding: 0 !important;
    width: 600px;
    z-index: 999 !important;
    font-size: 13px !important
  }

  .modal-title{

    font-weight: bold;
  }

  hr{
    border-top: 1px solid rgba(238, 238, 238, 0.5);
  }

  .row-block{
    margin-bottom: 15px;
  }

  .row-last{

    border-bottom:none;
  }

  .toolbar{
    padding: 10px 0px;
  }

  .toolbar>ul{

    margin-bottom: 0px;
  }

  .list-inline{
    margin-left: 0px;
  }


  .check-show-cell {
    height: 300px;
    color: #333333;
  }
  .check-show-cell .checkbox:first-child{
    margin-top: -5px;
  }
  .check-show-cell .checkbox {
    width:50%;
    float:left;
  }

  .check-show-cell .disabled label {
    color: grey;
  }

</style>

<template>

  <div class="toolbar">
    <ul class="list-inline">

      <li style="padding-left:0px">
        <button v-show="mulitSelect" @click="doSingleSelected" type="button" class="btn btn-default btn-sm" title="取消">
          取消 ({{checkedIds.length}}场,{{totalPageCount}}页)
        </button>

        <button v-show="!mulitSelect" @click="doMulitSelected" type="button" class="btn btn-default btn-sm" title="多选">
          多选
        </button>
      </li>

      <li></li>

      <!-- 批量修改 #edit-batch -->
      <li v-show="(checkedIds.length != 1)">
        <button name="modal" type="button" class="btn btn-default btn-sm" title="批量修改场景"
          disabled="{{!(checkedIds.length > 1 )}}" @click="editBatch">
          <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
        </button>
        
        <tpl-edit-batch
          :scenario-array="scenarioArray"
          :context="updateContext">
        </tpl-edit-batch>
      </li>

      <!-- 修改 #edit-one -->
      <li v-show="(checkedIds.length == 1)">
        <button name="modal" type="button" class="btn btn-default btn-sm" title="修改场景"
          disabled="{{!(checkedIds.length == 1)}}" @click="editOne">
          <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
        </button>

        <tpl-edit-one
          :context="updateContext"
          :scenario="scenario"
          :script-content="scriptContent">
        </tpl-edit-one>
      </li>
      
      <!-- 删除 -->
      <li>
        <button type="button" class="btn btn-default btn-sm" title="删除"
          disabled="{{!(checkedIds.length > 0)}}" 
          @click="confirm('已选中' + checkedIds.length + '条数据，删除后将不可恢复，是否继续？', delete)">
          <span class="glyphicon glyphicon-trash"></span>
        </button>
      </li>

      <li></li>

      <!-- 导入导出 -->
      <li>
        <div class="btn-group">
          <button type="button" class="btn btn-default btn-sm" title="导出" @click="confirm('将导出' + summary.total + '条数据，是否继续？', export)">
            <span class="glyphicon glyphicon-export"></span>
          </button>
        </div>
      </li>

      <!-- 添加场景 #new -->
      <li>
        <button v-on:click="openNew" name="modal" type="button" class="btn btn-default btn-sm" title="添加场景">
          <span class="glyphicon glyphicon-plus"></span>
        </button>

        <tpl-new
          :context="insertContext">
        </tpl-new>

      </li>
      
      <!-- 搜索场景 #query -->
      <li>
        <button v-on:click="openQuery" name="modal" type="button" class="btn btn-primary btn-sm" title="搜索场景">
          <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
        </button>
        
        <tpl-query 
          :query.sync="query"
          :context="queryContext"
          :initials="initials">
        </tpl-query>

      </li>

      <!-- 显示隐藏列 -->
      <li class="pull-right">
        <button type="button" name="leftPopup" class="btn btn-default btn-sm" title="显示 / 隐藏列">
          <span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>
          <!-- glyphicon glyphicon-th-large -->
        </button>

        <div class="popup-tpl ui popup" style="width:350px;">
          <div class="modal-header">
            <button type="button" class="close close-popup"><span aria-hidden="true">&times;</span></button>
            <h4>自定义列表项<small> - 隐藏/显示 场景表中对应数据</small></h4>
          </div>


          <div class="modal-body check-show-cell">
            <div v-for="one in viewColumnModel" class="checkbox" :class="{disabled: !one.canHide}">
              <label>
                <input v-if="!one.canHide" type="checkbox" class="checkbox-large" v-model="one.show" disabled>
                <input v-else type="checkbox" class="checkbox-large" v-model="one.show">
                {{one.name}}
              </label>
            </div>
          </div>

          <div class="modal-footer" style="padding: 10px;">
            <button type="button" class="btn btn-default close-popup btn-sm">关闭</button>
          </div>

        </div>
      </li>

      <!-- 常用设置 -->
      <li class="pull-right">
        <button name="leftPopup" title="常用设置" type="button" class="btn btn-default btn-sm">
          <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
        </button>

        <tpl-settings 
          :table-view.sync="tableView"
          :query="query"
          :with-status-color.sync="withStatusColor"
          :page="page">
        </tpl-settings>

      </li>

    </ul>

    <tpl-export-form
      :query="query">
    </tpl-export-form>
    
  </div>
</template>

<script type="text/javascript">
  
  import Model from '../js/model'

  import EditBatch from './edit-batch.vue'
  import EditOne from './edit-one.vue'
  import New from './new_2.vue'
  import Query from './query.vue'
  import Settings from './settings.vue'
  import ExportForm from './export-form.vue'
  import Alert from '../../../vue_components/dialog/alert.vue'
  import Confirm from '../../../vue_components/dialog/confirm.vue'

  export default {
    
    components:{
      'tpl-edit-batch':EditBatch,
      'tpl-new':New,
      'tpl-query':Query,
      'tpl-settings':Settings,
      'tpl-edit-one':EditOne,
      'tpl-export-form': ExportForm,
      'tpl-alert': Alert,
      'tpl-confirm': Confirm
    },
    props:{
      //已选择的场景
      checkedIds:Array,
      //表格视图切换
      tableView:String,
      //所有场景
      scenarios:Array,
      //查询条件
      query:Object,
      //是否多选
      mulitSelect:Boolean,
      //统计信息
      summary:Object,
      //场景表中列信息
      viewColumnModel: Array,
      //是否带有拍摄状态颜色
      withStatusColor: {
        type: Boolean,
        default: false
      },
      //分页信息
      page: Object,
      //已选页数
      totalPageCount: Number,
      //弹出框信息
      modalMessage: String,
      //弹出框回调
      confirmCallback: Function
    },
    data:function(){

      return {

        //已选择的场景
        scenarioArray:[],
        //已选择的场景
        scenario: new Model.ScenarioModel(),
        //上下文
        queryContext:new Model.ContextModel(),
        insertContext:new Model.ContextModel(),
        updateContext:new Model.ContextModel(),
        //查询条件首字母
        initials:{},
        //剧本内容
        scriptContent:{
          title: "",
          content: ""
        },
        blankFieldModel: [
          "stars", 
          "guestActors", 
          "figurants", 
          "shootLocations", 
          "primaryScenarios", 
          "secondaryScenarios", 
          "thirdScenarios", 
          "seasons", 
          "atmospheres", 
          "sites", 
          "cultureTypes",
          "clothings",
          "makeups",
          "props",
          "specialProps"
        ]
      }
    },
    methods:{
      //获取选中的ViewId
      getCheckedViewId:function(){

        var result = "";

        if(this.checkedIds.length > 0){

          for(var i = 0; i < this.checkedIds.length; i++) {
            if (i == 0) {
              result = this.scenarios[this.checkedIds[i]].viewId;
            } else {
              result += "," + this.scenarios[this.checkedIds[i]].viewId;
            }
          }
        }

        return result;
      },
      //删除场景
      delete:function(){

        var checkedViewIds = this.getCheckedViewId();

        if(checkedViewIds != ""){

          var self = this;

          $.ajax({
            url:'/viewManager/deleteViewBatch',
            type:'POST',
            data: {'viewIds': checkedViewIds},
            success:function(data) {

              if (data.success) {
                self.$dispatch('reload');
              } else {
                self.modalMessage = data.message;
                self.alert(data.message);
              }
            }
          });
        }
      },
      //批量修改场景
      editBatch:function(){

        this.getContext('updateContext', true);

        this.scenarioArray = [];

        for(var one in this.checkedIds){

          this.scenarioArray.push(this.scenarios[this.checkedIds[one]])
        }

        this.$broadcast('renderEditBatch');
      },
      //修改场景
      editOne:function(){

        this.getContext('updateContext', true);

        this.scenario = Object.assign({}, this.scenarios[this.checkedIds[0]]);

        this.getScript(this.scenario.seriesNo+'-'+this.scenario.viewNo);

      },
      //新建场景
      openNew: function() {

        this.getContext('insertContext', true);

        this.$broadcast('renderNew');
      },
      //查询场景
      openQuery:function(){

        this.getContext('queryContext', false);

        this.$broadcast('renderQuery');
      },
      //请求查询/添加/修改上下文
      getContext: function(context, includeNotExists) {
        
        this.$resource('/viewManager/retrieveQueryContext').get({includeNotExists: includeNotExists}, function (data, status, request) {

          this[context] = data.context;
          this.initials = data.initials;

          if (context == "queryContext") {
            this.addBlankToContext();
          }
        })
      },
      //在上下文条件中加入空值
      addBlankToContext: function() {
        var _blank = {id: "blank", initial: "K", name: "[空]"};

        for (var i = 0; i < this.blankFieldModel.length; i++) {
          this.queryContext[this.blankFieldModel[i]].unshift(_blank);
        }
      },
      //请求剧本
      getScript: function(number){

        var self = this;

        $.ajax({
          url:'/viewManager/viewContentInfo',
          type:'POST',
          data: {'seriesViewNo':number},
          success:function(data){
            
            self.scriptContent = data;
          }
        });
      },
      doMulitSelected:function(){

        this.mulitSelect = true;

        this.checkedIds = [];
      },
      doSingleSelected:function(){

        this.mulitSelect = false;

        this.checkedIds = [];
      },
      export: function() {
        $("#exportForm").submit();
      },
      alert: function(msg) {
        this.modalMessage = msg;
        $('#alertModel').modal("show")
      },
      confirm: function(msg, callbck) {
        this.modalMessage = msg;
        this.confirmCallback = callbck;
        $('#confirmModel').modal("show");
      }
    },
    ready:function(){

      //[PLUGIN] 所有按钮添加提示
      $('button').tooltip({
        placement:'top',
        container: 'body',
        trigger:'hover'
      });
      
      //[JQUERY] [SEMANTICUI] 工具栏按钮弹出层
      $('button[name="popup"]').each(function(){

        var self = $(this);

        self.popup({
          popup : self.next(),
          on: 'click',
          inline   : true,
          position : 'bottom left',
          lastResort:true,
          prefer:false
        });

        self.next().find(".close-popup").on('click', function(){

          self.popup('hide');
        });
      });

      $("button[name='modal']").on('click', function() {
        $(this).next(".modal").modal("show");
      });

      
      //[JQUERY] [SEMANTICUI] 工具栏按钮弹出层，向左弹出
      $('button[name="leftPopup"]').each(function(){

        var self = $(this);

        self.popup({
          popup : self.next(),
          on: 'click',
          inline   : true,
          position : 'bottom right',
          lastResort:true,
          prefer:false
        });

        self.next().find(".close-popup").on('click', function(){

          self.popup('hide');
        });
      });
    }
  }

</script>