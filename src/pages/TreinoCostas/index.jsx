import Header from '../../componentes/Header'
import './TreinoCostas.css'

export default function TreinoCostas(){
    return(
        <div>
        <Header type='PERFIL'/>
        <div className="container-treino">
                <div className="titulo-treino">
                    <h2>Treino de Costas</h2>
                    <div className='linha-treinos' />
                   
                    <button className="button-novo-treino">Novo Treino</button>
                </div>
            </div>
        </div>

    )
}