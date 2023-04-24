import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Inicio from './pages/inicio/Inicio'
import QuemSomos from './pages/qSomos/QuemSomos'
import Parceiros from './pages/advParceiros/Parceiros'

export default function Rotas() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Inicio />}></Route>
                <Route path='/Sobre' element={<QuemSomos />}></Route>
                <Route path='/AdvogadosParceiros' element={<Parceiros />}></Route>


            </Routes>
        </BrowserRouter>
    )
}