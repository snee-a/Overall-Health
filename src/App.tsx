import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Shop from './components/Shop';
import FitnessTrainer from './components/FitnessTrainer';
import TrainerSelection from './components/TrainerSelection';
import MuscleExercises from './components/MuscleExercises';
import WaterTracker from './components/WaterTracker';
import HabitTracker from './components/HabitTracker';
import Meditation from './components/Meditation';
import PeriodTracker from './components/PeriodTracker';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import UserProfile from './components/UserProfile';

function App() {
  const location = useLocation();

  // Hide Navbar on login/signup pages
  const hideNavbar = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/fitness-trainer" element={<FitnessTrainer />} />
        <Route path="/trainer-selection" element={<TrainerSelection />} />
        <Route path="/muscle-exercises/:muscle" element={<MuscleExercises />} />
        <Route path="/water-tracker" element={<WaterTracker />} />
        <Route path="/habit-tracker" element={<HabitTracker />} />
        <Route path="/meditation" element={<Meditation />} />
        <Route path="/period-tracker" element={<PeriodTracker />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Fix for duplicate /profile routes */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/user-profile" element={<UserProfile />} />
      </Routes>
    </>
  );
}

export default App;
