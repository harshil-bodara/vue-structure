<template>
  <div class="Layout">
    <Sidebar />
    <router-view></router-view>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";

export default {
  components: {
    Sidebar,
  },
};
</script>
<style scoped>
.Layout {
  height: 100vh;
  display: flex;
}
</style>
