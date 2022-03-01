<template>
  <nav class="breadcrumbs">
    <ul class="breadcrumbs-list">
      <li class="breadcrumbs-item">
        <router-link to="/" class="breadcrumbs-link">HOME</router-link>
      </li>
      <li class="breadcrumbs-item">
        <a href="#" class="breadcrumbs-link">MEN</a>
      </li>
      <li class="breadcrumbs-item">
        <a class="breadcrumbs-link breadcrumbs-link--current">NEW ARRIVALS</a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "Breadcrumbs"
};
</script>
