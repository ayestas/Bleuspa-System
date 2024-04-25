import './Productos'

import { DatePicker } from 'rsuite';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function KeyboardReturnIcon(props: SvgIconProps) {
    return (
        <SvgIcon {...props}>
            <path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z" />
        </SvgIcon>
    );
}

function AgregarProducto() {
    const navigate = useNavigate();
    const handleClick_Prod = () => navigate('/productos');

    const [producto, setProducto] = useState({
        code_product: "",
        name: "",
        unit_stock: "",
        expiration_date: new Date(),
        description: "",
        source_price: "",
        sale_price: ""
    });

    const onChange = (e) => {
        setProducto({
            ...producto,
            [e.target.name]: e.target.value
        });
        console.log(producto);
    }

    const handleDateChange = (date) => {
        setProducto({
            ...producto,
            expiration_date: date
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/api/addProducto", producto)
            .then((res) => {
                setProducto({
                    code_product: "",
                    name: "",
                    unit_stock: "",
                    expiration_date: new Date(),
                    description: "",
                    source_price: "",
                    sale_price: ""
                });
                alert("Producto creado exitosamente!")
                navigate("/productos");
            })
            .catch((err) => {
                console.log("No se pudo agregar el producto." + err);
            });
    }

    return (
        <div style={{ backgroundColor: '#f2f2f2' }}>
            <h1 id='Titulo'>
                AGREGAR PRODUCTOS
            </h1>

            <div id='Box' >
                <form onSubmit={onSubmit}>
                    <div id='textFieldsProducto'>
                        <input type="text" id="textfieldP" placeholder='Código del Producto' name='code_product' style={{ width: '62ch', marginRight: '15px' }} value={producto.code_product} onChange={onChange} ></input>
                        <label id='textfieldLabel'>Código del Producto</label>
                    </div>
                    <div id='textFieldsProducto'>
                        <input type="text" id="textfieldP" placeholder='Nombre del Producto' name='name' style={{ width: '62ch', marginRight: '15px' }} value={producto.name} onChange={onChange} ></input>
                        <label id='textfieldLabel'>Nombre del Producto</label>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div>
                            <DatePicker label={'Fecha de Vencimiento: '} style={{ marginRight: '10px', width: '345px' }} format='MMM-yyyy' value={producto.expiration_date} onChange={handleDateChange}></DatePicker>
                        </div>
                        <div id='textFieldsProducto'>
                            <input type="text" id="textfieldP" placeholder='Cantidad' name='unit_stock' style={{ width: '15ch' }} value={producto.unit_stock} onChange={onChange} ></input>
                            <label id='textfieldLabel'>Cantidad</label>
                        </div>
                    </div>
                    <div id='textFieldsProducto'>
                        <textarea id="textfieldP" placeholder='Descripción' name="description" style={{ width: '62ch' }} value={producto.description} onChange={onChange} />
                        <label id='textfieldLabel'>Descripción</label>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div id='textFieldsProducto' style={{ float: 'left' }}>
                            <input id="textfieldP" placeholder='Precio Compra' name='source_price' style={{ width: '27ch', marginRight: '18px' }} value={producto.source_price} onChange={onChange} ></input>
                            <label id='textfieldLabel'>Precio Compra</label>
                        </div>
                        <div id='textFieldsProducto' style={{ float: 'right' }}>
                            <input id="textfieldP" placeholder='Precio Venta' name='sale_price' style={{ width: '27ch' }} value={producto.sale_price} onChange={onChange} ></input>
                            <label id='textfieldLabel'>Precio Venta</label>
                        </div>
                    </div>
                    <div>
                        <button id='button_reg' onClick={handleClick_Prod} >
                            <KeyboardReturnIcon
                                sx={{
                                    color: 'white',
                                    fontSize: '25px',
                                    display: 'inline',
                                    verticalAlign: 'bottom',
                                    marginRight: '4px'
                                }}
                            />
                            REGRESAR
                        </button>
                        <button type="submit" id='button_acp' >AGREGAR PRODUCTO</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AgregarProducto