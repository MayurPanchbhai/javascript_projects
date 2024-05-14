
let ulist=document.getElementById("list");
const APIKey ="CG-8EMSC7NKE3eUoXmSgfkEFy3W"

// let coinID ="ethereum"

const arr=["bitcoin","ethereum","tether","binancecoin","solana","ripple","dogecoin"];

// let URL=`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinID}&x_cg_demo_api_key=${APIKey}`;
// console.log(URL);
async function getStat(){

    try{
        

        for (ele of arr){
            const rawVal = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ele}&x_cg_demo_api_key=${APIKey}`);

            const finalVal =await rawVal.json();


            
            // console.log(ele);
            console.log(finalVal[0].id);
            console.log(finalVal[0].name);
            console.log(finalVal[0].current_price);
            console.log(finalVal[0].total_volume);
            console.log(finalVal[0].high_24h);
            console.log(finalVal[0].low_24h);

            
            let imgURL =finalVal[0].image;

            // universal var
            // let itme = `0.${}`

            // variable for all data 
            // const rank=

            //printing all value to the html
            // const coin =`
            // <div>
            //     <p>market_cap_rank": 1</p>
            //     <img src="{imgURL}" alt="">
            //     <p>name/bitcooin</p>
            //     <p>symbol/BTC</p>
            //     <p>price</p>
            //     <p>high_24h</p>
            //     <p>low_24h</p>
            //     <p>price_change_24h</p>
            // </div>`
            
            // ulist.innerHTML += coin;

        }



    }
    catch(err){
        console.log(err);
    }  
} 

getStat();

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=Ethereum&x_cg_demo_api_key=CG-8EMSC7NKE3eUoXmSgfkEFy3W

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum&x_cg_demo_api_key=CG-8EMSC7NKE3eUoXmSgfkEFy3W