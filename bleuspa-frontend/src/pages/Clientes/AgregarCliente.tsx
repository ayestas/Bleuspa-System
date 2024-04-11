import './Clientes.css'

import TextField from '@mui/material/TextField';
import { IconButton, SvgIcon, SvgIconProps } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function KeyboardReturnIcon(props: SvgIconProps) {
    return (
        <SvgIcon {...props}>
            <path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z" />
        </SvgIcon>
    );
}

function AgregarCliente() {
    const navigate = useNavigate();
    const handleClick_Clt = () => navigate('/clientes');

    return (
        <div style={{ backgroundColor: '#f2f2f2' }}>
            <h1 id='Titulo'>
                AGREGAR CLIENTE
            </h1>

            <div id='Box' >
                <div id='textFields'>
                    <TextField disabled id='outlined-basic' label='Id Cliente' variant='outlined' sx={{ width: '25ch' }}></TextField>
                </div>
                <div id='textFields'>
                    <TextField id='outlined-basic' label='Nombre Completo' variant='outlined' sx={{ width: '60ch' }}></TextField>
                </div>
                <div id='textFields'>
                    <TextField id='outlined-basic' label='Dirección' variant='outlined' sx={{ width: '60ch' }}></TextField>
                </div>
                <div id='textFields'>
                    <TextField id='outlined-basic' label='Número de Teléfono' variant='outlined' sx={{ width: '60ch' }}></TextField>
                </div>

                <div>
                    <button id='button_reg' onClick={handleClick_Clt} >
                        <IconButton aria-label="fingerprint" color="secondary">
                            <KeyboardReturnIcon sx={{ color: 'white', fontSize: '1.2vw' }} />
                        </IconButton>
                        REGRESAR
                    </button>
                    <button id='button_acp'>AGREGAR CLIENTE</button>
                </div>
            </div>
        </div>
    );
}

export default AgregarCliente