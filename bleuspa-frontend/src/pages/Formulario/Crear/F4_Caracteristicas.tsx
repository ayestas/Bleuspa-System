import '../FormStyle.css'
import { Button, Checkbox, Divider, FormControlLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";


function F4_Caracteristicas() {
    const navigate = useNavigate();
    const handleClick_Reg = () => navigate('/formularios/pag3');
    const handleClick_FNext = () => navigate('/formularios/pag5');

    return (
        <div style={{ backgroundColor: '#f2f2f2' }}>
            <h1 id='Titulo'>
                FORMALURIO {'(4/7)'}
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
                    Características
                </h2>

                <div id='Checkboxs'>
                    <div style={{ marginRight: '12vw' }}>
                        <div><FormControlLabel id='chkBox' control={<Checkbox />} label="Textura Gruesa" /></div>
                        <div><FormControlLabel id='chkBox' control={<Checkbox />} label="Textura Delgada" /></div>
                        <div><FormControlLabel id='chkBox' control={<Checkbox />} label="Textura Aspera" /></div>
                        <div><FormControlLabel id='chkBox' control={<Checkbox />} label="Textura Lisa y Fina" /></div>
                        <div><FormControlLabel id='chkBox' control={<Checkbox />} label="Textura Granulosas" /></div>
                        <div><FormControlLabel id='chkBox' control={<Checkbox />} label="Textura Opaca" /></div>
                        <div><FormControlLabel id='chkBox' control={<Checkbox />} label="Poros Cerrados" /></div>
                        <div><FormControlLabel id='chkBox' control={<Checkbox />} label="Dilatados" /></div>
                    </div>
                    <div style={{ marginRight: '12vw' }}>
                        <div><FormControlLabel id='chkBox' control={<Checkbox />} label="Poco Visible" /></div>
                        <div><FormControlLabel id='chkBox' control={<Checkbox />} label="Color Rosada" /></div>
                        <div><FormControlLabel id='chkBox' control={<Checkbox />} label="Gris" /></div>
                        <div><FormControlLabel id='chkBox' control={<Checkbox />} label="Amarillenta" /></div>
                        <div><FormControlLabel id='chkBox' control={<Checkbox />} label="Enrojecida" /></div>
                        <div><FormControlLabel id='chkBox' control={<Checkbox />} label="Untuosa" /></div>
                        <div><FormControlLabel id='chkBox' control={<Checkbox />} label="Oleosa" /></div>
                        <div><FormControlLabel id='chkBox' control={<Checkbox />} label="Brilloso" /></div>
                    </div>
                    <div style={{ marginRight: '12vw' }}>
                        <div><FormControlLabel id='chkBox' control={<Checkbox />} label="Comedones Negros o Blancos" /></div>
                        <div><FormControlLabel id='chkBox' control={<Checkbox />} label="Arrugas y Líneas de Expresión" /></div>
                        <div><FormControlLabel id='chkBox' control={<Checkbox />} label="Entrecejos Periorbiculares" /></div>
                        <div><FormControlLabel id='chkBox' control={<Checkbox />} label="Piel Seca" /></div>
                        <div><FormControlLabel id='chkBox' control={<Checkbox />} label="Piel Seca Atípica" /></div>
                        <div><FormControlLabel id='chkBox' control={<Checkbox />} label="Piel Seca Senil" /></div>
                        <div><FormControlLabel id='chkBox' control={<Checkbox />} label="Piel Hidratada" /></div>
                        <div><FormControlLabel id='chkBox' control={<Checkbox />} label="Piel Grasa" /></div>
                    </div>
                    <div>
                        <div><FormControlLabel id='chkBox' control={<Checkbox />} label="Piel Grasa Asticciada" /></div>
                        <div><FormControlLabel id='chkBox' control={<Checkbox />} label="Piel Grasa Sensible" /></div>
                        <div><FormControlLabel id='chkBox' control={<Checkbox />} label="Piel Grasa Seborreica Afluente" /></div>
                        <div><FormControlLabel id='chkBox' control={<Checkbox />} label="Piel Mixta y Acne" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default F4_Caracteristicas