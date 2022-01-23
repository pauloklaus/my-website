<template>
  <nav class="text-nowrap">
    <router-link v-for="tab in tabs" :key="tab" :to="{ name: tab }">/{{ tab }}</router-link>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      tabs: ["webshell", "playground"],
    }
  },
};
</script>

<style scoped>
nav {
  overflow-x: auto;
  border-bottom: 3px solid var(--white-color);
  padding: 0 20px;
  margin-bottom: 5px;
}
nav a {
  text-decoration: none;
  background-color: var(--light-color);
  color: var(--bg-color);
  margin-right: 10px;
  padding: 15px;
}
nav .router-link-exact-active {
  background-color: var(--white-color);
}
</style>
