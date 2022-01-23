<template>
  <div>
    <the-header-bar />
    <main>
      <slot />
    </main>
  </div>
</template>

<script>
import TheHeaderBar from "./TheHeaderBar.vue";

export default {
  components: {
    TheHeaderBar,
  },
};
</script>

<style scoped>
main {
  height: calc(100vh - var(--navbar-height));
  padding: 10px 20px 0 20px;
  overflow-y: auto;
}
</style>
