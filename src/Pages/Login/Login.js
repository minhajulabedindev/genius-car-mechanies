import React from "react";
import { Button } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const { user, signInWithGoogle } = useAuth();
  return (
    <div>
      <h3>please Login</h3>
      <Button onClick={signInWithGoogle}>Google Sign In </Button>
    </div>
  );
};

export default Login;
