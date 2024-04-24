import './Citas.css'

import { DatePicker } from 'rsuite';
import { IconButton, SvgIcon, SvgIconProps } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function KeyboardReturnIcon(props: SvgIconProps) {
    return (
        <SvgIcon {...props}>
            <path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z" />
        </SvgIcon>
    );
}

function AgendarCita() {
    const navigate = useNavigate();
    const handleClick_Cit = () => navigate('/citas');

    return (
        <div style={{ backgroundColor: '#f2f2f2' }}>
            <h1 id='Titulo'>
                AGENDAR CITA
            </h1>
            <div id='Box'>
                <div id='textFieldsCitas'>
                    <input id='textfieldCita'  placeholder='Nombre del Cliente' name='name' style={{ width: '60ch', marginRight: '20px', }}></input>
                    <label id='textfieldLabel'>Nombre del Cliente</label>
                </div>
                <div id='textFieldsCitas'>
                    <textarea
                        id='textfieldCita'
                        placeholder='Descripción de Cita' 
                        name="description"
                        style={{
                            width: '60ch'
                        }}
                    />
                    <label id='textfieldLabel'>Descripción de Cita</label>
                </div>
                <div>
                    <DatePicker label={'Fecha de Cita:'} style={{ marginBottom: '10px' }} format='dd-MM-yyyy' ></DatePicker>
                </div>


                <button id='button_reg' style={{ width: '47ch' }}>
                    Crear Formulario del Cliente
                </button>

                <div>
                <button id='button_reg' onClick={handleClick_Cit} >
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
                    <button id='button_acp'>AGENDAR CITA</button>
                </div>
            </div>
        </div>
    );
}

export default AgendarCita