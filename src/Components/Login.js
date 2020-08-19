import React from "react";

class Login extends React.Component {
    state={
        users: [],
        user: null
    }




    render() {

        return (
            <div className="center-form">
                <h1>Log in</h1>
                <form className="auth-form" action='/dashboard' onSubmit={this.handleSubmit}>
                    <input className="inputFields"
                        name="username"
                        value={this.state.username}
                        type="username"
                        onChange={this.handleChange}
                        placeholder="username"
                    />
                    <input className="inputFields"
                        name="password"
                        value={this.state.password}
                        type="password"
                        onChange={this.handleChange}
                        placeholder="password"
                    />
                    <button className="login" type="submit" href="./dashboard">
                        Login
          </button>
                </form>
            </div>
        )

    }

}

export default Login