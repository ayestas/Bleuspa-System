import './Ordenes.css'

import DateRPicker from '../../components/Calendar/DateRangePicker';
import { DatePicker } from 'rsuite';
import { Button, Checkbox, Divider, FormControlLabel, IconButton, SvgIcon, SvgIconProps, TextField } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import React, { useState } from 'react';
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
  
function KeyboardReturnIcon(props: SvgIconProps) {
    return (
        <SvgIcon {...props}>
            <path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z" />
        </SvgIcon>
    );
}

function EditarOrden() {
    const [checked, setChecked] = React.useState(false);
    const [selectedRows, setSelectedRows] = useState<string[]>([]);
    const navigate = useNavigate();
    const handleClick_Ord = () => navigate('/ordenes');

    function handleChange(e) {
        setChecked(e.target.checked);
    }

    const handleSelectionChange = (selectionModel: any) => {
        setSelectedRows(selectionModel as string[]);
    };

    return (
        <div style={{ backgroundColor: '#f2f2f2' }}>
            <h1 id='Titulo'>
                EDITAR ORDEN
            </h1>
            <div id='Box'>
                <div id='textFields'>
                    <TextField disabled id='outlined-basic' label='Id Orden' variant='outlined' sx={{ width: '25ch' }}></TextField>
                </div>

                <div id='textFields'>
                    <TextField id='outlined-basic' label='Nombre del Cliente' variant='outlined' sx={{ width: '60ch', marginRight: '20px', }}></TextField>
                    <DatePicker style={{ marginTop: '10px' }} format='dd-MM-yyyy'></DatePicker>
                </div>

                <Divider style={{ marginBottom: '10px' }}></Divider>

                <div className='productos'>
                    <div><TextField id='outlined-basic' label='Producto' variant='outlined' sx={{ width: '60ch', marginRight: '20px', marginTop: '10px' }}></TextField></div>
                    <div id='cantidad'><TextField id='outlined-basic' label='Cantidad' variant='outlined' sx={{ width: '12ch', marginRight: '20px', marginTop: '10px' }}></TextField></div>

                    <FormControlLabel control={<Checkbox onChange={handleChange} />} label="Prestado" />
                    {checked ? (
                        <div style={{ marginRight: '10px' }}><DateRPicker></DateRPicker> </div>
                    ) : (
                        <div> </div>
                    )}

                    <Button id='button_Agr'>Agregar Producto</Button>
                    <Button id='button_Del' disabled={selectedRows.length === 0}>Eliminar Producto</Button>
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
                        onRowSelectionModelChange={handleSelectionChange}
                    />
                </div>

                <div>
                    <button id='button_reg' onClick={handleClick_Ord} >
                        <IconButton aria-label="fingerprint" color="secondary">
                            <KeyboardReturnIcon sx={{ color: 'white', fontSize: '1.2vw' }} />
                        </IconButton>
                        REGRESAR
                    </button>
                    <button id='button_acp'>GUARDAR CAMBIOS</button>
                </div>
            </div>
        </div>
    );
}

export default EditarOrden