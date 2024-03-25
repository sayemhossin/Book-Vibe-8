import { toast } from "react-toastify"

export const setDataToLS = (data)=>{
   const setData = JSON.parse(localStorage.getItem('card')) ||[]
   const isExists = setData.find((item)=>item.id == data.id)
   if(!isExists){
    setData.push(data)
    localStorage.setItem("card", JSON.stringify(setData))
    toast.success('Added Successfully')
   }
   else{
   toast.warn('Already added')
   }
}

export const getDataFromLS = ()=>{
    const data =JSON.parse( localStorage.getItem('card')) || []
    return data
}