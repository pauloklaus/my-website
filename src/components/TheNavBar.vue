<template>
  <div class="navbar-tabs text-nowrap">
    <router-link v-for="tab in tabs" :key="tab" :to="{ name: tab }">{{ tab }}</router-link>
  </div>
</template>

<script>
export default {
  setup() {
    const tabs = ["webshell", "playground"];

    return {
      tabs,
    };
  },
};
</script>

<style scoped>
.navbar-tabs {
  overflow-x: auto;
  border-bottom: 3px solid var(--white-color);
  padding: 0 20px;
}
.navbar-tabs a {
  text-decoration: none;
  background-color: var(--light-color);
  color: var(--bg-color);
  margin-right: 10px;
  padding: 10px;
}
.navbar-tabs .router-link-exact-active {
  background-color: var(--white-color);
}
</style>
