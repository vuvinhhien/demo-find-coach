import * as yup from "yup";
import { useField, useForm } from "vee-validate";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const useCoachForm = () => {
  const store = useStore();
  const router = useRouter();

  const schema = yup.object({
    firstName: yup.string().required().label("First name"),
    lastName: yup.string().required().label("Last name"),
    description: yup.string().required().label("Description"),
    hourlyRate: yup.number().required().label("Rate"),
  });

  const { errors, handleSubmit, isSubmitting, handleReset } = useForm({
    validationSchema: schema,
  });

  const { value: firstName } = useField<string>("firstName");
  const { value: lastName } = useField<string>("lastName");
  const { value: description } = useField<string>("description");
  const { value: hourlyRate } = useField<string>("hourlyRate");

  // Handlers
  const submitHandler = handleSubmit(async (values) => {
    console.log(values);
    store.dispatch("coaches/registerCoachAction", values);
    router.push("/coaches");
  });

  return {
    state: {
      formInput: {
        firstName,
        lastName,
        description,
        hourlyRate,
        errors,
      },
      isSubmitting,
    },
    handlers: { submitHandler },
  };
};

export default useCoachForm;
