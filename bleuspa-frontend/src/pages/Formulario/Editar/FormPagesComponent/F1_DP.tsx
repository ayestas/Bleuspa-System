import '../../FormStyle.css'
import { TextField } from "@mui/material";
import { DatePicker } from 'rsuite';

const DP = () => {
    return (
        <div>
            <h2 style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                Datos Personales
            </h2>

            <div id='textFields'>
                <TextField id='outlined-basic' label='Nombre y Apellido' variant='outlined' sx={{ width: '22vw', marginRight: '20px' }}></TextField>
                <TextField id='outlined-basic' label='Teléfono' variant='outlined' sx={{ width: '22vw' }}></TextField>
            </div>

            <div id='textFields'>
                <TextField id='outlined-basic' label='Estado Civil' variant='outlined' sx={{ width: '22vw', marginRight: '20px', }}></TextField>
                <DatePicker style={{ marginTop: '7px', width: '22vw' }} label='Fecha de Nacimiento' format='dd-MMM-yyyy'></DatePicker>
            </div>

            <div id='textFields'>
                <TextField id='outlined-basic' label='Profesión' variant='outlined' sx={{ width: '22vw', marginRight: '20px' }}></TextField>
                <TextField id='outlined-basic' label='Correo Electrónico' variant='outlined' sx={{ width: '22vw' }}></TextField>
            </div>

            <div id='textFields'>
                <TextField id='outlined-basic' label='Dirección' variant='outlined' sx={{ width: '45vw' }}></TextField>
            </div>

            <div id='textFields'>
                <TextField
                    id="outlined-multiline-static"
                    label="Descripción de Cita"
                    multiline
                    rows={4}
                    sx={{
                        width: '45vw'
                    }}
                />
            </div>
        </div>
    );
}

export default DP