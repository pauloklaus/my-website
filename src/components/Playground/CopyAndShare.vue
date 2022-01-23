<template>
  <div>
    <p><my-copy-and-share label="Copy:" :text="text" @copied="notify" /></p>
    <p><my-copy-and-share label="Copy or browse to:" text="https://github.com" @copied="notify" browseButton /></p>
    <p>{{ copied }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "Copy the number " + Math.random().toString().substring(2,6),
      copied: "",
    }
  },
  methods: {
    notify() {
      this.copied = "Text copied!";

      setTimeout(() => {
        this.text = "Now copy the number " + Math.random().toString().substring(2,6);
        this.copied = "";
      }, 2000);
    }
  },
}
</script>
