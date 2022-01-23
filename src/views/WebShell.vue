<template>
  <vue-webshell
    :title="title"
    :projectUrl="projectUrl"
    :queryIpUrl="queryIpUrl"
    :dockerhubProfile="dockerhubProfile"
    :githubProfile="githubProfile"
    :linkedinProfile="linkedinProfile"
    :npmjsProfile="npmjsProfile"
    :twitterProfile="twitterProfile"
  />
</template>

<script>
export default {
  data() {
    return {
      title: process.env.VUE_APP_WEBSHELL,
      projectUrl: process.env.VUE_APP_WEBSHELLPROJECTURL,
      queryIpUrl: process.env.VUE_APP_GETIPADDRESS,
      dockerhubProfile: process.env.VUE_APP_DOCKERHUB,
      githubProfile: process.env.VUE_APP_GITHUB,
      linkedinProfile: process.env.VUE_APP_LINKEDIN,
      npmjsProfile: process.env.VUE_APP_NPMJS,
      twitterProfile: process.env.VUE_APP_TWITTER,
    }
  }
}
</script>
