import { TextField } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

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

const F6_D = () => {
    return (
        <div>
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
    );
}

export default F6_D