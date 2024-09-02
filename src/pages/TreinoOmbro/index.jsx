import Header from '../../componentes/Header'
import './TreinoOmbro.css'

export default function TreinoOmbro(){
    return(
        <div>
        <Header type='PERFIL'/>
        <div className="container-treino">
                <div className="titulo-treino">
                    <h2>Treino de Ombro</h2>
                    <div className='linha-treinos' />
                   
                    <button className="button-novo-treino">Novo Treino</button>
                </div>
            </div>
        </div>

    )
}