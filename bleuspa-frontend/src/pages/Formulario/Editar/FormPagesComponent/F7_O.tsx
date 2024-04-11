import { TextField } from "@mui/material";
import { useState } from 'react';

const F7_O = () => {

    const [fileA, setFileA] = useState(null);
    const [fileD, setFileD] = useState(null);

    function getFileA(event) {
        setFileA(URL.createObjectURL(event.target.files[0]))
    }
    function getFileD(event) {
        setFileD(URL.createObjectURL(event.target.files[0]))
    }

    return (
        <div>
            <h2 style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                Observaciones
            </h2>
            <div>
                <TextField
                    id="outlined-multiline-static"
                    label="Descripción de Observaciones"
                    multiline
                    rows={3}
                    sx={{
                        width: '85vw',
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

export default F7_O