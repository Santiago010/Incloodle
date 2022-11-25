import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import IndexContenByCourse from "../pages/ContensByCourse/Index";
import IndexContensByCourseOfStudent from "../pages/ContentByCourseOfStudent/Index";
import IndexCourseTeacher from "../pages/CourseTeacher/Index";
import Dashboard from "../pages/Dashboard";
import IndexExamsPedingTeacher from "../pages/ExamsPedingTeacher/Index";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
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
              <IndexContenByCourse />
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
        path="/pedingExam/:id"
        element={
          <PrivateRoute>
            <Layout>
              <IndexExamsPedingTeacher />
            </Layout>
          </PrivateRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default AppRouter;
