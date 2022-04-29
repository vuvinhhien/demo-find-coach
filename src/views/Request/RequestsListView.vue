<template>
  <section>
    <base-card>
      <header>
        <h2>Requests received</h2>
      </header>
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
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import { RequestItem } from "@/components";

const store = useStore();

const allRequests = computed(() => {
  return store.getters["requests/requests"];
});

const hasRequests = computed(() => {
  return store.getters["requests/hasRequests"];
});

onMounted(() => {
  store.dispatch("requests/getRequestsOfACoachAction");
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
