import './Formulario.css';
import CampoTexto from '../CampoTexto';

export const Formulario = () => {
    return(
        <section className="formulario">
            <div className='background'>
                <form className='form-formulario'>
                    <CampoTexto placeholder="Email" />
                    <CampoTexto placeholder="Senha" />  
                    <button className='button-login'>Login</button>
                    <a href='/Cadastrar' className='link-cadastrar '>Não tem conta? Cadastre aqui</a>
                </form>
            </div>
        </section>
    )
}
