<template>
  <div class="content">
    <h2>FILTER / MATCHING</h2>
    <div>
      Welche Use cases passen zu mir?
      <b-button>Zum Wizzard</b-button>
    </div>
    <b-card-group columns>
      <b-card v-for="item in items" v-bind:key="item.id" v-on:click="showUseCase(item.id)">
        <h4 class="card-title">{{ item.title }}</h4>
        <b-card-text>{{ item.body }}</b-card-text>
        <template v-slot:footer>
          <b-badge variant="primary" v-for="tag in item.tags" :key="tag">{{ tag }}</b-badge>
        </template>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  async fetch({ store, params }) {
    await store.dispatch("useCases/all")
  },

  computed: {
    items() {
      return this.$store.state.useCases.items;
    }
  },

  methods: {
    showUseCase(id) {
      window.location = '/use-cases/' + id;
    }
  }
};
</script>

<style scoped>
.content {
  padding: 20px;
}
</style>
