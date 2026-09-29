<script setup>
  import Header from './component/Header.vue'
  import Footer from './component/Footer.vue'
</script>

<template>
  <Header />
  <RouterView  class="w-full overflow-x-hidden"/>
  <Footer />
</template>

<style scoped></style>
