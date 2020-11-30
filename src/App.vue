<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
    name: 'App',
    mounted(){
      console.log(this.utils.toFixed(12.9999423424,2),"9999999")
    },
    methods:{
      
    }
}
</script>

<style lang="scss">
#app {
    height: 100%;
    > div {
        height: 100%;
    }
}
</style>
