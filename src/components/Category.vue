<template>
  <section class="categories">
    <div class="container">
      <h2 class="hidden">Product category</h2>
      <div class="categories-wrap">
        <router-link to="/catalog" class="category-item category-women">
          <p class="category-text-top">30% OFF</p>
          <p class="category-text-bottom">FOR WOMEN</p>
        </router-link>
        <router-link to="/catalog" class="category-item category-men">
          <p class="category-text-top">HOT DEAL</p>
          <p class="category-text-bottom">FOR MEN</p>
        </router-link>
        <router-link to="/catalog" class="category-item category-kids">
          <p class="category-text-top">NEW ARRIVALS</p>
          <p class="category-text-bottom">FOR KIDS</p>
        </router-link>
        <router-link to="/catalog" class="category-item category-accessories">
          <p class="category-text-top">LUXIROUS & TRENDY</p>
          <p class="category-text-bottom">ACCESORIES</p>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Category"
};
</script>

<style scoped>

</style>
