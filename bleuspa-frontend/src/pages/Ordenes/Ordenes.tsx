import './Ordenes.css'

import { DataGrid, GridColDef } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Ordenes() {
    const navigate = useNavigate();
    const handleClick_AgrOrden = () => navigate('/ordenes/agregarorden');
    const handleClick_EdtOrden = () => navigate('/ordenes/editarorden');

    const [ordenes, setOrdenes] = useState([]);
    const [detalles, setDetalles] = useState([]);
    const [productos, setProductos] = useState([]);
    const [selectedRows, setSelectedRows] = useState<string[]>([]);

    const hideDiv = selectedRows.length > 0;

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/ordenes")
            .then((response) => response.data)
            .then((data) => {
                const changedData = data.map(item => ({
                    ...item,
                    date: formatDate(item.date)
                }));
                setOrdenes(changedData);
            })
            .catch((err) => {
                console.log('No se encontraron ordenes.')
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

    const fetchOrden = (id) => {
        axios
            .get(`http://localhost:8000/api/ordenes/id/${id}`)
            .then((response) => response.data)
            .then(async (data) => {
                if (Array.isArray(data) && data.length > 0 && Array.isArray(data[0].detalles)) {
                    const detallesWithNames = await fetchProductNames(data[0].detalles);
                    setDetalles(detallesWithNames);
                } else {
                    console.log('Detalles de orden no encontrados o no es un array.');
                }
            })
            .catch((err) => {
                console.log('Error al obtener detalles de orden:', err);
            });
    };

    const fetchProductNames = async (detalles) => {
        const promises = detalles.map(async (detalle) => {
            try {
                const response = await axios.get(`http://localhost:8000/api/productos/id/${detalle.id_product}`);
                return { ...detalle, name: response.data.name };
            } catch (error) {
                console.error(`Error fetching product name for ID ${detalle.id_product}:`, error);
                return detalle;
            }
        });

        return Promise.all(promises);
    };

    const handleSelectionChange = (selectionModel) => {
        setSelectedRows(selectionModel as string[]);
        if (selectionModel.length === 1) {
            fetchOrden(selectionModel[0]);
        }
    };

    const columns = [
        { field: 'date', headerName: 'Registro de Venta', width: 170 },
        { field: 'name', headerName: 'Nombre del Cliente', width: 200 },
        { field: 'price', headerName: 'Total de Pago', width: 200 },
    ]

    const columnsDetalles = [
        { field: 'name', headerName: 'Producto', width: 300 },
        {
            field: 'sale_price', headerName: 'Precio Unitario', width: 200, renderCell: (params) => {
                const product = productos.find((producto) => producto._id === params.row.id_product);
                return product ? product.sale_price.$numberDecimal : '';
            }
        },
        { field: 'quantity', headerName: 'Total', width: 200 },
        {
            field: 'price',
            headerName: 'Precio',
            width: 200,
            renderCell: (params) => (<span>{params.value.$numberDecimal}</span>)
        },
    ];

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        let hours = date.getUTCHours() % 12 || 12; // Convert to 12-hour format
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const ampm = date.getUTCHours() >= 12 ? 'pm' : 'am'; // Determine if it's AM or PM
        return `${year}-${month}-${day} | ${hours}:${minutes} ${ampm}`;
    };

    return (
        <div style={{ backgroundColor: '#f2f2f2' }}>
            <h1 id='Titulo'>
                ORDENES
            </h1>

            <div id='Box' >
                <div id='Button_Group'>
                    <Button id='button' onClick={handleClick_AgrOrden}>Registrar Orden</Button>
                    <Button id='button' onClick={handleClick_EdtOrden} disabled={selectedRows.length === 0 || selectedRows.length > 1}>Editar Orden</Button>
                    <Button id='button' disabled={selectedRows.length === 0}>Eliminar Orden</Button>
                </div>

                <Divider></Divider>

                <div>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { marginTop: 2, marginBottom: 2, marginRight: 4 },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic" label="Nombre del Cliente" variant="outlined" sx={{ width: '40ch' }} />

                        <button id='button_acp'>BUSCAR</button>
                    </Box>

                </div>

                <div style={{ height: 300, width: '100%', marginBottom: "10px" }}>
                    <DataGrid
                        rows={ordenes.map(row => ({
                            ...row,
                            id: row.id,
                            name: row.cliente.name,
                            sale_price: row.cliente.sale_price
                        }))}
                        columns={columns}
                        getRowId={(row) => row._id}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 5 },
                            },
                        }}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                        onRowSelectionModelChange={handleSelectionChange}

                    />
                </div>

                {hideDiv &&
                    <div style={{ height: 300, width: '100%', marginBottom: "10px" }}>
                        <DataGrid
                            rows={detalles}
                            columns={columnsDetalles}
                            getRowId={(row) => row._id}
                            initialState={{
                                pagination: {
                                    paginationModel: { page: 0, pageSize: 5 },
                                },
                            }}
                            pageSizeOptions={[5, 10]}
                            checkboxSelection
                        />
                    </div>
                }
            </div>
        </div>
    );
}

export default Ordenes