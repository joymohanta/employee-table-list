import { Routes, Route } from "react-router-dom";
import "./App.css";
import EmployeeDetail from "./components/EmployeeDetail";
import EmployeeList from "./components/EmployeeList";

function App() {
  return (
    <div className="App">
      <h1>Employee Table !!</h1>

      <Routes>
        <Route path="/" element={<EmployeeList></EmployeeList>}></Route>
        <Route
          path="/detail/:id"
          element={<EmployeeDetail></EmployeeDetail>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
