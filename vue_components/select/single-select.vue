<!-- 单选控件 -->
<style type="text/css">
.single-select .list-group {
  position: absolute;
  z-index: 10;
  max-height: 300px;
  width: calc(100% - 30px);
  overflow: auto;
  border: 1px solid #66afe9;
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);
          box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);

}
.single-select .list-group .list-group-item{
  border-left: none;
  border-right: none;
}
.single-select .list-group .list-group-item:first-child{
  border-top: none;
}
.single-select .list-group .list-group-item:last-child{
  border-bottom: none;
}
.single-select .selected{
  color: #555;
  text-decoration: none;
  background-color: #f5f5f5;
}
</style>

<template>
  <div class="single-select">
    <input @focus="showToSelectOpt" 
      @click.stop="showToSelectOpt" 
      @keyup="keyup($event)" 
      type="text" class="form-control" v-model="aimModel" placeholder="" disabled="{{disabled}}">
    <div v-show="showOpt && copyToSelectOpt.length > 0" class="list-group">
      <a href="javascript:void(0)" 
        @click="selectOne(one.name, $index)" 
        class="list-group-item" :class="{selected: aimModel == one.name}"
        v-for="one in copyToSelectOpt" 
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
        showOpt: false,
        selectedIndex: -1,  //已选中的项下标
        copyToSelectOpt: [], //该页面需要展示的下拉数据
        executeSearch: false,  //是否执行搜索功能
        needRefresh: true //是否需要刷新下拉列表
      }
    },
    props: {
      toSelectOpt: Array, //父组件传递过来的下拉数据
      aimModel: null, //对应的数据model
      disabled: Boolean //是否禁用组件
    },
    methods: {
      showToSelectOpt: function() {
        this.showOpt = true;
        this.$dispatch("focus-select");

        this.getToSelectOpt();
      },
      hideToSelectOpt: function() {
        this.showOpt = false;
      },
      selectOne: function(value, index) {
        this.aimModel = value;
        this.showOpt = false;

        this.selectedIndex = index;
        this.needRefresh = false;

        this.$el.children[0].focus();
      },
      keyup: function(event) {
        var key = event.keyCode;

        if (key != 38 && key != 40 && key != 13) {
          this.executeSearch = true;
          this.needRefresh = true;

          this.getToSelectOpt();

          //如果搜索出来的结果中第一个元素值等于用户输入值，默认选中第一个
          if (this.copyToSelectOpt.length > 0 && this.aimModel == this.copyToSelectOpt[0].name) {
            this.selectedIndex = 0;
          } else {
            this.selectedIndex = -1;
          }

        } 
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

          this.aimModel = this.copyToSelectOpt[this.selectedIndex].name;
        }

        //回车键
        if (key == 13) {
          this.showOpt = false;
        }
      },
      getToSelectOpt: function() {
        //之所以不用计算属性，是因为计算属性无法体现needRerefresh值的变化
        if (this.needRefresh) {
          this.copyToSelectOpt = new Array();

          for (var i = 0; i < this.toSelectOpt.length; i++) {
            var name = this.toSelectOpt[i].name;
            if (this.executeSearch && name.search(this.aimModel.trim()) != -1) {
              this.copyToSelectOpt.push(this.toSelectOpt[i]);
            }
            if (!this.executeSearch) {
              this.copyToSelectOpt.push(this.toSelectOpt[i]);
            }
          }
        }
      },
      scroll: function(index) {
        index = index + 1;
        var scrollTop = this.$el.children[1].scrollTop;
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
    computed: {

    },
    ready: function() {
      $(".single-select .list-group").scrollUnique();
    }
  }
</script>