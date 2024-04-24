import './Productos'

import { DatePicker } from 'rsuite';
import { SvgIcon, SvgIconProps } from '@mui/material';
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
                    <div id='textFieldsProducto'>
                        <input type="text" id="textfieldP" placeholder='Nombre del Producto' name='name' style={{ width: '62ch', marginRight: '15px' }} ></input>
                        <label id='textfieldLabel'>Nombre del Producto</label>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div>
                            <DatePicker label={'Fecha de Vencimiento: '} style={{ marginRight: '10px', width: '345px' }} format='MMM-yyyy' ></DatePicker>
                        </div>
                        <div id='textFieldsProducto'>
                            <input type="text" id="textfieldP" placeholder='Cantidad' name='quantity' style={{ width: '15ch' }} ></input>
                            <label id='textfieldLabel'>Cantidad</label>
                        </div>
                    </div>
                    <div id='textFieldsProducto'>
                        <textarea id="textfieldP" placeholder='Descripción' name="description" style={{ width: '62ch' }} />
                        <label id='textfieldLabel'>Descripción</label>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div id='textFieldsProducto' style={{ float: 'left' }}>
                            <input id="textfieldP" placeholder='Precio Compra' name='source_price' style={{ width: '27ch', marginRight: '18px' }} ></input>
                            <label id='textfieldLabel'>Precio Compra</label>
                        </div>
                        <div id='textFieldsProducto' style={{ float: 'right' }}>
                            <input id="textfieldP" placeholder='Precio Venta' name='sale_price' style={{ width: '27ch' }} ></input>
                            <label id='textfieldLabel'>Precio Venta</label>
                        </div>
                    </div>

                </div>
                <div>
                    <button id='button_reg' onClick={handleClick_Prod} >
                        <KeyboardReturnIcon 
                            sx={{ 
                                color: 'white', 
                                fontSize: '25px',
                                display: 'inline',
                                verticalAlign: 'bottom',
                                marginRight: '4px'
                            }} 
                        /> 
                        REGRESAR
                    </button>
                    <button id='button_acp'>AGREGAR PRODUCTO</button>
                </div>

            </div>
        </div>
    );
}

export default AgregarProducto