async function printUpdate(){
    const apiURL="d52f1e5361864f91fa1a43349a4858a9";
    const loca=document.getElementById("address").value;
    if(!loca){
        alert("enter city");
    }
    // const loca ="Nagpur"

    try{
        const rawData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loca}&appid=${apiURL}`);
        const finalData = await rawData.json();

        console.log(finalData);
        printDataToPage(finalData);
        
    }
    catch(err){
        console.log(err);
    }


}

function printDataToPage(data){
    const pp =data.main.pressure;

    console.log(pp);
}