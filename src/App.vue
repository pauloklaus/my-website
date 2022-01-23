<template>
  <div>
    <the-content>
      <router-view />
    </the-content>

    <my-notify-message :message="message" class="notify-bg bg-primary text-white p-2" position="bottom-left">
      <b-spinner small />
    </my-notify-message>

    <my-notify-message :message="ephemeral" class="notify-bg bg-warning p-2" position="top-right">
      <b-spinner small />
    </my-notify-message>
  </div>
</template>

<script>
import TheContent from "@/components/TheContent.vue";

export default {
  components: { TheContent },
  data() {
    return {
      message: "",
      ephemeral: "",
    }
  },
  created() {
    this.$eventbus.$on("message", (message) => {
      this.message = message;
    });

    this.$eventbus.$on("ephemeral", (ephemeral) => {
      this.ephemeral = ephemeral;
    });
  },
};
</script>
