import { Get, Restaurant, Search, Success,Menu,Button } from "./Types"
import axios from "axios"
// import { Button } from "@chakra-ui/react"
// import { Menu } from "@chakra-ui/react"
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

let Restaurantdata=(payload)=>{
    return{
        type:Restaurant,
        payload
    }
}

let Menumaindata=(payload)=>{
    return {
        type:Menu,
        payload
    }
}

let Buttonmaindata=(payload)=>{
    return {
        type:Button,
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


let Buttondata=(payload)=>(dispatch)=>{
    axios.get(`https://www.themealdb.com/api/json/v1/1/${payload}`)
    .then((res)=>{
        dispatch(Buttonmaindata(res.data.meals))
    })
    .catch((e)=>{
        console.log("error occured")
    })
}



let Menudata=()=>(dispatch)=>{
    console.log("theja")
    axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=c`)
    .then((res)=>{
       dispatch(Menumaindata(res.data.meals))
    })
}
export {getdata,successdata,Buttondata,getsearch,Restaurantdata,Menudata}