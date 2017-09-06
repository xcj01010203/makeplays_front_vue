<style type="text/css">
  
  .table-modal-backdrop {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1040;
    background-color: #FFF;
  }

  .table-modal-backdrop.in {
    opacity: 0.5;
  }

</style>

<template>

  <div class="table-modal-backdrop fade in" v-bind:class="{ 'hidden': !loader }">
    <div class="ui inverted dimmer">
      <div class="ui large loader"></div>
    </div>
  </div>

</template>

<script type="text/javascript">

  export default {

    props:{
      loader:Boolean
    }
  }
</script>