<template>
  <div class="wrapper">
    <main-header :cart-count="cartCount"/>
    <router-view></router-view>
    <features/>
    <feedback/>
    <main-footer/>
  </div>
</template>

<script>

import Features from "@/components/Features";
import Feedback from "@/components/Feedback";
import MainFooter from "@/components/MainFooter";
import MainHeader from "@/components/MainHeader";

export default {
  name: "MainLayout",
  components: { MainHeader, MainFooter, Feedback, Features },
  computed: {
    cartCount() {
      return this.$store.getters.getCartCount;
    }
  }
};
</script>
