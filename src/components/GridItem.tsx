import { Link } from "react-router-dom";
import "./CSS/GridItem.css";
interface Props {
    image: string | null;
    name: string;
}
function GridItem({ image, name }: Props) {
    return (
        <Link to={"/" + name} className="removeUnderline">
            <div className="grid">
                <img src={image} />
                <h5>{name}</h5>
            </div>
        </Link>
    );
}

export default GridItem;
