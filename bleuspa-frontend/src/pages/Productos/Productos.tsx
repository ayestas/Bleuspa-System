import './Productos.css'

import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, Button, Divider, TextField } from '@mui/material';
import axios from 'axios';

function Productos() {
    const navigate = useNavigate();
    const handleClick_AgrProd = () => navigate('/productos/agregarproducto');
    const handleClick_EdtProd = () => navigate('/productos/editarproducto');

    // State to keep track of selected rows
    const [selectedRows, setSelectedRows] = useState<string[]>([]);

    // Handler for when the selection changes
    const handleSelectionChange = (selectionModel: any) => {
        setSelectedRows(selectionModel as string[]);
    };

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/productos")
            .then((response) => response.data)
            .then((data) => {
                const changedData = data.map(item => ({
                    ...item,
                    expiration_date: formatDate(item.expiration_date)
                }));
                setProductos(changedData);
                console.log(changedData);
            })
            .catch((err) => {
                console.log('No se encontraron productos.')
            });
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        return `${year}-${month}`;
    };

    const columns: GridColDef[] = [
        { field: 'code_product', headerName: 'Código Producto', width: 120 },
        { field: 'name', headerName: 'Nombre', width: 250 },
        { field: 'unit_stock', headerName: '#', width: 20 },
        { field: 'expiration_date', headerName: 'Fecha de Expiración', width: 200 },
        { field: 'description', headerName: 'Descripción', width: 200 },
        {
            field: 'source_price',
            headerName: 'Precio Compra',
            width: 150,
            renderCell: (params) => (<span>{params.value.$numberDecimal}</span>)
        },
        { 
            field: 'sale_price', 
            headerName: 'Precio Venta', 
            width: 150,
            renderCell: (params) => (<span>{params.value.$numberDecimal}</span>)
        },

    ];

    return (
        <div style={{ backgroundColor: '#f2f2f2' }}>
            <h1 id='Titulo'>
                PRODUCTOS
            </h1>
            <div id='Box'>
                <div id='Button_Group'>
                    <Button id='button' onClick={handleClick_AgrProd}>Agregar Producto</Button>
                    <Button id='button' onClick={handleClick_EdtProd} disabled={selectedRows.length === 0 || selectedRows.length > 1}>Editar Producto</Button>
                    <Button id='button' disabled={selectedRows.length === 0}>Eliminar Producto</Button>
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
                        <TextField id="outlined-basic" label="Nombre del Producto" variant="outlined" sx={{ width: '60ch' }} />

                        <button id='button_acp'>BUSCAR</button>
                    </Box>
                </div>

                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={productos}
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

export default Productos