import "./CSS/Account.css";
import { Link } from "react-router-dom";
import back from "../assets/back.png";
import { useState } from "react";
interface Props {
    user: string;
    setUser: React.Dispatch<React.SetStateAction<string>>;
}
function Signin({ user, setUser }: Props) {
    document.body.style.backgroundColor = "lightgoldenrodyellow";
    const [userName, setUserName] = useState("");
    const [pwd, setPwd] = useState("");
    const [fail, setFail] = useState(false);
    const onSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/accounts")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setFail(true);
                for (const account of data) {
                    if (account.userName == userName && account.pwd == pwd) {
                        setUser(userName);
                        setFail(false);
                    }
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
            <div className="box signin">
                {user ? (
                    <h1 className="title">You have Successfully Signed In</h1>
                ) : (
                    <>
                        {fail && (
                            <div className="alert alert-danger" role="alert">
                                Your username or password is incorrect
                            </div>
                        )}
                        <h1 className="title">Sign in</h1>
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
                            <div className="horizontal">
                                <button
                                    type="submit"
                                    className="btn btn-primary greenbtn"
                                >
                                    Log in
                                </button>
                                <div className="right">
                                    <h6>Don't have an account?</h6>
                                    <Link to="/sign-up">Sign up</Link>
                                </div>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </>
    );
}

export default Signin;
