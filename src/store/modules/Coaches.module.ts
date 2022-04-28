const coachesModule = {
  namespaced: true,
  state: {
    coaches: [
      {
        id: "1",
        firstName: "Nguyen Van",
        lastName: "Vu",
        areas: ["frontend", "backend", "career"],
        description:
          "I'm Vu and I've worked as a freelance web developer for years.",
        hourlyRate: 30,
      },
      {
        id: "2",
        firstName: "Hua Vi",
        lastName: "Van",
        areas: ["frontend", "backend"],
        description:
          "I'm Van and I've worked as a freelance web developer for years.",
        hourlyRate: 30,
      },
    ],
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
  mutations: {},
  actions: {},
};

export default coachesModule;
