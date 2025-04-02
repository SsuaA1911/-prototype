// import Home from "./pages/Home";
import { useState,useEffect } from "react";
import axios from "axios";
export default function User(){
    const[user,setUser] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState("");
    useEffect(()=>{
        axios.get("https://jsd5-mock-backend.onrender.com/members")
        .then(response => {
            setUser(response.data);
            console.log("taste",response.data);
        })
        .catch((error)=>{
            console.log(error);
            setError("Error 404");
        })
        .finally(()=>{
            setLoading(false);
        });
    },[]);
    return(
        <div>
             {loading && <p className="text-center">Loading...</p>}
             {error && <p className="text-center text-red-500">{error}</p>}
            <section>
            <h1>Generation Thailand <br />Home-UserSector</h1>
            </section>
            <section>
            {/* <Home/> */}
            </section>
            {user.map((user)=>(
                    <table key={user.id}>
                       
                        <tr>
                            <td>Name</td>
                            <td>Lastname</td>
                            <td>Position</td>
                            </tr>
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.lastname}</td>
                            <td>{user.position}</td>
                        </tr>
                        
                    </table>
            )
            )}
        </div>
    )
}