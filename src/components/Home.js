import React, { useEffect } from "react";
import Header from "./Header";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
   useEffect(() => {
    let token = "tyetyte";

    if (token !== "") {
    } else {
      history.push("/login");
    }
  }, []);
  return (
    <div>
      <Header />
      Hello this home page
    </div>
  );
};

export default Home;
