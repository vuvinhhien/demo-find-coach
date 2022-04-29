import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

const requestsModule = {
  namespaced: true,
  state: {
    requests: [],
  },
  getters,
  mutations,
  actions,
};

export default requestsModule;
