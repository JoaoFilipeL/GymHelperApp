import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from '../pages/Login'
import Menu from '../pages/Menu'

export const AppRouter = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" exact element={<Menu />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    )
}