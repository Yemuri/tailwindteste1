import { Link } from "react-router-dom"
import './dropdown.css'

export default function Dropdown() {
    return (
        <div className="dropdown">
            <button className="dropbtn max-lg:hidden">Área do Cliente</button>
            <div className="dropdown-content">
                <Link to='/Login' >Login</Link>
                <Link to='/CadastreSe' >Cadastre-se</Link>
            </div>
        </div>
    )
}