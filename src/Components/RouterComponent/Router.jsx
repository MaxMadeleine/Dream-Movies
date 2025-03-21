import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../../PageComponents/HomePageComponent/HomePage";
import { AboutPage } from "../../PageComponents/AboutPageComponent/AboutPage";
import { ContactPage } from "../../PageComponents/ContactPageComponent/ContactPage";
import { PosterDetail } from '../../PageComponents/PosterDetailPage/PosterDetail.jsx';
import { CrudPage } from "../../PageComponents/crudPageComponent/crudPage.jsx";
import { Add } from "../AddComponent/Add.jsx";
import { Update } from "../UpdateComponent/Update.jsx";
import { LoginForm } from "../LoginFormComponent/loginForm.jsx";
import { SignUpForm } from "../SignUpFormComponent/SignUpForm.jsx"; // Import SignUpForm
import { NotFoundPage } from "../../PageComponents/NotFoundPage/NotFoundPage.jsx";

const ProtectedRoute = ({ children }) => {
  const accessToken = localStorage.getItem('accessToken');
  return accessToken ? children : <Navigate to="/login" />;
};

export const Router = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/posters/:id" element={<PosterDetail />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/crud" element={<ProtectedRoute><CrudPage /></ProtectedRoute>} />
      <Route path="/crud/add" element={<ProtectedRoute><Add /></ProtectedRoute>} />
      <Route path="/crud/update/:id" element={<ProtectedRoute><Update /></ProtectedRoute>} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignUpForm />} /> {/* Add SignUpForm route */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
