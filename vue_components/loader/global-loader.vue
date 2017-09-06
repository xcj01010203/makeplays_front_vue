<style type="text/css">
  
</style>

<template>

  <div class="modal-backdrop fade in" v-bind:class="{ 'hidden': !loader }">
  </div>
</template>

<script type="text/javascript">

  export default {

    props:{
      loader:Boolean
    }
  }
</script>