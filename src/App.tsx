import 'react';
import { HashRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import AddProblem from './pages/AddProblem';
import AuthPage from './pages/Auth';
import Home from './pages/Home';
import ShowTopics from './pages/ShowTopics';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<AuthPage isSignUp={false} />} />
          <Route path="/signup" element={<AuthPage isSignUp={true} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/problem/topics" element={<ShowTopics />} />
          <Route path="/problem/add" element={<AddProblem />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </>
  )
}