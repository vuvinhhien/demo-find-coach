<template>
  <base-dialog
    :show="!!error"
    title="An error occured"
    @close="handleCloseError"
  >
    <p>{{ error }}</p>
  </base-dialog>
  <section>
    <coach-filter @change-filter="handleChangeFilter"></coach-filter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button link to="/register" v-if="!isLoading"
          >Register as Coach
        </base-button>
      </div>
      <pacman-loader :loading="isLoading"></pacman-loader>
      <ul v-if="hasCoaches">
        <coach-item
          v-for="coach in filteredCoaches"
          :key="coach.id"
          :id="coach.id"
          :rate="coach.hourlyRate"
          :first-name="coach.firstName"
          :last-name="coach.lastName"
          :areas="coach.areas"
        ></coach-item>
      </ul>
      <h3 v-else>No coach!</h3>
    </base-card>
  </section>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from "vue";
import { useStore } from "vuex";
import { CoachItem, CoachFilter } from "@/components";
import PacmanLoader from "vue-spinner/src/PacmanLoader.vue";
import { BaseDialog } from "@/components";

const store = useStore();

onMounted(async () => {
  isLoading.value = true;
  try {
    await store.dispatch("coaches/setCoachesAction");
  } catch (err: any) {
    error.value = err.message || "Something went wrong!";
  }
  isLoading.value = false;
});

let filters = ref<string[]>([]);
const isLoading = ref<boolean>(false);
const error = ref<string | null>(null);

const filteredCoaches = computed(() => {
  const coaches = store.getters["coaches/coaches"];
  return coaches.filter((coach: any) => {
    for (let filter of filters.value) {
      if (!coach.areas.includes(filter)) return false;
    }
    return true;
  });
});

const hasCoaches = computed(() => {
  return store.getters["coaches/hasCoaches"] && !isLoading.value;
});

const handleChangeFilter = (updatedFilters: string[]) => {
  filters.value = updatedFilters;
};

const handleCloseError = () => {
  error.value = null;
};
</script>

<style scoped>
.controls {
  display: flex;
  justify-content: space-between;
}
</style>
