import { getAllCoaches, registerCoach } from "@/services/coach.service";

export default {
  async registerCoachAction(context: any, payload: any) {
    const { coach, error } = await registerCoach(payload);
    context.commit("registerCoachMutation", coach);
  },
  async setCoachesAction(context: any) {
    const { coaches, error } = await getAllCoaches();
    context.commit("setCoachesMutation", coaches);
  },
};
