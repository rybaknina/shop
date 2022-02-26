<template>
  <section class="slider">
    <h2 class="hidden">Slider show</h2>
    <button class="slider-btn" @click="toLeft">
      <svg class="slider-btn--icon" width="31" height="31" viewBox="0 0 31 31"
           xmlns="http://www.w3.org/2000/svg">
        <path
          d="M21.6998 7.7499L13.9498 15.4999L21.6998 23.2499L20.1498 26.3499L9.2998 15.4999L20.1498 4.6499L21.6998 7.7499Z"/>
      </svg>
    </button>
    <transition class="slide-up">
      <div class="slider-box" v-if="currentSlide % 5 == 0">
        <img class="slider-img" src="../assets/img/slide-main.jpg" alt="slide-main">
      </div>
      <div class="slider-box" v-else-if="currentSlide % 5 == 1">
        <img class="slider-img" src="../assets/img/cats-30746_640.png" alt="slide-main">
      </div>
      <div class="slider-box" v-else-if="currentSlide % 5 == 2">
        <img class="slider-img" src="../assets/img/witch-155291_640.png" alt="slide-main">
      </div>
      <div class="slider-box" v-else-if="currentSlide % 5 == 3">
        <img class="slider-img" src="../assets/img/kitten-2973049_640.jpg" alt="slide-main">
      </div>
      <div class="slider-box" v-else-if="currentSlide % 5 == 4">
        <img class="slider-img" src="../assets/img/astonishment-3533498_640.png" alt="slide-main">
      </div>
    </transition>
    <button class="slider-btn" @click="toRight">
      <svg class="slider-btn--icon" width="31" height="31" viewBox="0 0 31 31"
           xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.2998 23.2499L17.0498 15.4999L9.2998 7.7499L10.8498 4.6499L21.6998 15.4999L10.8498 26.3499L9.2998 23.2499Z"/>
      </svg>
    </button>
  </section>
</template>
<script>
export default {
  name: "Slider",
  data() {
    return {
      currentSlide: 0
    };
  },
  methods: {
    toRight() {
      this.currentSlide++;
    },
    toLeft() {
      this.currentSlide--;
    }
  }
};
</script>
<style scoped>
.slide-up-enter-active,
.slider-box-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
