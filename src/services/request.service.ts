import instance from "../configs/axios";

export const getAllRequestsOfACoach = async (coachId?: number) => {
  try {
    // const response = await instance.get(`/requests?coachId=${coachId}`);
    const response = await instance.get(`/requests`);
    const { data } = response;
    return { requests: data };
  } catch (error) {
    console.log(error);
    return { error };
  }
};

export const addRequestToACoach = async (request: any) => {
  try {
    const response = await instance.post("/requests", request);
    const { data } = response;
    return { request: data };
  } catch (error) {
    console.log(error);
    return { error };
  }
};
