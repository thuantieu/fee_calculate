import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type timeProps = {
    name: string
    timeRead(date: Date): void
}

export const Timeinput = ({timeRead, name}: timeProps) => {
    const [date, setDate] = useState(new Date()) 

    useEffect(() => {
        timeRead(date)
    })

    return (
        <>
        <label>{name}:</label> &nbsp;
        <DatePicker 
            selected={date}
            dateFormat="dd/MM/yyyy hh:mm aa"
            showTimeInput
            onChange={(event: Date) => {
                setDate(event);
            }}
        /> <br /> <br />
        
        </>
    )
}