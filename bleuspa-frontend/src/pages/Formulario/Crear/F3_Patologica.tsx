import '../FormStyle.css'
import { Button, Checkbox, Divider, FormControlLabel, } from "@mui/material";
import { useNavigate } from "react-router-dom";


function F3_Patologica() {
    const navigate = useNavigate();
    const handleClick_Reg = () => navigate('/formularios/pag2');
    const handleClick_FNext = () => navigate('/formularios/pag4');

    return (
        <div style={{ backgroundColor: '#f2f2f2' }}>
            <h1 id='Titulo'>
                FORMALURIO {'(3/7)'}
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
                    Datos Patológicos
                </h2>

                <div><FormControlLabel control={<Checkbox />} label="Diábetes" /></div>
                <div><FormControlLabel control={<Checkbox />} label="Cancer" /></div>
                <div><FormControlLabel control={<Checkbox />} label="Asma" /></div>
                <div><FormControlLabel control={<Checkbox />} label="Problemas Hormonales" /></div>
                <div><FormControlLabel control={<Checkbox />} label="Cirugías Recientes" /></div>
                <div><FormControlLabel control={<Checkbox />} label="Antibióticos" /></div>
                <div><FormControlLabel control={<Checkbox />} label="Alcohol" /></div>
                <div><FormControlLabel control={<Checkbox />} label="Tabacco" /></div>
            </div>
        </div>
    );
}

export default F3_Patologica