import logo from "../assets/pokeball_gray.png";
import { Link, Navigate } from "react-router-dom";
import "./CSS/Header.css";
import { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";

interface Props {
    user: string;
    setUser: React.Dispatch<React.SetStateAction<string>>;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

function Header({ user, setUser, setSearch }: Props) {
    document.body.style.backgroundColor = "white";
    //text in the searh bar
    const [searchBar, setSearchBar] = useState("");
    const navigate = useNavigate();
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
                            setSearch("");
                            console.log(user);
                        }}
                    />
                </Link>
                {/* If user is not signed in user="" and the sign in link will display
                If the user has signed in it will is display Hi, 'user', and a log out link*/}
                {user ? (
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">Hi, {user}</li>
                        <li className="nav-item">
                            <Link
                                to="/"
                                className="link"
                                onClick={() => setUser("")}
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
                            setSearch(searchBar);
                            navigate("/");
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
}

export default Header;
