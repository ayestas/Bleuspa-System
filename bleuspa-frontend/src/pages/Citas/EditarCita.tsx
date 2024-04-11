import './Citas.css'

import { DatePicker } from 'rsuite';
import { TextField, IconButton, SvgIcon, SvgIconProps } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function KeyboardReturnIcon(props: SvgIconProps) {
    return (
        <SvgIcon {...props}>
            <path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z" />
        </SvgIcon>
    );
}

function EditarCita() {
    const navigate = useNavigate();
    const handleClick_Cit = () => navigate('/citas');

    return (
        <div style={{ backgroundColor: '#f2f2f2' }}>
            <h1 id='Titulo'>
                EDITAR CITA
            </h1>
            <div id='Box'>
                <div id='textFields'>
                    <TextField disabled id='outlined-basic' label='Id Cita' variant='outlined' sx={{ width: '25ch' }}></TextField>
                </div>

                <div id='textFields'>
                    <TextField id='outlined-basic' label='Nombre del Cliente' variant='outlined' sx={{ width: '60ch', marginRight: '20px', }}></TextField>
                    <DatePicker style={{ marginTop: '7px' }} format='dd-MM-yyyy' ></DatePicker>
                </div>
                <div id='textFields'>
                    <TextField
                        id="outlined-multiline-static"
                        label="Descripción de Cita"
                        multiline
                        rows={4}
                        sx={{
                            width: '90ch'
                        }}
                    />
                </div>
                
                <div>
                    <button id='button_reg' onClick={handleClick_Cit} >
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

export default EditarCita