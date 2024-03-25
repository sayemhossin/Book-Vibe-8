export const setDataToLS = (data)=>{
   const setData = JSON.parse(localStorage.getItem('card')) ||[]
   const isExists = setData.find((item)=>item.id == data.id)
   if(!isExists){
    setData.push(data)
    localStorage.setItem("card", JSON.stringify(setData))
   }
   else{
    alert('have')
   }
}