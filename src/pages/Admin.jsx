import { useState,useEffect } from "react";
import axios from "axios";
import PostUser from "../components/post";

export default function Admin(){
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
            <h1 className="text-5xl text-center pb-2">Generation Thailand <br />Home-Admin Sector</h1>
            </section>
            <section className="py-5">
            <PostUser/>
            </section>
            
            {user.map((user)=>(
                <div className="flex justify-center">
                    <table key={user.id} className=" border-2 my-2 w-[50%]  text-center">
                       
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
                    </div>
                    
            )
            )}
            
        </div>
    )
}