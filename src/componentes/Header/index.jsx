import './Header.css';
import { LogIn } from 'lucide-react';
import Logo from '../../assets/logoGH.png';
import { Link } from 'react-router-dom';
import Perfil from '../Perfil';

export default function Header(props) {
    const types = props.type.split(' ');

    return (
        <div className="header">
            <div>
                <Link to='/'>
                    <button className='logo-button'>
                        <img src={Logo} alt='Logo' />
                    </button>
                </Link>
            </div>
            <div className='login'>
            <Link to='/login'>
                {types.includes('LOGIN') && (
                        <button className='button-style' > Login <LogIn size={30} color={'gray'} style={{ marginLeft: 5 }} /> </button> )}
                    </Link>
            </div>
            <div className='perfil'>
                {types.includes('PERFIL') && (
                    <Perfil />
                )}
                </div>
        </div>
    );
}
