<template>
  <section class="inner-title">
    <div class="container">
      <div class="inner-title-wrap">
        <h1 class="page-title">NEW ARRIVALS</h1>
        <breadcrumbs/>
      </div>
    </div>
  </section>
</template>
<script>
import Breadcrumbs from "@/components/Breadcrumbs";

export default {
  name: "InnerTitle",
  components: { Breadcrumbs }
};
</script>
