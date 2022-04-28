<template>
  <main-header></main-header>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { MainHeader } from "@/components";
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: "Roboto", sans-serif;
}

a {
  text-decoration: none;
}
</style>
