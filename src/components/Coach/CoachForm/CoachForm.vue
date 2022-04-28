<template>
  <form @submit.prevent="submitHandler">
    <div class="form-control">
      <label for="firstname">Firstname</label>
      <input
        type="text"
        id="firstname"
        v-model.trim="formInput.firstName.value"
      />
      <input-error-message-vee
        :error-message="formInput.errors.value.firstName"
      />
    </div>
    <div class="form-control">
      <label for="lastname">Lastname</label>
      <input
        type="text"
        id="lastname"
        v-model.trim="formInput.lastName.value"
      />
      <input-error-message-vee
        :error-message="formInput.errors.value.lastName"
      />
    </div>
    <div class="form-control">
      <label for="description">Description</label>
      <textarea
        id="description"
        rows="5"
        v-model.trim="formInput.description.value"
      ></textarea>
      <input-error-message-vee
        :error-message="formInput.errors.value.description"
      />
    </div>
    <div class="form-control">
      <label for="rate">Hourly Rate</label>
      <input
        type="number"
        id="rate"
        v-model.number="formInput.hourlyRate.value"
      />
      <input-error-message-vee
        :error-message="formInput.errors.value.hourlyRate"
      />
    </div>
    <div class="form-control">
      <h3>Area of Expertise</h3>
      <div>
        <!-- <input
          type="checkbox"
          id="frontend"
          name="frontend"
          value="frontend"
          v-model="formInput.areas.value"
        /> -->
        <field type="checkbox" id="frontend" name="areas" value="frontend" />
        <label for="frontend">Frontend Development</label>
      </div>
      <div>
        <field type="checkbox" id="backend" name="areas" value="backend" />
        <label for="backend">Backend Development</label>
      </div>
      <div>
        <field type="checkbox" id="career" name="areas" value="career" />
        <label for="career">Career Advisory</label>
      </div>
      <error-message name="areas"></error-message>
    </div>
    <base-button :disabled="isSubmitting">Register</base-button>
  </form>
</template>

<script setup lang="ts">
import { InputErrorMessageVee } from "@/components";
import { Field, ErrorMessage } from "vee-validate";
import useCoachForm from "./useCoachForm";

const { handlers, state } = useCoachForm();
const { formInput, isSubmitting } = state;
const { submitHandler } = handlers;
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
