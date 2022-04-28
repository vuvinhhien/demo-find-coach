import instance from "../configs/axios";

export const getAllCoaches = async () => {
  try {
    const response = await instance.get("/coaches");
    const { data } = response;
    return { coaches: data };
  } catch (error) {
    console.log(error);
    return { error };
  }
};

export const registerCoach = async (coach: any) => {
  try {
    const response = await instance.post("/coaches", coach);
    const { data } = response;
    return { coach: data };
  } catch (error) {
    console.log(error);
    return { error };
  }
};
