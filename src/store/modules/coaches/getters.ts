export default {
  coaches(state: any) {
    return state.coaches;
  },
  getCoachById: (state: any) => (id: string) => {
    return state.coaches.find((coach: any) => coach.id.toString() === id);
  },
  hasCoaches(state: any) {
    return state.coaches && state.coaches.length > 0;
  },
};
