import { Link } from "react-router-dom";
import phone from './phone.png';


export default function Header() {
    return (
        <div id="cabecera">
            <img className="logo" src={phone} alt="header-logo" />
            <h3 className="mensaje"><Link to="/">Mi Tienda: Dina Spencer</Link></h3>
        </div>
    )
}