<template>
  <li class="product-item">
    <div class="product-overlay">
      <button type="button" class="product-btn-add" v-on:click="onBuyBtnClk(data)">
        <img src="../assets/img/cart-icon.svg" alt="cart">
        Add to Cart
      </button>
    </div>
    <img v-bind:src="imageSource" alt="product" class="product-img">
    <div class="product-text">
      <h3 class="product-name">
        <router-link to="/product">{{ data.title }}</router-link>
      </h3>
      <p class="product-txt">{{ data.description }}</p>
      <p class="product-price">${{ data.price }}</p>
    </div>
  </li>
</template>
<script>
export default {
  props: [
    "data"
  ],
  methods: {
    onBuyBtnClk(product) {
      this.$store.dispatch("addToCart", product);
    }
  },
  computed: {
    imageSource() {
      return require(`../assets/img/${this.data.img}`);
    }
  }
};
</script>
