import { Link } from "react-router-dom";
import { Pokemon } from "pokenode-ts";
import back from "../assets/back.png";
import "./CSS/Detail.css";
interface Props {
    pokemon: Pokemon;
}
function Detail({ pokemon }: Props) {
    return (
        <>
            <Link to="/" className="linkBack">
                {" "}
                <img src={back} className="back" />
                Back to Home
            </Link>
            <div className="infoArea">
                <img src={pokemon.sprites.front_default} className="im" />
                <div className="description">
                    <h1>{pokemon.name}</h1>
                    <h5>ID: {pokemon.id}</h5>
                    <h5>Height: {pokemon.height}</h5>
                    <h5>Weight: {pokemon.weight}</h5>
                </div>
            </div>
        </>
    );
}

export default Detail;
