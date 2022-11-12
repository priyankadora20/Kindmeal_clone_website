import { Get, Search, Success } from "./Types"
import axios from "axios"
let successdata=(payload)=>{
    console.log(payload)
    return {
        type:Success,
        payload
    }
}
let getsuccess=(payload)=>{
    return{
        type:Get,
        payload
    }
}

let getsearch=(payload)=>{
    return {
        type:Search,
        payload
    }
}


let getdata=()=>(dispatch)=>{
    axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=chicken`)
    .then((res)=>{
        dispatch(getsuccess(res.data.meals))
        // console.log(res.data.meals)

    })
}
export {getdata,successdata,getsearch}