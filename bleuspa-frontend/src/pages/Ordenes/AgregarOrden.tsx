import './Ordenes.css'

import React, { useEffect, useState } from 'react';
import DateRPicker from '../../components/Calendar/DateRangePicker';
import { DatePicker } from 'rsuite';
import { Checkbox, Divider, FormControlLabel, SvgIcon, SvgIconProps, TextField } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
        editable: true,
    },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: '   ', width: 80, sortable: false, filterable: false, renderCell: (params) => {
            return (
                <button id='button_Del' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                                },
                            },
                        ]}
                    />
                </button>
            );
        }
    }
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
];

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

    const [orden, setOrden] = useState({
        id_client: "",
        date: new Date()
    });

    const [detalleOrden, setDetalleOrden] = useState({
        id_order: "",
        id_product: "",
        price: "",
        quantity: "",
    });

    const [clientes, setClientes] = useState([]);
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/clientes")
            .then((response) => response.data)
            .then((data) => {
                setClientes(data);
            })
            .catch((err) => {
                console.log('No se encontraron clientes.')
            });
        axios
            .get("http://localhost:8000/api/productos")
            .then((response) => response.data)
            .then((data) => {
                setProductos(data);
            })
            .catch((err) => {
                console.log('No se encontraron productos.')
            });
    }, []);

    function handleChange(e) {
        setChecked(e.target.checked);
    }

    const onChangeO = (e) => {
        setOrden({
            ...orden,
            [e.target.name]: e.target.value
        });
        console.log(orden);
    }

    const onChangeD = (e) => {
        setDetalleOrden({
            ...detalleOrden,
            [e.target.name]: e.target.value
        });
        console.log(detalleOrden);
    }

    const handleDateChange = (date) => {
        setOrden({
            ...orden,
            date: date
        });
    };

    return (
        <div style={{ backgroundColor: '#f2f2f2' }}>
            <h1 id='Titulo'>
                AGREGAR ORDEN
            </h1>
            <div id='Box'>
                <form action="">
                    <div style={{ display: 'flex' }}>
                        <div id='textfieldsOrdenes'>
                            <select id='selectOrden' name="id_client" value={orden.id_client} onChange={onChangeO} style={{ width: '65.5ch' }}>
                                <option value="" style={{ fontStyle: 'italic' }}>--Seleccione un Cliente--</option>
                                {clientes.map((cliente) => (
                                    <option key={cliente._id} value={cliente._id}>{cliente.name}</option>
                                ))}
                            </select>
                        </div>
                        <DatePicker label={'Fecha de Registro:'} style={{}} format='dd-MM-yyyy' ></DatePicker>
                    </div>

                    <Divider style={{ marginBottom: '15px' }}></Divider>

                    <div className='productos'>
                        <div id='textfieldsOrdenes'>
                            <select id='selectOrden' name="id_product" value={detalleOrden.id_product} onChange={onChangeD} style={{ width: '45ch' }}>
                                <option value="" style={{ fontStyle: 'italic' }}>--Seleccione un Producto--</option>
                                {productos.map((producto) => (
                                    <option key={producto._id} value={producto._id}>{producto.name}</option>
                                ))}
                            </select>
                        </div>
                        <div id='textfieldsOrdenes'>
                            <input id='textfieldOrden' placeholder='Cantidad' style={{ width: '12ch', marginRight: '20px' }}></input>
                            <label id='textfieldLabel'>Cantidad</label>
                        </div>

                        <FormControlLabel control={<Checkbox onChange={handleChange} />} label="Prestado" />
                        {checked ? (
                            <div style={{ marginRight: '10px' }}><DateRPicker></DateRPicker> </div>
                        ) : (
                            <div> </div>
                        )}

                        <button id='button_Agr' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                            rows={rows}
                            columns={columns}
                            initialState={{
                                pagination: {
                                    paginationModel: { page: 0, pageSize: 5 },
                                },
                            }}
                            pageSizeOptions={[5, 10]}
                            checkboxSelection

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
                        <button id='button_acp'>AGREGAR ORDEN</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AgregarOrden;