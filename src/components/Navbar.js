import {AuthContext} from "../context/AuthContextProvider";
import { useContext } from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  const {logout,authDetails}=useContext(AuthContext);
  return (
    <div>
      <div spacing="24px">
        <Link to="/">Home</Link>
      {authDetails.isAuth?<button style={{background:"red"}} onClick={logout}>Logout</button>:<Link to="/login">Login</Link>}
      </div>
    </div>
  );
}

export default Navbar;
