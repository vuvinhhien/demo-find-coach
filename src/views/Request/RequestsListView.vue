<template>
  <section>
    <base-card>
      <header>
        <h2>Requests received</h2>
      </header>
      <pacman-loader :loading="isLoading"></pacman-loader>
      <ul v-if="hasRequests">
        <request-item
          v-for="request in allRequests"
          :key="request.id"
          :email="request.email"
          :message="request.message"
        ></request-item>
      </ul>
      <h3 v-else>You haven't received any requests yet!</h3>
    </base-card>
  </section>
</template>

<script setup lang="ts">
import { onMounted, computed, ref } from "vue";
import { useStore } from "vuex";
import { RequestItem } from "@/components";
import PacmanLoader from "vue-spinner/src/PacmanLoader.vue";

const store = useStore();

const isLoading = ref<boolean>(false);

const allRequests = computed(() => {
  return store.getters["requests/requests"];
});

const hasRequests = computed(() => {
  return store.getters["requests/hasRequests"] && !isLoading.value;
});

onMounted(() => {
  isLoading.value = true;
  store.dispatch("requests/getRequestsOfACoachAction");
  isLoading.value = false;
});
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
