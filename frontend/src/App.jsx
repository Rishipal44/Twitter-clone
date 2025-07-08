import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/home/HomePage.jsx";
import SignUpPage from "./Pages/auth/SignUp/SignUpPage.jsx";
import LoginPage from "./Pages/auth/LogIn/LoginPage.jsx";
import Sidebar from "./Components/common/SideBar.jsx";
import RightPanel from "./Components/common/RightPanel.jsx";
import NotificationPage from "./Pages/notification/NotificationPage.jsx";
import ProfilePage from "./Pages/profile/ProfilePage.jsx";

function App() {
  return (
    <div className='flex max-w-6xl mx-auto'>
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/notifications" element={<NotificationPage />} />
        <Route path="/profile/:username" element={<ProfilePage />} />
      </Routes>
      <RightPanel />
    </div>
  );
}

export default App;
