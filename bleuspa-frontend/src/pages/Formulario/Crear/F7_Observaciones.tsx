import '../FormStyle.css'
import { Button, Divider, TextField } from "@mui/material";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


function F7_Observaciones() {
    const navigate = useNavigate();
    const handleClick_Reg = () => navigate('/formularios/pag6');
    const handleClick_Crear = () => navigate('/formularios');

    const [fileA, setFileA] = useState(null);
    const [fileD, setFileD] = useState(null);

    function getFileA(event) {
        setFileA(URL.createObjectURL(event.target.files[0]))
    }
    function getFileD(event) {
        setFileD(URL.createObjectURL(event.target.files[0]))
    }

    return (
        <div style={{ backgroundColor: '#f2f2f2' }}>
            <h1 id='Titulo'>
                FORMALURIO {'(7/7)'}
            </h1>
            <div id='Box'>
                <div id='botones'>
                    <div id='botonDiv'>
                        <Button id='boton' onClick={handleClick_Reg}>Regresar a Formularios</Button>
                    </div>
                    <div id='botonDiv'>
                        <Button id='boton' onClick={handleClick_Crear}>Finalizar Formulario</Button>
                    </div>
                </div>

                <Divider></Divider>

                <h2 style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                    Observaciones
                </h2>

                <TextField
                    id="outlined-multiline-static"
                    label="Descripción de Observaciones"
                    multiline
                    rows={3}
                    sx={{
                        width: '88vw',
                        marginRight: '2vw'
                    }}
                />

                <div id='Box_Images'>
                    <div id='PhotoImage'>
                        <label className="custom-file-upload">
                            <input type="file" onChange={getFileA} />
                            Subir Foto Antes
                        </label>

                        <div>
                            <img src={fileA} id='ImageFile' />
                        </div>
                    </div>

                    <div id='PhotoImage'>
                        <label className="custom-file-upload">
                            <input type="file" onChange={getFileD} />
                            Subir Foto Despues
                        </label>

                        <div>
                            <img src={fileD} id='ImageFile' />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default F7_Observaciones