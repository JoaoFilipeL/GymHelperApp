import './Formulario.css';
import CampoTexto from '../CampoTexto';
import UserService from "../service/UserService";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Formulario(){
    
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [error, setError] = useState('')
const navigate = useNavigate();

const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const userData = await UserService.login(email, password)
        console.log(userData)
        if (userData.token) {
            localStorage.setItem('token', userData.token)
            navigate('/menu')
        }else{
            setError(userData.message)
        }
        
    } catch (error) {
        console.log(error)
        setError(error.message)
        setTimeout(()=>{
            setError('');
        }, 5000);
    }
}


    return(
        <section className="formulario">
            <div onSubmit={handleSubmit} className='background'>
            {error && <p className="error-message">{error}</p>}
                <form className='form-formulario'>
                    <CampoTexto type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                    <CampoTexto type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" />  
                    <button  type="submit" className='button-login'>Login</button>
                    <a href='/auth/register' className='link-cadastrar '>Não tem conta? Cadastre aqui</a>
                </form>
            </div>
        </section>
    )
}
