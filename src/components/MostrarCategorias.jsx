import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const MostrarCategorias = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate()

   

    const getCategories = async () => {
        try {
            const url = `https://api.escuelajs.co/api/v1/categories`;
            const response = await axios.get(url);
            setProducts(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        getCategories();
    });

    const agregar = () => {
        navigate('/Agregar')
    }

    const handleDelete = async (id) => {
        try {
            const url = `https://api.escuelajs.co/api/v1/categories`;
            await axios.delete(`${url}/${id}`);
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
                                </tr>
                            </thead>
                            <tbody className='table-group-divider'>
                                {products.map((product, i) => (
                                    <tr key={product.id}>
                                        <td>{i + 1}</td>
                                        <td>{product.id}</td>
                                        <td><p>{product.name}</p></td>
                                        <td><p className='text-center'><img src={product.image} alt="" style={{ height: '200px' }} /></p></td>
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

