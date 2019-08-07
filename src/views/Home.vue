<template>
  <div class="home">
      <webContainer></webContainer> 
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import webContainer from '@/components/Container.vue';
export default {
  name: "home",
  components: {
    webContainer
  },
  data() {
    return {
      show3: true
    };
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
@deep: ~">>>";
.home{
  height: 100%;
}
</style>
