import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Inicio from './pages/inicio/Inicio'
import QuemSomos from './pages/qSomos/QuemSomos'
import Parceiros from './pages/advParceiros/Parceiros'
import CadastreSe from './pages/cadastreSe/CadastreSe'
import Login from './pages/login/Login'

export default function Rotas() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Inicio />}></Route>
                <Route path='/Sobre' element={<QuemSomos />}></Route>
                <Route path='/AdvogadosParceiros' element={<Parceiros />}></Route>
                <Route path='/CadastreSe' element={<CadastreSe />}></Route>
                <Route path='/Login' element={<Login />}></Route>


            </Routes>
        </BrowserRouter>
    )
}