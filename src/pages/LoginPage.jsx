import Navbar from '../components/Navbar/Navbar';
import Login from '../components/Login/Login';
import { useAuth0 } from '@auth0/auth0-react';

function LoginPage() {

  return (
    <>
        <Navbar />
        <Login />
    </>
  );
}

export default LoginPage;