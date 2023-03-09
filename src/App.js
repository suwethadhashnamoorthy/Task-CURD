import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";

import "./css/sb-admin-2.css";
import Student from "./components/Student";
import Teacher from "./components/Teacher";
import AddTeacher from "./components/AddTeacher";
import AddStudents from "./components/AddStudents";
import ViewStudent from "./components/ViewStudent";
import EditStudent from "./components/EditStudent";

function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar></Sidebar>
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Navbar></Navbar>
            <Routes>
              <Route path="/student" element={<Student />}></Route>
              <Route path="/student/:studentid" element={<ViewStudent />}></Route>
              <Route path="/student/edit/:studentid" element={<EditStudent/>}></Route>
              <Route path="/teacher" element={<Teacher />}></Route>
              <Route path="/add-teacher-info" element={<AddTeacher />}></Route>
              <Route path="/add-stud-info" element={<AddStudents />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
