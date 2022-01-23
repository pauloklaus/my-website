<template>
  <div class="linkbar-items text-nowrap">
    <a
      v-for="link in links"
      :key="link.image"
      :href="link.url"
      :title="link.title"
      :aria-label="link.title"
    >
      <repository-image :src="`social/${link.image}.png`" />
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          title: "linkedin",
          image: "linkedin",
          url: `https://linkedin.com/in/${process.env.VUE_APP_LINKEDIN}`,
        },
        {
          title: "github",
          image: "github",
          url: `https://github.com/${process.env.VUE_APP_GITHUB}`,
        },
        {
          title: "twitter",
          image: "twitter",
          url: `https://twitter.com/${process.env.VUE_APP_TWITTER}`,
        },
        {
          title: "npmjs",
          image: "npmjs",
          url: `https://npmjs.com/~${process.env.VUE_APP_NPMJS}`,
        },
        {
          title: "docker hub",
          image: "docker",
          url: `https://hub.docker.com/u/${process.env.VUE_APP_DOCKERHUB}`,
        },
        {
          title: "mail",
          image: "mail",
          url: `mailto:${process.env.VUE_APP_EMAIL}`,
        },
      ],
    };
  },
};
</script>

<style scoped>
.linkbar-items a {
  padding-left: 6px;
}
.linkbar-items a img {
  height: 20px;
  margin-left: 4px;
}
</style>
