import { useState } from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    // string typed in the search bar, if 'search' is empty, show all pokemons
    const [search, setSearch] = useState("");
    // user name state, if 'user' is empty, then the account is logged out
    const [user, setUser] = useState("Lixing");
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Header
                                setSearch={setSearch}
                                user={user}
                                setUser={setUser}
                            />
                            <h1>{search}</h1>
                        </>
                    }
                ></Route>
                <Route path="/sign-in" element={<h1>sign in</h1>}></Route>
                <Route path="/sign-up" element={<h1>sign up</h1>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
