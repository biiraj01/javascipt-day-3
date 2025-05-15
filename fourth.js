// function vowelCount(str)
// {
//     let len=0;
//     for(let i=0; i<str.length; i++)
//     {
//         if(str[i]=='a'|| str[i]=='e' || str[i]== 'i' || str[i]== 'o' || str[i]== 'u')
//         {
//             len=len + 1;
//         }
//     }
//     console.log(`The number of vowel letters in string is ${len}`);
// }

const vowelCount = (str) =>{
    let len =0;
    for(let i=0; i<str.length; i++)
    {
         if(str[i]=='a'|| str[i]=='e' || str[i]== 'i' || str[i]== 'o' || str[i]== 'u')
        {         
         len=len + 1;
        }
    }
    console.log(`The number of vowel letters in string is ${len}`);
}