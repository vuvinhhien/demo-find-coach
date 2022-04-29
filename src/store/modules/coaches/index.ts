import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const coachesModule = {
  namespaced: true,
  state: {
    coaches: [],
  },
  getters,
  mutations,
  actions,
};

export default coachesModule;
