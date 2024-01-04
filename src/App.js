/* import { BrowserRouter, Routes, Route } from "react-router-dom"; */
import './main.css';
import Login from "./Pages/Login/Login";
import Signup from "./Pages/signup/Signup";
import CoursePage from "./Pages/CoursePage/CoursePage";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from "./Pages/HomePage";
import CourseDetailPage from "./Pages/CoursePage/CourseDetailPage";
import stackHubPage from './Pages/StackhHub/stackHubPage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/courses",
      element: <CoursePage/>,
    },
    {
      path: "/stackhub",
      element: <stackHubPage/>,
    },
    {
      path: "/single",
      element: <CourseDetailPage/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/signup",
      element: <Signup/>,
    },
  ]);


  return (

   <div className="app"> 
     <RouterProvider router={router} />
   </div>


/* 
    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} /> 
         <Route path="/courses" element={<CoursePage />} />
         <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<Signup/>} />
      </Routes>
      <Footer/>
    </BrowserRouter> */
  );
}

export default App;
