import { Link } from "react-router-dom";


export default function Header() {
    return (
        <div id="cabecera">
            <img className="logo" alt="header-logo" />
            <h3 className="mensaje"><Link to="/">Tienda Dina Spencer</Link></h3>
        </div>
    )
}