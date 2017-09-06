<style type="text/css">
  
  .script{

    position: absolute;
    top: -1px;  
    right: -420px;
    width: 420px;

    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;

    box-shadow: 2px 6px 12px rgba(0,0,0,.175) !important;
  }

  .script-content{

    height:561px;
    overflow: auto;
    font-size: 14px;
    line-height: 28px;
  }

  .script-menu{

    position: fixed;
    background-color: red;
  }

</style>

<template>

  <div class="popup-tpl script" v-bind:class="{ 'show': script }">

    <div class="modal-header">
      <button v-on:click="close" type="button" class="close"><span aria-hidden="true">&times;</span></button>
      <h4 class="modal-title">剧本内容</h4>
    </div>

    <div class="modal-body script-content" v-on:mouseup="select">

      <p class="lead">{{{scriptContent.title}}}</p>

      <div class="content">{{{scriptContent.viewContent}}}</div>
    </div>

    <div class="script-menu">
      <ul class="dropdown-menu" v-bind:class="{ 'show': showMenu}">
        <li><a v-on:click="addTo('lvlOneLocation', false, 100)" href="#">主场景</a></li>
        <li><a v-on:click="addTo('lvlTwoLocation', false, 100)" href="#">次场景</a></li>
        <li><a v-on:click="addTo('lvlThreeLocation', false, 100)" href="#">三级场景</a></li>
        <li role="separator" class="divider"></li>
        <li><a v-on:click="addTo('leadingRoles', true, 400)" href="#">主要演员</a></li>
        <li><a v-on:click="addTo('guestRoles', true, 400)" href="#">特约演员</a></li>
        <li><a v-on:click="addTo('massesRoles', true, 400)" href="#">群众演员</a></li>
        <li role="separator" class="divider"></li>
        <li><a v-on:click="addTo('clothes', true, 1000)" href="#">服装</a></li>
        <li><a v-on:click="addTo('makeups', true, 1000)" href="#">化妆</a></li>
        <li><a v-on:click="addTo('commonProps', true, 1000)" href="#">道具</a></li>
        <li><a v-on:click="addTo('specialProps', true, 1000)" href="#">特殊道具</a></li>
        <li role="separator" class="divider"></li>
        <li><a v-on:click="addTo('mainContent', false, 0)" href="#">主要内容</a></li>
      </ul>
    </div>

  </div>
</template>

<script type="text/javascript">
  export default {
    data:function(){

      return {
        //选择菜单
        showMenu:false,
        //已选择的文本
        selectedTxt:'',
      }
    },
    props:{
      //剧本内容是否显示
      script:Boolean,
      //剧本内容
      scriptContent:Object,
      //场景内容
      scenario:Object
    },
    methods:{

      select:function (event) {

        this.selectedTxt = $.trim(window.getSelection().toString());

        if(this.selectedTxt != ''){
          var top = event.layerY + 160;
          var left = event.layerX + 620;

          var clientHeight = window.innerHeight;
          
          //355为script-menu的高度，35为弹出窗口距离浏览器顶部的高度
          if (top + 355 + 35 > clientHeight) {
            top = clientHeight - 355 - 35 - 20;
          }

          $(".script-menu").css("top", top).css("left", left);
          this.showMenu = true;
        }
      },
      addTo:function(field, isMultiSelect, top){
        if (!this.selectedTxt.trim()) {
          return false;
        }

        if (isMultiSelect) {
          //多选的情况
          if (this.scenario[field]) {
            //不能重复添加
            var fieldArray = this.scenario[field].split(",");
            if ($.inArray(this.selectedTxt, fieldArray) == -1) {
              this.scenario[field] += "," + this.selectedTxt;
            }
          } else {
            this.scenario[field] = this.selectedTxt;
          }
        } else {
          //单选的情况
          this.scenario[field] = this.selectedTxt;
        }

        this.showMenu = false;

        this.$dispatch("select", top);
      },
      close:function(){

        this.script = false;
      }
    },
    ready:function(){

      var self = this;

      $(window).mousedown(function(){

        self.showMenu = false;
      });

      $(".script-menu").mousedown(function(){

        return false;
      });
    }
  }
</script>