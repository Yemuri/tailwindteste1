import { Link } from 'react-router-dom'
import logo from '../../midia/logo.png'
import Dropdown from '../dropdown/Dropdown'
import NavDrop from './NavDrop'



export default function Home() {
    return (
        <div>
            <div className='bg-gray-100 flex items-center h-30'>
                <img src={logo} alt="logo" className='ml-20 max-lg:ml-1 max-lg:w-56 max-sm:w-56' />
                <nav className="font-medium flex justify-center w-full pl-5 space-x-60 mr-10 ">
                    <Link to='/' className="hover:text-yellow-600 max-lg:hidden ">Home</Link>
                    <Link to='/Sobre' className="hover:text-yellow-600 max-lg:hidden">Quem Somos</Link>
                    <Link to='/AdvogadosParceiros' className="hover:text-yellow-600 max-lg:hidden">Advogados Parceiros</Link>
                    <div>
                        <Dropdown />
                        <NavDrop />
                    </div>

                </nav>


            </div >
        </div>
    )
}