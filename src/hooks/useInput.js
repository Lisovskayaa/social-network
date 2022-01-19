import { useState } from "react";


export default function useInput(initialValue) {

    const [value, setValue] = useState(initialValue)

    const onChange = e => {
        
        let event = e.target.value
        setValue(event)
        
       
    }
    return {
        value, onChange
    }
}