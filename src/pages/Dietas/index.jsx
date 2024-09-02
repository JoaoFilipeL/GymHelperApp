import './Dietas.css';
import CardDietas from '../../componentes/CardDietas';
import Header from '../../componentes/Header';
import CafedaManha from '../../assets/cafedamanha.png';
import Almoco from '../../assets/almoco.png';
import CafedaTarde from '../../assets/cafedatarde.png';
import Jantar from '../../assets/jantar.png';

export default function Dietas() {
    return (
        <div>
            <Header type={'PERFIL'} />
            <div className="linha-dietas">Dietas</div>
            <div className='linha-titulo' />
            <div className='dietas'>
                <CardDietas type='cafedamanha' title='Café da Manhã' link='/dietacafedamanha'>
                    <img src={CafedaManha} alt='Cafe da manha' />
                </CardDietas>
                <CardDietas type='almoco' title='Almoço' link='/dietaalmoco'>
                    <img src={Almoco} alt='Almoco' />
                </CardDietas>
                <CardDietas type='cafedatarde' title='Café da Tarde' link='/dietacafedatarde'>
                    <img src={CafedaTarde} alt='Cafe da tarde' />
                </CardDietas>
                <CardDietas type='jantar' title='Jantar' link='/dietajantar'>
                    <img src={Jantar} alt='Jantar' />
                </CardDietas>
            </div>
        </div>
    )
}