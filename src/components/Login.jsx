import { useState } from "react";
import { useContext } from "react";
import { StatusContext } from "./contexts/StatusContext";

const axios = require("axios");
export const Login = () => {
  const { handlestatus } = useContext(StatusContext);

  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  const handleEvent = (e) => {
    e.preventDefault();
    const { id, value } = e.target;
    setformData({
      ...formData,
      [id]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/login", {
        email: formData.email,
        password: formData.password,
      })
      .then(function (response) {
        handlestatus(response.data.token);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>
          Enter Email:
          <input
            type="email"
            placeholder="Email "
            id="email"
            onChange={handleEvent}
          />{" "}
        </label>
        <br></br>
        <label>
          Enter Password:
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={handleEvent}
          />
        </label>
        <input type="submit" value="login"></input>
      </form>
    </div>
  );
};
