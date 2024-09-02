import './CardTreinos.css';
import { Link } from 'react-router-dom';

export default function CardTreinos({ title, link, children }) {
    return (

        <div className='card-treino'>
            {children}
            <div className='title'>
                <h3 className='titleTreino'>{title}</h3>
            </div>
            <Link to={link}>
            <button className='buttonTreino'>
            </button>
            </Link>
        </div>
    )
}