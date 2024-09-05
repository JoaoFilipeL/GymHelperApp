import React, { useState } from 'react';
import UserService from '../service/UserService';
import CampoTexto from '../CampoTexto';
import './FormularioCadastro.css';

export default function FormularioCadastro() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Call the register method from UserService

            const token = localStorage.getItem('token');
            await UserService.register(formData, token);

            // Clear the form fields after successful registration
            setFormData({
                name: '',
                email: '',
                password: ''
            });
            alert('User registered successfully');

        } catch (error) {
            console.error('Error registering user:', error);
            alert('An error occurred while registering user');
        }
    };

    return (
        <section className="formulario-cadastro">
            <div className='background-cadastro'>
                <form onSubmit={handleSubmit} className='form-formulario-cadastro'>
                    <div className='formulario-cadastro'>
                        <div>
                            <CampoTexto type="text" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Nome "/>
                        </div>
                        <div>
                            <CampoTexto type="email" name="email" value={formData.name} onChange={handleInputChange} required placeholder="Email" />

                          
                        </div>
                        <div>
                            <CampoTexto type="password" name="password" value={formData.name} onChange={handleInputChange} required placeholder="Senha" />


                        </div>
                    </div>
                    <button type="submit" className='button-cadastro'>Cadastrar</button>
                    <a href='/auth/login' className='link-cadastrar '>Ja possui conta? Clique aqui</a>
                </form>
            </div>
        </section>
    )
}