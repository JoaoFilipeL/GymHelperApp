import Header from '../../componentes/Header'
import './DietaCafedaTarde.css'

export default function DietaCafedaTarde(){
    return(
        <div>
        <Header type='PERFIL'/>
        <div className="container-dieta">
                <div className="titulo-dieta">
                    <h2>Café da Tarde</h2>
                    <div className='linha-dieta' />
                   
                    <button className="button-nova-dieta">Nova Refeição</button>
                </div>
            </div>
        </div>

    )
}