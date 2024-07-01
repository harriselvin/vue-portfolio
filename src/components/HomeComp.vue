<template>
  <div id="home">
    <h4>Home Component</h4>
    <spinner-comp/>
  </div>
</template>

<script>
import SpinnerComp from '@/components/SpinnerComp.vue'

export default {
  components: {
    SpinnerComp
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #home {
    min-height: 100vh;
  }
</style>
