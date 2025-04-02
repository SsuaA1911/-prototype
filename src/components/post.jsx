import { useState,useEffect } from "react";
import axios from "axios";

const PostUser = ()=>{
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [position, setPosition] = useState("");
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");
    const [submitted, setSubmitted] = useState(false);

    useEffect(()=>{
        const createUser = async()=>{
            if (!submitted||!name||!lastName||!position) 
                return;

            setError("");
            setResponse(null);
            const userData ={
                name: name,
                lastName: lastName,
                position: position,
            };
            console.log("📤 Sending data:",userData);

            try{
                const response = await axios.post("https://jsd5-mock-backend.onrender.com/members",{userData}
                    ,{ headers: { "Content-Type": "application/json" } }
                );
                console.log("✅ Response:", response.data);
                setResponse(response.data);
            }catch(error){
                console.error(error);
                setError("Error 404");
            } finally{
                
                setSubmitted(false);
            }
        };
        createUser();
    },[submitted, name, lastName,position]);
    const handleSubmit = (e) =>{
        e.preventDefault();
        setSubmitted(true);
       
    };
 return(
    <div>
        <h2 className=" font-bold text-center text-2xl pb-3">Create user Here</h2>
        <form onSubmit={handleSubmit}className="flex gap-5 justify-center text-center text-2xl ">
            <div>
            <h2>Name</h2>
            <input 
            type="text"
            value={name} 
            onChange={(e)=>setName(e.target.value)}
            className="border-3 px-2 py-1 block w-40"/>
            </div>

            <div>
            <h2>Lastname</h2>
            <input 
            type="text"
            value={lastName} 
            onChange={(e)=>setLastName(e.target.value)}
            className="border-3 px-2 py-1 block w-40"/>
            </div>

            <div>
            <h2>Position</h2>
            <input 
            type="text"
            value={position} 
            onChange={(e)=>setPosition(e.target.value)}
            className="border-3 px-2 py-1 block w-40"/>
            </div>
           <button 
           type="submit"
           className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 h-10 mt-8"
           >
            submit
           </button>

        </form>
        {response&&(
            <p className="mt-3 text[20px] text-green-600">✅ Created</p>
        )}
        {error&&(
               <div className="mt-2 text-red-600 bg-red-100 p-2 rounded">
                <p>Error 404</p>
               </div>
        )}
    </div>
 );

};
export default PostUser;