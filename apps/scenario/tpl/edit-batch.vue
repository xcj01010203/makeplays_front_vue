<style type="text/css">

  .label-distance{
    margin-right: 5px;
  }

  .more{

    color: black;
  }
</style>

<template>

  <div class="modal fade" id="editBatchModel" tabindex="-1" role="dialog" aria-labelledby="newViewModel" @click="wholeClick">
    <div class="modal-dialog" role="document" aria-hidden="true">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title"> 批量修改场景 <small> - 勾选你需要修改的条目</small></h4>
        </div>

        <div class="modal-body" id="editBatViewForm" style="height:500px;overflow: auto;">
          <form class="form-horizontal">

            <div class="form-group">
              <label for="" class="col-sm-3 control-label">集场</label>
              <div class="col-sm-8">
                <p class="form-control-static">
                  <template v-for="one in scenarioArray | limitBy 5">
                    <span class="label label-primary label-distance">{{one.seriesNo}}-{{one.viewNo}}</span>
                  </template>

                  <span v-show="scenarioArray.length > 5" class="label more">等</span>
                </p>
              </div>
            </div>

            <!-- <div class="form-group">
              <label for="" class="col-sm-3 control-label">状态</label>
              <div class="col-sm-6">
                <div class="input-group">
                  <span class="input-group-addon">
                    <input type="checkbox" v-model="status">
                  </span>
                  <select class="form-control" disabled="{{!status}}">
                    <option>未拍摄</option>
                    <option>正在拍摄</option>
                    <option>已拍摄</option>
                  </select>
                </div>
              </div>
            </div> -->

            <!-- <div class="form-group">
              <label for="" class="col-sm-3 control-label">页数</label>
              <div class="col-sm-6">
                <div class="input-group">
                  <span class="input-group-addon">
                    <input type="checkbox" v-model="page">
                  </span>
                  <input type="text" class="form-control" disabled="{{!page}}" placeholder="">
                </div>
              </div>
            </div> -->


            <div class="form-group">
              <label for="" class="col-sm-3 control-label">主要内容</label>
              <div class="col-sm-8">
                <div class="input-group">
                  <span class="input-group-addon">
                    <input type="checkbox" v-model="modifyScenario.cgMainContent">
                  </span>
                  <textarea class="form-control" rows="3" v-model="scenario.mainContent" disabled="{{!modifyScenario.cgMainContent}}"></textarea>
                </div>
              </div>
            </div>

            <div class="form-group">
              <label for="" class="col-sm-3 control-label">备注</label>
              <div class="col-sm-8">
                <div class="input-group">
                  <span class="input-group-addon">
                    <input type="checkbox" v-model="modifyScenario.cgRemark">
                  </span>
                  <input type="text" class="form-control" v-model="scenario.remark" disabled="{{!modifyScenario.cgRemark}}" placeholder="">
                </div>
              </div>
            </div>

            <hr>

            <div class="form-group">
              <label for="" class="col-sm-3 control-label">拍摄地</label>
              <div class="col-sm-8">
                <single-select
                  :to-select-opt="context.shootLocations"
                  :aim-model.sync="scenario.shootLocation"
                  :checked.sync="modifyScenario.cgShootLocation"
                  @focus-select="scrollTop(150)">
                </single-select>
              </div>
            </div>
            <div class="form-group">
              <label for="" class="col-sm-3 control-label">主场景</label>
              <div class="col-sm-8">
                <single-select 
                  :to-select-opt="context.primaryScenarios"
                  :aim-model.sync="scenario.lvlOneLocation"
                  :checked.sync="modifyScenario.cgLvlOneLocation"
                  @focus-select="scrollTop(200)">
                </single-select>
              </div>
            </div>
            <div class="form-group">
              <label for="" class="col-sm-3 control-label">次场景</label>
              <div class="col-sm-8">
                <single-select 
                  :to-select-opt="context.secondaryScenarios"
                  :aim-model.sync="scenario.lvlTwoLocation"
                  :checked.sync="modifyScenario.cgLvlTwoLocation"
                  @focus-select="scrollTop(250)">
                </single-select>
              </div>
            </div>
            <div class="form-group">
              <label for="" class="col-sm-3 control-label">三级场景</label>
              <div class="col-sm-8">
                <single-select 
                  :to-select-opt="context.thirdScenarios"
                  :aim-model.sync="scenario.lvlThreeLocation"
                  :checked.sync="modifyScenario.cgLvlThreeLocation"
                  @focus-select="scrollTop(300)">
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
                  :checked.sync="modifyScenario.cgLeadingRoles"
                  @change="changeMultiSelect"
                  @focus-select="scrollTop(350)">
                </multi-select>
              </div>
            </div>
            <div class="form-group">
              <label for="" class="col-sm-3 control-label">特约演员</label>
              <div class="col-sm-8">
                <multi-select
                  :to-select-opt="context.guestActors"
                  :aim-model.sync="scenario.guestRoles"
                  :checked.sync="modifyScenario.cgGuestRoles"
                  @change="changeMultiSelect"
                  @focus-select="scrollTop(400)">
                </multi-select>
              </div>
            </div>
            <div class="form-group">
              <label for="" class="col-sm-3 control-label">群众演员</label>
              <div class="col-sm-8">
                <multi-select
                  :to-select-opt="context.figurants"
                  :aim-model.sync="scenario.massesRoles"
                  :checked.sync="modifyScenario.cgMassesRoles"
                  @change="changeMultiSelect"
                  @focus-select="scrollTop(450)">
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
                <div class="input-group">
                  <span class="input-group-addon">
                    <input type="checkbox" v-model="modifyScenario.cgViewType">
                  </span>
                  <select class="form-control" v-model="scenario.viewType" disabled="{{!modifyScenario.cgViewType}}">
                    <option value="1">文</option>
                    <option value="2">武</option>
                    <option value="3">文武</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="form-group">
              <label for="" class="col-sm-3 control-label">季节</label>
              <div class="col-sm-8">
                <div class="input-group">
                  <span class="input-group-addon">
                    <input type="checkbox" v-model="modifyScenario.cgSeason">
                  </span>
                  <select class="form-control" v-model="scenario.season" disabled="{{!modifyScenario.cgSeason}}">
                    <option value="1">春</option>
                    <option value="2">夏</option>
                    <option value="3">秋</option>
                    <option value="4">冬</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="form-group">
              <label for="" class="col-sm-3 control-label">气氛</label>
              <div class="col-sm-8">
                <single-select 
                  :to-select-opt="context.atmospheres"
                  :aim-model.sync="scenario.atmosphereName"
                  :checked.sync="modifyScenario.cgAtmosphereName"
                  @focus-select="scrollTop(600)">
                </single-select>
              </div>
            </div>

            <div class="form-group">
              <label for="" class="col-sm-3 control-label">内外景</label>
              <div class="col-sm-8">
                <single-select 
                  :to-select-opt="context.sites"
                  :aim-model.sync="scenario.site"
                  :checked.sync="modifyScenario.cgSite"
                  @focus-select="scrollTop(650)">
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
                  :checked.sync="modifyScenario.cgClothes"
                  :lg-show="true"
                  @focus-select="scrollTop(700)">
                </multi-select>
              </div>
            </div>
            <div class="form-group">
              <label for="" class="col-sm-3 control-label">化妆</label>
              <div class="col-sm-8">
                <multi-select
                  :to-select-opt="context.makeups"
                  :aim-model.sync="scenario.makeups"
                  :checked.sync="modifyScenario.cgMakeups"
                  :lg-show="true"
                  @focus-select="scrollTop(750)">
                </multi-select>
              </div>
            </div>
            <div class="form-group">
              <label for="" class="col-sm-3 control-label">道具</label>
              <div class="col-sm-8">
                <multi-select
                  :to-select-opt="context.props"
                  :aim-model.sync="scenario.commonProps"
                  :checked.sync="modifyScenario.cgCommonProps"
                  :lg-show="true"
                  @focus-select="scrollTop(800)">
                </multi-select>
              </div>
            </div>
            <div class="form-group">
              <label for="" class="col-sm-3 control-label">特殊道具</label>
              <div class="col-sm-8">
                <multi-select
                  :to-select-opt="context.specialProps"
                  :aim-model.sync="scenario.specialProps"
                  :checked.sync="modifyScenario.cgSpecialProps"
                  :lg-show="true"
                  @focus-select="scrollTop(850)">
                </multi-select>
              </div>
            </div>
          </form>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-primary btn-sm" @click="updateManyScenario">确定</button>
          <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">取消</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">

  import Model from '../js/model'
  import SingleSelect from '../../../vue_components/select/check-single-select.vue'
  import MultiSelect from '../../../vue_components/select/check-multi-select.vue'

  export default {
    components:{
      'single-select': SingleSelect,
      'multi-select': MultiSelect
    },
    data: function() {
      return {
        scenario: new Model.ScenarioModel(),
        modifyScenario: new Model.ModifyScenarioModel(),
        isRoleRepeated: false,
        roleRepeatedMessage: ""
      }
    },
    props:{
      scenarioArray:Array,
      context: Object,
      scriptContent: Object
    },
    methods: {
      updateManyScenario: function() {
        var self = this;

        if (!this.checkValid()) {
          return false;
        }

        var requestData = {};
        Object.assign(requestData, this.scenario);
        Object.assign(requestData, this.modifyScenario);
        Object.assign(requestData, {seriesViewNos: this.seriesViewNos});

        $.ajax({
          url:'/viewManager/updateManyScenario',
          type:'POST',
          data: requestData,
          dataType: 'json',
          success:function(data){
            if (data.success) {
              $("#editBatchModel").modal('hide');
              self.$dispatch('reload');
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

        var cgLeadingRoles = this.modifyScenario.cgLeadingRoles;
        var cgGuestRoles = this.modifyScenario.cgGuestRoles;
        var cgMassesRoles = this.modifyScenario.cgMassesRoles;

        if (cgLeadingRoles) {
          for (var n in leadingRoles) {
            var leadingRole = leadingRoles[n];
            if (cgGuestRoles && leadingRole != "" && $.inArray(leadingRole, guestRoles) != -1) {
              this.isRoleRepeated = true;
              this.roleRepeatedMessage = "主要演员和特约演员存在重复：" + leadingRole;

              break;
            }
            if (cgMassesRoles && leadingRole != "" && $.inArray(leadingRole, massesRoles) != -1) {
              this.isRoleRepeated = true;
              this.roleRepeatedMessage = "主要演员和群众演员存在重复：" + leadingRole;

              break;
            }
          } 
        }

        if (!this.isRoleRepeated && cgGuestRoles) {
          for (var n in guestRoles) {
            var guestRole = guestRoles[n];
            if (cgMassesRoles && guestRole != "" && $.inArray(guestRole, massesRoles) != -1) {
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
      changeMultiSelect: function() {
        this.isRoleRepeated = false;
      },
      scrollTop: function(top) {
        $("#editBatViewForm").animate({scrollTop: top + 'px'}, 500);
      },
      wholeClick: function() {
        this.$broadcast("click");
      }
    },
    computed: {
        seriesViewNos: {
          cache: false,
          get: function() {
            var result = "";
            for (var i = 0; i < this.scenarioArray.length; i++) {
              var seriesNo = this.scenarioArray[i].seriesNo;
              var viewNo = this.scenarioArray[i].viewNo;
              var seriesViewNo = seriesNo + "-" + viewNo;

              if (i == 0) {
                result = seriesViewNo;
              } else {
                result += "," + seriesViewNo;
              }
            }
            return result;
          }
        }
    },
    events: {

      renderEditBatch: function() {
        //TODO 清空已填的表单
        this.scenario = new Model.ScenarioModel();
        this.modifyScenario = new Model.ModifyScenarioModel();
      }
    }
  }
</script>