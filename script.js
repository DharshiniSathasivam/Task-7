let xhr =new XMLHttpRequest();
console.log(xhr);
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload=function(){
    const data=JSON.parse(xhr.response);
    console.log(data);
    console.log(xhr.status);
// FOR EACH
    data.forEach((value)=>{
        console.log(`
         Name:${value.name.common} 
         Capital:${value.capital}
         Flag:${value.flags.svg}
        `)
    })
    // filter function
   const FilterArray =data.filter((value)=>value.region==="Asia");
//    console.log(FilterArray);
   FilterArray.forEach((value)=>{console.log(`region:${value.name.common}`)})

   //population
   const PopulationArray =data.filter((value)=>value.population<200000);
   console.log(PopulationArray);
   PopulationArray.forEach((value)=>{console.log(`population:${value.name.common}`)})
 //reduce function
 const Overall =data.reduce((acc,value)=>{
   return acc + value.population
 },0);
   console.log("Totall population:",Overall);
 //
const USD =data.filter(value=>{
    for(let item in value.currencies){
        if(value.currencies[item].name==="United States dollar"){
            console.log(`currency: ${value.name.common}`);
        }
    }
});
   
}