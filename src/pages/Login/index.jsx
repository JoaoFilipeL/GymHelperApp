import { Formulario } from "../../componentes/Formulario";
import Header from "../../componentes/Header";
import './Login.css';

export default function Login() {
  return (
    <div className="App">
        <Header type={'logo'}/>
        <div className="linha-login">Login</div>
        <div className='linha-titulo' /> 
        <Formulario />
    </div>
  );
}