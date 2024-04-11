import '../FormStyle.css'
import { Button, Divider, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { DatePicker } from 'rsuite';

function F1_Personal() {
    const navigate = useNavigate();
    const handleClick_Reg = () => navigate('/formularios');
    const handleClick_FNext = () => navigate('/formularios/pag2');

    return (
        <div style={{ backgroundColor: '#f2f2f2' }}>
            <h1 id='Titulo'>
                FORMALURIO {'(1/7)'}
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
                    Datos Personales
                </h2>

                <div id='filas'>
                    <TextField id='outlined-basic' label='Nombre y Apellido' variant='outlined' sx={{ width: '50ch', marginRight: '20px' }}></TextField>
                    <TextField id='outlined-basic' label='Teléfono' variant='outlined' sx={{ width: '50ch' }}></TextField>
                </div>

                <div id='filas'>
                    <TextField id='outlined-basic' label='Estado Civil' variant='outlined' sx={{ width: '50ch', marginRight: '20px', }}></TextField>
                    <DatePicker style={{ marginTop: '7px', width: '378px' }} label='Fecha de Nacimiento' format='dd-MMM-yyyy'></DatePicker>
                </div>

                <div id='filas'>
                    <TextField id='outlined-basic' label='Profesión' variant='outlined' sx={{ width: '50ch', marginRight: '20px' }}></TextField>
                    <TextField id='outlined-basic' label='Correo Electrónico' variant='outlined' sx={{ width: '50ch' }}></TextField>
                </div>

                <div id='filas'>
                    <TextField id='outlined-basic' label='Dirección' variant='outlined' sx={{ width: '102.5ch' }}></TextField>
                </div>

                <div id='filas'>
                    <TextField
                        id="outlined-multiline-static"
                        label="Descripción de Cita"
                        multiline
                        rows={4}
                        sx={{
                            width: '102.5ch'
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default F1_Personal