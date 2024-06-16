import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Dashboard = () => {
    const { user, getAccessTokenSilently } = useAuth0();

    return (
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mt-5">
            <h1 className="display-4 mb-5">Bienvenido, {user.nickname}</h1>
            <img className="rounded-circle" src={user.picture} alt={user.name} />
            <h2>Email: {user.email}</h2>
            <h2>Given name: {user.given_name}</h2>
            <h2>family_name: {user.family_name}</h2>
            <h2>nickname: {user.nickname}</h2>
            <h2>name: {user.name}</h2>
          </div>
        </div>
      </div>
    );
  };
  
  export default Dashboard;