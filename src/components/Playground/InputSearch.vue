<template>
  <div>
    <p>Changes: {{ change }}
    <br>Button clicks: {{ click }}
    <br>Error: {{ error }}</p>

    <p><label>Product:</label>
    <my-input-search textField="title" :searchMethod="searchRun" @error="errorResponse" v-model="value" @change="searchHasChanged" showActionButton @actionButtonClick="searchButtonClick" waitingText="Wait, searching..." placeholder="Find a product..." /></p>

    <p>Click at the right button to display details.</p>

    <p>Searching for products in this API:
    <br><a :href="url">{{ url }}</a></p>

    <b-modal id="modal" size="lg" v-if="value" :title="value.title" scrollable ok-only>
      <div class="d-flex justify-content-between mb-3">
        <div>{{ value.category }}</div>
        <div class="font-weight-bold">U$ {{ value.price }}</div>
      </div>

      <div class="d-flex justify-content-between mb-3">
        <b-img class="pr-3" :src="value.image" width="100%" height="100%" />
        <div>{{ value.description }}</div>
      </div>

      <b-card>
        <pre>Value: {{ value }}</pre>
      </b-card>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "https://fakestoreapi.com/products",
      value: {},
      change: 0,
      error: null,
      click: 0,
    }
  },
  methods: {
    errorResponse(response) {
      this.error = response;
    },
    searchHasChanged() {
      this.change++;
    },
    searchButtonClick() {
      this.click++;
      this.$bvModal.show("modal");
    },
    async searchRun(term) {
      try {
        const searchResponse = await this.$http.get(this.url, { params: { term: term }});
        return Array.isArray(searchResponse.data) ? searchResponse.data : null;
      }
      catch (error) {
        this.error = error;
      }
      return null;
    },
  },
}
</script>
