<template>
  <div class="sidebar">
    <div class="sidebar__item">
      <div class="sidebar__item--top">
        <router-link to="/">Inbox (3)</router-link>
        <router-link to="/#">Archive (3)</router-link>
      </div>
      <div class="sidebar__item--top">
        <a href="">Logout</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.sidebar {
  width: 250px;
}
.sidebar__item {
  height: calc(100% - 30px);
  box-shadow: 0 1px 10px #ddd;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 15px;
}
.sidebar__item--top a {
  display: block;
  width: 75%;
  margin: 15px auto;
  padding: 5px 10px;
  text-decoration: none;
  color: #000;
  border-radius: 4px;
  background-color: #fff;
}
</style>
