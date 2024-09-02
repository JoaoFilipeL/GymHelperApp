import {Link} from 'react-router-dom';
import './CardMenu.css';
import { Dumbbell } from 'lucide-react';
import { Utensils } from 'lucide-react';
import { ChartNoAxesCombined } from 'lucide-react';

export default function Card({type, title, buttonText, description, link }) {
    return (
        <div className='card-menu'>
           <div className='title'>
            <h3>{title}</h3>
            {type === 'treino' && <Dumbbell />} 
            {type === 'dieta' && <Utensils />}
            {type === 'progresso' && <ChartNoAxesCombined />}
            </div>
            <p>{description}</p>
            <div className='linha' /> 
            <Link to={link}>
            <button className='button'>{buttonText}</button>
            </Link>
        </div>
    )
}