// TASK 01
let begRange = Number(prompt("Введіть початок діапазону", ""));
let endRange = Number(prompt("Введіть кінець діапазону", ""));
let sum = 0;

while (begRange <= endRange) {
  sum += begRange;
  begRange++;
}

console.log(sum);

// TASK 02
let a = Number(prompt("Введіть перше число", ""));
let b = Number(prompt("Введіть друге число", ""));
let largDiv = function (a, b) {
  if (!b) {
    return a;
  }
  return largDiv(b, a % b);
};

// TASK 03
let num = Number(prompt("Введіть число", ""));
let arr = [];

for (let i = 0; i <= num; i++) {
  if (num % i == 0) {
    arr.push(i);
  }
  console.log(`Всі дільники числа ${num} це ${arr}`);
}

// TASK 04
let num1 = prompt("Введіть число", "");

function countDigits(n) {
  for (var i = 0; n > 1; i++) {
    n /= 10;
  }
  return i;
}
console.log(`Число ${num1} має ${countDigits(num1)} цифри`);
