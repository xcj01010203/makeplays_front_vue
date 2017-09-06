<style type="text/css">

  .expand-script{

    border-top-right-radius: 0px !important;
    border-bottom-right-radius: 0px !important;
  }
</style>

<template>

  <div class="modal fade" id="editOneModel" v-bind:class="{ 'expand-script': script }" 
    tabindex="-1" role="dialog" aria-labelledby="editOneModel" 
    @click="wholeClick">
    <div class="modal-dialog" role="document" aria-hidden="true">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title">修改场景 
            <small> - 
              <a v-on:click="expandScript" href="#">
                <span v-show="script">隐藏剧本</span>
                <span v-show="!script">显示剧本</span>
              </a>
            </small>
          </h4>
        </div>

        <div class="modal-body" id="editOneViewForm" style="height:500px;overflow: auto;">
          <form class="form-horizontal">
            
            <div class="form-group">
              
              <label for="" class="col-sm-3 col-xs-3 control-label">集-场</label>
              <div class="col-sm-8 col-xs-9">
                <label class="control-label">{{scenario.seriesNo}} - {{scenario.viewNo}}</label>
              </div>
            </div>
            <div class="form-group">
              <label for="" class="col-sm-3 control-label">页数</label>
              <div class="col-sm-8">
                <input type="text" class="form-control pageNum" v-model="scenario.pageCount" @keyup="pageCountKeyup" placeholder="">
              </div>
            </div>
            <div class="form-group">
              <label for="" class="col-sm-3 control-label">主要内容</label>
              <div class="col-sm-8">
                <input type="text" class="form-control" v-model="scenario.mainContent" placeholder="">
              </div>
            </div>
            <div class="form-group">
              <label for="" class="col-sm-3 control-label">备注</label>
              <div class="col-sm-8">
                <textarea class="form-control" v-model="scenario.remark" rows="3"></textarea>
              </div>
            </div>

            <hr>

            <div class="form-group">
              <label for="" class="col-sm-3 control-label">拍摄地</label>
              <div class="col-sm-8">
                <single-select 
                  :to-select-opt="context.shootLocations"
                  :aim-model.sync="scenario.shootLocation"
                  @focus-select="scrollTop(200)">
                </single-select>
              </div>
            </div>
            <div class="form-group">
              <label for="" class="col-sm-3 control-label">主场景</label>
              <div class="col-sm-8">
                <single-select 
                  :to-select-opt="context.primaryScenarios"
                  :aim-model.sync="scenario.lvlOneLocation"
                  @focus-select="scrollTop(250)">
                </single-select>
              </div>
            </div>
            <div class="form-group">
              <label for="" class="col-sm-3 control-label">次场景</label>
              <div class="col-sm-8">
                <single-select 
                  :to-select-opt="context.secondaryScenarios"
                  :aim-model.sync="scenario.lvlTwoLocation"
                  @focus-select="scrollTop(300)">
                </single-select>
              </div>
            </div>
            <div class="form-group">
              <label for="" class="col-sm-3 control-label">三级场景</label>
              <div class="col-sm-8">
                <single-select 
                  :to-select-opt="context.thirdScenarios"
                  :aim-model.sync="scenario.lvlThreeLocation"
                  @focus-select="scrollTop(350)">
                </single-select>
              </div>
            </div>

            <hr>

            <div class="form-group">
              <label for="" class="col-sm-3 control-label">主要演员</label>
              <div class="col-sm-8">
                <multi-select
                  :to-select-opt="context.stars"
                  :aim-model.sync="scenario.leadingRoles"
                  @change="changeMultiSelect"
                  @focus-select="scrollTop(400)">
                </multi-select>
              </div>
            </div>
            <div class="form-group">
              <label for="" class="col-sm-3 control-label">特约演员</label>
              <div class="col-sm-8">
                <multi-select
                  :to-select-opt="context.guestActors"
                  :aim-model.sync="scenario.guestRoles"
                  @change="changeMultiSelect"
                  @focus-select="scrollTop(450)">
                </multi-select>
              </div>
            </div>
            <div class="form-group">
              <label for="" class="col-sm-3 control-label">群众演员</label>
              <div class="col-sm-8">
                <multi-select
                  :to-select-opt="context.figurants"
                  :aim-model.sync="scenario.massesRoles"
                  @change="changeMultiSelect"
                  @focus-select="scrollTop(500)">
                </multi-select>
              </div>
            </div>
            <div class="form-group" v-if="isRoleRepeated">
              <label for="" class="col-sm-3 col-xs-1 control-label"></label>
              <div class="col-sm-8 col-xs-11 text-danger">
                <span>{{roleRepeatedMessage}}</span>
              </div>
            </div>
            
            <hr>

            <div class="form-group">
              <label for="" class="col-sm-3 control-label">文武戏</label>
              <div class="col-sm-8">

                <select class="form-control" v-model="scenario.viewType">
                  <option value="1">文</option>
                  <option value="2">武</option>
                  <option value="3">文武</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label for="" class="col-sm-3 control-label">季节</label>
              <div class="col-sm-8">
                <select class="form-control" v-model="scenario.season">
                  <option value="1">春</option>
                  <option value="2">夏</option>
                  <option value="3">秋</option>
                  <option value="4">冬</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label for="" class="col-sm-3 control-label">气氛</label>
              <div class="col-sm-8">
                <single-select 
                  :to-select-opt="context.atmospheres"
                  :aim-model.sync="scenario.atmosphereName"
                  @focus-select="scrollTop(700)">
                </single-select>
              </div>
            </div>
            <div class="form-group">
              <label for="" class="col-sm-3 control-label">内外景</label>
              <div class="col-sm-8">
                <single-select 
                  :to-select-opt="context.sites"
                  :aim-model.sync="scenario.site"
                  @focus-select="scrollTop(750)">
                </single-select>
              </div>
            </div>

            <hr>

            <div class="form-group">
              <label for="" class="col-sm-3 control-label">服装</label>
              <div class="col-sm-8">
                <multi-select
                  :to-select-opt="context.clothings"
                  :aim-model.sync="scenario.clothes"
                  :lg-show="true"
                  @focus-select="scrollTop(800)">
                </multi-select>
              </div>
            </div>
            <div class="form-group">
              <label for="" class="col-sm-3 control-label">化妆</label>
              <div class="col-sm-8">
                <multi-select
                  :to-select-opt="context.makeups"
                  :aim-model.sync="scenario.makeups"
                  :lg-show="true"
                  @focus-select="scrollTop(850)">
                </multi-select>
              </div>
            </div>
            <div class="form-group">
              <label for="" class="col-sm-3 control-label">道具</label>
              <div class="col-sm-8">
                <multi-select
                  :to-select-opt="context.props"
                  :aim-model.sync="scenario.commonProps"
                  :lg-show="true"
                  @focus-select="scrollTop(900)">
                </multi-select>
              </div>
            </div>
            <div class="form-group">
              <label for="" class="col-sm-3 control-label">特殊道具</label>
              <div class="col-sm-8">
                <multi-select 
                  :to-select-opt="context.specialProps"
                  :aim-model.sync="scenario.specialProps"
                  :lg-show="true"
                  @focus-select="scrollTop(950)">
                </multi-select>
              </div>
            </div>
          </form>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-primary btn-sm" @click="updateScenario">保存</button>
          <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">取消</button>
        </div>

        <!-- 剧本内容 #script -->
        <tpl-script
          :script.sync="script"
          :scenario="scenario"
          :script-content="scriptContent">
        </tpl-script>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">

  import Model from '../js/model'
  import Script from './script.vue'
  import SingleSelect from '../../../vue_components/select/single-select.vue'
  import MultiSelect from '../../../vue_components/select/multi-select.vue'

  export default {
    components:{
      'single-select': SingleSelect,
      'multi-select': MultiSelect,
      'tpl-script': Script
    },
    data:function(){
      return{

        //扩展剧本内容
        script:true,
        isRoleRepeated: false,
        roleRepeatedMessage: ""
      }
    },
    computed: {
      
    },
    props:{
      //场景详细信息
      scenario:Object,
      //剧本内容
      scriptContent:Object,
      //所有下拉内容
      context: Object
    },
    methods:{
      expandScript:function(){

        if(this.script){
          this.script = false;
        } else {
          this.script = true;
        }
      },
      updateScenario: function() {
        var self = this;

        if (!this.checkValid()) {
          return false;
        }

        $.ajax({
          url:'/viewManager/saveOrUpdateViewInfo',
          type:'POST',
          data: this.scenario,
          success:function(data){
            if (data.success) {
              self.toSaveScenario = new Model.ScenarioModel();

              $("#editOneModel").modal("hide");

              self.$dispatch('reload');
            } else {
              self.errorMessage = data.message;
            }
          }
        });
      },
      checkValid: function() {
        var isValid = true;

        /*
         *  校验演员信息
         */
        //校验演员之间是否有重复
        var leadingRoles = this.scenario.leadingRoles.split(",");
        var guestRoles = this.scenario.guestRoles.split(",");
        var massesRoles = this.scenario.massesRoles.split(",");

        for (var n in leadingRoles) {
          var leadingRole = leadingRoles[n];
          if (leadingRole != "" && $.inArray(leadingRole, guestRoles) != -1) {
            this.isRoleRepeated = true;
            this.roleRepeatedMessage = "主要演员和特约演员存在重复：" + leadingRole;

            break;
          }
          if (leadingRole != "" && $.inArray(leadingRole, massesRoles) != -1) {
            this.isRoleRepeated = true;
            this.roleRepeatedMessage = "主要演员和群众演员存在重复：" + leadingRole;

            break;
          }
        }

        if (!this.isRoleRepeated) {
          for (var n in guestRoles) {
            var guestRole = guestRoles[n];
            if (guestRole != "" && $.inArray(guestRole, massesRoles) != -1) {
              this.isRoleRepeated = true;
              this.roleRepeatedMessage = "特约演员和群众演员存在重复：" + guestRole;

              break;
            }
          }
        }

        if (this.isRoleRepeated) {
          isValid = false;
          this.scrollTop(350);
        }

        return isValid;
      },
      pageCountKeyup: function() {
        if (!this.verifyNumber(this.scenario.pageCount)) {
          this.scenario.pageCount = "";
        }
      },
      verifyNumber: function(value) {
        if (isNaN(value)) {
          return false;
        }
        return true;
      },
      changeMultiSelect: function() {
        this.isRoleRepeated = false;
      },
      scrollTop: function(top) {
        $("#editOneViewForm").animate({scrollTop: top + 'px'}, 500);
      },
      wholeClick: function() {
        this.$broadcast("click");
      }
    },
    events: {
      //剧本分析点击分析菜单的事件
      select: function(top) {
        this.scrollTop(top);
      }
    },
    ready: function() {
      $("#editOneModel").on('shown.bs.modal', function () {
        $('#editOneModel .pageNum').focus();
      })
    }
  }
</script>