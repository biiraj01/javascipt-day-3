let companies =["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(companies);

let deletedItem = companies.shift();

console.log(deletedItem);
console.log(companies);

companies.splice(1,1,"Ola");

companies.push("Amazon");
console.log(companies);
