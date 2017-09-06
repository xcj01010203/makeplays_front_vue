<!-- 多选控件 -->
<style type="text/css">
  

</style>

<template>
  <div class="multi-select">
    <div class="input-group">
      <span class="input-group-addon">
        <input type="checkbox" v-model="checked">
      </span>
      <input @focus="showToSelectOpt" 
            @keyup="keyup($event)" 
            @click.stop="showToSelectOpt" 
            type="text" 
            class="form-control" 
            v-model="inputMsg" 
            placeholder="" 
            disabled="{{!checked}}">
      <span class="input-group-btn">
        <button @click="addOne(inputMsg)" class="btn btn-default" type="button" disabled="{{!checked}}" tabindex="-1">
          <span class="glyphicon glyphicon-plus"></span>
        </button>
      </span>
    </div>
    <div class="selected-opt" v-show="checked">
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
          class="list-group-item" :class="{selected: $index == selectedIndex}" 
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
      aimModel: null, //数据模型
      checked: Boolean, //复选框默认是否选中
      lgShow: { //是否显示大号的已选项
        type: Boolean,
        default: false
      }
    },
    methods: {
      showToSelectOpt: function() {
        this.showOpt = true;
        this.$dispatch("focus-select");
      },
      hideToSelectOpt: function() {
        this.showOpt = false;
      },
      addOne: function(value) {
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
        this.$dispatch("change");
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
          };
          return selectOptValues;
        },
        set: function(value) {
          if (value != null && value != "") {
            this.selectedOpt = value.split(",");
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