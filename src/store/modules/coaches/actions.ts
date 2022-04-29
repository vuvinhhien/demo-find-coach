import { getAllCoaches, registerCoach } from "@/services/coach.service";

export default {
  async registerCoachAction(context: any, payload: any) {
    const { coach, error } = await registerCoach(payload);
    if (error) {
      throw error;
    }
    context.commit("registerCoachMutation", coach);
  },
  async setCoachesAction(context: any) {
    const { coaches, error } = await getAllCoaches();
    if (error) {
      throw error;
    }
    context.commit("setCoachesMutation", coaches);
  },
};
