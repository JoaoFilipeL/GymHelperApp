import './CardDietas.css';
import { Link } from 'react-router-dom';

export default function CardDietas({ title, link, children }) {
    return (

        <div className='card-dieta'>
            {children}
            <div className='title'>
                <h3 className='titledieta'>{title}</h3>
            </div>
            <Link to={link}>
                <button className='buttondieta'>
                </button>
            </Link>
        </div>
    )
}