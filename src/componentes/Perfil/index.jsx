import React, { useState } from 'react';
import './Perfil.css';
import { CircleUser } from 'lucide-react';

export default function Perfil() {
    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    return (
        <div>
            <button className="button-style" onClick={toggleModal}>
                Perfil <CircleUser size={30} color={'gray'} style={{ marginLeft: 5 }} />
            </button>

            {modalOpen && (
                <div className="backdrop-perfil">
                    <div className="dentro-perfil">
                        <h2 className='titulo-perfil'>Seu Perfil</h2>
                        <p>Nome: </p>
                        <p>Email: </p>
                        <button className="close-button-perfil" onClick={toggleModal}>Fechar</button>
                    </div>
                </div>
            )}
        </div>
    );
}

