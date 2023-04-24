import { Link } from 'react-router-dom'
import logo from '../../midia/logo.png'

export default function Home() {
    return (
        <div>
            <div className=' flex  bg-blue-950 pl-12 py-8 h-24 items-center '>
                <img src={logo} alt="logo" className='h-28' />
                <nav className='text-yellow-400/75 text-lg font-bold text-center flex justify-end space-x-20  w-full tracking-widest w-1/2 pr-12'>
                    <Link to='/' className='justify-center'>Home</Link>
                    <Link to='/Sobre'>Quem Somos</Link>
                    <Link to='/AdvogadosParceiros'>Advogados Parceiros</Link>
                    {/* AQUI VAI O DROPDOWN
                    LOGIN
                    CADASTRO
                */}
                </nav>
            </div>
        </div >

    )
}