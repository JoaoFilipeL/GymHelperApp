import Header from '../../componentes/Header'
import './TreinoBraco.css'

export default function TreinoBraco(){
    return(
        <div>
        <Header type='PERFIL'/>
        <div className="container-treino">
                <div className="titulo-treino">
                    <h2>Treino de Braço</h2>
                    <div className='linha-treinos' />
                   
                    <button className="button-novo-treino">Novo Treino</button>
                </div>
            </div>
        </div>

    )
}