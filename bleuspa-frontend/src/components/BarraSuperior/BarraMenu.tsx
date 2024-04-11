import { AppBar, Button, Stack, Toolbar, IconButton } from '@mui/material';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

import { useNavigate } from 'react-router-dom';

function HomeIcon(props: SvgIconProps) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

const BarraMenu = () => {
    const navigate = useNavigate();
    const handleClick_Pri = () => navigate('/principal');
    const handleClick_Ord = () => navigate('/ordenes');
    const handleClick_Cit = () => navigate('/citas');
    const handleClick_Pro = () => navigate('/productos');
    const handleClick_Clt = () => navigate('/clientes');
    const handleClick_Form = () => navigate('/formularios');

    return (
        <AppBar style={{ background: '#5095BF', height: '4vw' }}>
            <Toolbar>
                <Stack className='stack' direction='row' spacing='6vw' justifyContent="center" alignItems="center" margin='auto' marginTop='0.2vw'>
                    <IconButton aria-label="fingerprint" color="secondary">
                        <HomeIcon sx={{ color: 'white', fontSize: '2.2vw' }} onClick={handleClick_Pri} />
                    </IconButton>
                    <Button sx={{
                        color: 'white',
                        fontSize: '1.2vw',
                        fontWeight: '500',
                    }}
                        onClick={handleClick_Ord}
                    >Ordenes</Button>
                    <Button sx={{
                        color: 'white',
                        fontSize: '1.2vw',
                        fontWeight: '500',
                    }}
                        onClick={handleClick_Cit}
                    >Citas</Button>
                    <Button sx={{
                        color: 'white',
                        fontSize: '1.2vw',
                        fontWeight: '500',
                    }}
                        onClick={handleClick_Pro}
                    >Productos</Button>
                    <Button sx={{
                        color: 'white',
                        fontSize: '1.2vw',
                        fontWeight: '500',
                    }}
                        onClick={handleClick_Clt}
                    >Clientes</Button>
                    <Button sx={{
                        color: 'white',
                        fontSize: '1.2vw',
                        fontWeight: '500',
                    }}
                        onClick={handleClick_Form}
                    >Formulario</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}

export default BarraMenu;