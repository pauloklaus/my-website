<template>
  <the-content>
  <router-view />
  </the-content>
</template>

<script>
import TheContent from "@/components/TheContent.vue";

export default {
  components: { TheContent },
};
</script>
