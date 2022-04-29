export default {
  registerCoachMutation(state: any, payload: any) {
    state.coaches.push(payload);
  },
  setCoachesMutation(state: any, payload: any) {
    state.coaches = payload;
  },
};
