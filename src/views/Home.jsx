import { useEffect, useState } from "react";
import Input from "../components/input/Input";
import Button from "../components/button/Button";
import Loader from "../components/loader/loader";

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
            <Input placeholder={"Correo electronico"} error={false} setData={setData}/>
            <Input placeholder={"Correo electronico"} error={true} pass={true} showPass={showPass} setShowPass={setShowPass} setData={setData}/>

            <Button width={360} status={true} text={"Siguiente"} handleClick={handleClick}/>
            <Loader/>
        </div>
    )
}