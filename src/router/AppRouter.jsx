import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import IndexContensByCourseOfStudent from "../pages/ContentByCourseOfStudent/Index";
import IndexCourseTeacher from "../pages/CourseTeacher/Index";
import Dashboard from "../pages/Dashboard";
import IndexExamspendingTeacher from "../pages/ExamsPendingTeacher/Index";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import IndexStudentExam from "../pages/StudentExam/Index";
import IndexStudentsByCourse from "../pages/StudentsByCourse/Index";
import IndexTakeExam from "../pages/TakeExam/Index";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

const AppRouter = () => (
  <Router>
    <Routes>
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Layout>
              <Dashboard />
            </Layout>
          </PrivateRoute>
        }
      />
      <Route
        path="/course/:id"
        element={
          <PrivateRoute>
            <Layout>
              <IndexCourseTeacher />
            </Layout>
          </PrivateRoute>
        }
      />
      <Route
        path="/students/:id"
        element={
          <PrivateRoute>
            <Layout>
              <IndexStudentsByCourse />
            </Layout>
          </PrivateRoute>
        }
      />
      <Route
        path="/contens/:id"
        element={
          <PrivateRoute>
            <Layout>
              <IndexCourseTeacher />
            </Layout>
          </PrivateRoute>
        }
      />
      <Route
        path="/courseContent/:id"
        element={
          <PrivateRoute>
            <Layout>
              <IndexContensByCourseOfStudent />
            </Layout>
          </PrivateRoute>
        }
      />
      <Route
        path="/takeExam/:id"
        element={
          <PrivateRoute>
            <Layout>
              <IndexTakeExam />
            </Layout>
          </PrivateRoute>
        }
      />
      <Route
        path="/pendingExam/:id"
        element={
          <PrivateRoute>
            <Layout>
              <IndexExamspendingTeacher />
            </Layout>
          </PrivateRoute>
        }
      />
      <Route
        path="/studentExam/:id"
        element={
          <PrivateRoute>
            <Layout>
              <IndexStudentExam />
            </Layout>
          </PrivateRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default AppRouter;
