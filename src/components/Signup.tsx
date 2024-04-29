import "./CSS/Account.css";
import { Link } from "react-router-dom";
import back from "../assets/back.png";

function Signup() {
    return (
        <>
            <Link to="/" className="linkBack">
                {" "}
                <img src={back} className="back" />
                Back to Home
            </Link>
            <div className="bg">
                (user?<h1>You have Successfully Created an Account</h1>:
                <h1>Sign-in</h1>)
            </div>
        </>
    );
}

export default Signup;
