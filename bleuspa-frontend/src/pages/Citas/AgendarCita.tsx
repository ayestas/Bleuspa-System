import './Citas.css'

import { DatePicker } from 'rsuite';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

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
    const [cita, setCita] = useState({
        id_client: "",
        date: new Date(),
        description: "",
    });
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/clientes")
            .then((response) => response.data)
            .then((data) => {
                setClientes(data);
            })
            .catch((err) => {
                console.log('No se encontraron clientes.')
            });
    }, []);

    const onChange = (e) => {
        setCita({
            ...cita,
            [e.target.name]: e.target.value
        });
        console.log(cita);
    }

    const handleDateChange = (date) => {
        setCita({
            ...cita,
            date: date
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/api/addCita", cita)
            .then((res) => {
                setCita({
                    id_client: "",
                    date: new Date(),
                    description: "",
                });
                alert("Cita creada exitosamente!")
                navigate("/citas");
            })
            .catch((err) => {
                console.log("No se pudo agendar la cita." + err);
            });
    }

    return (
        <div style={{ backgroundColor: '#f2f2f2' }}>
            <h1 id='Titulo'>
                AGENDAR CITA
            </h1>
            <div id='Box'>
                <form onSubmit={onSubmit}>
                    <div id='textFieldsCitas'>
                        <select id='selectCita' name="id_client" value={cita.id_client} onChange={onChange} style={{ width: '65.5ch' }}>
                            <option value="" style={{ fontStyle: 'italic' }}>--Seleccione un Cliente--</option>
                            {clientes.map((cliente) => (
                                <option key={cliente._id} value={cliente._id}>{cliente.name}</option>
                            ))}
                        </select>
                    </div>
                    <div id='textFieldsCitas'>
                        <textarea
                            id='textfieldCita'
                            placeholder='Descripción de Cita'
                            name="description"
                            style={{
                                width: '60ch'
                            }}
                            value={cita.description}
                            onChange={onChange}

                        />
                        <label id='textfieldLabel'>Descripción de Cita</label>
                    </div>
                    <div>
                        <DatePicker label={'Fecha de Cita:'} style={{ marginBottom: '10px' }} format='dd-MM-yyyy' value={cita.date} onChange={handleDateChange}></DatePicker>
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
                </form>
            </div>
        </div>
    );
}

export default AgendarCita