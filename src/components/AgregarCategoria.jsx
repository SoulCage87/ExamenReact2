import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const AgregarCategoria = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('https://api.escuelajs.co/api/v1/categories', {
                name: name,
                image: image
            });
            navigate('/');
        } catch (error) {
            console.error('Error al agregar la categoría:', error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="position-absolute top-50 start-50 translate-middle">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Agregar Categoría</h5>
                        <input
                            className="form-control form-control-lg"
                            type="text"
                            placeholder="Nombre de la categoría"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            className="form-control form-control-lg"
                            type="text"
                            placeholder="URL de la imagen"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                        />
                        <button type="submit" className="btn btn-primary mt-3">Agregar</button>
                    </div>
                </div>
            </div>
        </form>
    );
};

