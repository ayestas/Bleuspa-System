import '../FormStyle.css'
import { Button, Divider, TextField } from "@mui/material";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useNavigate } from "react-router-dom";

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'fecha', headerName: 'Fecha', width: 230 },
    { field: 'producto', headerName: 'Producto Químico', width: 230 },
    { field: 'tiempo', headerName: 'Tiempo de Tolerancia', width: 230 },
    { field: 'efecto', headerName: 'Efecto', width: 230 },
];

const rows = [
    { id: 1, fecha: '02-02-2022', producto: 'Crema', tiempo: '2 semanas', efecto: 'fuerte' },
];

function F6_Diagnostico() {
    const navigate = useNavigate();
    const handleClick_Reg = () => navigate('/formularios/pag5');
    const handleClick_FNext = () => navigate('/formularios/pag7');

    return (
        <div style={{ backgroundColor: '#f2f2f2' }}>
            <h1 id='Titulo'>
                FORMALURIO {'(6/7)'}
            </h1>
            <div id='Box'>
                <div id='botones'>
                    <div id='botonDiv'>
                        <Button id='boton' onClick={handleClick_Reg}>Regresar a Formularios</Button>
                    </div>
                    <div id='botonDiv'>
                        <Button id='boton' onClick={handleClick_FNext}>Siguiente Pagina</Button>
                    </div>
                </div>

                <Divider></Divider>

                <h2 style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                    Diagnóstico y Tratamiento
                </h2>

                <div id='filas'>
                    <TextField
                        id="outlined-multiline-static"
                        label="Diagnóstico"
                        multiline
                        rows={4}
                        sx={{
                            width: '40vw',
                            marginRight: '2vw'
                        }}
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Tratamiento"
                        multiline
                        rows={4}
                        sx={{
                            width: '40vw'
                        }}
                    />
                </div>

                <div style={{ height: 300, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 3 },
                            },
                        }}
                        pageSizeOptions={[3, 10]}
                        checkboxSelection

                    />
                </div>
            </div>
        </div>
    );
}

export default F6_Diagnostico