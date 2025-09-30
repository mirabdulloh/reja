// / A task :

// const countLetter = function(a,b){
//     let count = 0;
//     for(i=0; i<b.length; i++){
//         if(b[i] === a){
//             count++
//         }
//     }
//     console.log(count);
    
// }
// countLetter("e","engineer")

// / Task B
// const countDigits = function(a){
//     let count = 0;
//     for(i=0; i<a.length; i++){
//         if("0" <= a[i] && a[i] <= "9"){
//             count++
//         }
//     }
//     console.log(count);
    
// }
// countDigits("ad2a54y79wet0sfgb99hhhh888")


// Task C
const moment = require("moment");

class Shop {
  constructor(non, lagmon, cola) {
    this.non = non;
    this.lagmon = lagmon;
    this.cola = cola;
  }

  getTime() {
    return moment().format("HH:mm");
  }

  qoldiq() {
    console.log(
      `Hozir ${this.getTime()}da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud!`
    );
  }

  sotish(product, amount) {
    if (this[product] !== 0) {
      this[product] -= amount;
      console.log(
        `Hozir ${this.getTime()}da ${amount}ta ${product} sotildi.`
      );
    } else {
      console.log(`${product} mavjud emas!`);
    }
  }

  qabul(product, amount) {
    if (this[product] !== 0) {
      this[product] += amount;
      console.log(
        `Hozir ${this.getTime()}da ${amount}ta ${product} qabul qilindi.`
      );
    } else {
      console.log(`${product} mavjud emas!`);
    }
  }
}

// Test
const shop = new Shop(4, 5, 2);
shop.qoldiq();
shop.sotish("non", 3);
shop.qabul("non", 4);
shop.qoldiq();


// console.log("Jack Ma Maslahatlari");

// const list = [
//     "yaxshi talaba boling", // 0-20
//     "togri boshliq tanlang va koproq hato qiling", // 20-30
//     "uzingizga ishalashni boshlang", //30-40,
//     "siz kuchli bolgan narsalarni qiling", // 40-50
//     "yoshlarga invistitsiya qiling", //50-60
//     "endi dam oling, foydasi yoq", //60 ~
// ]


// Callback function 
// function maslahatBering(a, callback){
//     if( typeof a !== "number") callback("insert a number", null);
//     else if(a <= 20) callback(null, list[0]);
//     else if(a > 20 && a <=30) callback(null, list[1]);
//     else if(a > 30 && a <=40) callback(null, list[2]);
//     else if(a > 40 && a <=50) callback(null, list[3]);
//     else if(a > 50 && a <=60) callback(null, list[4]);
//     else{
//         setTimeout(function(){
//             callback(null,list[5])
//         }, 5000)
//     }
// }

// console.log("passed here:0");
// maslahatBering(90, (err,data) =>{
//     if(err){
//         console.log("error:",err);
//     }else{
//         console.log("result:",data);
        
//     }
// });
// console.log("passed here 1");



// Async function

// async function maslahatBering(a){
//     if( typeof a !== "number") throw new Error("insert a number");
//     else if(a <= 20) return list[0];
//     else if(a > 20 && a <=30) return list[1];
//     else if(a > 30 && a <=40) return list[2];
//     else if(a > 40 && a <=50) return list[3];
//     else if(a > 50 && a <=60) return list[4];
//     else{
//         return new Promise ((resolve, reject) =>{
//             setTimeout(()=>{
//                 resolve(list[5])
//             },5000)
            
//         });
//         // setTimeout(function(){
//         //     return list[5];
//         // }, 5000)
//     }
// }

///// then()/catch()
// console.log("passed here:0");
// maslahatBering(65) 
//     .then(data =>{
//     console.log("result:",data);
//     }).catch(err =>{
//     console.log("error:", err);
//     });
// console.log("passed here 1");



// await method
// async function run() {
//     let result = await maslahatBering(20);
//     console.log(result);
//     result = await maslahatBering(30);
//     console.log(result);
//     result = await maslahatBering(70);
//     console.log(result);
//     result = await maslahatBering(15);
//     console.log(result);
// }
// run()



// Callback function  with setinterval
// function maslahatBering(a, callback){
//     if( typeof a !== "number") callback("insert a number", null);
//     else if(a <= 20) callback(null, list[0]);
//     else if(a > 20 && a <=30) callback(null, list[1]);
//     else if(a > 30 && a <=40) callback(null, list[2]);
//     else if(a > 40 && a <=50) callback(null, list[3]);
//     else if(a > 50 && a <=60) callback(null, list[4]);
//     else{
//         setInterval(function(){
//             callback(null,list[5])
//         }, 5000)
//     }
// }

// console.log("passed here:0");
// maslahatBering(90, (err,data) =>{
//     if(err){
//         console.log("error:",err);
//     }else{
//         console.log("result:",data);
        
//     }
// });
// console.log("passed here 1");







