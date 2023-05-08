import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./NextPages/Home";
import Facts from "./NextPages/Facts";
import Home2 from "./NextPages/Home2";
function App() {
  return (
    <body className="App">
      <Routes>
        <Route path="/" element={<Home2 />}></Route>
        <Route path="/facts" element={<Facts />}></Route>
      </Routes>
    </body>
  );
}

export default App;
