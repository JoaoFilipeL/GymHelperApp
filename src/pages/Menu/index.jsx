import Card from "../../componentes/Card";
import Header from "../../componentes/Header";
import './Menu.css';

export default function Menu() {

    return (
        <div>
            <Header type={'PRIMARY'} />
            <div className="linha-menu">Menu</div>
            <div className='linha-titulo' /> 
            <div className="cards">
                <Card type='treino' title="Meus treinos" buttonText="Meus Treinos" description='Veja, crie ou atualize seus treinos!'>
                </Card>
                <Card type='dieta' title="Minha dieta" buttonText="Minha Dieta" description='Veja, crie ou atualize sua dieta!'>
                </Card>
                <Card type='progresso' title="Meu progresso" buttonText="Meu Progresso" description='Veja o quanto você evoluiu!'>
                </Card>
            </div>
        </div>

    )
}