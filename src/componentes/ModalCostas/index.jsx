import React, { useState, useEffect } from 'react';
import './ModalCostas.css';

export default function ModalCostas({ onSave, onClose, treino }) {
    const [exercicios, setExercicios] = useState([]);
    const [inputValue, setInputValue] = useState(""); 
    const [series, setSeries] = useState(""); 
    const [repeticoes, setRepeticoes] = useState(""); 

    useEffect(() => {
        if (treino) {
            setExercicios(treino.exercicios || []);
        } else {
            setExercicios([]); 
        }
    }, [treino]);

    const confirmModal = () => {
        if (exercicios.length > 0) {
            onSave({
                nome: treino ? treino.nome : 'Treino de Costas', 
                exercicios: exercicios
            });
            onClose();
        }
    };

    const handleInput = (e) => {
        setInputValue(e.target.value);
    };

    const handleSeriesInput = (e) => {
        setSeries(e.target.value);
    };

    const handleRepeticoesInput = (e) => {
        setRepeticoes(e.target.value);
    };

    const handleEnter = (e) => {
        if (e.key === 'Enter' && inputValue.trim() && series.trim() && repeticoes.trim()) {
            
            setExercicios([...exercicios, `${inputValue},  ${series}  séries, ${repeticoes} repetições.`]);
            setInputValue("");
            setSeries("");
            setRepeticoes("");
        }
    };

    const removeExercicio = (index) => {
        const newExercicios = exercicios.filter((_, idx) => idx !== index);
        setExercicios(newExercicios);
    };

    return (
        <div className="backdrop-ModalCostas">
            <div className="dentro-ModalCostas">
                <h2 className='titulo-ModalCostas'>{treino ? treino.nome : 'Novo Treino de Costas'}</h2>
                {exercicios.map((exercicio, index) => (
                    <div key={index} className="input-wrapper">
                        <input value={exercicio} readOnly />
                        <button className="remove-button" onClick={() => removeExercicio(index)}>X</button>
                    </div>
                ))}
                <div className="input-group">
                    <input 
                        className="input-novo-exercicio"
                        placeholder="Nome do exercício"
                        value={inputValue}
                        onChange={handleInput}
                    />
                    <input 
                        className="input-series"
                        placeholder="Séries"
                        value={series}
                        onChange={handleSeriesInput}
                    />
                    <input 
                        className="input-repeticoes"
                        placeholder="Repetições"
                        value={repeticoes}
                        onChange={handleRepeticoesInput}
                        onKeyDown={handleEnter}
                    />
                </div>
                <div className="action-buttons">
                    <button className="confirm-button" onClick={confirmModal}>Confirmar</button>
                    <button className="cancel-button" onClick={onClose}>Cancelar</button>
                </div>
            </div>
        </div>
    );
}