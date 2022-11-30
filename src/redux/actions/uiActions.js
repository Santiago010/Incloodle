import { types } from "../types/types";

export const StartLoading = () => ({
  type: types.uiStartLoading,
});

export const StopLoading = () => ({
  type: types.uiStopLoading,
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

export const openModalSearchExampending = () => ({
  type: types.uiShowModalSearchExampending,
  payload: true,
});

export const closeModalSearchExampending = () => ({
  type: types.uiShowModalSearchExampending,
  payload: false,
});

export const openModalChangePass = () => ({
  type: types.uiShowModalChangePass,
  payload: true,
});
export const closeModalChangePass = () => ({
  type: types.uiShowModalChangePass,
  payload: false,
});

export const openModalSearchExamCorrected = () => ({
  type: types.uiShowModalSearchExamCorrected,
  payload: true,
});

export const closeModalSearchExamCorrected = () => ({
  type: types.uiShowModalSearchExamCorrected,
  payload: false,
});

export const ResetPass = (data) => ({
  type: types.uiResetPass,
  payload: data,
});
