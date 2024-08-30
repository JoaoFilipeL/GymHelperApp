import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from '../pages/Login'
import Menu from '../pages/Menu'
import Cadastrar from '../pages/Cadastrar'
import Treinos from '../pages/Treinos'
import Dietas from '../pages/Dietas'
import Progresso from '../pages/Progresso'

export const AppRouter = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" exact element={<Menu />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastrar" element={<Cadastrar />} />
                <Route path="/treinos" element={<Treinos />} />
                <Route path="/dietas" element={<Dietas />} />
                <Route path="/progresso" element={<Progresso />} />
            </Routes>
        </Router>
    )
}