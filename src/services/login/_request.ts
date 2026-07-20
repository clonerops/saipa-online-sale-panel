import { http } from "../http";
import type { IRequestLogin } from "./_model";

export const loginRequest = async (request: IRequestLogin) => {
  try {
    const { data } = await http.post("/login", JSON.stringify(request));
    return data;
  } catch (error) {
    return error;
  }
};
