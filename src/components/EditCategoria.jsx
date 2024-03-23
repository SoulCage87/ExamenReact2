import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export const EditCategoria = () => {
    const { id } = useParams(); 
    const [name, setName] = useState('');
    const navigate = useNavigate()

    useEffect(() => {
       
        const getCategory = async () => {
            try {
                const response = await axios.get(`https://api.escuelajs.co/api/v1/categories/${id}`);
                setName(response.data.name);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        getCategory();
    }, [id]); 

    const handleEdit = async () => {
        try {
            await axios.put(`https://api.escuelajs.co/api/v1/categories/${id}`, { name: name });
            navigate('/')
        } catch (error) {
            console.error('Error al editar la categoría:', error);
        }
    };

    return (
        <>
            <div className="position-absolute top-50 start-50 translate-middle">
                <div className="card">
                    <div className="card-body">
                        <h5 className='card-title'>Edita tu categoría</h5>
                        <input
                            className="form-control form-control-lg"
                            type="text"
                            placeholder="Nombre de la categoría"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <button className='btn btn-success mt-3' onClick={handleEdit}>Guardar</button>
                    </div>
                </div>
            </div>
        </>
    );
};

