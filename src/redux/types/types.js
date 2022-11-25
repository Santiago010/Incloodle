export const types = {
  // TODO: AUTH
  authLogin: "[AUTH] Login",
  authLogout: "[AUTH] Logout",
  isAuth: "[AUTH] isAuth",
  //TODO: PROFILE
  profileGet: "[PROFILE] Get",
  profileChoose: "[PROFILE] Choose",
  profileFilterByRol: "[PROFILE] FilterByRol",
  profileFilterByName: "[PROFILE] FilterByName",
  //TODO: TEACHER
  teacherGetCourse: "[TEACHER] GetCourse",
  teacherChooseCourse: "[TEACHER] ChooseCourse",
  teacherGetDocumentsByCourse: "[TEACHER] GetDocumentsByCourse",
  teacherChooseDocument: "[TEACHER] ChooseDocument",
  teacherGetStudentByCourse: "[TEACHER] GetStudentByCourse",
  teacherChooseStudent: "[TEACHER] ChooseStudent",
  teacherFilterCourse: "[TEACHER] FilterCourse",
  teacherGetPedingExam: "[TEACHER] GetPedingExam",

  //TODO: STUDENT
  studentGetAllStudents: "[STUDENT] GetAllStudents",
  studentGetMyCourses: "[STUDENT] GetMyCourse",
  studentGetDocumentsByCourse: "[STUDENT] GetMaterialOfCourse",
  studentChooseExam: "[STUDENT] ChoosenExam",
  //TODO: UI
  uiStartLoading: "[UI] StartLoading",
  uiStopLoading: "[UI] StopLoading",
  uiStartLoginLoader: "[UI] Start Login Loader",
  uiStopLoginLoader: "[UI] Stop Login Loader",
  uiShowModalSearchStudent: "[UI] ShowModalSearchStudent",
  uiShowModalSearchContens: "[UI] ShowModalSearchCotens",
  uiShowModalSearchExamPeding: "[UI] ShowModalSearchExamPeding",
};
