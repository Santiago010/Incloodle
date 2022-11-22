import { types } from "../types/types";

export const StartLoading = () => ({
  type: types.uiStartLoading,
});

export const StopLoading = () => ({
  type: types.uiStopLoading,
});

export const startLoginLoader = () => ({
  type: types.uiStartLoginLoader,
});

export const stopLoginLoader = () => ({
  type: types.uiStopLoginLoader,
});
