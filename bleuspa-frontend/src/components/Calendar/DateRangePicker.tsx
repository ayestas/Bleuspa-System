import { DateRangePicker } from "rsuite";

import 'rsuite/dist/rsuite-rtl.css'

const DateRPicker = () => {
    
    return (
        <div>
            <DateRangePicker
                format="dd-MM-yyyy"
                character=" || "
                showHeader={false}
                style={{
                    marginTop: '15px'
                }}>

            </DateRangePicker>
        </div>
    );
}

export default DateRPicker;