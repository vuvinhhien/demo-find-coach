import { createStore } from "vuex";
import { coachesModule, requestsModule } from "./modules";

export default createStore({
  modules: {
    coaches: coachesModule,
    requests: requestsModule,
  },
});
