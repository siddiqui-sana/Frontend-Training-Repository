function Login({hobby, title}){
  //  let title="Login here now!";
    function doLogin(){
        alert("You are logged in");
    }
    return (
        <div className="Login">
            <h4>My Hobby={hobby}</h4>
            <h4 className="Login-header">{title}</h4>
            <input type="text" name="username"/><br/>
            <input type="password" name="password"/><br/>
                <button onClick={doLogin}>Login</button>
        </div>
    )
}
export default Login;