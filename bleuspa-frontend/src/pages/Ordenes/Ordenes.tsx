import './Ordenes.css'

import { DataGrid, GridColDef } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const columns: GridColDef<(typeof rows)[number]>[] = [
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
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];  

function Ordenes() {
    const navigate = useNavigate();
    const handleClick_AgrOrden = () => navigate('/ordenes/agregarorden');
    const handleClick_EdtOrden = () => navigate('/ordenes/editarorden');

    // State to keep track of selected rows
    const [selectedRows, setSelectedRows] = useState<string[]>([]);

    // Handler for when the selection changes
    const handleSelectionChange = (selectionModel: any) => {
        setSelectedRows(selectionModel as string[]);
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

                <div style={{ height: 400, width: '100%' }}>
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
                        onRowSelectionModelChange={handleSelectionChange}

                    />
                </div>
            </div>
        </div>
    );
}

export default Ordenes