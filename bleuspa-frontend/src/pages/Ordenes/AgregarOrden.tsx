import './Ordenes.css'
import 'rsuite/dist/rsuite-rtl.css'

import React, { useEffect, useState } from 'react';
import { DatePicker } from 'rsuite';
import { Checkbox, Divider, FormControlLabel, SvgIcon, SvgIconProps } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function KeyboardReturnIcon(props: SvgIconProps) {
    return (
        <SvgIcon {...props}>
            <path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z" />
        </SvgIcon>
    );
}

function KeyboardAddIcon(props: SvgIconProps) {
    return (
        <SvgIcon {...props}>
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" />
        </SvgIcon>
    );
}

function KeyboardClearIcon(props: SvgIconProps) {
    return (
        <SvgIcon {...props}>
            <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </SvgIcon>
    );
}

function AgregarOrden() {
    const [checked, setChecked] = React.useState(false);
    const navigate = useNavigate();
    const handleClick_Ord = () => navigate('/ordenes');

    const [clientes, setClientes] = useState([]);
    const [productos, setProductos] = useState([]);
    const [detallesList, setDetallesList] = useState([]);

    const [detalleOrden, setDetalleOrden] = useState({
        id_product: "",
        price: 0,
        quantity: 0
    });

    const [orden, setOrden] = useState({
        id_client: "",
        date: new Date(),
        detalles: [],
    });

    const columns: GridColDef[] = [
        {
            field: 'product', headerName: 'Producto', width: 280, renderCell: (params) => {
                const product = productos.find((producto) => producto._id === params.row.id_product);
                return product ? product.name : '';
            }
        },
        { field: 'sale_price', headerName: 'Precio Unitario', width: 200, renderCell: (params) => {
                const product = productos.find((producto) => producto._id === params.row.id_product);
                return product ? product.sale_price.$numberDecimal : '';
            } 
        },
        { field: 'quantity', headerName: 'Cantidad', width: 200, renderCell: (params) => params.row.quantity },
        { field: 'price', headerName: 'Total', width: 200, renderCell: (params) => params.row.price },
        {
            field: '   ', width: 80, sortable: false, filterable: false,
            renderCell: (params) => {
                const handleDelete = () => {
                    // Filter out the row with the corresponding id_product
                    const updatedOrdenDetalles = orden.detalles.filter((detalle) => detalle.id_product !== params.row.id_product);
                    // Update the orden state with the filtered detalles array
                    setOrden({ ...orden, detalles: updatedOrdenDetalles });
                    // Update the detallesList state with the filtered detalles array
                    setDetallesList(updatedOrdenDetalles);
                };

                return (
                    <button
                        id='button_Del'
                        type='button'
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        onClick={handleDelete}
                    >
                        <KeyboardClearIcon
                            sx={[
                                {
                                    '&': {
                                        color: '#808080',
                                        backgroundColor: 'transparent'
                                    }
                                },
                                {
                                    '&:hover': {
                                        color: '#e44242'
                                    }
                                }
                            ]}
                        />
                    </button>
                );
            }
        }
    ];

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/clientes")
            .then((response) => response.data)
            .then((data) => {
                setClientes(data);
            })
            .catch((err) => {
                console.log('No se encontraron clientes.', err)
            });
        axios
            .get("http://localhost:8000/api/productos")
            .then((response) => response.data)
            .then((data) => {
                setProductos(data);
            })
            .catch((err) => {
                console.log('No se encontraron productos.', err)
            });
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/api/addOrden", orden)
            .then((res) => {
                setOrden({
                    id_client: "",
                    date: new Date(),
                    detalles: [],
                });
                alert("Orden creada exitosamente!")
                navigate("/ordenes");
            })
            .catch((err) => {
                console.log("No se pudo agregar la orden." + err);
            });
    }

    const handleChange = (e) => {
        setChecked(e.target.checked);
        setDetalleOrden({
            ...detalleOrden
        });
    };

    const onChange = (e) => {
        setOrden({
            ...orden,
            [e.target.name]: e.target.value
        });
    };

    const handleDateChange = (date) => {
        setOrden({
            ...orden,
            date: date
        });
    };

    const onChangeDetalleOrden = (e) => {
        const { name, value } = e.target;
        if (name === 'quantity') {
            const product = productos.find(producto => producto._id === detalleOrden.id_product);
            const salePrice = product ? parseFloat(product.sale_price.$numberDecimal) : 0;
            const quantity = parseInt(value, 10);
            const newPrice = salePrice * quantity;

            setDetalleOrden({
                ...detalleOrden,
                [name]: value,
                price: newPrice
            });
        } else {
            setDetalleOrden({
                ...detalleOrden,
                [name]: value
            });
        }

        //console.log("DETALLE ORDEN: ", detalleOrden);
    };

    const handleAgregarOrdenClick = () => {
        let updatedDetalleOrden = { ...detalleOrden };
    
        // Check if the selected product already exists in the detalles array
        const existingDetalleIndex = orden.detalles.findIndex((detalle) => detalle.id_product === updatedDetalleOrden.id_product);
    
        if (existingDetalleIndex !== -1) {
            // Product already exists, update the existing entry
            const updatedDetalles = [...orden.detalles];
            updatedDetalles[existingDetalleIndex] = { ...updatedDetalleOrden, id_product: orden.detalles[existingDetalleIndex].id_product };
            setOrden({ ...orden, detalles: updatedDetalles });
            setDetallesList(updatedDetalles);
        } else {
            // Product does not exist, add a new entry
            const updatedOrden = { ...orden, detalles: [...orden.detalles, updatedDetalleOrden] };
            setOrden(updatedOrden);
            setDetallesList(updatedOrden.detalles);
    
            // Clear the component values
            setDetalleOrden({
                id_product: "",
                price: 0,
                quantity: 0
            });
        }
    
        console.log("Orden after adding detalles:", orden);
    };    

    return (
        <div style={{ backgroundColor: '#f2f2f2' }}>
            <h1 id='Titulo'>
                REGISTRAR ORDEN
            </h1>
            <div id='Box'>
                <form onSubmit={onSubmit}>
                    <div style={{ display: 'flex' }}>
                        <div id='textfieldsOrdenes'>
                            <select id='selectOrden' name="id_client" value={orden.id_client} onChange={onChange} style={{ width: '65.5ch' }}>
                                <option value="" style={{ fontStyle: 'italic' }}>--Seleccione un Cliente--</option>
                                {clientes.map((cliente) => (
                                    <option key={cliente._id} value={cliente._id}>{cliente.name}</option>
                                ))}
                            </select>
                        </div>
                        <DatePicker label={'Fecha de Registro:'} style={{}} format='dd-MM-yyyy' value={orden.date} onChange={handleDateChange} ></DatePicker>
                    </div>

                    <Divider style={{ marginBottom: '15px' }}></Divider>

                    <div className='productos'>
                        <div id='textfieldsOrdenes'>
                            <select id='selectOrden' name="id_product" value={detalleOrden.id_product} onChange={onChangeDetalleOrden} style={{ width: '45ch' }}>
                                <option value="" style={{ fontStyle: 'italic' }}>--Seleccione un Producto--</option>
                                {productos.map((producto) => (
                                    <option key={producto._id} value={producto._id}>{producto.name}</option>
                                ))}
                            </select>
                        </div>
                        <div id='textfieldsOrdenes'>
                            <input id='textfieldOrden' name='quantity' placeholder='Cantidad' style={{ width: '10ch', marginRight: '20px' }} value={detalleOrden.quantity} onChange={onChangeDetalleOrden}></input>
                            <label id='textfieldLabel'>Cantidad</label>
                        </div>

                        <button
                            id='button_Agr'
                            type="button"
                            onClick={handleAgregarOrdenClick}
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                            <KeyboardAddIcon
                                sx={{
                                    color: 'white',
                                    fontSize: '25px'
                                }}
                            />
                        </button>
                    </div>

                    <div style={{ height: 300, width: '100%' }}>
                        <DataGrid
                            rows={detallesList}
                            columns={columns}
                            getRowId={(row) => row.id_product}
                            initialState={{
                                pagination: {
                                    paginationModel: { page: 0, pageSize: 5 },
                                },
                            }}
                            pageSizeOptions={[5, 10]}
                            checkboxSelection={false} // Disable checkbox selection
                            disableRowSelectionOnClick // Disable row selection on click
                            autoHeight
                        />
                    </div>

                    <div>
                        <button id='button_reg' onClick={handleClick_Ord} >
                            <KeyboardReturnIcon
                                sx={{
                                    color: 'white',
                                    fontSize: '25px',
                                    display: 'inline',
                                    verticalAlign: 'bottom',
                                    marginRight: '4px'
                                }}
                            />
                            REGRESAR
                        </button>
                        <button type="submit" id='button_acp'>AGREGAR ORDEN</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AgregarOrden;