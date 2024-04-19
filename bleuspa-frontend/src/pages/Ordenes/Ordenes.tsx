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
    const [selectedRows, setSelectedRows] = useState<string[]>([]);
    const [ordenes, setOrdenes] = useState([]);

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
                console.log(changedData);
            })
            .catch((err) => {
                console.log('No se encontraron ordenes.')
            });
    }, []);

    const columns = [
        { field: 'date', headerName: 'Registro de Venta', width: 170 },
        { field: 'name', headerName: 'Nombre del Cliente', width: 200 }
    ]

    const columnsDetalle = [
        { field: 'name', headerName: 'Nombre del Cliente', width: 200 },
        { field: 'producto', headerName: 'Producto', width: 200 },
    ]

    // Handler for when the selection changes
    const handleSelectionChange = (selectionModel: any) => {
        setSelectedRows(selectionModel as string[]);
    };

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
                    <Button id='button' onClick={handleClick_AgrOrden}>Agregar a Orden</Button>
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
                        <TextField id="outlined-basic" label="Id Orden" variant="outlined" sx={{ width: '18ch' }} />
                        <TextField id="outlined-basic" label="Nombre del Cliente" variant="outlined" sx={{ width: '40ch' }} />
                        <TextField id="outlined-basic" label="Nombre del Producto" variant="outlined" sx={{ width: '40ch' }} />

                        <button id='button_acp'>BUSCAR</button>
                    </Box>

                </div>

                <div style={{ height: 250, width: '100%', marginBottom: "10px" }}>
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
                        rows={ordenes.map(row => ({
                            ...row,
                            id: row.id,
                            name: row.cliente.name,
                            producto: row.producto.name

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
                        onRowSelectionModelChange={handleSelectionChange}

                    />
                </div>
            </div>
        </div>
    );
}

export default Ordenes