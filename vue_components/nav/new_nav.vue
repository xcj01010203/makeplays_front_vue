<style>
  .navbar{height: 84px;}
  .navbar-top{
    height: 52px;
    background-color: #045485;
  }
  .navbar-menu-nav{
    height:52px;
    margin-bottom: 0px;
    float: left;
    -webkit-padding-start: 85px;
  }
  .navbar-menu-nav li,.navbar-menu-nav a{
    width: 130px;
    height: 52px;
    padding-top: 0px;
    list-style:none;
    text-align:center;
    float:left;
    cursor:pointer;
    font-size:20px;
    color:#f6f6f6;
    line-height:52px;
    font-family: "微软雅黑";
  }
  .navbar-menu-nav a{
    text-decoration: none;
  }
  .navbar-menu-nav li:hover,li.main-li-current{
    background-color:#0277bd;
    background-image:url(/makeplays/imgs/hover.png);
    background-position:bottom;
    background-repeat:no-repeat;
  }
  .secondary-nav-ul{height: 32px;-webkit-padding-start: 0px;}
  .secondary-nav-ul a.menu-a{
    color:#f6f6f6;
    font-size:14px;
    text-decoration: none;
    font-family: "微软雅黑";
  }
  .secondary-nav-ul li{
    list-style:none;
    text-align:center;
    float:left;
    width:8%;
    min-width:100px;
    line-height:24px;
    margin-top:4px;
    box-shadow: 1px 0px 0px #11699E,inset -1px 0px 0px #0C88D2;
  }
  .secondary-nav-ul li:hover a,.sec-li-current,.secondary-nav-ul a.menu-a-hover{
    color:#ff7043;
    font-size:14px;
    text-decoration: none;
  }
  .navbar-bottom{
    height: 32px;
    width: 100%;
    background-color: #0277bd;
  }
  .navbar-brand{padding: 0px;}
  .navbar>.container-fluid .navbar-brand{margin-left: -40px;}
  .nav-crew{margin-top: 9px;}
  .nav-crew>li{float: left;}
  .nav-crew>li>a:hover{background-color: #045485; }
  .nav-crew>li>a{font-size: 16px;text-decoration: none;color: white;font-family: "微软雅黑";}
  .nav-crew .open>a,.nav-crew .open>a:hover,.nav-crew .open>a:focus{background-color: #045485;}
</style>
<template>

  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container-fluid navbar-top">
      
      <div class="navbar-header">

        <a class="navbar-brand" href="/makeplays/apps/home/index.html">
          <img src="/makeplays/imgs/logo.png" style="height: 50px">
        </a>
      </div>

      <div id="navbar" class="">
        <ul class="navbar-menu-nav" id="tabMenuList">
          <li><a href="/index">首页</a></li>
          <!--<li class="main-li-current">拍摄管理</li>
          <li>费用管理</li>
          <li>进度表</li>-->
          <li class="" v-for="one in menuList" v-on:click.stop="menuHeader" index="{{$index}}" >
            {{one.text}}
          </li>
        </ul>

         <ul class="nav nav-crew navbar-right">
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" id="crew-name-list" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{crewName}}<span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li v-for="one in crewList"><a href="/userManager/changeCrew?crewId={{one.crewId}}">{{one.crewName}}</a></li>
              <!-- <li><a href="#">西游记</a></li>
              <li><a href="#">三国演义</a></li>
              <li><a href="#">红楼梦</a></li> -->
            </ul>
          </li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" id="user-info-list" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span class="glyphicon glyphicon-user" aria-hidden="true"></span><span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#">个人中心</a></li>
              <li><a href="#">消息</a></li>
              <li><a href="#">通联表</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="/logout">退出</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class="navbar-bottom">
      <!--<ul class="secondary-nav-ul">
        <li>剧本分析</li>
        <li>场景表</li>
        <li class="sec-li-current">计划</li>
        <li>角色表</li>
        <li>通告单</li>
        <li>日志</li>
        <li>剧组设置</li>
      </ul>-->
      <ul v-for="one in menuList" class="secondary-nav-ul" style="display: none;">
        <li v-for="two in one.childList" name="{{two.value}}"><a href="{{two.value}}" class="menu-a" >{{two.text}}</a></li>
      </ul>
    </div>
  </nav>

</template>

<script type="text/javascript">

  export default {

    props:{
      active:String,

    },

    created:function(){
      this.getMenuList();
    },

    data:function(){
      return{
        menuList:[],
        crewList:'',
        crewName:'',
        userName:''
      }
    },

    methods:{
      getMenuList:function(){
        var _this = this;
        $.ajax({
          url:"/authority/getUserMenuList",
          dateType:"json",
          type:"get",
          success:function(data){
            /*if(typeof(data) != "object"){
              window.location.href="/crewManager/crewList";
              return;
            }*/
            _this.menuList=data.menu;
            _this.crewList=data.crew;
            _this.crewName=data.crewInfo.crewName;
            _this.userName=data.user.realName;

            _this.$nextTick(function(){
              var currentUrl=window.location.pathname;
              currentUrl = currentUrl.replace(/\/+/g,"/");
              var target = $("li[name='"+currentUrl+"']");
              target.find("a").addClass('menu-a-hover');
              var ind = parseInt(target.parent().show().index())+1;
              $("#tabMenuList li:eq("+ind+")").addClass("main-li-current");
            })
          }
        });
      },
      menuHeader:function(event){
        var index = event.target.attributes.index.value;
        var ind = parseInt(index)+1;
        var target = $("#tabMenuList li:eq("+ind+")");
        if(!target.hasClass("main-li-current")){          
          target.addClass("main-li-current").siblings().removeClass("main-li-current");
          $(".navbar-bottom").find("ul:eq("+index+")").show().siblings().hide();
        }        
      }
    },
    
    ready:function(){
       //alert(window.location.pathname)
       $("#crew-name-list,#user-info-list").on("mouseover", function() {
          if ($(this).parent().is(".open")) {
              return
          }

          $(this).dropdown("toggle")
       })
    }
  }

</script>