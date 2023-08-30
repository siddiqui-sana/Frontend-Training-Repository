import { useLayoutEffect } from "react";
import {useOutletContext} from "react-router-dom";

const   Description = () =>{
    const newss=useOutletContext();
    return (
        <div>
            {console.log("jbdsbcjfe:",newss.description)}
            {newss.description}
        </div>
    )
}
export default Description;