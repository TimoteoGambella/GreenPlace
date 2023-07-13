import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function Input({ placeholder,error,pass,showPass,setShowPass,extraClass,setData}) {
    return (
        <div 
            id="inputContainer"
            className={`
                containerInput ${extraClass}
                ${error?"error":""}
            `}
        >
            <input 
                type={!pass ? "text" : showPass?"text":"password"}
                placeholder={placeholder}
                onChangeCapture={(e)=>setData(e.target.value)}
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