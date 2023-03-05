// let money =0;
// let savedMoney=0;
// function moneyBox(savedMoney1){
//     savedMoney += savedMoney1;
//     return console.log(savedMoney)
// }

// moneyBox(5);
// moneyBox(43);
// moneyBox(9);
// moneyBox(5);
// moneyBox(4);


function myMoneyBox(){
    let moneySaved =0 ;
    function sumMoney(coins){
        moneySaved += coins;
        return console.log(moneySaved);
    }
    return sumMoney;
}

const roggerBox = myMoneyBox();
console.log(roggerBox);

roggerBox(5);
roggerBox(9);
roggerBox(24);

// [Function: sumMoney]
// 5
// 14
// 38

console.log('Ahorro Marcia');
const marciaMoneyBox = myMoneyBox();
marciaMoneyBox(4);
marciaMoneyBox(23);
marciaMoneyBox(9);
marciaMoneyBox(10);


function createPetList() {
    // Tu código aquí 👈
    const petList = [];
    function addPet(pet) {
        if (pet){
            petList.push(pet)
            
        }
        return console.log(petList)      
    }
    return addPet;
  }

const myPetList = createPetList();

myPetList("michi");

myPetList("firulais");

myPetList();