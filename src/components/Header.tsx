import logo from "../assets/pokeball_gray.png";
import { Link } from "react-router-dom";
import "./CSS/Header.css";
import { useRef, useState } from "react";

const Header = (props) => {
    const [searchBar, setSearchBar] = useState("");
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                {/* logo, link to home page, and clear out the search*/}
                <Link to="/">
                    <img
                        src={logo}
                        alt="Resized Image"
                        width="30"
                        onClick={() => {
                            props.setSearch("");
                            console.log(props.user);
                        }}
                    />
                </Link>
                {/* If user is not signed in props.user="" and the sign in link will display
                If the user has signed in it will is display Hi, 'user', and a log out link*/}
                {props.user ? (
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">Hi, {props.user}</li>
                        <li className="nav-item">
                            <Link
                                to="/"
                                className="link"
                                onClick={() => props.setUser("")}
                            >
                                Log out
                            </Link>
                        </li>
                    </ul>
                ) : (
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/sign-in" className="link">
                                Sign in
                            </Link>
                        </li>
                    </ul>
                )}
                <div
                    className="collapse navbar-collapse"
                    id="navbarTogglerDemo03"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                    <form
                        className="d-flex"
                        role="search"
                        onSubmit={(e) => {
                            e.preventDefault();
                            props.setSearch(searchBar);
                        }}
                    >
                        <input
                            className="form-control me-2"
                            type="text"
                            placeholder="Search"
                            aria-label="Search"
                            onChange={(e) => {
                                setSearchBar(e.target.value);
                            }}
                        />
                        <button
                            className="btn btn-outline-success"
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Header;
