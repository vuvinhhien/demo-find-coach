<template>
  <form @submit.prevent="submitFormHandler">
    <div class="form-control">
      <label for="firstname">Firstname</label>
      <input type="text" id="firstname" v-model.trim="firstName" />
    </div>
    <div class="form-control">
      <label for="lastname">Lastname</label>
      <input type="text" id="lastname" v-model.trim="lastName" />
    </div>
    <div class="form-control">
      <label for="description">Description</label>
      <textarea id="description" rows="5" v-model.trim="description"></textarea>
    </div>
    <div class="form-control">
      <label for="rate">Hourly Rate</label>
      <textarea type="number" id="rate" v-model.number="rate"></textarea>
    </div>
    <div class="form-control">
      <h3>Area of Expertise</h3>
      <div>
        <input type="checkbox" id="frontend" value="frontend" v-model="areas" />
        <label for="frontend">Frontend Development</label>
      </div>
      <div>
        <input type="checkbox" id="backend" value="backend" v-model="areas" />
        <label for="backend">Backend Development</label>
      </div>
      <div>
        <input type="checkbox" id="career" value="career" v-model="areas" />
        <label for="career">Career Advisory</label>
      </div>
    </div>
    <base-button>Register</base-button>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";

const firstName = ref("");
const lastName = ref("");
const description = ref("");
const rate = ref(0);
const areas = ref([]);

const submitFormHandler = () => {
  const formData = {
    firstName,
    lastName,
    description,
    rate,
    areas,
  };
  console.log(formData);
};
</script>

<style scoped lang="scss">
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;

  &:focus {
    background-color: #f0e6fd;
    outline: none;
    border-color: #3d008d;
  }
}

input[type="checkbox"] {
  display: inline;
  width: auto;
  border: none;

  & + label {
    font-weight: normal;
    display: inline;
    margin: 0 0 0 0.5rem;
  }
  &:focus {
    outline: #3d008d solid 1px;
  }
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}
.invalid {
  label {
    color: red;
  }

  input,
  textarea {
    border: 1px solid red;
  }
}
</style>
