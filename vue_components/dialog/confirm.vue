<style type="text/css">

</style>

<template>
    <div class="modal fade" id="confirmModel" tabindex="-1" role="dialog" aria-labelledby="confirm">
      <div class="modal-dialog modal-sm" role="document" aria-hidden="true">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">提示</h4>
          </div>
          <div class="modal-body">
            {{ modalMessage }}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal" @click="confirmCallback">确定</button>
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script type="text/javascript">

  export default {
    props: {
      modalMessage: String,
      confirmCallback: Function
    }
  }
</script>