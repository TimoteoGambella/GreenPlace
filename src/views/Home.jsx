import { useEffect, useState } from "react";
import Input from "../components/input/Input";

export default function Home(){

    const [data,setData]=useState("")
    const [showPass,setShowPass]=useState(false)

    useEffect(() => {
        console.log(data)
    }, [data]);

    const handleClick=()=>{
        console.log("FUNCIONÓ")
    }

    return(
        <div>
            <Input placeholder={"Correo electronico"} error={true} pass={false} showPass={showPass} setShowPass={setShowPass}/>
            <Input placeholder={"Correo electronico"} error={true} pass={true} showPass={showPass} setShowPass={setShowPass}/>
        </div>
    )
}