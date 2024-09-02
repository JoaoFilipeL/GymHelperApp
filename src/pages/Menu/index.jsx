import CardMenu from "../../componentes/CardMenu";
import Header from "../../componentes/Header";
import './Menu.css';

export default function Menu() {

    return (
        <div>
            <Header type={'LOGIN PERFIL'} />
            <div className="linha-menu">Menu</div>
            <div className='linha-titulo' /> 
            <div className="cards">
                <CardMenu type='treino' title="Meus treinos" buttonText="Meus Treinos" description='Veja, crie ou atualize seus treinos!' link='/treinos'>
                </CardMenu>
                <CardMenu type='dieta' title="Minha dieta" buttonText="Minha Dieta" description='Veja, crie ou atualize sua dieta!' link='/dietas'>
                </CardMenu>
                <CardMenu type='progresso' title="Meu progresso" buttonText="Meu Progresso" description='Veja o quanto você evoluiu!' link='/progresso'>
                </CardMenu>
            </div>
        </div>

    )
}