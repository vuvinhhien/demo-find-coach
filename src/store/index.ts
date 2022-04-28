import { createStore } from "vuex";
import { coachesModule } from "./modules";

export default createStore({
  modules: {
    coaches: coachesModule,
  },
});
