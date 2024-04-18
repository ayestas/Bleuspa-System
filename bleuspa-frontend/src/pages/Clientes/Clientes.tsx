import '../Clientes/Clientes.css'

import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, Divider, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Clientes() {
    const navigate = useNavigate();
    const handleClick_AgrCliente = () => navigate('/clientes/agregarcliente');
    const handleClick_EdtCliente = () => navigate('/clientes/editarcliente');

    // State to keep track of selected rows
    const [selectedRows, setSelectedRows] = useState<string[]>([]);
    const [busqueda, setBusqueda] = useState('');

    // Handler for when the selection changes
    const handleSelectionChange = (selectionModel: any) => {
        setSelectedRows(selectionModel as string[]);
    };

    const handleClick = () => {
        console.log(busqueda);
    };

    const [clientes, setClientes] = useState([]);

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
    }, []);

    const columns = [
        { field: 'name', headerName: 'Nombre Completo', width: 350 },
        { field: 'address', headerName: 'Dirección', width: 250 },
        { field: 'phone', headerName: 'Número Telefónico', width: 250 }
    ];

    return (
        <div style={{ backgroundColor: '#f2f2f2' }}>
            <h1 id='Titulo'>
                CLIENTES
            </h1>
            <div id='Box'>
                <div id='Button_Group'>
                    <Button id='button' onClick={handleClick_AgrCliente}>Agregar Cliente</Button>
                    <Button id='button' onClick={handleClick_EdtCliente} disabled={selectedRows.length === 0 || selectedRows.length > 1}>Editar Datos</Button>
                    <Button id='button' disabled={selectedRows.length === 0}>Eliminar Cliente</Button>
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
                        <TextField id="outlined-basic" label="Nombre del Cliente" value={busqueda} onChange={(event) => { setBusqueda(event.target.value) }} variant="outlined" sx={{ width: '40ch' }} />

                        <button id='button_acp' type="button" onClick={handleClick}>BUSCAR</button>
                    </Box>
                </div>

                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={clientes}
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

            </div>
        </div>
    );
}

export default Clientes