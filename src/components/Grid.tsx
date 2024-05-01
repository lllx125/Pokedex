import { useEffect, useState, useRef, ReactNode } from "react";
import Pokemon from "../Pokemon";
import GridItem from "./GridItem";
import "./CSS/Grid.css";

interface Props {
    pokemons: Pokemon[];
}

function Grid({ pokemons }: Props) {
    const itemPerRow = Math.floor(window.innerWidth / 220);
    const [tab, setTab] = useState<ReactNode[]>([]);
    const count = useRef(0);
    useEffect(() => {
        const temp = [];
        count.current = 0;
        for (var i = 0; i < Math.ceil(pokemons.length / itemPerRow); i++) {
            const row = [];
            for (var j = 0; j < itemPerRow; j++) {
                if (count.current >= pokemons.length) break;
                row.push(
                    <td>
                        <GridItem
                            image={pokemons[count.current].image}
                            name={pokemons[count.current].name}
                        />
                    </td>
                );
                count.current = count.current + 1;
            }
            temp.push(<tr>{row}</tr>);
        }
        setTab(temp);
    }, [pokemons]);
    return (
        <table className="tab">
            <tbody>
                {tab.length ? (
                    tab
                ) : (
                    <h1 className="tabHead">No Pokemons Found</h1>
                )}
            </tbody>
        </table>
    );
}

export default Grid;
