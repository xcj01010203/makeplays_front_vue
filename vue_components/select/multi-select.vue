<!-- 多选控件 -->
<style type="text/css">

  .multi-select .list-group {
    position: absolute;
    z-index: 10;
    max-height: 300px;
    width: calc(100% - 30px);
    overflow: auto;
    border: 1px solid #66afe9;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);
            box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);
  }

  .multi-select .list-group .list-group-item{
    border-left: none;
    border-right: none;
  }

  .multi-select .list-group .list-group-item:first-child{
    border-top: none;
  }

  .multi-select .list-group .list-group-item:last-child{
    border-bottom: none;
  }

  .selected-opt .selected-item-container{
    padding: 0px 0px;
    margin-bottom: 0px;
  }

  .selected-opt .selected-item{

    border: 1px solid #DDD;
    padding: 2px 28px 2px 5px;
    position: relative;
    background-color: #F9FAFB;
    /*width: 118px;*/
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .selected-opt .selected-item span{

    right: 1px;
    position: absolute;
    opacity: 0.5;
    color: black;
    font-size: 13px;
    top: 5px;
  }
  .selected-opt .lg-selected-item{
    /*width: 100%;*/
  }

  .selected-opt .list-inline li{
    margin-top: 4px;
  }

  .selected-opt .list-inline li a:hover{
    text-decoration: none;
  }
  .multi-select .selected{
    color: #555;
    text-decoration: none;
    background-color: #f5f5f5;
  }
</style>

<template>
  <div class="multi-select">
    <div class="input-group">
      <input @focus="showToSelectOpt" 
            @click.stop="showToSelectOpt"
            @keyup="keyup($event)" 
            type="text" 
            class="form-control" 
            v-model="inputMsg" 
            placeholder="" 
            disabled="{{disabled}}">
      <span class="input-group-btn">
        <button @click="addOne(inputMsg)" class="btn btn-default" type="button" disabled="{{disabled}}" tabindex="-1">
          <span class="glyphicon glyphicon-plus"></span>
        </button>
      </span>
    </div>
    <div class="selected-opt" v-show="!disabled">
      <ul class="list-inline pull-left selected-item-container">
        <li v-for="one in selectedOpt" track-by="$index" title="{{one}}">
          <a class="selected-item" :class="{'lg-selected-item': lgShow}" href="#" @click.stop="remove(one)" tabindex="-1">
            {{ one }}
            <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
          </a>
        </li>
      </ul>
    </div>
    <div v-show="showOpt && copyToSelectOpt != ''" class="list-group">
      <a href="javascript:void(0)" 
          class="list-group-item" :class="{'selected': $index == selectedIndex}"
          v-for="one in copyToSelectOpt" 
          @click="addOne(one.name, $event)" 
          value="{{one.name}}" 
          tabindex="-1">
        {{one.name}}
      </a>
    </div>
  </div>
</template>

<script type="text/javascript">

  export default {
    
    data:function(){
      return {
        showOpt: false, //是否显示下拉面板
        inputMsg: "", //文本框中的值
        selectedOpt: [], //已选中的值
        selectedIndex: -1,  //获取焦点的下拉值
        copyToSelectOpt: [] //该页面需要展示的下拉数据
      }
    },
    props: {
      toSelectOpt: Array, //父组件传递过来的下拉数据
      aimModel: null, //数据model
      disabled: Boolean,  //是否禁用组件
      lgShow: { //是否显示大号的已选项
        type: Boolean,
        default: false
      }
    },
    methods: {
      showToSelectOpt: function(event) {
        debugger;
        this.showOpt = true;
        this.$dispatch("focus-select");
      },
      hideToSelectOpt: function() {
        this.showOpt = false;
      },
      addOne: function(value, event) {
        this.inputMsg = "";
        this.showOpt = false;

        if (value.trim() && $.inArray(value, this.selectedOpt) == -1) {
          this.selectedOpt.push(value.trim());
        }

        this.selectedIndex = -1;

        if (event != undefined) {
          event.stopPropagation();
        }
        
        // this.$el.children[0].children[0].focus();
        

        this.$dispatch("change");
      },
      remove: function(value) {
        this.selectedOpt.$remove(value);

        this.$dispatch("change"); //所选值改变监听事件
      },
      keyup: function(event) {
        var key = event.keyCode;

        //如果不是上下键、回车键，则执行搜索操作
        if (key != 38 && key != 40 && key != 13) {
          //如果搜索出来的结果中第一个元素值等于用户输入值，默认选中第一个
          if (this.copyToSelectOpt.length > 0 && this.inputMsg == this.copyToSelectOpt[0].name) {
            this.selectedIndex = 0;
          } else {
            this.selectedIndex = -1;
          }
          this.showOpt = true;
        }

        //方向上下键执行选择操作
        if (key == 38 || key == 40) {
          var length = this.copyToSelectOpt.length;

          //方向键向上
          if (key == 38) {
            if (this.selectedIndex > 0) {
              this.selectedIndex --;
            }
          }

          //方向键向下
          if (key == 40) {
            if (this.selectedIndex < length - 1) {
              this.selectedIndex ++;
            }
          }

          this.scroll(this.selectedIndex);
        }

        //回车键
        if (key == 13) {
          this.showOpt = false;
          if (this.selectedIndex != -1) {
            this.addOne(this.copyToSelectOpt[this.selectedIndex].name);
          } else {
            this.addOne(this.inputMsg);
          }
        }
      },
      scroll: function(index) {
        index = index + 1;
        var scrollTop = this.$el.children[2].scrollTop;
        if (scrollTop + 300 < index * 40) {
          $(".list-group").animate({scrollTop: (index - 7) * 40 +'px'}, 100);
        }
        if ((scrollTop + 80) > index * 40) {
          $(".list-group").animate({scrollTop: (index - 2) * 40 +'px'}, 100);
        }
      }
    },
    events: {
      //父组件的点击事件
      click: function() {
        this.hideToSelectOpt();
      }
    },
    ready: function() {
      $(".multi-select .list-group").scrollUnique();
    },
    computed: {
      aimModel : {
        cache: false,
        get: function() {
          var selectOptValues = "";
          for (var i = 0; i < this.selectedOpt.length ; i++) {
            if (i == 0) {
              selectOptValues += this.selectedOpt[i];
            } else {
              selectOptValues += "," + this.selectedOpt[i];
            }
          }
          return selectOptValues;
        },
        set: function(value) {
          if (value != null && value != "") {
            this.selectedOpt = value.split(",");
          } else {
            this.selectedOpt = new Array();
          }
        }
      },
      copyToSelectOpt: function() {
        var result = new Array();

        for (var i = 0; i < this.toSelectOpt.length; i++) {
          var name = this.toSelectOpt[i].name;
          if (name.search(this.inputMsg.trim()) != -1 && $.inArray(name, this.selectedOpt) == -1) {
            result.push(this.toSelectOpt[i]);
          }
        }

        return result;
      }
    }
  }
</script>