import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const MostrarCategorias = () => {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate()

   

    const getCategories = async () => {
        try {
            const url = `https://api.escuelajs.co/api/v1/categories`;
            const response = await axios.get(url);
            setCategories(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        getCategories();
    }, []);

    const agregar = () => {
        navigate('/Agregar')
    }

    const editar = (id) => {
        navigate(`Editar/${id}`)
    }

    const handleDelete = async (id) => {
        try {
            const url = `https://api.escuelajs.co/api/v1/categories/${id}`;
            await axios.delete(url);
            getCategories();
        } catch (error) {
            console.error('Error al eliminar la categoría:', error);
        }
    };

    return (
        <>
            <div className='container-fluid'>
                <div className='row mt-3'>
                    <div className='col-md-4 offset-md-4'>
                        <div className='d-grid mx-auto'>
                            <button className='btn btn-dark' onClick={() => agregar()}>
                                Añadir
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row mt-3'>
                <div className='col-12 col-lg-8 offset-0 offset-lg-2'>
                    <div className='table-responsive'>
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>id</th>
                                    <th>Name</th>
                                    <th>Image</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody className='table-group-divider'>
                                {categories.map((categorie, i) => (
                                    <tr key={categorie.id}>
                                        <td>{i + 1}</td>
                                        <td>{categorie.id}</td>
                                        <td><p>{categorie.name}</p></td>
                                        <td><p className='text-center'><img src={categorie.image} alt="" style={{ height: '200px' }} /></p></td>
                                        <td> <button className='btn btn-danger' onClick={() => handleDelete(categorie.id)}>Eliminar</button> 
                                        <button className='btn btn-warning' onClick={() => editar(categorie.id)}>Editar</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

          
        </>
    );
};

