/*Завдання 1

Створіть функцію handleNum яка буде приймати 3 параметри.
число
Колбек функцію яку треба викликати якщо передане число парне
Колбек функцію яку треба викликати якщо передане число непарне
Створіть ще дві функції які ви будете передавати у якості колбеків, наприклад handleEven та handleOdd. Кожна з них має виводити просте повідомлення в консоль. Наприклад handleEven буде виводити текст “number is even”, a handleOdd буде виводити текст “number is odd”
Викличте функцію handleNum і передайте в якості аргументів довільне число і дві функції які ви створили раніше*/


function handleNum(number, handleEven, handleOdd) {
  if (number % 2 === 0) {
    handleEven(); 
  } else {
    handleOdd();  
  }
}

function handleEven() {
  console.log("number is even");
}


function handleOdd() {
  console.log("number is odd");
}

handleNum(6, handleEven, handleOdd); 
handleNum(3, handleEven, handleOdd); 


console.log('my own "Second option"')
//  --- Also working code but slightly different from the conditions of the task
function handleNumOneCallback (number, callback ) {
    let paired = number % 2 === 0
    let unpaired = number % 2 !== 0
    callback(paired, unpaired);
}

handleNumOneCallback(3, function(paired, unpaired) {
  console.log("Result:");   
  console.log("Чётное?", paired);
  console.log("Нечётное?", unpaired);  
});

handleNumOneCallback(6, function(paired, unpaired) {
  console.log("Result:");   
  console.log("Чётное?", paired);
  console.log("Нечётное?", unpaired);  
});
