import { Link } from "react-router-dom";
import { Pokemon } from "pokenode-ts";
import back from "../assets/back.png";
import "./CSS/Detail.css";
interface Props {
    pokemon: Pokemon;
}
function Detail({ pokemon }: Props) {
    console.log(pokemon.stats);

    return (
        <>
            <Link to="/" className="linkBack">
                {" "}
                <img src={back} className="back" />
                Back to Home
            </Link>
            <div className="infoArea horizontal">
                <img src={pokemon.sprites.front_default} className="im" />
                <div className="horizontal">
                    <div className="description">
                        <h1>{pokemon.name}</h1>
                        <div className="horizontal">
                            <div className="description">
                                <h4>Basics:</h4>
                                <h5>ID: {pokemon.id}</h5>
                                <h5>Height: {pokemon.height}</h5>
                                <h5>Weight: {pokemon.weight}</h5>
                                <h5>Species: {pokemon.species.name}</h5>
                            </div>
                            <div className="description">
                                <h4>Abilities:</h4>
                                <h5>{pokemon.abilities[0].ability.name}</h5>
                                <h5>
                                    {pokemon.abilities[1] &&
                                        pokemon.abilities[1].ability.name}
                                </h5>
                                <h5>
                                    {pokemon.abilities[2] &&
                                        pokemon.abilities[2].ability.name}
                                </h5>
                            </div>
                            <div className="description">
                                <h4>Types:</h4>
                                <h5>{pokemon.types[0].type.name}</h5>
                                <h5>
                                    {pokemon.types[1] &&
                                        pokemon.types[1].type.name}
                                </h5>
                                <h5>
                                    {pokemon.types[2] &&
                                        pokemon.types[2].type.name}
                                </h5>
                            </div>
                            <div className="description">
                                <h4>Stats:</h4>
                                <div className="horizontal">
                                    <div>
                                        <h5>
                                            {pokemon.stats[0].stat.name +
                                                ": " +
                                                pokemon.stats[0].base_stat}
                                        </h5>
                                        <h5>
                                            {pokemon.stats[1].stat.name +
                                                ": " +
                                                pokemon.stats[1].base_stat}
                                        </h5>
                                        <h5>
                                            {pokemon.stats[2].stat.name +
                                                ": " +
                                                pokemon.stats[2].base_stat}
                                        </h5>
                                    </div>
                                    <div>
                                        <h5>
                                            {pokemon.stats[3].stat.name +
                                                ": " +
                                                pokemon.stats[3].base_stat}
                                        </h5>
                                        <h5>
                                            {pokemon.stats[4].stat.name +
                                                ": " +
                                                pokemon.stats[4].base_stat}
                                        </h5>
                                        <h5>
                                            {pokemon.stats[5].stat.name +
                                                ": " +
                                                pokemon.stats[5].base_stat}
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text horizontal">
                <div>--</div>
                <div>
                    {pokemon.name.charAt(0).toUpperCase() +
                        pokemon.name.slice(1)}{" "}
                    is a {pokemon.types[0].type.name}{" "}
                    {pokemon.types[1] &&
                        "and " + pokemon.types[1].type.name + " "}
                    {pokemon.types[2] &&
                        "and " + pokemon.types[2].type.name + " "}
                    pokemon <br />
                    with {pokemon.abilities[1] ? "abilities" : "ability"}{" "}
                    {pokemon.abilities[0].ability.name}
                    {pokemon.abilities[1] &&
                        " and " + pokemon.abilities[1].ability.name}
                    .<br />
                    {pokemon.held_items[0] && (
                        <>
                            You might see it holding
                            {" " + pokemon.held_items[0].item.name}. <br />
                        </>
                    )}
                    When you defeat it, you will gain {pokemon.base_experience}{" "}
                    experience.
                </div>
                <div>--</div>
            </div>
        </>
    );
}

export default Detail;
