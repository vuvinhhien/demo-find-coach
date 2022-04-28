import { getAllCoaches, registerCoach } from "@/services/coach.service";

const coachesModule = {
  namespaced: true,
  state: {
    coaches: [],
  },
  getters: {
    coaches(state: any) {
      return state.coaches;
    },
    getCoachById: (state: any) => (id: string) => {
      return state.coaches.find((coach: any) => coach.id === id);
    },
    hasCoaches(state: any) {
      return state.coaches && state.coaches.length > 0;
    },
  },
  mutations: {
    registerCoachMutation(state: any, payload: any) {
      state.coaches.push(payload);
    },
    setCoachesMutation(state: any, payload: any) {
      state.coaches = payload;
    },
  },
  actions: {
    async registerCoachAction(context: any, payload: any) {
      const { coach, error } = await registerCoach(payload);
      context.commit("registerCoachMutation", coach);
    },
    async setCoachesAction(context: any) {
      const { coaches, error } = await getAllCoaches();
      context.commit("setCoachesMutation", coaches);
    },
  },
};

export default coachesModule;
