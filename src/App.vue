<template>
  <NavbarComponent />
  <div class="max-w-[1400px] mx-auto">
    <router-view></router-view>
  </div>
</template>
<script setup lang="ts">
import NavbarComponent from './components/NavbarComponent.vue';
</script>
