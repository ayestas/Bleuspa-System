import { Box, Container, Typography, Link } from '@mui/material';

const BarraInferior = () => {
    return (
        <Box
            sx={{
                backgroundColor: (theme) =>
                    theme.palette.mode === "light"
                        ? theme.palette.grey[200]
                        : theme.palette.grey[800],
                position: 'fixed',
                width: '100%',
                height: '2em',
                bottom: 0,
            }}
            component="footer"
        >
            <Container maxWidth="sm">
                <Typography variant="body2" color="text.secondary" align="center" marginTop="0.5em">
                    {"Copyright © "}
                    BleuSpa{" "}
                    {/*<Link color="inherit" href="https://your-website.com/">
                        Your Website
                    </Link>{" "}*/}
                    {new Date().getFullYear()}
                    {"."}
                </Typography>
            </Container>
        </Box>
    );
}

export default BarraInferior