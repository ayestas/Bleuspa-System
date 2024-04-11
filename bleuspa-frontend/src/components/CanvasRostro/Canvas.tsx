import { useState, useRef } from 'react';
import '../CanvasRostro/Canvas.css'

function Canvas() {
    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [strokeColor, setStrokeColor] = useState('#000000');

    // Function to handle mouse down event
    const startDrawing = (event) => {
        setIsDrawing(true);
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const x = event.nativeEvent.offsetX;
        const y = event.nativeEvent.offsetY;
        context.beginPath();
        context.moveTo(x, y);
        context.lineWidth = 4;
    };

    // Function to handle mouse move event
    const draw = (event) => {
        if (!isDrawing) return;
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const x = event.nativeEvent.offsetX;
        const y = event.nativeEvent.offsetY;
        context.strokeStyle = strokeColor;
        context.lineTo(x, y);
        context.stroke();
    };

    // Function to handle mouse up and mouse leave events
    const finishDrawing = () => {
        setIsDrawing(false);
    };

    // Function to clear the canvas
    const clearCanvas = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
    };

    const handleColorChange = (event) => {
        setStrokeColor(event.target.value);
    };


    return (
        <div style={{ textAlign: 'center' }}>
            <canvas
                ref={canvasRef}
                width={420}
                height={420}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={finishDrawing}
                onMouseLeave={finishDrawing}
                className='canvasImg'

            />
            <canvas
                width={420}
                height={420}
                style={{ border: '2px solid #f2f2f2', }}
            />
            <br />
            <div>
                <input type="color" value={strokeColor} onChange={handleColorChange} style={{ marginRight: '20px', height: '38px', verticalAlign: 'middle' }} />
                <button id='botonClear' onClick={clearCanvas} >Clear Canvas</button>
            </div>
        </div>
    );
}

export default Canvas;