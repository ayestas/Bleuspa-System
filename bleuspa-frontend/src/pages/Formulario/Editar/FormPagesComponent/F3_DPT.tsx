import { Checkbox, FormControlLabel } from "@mui/material";

const F3_DPT = () => {
    return (
        <div>
            <h2 style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                Datos Patológicos
            </h2>
            <div>
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

export default F3_DPT