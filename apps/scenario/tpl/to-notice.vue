<!-- 
 * 添加到通告单 
 *
 * @author: subin
-->

<style type="text/css">
</style>

<template>

  <div class="popup-tpl ui popup">

    <div class="modal-header">
      <button type="button" class="close close-popup"><span aria-hidden="true">&times;</span></button>
      <h4 class="modal-title">添加到通告单<small> - 通告单可以做成日历形式</small></h4>
    </div>

    <div class="modal-body" style="height:300px;overflow: auto;">
      <div class="new">

        <form class="form-horizontal">
          <div class="form-group">
            <label for="" class="col-sm-3 control-label">通告单名称</label>
            <div class="col-sm-6">
              <input type="text" class="form-control" id="" placeholder="按照日期分组自动生成">
            </div>
          </div>

          <div class="form-group">
            <label for="" class="col-sm-3 control-label">日期</label>
            <div class="col-sm-6">
              <input type="text" class="form-control" id="" placeholder="">
            </div>
          </div>

          <div class="form-group">
            <label for="" class="col-sm-3 control-label">分组</label>
            <div class="col-sm-6">
              <input type="text" class="form-control" id="" placeholder="">
            </div>
          </div>
        </form>
      </div>

      <div class="select" style="display: none;">
        
        <table class="table table-hover">
          <thead>
            <tr>
              <td>通告单名称</td>
              <td>时间</td>
              <td>分组</td>
              <td>状态</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2015年10月20日单组通告</td>
              <td>2015-09-22</td>
              <td>单组</td>
              <td>未销场</td>
            </tr>
            <tr>
              <td>2015年07月22日A组通告</td>
              <td>2015-09-22</td>
              <td>单组</td>
              <td>未销场</td>
            </tr>
            <tr>
              <td>2015年09月22日单组通告</td>
              <td>2015-09-22</td>
              <td>C组</td>
              <td>未销场</td>
            </tr>
            <tr>
              <td>2015年10月20日单组通告</td>
              <td>2015-09-22</td>
              <td>单组</td>
              <td>未销场</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="modal-footer">
      
      <div style="display: inline;float: left;">
        <input name="noticeSwitch" type="checkbox" checked />
      </div>

      <button type="button" class="btn btn-primary btn-sm">确定</button>
      <button type="button" class="btn btn-default close-popup btn-sm">取消</button>
    </div>
  </div>
</template>

<script type="text/javascript">

  export default {

    ready:function(){

      //[PLUGIN] 新建/选择通告单 拍摄计划切换
      $("input[name='noticeSwitch']").bootstrapSwitch({
        size:'small',
        onColor:'default',
        onText:'选择',
        offText:'新建',
        labelWidth:'0'
      }).on('switchChange.bootstrapSwitch', function(event, state) {

        var _new = $(this).parents('.popup-tpl').find(".new");
        var _selected = $(this).parents('.popup-tpl').find(".select");

        if(state){
          _selected.hide();
          _new.fadeIn();
        }else{

          _new.hide();
          _selected.fadeIn();
        }
      });
    }
  }
</script>