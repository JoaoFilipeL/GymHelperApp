import Header from '../../componentes/Header'
import './TreinoCardio.css'

export default function TreinoCardio(){
    return(
        <div>
        <Header type='PERFIL'/>
        <div className="container-treino">
                <div className="titulo-treino">
                    <h2>Cardio</h2>
                    <div className='linha-treinos' />
                   
                    <button className="button-novo-treino">Novo Treino</button>
                </div>
            </div>
        </div>

    )
}