import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/mainpage/Main";
import ShowDetails from "./components/ShowDetails/ShowDetails";

function App() {
  return (
    <div>
      <Main />
      <ShowDetails />
    </div>
  );
}

export default App;
