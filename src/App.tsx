import { useEffect, useState, useRef, ReactNode } from "react";
import Header from "./components/Header";
import Grid from "./components/Grid";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffectOnce } from "./useEffectOnce";
import { PokemonClient } from "pokenode-ts";
import "./App.css";
import Pokemon from "./Pokemon";
import Detail from "./components/Detail";
import Signup from "./components/Signup";
import Signin from "./components/Signin";

function App() {
    // string typed in the search bar, if 'search' is empty, show all pokemons
    const [search, setSearch] = useState("");
    // user name state, if 'user' is empty, then the account is logged out
    const [user, setUser] = useState("");
    // stores the route to the detail page of each pokemon
    const [detailPages, setDetailPages] = useState<ReactNode[]>([]);

    //download all the pokemons from the API when the page first loads
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    //percentage of pokemons downloaded
    const [loading, setLoading] = useState(0);
    //number of pokemons
    const total = 10;
    useEffectOnce(() =>
        (async () => {
            const api = new PokemonClient();
            for (var i = 1; i <= total; i++) {
                try {
                    const pokemonData = await api.getPokemonById(i);
                    const newPokemon: Pokemon = {
                        id: pokemonData.id,
                        name: pokemonData.name,
                        image: pokemonData.sprites.front_default,
                    };
                    pokemons.push(newPokemon);
                    //create the page for pokemons, the path is their name
                    detailPages.push(
                        <Route
                            path={"/" + newPokemon.name}
                            element={
                                <>
                                    <Header
                                        setSearch={setSearch}
                                        user={user}
                                        setUser={setUser}
                                    />
                                    <Detail pokemon={pokemonData} />
                                </>
                            }
                        ></Route>
                    );
                    //console.log(pokemonData);
                } catch (error) {
                    console.error(error);
                }
                setLoading(i);
            }
            setDisplay(pokemons);
        })()
    );
    //pokemons to display
    const [display, setDisplay] = useState<Pokemon[]>([]);
    //when search changes, change the pokemons to display
    useEffect(() => {
        setDisplay(pokemons.filter((p) => p.name.includes(search)));
    }, [search]);
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
                            {loading < total ? (
                                <div className="Loading">
                                    Loading:
                                    {" " +
                                        Math.floor((loading * 1000) / total) /
                                            10}
                                    %
                                </div>
                            ) : (
                                <Grid pokemons={display} search={search} />
                            )}
                        </>
                    }
                ></Route>
                <Route
                    path="/sign-in"
                    element={<Signin user={user} setUser={setUser} />}
                ></Route>
                <Route path="/sign-up" element={<Signup />}></Route>
                {detailPages}
            </Routes>
        </BrowserRouter>
    );
}

function get(link: string) {
    return;
}

export default App;
