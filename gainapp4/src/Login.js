import { outlet } from "react-router-dom"
import { Link } from "reac-router-dom";
function Login() {
    const loginMe = ()=>{
        alert("Moo baa lalala")
    };
    return (
        <div>
            <input type="text" name="username"></input>
            <input type="password" name="password"></input>
            <button onClick={loginMe}>Login</button>
            <br/>
            <Outlet/>
        </div>
    );
}

export default Login;