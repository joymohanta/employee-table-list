import { Routes, Route } from "react-router-dom";
import "./App.css";
import EmployeeDetail from "./components/EmployeeDetail";
import EmployeeList from "./components/EmployeeList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<EmployeeList></EmployeeList>}></Route>
        <Route
          path="/:first_name"
          element={<EmployeeDetail></EmployeeDetail>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
