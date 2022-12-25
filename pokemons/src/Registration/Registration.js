import { useState } from "react";

const Registration = (()=>{

    const[activePosition, setActivePosition]=useState()
    
    const handleClick = (event) => {
        setActivePosition(event.target.innerHTML)
    }

    return ( 
        <div>
            <button onClick={handleClick} className="button">Rejestracja</button>
        </div>
    )
});

export default Registration;