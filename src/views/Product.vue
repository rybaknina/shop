<template>
  <inner-title/>
  <slider/>
  <about/>
  <section class="products">
    <div class="container">
      <h2 class="hidden">Products</h2>
      <div class="products-wrap">
        <ul class="product-list product-list-reverse">
          <card v-for="item in catalog.slice(0, 3)" v-bind:key="item.id" v-bind:data="item"></card>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import "../assets/style/blocks/_inner_title.scss";
import "../assets/style/blocks/_breadcrumbs.scss";
import "../assets/style/blocks/_filter.scss";
import "../assets/style/blocks/_products.scss";
import "../assets/style/blocks/_slider.scss";
import "../assets/style/blocks/_about.scss";

import Card from "@/components/Card";
import InnerTitle from "@/components/InnerTitle";
import Slider from "@/components/Slider";
import About from "@/components/About";

export default {
  name: "Product",
  components: {
    About,
    Slider,
    InnerTitle,
    Card
  },
  computed: {
    catalog() {
      return this.$store.getters.getCatalog;
    }
  }
};
</script>
