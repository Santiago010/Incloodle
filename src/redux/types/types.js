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
  teacherGetpendingExam: "[TEACHER] GetpendingExam",
  teacherGetAnswerExam: "[TEACHER] GetAnswerExam",
  teacherFilterCourse: "[TEACHER] FilterCourse",
  teacherFilterMaterial: "[TEACHER] FilterMaterial",
  teacherFilterStudent: "[TEACHER] FilterStudent",
  teacherFilterExamPending: "[TEACHER] FilterExamPending",
  teacherGetReport: "[TEACHER] GetReport",

  //TODO: STUDENT
  studentGetAllStudents: "[STUDENT] GetAllStudents",
  studentGetMyCourses: "[STUDENT] GetMyCourse",
  studentGetDocumentsByCourse: "[STUDENT] GetMaterialOfCourse",
  studentChooseExam: "[STUDENT] ChoosenExam",
  studentGetAllDocuments: "[STUDENT] GetAllDocuments",
  studentGetAllExam: "[STUDENT] GetAllExam",
  studentGetExamsCorrected: "[STUDENT] GetExamsCorrected",
  studentGetAnswersCorrections: "[STUDENT] GetAnswersCorrections",
  //TODO: UI
  uiStartLoading: "[UI] StartLoading",
  uiStopLoading: "[UI] StopLoading",
  uiStartLoginLoader: "[UI] Start Login Loader",
  uiStopLoginLoader: "[UI] Stop Login Loader",
  uiShowModalSearchStudent: "[UI] ShowModalSearchStudent",
  uiShowModalSearchContens: "[UI] ShowModalSearchCotens",
  uiShowModalSearchExampending: "[UI] ShowModalSearchExampending",
  uiShowModalChangePass: "[UI] ShowModalChangePass",
  uiShowModalSearchExamCorrected: "[UI] ShowModalSearchExamCorrected",
  uiResetPass: "[UI] ResetPass",

  //ALL FILTERS
  filtersEmptyFilter: "[FILTERS] EmptyFilter",
};
