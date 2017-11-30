var products = [ { name: "Grapefruit", calories: 170, color: "red", sold: 8200 },
                 { name: "Orange", calories: 160, color: "orange", sold: 12101 },
                 { name: "Cola", calories: 210, color: "caramel", sold: 25412 },
                 { name: "Diet Cola", calories: 15, color: "caramel", sold: 43922 },
                 { name: "Lemon", calories: 200, color: "clear", sold: 14983 },
                 { name: "Raspberry", calories: 180, color: "pink", sold: 9427 },
                 { name: "Root Beer", calories: 200, color: "caramel", sold: 9909 },
                 { name: "Water", calories: 0, color: "clear", sold: 62123 }
               ];

function compaire1(a,b){
  if(a.sold>b.sold){return 1;}
  else if (a.sold===b.sold){return 0;}
  else {return -1;}
}
function compaire2(a,b){
  if(a.name.toUpperCase()>b.name.toUpperCase()){return 1;}
  else if (a.name.toUpperCase()===b.name.toUpperCase()){return 0;}
  else {return -1;}
}

function sorteer(array,property){
array[0][property].substring?array.sort(compaire2):array.sort(compaire1);
}
sorteer(products,"sold")

console.log(products);
products.map((v,i,a)=>console.log(a));