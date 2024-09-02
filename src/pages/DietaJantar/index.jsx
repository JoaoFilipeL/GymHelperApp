import Header from '../../componentes/Header'
import './DietaJantar.css'

export default function DietaJantar(){
    return(
        <div>
        <Header type='PERFIL'/>
        <div className="container-dieta">
                <div className="titulo-dieta">
                    <h2>Jantar</h2>
                    <div className='linha-dieta' />
                   
                    <button className="button-nova-dieta">Nova Refeição</button>
                </div>
            </div>
        </div>

    )
}