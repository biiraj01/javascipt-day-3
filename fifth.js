let n = prompt("Enter a number of index in an array:");
let arr=[];
for(let i=0; i<n; i++)
{
    arr[i]=i+1;
}
console.log(arr);
const sum = arr.reduce((prev, current)=>{
    return prev + current;
});

const product = arr.reduce((prev, current)=>{
    return prev*current;
});


 console.log(`The sum of all the items in an array is ${sum}`);
 console.log(`The product of all the items in an array is ${product}`);