<template>
  <div>
    <my-button-menu class="my-2" @click="click1" />
    <my-button-menu v-if="visible" class="my-2" :buttons="list" @click="click2" />

    Selected: <pre class="text-white">{{ selected }}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      visible: false,
      list: [
        { description: "Go!", variant: "light", myCustomProperty: "123" },
        { description: "Stop?", variant: "danger", myCustomProperty: "456", anotherProperty: "789" },
      ],
    }
  },
  methods: {
    click1(button) {
      this.selected = button;
      this.visible = true;
    },
    click2(button) {
      this.selected = button;
    },
  },
}
</script>
