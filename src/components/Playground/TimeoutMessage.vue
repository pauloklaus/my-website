<template>
  <div class="d-flex flex-wrap">
    <div class="mr-2 mb-2">
      <b-button @click="showAgain" :disabled="message !== ''">Show again</b-button>
    </div>
    <my-timeout-message v-model="message" timeout="20" barClass="bg-danger" textClass="text-danger" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Test message at " + (new Date).toLocaleString(),
    }
  },
  methods: {
    showAgain() {
      this.message = "Another message at " + (new Date).toLocaleString();
    },
  },
}
</script>
