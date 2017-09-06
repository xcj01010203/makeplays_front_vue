<style type="text/css">

  .pagination{

    margin: 10px 0;
  }

  .pagination>li>a{

    margin-right: 8px;
  }

  .pagination>li:last-child>a{
    margin-right: 0px;
  }

  .pagination>li>span{

    margin-right: 8px;
    border:none;
  }

  .specifyPage {
    
  }
  .mypagin>li>span:hover{
    background-color: white;
    color: #337ab7;
  }
  .specifyPage input{
    width:24px;
    margin-left: 5px;
    margin-right: 5px;
    line-height: 1;
  }

</style>

<template>
  <nav>

    <!-- 自定义统计内容 -->
    <slot></slot>
    
    <ul class="pagination pagination-sm pull-right mypagin">
      
      <!-- 是否上一页可以点 -->
      <li v-bind:class="{ 'disabled': page.pagenum == 0 }">
        <a href="javascript:void(0);" aria-label="Previous" v-on:click="pre">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>

      <li v-bind:class="{ 'active': page.pagenum == 0 }">
        <a href="javascript:void(0);" v-on:click="go(0)">1</a>
      </li>

      <template v-if="preMore">
        <li>
          <span>...</span>
        </li>
      </template>

      <template v-for="n in totalPages">
        <li v-if="n!=0 && n!=(totalPages-1)" 
          v-bind:class="{ 'active': n == page.pagenum, 'hidden': page.pagenum < 5 ?  (n > 6)  : 
            ((totalPages - page.pagenum) < 6) ? (n < (totalPages - 7)) : ((page.pagenum - n) > 2 || (n - page.pagenum) > 2) }">
          <a href="javascript:void(0);" v-on:click="go(n)">{{n + 1}}</a>
        </li>
      </template>

      <template v-if="nextMore">
        <li>
          <span>...</span>
        </li>
      </template>

      <li v-bind:class="{ 'active': page.pagenum == (totalPages-1) }" v-if="totalPages != 1">
        <a href="javascript:void(0);" v-on:click="go(totalPages - 1)">{{totalPages}}</a>
      </li>

      <!-- 是否下一页可以点 -->
      <li v-bind:class="{ 'disabled': (page.pagenum+1) == totalPages }">
        <a href="javascript:void(0);" aria-label="Next" v-on:click="next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>

      <li class="specifyPage">
        <span>
          共{{totalPages}}页&nbsp;&nbsp;
          到第<input v-on:keyup="checkPageNum()" v-on:keyup.enter="go(currPageNum-1)" v-model="currPageNum">页
        </span>
        <a href="javascript:void(0);" v-on:click="go(currPageNum-1)">GO</a>
      </li>
    </ul>
  </nav>

</template>

<script type="text/javascript">
  
  //问题是现在所有请求的页数是否是从0开始的
  export default {
    data: function() {
      return {
        currPageNum: 1
      }
    },
    
    props:{
      page:Object
    },
    computed:{
      totalPages:function() {
        var result = Math.ceil(this.page.total / this.page.pagesize);
        if (result == 0) {
          result = 1;
        }
        return result;
      },
      preMore:function(){
        return (this.totalPages > 9 && this.page.pagenum > 4)
      },
      nextMore:function(){
        return (this.totalPages > 9 && (this.totalPages - this.page.pagenum) > 5)
      }
    },
    methods: {
      go: function (num) {

        if(this.page.pagenum != num){
          this.page.pagenum  = num;
          this.currPageNum = this.page.pagenum + 1;
          this.dispatch();
        }
      },
      pre:function(){

        if(this.page.pagenum != 0){
          this.page.pagenum--;
          this.currPageNum = this.page.pagenum + 1;
          this.dispatch();
        }
      },
      next:function(){

        if((this.page.pagenum +1) != this.totalPages){
          this.page.pagenum++;
          this.currPageNum = this.page.pagenum + 1;
          this.dispatch();
        }
      },
      dispatch:function(){
        
        this.$dispatch('paging');
      },
      checkPageNum: function() {
        if (this.currPageNum == "") {
          return null;
        }
        if (this.currPageNum < 1) {
          this.currPageNum = 1;
        }
        if (this.currPageNum > this.totalPages) {
          this.currPageNum = this.totalPages;
        }
      }
    }
  }

</script>