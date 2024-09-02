import Header from '../../componentes/Header'
import './DietaCafedaManha.css'

export default function DietaCafedaManha(){
    return(
        <div>
        <Header type='PERFIL'/>
        <div className="container-dieta">
                <div className="titulo-dieta">
                    <h2>Café da Manhã</h2>
                    <div className='linha-dieta' />
                   
                    <button className="button-nova-dieta">Nova Refeição</button>
                </div>
            </div>
        </div>

    )
}