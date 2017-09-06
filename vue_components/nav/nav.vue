<template>

  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container-fluid">

      <div class="navbar-header">

        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
          <span class="sr-only"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>

        <a class="navbar-brand" href="/makeplays/apps/home/index.html">
          小土科技
        </a>
      </div>

      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav">

          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              拍摄管理 <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">

              <li name="script"><a href="/makeplays/apps/script/index.html">剧本分析</a></li>
              <li name="scenario"><a href="/makeplays/apps/scenario/index.html">场景表</a></li>
              <li name="notice"><a href="/makeplays/apps/notice/index.html">通告单</a></li>
              <li class="divider"></li>
              <li name="plan"><a href="/makeplays/apps/plan/index.html">计划</a></li>
              <li name="role"><a href="/makeplays/apps/role/index.html">角色表</a></li>
              <li name="record"><a href="/makeplays/apps/record/index.html">拍摄记录</a></li>
              <li class="divider"></li>
              <li name="crew-setup"><a href="/makeplays/apps/crew-setup/index.html">设置</a></li>
            </ul>
          </li>

          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              费用管理 <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li name="budget"><a href="/makeplays/apps/budget/index.html">费用预算</a></li>
              <li name="contract"><a href="/makeplays/apps/contract/index.html">合同管理</a></li>
              <li name="invoice"><a href="/makeplays/apps/invoice/index.html">收支管理</a></li>
              <li class="divider"></li>
              <li name="journal"><a href="/makeplays/apps/journal/index.html">财务详情</a></li>
              <li name="balance"><a href="/makeplays/apps/balance/index.html">费用结算</a></li>
              <li name="loan"><a href="/makeplays/apps/loan/index.html">借款详情</a></li>
              <li class="divider"></li>
              <li name="cost-setup"><a href="/makeplays/apps/cost-setup/index.html">设置</a></li>
            </ul>
          </li>

          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              进度表 <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li name="production-schedule"><a href="/makeplays/apps/production-schedule/index.html">生产进度</a></li>
              <li name="shoot-location"><a href="/makeplays/apps/shoot-location/index.html">拍摄地点</a></li>
              <li name="cost-schedule"><a href="/makeplays/apps/cost-schedule/index.html">费用进度</a></li>
            </ul>
          </li>

          <li><a href="#">帮助</a></li>
        </ul>

         <ul class="nav navbar-nav navbar-right">
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">好妻子<span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#">水浒传</a></li>
              <li><a href="#">西游记</a></li>
              <li><a href="#">三国演义</a></li>
              <li><a href="#">红楼梦</a></li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <span class="glyphicon glyphicon-user"></span><span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li><a href="#">个人中心</a></li>
              <li><a href="#">消息</a></li>
              <li><a href="#">通联表</a></li>
              <li class="divider"></li>
              <li><a href="#">退出</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<script type="text/javascript">

  export default {

    props:{
      active:String
    },
    ready:function(){

      var target = $("li[name='"+this.active+"']");

      target.addClass('active');
      target.parent().parent().addClass('active');
    }
  }
</script>