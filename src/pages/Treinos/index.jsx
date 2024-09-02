import Header from '../../componentes/Header';
import './Treinos.css';
import CardTreinos from '../../componentes/CardTreinos';
import Peitoral from '../../assets/peitoral.png';
import Costas from '../../assets/costas.png';
import Perna from '../../assets/perna.png';
import Braco from '../../assets/braco.png';
import Ombro from '../../assets/ombro.png';
import Cardio from '../../assets/cardio.png';

export default function Treinos() {
    return (
        <div>
            <Header type='PERFIL' />
            <div className="linha-treino">Treinos</div>
            <div className='linha-titulo' />
            <div className='treino-um'>
                <CardTreinos type='peito' title='Peito' link='/treinopeito'>
                    <img src={Peitoral} alt='Peitoral' />
                </CardTreinos>
                <CardTreinos type='costas' title='Costas' link='/treinocostas'>
                    <img src={Costas} alt='Costas' />
                </CardTreinos>
                <CardTreinos type='perna' title='Perna' link='/treinoperna'>
                    <img src={Perna} alt='Perna' />
                </CardTreinos>
            </div>
            <div className='treino-dois'>
                <CardTreinos type='braço' title='Braço' link='/treinobraco'>
                    <img src={Braco} alt='Braço' />
                </CardTreinos>
                <CardTreinos type='ombro' title='Ombro' link='/treinoombro'>
                    <img src={Ombro} alt='Ombro' />
                </CardTreinos>
                <CardTreinos type='cardio' title='Cardio' link='/treinocardio'>
                    <img src={Cardio} alt='Cardio' />
                </CardTreinos>
            </div>
        </div>
    )
}