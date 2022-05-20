import "./App.css";
import Bar  from "./components/Bargraph";
import { Route, Routes } from "react-router-dom";
import { Signup } from "./components/Signup";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/bargraph" element={<Bar />} />
      </Routes>
    </div>
  );
}

export default App;
