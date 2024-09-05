import React, { useState } from 'react';
import Header from '../../componentes/Header';
import ModalBraco from '../../componentes/ModalBraco';
import './TreinoBraco.css';

export default function TreinoBraco() {
    const [treinos, setTreinos] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [editIndex, setEditIndex] = useState(null); 

    const addOrUpdateTreino = (novoTreino) => {
        const updatedTreinos = [...treinos];

        if (editIndex !== null) {
           
            updatedTreinos[editIndex] = novoTreino;
        } else {
            
            const treinoNumero = treinos.length + 1;
            const novoTreinoComNumero = {
                ...novoTreino,
                nome: `Treino ${treinoNumero}`
            };
            updatedTreinos.push(novoTreinoComNumero);
        }

        setTreinos(updatedTreinos);
        setModalOpen(false);
        setEditIndex(null); 
    };

    const deleteTreino = (index) => {
        if (window.confirm('Tem certeza que deseja excluir este treino?')) {
            const newTreinos = treinos.filter((_, idx) => idx !== index);
            setTreinos(newTreinos);
        }
    };

    const openEditModal = (index) => {
        setEditIndex(index); 
        setModalOpen(true);
    };

    return (
        <div>
            <Header type='PERFIL'/>
            <div className="container-treino">
                <h2>Treino de Braço</h2>
                <button className="button-novo-treino" onClick={() => { setEditIndex(null); setModalOpen(true); }}>
                    Adicionar Treino
                </button>
                <div className="treino-list">
                    {treinos.map((treino, index) => (
                        <div key={index} className="treino-item">
                            <h3>{treino.nome}</h3>
                            <ul>
                                {treino.exercicios.map((ex, idx) => <li key={idx}>{ex}</li>)}
                            </ul>
                            <div className="treino-buttons">
                                <button onClick={() => deleteTreino(index)}>Excluir Treino</button>
                                <button onClick={() => openEditModal(index)}>Editar Treino</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {modalOpen && (
                <ModalBraco 
                    onSave={addOrUpdateTreino} 
                    onClose={() => setModalOpen(false)} 
                    treino={editIndex !== null ? treinos[editIndex] : null} 
                />
            )}
        </div>
    );
}
