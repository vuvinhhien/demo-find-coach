import { addRequestToACoach, getAllRequestsOfACoach } from "@/services";

export default {
  async addRequestToACoachAction(context: any, payload: any) {
    const { request, error } = await addRequestToACoach(payload);
    context.commit("addRequestToACoachMutation", request);
  },
  async getRequestsOfACoachAction(context: any) {
    const { requests, error } = await getAllRequestsOfACoach();
    context.commit("getRequestsOfACoachMutation", requests);
  },
};
