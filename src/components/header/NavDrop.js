import { Link } from "react-router-dom"
import '../dropdown/dropdown.css'

export default function Dropdown() {
    return (
        <div className="dropdown ">
            <button className="dropbtn hidden max-lg:flex max-lg:font-bold max-lg:text-xl max-lg:mr-96">Menu</button>
            <div className="dropdown-content">
                <Link to='/' >Home</Link>
                <Link to='/Sobre' >Sobre Nós</Link>
                <Link to='/AdvogadosParceiros' >Parceiros</Link>
                <Link to='/Login' >Login</Link>
                <Link to='/CadastreSe' >Cadastrar</Link>
            </div>
        </div>
    )
}