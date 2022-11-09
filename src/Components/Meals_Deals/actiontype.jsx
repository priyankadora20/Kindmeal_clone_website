import { Success } from "./Types"

let successdata=()=>(payload)=>{
    return {
        type:Success,
        payload
    }
}
export {successdata}