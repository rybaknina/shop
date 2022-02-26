<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
export default {
  computed: {
    layout() {
      return this.$route.meta.layout || "main-layout";
    }
  },
  mounted() {
    this.$store.dispatch("loadCatalog");
    this.$store.dispatch("loadCart");
  }
};
</script>
