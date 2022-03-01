<template>
  <promo/>
  <category/>
  <section class="products">
    <div class="container">
      <div class="products-wrap">
        <div class="product-header">
          <h2 class="products-title">
            Featured Items
          </h2>
          <p class="product-description">
            Shop for items based on what we featured in this week
          </p>
        </div>
        <ul class="product-list">
          <card v-for="item of catalog.slice(0, 6)" v-bind:key="item.id" v-bind:data="item">
          </card>
        </ul>
        <div class="center">
          <router-link to="/catalog" class="products-link">Browse All Product</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import "../assets/style/blocks/_promo.scss";
import "../assets/style/blocks/_products.scss";
import Card from "@/components/Card";
import Category from "@/components/Category";
import Promo from "@/components/Promo";

export default {
  components: {
    Promo,
    Category,
    Card
  },
  computed: {
    catalog() {
      return this.$store.getters.getCatalog;
    }
  }
};
</script>
