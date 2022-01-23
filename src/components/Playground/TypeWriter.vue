<template>
  <div>
    <p><my-type-writer text="What do you want to do today?" /></p>
    <p><b-button @click="typeLaunchNext">Launch next...</b-button></p>
    <p><my-type-writer :text="explore" v-if="playExplore" @finished="playSlow = true" /></p>
    <p><my-type-writer text="And finally, a tired dev." v-if="playSlow" :timeout="200" /></p>
  </div>
</template>

<script>
export default {
  data() {
    return {            
      explore: "How about exploring the world of programming?",
      playExplore: false,
      playSlow: false,
    }
  },
  methods: {
    typeLaunchNext() {
      this.playExplore = false;
      this.playSlow = false;

      setTimeout(() => {
        this.playExplore = true;
      }, 500);
    },
  },
}
</script>
