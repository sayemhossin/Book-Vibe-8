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
export const setDataToLS2 = (data)=>{
   const setData2 = JSON.parse(localStorage.getItem('card2')) ||[]
   const isExists = setData2.find((item)=>item.id == data.id)
   const isExistsInRead = getDataFromLS().find((item) => item.id === data.id);
   if(!isExists && !isExistsInRead){
    setData2.push(data)
    localStorage.setItem("card2", JSON.stringify(setData2))
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

export const getDataFromLS2 = ()=>{
    const data =JSON.parse( localStorage.getItem('card2')) || []
    return data
}