
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
            const v1=finalVal[0].market_cap_rank;
            const v2=finalVal[0].name;
            const v3=finalVal[0].symbol;
            const v4=finalVal[0].current_price;
            const v5=finalVal[0].high_24h;
            const v6=finalVal[0].low_24h;
            const v7=Math.floor(finalVal[0].price_change_24h);

            // console.log(v7);
            // console.log(v6);
            // console.log(v5);
            // console.log(v4);
            // console.log(v3);
            // console.log(v2);
            // console.log(v1);

            
            let imgURL =finalVal[0].image;

            //printing all value to the html
            const coin =`
            <div id="showPort">
                <p>${v1}</p>
                <img src="${imgURL}" alt="">
                <p>${v2}</p>
                <p>${v3}</p>
                <p>$ ${v4}</p>
                <p>$ ${v5}</p>
                <p>$ ${v6}</p>
                <p>$ ${v7}</p>
            </div>`
            
            ulist.innerHTML += coin;

        }



    }
    catch(err){
        console.log(err);
    }  
} 

getStat();

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=Ethereum&x_cg_demo_api_key=CG-8EMSC7NKE3eUoXmSgfkEFy3W

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum&x_cg_demo_api_key=CG-8EMSC7NKE3eUoXmSgfkEFy3W