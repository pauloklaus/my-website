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
  setup() {},
};
</script>

<style scoped>
main {
  padding: 20px;
}
</style>
