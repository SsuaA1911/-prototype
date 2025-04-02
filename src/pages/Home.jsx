import React from "react"
import { useNavigate } from "react-router-dom"
export default function Home(){
    const navigate= useNavigate()
    const userNavigate =()=>{
        navigate("/user")
    }
    const adminNavigate = ()=>{
        navigate("/admin")
    }
    return(
        <div className="">
        <div className="flex justify-center">
        <h1 className="text-5xl">Generation Thailand <br />React-Assessment</h1>
        </div>
        <div className="flex gap-5 mt-10 justify-center ">
        <button onClick={userNavigate} className="bg-white rounded-sm p-2 hover:text-green-400 font-bold">User Home Sector</button>
        <button onClick={adminNavigate} className="bg-white rounded-sm p-2 hover:text-green-400 font-bold">Admin Home Sector</button>
        </div>
        </div>
    )
}