<template>
  <form @submit.prevent="submitHandler">
    <div class="form-control">
      <label for="email">Your E-Mail</label>
      <input type="email" id="email" v-model="email" />
    </div>
    <div class="form-control">
      <label for="message">Message</label>
      <textarea id="message" rows="5" v-model="message"></textarea>
    </div>
    <div class="actions">
      <base-button>Send message</base-button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();
const props = defineProps<{ id: string }>();

const email = ref<string>("");
const message = ref<string>("");

const submitHandler = () => {
  const request = {
    coachId: +props.id,
    email: email.value,
    message: message.value,
  };
  store.dispatch("requests/addRequestToACoachAction", request);
  router.push("/coaches");
};
</script>

<style lang="scss" scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
  &:focus {
    border-color: #3d008d;
    background: #faf6ff;
    outline: none;
  }
}
.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>
