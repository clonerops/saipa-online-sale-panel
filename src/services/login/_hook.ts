import { useMutation } from "@tanstack/react-query";
import * as api from "./_request";
import type { IRequestLogin } from "./_model";

export const useRequestLogin = () => {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: (request: IRequestLogin) => api.loginRequest(request),
  });
};
