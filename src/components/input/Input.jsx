import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function Input({ placeholder,error,pass,showPass,setShowPass}) {
    return (
        <div className={`
                containerInput
                ${error?"error":""}
            `}
        >
            <input 
                type={!pass ? "text" : showPass?"text":"password"}
                placeholder={placeholder}
            />
            {!pass ? <></> :
                pass && !showPass ?
                <Visibility onClick={()=>setShowPass(!showPass)}/>
                : 
                <VisibilityOff onClick={()=>setShowPass(!showPass)}/>
            }
        </div>
    )
}