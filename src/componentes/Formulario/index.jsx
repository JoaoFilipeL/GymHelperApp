import './Formulario.css';
import CampoTexto from '../CampoTexto';

export const Formulario = () => {
    return(
        <section className="formulario">
            <div className='background'>
                <form>
                    <CampoTexto placeholder="Usuário" />
                    <CampoTexto placeholder="Senha" />  
                </form>
            </div>
        </section>
    )
}
