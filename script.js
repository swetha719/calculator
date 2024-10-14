const displayContent=(content)=>{
    output.value+=content

}

showResult=()=>{
   try{
    output.value=eval(output.value)
   }
   catch{
    output.value=""
    output.placeholder="Invalid Expression"
   }
}
clearAll=()=>{
    output.value=""
    output.placeholder="0"
}
deleteItem=()=>{
    output.value=output.value.slice(0,-1)
}
