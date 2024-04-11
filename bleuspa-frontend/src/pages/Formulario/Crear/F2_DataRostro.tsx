import '../FormStyle.css'
import { Button, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Canvas from '../../../components/CanvasRostro/Canvas';


function F2_DataRostro() {
    const navigate = useNavigate();
    const handleClick_Reg = () => navigate('/formularios/pag1');
    const handleClick_FNext = () => navigate('/formularios/pag3');

    return (
        <div style={{ backgroundColor: '#f2f2f2' }}>
            <h1 id='Titulo'>
                FORMALURIO {'(2/7)'}
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
                    Inspección de Rostro
                </h2>
                <Canvas></Canvas>
            </div>
        </div>
    );
}

export default F2_DataRostro