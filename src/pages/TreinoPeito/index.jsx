import Header from '../../componentes/Header'
import './TreinoPeito.css'

export default function TreinoPeito(){
    return(
        <div>
        <Header type='PERFIL'/>
        <div className="container-treino">
                <div className="titulo-treino">
                    <h2>Treino de Peito</h2>
                    <div className='linha-treinos' />
                   
                    <button className="button-novo-treino">Novo Treino</button>
                </div>
            </div>
        </div>

    )
}