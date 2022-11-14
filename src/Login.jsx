import { Button } from "@mui/material";
import React, { useState } from "react";
import "./Login.css";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
  const [{}, dispatch] = useStateValue();
  const [inp, setInp] = useState("");
  const signIn = () => {
    if (inp !== "") {
      dispatch({
        type: actionTypes.SET_USER,
        user: {displayName:inp},
      });
    }
    // auth
    //   .signInWithPopup(provider)
    //   .then((result) =>
    //     dispatch({
    //       type: actionTypes.SET_USER,
    //       user: result.user,
    //     })
    //   )
    //   .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png"
          alt="Logo"
        />
        <div className="login_text">
          <h1>Sign in to Whatsapp</h1>
          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <label htmlFor="inputPassword6" className="col-form-label">
                <h2>Enter your Name</h2>
              </label>
            </div>
            <div className="col-auto">
              <input
                type="text"
                id="inputPassword6"
                className="form-control"
                aria-describedby="passwordHelpInline"
                value={inp}
                onChange={(e) => setInp(e.target.value)}
              />
            </div>
          </div>
        </div>

        <Button type="submit" onClick={signIn}>
          Sign In
        </Button>
      </div>
    </div>
  );
}

export default Login;
