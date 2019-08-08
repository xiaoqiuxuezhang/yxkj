<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    
  },
   data() {
    return {
     show3: true
    };
  },
};
</script>

<style lang="less">
html,body{
  height: 100%;
   font-family: PingFangSC-Medium;
}
#app {
 
  min-width: 1280px;
  height: 100%;
}

</style>
