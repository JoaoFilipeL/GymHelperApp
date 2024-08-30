import CampoTexto from '../CampoTexto';
import './FormularioCadastro.css';

export const FormularioCadastro = () => {
    return (
        <section className="formulario-cadastro">
            <div className='background-cadastro'>
                <form className='form-formulario-cadastro'>
                    <div className='formulario-cadastro'>
                        <div>
                            <CampoTexto placeholder="Nome " />
                            <CampoTexto placeholder="Senha" />
                            <CampoTexto placeholder="Altura" />
                        </div>
                        <div>
                            <CampoTexto placeholder="Sobrenome" />
                            <CampoTexto placeholder="Confirmar Senha" />
                            <CampoTexto placeholder="Peso" />
                        </div>
                        <div>
                            <CampoTexto placeholder="Email" />
                            <CampoTexto placeholder="Idade" />
                            <CampoTexto placeholder="Peso Alvo" />
                        </div>
                    </div>
                    <button className='button-cadastro'>Cadastrar</button>
                    <a href='/Login' className='link-cadastrar '>Ja possui conta? Clique aqui</a>
                </form>
            </div>
        </section>
    )
}