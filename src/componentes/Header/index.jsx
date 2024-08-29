import './Header.css';
import { CircleUser } from 'lucide-react';
import Logo from '../../assets/logoGH.png';

export default function Header(props) {
    return(
        <div className="header">
            <img src={Logo} alt='Logo'/>
            {props.type === 'PRIMARY' && <button className="button-style">Perfil <CircleUser size={30} color={'gray'} style={{marginLeft: 5}}/></button>}
        </div>
    );
}
