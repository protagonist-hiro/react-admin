import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { useState } from "react";
import { useLogin, useNotify } from "react-admin";
import Logo from "../../assets/logo.svg";
import "./login.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = useLogin();
  const notify = useNotify();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // will call authProvider.login({ email, password })
    login({ email, password }).catch(() => notify("Invalid email or password"));
  };

  return (
    <Grid container>
      <Grid item md={6} className="login-container">
        <div className="login-details">
          <Typography className="login-header" variant="h3">
            Rayy
          </Typography>
          <div className="login-fields">
            <Typography
              className="login-title login-component-width"
              variant="h4"
            >
              Login
            </Typography>
            <Typography
              className="login-subtitle login-component-width"
              variant="h6"
            >
              Enter your details
            </Typography>
            <br />
            <br />
            <form onSubmit={handleSubmit}>
              <TextField
                id="outlined-input"
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="login-component-width"
              />
              <br />
              <br />
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login-component-width"
              />
              <Button
                variant="contained"
                type="submit"
                className="login-submit-btn"
              >
                LOGIN
              </Button>
            </form>
          </div>
        </div>
      </Grid>
      <Grid item md={6} className="login-container login-column-two">
        <img src={Logo} alt="logo" height="200" width="350" />
      </Grid>
    </Grid>
  );
};

export default LoginPage;
