<template>
  <div>
    {{ appName }}
  </div>
</template>

<script>
export default {
  computed: {
    appName() {
      return process.env.VUE_APP_NAME;
    },
  }
}
</script>

<style scoped>
div {
  background-color: #003;
  color: #666;
  font-size: 3rem;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
