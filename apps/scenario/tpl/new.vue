<style type="text/css">
   .error-message {
      left: 0;
      position: absolute;
      padding-left: 20px;
   }
</style>

<template>

  <div class="modal fade" id="newViewModel" tabindex="-1" role="dialog" aria-labelledby="newViewModel" @click="wholeClick">
    <div class="modal-dialog" role="document" aria-hidden="true">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" aria-label="Close" data-dismiss="modal"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title">添加场景</h4>
        </div>

        <div class="modal-body" id="newViewForm" style="height:500px; overflow: auto;">

          <form class="form-horizontal">

            <div class="form-group">
              <label for="seriesNo" class="col-sm-3 col-xs-12 control-label">集-场</label>
              <div class="col-sm-4 col-xs-6" :class="{'has-error':!isSeriesValid || isRepeated}">
                <input type="text" class="form-control" id="seriesNo" v-model="scenario.seriesNo" placeholder="" @keyup="seriesNoKeyup">
              </div>
              <div class="col-sm-4 col-xs-6" :class="{'has-error':!isViewValid || isRepeated}">
                <input type="text" class="form-control" id="viewNo" v-model="scenario.viewNo" placeholder="" @keyup="viewNoKeyup">
              </div>
            </div>
            <div class="form-group" v-if="!isSeriesValid || !isViewValid">
              <label for="" class="col-sm-3 col-xs-1 control-label"></label>
              <div class="col-sm-4 col-xs-5 text-danger">
                <span v-if="!isSeriesValid">请填写集次</span>
              </div>
              <div class="col-sm-4 col-xs-6 text-danger">
                <span v-if="!isViewValid">请填写场次</span>
              </div>
            </div>
            <div class="form-group" v-if="isRepeated">
              <label for="" class="col-sm-3 col-xs-1 control-label"></label>
              <div class="col-sm-8 col-xs-11 text-danger">
                <span>集场编号已存在，请重新输入</span>
              </div>
            </div>

            <div class="form-group">
              <label class="col-sm-3 control-label">页数</label>
              <div class="col-sm-8">
                <input type="text" class="form-control" v-model="scenario.pageCount" placeholder="" @keyup="pageCountKeyup">
              </div>
            </div>

            <div class="form-group">
              <label for="" class="col-sm-3 control-label">主要内容</label>
              <div class="col-sm-8">
                <textarea class="form-control" v-model="scenario.mainContent" rows="3"></textarea>
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
              <div class="col-sm-8 single-select">
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
              <div class="col-sm-8" id="leadingRoles">
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
          <span class="text-danger error-message" v-if="errorMessage != ''">{{errorMessage}}</span>
          <button type="button" class="btn btn-primary btn-sm" v-on:click="save">确定</button>
          <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">取消</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">

  import Model from '../js/model'

  import SingleSelect from '../../../vue_components/select/single-select.vue'
  import MultiSelect from '../../../vue_components/select/multi-select.vue'

  export default {
    components:{
      'single-select': SingleSelect,
      'multi-select': MultiSelect
    },
    props: {
      context: Object
    },
    data: function() {

      return {
        scenario: new Model.ScenarioModel(),
        isSeriesValid: true,
        isViewValid: true,
        isRepeated: false,
        errorMessage: "",
        isRoleRepeated: false,
        roleRepeatedMessage: ""
      }
    },
    methods:{

      //保存场景信息
      save: function() {
        var self = this;

        //前端验证//application/x-www-form-urlencoded;//json//组件里本身的请求在组件本身
        if (!this.checkValid()) {
          return false;
        }

        $.ajax({
          url:'/viewManager/saveOrUpdateViewInfo',
          type:'POST',
          data: this.scenario,
          success:function(data){
            if (data.success) {
              self.reset();

              $("#newViewModel").modal("hide");

              self.$dispatch('reload');
            } else {
              self.errorMessage = data.message;
            }
          }
        });
      },
      checkValid: function() {
        var self = this;
        var isValid = true;

        /*
         *  校验集-场号
         */
        //校验集-场是否有效
        this.errorMessage = ""
        var isSeriesViewNoValid = true;
        if (this.scenario.seriesNo == "") {
          this.isSeriesValid = false;
          isSeriesViewNoValid = false;
        }
        if (this.scenario.viewNo == "") {
          this.isViewValid = false;
          isSeriesViewNoValid = false;
        }

        //校验集-场是否重复
        if (isSeriesViewNoValid) {
          $.ajax({
            url:'/viewManager/checkSeriesViewNoRepeat',
            type:'POST',
            data: {seriesNo: this.scenario.seriesNo, viewNo: this.scenario.viewNo},
            async: false,
            success:function(data){
              if (data.success && data.repeated) {
                self.isRepeated = true;
                isSeriesViewNoValid = false;
              }
            }
          });
        }


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


        if (!isSeriesViewNoValid) {
          isValid = false;
          this.scrollTop(0);
          $("#seriesNo").focus();
        }

        return isValid;
      },
      seriesNoKeyup: function() {
        this.isSeriesValid = true;
        this.isRepeated = false;
        if (!this.verifyNumber(this.scenario.seriesNo)) {
          this.scenario.seriesNo = "";
        }
      },
      viewNoKeyup: function() {
        this.isViewValid = true;
        this.isRepeated = false;
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
      reset: function() {
        this.scenario = new Model.ScenarioModel();

        this.isSeriesValid = true;
        this.isViewValid = true;
        this.isRepeated = false;
        this.errorMessage = "";
        this.isRoleRepeated = false;
        this.roleRepeatedMessage = "";
      },
      changeMultiSelect: function() {
        this.isRoleRepeated = false;
      },
      scrollTop: function(top) {
        $("#newViewForm").animate({scrollTop: top + 'px'}, 500);
      },
      wholeClick: function() {
        this.$broadcast("click");
      }
    },
    events: {
      renderNew: function() {
        this.reset();
      }
    },
    ready: function() {
      $("#newViewModel").on('shown.bs.modal', function () {
        $('#seriesNo').focus();
      })
    }
  }
</script>
