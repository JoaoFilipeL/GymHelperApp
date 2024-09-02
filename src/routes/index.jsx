import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from '../pages/Login'
import Menu from '../pages/Menu'
import Cadastrar from '../pages/Cadastrar'
import Treinos from '../pages/Treinos'
import Dietas from '../pages/Dietas'
import Progresso from '../pages/Progresso'
import TreinoPeito from '../pages/TreinoPeito'
import TreinoCostas from '../pages/TreinoCostas'
import TreinoPerna from '../pages/TreinoPerna'
import TreinoBraco from '../pages/TreinoBraco'
import TreinoOmbro from '../pages/TreinoOmbro'
import TreinoCardio from '../pages/TreinoCardio'
import DietaCafedaManha from '../pages/DietaCafedaManha'
import DietaAlmoco from '../pages/DietaAlmoco'
import DietaCafedaTarde from '../pages/DietaCafedaTarde'
import DietaJantar from '../pages/DietaJantar'

export const AppRouter = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" exact element={<Menu />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastrar" element={<Cadastrar />} />
                <Route path="/treinos" element={<Treinos />} />
                <Route path="/treinopeito" element={<TreinoPeito />} />
                <Route path="/treinocostas" element={<TreinoCostas />} />
                <Route path="/treinoperna" element={<TreinoPerna />} />
                <Route path="/treinobraco" element={<TreinoBraco />} />
                <Route path="/treinoombro" element={<TreinoOmbro />} />
                <Route path="/treinocardio" element={<TreinoCardio />} />
                <Route path="/dietas" element={<Dietas />} />
                <Route path="/dietacafedamanha" element={<DietaCafedaManha />} />
                <Route path="/dietaalmoco" element={<DietaAlmoco />} />
                <Route path="/dietacafedatarde" element={<DietaCafedaTarde />} />
                <Route path="/dietaJantar" element={<DietaJantar />} />
                <Route path="/progresso" element={<Progresso />} />
            </Routes>
        </Router>
    )
}