// ----- 1 и 2 задания -----
let name = 'Магомед'; // строчный тип данных
// ----- 3 задание -----
const age = 18; // числовой тип данных
// ----- 4 задание -----
if (age < 15){
    console.log('доступ запрещен');
} else {
    console.log(`Привет ${name}`);
}
// ----- 5 задание -----
function viewMoney(){
    console.log('Вот вам 10$');
}
viewMoney();
// ----- 6 задание -----
function getMoney(){
    return viewMoney();
}
getMoney();
// ----- 7 задание -----
function getMoney(cash){
    return `Вот вам ${cash}$`;
}
console.log(getMoney(121))
// ----- 8 задание -----
function num(x){
    console.log(x*x)
}
num(2);
// ----- 9 задание -----
function numbers(num1, num2, num3){
    if (num1 > num2 && num1 > num3){
        console.log(num1);
    } else if (num2 > num1 && num2 > num3) {
        console.log(num2);
    } else if(num3 > num1 && num3 > num2){
        console.log(num3);
    }
}
numbers(310, 21, 120);
// ----- 10 задание -----
function diskriminant(a, b, c){
    console.log(b**2 - 4*a*c)
}
diskriminant(7, 11, 4);
// ----- 11 задание -----
function task(task1, task2){
    if (task1 % 2 === 0 && task2 % 2 === 0){
        return task1 * task2
    } else if (task1 % 2 !== 0 && task2 % 2 !== 0){
        return task1 + task2
    } else if (task1 % 2 === 0 && task2 % 2 !== 0){
        return task2;
    } else if (task2 % 2 === 0 && task1 % 2 !== 0){
        return task1;
    }
}

console.log(task(8, 2))