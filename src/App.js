import { useState } from "react";
import { useSelector } from "react-redux";

import "./App.css";
import Main from "./components/mainpage/Main";
import ShowDetails from "./components/ShowDetails/ShowDetails";

function App() {
  const [loading, setLoading] = useState(false); //lifting state up soory no time
  const { user } = useSelector((user) => ({ ...user }));

  return (
    <div>
      <Main setLoading={setLoading} />
      {console.log(loading)}
      {loading ? (
        <div className="loadingback"></div>
      ) : user ? (
        <ShowDetails setLoading={setLoading} />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
