import './Productos'

import { DatePicker } from 'rsuite';
import { IconButton, SvgIcon, SvgIconProps, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function KeyboardReturnIcon(props: SvgIconProps) {
    return (
        <SvgIcon {...props}>
            <path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z" />
        </SvgIcon>
    );
}

function AgregarProducto() {
    const navigate = useNavigate();
    const handleClick_Prod = () => navigate('/productos');

    return (
        <div style={{ backgroundColor: '#f2f2f2' }}>
            <h1 id='Titulo'>
                AGREGAR PRODUCTOS
            </h1>

            <div id='Box' >
                <div>
                    <div id='textFields'>
                        <TextField disabled={true} id="outlined-basic" label="Código" variant="outlined" sx={{ width: '25ch', marginRight: '10px' }} ></TextField>
                        <DatePicker label={'Fecha de Vencimiento: '} style={{ marginTop: '7px', width: '345px' }} format='dd-MM-yyyy' ></DatePicker>
                    </div>
                    <div id='textFields'>
                        <TextField id="outlined-basic" label="Nombre del Producto" variant="outlined" sx={{ width: '55ch', marginRight: '15px' }} ></TextField>
                        <TextField id="outlined-basic" label="Cantidad" variant="outlined" sx={{ width: '15ch' }} ></TextField>
                    </div>
                    <div id='textFields'>
                        <TextField
                            id="outlined-multiline-static"
                            label="Descripción del Producto"
                            multiline
                            rows={4}
                            sx={{
                                width: '72ch'
                            }}
                        />
                    </div>
                    <div id='textFields'>
                        <TextField id="outlined-basic" label="Precio Compra" variant="outlined" sx={{ width: '35ch', marginRight: '15px' }} ></TextField>
                        <TextField id="outlined-basic" label="Precio Venta" variant="outlined" sx={{ width: '35ch' }} ></TextField>
                    </div>

                </div>
                <div>
                    <button id='button_reg' onClick={handleClick_Prod} >
                        <IconButton aria-label="fingerprint" color="secondary">
                            <KeyboardReturnIcon sx={{ color: 'white', fontSize: '1.2vw' }} />
                        </IconButton>
                        REGRESAR
                    </button>
                    <button id='button_acp'>AGREGAR PRODUCTO</button>
                </div>

            </div>
        </div>
    );
}

export default AgregarProducto