<template>
  <header>
    <div class="headerbar-gradient" />
    <div class="headerbar-main flex">
      <h1 class="headerbar-title flex-grow-1 text-light text-truncate text-nowrap">
        {{ appName }}
      </h1>
      <the-link-bar />
    </div>
    <the-nav-bar />
  </header>
</template>

<script>
import TheLinkBar from "./TheLinkBar.vue";
import TheNavBar from "./TheNavBar.vue";

export default {
  components: {
    TheLinkBar,
    TheNavBar,
  },
  data() {
    return {
      appName: process.env.VUE_APP_NAME,
    }
  },
};
</script>

<style scoped>
.headerbar-gradient {
  height: 20px;
  background: rgb(159, 154, 240);
  background: linear-gradient(
    90deg,
    rgb(159, 154, 240) 0%,
    rgb(120, 120, 200) 28%,
    rgb(194, 167, 81) 100%
  );
}
.headerbar-main {
  padding: 20px;
}
.headerbar-title {
  font-size: 1.2rem;
  font-weight: bold;
}
</style>
