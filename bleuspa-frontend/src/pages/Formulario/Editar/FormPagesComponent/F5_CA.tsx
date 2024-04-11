import { Checkbox, FormControlLabel } from "@mui/material";

const F5_CA = () => {
    return (
        <div>
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
    );
}

export default F5_CA