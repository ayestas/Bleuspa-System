import './Clientes.css'

import { SvgIcon, SvgIconProps } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from 'axios';

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

    const [cliente, setCliente] = useState({
        name: "",
        address: "",
        phone: ""
    });

    const onChange = (e) => {
        setCliente({
            ...cliente,
            [e.target.name]: e.target.value
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/api/addCliente", cliente)
            .then((res) => {
                setCliente({
                    name: "",
                    address: "",
                    phone: ""
                });
                alert("Cliente creado exitosamente!")
                navigate("/clientes");
            })
            .catch((err) => {
                console.log("No se pudo agregar el cliente." + err);
            });
    }

    return (
        <div style={{ backgroundColor: '#f2f2f2' }}>
            <h1 id='Titulo'>
                AGREGAR CLIENTE
            </h1>

            <div id='Box' >
                <form onSubmit={onSubmit}>
                    <div id='textFieldsCliente'>
                        <input type="text" id='textfieldC' placeholder='Nombre Completo' name="name" style={{ width: '45ch' }} value={cliente.name} onChange={onChange} ></input>
                        <label id='textfieldLabel'>Nombre Completo</label>
                    </div>
                    <div id='textFieldsCliente'>
                        <textarea id='textfieldC' placeholder='Dirección' name="address" style={{ width: '60ch' }} value={cliente.address} onChange={onChange}></textarea>
                        <label id='textfieldLabel'>Dirección</label>
                    </div>
                    <div id='textFieldsCliente'>
                        <input type="text" id='textfieldC' placeholder='Teléfono' name="phone" style={{ width: '60ch' }} value={cliente.phone} onChange={onChange}></input>
                        <label id='textfieldLabel'>Número Telefónico</label>
                    </div>

                    <div>
                        <button id='button_reg' onClick={handleClick_Clt} >
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
                        <button type="submit" id='button_acp'>AGREGAR CLIENTE</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AgregarCliente