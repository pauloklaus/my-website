<template>
  <div>
    <b-button class="mr-2 mb-2" variant="primary" @click="startProcess" :disabled="processRunning">Start a process</b-button>
    <b-button class="mr-2 mb-2" variant="danger" @click="stopProcess" :disabled="!processRunning">Stop now!</b-button>
    <b-button class="mr-2 mb-2" variant="warning" @click="startEphemeral">Notify</b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      processRunning: false,
    }
  },
  created() {
    this.$eventbus.$on("message", message => {
      this.processRunning = (message !== "");
    });
  },
  methods: {
    startProcess() {
      this.$eventbus.$emit("message", "Wait a moment...");
    },
    stopProcess() {
      this.$eventbus.$emit("message", "");
    },
    startEphemeral() {
      this.$eventbus.$emit("ephemeral", "I'm an ephemeral notification.");

      setTimeout(() => {
          this.stopEphemeral();
      }, 3000);
    },
    stopEphemeral() {
      this.$eventbus.$emit("ephemeral", "");
    }
  },
  beforeDestroy() {
    this.stopProcess();
    this.stopEphemeral();
  }
}
</script>
