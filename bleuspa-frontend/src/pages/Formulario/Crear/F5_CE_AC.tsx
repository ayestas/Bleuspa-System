import '../FormStyle.css'
import { Button, Checkbox, Divider, FormControlLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";


function F5_CE_AC() {
    const navigate = useNavigate();
    const handleClick_Reg = () => navigate('/formularios/pag4');
    const handleClick_FNext = () => navigate('/formularios/pag6');

    return (
        <div style={{ backgroundColor: '#f2f2f2' }}>
            <h1 id='Titulo'>
                FORMALURIO {'(5/7)'}
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

                <div style={{ display: 'flex', paddingTop: '20px', paddingBottom: '20px' }}>
                    <div style={{ flex: '1' }}><h2> Cirugías Estéticas </h2></div>
                    <div style={{ flex: '1' }}><h2> Alteraciones Cutaneas </h2></div>
                </div>

                <div id='Checkboxs'>
                    <div style={{ marginRight: '35.5vw' }}>
                        <div><FormControlLabel id='chkBox' control={<Checkbox />} label="Rinoplastia" /></div>
                        <div><FormControlLabel id='chkBox' control={<Checkbox />} label="Abdominoplastía" /></div>
                        <div><FormControlLabel id='chkBox' control={<Checkbox />} label="Implantes Faciales" /></div>
                        <div><FormControlLabel id='chkBox' control={<Checkbox />} label="Blefaroplastía" /></div>
                        <div><FormControlLabel id='chkBox' control={<Checkbox />} label="Liftin Facial" /></div>
                    </div>
                    <div>
                        <div><FormControlLabel id='chkBox' control={<Checkbox />} label="Nevus" /></div>
                        <div><FormControlLabel id='chkBox' control={<Checkbox />} label="Cloasma" /></div>
                        <div><FormControlLabel id='chkBox' control={<Checkbox />} label="Petequias" /></div>
                        <div><FormControlLabel id='chkBox' control={<Checkbox />} label="Papula" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default F5_CE_AC