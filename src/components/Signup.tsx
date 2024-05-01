import "./CSS/Account.css";
import { Link } from "react-router-dom";
import back from "../assets/back.png";
import { useState } from "react";
import "./CSS/Account.css";

function Signup() {
    //username must be within 3 to 24 characters
    const USER_REGEX = /^[a-zA-Z0-9-_]{3,24}$/;
    //password must include lower case and upper case and number and be within 6 to 24 characters
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,24}$/;

    const [userName, setUserName] = useState("");
    const [pwd, setPwd] = useState("");
    const [match, setMatch] = useState("");
    //state of sign in page, 0=>nothing, 1=>invalid username, 2=> username is taken, 3=> invalid password, 4=>password does not match, 5=>success
    const [state, setState] = useState(0);
    //whether the username has been taken
    const Message = () => {
        switch (state) {
            case 0:
                return;
            case 1:
                return (
                    <div className="alert alert-danger" role="alert">
                        Your user name is invalid. User name must name 3~24
                        characters
                    </div>
                );
            case 2:
                return (
                    <div className="alert alert-danger" role="alert">
                        This username has been taken
                    </div>
                );
            case 3:
                return (
                    <div className="alert alert-danger" role="alert">
                        Your password is invalid. Password must be 6~24
                        characters, include at least one upper case, lower case,
                        and number
                    </div>
                );
            case 4:
                return (
                    <div className="alert alert-danger" role="alert">
                        Your passwords don't not match
                    </div>
                );
            case 5:
                return (
                    <div className="alert alert-success" role="alert">
                        You have successfully created an account
                    </div>
                );
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (!USER_REGEX.test(userName)) {
            setState(1);
            return;
        }
        if (!PWD_REGEX.test(pwd)) {
            setState(3);
            return;
        }
        if (pwd != match) {
            setState(4);
            return;
        }
        fetch("http://localhost:3000/accounts")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                for (const account of data) {
                    if (account.userName == userName) {
                        console.log(account);
                        setState(2);
                        return false;
                    }
                }
                return true;
            })
            .then((flag) => {
                if (flag) {
                    setState(5);
                    fetch("http://localhost:3000/accounts", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ userName, pwd }),
                    });
                }
            });
    };

    return (
        <>
            <Link to="/" className="linkBack">
                {" "}
                <img src={back} className="back" />
                Back to Home
            </Link>
            <div className="box signup">
                <Message />
                <h1 className="title">Sign up</h1>
                <form onSubmit={onSubmit}>
                    <label htmlFor="username" className="form-label">
                        User Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        onChange={(e) => {
                            setUserName(e.target.value);
                        }}
                    />
                    <div className="spacer"></div>
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        onChange={(e) => {
                            setPwd(e.target.value);
                        }}
                    />
                    <div className="spacer"></div>
                    <label htmlFor="confirmPassword" className="form-label">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        onChange={(e) => {
                            setMatch(e.target.value);
                        }}
                    />
                    <div className="spacer"></div>
                    <div className="horizontal">
                        <button
                            type="submit"
                            className="btn btn-primary bluebtn"
                        >
                            Create account
                        </button>
                        <div className="right">
                            <h6>Already have an account?</h6>
                            <Link to="/sign-in">Sign in</Link>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Signup;
