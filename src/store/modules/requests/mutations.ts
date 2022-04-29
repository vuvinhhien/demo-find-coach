export default {
  addRequestToACoachMutation(state: any, payload: any) {
    state.requests.push(payload);
  },
  getRequestsOfACoachMutation(state: any, payload: any) {
    state.requests = payload;
  },
};
