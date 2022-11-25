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

export const openModalSearchStudent = () => ({
  type: types.uiShowModalSearchStudent,
  payload: true,
});
export const closeModalSearchStudent = () => ({
  type: types.uiShowModalSearchStudent,
  payload: false,
});

export const openModalSearchContens = () => ({
  type: types.uiShowModalSearchContens,
  payload: true,
});
export const closeModalSearchContens = () => ({
  type: types.uiShowModalSearchContens,
  payload: false,
});

export const openModalSearchExamPeding = () => ({
  type: types.uiShowModalSearchExamPeding,
  payload: true,
});

export const ModalSearchExamPeding = () => ({
  type: types.uiShowModalSearchExamPeding,
  payload: false,
});
