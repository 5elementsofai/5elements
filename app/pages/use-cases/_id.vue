<template>
  <div class="content">
    <h1>Use case: {{ item.title }}</h1>
    <div>{{ item.body }}</div>

    <h1>Beschreibung</h1>
    <div>Video mit Erklärung</div>

    <h1>Premium</h1>
    <h2>Eingabe</h2>
    <b-table>
    </b-table>

    <h2>Ausgabe</h2>
    <div>ausgabe</div>
  </div>
</template>

<script>
export default {
  computed: {
    item() {
      return {
        id: 1,
        title: "Marketing analytics",
        body:
          "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        footer: "Last updated 3 mins ago",
        tags: ["marketing"]
      };
    }
  }
}
</script>
