let price = [250, 645, 300, 900, 50];
// for(let value of price)
// {
//     let offer=0.1*value;
//     value = value-offer; 
//     console.log(value);
//     value=0;
// }

for(let i=0; i<price.length; i++)
{
    let offer =0.1*price[i];
    price[i]= price[i]-offer;
    console.log(price[i]);
}