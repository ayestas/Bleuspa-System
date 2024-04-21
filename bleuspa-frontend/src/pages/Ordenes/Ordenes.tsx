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

    // State to keep track of selected rows
    const [ordenes, setOrdenes] = useState([]);
    const [detalles, setDetalles] = useState([]);
    const [selectedRows, setSelectedRows] = useState<string[]>([]);
    const [selectedRowDetails, setSelectedRowDetails] = useState(null);

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
                //console.log(changedData);
            })
            .catch((err) => {
                console.log('No se encontraron ordenes.')
            });
    }, []);

    const fetchDetails = (id) => {
        axios
            .get(`http://localhost:8000/api/detallesorden/id_order/${id}`)
            .then((response) => response.data)
            .then((data) => {
                const changedData = data.map(item => ({
                    ...item,
                    return_date: formatDate(item.return_date)
                }));
                setDetalles(changedData);
            })
            .catch((err) => {
                console.log('No se encontraron detalles de orden.')
            });
    };

    const handleSelectionChange = (selectionModel) => {
        setSelectedRows(selectionModel as string[]);
        if (selectionModel.length === 1) {
            const selectedRow = ordenes.find(row => row._id === selectionModel[0]);
            setSelectedRowDetails(null);
            fetchDetails(selectedRow._id);
        }
    };

    const columns = [
        { field: 'date', headerName: 'Registro de Venta', width: 170 },
        { field: 'name', headerName: 'Nombre del Cliente', width: 200 },
        { field: 'total_quantity', headerName: 'Cantidad de Productos', width: 180 },
        { 
            field: 'total_sale', 
            headerName: 'Total de Pago', 
            width: 100,
            renderCell: (params) => (<span>{params.value.$numberDecimal}</span>)
        },
    ]

    const columnsDetalle = [
        { field: 'id_order', headerName: 'ID Orden', width: 220 },
        { field: 'name', headerName: 'Producto', width: 250 },
        { field: 'quantity', headerName: 'Cantidad', width: 80 },
        { field: 'status', headerName: 'Estado', width: 100 },
        { field: 'return_date', headerName: 'Fecha Devolución', width: 250 },
    ]

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
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={detalles.map(row => ({
                            ...row,
                            id: row.id,
                            name: row.producto.name
                        }))}
                        columns={columnsDetalle}
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
            </div>
        </div>
    );
}

export default Ordenes