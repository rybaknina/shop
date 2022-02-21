<template>
  <section class="inner-title inner-title-along">
    <div class="container">
      <div class="inner-title-wrap">
        <h1 class="page-title">SHOPPING CART</h1>
      </div>
    </div>
  </section>
  <section class="cart">
    <div class="container">
      <h2 class="hidden">Cart goods</h2>
      <div class="cart-wrap">
        <div class="cart-left">
          <ul class="cart-list">
            <cart-item v-for="item of cart" v-bind:key="item.id" v-bind:data="item">
            </cart-item>
          </ul>
          <div class="cart-btn-wrap">
            <button class="cart-btn--clear" type="button">CLEAR SHOPPING CART</button>
            <button class="cart-bnt--shopping" type="button">CONTINUE SHOPPING</button>
          </div>
        </div>
        <div class="cart-right">
          <form action="#" class="cart-form">
            <div class="cart-input">
              <h3 class="cart-description">SHIPPING ADDRESS</h3>
              <input type="text" class="cart-text" placeholder="Bangladesh" required autofocus>
              <input type="text" class="cart-text" placeholder="State" required>
              <input type="text" class="cart-text" placeholder="Postcode / Zip">
            </div>
            <button type="submit" class="cart-quote-btn">GET A QUOTE</button>
          </form>
          <section class="checkout">
            <h3 class="hidden">Checkout</h3>
            <p class="sub-name">
              SUB TOTAL<span class="sub-sum">${{totalSum}}</span>
            </p>
            <div class="total-item">
              <p class="total-name">
                GRAND TOTAL<span class="total-sum">${{totalSum}}</span>
              </p>
            </div>
            <button class="checkout-btn heartbeat" type="button">PROCEED TO CHECKOUT</button>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import "../assets/style/blocks/_cart.scss";
import CartItem from "@/components/CartItem";

export default {
  name: "Cart",
  components: { CartItem },
  computed: {
    cart() {
      return this.$store.getters.getCart;
    },
    totalSum() {
      const cartList = this.$store.getters.getCart;
      return cartList.reduce((total, item) => +total + +item.price * +item.quantity, 0);
    }
  }
};
</script>
