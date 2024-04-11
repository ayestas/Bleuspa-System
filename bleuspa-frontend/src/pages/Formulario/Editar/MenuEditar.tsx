import '../Editar/MenuEditar.css'
import React from 'react';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import F1_DP from './FormPagesComponent/F1_DP';
import F2_R from './FormPagesComponent/F2_R';
import F3_DPT from './FormPagesComponent/F3_DPT';
import F4_C from './FormPagesComponent/F4_C';
import F5_CA from './FormPagesComponent/F5_CA';
import F6_D from './FormPagesComponent/F6_D';
import F7_O from './FormPagesComponent/F7_O';

function MenuEditar() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <div style={{ backgroundColor: '#f2f2f2' }}>
            <h1 id='Titulo'>
                EDITAR FORMULARIO
            </h1>
            <div id='Box'>
                <Box sx={{ width: '100%', typography: 'body1' }} >
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList
                                onChange={handleChange}
                                aria-label="lab API tabs example"
                                TabIndicatorProps={{ sx: { backgroundColor: '#5095BF' } }}
                                variant="scrollable"
                                scrollButtons="auto"
                            >
                                <Tab label="Datos Personales" value="1" />
                                <Tab label="Inspección Rostro" value="2" />
                                <Tab label="Datos Patológicos" value="3" />
                                <Tab label="Características" value="4" />
                                <Tab label="Cirugías y Alteraciones" value="5" />
                                <Tab label="Diagnóstico" value="6" />
                                <Tab label="Observaciones" value="7" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <F1_DP></F1_DP>
                        </TabPanel>
                        <TabPanel value="2">
                            <F2_R></F2_R>
                        </TabPanel>
                        <TabPanel value="3">
                            <F3_DPT></F3_DPT>
                        </TabPanel>
                        <TabPanel value="4">
                            <F4_C></F4_C>
                        </TabPanel>
                        <TabPanel value="5">
                            <F5_CA></F5_CA>
                        </TabPanel>
                        <TabPanel value="6">
                            <F6_D></F6_D>
                        </TabPanel>
                        <TabPanel value="7">
                            <F7_O></F7_O>
                        </TabPanel>
                    </TabContext>
                </Box>
            </div>
        </div>
    );
}

export default MenuEditar