import { useNavigate } from "react-router-dom";

const Login = () => {
  const gohome = useNavigate();

  const handleLogin = () => {
    // Perform login logic...
    console.log("User logged in");
    gohome("/"); // Navigate to a dashboard (after login)
  };

  return <button onClick={handleLogin}>Login</button>;
};

export default Login;
