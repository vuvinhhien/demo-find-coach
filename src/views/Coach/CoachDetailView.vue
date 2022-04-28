<template>
  <section>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h3>${{ rate }}/hour</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Interested? Reach out now!</h2>
        <base-button link :to="contactLink">Contact</base-button>
      </header>
    </base-card>
  </section>
  <section>
    <base-card>
      <base-badge v-for="area in areas" :key="area" :type="area" :title="area"
        >{{ area }}
      </base-badge>
      <p>{{ description }}</p>
    </base-card>
  </section>
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const route = useRoute();
const store = useStore();
const props = defineProps<{ id: string }>();
console.log(store.getters);
const coach = store.getters["coaches/getCoachById"](props.id);

const fullName = computed(() => {
  return coach.firstName + " " + coach.lastName;
});

const rate = computed(() => {
  return coach.hourlyRate;
});

const contactLink = computed(() => {
  return route.path + "/contact";
});

const areas = computed(() => {
  return coach.areas;
});

const description = computed(() => {
  return coach.description;
});
</script>
