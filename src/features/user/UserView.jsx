import React,{useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";
export const UserView =()=>{
    const user=useSelector((state)=>state.user)
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchUsers())
        
    },[])
    return(
        <div>
           <h2>List Of Users</h2>
           {user.loading && <div>Loading....</div>}
           {!user.loading && !user.users.length > 0 ?<div>Error:{user.errors}</div>:null}
           
           {!user.loading && user.users.length ?(
            
            <ul>
                
                {
                    user?.users?.map((user) =>
                        <li key={user.id}>{user.name}</li>
                    )
                }
            </ul>
           ):null}
        </div>
    )
}