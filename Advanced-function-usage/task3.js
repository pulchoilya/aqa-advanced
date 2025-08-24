/*
Завдання 3

Створіть функцію divide, яка приймає два параметри: numerator і denominator та повертає як результат виконання число отримане від ділення.
У функції треба поділити numerator на denominator і повернути результат.
Додайте валідацію в функції. У разі,
якщо denominator дорівнює 0
або хоча б один з аргументів не є числом, викиньте помилку з інформативним повідомленням,
Викличте функцію divide з різними значеннями numerator і denominator, включаючи випадок, коли denominator дорівнює 0 або один з аргументів не є числом.
Огорніть кожен окремий виклик функції divide в try…catch.Використовуючи блок finally, виведіть повідомлення "Робота завершена" в консоль, навіть якщо помилка виникла або не виникла.
*/


function divide(numerator, denominator) {
  try {
    // check that both arguments are numbers
    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
      throw new Error('Both arguments must be numbers');
    }

    // checking division by 0
    if (denominator === 0) {
      throw new Error('Cannot divide by zero');
    }

    // return result
    const result = numerator / denominator;
    const rounded = Number(result.toFixed(2)); 
    console.log(`Result of ${numerator} / ${denominator} = ${rounded}`);
    return rounded;
  } catch (error) {
    console.error(`Error: ${error.message}`);
  } finally {
    console.log('Робота завершена\n');  // 'n' for the next output started on a new line.
  }  
}

// tests 
divide(10, 2); // Result: 5
divide(7, 3);  // Result: 2.33
divide(5, 0);  // Error: Cannot divide by zero
divide(5, 'a'); // Error: Both arguments must be numbers