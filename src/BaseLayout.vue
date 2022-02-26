<template>
  <div class="wrapper">
    <main-header :cart-count="cartCount"/>
    <router-view></router-view>
    <feedback/>
    <main-footer/>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader";
import Feedback from "@/components/Feedback";
import MainFooter from "@/components/MainFooter";

export default {
  name: "BaseLayout",
  components: { MainFooter, Feedback, MainHeader },
  computed: {
    cartCount() {
      return this.$store.getters.getCartCount;
    }
  }
};
</script>
