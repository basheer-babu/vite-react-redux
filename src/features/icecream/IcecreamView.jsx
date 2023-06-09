import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { ordered,restocked } from "../icecream/icecreamSlice";
export const IcecreamView =()=>{
    const noOficeCreams=useSelector((state)=>state.icecream.noOficeCreams)
    const dispatch= useDispatch()
    return(
        <div>
            <h2>Number of Icecream- {noOficeCreams}</h2>
            <button onClick={()=>dispatch(ordered())}>Order Icecream</button>
            <button onClick={()=>dispatch(restocked(5))}>Restock Icecream</button>
        </div>
    )
}