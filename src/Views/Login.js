import React from "react";
import '../Assets/Login/Login.css';
import history from "../Components/history";

class Login extends React.Component{
    initialState = {
        username :"",
        password: ""
    };
    constructor(props) {
        super(props);
        this.state = this.initialState;
    }
    handleChange = (e) => {
        e.persist();
        this.setState((state) => state[e.target.name] = e.target.value)
    };
    handleLogin = () => {
      if(this.state.username === "admin" && this.state.password === "admin"){
            history.push('dietitian/1/edit')
      }
    };
    render() {
        return (
            <>
                <div className={"container loginForm"}>
                    <div className={"login col-4 mx-auto p-4"}>
                            <div className={"text-center lead"}>
                                Welcome to Healthy App !
                            </div>
                            <form className={" form-group pt-5"} id={"login-form"}>
                                <input type={"text"} className={"form-control mb-3"} name="username" value={this.state.username} placeholder={"Username"} onChange={this.handleChange}/>
                                <input type={"password"} className={"form-control mb-3"} name={"password"} value={this.state.password} placeholder={"Password"} onChange={this.handleChange}/>
                                <div className={"row"}>
                                    <button type={"button"} formTarget={"login-form"} className={"btn btn-success col-6 m-auto"} onClick={this.handleLogin}> Log in </button>
                                </div>
                            </form>
                    </div>
                </div>

            </>
        )
    }
}

export default Login;