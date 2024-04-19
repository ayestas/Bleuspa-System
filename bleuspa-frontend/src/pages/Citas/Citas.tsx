import '../Citas/Citas.css'
import { Box, Button, Divider, TextField } from '@mui/material';
import { DatePicker } from 'rsuite';
import { useNavigate } from 'react-router-dom';
import { DataGrid, GridColDef, GridValueGetter } from '@mui/x-data-grid';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Citas() {
    const navigate = useNavigate();
    const handleClick_Agd = () => navigate('/citas/agendarcita');
    const handleClick_Edt = () => navigate('/citas/editarcita');

    // State to keep track of selected rows
    const [selectedRows, setSelectedRows] = useState<string[]>([]);
    const [citas, setCitas] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/citas")
            .then((response) => response.data)
            .then((data) => {
                const changedData = data.map(item => ({
                    ...item,
                    date: formatDate(item.date)
                }));
                setCitas(changedData);
                console.log(changedData);
            })
            .catch((err) => {
                console.log('No se encontraron citas.')
            });
    }, []);

    const columns = [
        { field: 'date', headerName: 'Fecha y Hora', width: 250 },
        { field: 'name', headerName: 'Nombre del Cliente', width: 300 },
        { field: 'phone', headerName: 'Teléfono', width: 150 }
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
                CITAS
            </h1>
            <div id='Box'>
                <div id='Button_Group'>
                    <Button id='button' onClick={handleClick_Agd}>Agendar Cita</Button>
                    <Button id='button' onClick={handleClick_Edt} disabled={selectedRows.length === 0 || selectedRows.length > 1}>Editar Cita</Button>
                    <Button id='button' disabled={selectedRows.length === 0}>Eliminar Cita</Button>
                </div>

                <Divider></Divider>

                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { marginTop: 2, marginBottom: 2, marginRight: 4 },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="Id Cita" variant="outlined" sx={{ width: '18ch' }} />
                    <TextField id="outlined-basic" label="Nombre del Cliente" variant="outlined" sx={{ width: '40ch' }} />
                    <DatePicker style={{ marginTop: '7px', width: '300px' }} format='dd-MM-yyyy' ></DatePicker>
                    <button id='button_acp'>BUSCAR</button>
                </Box>

                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={citas.map(row => ({
                            ...row,
                            id: row.id,
                            name: row.cliente.name,
                            phone: row.cliente.phone
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
            </div>

        </div>
    );
}

export default Citas
