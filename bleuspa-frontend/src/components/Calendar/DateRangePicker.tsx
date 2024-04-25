import { DateRangePicker } from "rsuite";

import 'rsuite/dist/rsuite-rtl.css'

const DateRPicker = () => {
    
    return (
        <div>
            <DateRangePicker
                format="dd-MM-yyyy"
                character=" || "
                showHeader={false}
                label={'Préstamo y Retorno:'}
                style={{
                    
                }}>

            </DateRangePicker>
        </div>
    );
}

export default DateRPicker;