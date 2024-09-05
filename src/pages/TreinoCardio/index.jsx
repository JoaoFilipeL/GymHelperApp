import React, { useState } from 'react';
import Header from '../../componentes/Header';
import ModalCardio from '../../componentes/ModalCardio';
import './TreinoCardio.css';

export default function TreinoCardio() {
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
                <h2>Cardio</h2>
                <button className="button-novo-treino" onClick={() => { setEditIndex(null); setModalOpen(true); }}>
                    Adicionar Atividade
                </button>
                <div className="treino-list">
                    {treinos.map((treino, index) => (
                        <div key={index} className="treino-item">
                            <h3>{treino.nome}</h3>
                            <ul>
                                {treino.exercicios.map((ex, idx) => <li key={idx}>{ex}</li>)}
                            </ul>
                            <div className="treino-buttons">
                                <button onClick={() => deleteTreino(index)}>Excluir Atividade</button>
                                <button onClick={() => openEditModal(index)}>Editar Atividade</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {modalOpen && (
                <ModalCardio 
                    onSave={addOrUpdateTreino} 
                    onClose={() => setModalOpen(false)} 
                    treino={editIndex !== null ? treinos[editIndex] : null} 
                />
            )}
        </div>
    );
}