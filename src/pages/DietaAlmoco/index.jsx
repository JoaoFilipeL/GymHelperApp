import Header from '../../componentes/Header'
import './DietaAlmoco.css'

export default function DietaAlmoco(){
    return(
        <div>
        <Header type='PERFIL'/>
        <div className="container-dieta">
                <div className="titulo-dieta">
                    <h2>Almoço</h2>
                    <div className='linha-dieta' />
                   
                    <button className="button-nova-dieta">Nova Refeição</button>
                </div>
            </div>
        </div>

    )
}