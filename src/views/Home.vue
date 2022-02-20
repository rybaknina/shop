<template>
    <section class="promo">
      <div class="container">
        <div class="promo-wrap">
          <div class="promo-brand">
            <h1 class="promo-title">THE BRAND <br>
              <span class="promo-title--small">OF LUXERIOUS <span
                class="promo-title--pink">FASHION</span></span></h1>
          </div>
        </div>
      </div>
    </section>
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
            <card v-for="item of cover" v-bind:key="item.id" v-bind:data="item">
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
import Card from "@/components/Card";
import Category from "@/components/Category";

export default {
  components: {
    Category,
    Card
  },
  computed: {
    cover() {
      return this.$store.getters.getCover;
    }
  },
  methods: {
    onBuyBtnClk(product) {
      this.$store.dispatch("addToCart", product);
    }
  }
};
</script>
