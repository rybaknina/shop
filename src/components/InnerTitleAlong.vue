<template>
  <section class="inner-title inner-title-along">
    <div class="container">
      <div class="inner-title-wrap">
        <h1 class="page-title">{{ title }}</h1>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "InnerTitleAlong",
  props: {
    title: String
  }
};
</script>
